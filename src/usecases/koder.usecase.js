const Koder = require('../models/koder.model')
const createError = require('http-errors')

const getAll = () =>{
    const koders =  Koder.find({})
    return koders
}

const getById = async (id) => {
    const koder = await Koder.findById(id)
    if(!koder) {
        const error = createError(404, "Koder no encontrado")//es como un return
        throw error
    }
   
    return koder
}

const create =  (koderData) => {
    const newKoder =  Koder.create(koderData)
    return newKoder
}

const update =  (id, koderData) => {
    const koderUpd =  Koder.findByIdAndUpdate(id, koderData)
    return koderUpd
}

const drop =  (id) => {
    const deleteKoder =  Koder.findByIdAndDelete(id)
    return deleteKoder
}



module.exports = { getAll, getById, create, update, drop }