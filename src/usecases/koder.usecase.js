const Koder = require('../models/koder.model')

const getAll = async () =>{
    const koders = await Koder.find({})
    return koders
}

const getById = async () => {
    const koder = await Koder.findById()
    return koder
}


module.exports = { getAll, getById}