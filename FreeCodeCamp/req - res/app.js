const HTTP = require('http');
const PORT = 3000;
const SERVER = HTTP.createServer((req, res) => {

    cl('===> req (solicitud)');    
    cl(req.url);
    cl(req.method);
    cl(req.headers);
    //console.log(res.end('Hola FreeCodeCamp'));

});

SERVER.listen(PORT, function(){
    console.log(`Servidor escuchando por el puerto ${PORT} ...`);
})

function cl(param){
    return console.log(param);
}