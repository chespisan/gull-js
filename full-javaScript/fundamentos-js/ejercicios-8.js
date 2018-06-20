/** Ejercicio 8 */

/**
 * Crear una mini calculadora
 * 1. capturar id de los botones
 * 2. crear la funcionalidad de cada boton
 */

 // capturar id buttons

 var num1 = document.getElementById('num-1');
 var num2 = document.getElementById('num-2');


 // events Buttons
num1.addEventListener('click', () => {
    num1 = parseInt(prompt('Ingrese numero'));
    console.log(num1)

});
num2.addEventListener('click', () => {
    num2 = parseInt(prompt('Ingrese numero 2'));
    console.log(num2)
});

// function of buttons suma, resta, multiplicar, dividir

/** FORMA MAS RAPIDA */
function calucladora(idName){  
    if(idName == 'suma'){
        var resultado = num1 + num2
        console.log(`El resultado de la suma de ${num1} + ${num2} es de: ${resultado}`);
    } else if(idName == 'resta') {
        var resultado = num1 - num2
        console.log(`El resultado de la resta de ${num1} - ${num2} es de: ${resultado}`);
    } else if(idName == 'multiplicar'){
        var resultado = num1 * num2
        console.log(`El resultado de la multiplicacion de ${num1} x ${num2} es de: ${resultado}`);
    } else if(idName == 'dividir'){
        var resultado = num1 / num2
        console.log(`El resultado de la divicion de ${num1} / ${num2} es de: ${resultado}`);
    }
}

 /** FORMA DEMORADA */
// function suma() {
//     var resultado = num1 + num2
//     console.log(`El resultado de la suma de ${num1} + ${num2} es de: ${resultado}`);
// }
// function resta() {
//     var resultado = num1 - num2
//     console.log(`El resultado de la resta de ${num1} - ${num2} es de: ${resultado}`);
// }
// function multiplicar() {
//     var resultado = num1 * num2
//     console.log(`El resultado de la multiplicacion de  de ${num1} x ${num2} es de: ${resultado}`);
// }
// function dividir() {
//     var resultado = num1 / num2
//     console.log(`El resultado de la divicion de ${num1} / ${num2} es de: ${resultado}`);
// }

