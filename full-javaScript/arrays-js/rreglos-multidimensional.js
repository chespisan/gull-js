/** Arreglos multidimencionales
 *  Son los que llevan un arreglo dentro de un mismo arreglo
 */

 // 
 let peliculas = ['fast', 'captain marvel', 'spiderman'];
 let categorias = ['carreras', 'productoras', 'comics'];

 let cine = [peliculas, categorias]
 console.log(cine);
 console.log(`Ud ha elegido la pelicula ${cine[0][2]} de la categoria ${cine[1][2]}`)