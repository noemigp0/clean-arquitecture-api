const jwt = require("../lib/jwt.lib")

const auth = (request, response , next) => {
  try {
    const authorization = request.headers.authorization || ""
    // Quitando Bearer
    const token = authorization.replace("Bearer ", "")

    const verifiedToken = jwt.verify(token)
    console.log("verifiedToken", verifiedToken)

    request["userId"] = verifiedToken.id
    console.log("request userId", request.userId)
    next()
  }catch(error) {
    response.status(error.status || 401)
    response.json({
      success: false,
      error: error.message
    })
  }
  

  // Verificar que el token quwe el frontend nos envie, sea correcto
}

module.exports = auth