const fs = require('fs');

//Lectura d eun archivo
fs.readFile('index.html', 'utf-8', (err,contenido) => {
    if(err){
        //throw err;
    }else{
        //console.log(contenido);
    }
});

//Renombra un archivo
fs.rename('index.html', 'main.html', (err) =>{
    if(err){
        throw err;
    }else{
        console.log('Se cambia el nombre');
    }
})

//Agregar contenido al final de un archivo
fs.appendFile('index.html','<p>Hola</p>',(err)=>{
    if(err){
        throw err;
    }else{
        console.log('Archivo Actualizado');
    }
})

//Reemplazar todo el contenido de un archivo
fs.writeFile('index.html','Contenido Nuevo', (err) => {
    if(err){
        throw err;
    }else{
        console.log('Se actualizo el contenido');
    }
})

//Eliminar archivos
fs.unlink('main.html',(err) =>{
    if(err){
        throw err;
    }else{
        console.log('Archivo Eliminado')
    }
})
