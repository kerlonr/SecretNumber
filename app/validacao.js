const vitoriaSom = new Audio("sons/vitoria.ogg");
function verificaSeOChutePossuiUmValorValido() {
  const numero = +chute;
  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor Inválido<dib>`;
    return;
  }
  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Fale um numero entre ${menor - valor} e ${
      maior - valor
    }<div>
    `;
    return;
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h1>PARABÉNS</h1>
    <h2>🎉 Você conseguiu! 🎉<h2>
    <h3>O Número era ${numeroSecreto}<h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`;
    vitoriaSom.play();
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML = `<div>O numero é menor <i class="fa-solid fa-down-long"></i></div>`;
  } else {
    elementoChute.innerHTML = `<div>O numero é maior <i class="fa-solid fa-up-long"></i></div>`;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}
function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero >= maiorValor || numero <= menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id === "jogar-novamente") {
    window.location.reload();
  }
});
