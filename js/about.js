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

    // fade sections in
    var delay = 200;
    $('section').each(function () {
        $(this).css('opacity', 0).delay(delay).animate({ opacity: 1 }, 600);
        delay += 200;
    });

    // image hover fade
    $('.welcome-img img, .app-img img').hover(
        function () {
            $(this).stop().animate({ opacity: 0.85 }, 200);
        },
        function () {
            $(this).stop().animate({ opacity: 1 }, 200);
        }
    );

});
$(document).ready(function () {

    $('.faq-question').click(function () {
        $(this).next('.faq-answer').slideToggle();

        // close others (optional but nice)
        $('.faq-answer').not($(this).next()).slideUp();
    });

});
        