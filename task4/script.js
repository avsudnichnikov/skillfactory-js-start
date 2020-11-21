document.querySelector('#changeableText').addEventListener('click', function (event) {
    event.preventDefault();
    this.textContent = prompt('Служит для вывода информации в консоль');
})
