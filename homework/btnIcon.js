// задание 1
let btn = document.querySelector('.btn'),
    svgWhite = document.querySelector('.bi-arrow-down-left-circle'),
    svgBlack = document.querySelector('.bi-arrow-down-left-circle-fill')
    btn.addEventListener('click', () => {
        btn.classList.toggle('btn__clicks')
    if(btn.classList.contains('btn__clicks')){
        svgWhite.classList.remove('activ')
        svgWhite.classList.add('none')
        svgBlack.classList.remove('none')
        svgBlack.classList.add('activ')
    } else {
        svgWhite.classList.remove('none')
        svgWhite.classList.add('activ')
        svgBlack.classList.remove('activ')
        svgBlack.classList.add('none')
    }
    })