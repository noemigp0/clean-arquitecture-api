const Mentor = require('../models/mentor.model')

const createGen = require('../usecases/generacion.usecase')


const getAll = () => {
    const mentors = Mentor.find({})
    return mentors
}

const getById = (id) => {
    const mentor = Mentor.findById(id)
    return mentor
}

const create = (mentorData) => {
    const newMentor = Mentor.create(mentorData)
    return newMentor
}

const updateById = (id, newMentorData) => {
    const mentorUpdated = Mentor.findByIdAndUpdate(id, newMentorData)
    return mentorUpdated
}

const deleteById = (id) => {
    const mentorToDelete = Mentor.findByIdAndDelete(id)
    return mentorToDelete
}

//Voy a hacer un endpoint donde yo pueda agregar una generacion
//Todas las generaciones que no sea la que le este mandando, tienen que pasar a isActive = false
//Agrego en mis generaciones, la nueva con isActive = true, name, module
//name, module

const changeGeneration = async (id, dataGeneration) => {
    // Paso 1
    console.log(dataGeneration)
    const mentorFound = await Mentor.findOne({ id }) // Encontramos el mentor
  
    // Validar si lo encuentra
    if(!mentorFound) throw createError(404, "Mentor not found")
  
    // Paso 2
    // Si lo encontre, ya manipulamos
    const newGenerations = mentorFound.generations.map((generation) => {
      // Hacer TODAS las generaciones viejitas, isActive == false
      generation.isActive = false
      return generation
    })
  
    // Paso 3
    newGenerations.push({
      name: dataGeneration.name,
      module: dataGeneration.module,
      isActive: true
    })
  
    // Paso 4 
    mentorFound.generations = newGenerations
    console.log(newGenerations)
    // Actualizar en la base de datos
    const updatedMentor = await Mentor.findByIdAndUpdate(id, mentorFound, { returnDocument: "after" })
    
      createGen(newGenerations)
     
    return updatedMentor
  }

module.exports = { getAll, getById, create, updateById, deleteById, changeGeneration, changeGeneration}

