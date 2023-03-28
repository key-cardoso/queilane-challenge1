function validarForm() {
    const nomeInput = document.getElementsByName('name')[0];
    const emailInput = document.getElementsByName('email')[0];
    const idadeInput = document.getElementsByName('age')[0];

    if (!nomeInput.checkValidity()) {
        alert('Por favor, insira seu nome completo.');
        return false;
    }

    if (!emailInput.checkValidity()) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    if (!idadeInput.checkValidity()) {
        alert('Por favor, insira uma idade válida entre 18 e 60 anos.');
        return false;
    }

    // Se tudo estiver certo, exibir mensagem de sucesso e redirecionar para a tela 1
    alert('Formulário enviado com sucesso!');
    window.location.href = 'tela1.html';

    // Impedir que o formulário seja submetido
    return false;
}