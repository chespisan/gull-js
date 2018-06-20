/** Test responsive */

const form = document.getElementById('form');

// validamos
if(form){
    form.addEventListener('submit', () => {
        let width = form.querySelector('#width'),
            height = form.querySelector('#height'),
            url = form.querySelector('#url')

         // validamso de nuevi
         if(width && height && url){
            width = width.value
            height = height.value
            url = url.value
         } 
         
         window.open(url, url, `innerWidth=${width}, innerHeight=${height}`)
    })
}