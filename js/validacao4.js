function validarForm() {
    const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
    const isCheckboxSelected = Array.from(checkboxInputs).some((input) => input.checked);

    if (!isCheckboxSelected) {
        alert('Please select at least one option to proceed.');
        return false;
    }
}