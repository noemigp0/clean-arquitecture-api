require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
  .then(() => {
    console.log('BD connected..');
    server.listen(8080, (request, response) => {
      console.log('Nuestro servidor esta prendido');
    });
  })
  .catch((err) => console.log(`No se pudo conectar a la b.d debido a: ${err}`));


//mongodb+srv://noemigp19:mongo123@kodemia.infez.mongodb.net/kodemia
