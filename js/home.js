// Homepage JavaScript
$(document).ready(function () {
 
    /* Updates the copyright year in the footer automatically */
    $('#year').text(new Date().getFullYear());
 
 
    /* Toggles the mobile nav menu open and closed */
    $('#hamburger').click(function () {
        $('#nav-links').toggleClass('open');
    });
 
 
    /* Closes the menu when a nav link is clicked on mobile */
    $('.nav-link').click(function () {
        $('#nav-links').removeClass('open');
    });
 
});
