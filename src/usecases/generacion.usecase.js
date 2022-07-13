const Generacion = require('../models/generacion.model')

const createGen =  (data) => {
    const newGen =  Generacion.create(data)
    return newGen
}

module.exports = createGen