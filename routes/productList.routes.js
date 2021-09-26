const express = require("express");
const router = express.Router();

const Products = require("../models/Products");

router.post("/newProduct", (req, res, next) => {
  Products.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => next(err));
});

router.put("/updateProduct/:id", (req, res) => {
  const id = req.params.id;
  Products.findByIdAndUpdate(id, req.body, { new: true }, (err, doc) => {
    Products.find({}, function (err, products) {
      if (err) {
        res
          .status(500)
          .send({ message: `Error al borrar el producto. ${err}` });
      } else {
        res.json(products);
      }
    });
  });
});

router.delete("/removeProduct/:id", (req, res) => {
  const productId = req.params.id;
  Products.findOneAndRemove({ _id: productId }, (err) => {
    Products.find({}, function (err, products) {
      res.json(products);
    });
  });
});

router.get("/filteredProductList", async (req, res, next) => {
  const pageSize = 5;
  const page = parseInt(req.query.page || 0);
  const total = await Products.countDocuments({});

  await Products.find()
    .limit(pageSize)
    .skip(pageSize * page)
    .then((products) =>
      res.json({ totalPag: Math.ceil(total / pageSize), products })
    )
    .catch((err) => next(err));
});

module.exports = router;
