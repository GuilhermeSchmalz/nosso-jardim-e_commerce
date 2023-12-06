
var radio = document.querySelector('.manual-btn')
var cont = 1
var className = document.document.body.classList
document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont++

    if(cont > 3) {
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true
}

//Tema
const switcher = document.querySelector('.btn-tema');

switcher.addEventListener('click', function() {

    document.body.classList.toggle('dark-theme')

    console.log('current class name: '+ className)

});

