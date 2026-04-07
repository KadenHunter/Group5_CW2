// Staff page JavaScript
$(document).ready(function () {

    // set the year in the footer automatically
    $('#year').text(new Date().getFullYear());

    // fade the page in when it loads
    $('body').css('opacity', 0).animate({ opacity: 1 }, 800);

    // open and close the mobile menu when the hamburger is clicked
    $('#hamburger').click(function () {
        $('#nav-links').toggleClass('open');
    });

    // close menu if a link is clicked (only applies to mobile)
    $('.nav-link').click(function () {
        $('#nav-links').removeClass('open');
    });

    // show and hide the bio when the button is clicked 
    $('.bio-btn').click(function () {
        $(this).next('.bio').slideToggle();
        if ($(this).attr('aria-expanded') === 'true') {
            $(this).attr('aria-expanded', 'false');
        } else {
            $(this).attr('aria-expanded', 'true');
        }
    });

    // show the email when apply is clicked 
    $('#apply-btn').click(function () {
        $('#apply-message').fadeToggle();
    });

    // dim nav links on hover 
    $('.nav-link').hover(
        function () {
            $(this).stop().animate({ opacity: 0.6 }, 150);
        },
        function () {
            $(this).stop().animate({ opacity: 1 }, 150);
        }
    );

    // dim social icons on hover 
    $('.social-icon').hover(
        function () {
            $(this).stop().animate({ opacity: 0.6 }, 150);
        },
        function () {
            $(this).stop().animate({ opacity: 1 }, 150);
        }
    );

});