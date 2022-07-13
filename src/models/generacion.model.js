const mongoose = require('mongoose')

const GeneracionSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
    },
    module: {
        type: String
    },
    isActive: {
        type: String,
    }
})

const Generacion = mongoose.model("generaciones", GeneracionSchema)
module.exports = Generacion