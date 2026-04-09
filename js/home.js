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

    // fade each why-card in one at a time on load
    var delay = 100;
    $('.why-card').each(function () {
        $(this).css('opacity', 0).delay(delay).animate({ opacity: 1 }, 600);
        delay += 250;
    });

    // click a why-card to reveal or hide its description
    $('.why-card').click(function () {
        var $p = $(this).find('p');

        if ($(this).hasClass('open')) {
            $p.slideUp(250);
            $(this).removeClass('open');
        } else {
            $p.slideDown(300);
            $(this).addClass('open');
        }
    });

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

    // highlight today's day and turn the time red if currently closed
    var now = new Date();
    var day = now.getDay();
    var time = now.getHours() * 60 + now.getMinutes();

    var open = (day === 0 || day === 6) ? 540 : 450;
    var close = 1080;

    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    $('.day').each(function () {
        if ($(this).find('span:first').text() === dayNames[day]) {
            if (time < open || time >= close) {
                $(this).find('span:last').css('color', 'red');
            }
            $(this).css('font-weight', 'bold');
        }
    });

});