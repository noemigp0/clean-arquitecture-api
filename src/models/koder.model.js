const mongoose = require('mongoose')


const koderShema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
      required: true,
    },
    edad: {
      type: Number,
      min: 18,
      max: 150,
    },
    gen: {
      type: String,
      required: true,
    },
    modulo: {
      type: String,
    },
    hobbies: {
      type: [String],
    },
    genero: {
      type: String,
      enum: ['f', 'm', 'o'],
    },
  });
  
  const Koder = mongoose.model("koders", koderShema)

  module.exports = Koder

