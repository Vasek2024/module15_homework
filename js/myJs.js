
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

    // задание 2
let moduleFifteen = document.getElementsByClassName('module__Fifteen'),
    btnParameters = document.createElement('button')
    document.body.appendChild(btnParameters)
    btnParameters.style.cssText = `
        padding: 6px 38px;
        width: 150px;
        height: 32px;`
    btnParameters.classList.add('btnTwo')
    btnParameters.setAttribute('type', 'button');
    btnParameters.textContent = 'Размеры'

let bnnClick = document.querySelector('.btnTwo')
bnnClick.addEventListener('click', () => {
let dateWidth = document.documentElement.clientWidth,
    dateHeight = document.documentElement.clientHeight
    alert(`Ширина и высота видимой части документа ${dateWidth} ${dateHeight}`)
    console.log(`Высоту и ширину видимой части документа ${dateWidth} ${dateHeight}`)
})









// let formNumber = document.querySelector('.three__form-number'),
//     formData = document.querySelector('.three__form-data'),
//     formBtn = document.querySelector('.three__form-btn'),
//     formTitle = document.querySelector('.three__number-title'),

//     dataOne = document.querySelector('.four__data-one'),
//     dataTwo = document.querySelector('.four__data-two'),
//     fourBtn = document.querySelector('.four__form-btn'),
//     numberTitle = document.querySelector('.four__number-title'),
//     numberImg = document.querySelector('.four__number-img')


//     let fiveNumber = document.querySelector('.five__form-number'),
//         dataFiveOne = document.querySelector('.five__data-one'),
//         dataFiveTwo = document.querySelector('.five__data-two'),
//         fiveBtn = document.querySelector('.five__form-btn'),
//         numberTitleFive = document.querySelector('.five__number-title'),
//         numberImgFive = document.querySelector('.five__number-img')