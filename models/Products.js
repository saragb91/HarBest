const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
    },
    product: { type: "string" },
    status: { type: "string" },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("Products", productsSchema);
module.exports = Products;
