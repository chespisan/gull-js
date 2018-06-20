/** Programacion orientada a objetos */


/** Interfases
 * es un contrato en el que definimos que propiedades y mètodos obloigatorios va tener una clase, la clase obligatoriamente tiene que tener esas propiedades e interfases,
 * las podemos añadir a nuestra clase con implement
 */

 interface ICamisetaBase{
     setColor(color);
     getColor();
 }

/** Decoradores
 * es un patron de diseño que nos permite mediuante unos metadatos que le definamos a una clase hacer una copia a esa y modificarla
 *  adicionar una funcionalidad extra alguna clase
 * implementsacion de una funcion que pasamos como aprametro de otra  para agregar una funcionalidad extra a una clase sin mdoficiarla a ella
 * una vez se define, se crea el decorador, o en caso de angular utilizar por defecto los decoradores de los componentes
 * se  coloca arriba de una clase con un @seguido del nombre,
 * en el ejemplo de abajo seria @estampar('Gucci Gang')
 */

function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function(): void {
            console.log(`Camiseta estampada con el logo de ${logo}`);
        }
    }
}

/** clases
 * molde - del objeto sobre el cual se peude crear un objeto
 * propiedaes -> caracteristicas del objeto
 * métodos -> funciones de accion sobre el objeto
 */

 // decorador de prueba
 @estampar('Gucci Gang')
 class Camiseta implements ICamisetaBase{
     // constructor de la clase
     constructor(
        // propiedades 
        public color,
        public modelo,
        public marca,
        public talla,
        public precio 
    ){}

    // métodos
    setColor(color) {
        this.color = color;
    }

    getColor(){
        return this.color
    }
 }

const playera = new Camiseta('rojo',2565,'nike','l','$30.000');
console.log(playera)
playera.setColor('azul');
console.log(playera.getColor());

/** Herencia
 * se heredara todos las propiedades y métodos de una clase padre a una hijo o de una a otra etc
 * extends
 */

 class Sudadera extends Camiseta{
     constructor( // propiedades 
        public color,
        public modelo,
        public marca,
        public talla,
        public precio ){
         super(color, modelo,marca,talla,precio);
     }
 }

 const suda = new Sudadera('verde', 3256, 'adidas','xl', '$200.000');
 console.log(suda)
playera.setColor('naranja');
console.log(playera.getColor());