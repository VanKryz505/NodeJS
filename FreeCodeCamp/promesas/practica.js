const statusPedido = () =>{
    return  Math.random() < 0.8;
}

const miPedidoDePizza = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(statusPedido()){
            resolve('Pedido exitoso pizza en camino!');
        }else{
            reject('Algo salio mal')
        }
    },1500)
});
/*
const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
};

miPedidoDePizza.then(manejarPedido,rechazarPedido);
*/
//ENCADENAMIENTO DE METODOS
miPedidoDePizza
.then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
})
.catch((mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
} )

/*
EN LUGAR DE AGREGAR OTRO BLOQUE .THEN POR LA FUNCION CATCH PARA EL MANEJO DE ERRORES
.then(null,(mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
} )
*/
