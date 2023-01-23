function valid() {
    var nome = card.nome;
    var email = card.email;
    var age = card.age;
    if (nome.value == "") {
        nome.focus();
        alert("Prencha o campo nome")
    }
    if (email.value == "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.focus();
        alert("Prencha o campo email")
    }
    if (age.value == "") {
        age.focus();
        alert("Prencha o age")
    }



}