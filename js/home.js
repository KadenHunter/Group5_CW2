// Homepage JavaScript
$(document).ready(function () {

    // update footer year automatically
    $('#year').text(new Date().getFullYear());

    // fade whole page in smoothly on load
    $('body').css('opacity', 0).animate({ opacity: 1 }, 800);

    // hamburger menu toggle for mobile
    $('#hamburger').click(function () {
        $('#nav-links').toggleClass('open');
    });

    // close menu when a link is clicked (especially important for mobile)
    $('.nav-link').click(function () {
        $('#nav-links').removeClass('open');
    });

    // fade each why-card in one at a time instead of slideDown
    var delay = 100;
    $('.why-card').each(function () {
        $(this).css('opacity', 0).delay(delay).animate({ opacity: 1 }, 600);
        delay += 250;
    });

    // hover effect on why-cards
    $('.why-card').hover(
        function () {
            $(this).stop().animate({ marginTop: '-5px' }, 150);
        },
        function () {
            $(this).stop().animate({ marginTop: '0px' }, 150);
        }
    );

    // hover effect on nav links
    $('.nav-link').hover(
        function () {
            $(this).stop().animate({ opacity: 0.6 }, 150);
        },
        function () {
            $(this).stop().animate({ opacity: 1 }, 150);
        }
    );

    // hover effect on social icons in footer
    $('.social-icon').hover(
        function () {
            $(this).stop().animate({ opacity: 0.6 }, 150);
        },
        function () {
            $(this).stop().animate({ opacity: 1 }, 150);
        }
    );

});