$(function () {
    $('.cookie__close').on('click', e => {
        e.preventDefault();
        let link = $(e.currentTarget);
        let block = $('.footer__cookie');
        $('.footer__cookie').slideUp(500);
    })
})