$(document).ready(function () {
  let hiddenRow = $(".expandable");
  $(".ex-bt").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visibel")) {
      $(".ex-bt").html("Завернуть");
    } else {
      $(".ex-bt").html("Развернуть");
    }
  });
  $(".video-play").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
  $(".modal-cloge").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
});
$(".menu-btn").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("menu-btn_ak");
});
