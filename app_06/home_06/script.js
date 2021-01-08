// task 1 start
let btnBgChange = document.querySelector('#btn-bg-change'), // Кнопка смены фона
    tagBody = document.querySelector('body'), //-тег body
    colorInput; // цвет из инпута

btnBgChange.onclick = function () {
    colorInput = document.querySelector('#page-bg-input-1').value; // цвет из инпута
    tagBody.style.backgroundColor = colorInput;
}
// task 1 end

// task 2 start
let btnBgChange2 = document.querySelector('#btn-apply-change'); // Кнопка применения стилей
let btnReset = document.querySelector('#btn-reset'); // Кнопка сброса стилей

btnBgChange2.onclick = function () {
    let colorInputBg = document.querySelector('#page-bg-input-2').value, // цвет для фона
        colorInputFont = document.querySelector('#font-color-input').value; // цвет для текста

    tagBody.style.backgroundColor = colorInputBg;
    tagBody.style.color = colorInputFont;
}

btnReset.onclick = function () {
    tagBody.style.backgroundColor = '#ffffff';
    tagBody.style.color = '#000000';
}
// task 2 end

// task 3 start
let fzValue, textParagraph, fzOut; // объявляем переменные

fzOut = document.querySelector('#range-value-out');
fzValue = document.querySelector('#range-fz').value;
textParagraph = document.querySelector('.text-block__pgf');

function changeFZ() {

    textParagraph.style.fontSize = fzValue + 'px';
    fzOut.innerText = fzValue;
}
document.querySelector('#range-fz').oninput = changeFZ;
// task 3 end

// task 4 start
function changeFZ() {
    let fzValue, textParagraph, fzOut; // объявляем переменные

    fzOut = document.querySelector('#range-value-out');
    fzValue = document.querySelector('#range-fz').value;
    textParagraph = document.querySelector('.text-block__pgf');

    textParagraph.style.fontSize = fzValue + 'px';
    fzOut.innerText = fzValue;
}
// task 4 end

// task 5 start
let colorBlock = document.querySelector('.color-block'); // окрашиваемый блок

function changeBg() {
    let rangeColor1 = document.querySelector('#range-color-1').value, // значение ползунка
        rangeColor2 = document.querySelector('#range-color-2').value, // значение ползунка
        rangeColor3 = document.querySelector('#range-color-3').value, // значение ползунка
        colorOut1 = document.querySelector('#color-out-1'), // сюда выводим значения волзунка
        colorOut2 = document.querySelector('#color-out-2'), // сюда выводим значения волзунка
        colorOut3 = document.querySelector('#color-out-3'); // сюда выводим значения волзунка

    colorBlock.style.backgroundColor = 'rgb('+rangeColor1+','+rangeColor2+','+rangeColor3+')';

    colorOut1.innerText = rangeColor1;  // вывод значения волзунка
    colorOut2.innerText = rangeColor2;  // вывод значения волзунка
    colorOut3.innerText = rangeColor3;  // вывод значения волзунка
}
let 
// task 5 end