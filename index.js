const form = document.getElementById("form-atividade");

const imgAprov = "<img src='./assets/joia.webp' alt='teste'/>";
const imgReprov = "<img src='./assets/pa.png' alt='teste'/>";

const spanAprov = "<span class='resultado aprovado'>Aprovado</span>";
const spanReprov = "<span class='resultado reprovado'>Reprovado</span>";

const notaMin = parseFloat(prompt("Digite a nota minima:"));

let linhas = " ";

const atividades = [];
const notas = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addTable();
  attTable();
  attMediaFinal();
});

form.addEventListener("reset", function (e) {
  e.preventDefault();

  randomiza();
});

function addTable() {
  const inputName = document.getElementById("input-name");
  const inputNota = document.getElementById("input-nota");

  if (atividades.includes(inputName.value)) {
    alert(`ta moscano boy? ${inputName.value} já foi inserida`);
  } else {
    atividades.push(inputName.value);
    notas.push(parseFloat(inputNota.value));

    let linha = "<tr>";
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inputNota.value}</td>`;
    linha += `<td>${inputNota.value >= notaMin ? imgAprov : imgReprov}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputNota.value = "";
  inputName.value = "";
}

function attTable() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function attMediaFinal() {
  const mediaFinal = calcMedia();

  document.getElementById("notaMedia").innerHTML = mediaFinal.toFixed(1);
  document.getElementById("feedback-result").innerHTML =
    mediaFinal >= notaMin ? spanAprov : spanReprov;
}

// FAZ UM LOOP FOR PARA ITERAR NA MÉDIA //
function calcMedia() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}

function randomiza() {
  const aleatorio = Math.floor(Math.random() * atividades.length);
  const itemSorteado = atividades[aleatorio];

  if (atividades.length <= 0) {
    alert("poe item na lista tiozao");
  } else {
    alert(`O item sorteado foi: ${itemSorteado}`);
  }
}
