const express = require("express");
const app = express();
//Middleware, aqui van todos los middlewares
app.use(express.json());

//endpoint
app.get("/", (request, response) => {
  response.json({
    message: "Endpoint de Home, Bienvenido a nuestra API de clean arquitecture",
  });
});

//Exportar
//module--> Solo permite exportar una cosa
module.exports = app;
