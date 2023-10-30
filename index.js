const form = document.getElementById("form-atividade");

const imgAprov = "<img src='./assets/joia.webp' alt='teste'/>";
const imgReprov = "<img src='./assets/pa.png' alt='teste'/>";

let linhas = " ";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addTable();
  attTable();
});

function addTable() {
  const inputName = document.getElementById("input-name");
  const inputNota = document.getElementById("input-nota");

  let linha = "<tr>";
  linha += `<td>${inputName.value}</td>`;
  linha += `<td>${inputNota.value}</td>`;
  linha += `<td>${inputNota.value >= 7 ? imgAprov : imgReprov}</td>`;
  linha += `</tr>`;

  linhas += linha;

  inputNota.value = "";
  inputName.value = "";
}

function attTable() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
