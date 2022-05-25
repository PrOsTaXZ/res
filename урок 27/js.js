$(document).ready(function () {
  $("#bt-add").on("click", function () {
    $(".cer").append("<img src='./фон.jpg' >");
  });
  $("#bt-rem").on("click", function () {
    $("img , p").remove();
  });
  $("#bt-tx").on("click", function () {
    $(".cer").append("<p>типо текст</p>");
  });
});
