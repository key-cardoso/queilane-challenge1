function validarForm() {
    const nomeInput = document.getElementsByName('name')[0];
    const emailInput = document.getElementsByName('email')[0];
    const idadeInput = document.getElementsByName('age')[0];

    if (!nomeInput.checkValidity()) {
        alert('Please enter your full name.');
        return false;
    }

    if (!emailInput.checkValidity()) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!idadeInput.checkValidity()) {
        alert('Please enter a valid age between 18 and 60.');
        return false;
    }


    alert('Form sent successfully!');
    window.location.href = 'tela1.html';


    return false;
}