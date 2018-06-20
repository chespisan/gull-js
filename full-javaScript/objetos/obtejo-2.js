/** Objetos (poo) 
 * Es una abstraccion del mundo real
 * Es una representac¡on del estado y las acciones que puede realizar algo/alguien
*/

/** Atributos
 * Caracteristicas del objeto
 * se refieren al estado actual
 * son modificables y accesibles
 */

 /** Métodos
  * Acciones del objeto
  * se refieren al estado actual
  * son modificables y accesibles
  */

  // sintaxis de objetos literales
  const persona = {
      nombre: 'sergio',
      edad: 26,
      infoDatos: () => {
        console.log(`Bienvenido ${this.nombre}`);
      }
  }
console.log(persona)
console.log(persona.nombre)
persona.infoDatos()
  /** Prototipo
   * Es la base de toda  la programacion en JS
   * ya que todo es un objeto,  ala vez todo debe partir de un prototipo
   */

   /** EJEMPLOS */