/** FUNCIONES */

// funcion #1
function saludo(){
    return 'Bienvenido';
};
saludo();

// funcion #2 con parametros()
function saludar(nombre){
    console.log(`Bienvenido ${nombre}`);
};
saludar('sergio');

// funcion #3 con parametros opcionales
function saludar2(nombre = 'alejandra') {
    // esta funcion con parametro opcional, podremos enviar si  o no el parametro, si no se envia de igual forma tendra por defecto 
}

// funcion #4 que retorna otra funcion
function nombre(nombre){
    saludo();
};

/*************  Arrow fuction => let, const **************** */

const saludo2 = () => 'bienvenido'; // si no lleva un return ni mas, se puede en una misma linea
saludo2();

const saludar3 = (nombre) => {
    console.log(`Bienvenido ${nombre}`)
}

/** Argumentos y parametros 
 *  parametros: variable local que le pasamos a una funcion cuando la inicializamos
 *  argumento: cunado pasamos un parametro a una funcion y ellala vamos a ejecutar pasamos un argumento qu ehaga referencia a ese parametro 
 */
