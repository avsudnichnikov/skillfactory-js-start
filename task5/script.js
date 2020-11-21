const duplicateField = document.querySelector('#duplicateField');
const textField = document.querySelector('#textField');
const submitBtn = document.querySelector('#submitBtn');

textField.addEventListener('keyup', function () {
    duplicateField.textContent = this.value;
})

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(duplicateField.textContent);
    textField.value = '';
    duplicateField.textContent = '';
})
