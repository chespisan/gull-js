/** Ejercicios de efectos con jquery
 * show() -> mostrar , params -> fast, slow, normal
 * hide() -> ocultar metodos -> fast, slow, normal
 * fadeIn()
 * fadeOut()
 * fadeTo(1,2) -> 1params: efecto, 2params: opacity
 * fadeTo(1,2) -> 1params: efecto, 2params: opacity
 * toggle() efecto  de mostrar y ocultar
 */


$('document').ready(() => {
    console.log('Listo jquery para usar');

    const caja = $('#caja');
    const mostrar = $('#mostrar');
    const ocultar = $('#ocultar');

    mostrar.click(() => {
        caja.show('fast');
    });

    ocultar.click(() => {
        caja.hide('normal');
    });

});

// efectos

