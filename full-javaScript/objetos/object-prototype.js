/** Objecots protitype */

// funciones clases -> antes de es6
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo
}
// crear un prototype
Cliente.prototype.tipoCliente = function tipoCliente() {
    let tipo;
    if (this.tipo > 1000) {
        tipo = 'gold'
    } else if (this.saldo > 500) {
        tipo = 'patinum'
    }
    return tipo;
};

// instancia object
const cliente1 = new Cliente('sergio', 700);
console.log(cliente1)
console.log(cliente1.tipoCliente())

// HERENCIA 
function Empresa(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono

}

// herencia de prototypes
Empresa.prototype = Object.create(Cliente.prototype);
// instancia object
const empresa = new Empresa('udemy', 875763, 300768994);
console.log(empresa)

/** Object create
 * forma de crear nuyevo sobjetos con el Object
 */

 // Object create
 const Client = {
     imprimirSaldo: function(){
         return `Hola ${this.name} tu saldo es de ${this.sald}`
     },
     retirarSaldo: function(retiro){
         return this.sald -= retiro
     }
 }

 // crear objeto
 const aleja = Object.create(Client);
 aleja.name = 'Alejandra';
 aleja.sald = 2000;

 console.log(aleja);
 console.log(aleja.imprimirSaldo())
 console.log(aleja.retirarSaldo(500))