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
        window.open("http://127.0.0.1:5500/FRONT/FRONTEND%20RELAT%C3%93RIOS/FrontMenu.html");
    } else {
        alert("Credenciais incorretas");
        console.log("Credenciais incorretas");
    }
}
