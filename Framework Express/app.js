const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const {infoCursos} =  require('./cursos');


//Routing
app.get('/',(req, res) => {
    res.send('The server is online. Cursos ')
});

app.get('/api/cursos', (req,res) => {
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});

app.listen(PORT, () => {
    cl(`El servidor esta escuchando en el puerto ${PORT}`)
});

function cl(obj){
    return console.log(obj);
}