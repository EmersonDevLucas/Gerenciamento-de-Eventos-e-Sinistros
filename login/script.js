document.getElementById('entrar').onclick = function() {
    let usuario = document.getElementById("usuario").value;
    usuario = usuario.toLowerCase();
    let senha = document.getElementById("senha").value;

    console.log("Entrar clicado");
    console.log("Usuario:", usuario);
    console.log("Senha:", senha);

    if (usuario === "" || senha === "") {
        alert("Os campos usuário e senha são obrigatórios");
        console.log("Campos vazios detectados");
    } else if (usuario === "gold2024" && senha === "Gold2024") {
        console.log("Credenciais corretas, redirecionando...");
        window.open("https://emersondevlucas.github.io/Gerenciamento-de-Eventos-e-Sinistros/menu");
    } else {
        alert("Credenciais incorretas");
        console.log("Credenciais incorretas");
    }
}


document.getElementById('reset-senha').onclick = function() {
    document.getElementById('reset-senhadiv').style.display = 'flex'
}