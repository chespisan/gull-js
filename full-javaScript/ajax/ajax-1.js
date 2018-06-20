/** Ajax 
 * Obtener informacion desde un archivo txt
 * cargar informacion desde una base de datos, un json, un txt etc sin necesidad de recargar la pagina
*/

document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {

    //en este objeto podemos obtener todos los mètodos que necesitamos para usar ajax
    const xhr = new XMLHttpRequest();

    // abrir conexion, tipo de conexion y boolean que sea asincrono
    xhr.open('GET', './datos.txt', true);

    /** Forma vieja
     * xhr.onreadystatechange = function() {
     *  if(this.readyState === 4 && this.status === 200) {
     *      console.log(this.responseText);
     *  }
     * };
     *  ready status
     *  0 -> No inicializado
     *  1 -> Conexion establecida
     *  2 -> Recibido
     *  3 -> procesando
     *  4 -> respùesta lista
     * 
     */

    // forma nueva una vez carga
    xhr.onload = function() {
        // 200: Correcto | 403: Prohibido | 404: No encontrado
        if(this.status === 200) {
            console.log(this.responseText);
            const listado = document.getElementById('listado');
            listado.innerHTML = `
                <h4>Informacion desde un archivo externo ${this.responseText}</h4>
            `;
        }
    }

    // enviar el request
    xhr.send()
}
