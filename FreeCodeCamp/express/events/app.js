const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProd)=>{
console.log(`Se realizo una compra por $${total}`);
console.log(`Total de productos ${numProd}`);
});

emisorProductos.emit('compra',500,5);