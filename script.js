$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#cancelar").click(function () {
    $("form").slideUp();
  });

  const form = document.getElementById("input-url");

  $("#enviar").click(function () {
    alert(`o URL inserido foi - ${form.value}`);
  });

  $("form").on("submit", function (event) {
    event.preventDefault();
  });
});
