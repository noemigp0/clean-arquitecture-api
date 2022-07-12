const mongoose = require('mongoose')

const MentorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true,
    },
    modulo: {
        type: String,        
    },
    grupos: {
        type: [String]
    },
    genero: {
        type: String,
        enum: ['f','m', 'o']
    }
})

const Mentor = mongoose.model("mentors", MentorSchema)
module.exports = Mentor