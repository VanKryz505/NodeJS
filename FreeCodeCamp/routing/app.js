/* MANEJAR LAS SOLICITUDES DEL CLIENTE EN BASE A LOS CRITERIOS ESPECIFICOS A CADA SOLICITUD */
const http = require('http');
const cursos = require('./cursos.js');
const PORT = 3000;

const servidor = http.createServer((req, res) =>{
    const {method} = req;
    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            console.log(`El metodo usado no puede ser manejado por el servidor y el metodos es: ${method}`);
    }
});

servidor.listen(PORT,()=>{
    console.log(`El servidor escucha por el PUERTO ${PORT}`)
});

function manejarSolicitudPOST(req, res){
    const path = req.url;
    if(path === '/cursos/programacion'){
        let cuerpo = '';
        
        req.on('data', contenido =>{
            cuerpo += contenido.toString();

        });

        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            let body = JSON.parse(cuerpo);

            console.log(typeof body);
            console.log(body.titulo);
            res.end('El servidor recibio una solicitud POST para /cursos/programacion');
        })

        //return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    }
}

function manejarSolicitudGET(req, res){
    const path = req.url;
    if(path === '/'){
        res.statusCode =200;
       return res.end('Bienvenidos al Server NODEJS')
    }else if(path === '/cursos'){
        res.statusCode =200;
        return res.end(JSON.stringify(cursos.infoCursos))
    }else if(path === '/cursos/programacion'){
        res.statusCode =200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));        
    }else if(path === '/cursos/matematicas'){
        res.statusCode =200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));
    }else{
        res.statusCode =404;
        return res.end('RESOURCE NOT FOUND 404!')
    }
}