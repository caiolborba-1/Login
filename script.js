let cadastro = false;
document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;
    document.getElementById("titulo").innerText = cadastro ? "cadastro" : "Login";
    document.getElementById("button").innerText = cadastro ? "cadastrar" : "Entrar";
    document.getElementById("toggle").innerText = cadastro 
        ? "Já tem conta? Faça Login!"
        : "Não tem conta? Cadastre-se!";
        document.getElementById("mensagem").innerHTML + "";
}

document. getElementById ("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email =  document.getElementById("email").value;
    let senha =  document.getElementById("senha").value;
    let mensagem =  document.getElementById("mensagem");

    mensegem.innerHTML = "";

    if (!email.includes(@) || !email.includes(".")) {
        mensegem.innerHTML = "<div class='erro'><p> Email Invalido!</p></div>";
        return;
    }

    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p> Senha muito curta!</p></div>";
        return;
    }

    if (cadastro) {
        localStorage.setItem(email, senha);
        mensagem.innerHTML = "<div class='erro'><p> Cadastrado com sucesso!</p></div>";
    } else {
        let salva = localStorage.getItem(email);
        if (salvar === senha) {
            mensagem.innerHTML = "<div class='erro'><p> Logado com sucesso!</p></div>";
        } else {
            mensagem.innerHTML = "<div class='erro'><p> Dados incorretos!</p></div>";
        }
    } document.getElementById("form-login").reset();
}