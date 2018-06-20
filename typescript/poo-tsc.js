/** Programacion orientada a objetos */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/** Decoradores
 * es un patron de diseño que nos permite mediuante unos metadatos que le definamos a una clase hacer una copia a esa y modificarla
 *  adicionar una funcionalidad extra alguna clase
 * implementsacion de una funcion que pasamos como aprametro de otra  para agregar una funcionalidad extra a una clase sin mdoficiarla a ella
 * una vez se define, se crea el decorador, o en caso de angular utilizar por defecto los decoradores de los componentes
 * se  coloca arriba de una clase con un @seguido del nombre,
 * en el ejemplo de abajo seria @estampar('Gucci Gang')
 */
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de " + logo);
        };
    };
}
/** clases
 * molde - del objeto sobre el cual se peude crear un objeto
 * propiedaes -> caracteristicas del objeto
 * métodos -> funciones de accion sobre el objeto
 */
// decorador de prueba
var Camiseta = /** @class */ (function () {
    // constructor de la clase
    function Camiseta(
    // propiedades 
    color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    // métodos
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estampar('Gucci Gang')
    ], Camiseta);
    return Camiseta;
}());
var playera = new Camiseta('rojo', 2565, 'nike', 'l', '$30.000');
console.log(playera);
playera.setColor('azul');
console.log(playera.getColor());
/** Herencia
 * se heredara todos las propiedades y métodos de una clase padre a una hijo o de una a otra etc
 * extends
 */
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(// propiedades 
    color, modelo, marca, talla, precio) {
        var _this = _super.call(this, color, modelo, marca, talla, precio) || this;
        _this.color = color;
        _this.modelo = modelo;
        _this.marca = marca;
        _this.talla = talla;
        _this.precio = precio;
        return _this;
    }
    return Sudadera;
}(Camiseta));
var suda = new Sudadera('verde', 3256, 'adidas', 'xl', '$200.000');
console.log(suda);
playera.setColor('naranja');
console.log(playera.getColor());
