const Mentor = require('../models/mentor.model')

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

module.exports = { getAll, getById, create, updateById, deleteById}

