$(document).ready(function () {
  $("#carousel").slick({ autoplay: true });
});

$(".menu").click(function () {
  $("nav").slideToggle();
});

$("#telefone").mask("(00) 00000-0000");

$("form").validate({
  rules: {
    nome: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    telefone: {
      required: true,
    },
    veiculoInteresse: {
      required: true,
    },
  },
  messages: {
    nome: "Preencha o campo corretamente.",
    email: "Preencha o campo corretamente.",
    telefone: "Preencha o campo corretamente.",
    veiculoInteresse: "Preencha o campo corretamente.",
  },

  submitHandler: function (form) {
    console.log(form);
  },
  invalidHandler: function (event, validador) {
    let campoIncorreto = validador.numberOfInvalids();
    if (campoIncorreto) {
      alert(`Existem ${campoIncorreto} campos incorretos`);
    }
  },
});

$(".lista button").click(function () {
  const destino = $("#contato");

  const nomeVeiculo = $(this).parent().find("h3").text();

  $("#veiculo-interesse").val(nomeVeiculo);

  $("html").animate(
    {
      scrollTop: destino.offset().top,
    },
    1000
  );
});
