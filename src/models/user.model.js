const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        match: /^.*@.*.\..*$/
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
})