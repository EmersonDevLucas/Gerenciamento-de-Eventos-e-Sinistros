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

document.getElementById('salvar').onclick = function salvar() {
  let analista = document.getElementById('analista')
  let evento = document.getElementById('evento')
  let associado = document.getElementById('associado')
  let placaassociado = document.getElementById('placaassociado')
  let chassiassociado = document.getElementById('chassiassociado')
  let marcaassociado = document.getElementById('marcaassociado')
  let terceiro = document.getElementById('terceiro')
  let placaterceiro = document.getElementById('placaterceiro')
  let chassiterceiro = document.getElementById('chassiterceiro')
  let marcaterceiro = document.getElementById('marcaterceiro')
  let terceiro2 = document.getElementById('terceiro2')
  let placaterceiro2 = document.getElementById('placaterceiro2')
  let chassiterceiro2 = document.getElementById('chassiterceiro2')
  let marcaterceiro2 = document.getElementById('marcaterceiro2')
  let data = document.getElementById('data')
  let local = document.getElementById('local')
  let historico = document.getElementById('historico')
  let entrevistaassociado = document.getElementById('entrevistaassociado')
  let entrevistaterceiro = document.getElementById('entrevistaterceiro')
  let cnh = document.getElementById('cnh')
  let validade = document.getElementById('validade')
  let categoria = document.getElementById('categoria')
  let descriçaorastreador = document.getElementById('descriçaorastreador')
  let parecer = document.getElementById('parecer')
  let documentos = document.getElementById('documentos')

  



 }