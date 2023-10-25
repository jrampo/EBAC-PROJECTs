const form = document.getElementById("form-atividade");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputName = document.getElementById("input-name");
  let inputNota = document.getElementById("input-nota");

  let linha = "<tr>";
  linha += `<td>${inputName.value}</td>`;
  linha += `<td>${inputNota.value}</td>`;
  linha += `<td>${inputNota.value >= 7 ? "Aprovado" : "Reprovado"}</td>`;
  linha += `</tr>`;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linha;

  alert(`Atividade: ${inputName.value} - Nota: ${inputNota.value}`);
});
