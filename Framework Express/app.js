const { application } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const {infoCursos} =  require('./datos/cursos');
const routerMatematicas = require('./routers/matematicas.js');
const routerProgramacion = require('./routers/programacion.js')

//Routers
app.use('/api/cursos/programacion/', routerProgramacion);
app.use('/api/cursos/matematicas',routerMatematicas);

//Routing
app.get('/',(req, res) => {
    res.send('The server is online. Cursos ')
});

//Obtiene todos los cursos
app.get('/api/cursos', (req,res) => {
    res.send(JSON.stringify(infoCursos));
});

//Setea el puerto por el que escucha el server
app.listen(PORT, () => {
    cl(`El servidor esta escuchando en el puerto ${PORT}`)
});

//Muestra los mensajes en consola
function cl(obj){
    return console.log(obj);
}

