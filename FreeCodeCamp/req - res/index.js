const HTTP = require('http');
const PORT = 3000;
const SERVER = HTTP.createServer((req, res) => {

    cl('===> req (respuesta)');    
    cl(res.statusCode); //200 OK

    res.setHeader('content-type', 'application/json');
    cl(res.getHeaders());
    

});

SERVER.listen(PORT, function(){
    console.log(`Servidor escuchando por el puerto ${PORT} ...`);
})
function cl(param){
    return console.log(param);
}