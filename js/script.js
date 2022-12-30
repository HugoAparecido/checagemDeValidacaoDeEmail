function validation () {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var patern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if (email.match(patern)) {
        form.classList.add("válido");
        form.classList.remove("inválido");
        text.innerHTML = "Seu Endereço de E-mail é Valido.";
        text.style.color = "#00ff00";
    }
    else {
        form.classList.remove("válido");
        form.classList.add("inválido");
        text.innerHTML = "Digite o endereço de e-mail válido";
        text.style.color = "#ff0000";
    }
    if (email == "") {
        form.classList.remove("válido");
        form.classList.remove("inválido");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}