document.getElementById("forms").addEventListener("submit", function (event) {
  event.preventDefault();

  let inputNumA = document.getElementById("numberA").value;
  let inputNumB = document.getElementById("numberB").value;

  let inputA = parseFloat(inputNumA);
  let inputB = parseFloat(inputNumB);

  if (inputB > inputA) {
    document.getElementById("message").textContent =
      "Aprovado - B é maior que A";

    document.getElementById("numberA").value = "";
    document.getElementById("numberB").value = "";
  } else if (inputA > inputB) {
    document.getElementById("message").textContent = "Negado - A é maior que B";
  } else if (inputA == inputB) {
    document.getElementById("message").textContent =
      "Negado - Os numeros são iguais";
  } else {
    document.getElementById("message").textContent =
      "Negado - Poe numero ai espertão";
  }
});
