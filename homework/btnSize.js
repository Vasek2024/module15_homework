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
    alert(`Ширина - ${dateWidth} и высота - ${dateHeight} видимой части документа`)
    console.log(`Высоту и ширину видимой части документа ${dateWidth} ${dateHeight}`)
})