$(document).ready(function () {
  $.get("https://jsonplaceholder.typicode.com/todos", function (response) {
    console.log(response[4]);
    $("p").html(response[4].title);
  });
});
