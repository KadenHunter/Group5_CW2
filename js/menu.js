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

function filterMenu(category) {
  let cards = document.querySelectorAll(".card");
  let buttons = document.querySelectorAll(".filters button");

  // active button
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  cards.forEach(card => {
    if (category === "all") {
      card.classList.remove("hide");
    } else {
      if (card.classList.contains(category)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    }
  });
}