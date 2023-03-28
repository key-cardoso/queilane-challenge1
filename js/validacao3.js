function validarForm() {
    const selectInput = document.getElementsByName('opcoes-conta')[0];
    const radioInputs = document.getElementsByName('rd');
    const isRadioSelected = Array.from(radioInputs).some((input) => input.checked);
    const isSelectSelected = selectInput.selectedIndex !== 0;

    if (!isRadioSelected || !isSelectSelected) {
        alert('Por favor, selecione as opções de conta e de mercado financeiro para prosseguir.');
        return false;
    }
}