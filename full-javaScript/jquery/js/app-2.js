/** Ajax con jquery */
$('document').ready(() => {
    console.log('alert')
    // metodo load -> peticion ajax por get
    //$('#datos').load('https://reqres.in/');

    // metodos get y post
    $.get('https://reqres.in/api/users', {page: 3}, (response) => {
        response.data.forEach((element) => {
            console.log(element.first_name)
            $('#datos').append(`<p> ${element.first_name} ${element.last_name} </p>`)
        })
    })
    
})