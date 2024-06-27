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
  document.getElementById('abasterceiro').style.display = 'block'
  document.getElementById('buttonterceiro').style.display = 'none'

}
