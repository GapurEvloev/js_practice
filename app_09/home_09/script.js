// задача 1
let input1 = document.querySelector('#input-1'); // input для первой задачи

input1.onkeypress = function (e) {
    if (e.keyCode >= 97 && e.keyCode <= 122 ) {
        console.log(e.keyCode);
    } else {
        return false;
    }
}

// задача 2
let left = 0, // марджин по горизонтали
    sqMarginTop = 0, // марджин по вертикали
    rotate = 0;

document.onkeydown = function (e) {
    let line = document.querySelector('.line'), // родительский блок
        sq = document.querySelector('.sq'), // перемещающийся блок
        lineComputedStyle = getComputedStyle(line), // стили родительского блока
        linePaddingX = parseFloat(lineComputedStyle.paddingLeft) + parseFloat(lineComputedStyle.paddingRight), // левый и правый падинги родительского блока
        linePaddingY = parseFloat(lineComputedStyle.paddingTop) + parseFloat(lineComputedStyle.paddingBottom), // верхний и нижний падинги родительского блока
        limitX = line.offsetWidth - sq.offsetWidth - linePaddingX - 10, // ограничение хода по горизонтали
        limitY = line.offsetHeight - sq.offsetHeight - linePaddingY - 10; // ограничение хода по вертикали
    
    // стрелка влево
    if (e.key === "ArrowLeft" && left >= 10){
        left -= 10;
        sq.style.marginLeft = `${left}px`;
    }
    // стрелка вправо
    if (e.key === "ArrowRight" && left <= limitX){
        left += 10;
        sq.style.marginLeft = `${left}px`;
    }
    // стрелка вверх
    if (e.key === "ArrowUp" && sqMarginTop >= 10){
        sqMarginTop -= 10;
        sq.style.marginTop = `${sqMarginTop}px`;
    }
    // стрелка вниз
    if (e.key === "ArrowDown" && sqMarginTop <= limitY){
        sqMarginTop += 10;
        sq.style.marginTop = `${sqMarginTop}px`;
    }

    // поворот на 45deg по нажатию на пробел
    if (e.keyCode === 32 || e.code === "Space"){
        rotate += 45;
        sq.style.transform = `rotate(${rotate}deg)`;
    }
}

// задача 3
let input3 = document.querySelector('#input-3') // input для третьей задачи
input3.onkeydown = function (e) {
    if ((e.keyCode >= 65 && e.keyCode <= 91)) {
        let rundomKeyCode = Math.floor(Math.random() * (91 - 65) + 65); // генерация кода символов от A до Z
        let symbol = String.fromCharCode(rundomKeyCode);
        console.log(symbol);
        input3.value = symbol;
        return false;
    } else if (e.keyCode == 8) { // разрешаем удалять (backspace)
        return 8;
    } else return false;
}

// задача 4 
const arr = {
    q: "w",
    w: "e",
    e: "r",
    r: "t",
    t: "y",
    y: "u",
    u: "i",
    i: "o",
    o: "p",
    p: "[",
    "[": "]",
    "]": "q",
    a: "s",
    s: "d",
    d: "f",
    f: "g",
    g: "h",
    h: "j",
    j: "k",
    k: "l",
    l: ";",
    ";": "'",
    "'": "\\",
    "\\": "a",
    z: "x",
    x: "c",
    c: "v",
    v: "b",
    b: "n",
    n: "m",
    m: ",",
    ',': ".",
    '.': "/",
    '/': "z"
}


let input4 = document.querySelector('#input-4'); // input для четвертой задачи
input4.onkeydown = function (e) {
    // проверка на нажатие через keyCode
    if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode == 188 || e.keyCode == 190 || e.keyCode == 191 || e.keyCode == 186 || e.keyCode == 222  || e.keyCode == 220 || e.keyCode == 219  || e.keyCode == 221) {
        let b = input4.value;
        b = arr[e.key];
        input4.value = b;
        console.log(e.keyCode);
        console.log(e.key);
        return false;
    } else if (e.keyCode == 8) { // разрешаем удалять (backspace)
        return 8;
    } else return false;
}