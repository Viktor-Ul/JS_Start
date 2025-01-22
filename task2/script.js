
document.querySelector('#consoleLog').addEventListener('click', 
    (event) => {
        alert('Метод для вывода информации в веб-консоли');
})

document.querySelector('#alert').addEventListener('click', 
    (event) => {
        alert('Что-то пошло не так ;)');
})

document.querySelector('#prompt').addEventListener('click', 
    (event) => {
        prompt('Это тот блок');
})

