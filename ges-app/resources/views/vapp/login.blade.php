<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="/css/login.css" />
    <script src="/js/login.js"></script>
    <title>Login</title>
</head>

<body>
    <form class="form">
        <p class="form-title">Acessar</p>
        <input id="email" type="email" placeholder="Email">
        <input id="password" type="password" placeholder="Senha">
        <button type="submit" class="submit">Entrar</button>
        <p class="signup-link">
            <a href="">Esqueceu a senha?</a>
        </p>
    </form>
</body>
</html>