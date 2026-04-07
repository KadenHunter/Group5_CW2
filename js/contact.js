// Contact page JavaScript
$(document).ready(function () {

    // set the year in the footer
    $('#year').text(new Date().getFullYear());

    // fade the page in when it loads
    $('body').css('opacity', 0).animate({ opacity: 1 }, 800);

    // open and close the mobile menu
    $('#hamburger').click(function () {
        $('#nav-links').toggleClass('open');
    });

    // close menu if a link is clicked
    $('.nav-link').click(function () {
        $('#nav-links').removeClass('open');
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

    // show and hide the correct fields based on dropdown selection
    $('#enquiry-type').change(function () {
        var selected = $(this).val();

        // hide all conditional fields first
        $('.conditional-fields').slideUp(300);

        // show the right ones based on selection
        if (selected === 'general') {
            $('#general-fields').slideDown(300);
        } else if (selected === 'reservation') {
            $('#reservation-fields').slideDown(300);
        } else if (selected === 'event') {
            $('#event-fields').slideDown(300);
        } else if (selected === 'feedback') {
            $('#feedback-fields').slideDown(300);
        }

    });

    // form validation on submit
    $('#contact-form').submit(function (e) {
        e.preventDefault();

        // clear all errors first
        $('.error').text('');
        $('.error-field').removeClass('error-field');

        var valid = true;
        var enquiryType = $('#enquiry-type').val();

        // check enquiry type is selected
        if (enquiryType === '') {
            $('#enquiry-type-error').text('Please select an enquiry type');
            $('#enquiry-type').addClass('error-field');
            valid = false;
        }

        // check name
        if ($('#name').val().trim() === '') {
            $('#name-error').text('Please enter your name');
            $('#name').addClass('error-field');
            valid = false;
        }

        // check email format
        var email = $('#email').val().trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#email-error').text('Please enter your email');
            $('#email').addClass('error-field');
            valid = false;
        } else if (!emailPattern.test(email)) {
            $('#email-error').text('Please enter a valid email address');
            $('#email').addClass('error-field');
            valid = false;
        }

        // general enquiry validation
        if (enquiryType === 'general') {
            if ($('#subject').val().trim() === '') {
                $('#subject-error').text('Please enter a subject');
                $('#subject').addClass('error-field');
                valid = false;
            }
            if ($('#general-message').val().trim() === '') {
                $('#general-message-error').text('Please enter a message');
                $('#general-message').addClass('error-field');
                valid = false;
            }
        }

        // reservation validation
        if (enquiryType === 'reservation') {
            var phone = $('#phone').val().trim();
            var phonePattern = /^[0-9]{10,11}$/;
            if (phone === '') {
                $('#phone-error').text('Please enter your phone number');
                $('#phone').addClass('error-field');
                valid = false;
            } else if (!phonePattern.test(phone)) {
                $('#phone-error').text('Please enter a valid phone number');
                $('#phone').addClass('error-field');
                valid = false;
            }

            // check date is not in the past
            var today = new Date().toISOString().split('T')[0];
            if ($('#date').val() === '') {
                $('#date-error').text('Please select a date');
                $('#date').addClass('error-field');
                valid = false;
            } else if ($('#date').val() < today) {
                $('#date-error').text('Please select a future date');
                $('#date').addClass('error-field');
                valid = false;
            }

            if ($('#time').val() === '') {
                $('#time-error').text('Please select a time');
                $('#time').addClass('error-field');
                valid = false;
            }

            var guests = $('#guests').val();
            if (guests === '') {
                $('#guests-error').text('Please enter number of guests');
                $('#guests').addClass('error-field');
                valid = false;
            } else if (guests < 1 || guests > 10) {
                $('#guests-error').text('Guests must be between 1 and 10');
                $('#guests').addClass('error-field');
                valid = false;
            }
        }

        // event validation
        if (enquiryType === 'event') {
            var eventPhone = $('#event-phone').val().trim();
            var eventPhonePattern = /^[0-9]{10,11}$/;
            if (eventPhone === '') {
                $('#event-phone-error').text('Please enter your phone number');
                $('#event-phone').addClass('error-field');
                valid = false;
            } else if (!eventPhonePattern.test(eventPhone)) {
                $('#event-phone-error').text('Please enter a valid phone number');
                $('#event-phone').addClass('error-field');
                valid = false;
            }

            if ($('#event-type').val() === '') {
                $('#event-type-error').text('Please select an event type');
                $('#event-type').addClass('error-field');
                valid = false;
            }

            var today2 = new Date().toISOString().split('T')[0];
            if ($('#event-date').val() === '') {
                $('#event-date-error').text('Please select a date');
                $('#event-date').addClass('error-field');
                valid = false;
            } else if ($('#event-date').val() < today2) {
                $('#event-date-error').text('Please select a future date');
                $('#event-date').addClass('error-field');
                valid = false;
            }

            if ($('#event-message').val().trim() === '') {
                $('#event-message-error').text('Please tell us about your event');
                $('#event-message').addClass('error-field');
                valid = false;
            }
        }

        // feedback validation
        if (enquiryType === 'feedback') {
            if ($('input[name="rating"]:checked').length === 0) {
                $('#rating-error').text('Please select a rating');
                valid = false;
            }
            if ($('#feedback-message').val().trim() === '') {
                $('#feedback-message-error').text('Please enter your feedback');
                $('#feedback-message').addClass('error-field');
                valid = false;
            }
        }

        // if all valid show success message
        if (valid) {
            $('#contact-form .form-group').fadeOut(300);
            $('#success-message').delay(300).fadeIn(500);
        }

    });

});