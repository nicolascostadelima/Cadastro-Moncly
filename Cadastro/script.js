function Validar(){
    const usuario = document.getElementById("Usuario").value.trim();
    const senha = document.getElementById("Senha").value.trim();
    const genero = document.getElementById("Genero").value.trim();

    if (senha === "" || usuario === "" || genero === "" ){
        window.alert("Digite os campos faltentes!");
    }
    else{
        window.location.href = "../registro completo/index.html";
    }
}