// ================= STAFF PAGE JAVASCRIPT =================

// Run code only after the DOM is fully loaded
$(document).ready(function () {

    // ================= FOOTER YEAR =================
    // Automatically sets the current year in the footer
    $('#year').text(new Date().getFullYear());


    // ================= PAGE FADE-IN EFFECT =================
    // Start page invisible, then fade in smoothly on load
    $('body')
        .css('opacity', 0)
        .animate({ opacity: 1 }, 800);


    // ================= MOBILE NAV MENU =================
    // Toggle navigation menu when hamburger icon is clicked
    $('#hamburger').click(function () {
        $('#nav-links').toggleClass('open'); // Adds/removes 'open' class
    });

    // Close mobile menu when any navigation link is clicked
    $('.nav-link').click(function () {
        $('#nav-links').removeClass('open');
    });


    // ================= STAFF BIO TOGGLE =================
    // Show or hide staff bio when "View Bio" button is clicked
    $('.bio-btn').click(function () {

        // Toggle the next sibling element with class 'bio'
        $(this).next('.bio').slideToggle();

        // Update accessibility attribute (ARIA)
        if ($(this).attr('aria-expanded') === 'true') {
            $(this).attr('aria-expanded', 'false');
        } else {
            $(this).attr('aria-expanded', 'true');
        }
    });


    // ================= APPLY BUTTON =================
    // Show or hide application message when button is clicked
    $('#apply-btn').click(function () {
        $('#apply-message').fadeToggle();
    });


    // ================= NAV LINK HOVER EFFECT =================
    // Reduce opacity on hover, restore on mouse leave
    $('.nav-link').hover(
        function () {
            $(this).stop().animate({ opacity: 0.6 }, 150);
        },
        function () {
            $(this).stop().animate({ opacity: 1 }, 150);
        }
    );


    // ================= SOCIAL ICON HOVER EFFECT =================
    // Same fade effect for social media icons
    $('.social-icon').hover(
        function () {
            $(this).stop().animate({ opacity: 0.6 }, 150);
        },
        function () {
            $(this).stop().animate({ opacity: 1 }, 150);
        }
    );

});