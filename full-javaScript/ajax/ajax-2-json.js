/** Ejercicio ajax con json */

const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const empleadoList = document.querySelector('#empleado');
const empleadosList = document.querySelector('#empleados');

// eventListener
function eventListener() {

boton1.addEventListener('click', cargarEmpleado);

boton2.addEventListener('click', cargarEmpleados);

};
eventListener();

// functions
function cargarEmpleado() {

    // creamos el objeto de ajax -> XMLhttpRequest
    const xhr = new XMLHttpRequest();

    // abrimos conexion
    xhr.open('GET', './empleado.json', true);

    // cyando carga
    xhr.onload = function () {
        if(this.status === 200) {
            const empleado = JSON.parse(this.responseText);
            const datoEmpleado = `
                <ul>
                    <li>id: ${empleado.id}</li>
                    <li>nombre: ${empleado.nombre}</li>
                    <li>empresa: ${empleado.empresa}</li>
                    <li>cargo: ${empleado.cargo}</li>
                </ul>
            `;
            empleadoList.innerHTML = datoEmpleado
        }
    };

    // enviar
    xhr.send()
};

function cargarEmpleados() {
    console.log('click');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', './empleados.json', true);

    xhr.onload = function () {
        if(this.status === 200) {
            const empleados = JSON.parse(this.responseText);
            
            let datosEmpleados = '';
            empleados.map((el) => {
                datosEmpleados += `
                    <ul>
                        <li>id: ${el.id}</li>
                        <li>nombre: ${el.nombre}</li>
                        <li>empresa: ${el.empresa}</li>
                        <li>cargo: ${el.cargo}</li>
                    </ul>
                `;    

                empleadosList.innerHTML = datosEmpleados
                
            });
        }
    }

    xhr.send()
}