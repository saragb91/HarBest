require("dotenv").config();

const express = require("express");
const app = express();

//CONFIGS
require("./configs/mongoose.config");
require("./configs/middleware.config")(app);
require("./configs/session.config")(app);

//ROUTES
app.use("/api/list", require("./routes/productList.routes"));

app.use((req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
