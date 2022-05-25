$(document).ready(function () {
    $("#bth").on("click", function () {
        $(".container").html("<p>Злой</p>")
        $(".container").prepend("<img src='./img/nedab.jpg'>")
        $(".container").append("<p>Очень злой</p>")
    })
})