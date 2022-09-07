const HTTP = require('http');

const SERVER = HTTP.createServer((req, res) =>{
    //Proceso
    console.log('Solicitud nueva');
    res.end('Hola Mundo!');
});

const PORT = 3000;

SERVER.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT} ....`);
})