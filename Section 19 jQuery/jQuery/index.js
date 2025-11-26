$(document).keydown(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseenter", function () {
  $(this).css("color", "blue");
});
$("h1").on("mouseleave", function () {
  $(this).css("color", "red");
});
