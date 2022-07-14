const express = require("express")
const { getAll, getById, create } = require("../usecases/user.usecase")
const auth = require("../middlewares/auth.middleware")


const router = express.Router();

// Middleware de auth
// router.use(auth)

router.get("/", async (request, response) => {
  try {
    const users =  await getAll();
    response.json({
      success: true,
      data: {
        users
      }
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }


})

router.get("/detail", auth, async (request, response) => {
  try {
    const user =  await getById(request.userId);
    response.json({
      success: true,
      data: {
        user
      }
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.post("/", async (request, response) => {
  try {
    const user =  await create(request.body);
    response.status(201)
    response.json({
      success: true,
      data: {
        user
      }
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router