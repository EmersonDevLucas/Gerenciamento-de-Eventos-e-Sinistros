document.getElementById("gestao-nav").onclick = function () {
  window.location.replace(
    "https://emersondevlucas.github.io/Gerenciamento-de-Eventos-e-Sinistros/menu/"
  );
};

document.getElementById("dashboard-nav").onclick = function () {
  window.location.replace(
    "https://emersondevlucas.github.io/Gerenciamento-de-Eventos-e-Sinistros/dashboard/"
  );
};

document.getElementById("adicionar").onclick = function () {
  window.location.replace(
    "https://emersondevlucas.github.io/Gerenciamento-de-Eventos-e-Sinistros/novoitem/"
  );
};

document.getElementById('buttonterceiro').onclick = function() {
  event.preventDefault();
  document.getElementById('abasterceiro').style.display = 'flex'
  document.getElementById('buttonterceiro').style.display = 'none'
}

document.getElementById('buttonterceiro2').onclick = function() {
  event.preventDefault();
  document.getElementById('abasterceiro2').style.display = 'flex'
  document.getElementById('buttonterceiro2').style.display = 'none'
}