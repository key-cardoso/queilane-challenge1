function validarForm() {
    const textareaInput = document.querySelector('textarea[name="w3review"]');
    const textareaValue = textareaInput.value.trim();

    if (textareaValue.length === 0) {
        alert('Please enter some details to proceed.');
        return false;
    }

    if (textareaValue.length > 130) {
        alert('The details must not exceed 130 characters.');
        return false;
    }

    return true;
}