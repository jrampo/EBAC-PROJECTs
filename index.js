const form = document.getElementById("form-atividade");

const imgAprov = "<img src='./assets/joia.webp' alt='teste'/>";
const imgReprov = "<img src='./assets/pa.png' alt='teste'/>";

const spanAprov = "<span class='resultado aprovado'>Aprovado</span>";
const spanReprov = "<span class='resultado reprovado'>Reprovado</span>";

let linhas = " ";

const atividades = [];
const notas = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addTable();
  attTable();
  attMediaFinal();
});

function addTable() {
  const inputName = document.getElementById("input-name");
  const inputNota = document.getElementById("input-nota");

  atividades.push(inputName.value);
  notas.push(parseFloat(inputNota.value));

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

function attMediaFinal() {
  const mediaFinal = calcMedia();

  document.getElementById("notaMedia").innerHTML = mediaFinal;
  document.getElementById("feedback-result").innerHTML =
    mediaFinal >= 7 ? spanAprov : spanReprov;
}

// FAZ UM LOOP FOR PARA ITERAR NA MÉDIA //
function calcMedia() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}
