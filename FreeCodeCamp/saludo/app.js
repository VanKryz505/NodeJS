//Para importar funciones especificas de un módulo basta con expresar un array y el nombre de las funciones separado por comas
const {saludarHolaMundo,saludar} = require("./saludo.js")

console.log(saludar("Emmanuel"));
console.log(saludarHolaMundo());