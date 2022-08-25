function mostrarTema(tema){
console.log("Estoy aprendiendo "+tema);
}

function sumar(n1,n2,n3){
    b1 = parseInt(n1);
    b2 = parseInt(n2);
    b3 = parseInt(n3);
    resultado = b1+b2+b3;
    console.log("la suma de los numeros es: "+ resultado);
}

//Funcion, retraso, argumentos separados por ,
setTimeout(sumar,3000,1,2,3);
console.log("Antes del setInmediate");
setImmediate(mostrarTema,'nodejs');
console.log("Despues del setInmediate");

setInterval(mostrarTema, 1500, 'PSINT');