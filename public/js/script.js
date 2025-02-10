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

console.log("Script carregado");

document.getElementById("buscar").addEventListener("input", function () {
  console.log("Evento de input disparado");

  const searchTerm = this.value.toLowerCase();
  console.log(`Termo de busca: ${searchTerm}`);

  const items = document.querySelectorAll(".lista");

  items.forEach((item) => {
    const nome = item.querySelector(".nome").textContent.toLowerCase();
    const placa = item.querySelector(".placa").textContent.toLowerCase();
    console.log(`Verificando item: Nome = ${nome}, Placa = ${placa}`);

    if (nome.includes(searchTerm) || placa.includes(searchTerm)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});
