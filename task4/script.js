document.querySelector('.link').addEventListener('click', 
    (event) => {
    const textfield = prompt('Введите текст');
    const textuser = document.querySelector('.link')
    textuser.textContent = textfield;   
    event.preventDefault(); 
})