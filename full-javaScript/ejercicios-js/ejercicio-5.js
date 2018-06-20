/** Ejercicoo #5 */

/** 
 *  Haz un script que escriba una pirámide del 1 al 30 de la siguiente forma :
 *  1
    22
    333
    4444
    55555
    666666
 */

 // ascendente
 for(let i = 0; i <= 30; i++) {
     for(let rep = 0; rep < i; rep++){
         console.log(i)
         document.write(i);
     }
     document.write("<br>");
 }

 // descentende
 for(let i = 30; i >= 0; i--) {
    for(let rep = 0; rep < i; rep++){
        console.log(i)
        document.write(i);
    }
    document.write("<br>");
}