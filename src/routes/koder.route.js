const express = require('express')
const { getAll, getById} = require('../usecases/koder.usecase')
const router = express.Router()


router.get('/', async (request, response) => {
    try {
    const koders = await getAll();

    response.json({
        success: true,
        data: koder
    })
} catch(err) {
    response.status(400)
    response.json({
        success: false,
        message: err.message
    })
} 
})

module.exports = router