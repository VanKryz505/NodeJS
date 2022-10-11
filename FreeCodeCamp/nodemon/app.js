const http = require('http');
const PORT = 3000;
const SERVER = http.createServer((req, res) =>{
    res.end('Prueba Nodemon NodeJS!');
});

SERVER.listen(PORT, () => {
    console.log(`El server esta escuchando por el puerto ${PORT}`);
});