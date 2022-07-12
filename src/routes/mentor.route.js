const express = require('express')
const { getAll, getById, create, updateById, deleteById} = require('../usecases/mentor.usecase')
const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const mentors = await getAll();
        response.json({
            success: true,
            data: {
                mentors
            }
        })
    } catch(error) {
        response.status(400)
        response.json({
            succes: false,
            message: error.message
        })

    }
})

router.get('/:id', async (request, response) => {
    const { id } = request.params
    try {
        const mentor = await getById(id);
        response.json({
            success: true,
            data: {
                mentor
            }
        })
    } catch(error) {
        response.status(400)
        response.json({
            succes: false,
            message: error.message
        })

    }
})

router.post('/', async(request, response) => {
    const mentorBody = request.body
    try {
        const newMentor = await create(mentorBody)

        response.json({
            success: true,
            message: 'Nuevo mentor creado',
            data: {
                newMentor
            }
        })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })

    }
})

router.patch('/:id', async (request, response) =>{
    const { id } = request.params
    const mentorBody = request.body

    try {
        const mentorUpdated = await updateById(id, mentorBody)
        response.json({
            success: true,
            message: `Mentor con id ${id} actualizado`,
            data: {
                mentorUpdated
            }
        })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    const {id} = request.params
    try{
       await deleteById(id)
        response.json({
            success: true,
            message: `Mentor con id ${id} eliminado`
        })
    }catch(error) {
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })

    }
})

module.exports = router //este router donde se ocupa, porque se require exportar, donde lo estamos ocupando
