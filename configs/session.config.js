const session = require("express-session");
const mongoose = require("mongoose");

module.exports = (app) => {
  // Configuración de sesión
  app.use(
    session({
      secret: "Whatever",
      resave: true,
      saveUninitialized: true,
      // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );
};
