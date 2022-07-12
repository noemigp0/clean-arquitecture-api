const express = require('express')
const { getAll, getById, create, update, drop } = require('../usecases/koder.usecase')
const router = express.Router()




router.get('/', async (request, response) => {
    try {
    const koders = await getAll();

    response.json({
        success: true,
        data: {
            koders
        }
    })
} catch(err) {
    response.status(400)
    response.json({
        success: false,
        message: err.message
    })
} 
})

//Getbyid
//koders
router.get('/:id', async (request, response) => {
    const { id } = request.params
    try {

        const koder = await getById(id)
       
        response.json({
            success: true,
            data: {
              koder
            }
          })
        } catch(error) {
          // No se encontro
          response.status(error.status || 500) // Not found
          response.json({
            success:false,
            message: error.message
          })
        }
      })

//koders
router.post('/', async (request, response) => {
    const koder = request.body
    try {
        const newKoder = await create(koder)
        response.json({
            success: true,
            data: {
                newKoder
            }
        })
    } catch (error){
        response.json({
            success: false,
            message: error.message
        })
    }
})


//Ejercicio 1
/*
* Hacer un middleware global
* GET: "Estamos pasando por un middleware"
*/

/*
* Hacer PATCH y delete de koder
*/

router.patch('/:id', async (request,response) => {
    const data = request.body
    const { id } = request.params

    try {
        const newData = await update(id, data)
        response.json({
            success: true,
            data: {
                newData
            }
        })
    } catch( error ) {
        response.status(404)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    const { id } = request.params

    try {
        const idKoder = await drop(id)
        response.json({
            success: true,
            data: {
                idKoder
            }
        })
    } catch( error ) {
        response.status(404)
        response.json({
            success: false,
            message: error.message
        })
    }
})


/**
 * Tarea Hacer la coleccion de mentores
 *  Entities -> Schema -> Model
 *  Usecases
 *  Routes -> 3 endpoints , get, getbyid, create
 *  Middleware que me conecta las rutas
 */
module.exports = router