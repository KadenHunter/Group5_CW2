// menu page JavaScript
$(document).ready(function () {

    // footer year
    $('#year').text(new Date().getFullYear());

    // fade page in
    $('body').css('opacity', 0).animate({ opacity: 1 }, 800);

    // mobile menu
    $('#hamburger').click(function () {
        $('#nav-links').toggleClass('open');
    });

    $('.nav-link').click(function () {
        $('#nav-links').removeClass('open');
    });

});