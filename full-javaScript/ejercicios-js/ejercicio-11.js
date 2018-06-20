/** Ejercicios Js */

// serie de fibonacci
function fibonacci(numero) {
    
    let n1 = 0;
    let n2 = 1;
    let n3;

    for(let i = 0; i < numero; i++ ){
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;   
        console.log(n3)
    }
}
fibonacci(10);

// par && impar
function parImpar(numero) {
    for(let i = 0; i <= numero; i++) {
        if( i%2 == 0 ){
            console.log(`El numero ${i} es par`);
        } else {
            console.log(`El numero ${i} es impar`)
        }
    }
}
parImpar(50);

// multiplos de un numero
function multiplos(numero){
    for(let i = 0; i <= 100; i++){
        if(i % numero == 0 ){
            console.log(`${i} es multiplo de ${numero}`)
        } else {
            console.log(`${i} NO es multiplo de ${numero}`)
        }
    }
}
multiplos(8);