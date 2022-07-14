const express = require('express')
const routerKoders = require('./routes/koder.route')
const routerMentors = require('./routes/mentor.route')
const routerUsers = require('./routes/user.route')
const routerAuth = require('./routes/auth.route')
const app = express();
const cors = requiere('cors')
//Middleware, aqui van todos los middlewares
app.use(cors())
app.use(express.json());


//Middleware global
app.use((request, response, next) => {
  console.log(request.method,"Estamos pasando por un middleware")  
  next()
})

//Middleware de koders
app.use('/koders',routerKoders)
//Middleware de mentors
app.use('/mentors',routerMentors)
app.use('/users', routerUsers)
app.use('/login', routerAuth)



//endpoint
app.get('/', (request, response) => {
  response.json({
    message: 'Endpoint de Home, Bienvenido a nuestra API de clean arquitecture',
  });
});

//Exportar
//module--> Solo permite exportar una cosa
module.exports = app;
