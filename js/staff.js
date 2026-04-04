// Toggle staff bios
$(".bio-btn").click(function () {
  $(this).next(".bio").slideToggle();
});

// Hiring button interaction
$("#apply-btn").click(function () {
  $("#apply-message").fadeToggle();
});