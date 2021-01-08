// Task 1
for (let i = 0; i <= 100; i++) {
    document.querySelector('#num-out').innerText += ' '+i;
}

// Task 2
for (let i = 0; i <= 101; i+=2) {
    document.querySelector('#num-out-2').innerText += ' '+i;
}

// Task 3
for (let i = 200; i >= 0; i--) {
    document.querySelector('#num-out-3').innerText += ' '+i;
}

// Task 4
let sum4 = 0;

for (let i = 0; i <= 100; i++) {
    sum4 += i;
}
document.querySelector('#num-out-4').innerText += ' '+sum4;

// Task 5
let btnPower = document.querySelector('#power-btn');

btnPower.onclick = function() {
    let inputNum = document.querySelector('#input-num');
    let inputNumValue = parseInt(document.querySelector('#input-num').value);
    let inputPowerValue = parseInt(document.querySelector('#input-power').value);
    let numOut5 = document.querySelector('#num-out-5');
    let result = 1;

    if (isNaN(inputNumValue) || isNaN(inputPowerValue)) {
        alert('Введите числовые значения!')
    } else if ((inputNumValue <= 0) || (inputPowerValue < 0)) {
        alert('Введите число больше 0!')
    } else {
        for (let i = 0; i < inputPowerValue; i++) {
            result*=inputNumValue;
        }
        numOut5.innerText =`Результат: ${result}`;
    }
    
}

// Task 6
for (let i = 1; i <= 9; i++) {
    const baseNum = 7;
    document.querySelector('#num-out-6').innerText += `${i} * ${baseNum} = ${ i * baseNum };\n`;
}

// Task 7
let mult = 1;

for (let i = 1; i <= 50; i++) {
    mult *= i;
}
document.querySelector('#num-out-7').innerText += `${mult}`;

// Task 8
for ( let i = 1000; i <= 2000; i++) {
    document.querySelector('#num-out-8 span').insertAdjacentHTML('beforeend', `<span>&#${i}</span> `);
}

// Task 9
let addNumBtn = document.querySelector('#add-num');

addNumBtn.onclick = () => {
    let mainParagraphs = document.querySelectorAll('.main p');
    for (let i = 0; i < mainParagraphs.length; i++) {
        mainParagraphs[i].insertAdjacentHTML('afterbegin',  `${i + 1} .`);
    }
}

// Task 10
let day = document.querySelector('#day');
let mounth = document.querySelector('#mounth');
let btnZodiak = document.querySelector('#btn-zodiak');

btnZodiak.onclick = function () {
    let d = parseInt(day.value);
    let m = parseInt(mounth.value);
    let zodialArray = ['Водолей', 'Рыбы', 'Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец', 'Козерог']

    if (((m == 1) && (d >= 20)) || ((m == 2) && (d <= 18))) {
        document.querySelector('#num-out-10').innerText = zodialArray[0];
    } else if(((m == 2) && (d >= 19)) || ((m == 3) && (d <= 20))) {
        document.querySelector('#num-out-10').innerText = zodialArray[1];
    } else if(((m == 3) && (d >= 21)) || ((m == 4) && (d <= 19))) {
        document.querySelector('#num-out-10').innerText = zodialArray[2];
    } else if(((m == 4) && (d >= 20)) || ((m == 5) && (d <= 20))) {
        document.querySelector('#num-out-10').innerText = zodialArray[3];
    } else if(((m == 5) && (d >= 21)) || ((m == 6) && (d <= 20))) {
        document.querySelector('#num-out-10').innerText = zodialArray[4];
    } else if(((m == 6) && (d >= 21)) || ((m == 7) && (d <= 22))) {
        document.querySelector('#num-out-10').innerText = zodialArray[5];
    } else if(((m == 7) && (d >= 23)) || ((m == 8) && (d <= 22))) {
        document.querySelector('#num-out-10').innerText = zodialArray[6];
    } else if(((m == 8) && (d >= 23)) || ((m == 9) && (d <= 22))) {
        document.querySelector('#num-out-10').innerText = zodialArray[7];
    } else if(((m == 9) && (d >= 23)) || ((m == 10) && (d <= 22))) {
        document.querySelector('#num-out-10').innerText = zodialArray[8];
    } else if(((m == 10) && (d >= 23)) || ((m == 11) && (d <= 21))) {
        document.querySelector('#num-out-10').innerText = zodialArray[9];
    } else if(((m == 11) && (d >= 22)) || ((m == 12) && (d <= 21))) {
        document.querySelector('#num-out-10').innerText = zodialArray[10];
    } else if(((m == 12) && (d >= 22)) || ((m == 1) && (d <= 19))) {
        document.querySelector('#num-out-10').innerText = zodialArray[11];
    }
}

// Tasks 11-12
document.querySelector('#change-span-bg').onclick = () => {
    let allSpan = document.querySelectorAll('body span');
    let allParagrafes = document.querySelectorAll('body p').length;
    
    for (let i = 0; i < allSpan.length; i++) {
        allSpan[i].style.backgroundColor = 'yellow';
    }
    
    document.querySelector('#out-task-11').innerText +=  ' '+allParagrafes;
}

// Tsak 13
var arrayTask13 = [1, 0, 0, 0, 0, 0];
document.querySelector('#out-task-13').innerText += ' '+arrayTask13.join(", ");

document.querySelector('#btn-change-array').onclick = () => {
    let c = arrayTask13.indexOf(1);
    if (c < arrayTask13.length-1) {
        arrayTask13[c] = 0;
        arrayTask13[c+1] = 1;
    }
    document.querySelector('#out-task-13').innerText =  ' '+arrayTask13.join(", ");
}

// Task 14-15
let arrayTask14 = [11, -2, -4, 0, -4, 5, -8, 16, -36, -5, 34, -4],
    btn14 = document.querySelector('#btn-negative-num'),
    out14 = document.querySelector('#out-task-14'),
    out15 = document.querySelector('#out-task-15');

    btn14.onclick = () => {
        out14.innerHTML = arrayTask14.join(", ");
        let num = 0;
        for (let i = 0; i < arrayTask14.length; i++) {
            if (arrayTask14[i] < 0) {
                num += 1;
                out15.insertAdjacentHTML('afterend',  '<p> отрицательный элемент: ' + arrayTask14[i] + '</p>' );
            }
        }
        out14.insertAdjacentHTML('afterend',  '<p> В этом массиве отрицательных элементов: ' + num + '</p>' );
    }

// Task 16
let elementsNumber = document.querySelector('#elements-number'),
    array16 = [],
    btn16 = document.querySelector('#btn-elements-number'),
    out16 = document.querySelector('#elements-number-out');

btn16.onclick = () => {
    let elementsNumberValue = parseInt(elementsNumber.value);

    if(elementsNumberValue != 0 && elementsNumberValue > 0) {
        for(let i = 0; i < elementsNumberValue; i++) {
            array16[i] = 1;
        } 
    } else {
        alert("Введите корректное число!");
    }
    if (array16.length > 0) {
        out16.innerHTML = `[${array16.join(', ')}]`;
    }
}





// Task 17
let elementsNumberR, btnElementsNumberR, elementsNumberOutR, arrayTask17;
arrayTask17 = [];
elementsNumberR = document.querySelector('#elements-number-random');
btnElementsNumberR = document.querySelector('#btn-elements-number-random');
elementsNumberOutR = document.querySelector('#elements-number-random-out');

btnElementsNumberR.onclick = () => {
    let elementsNumberRValue = parseInt(elementsNumberR.value);

    if ((elementsNumberRValue > 0)) {
        for (let i = 0; i < elementsNumberRValue; i++) {
            arrayTask17[i] = Math.floor(Math.random()*(100+1));;
        }
    } else {
        alert('Введите корректное число!')
    }
    elementsNumberOutR.innerHTML = '[' +  arrayTask17.join(', ') + ']';
}

// Task 18
let btnTask18, arraytask18Out, arrayTask18, array2Task18;
arrayTask18 = [1,'Второй',2,3,4,'Пятый'];
array2Task18 = [];
btnTask18 = document.querySelector('#btn-task18');
arraytask18Out = document.querySelector('#task18-out');

arraytask18Out.insertAdjacentHTML('beforebegin','<p>['+arrayTask18.join(' ')+']</p>')

btnTask18.onclick = () => {

    for (let i = 0; i < arrayTask18.length; i++) {
        if (typeof arrayTask18[i] == "number" && !isNaN(arrayTask18[i])) {
            array2Task18.push(arrayTask18[i]);
        }
    }
    arraytask18Out.innerHTML = `[${array2Task18.join(' ')}]`;
}

// task 19
let btnTask19, arraytask19Out, arrayTask19, array2Task19;
arrayTask19 = [5, 2, 5, 75, 101, 5, 2, 5, 148, 75, 60, 5, 532, 77];
btnTask19 = document.querySelector('#btn-task19');
arraytask19Out = document.querySelector('#task19-out');

arraytask19Out.insertAdjacentHTML('beforebegin','<p>['+arrayTask19.join(' ')+']</p>')

btnTask19.onclick = () => {
    let maxNum = 0;

    for (let i = 0; i < arrayTask19.length; i++) {
        if (arrayTask19[i] > maxNum ) {
            maxNum = arrayTask19[i];
        }
    }
    arraytask19Out.insertAdjacentHTML('beforebegin','<p>'+maxNum+'</p>');
}

// Task 20
let arrayTask20 = [10, 12, 12, 60, 45, -34, 45, 95, -76, -2, 9, 4, 12, 60, 60],
    btnTask20 = document.querySelector('#btn-task20'),
    outTask20 = document.querySelector('#out-task20');

outTask20.insertAdjacentHTML('beforebegin','<p>['+arrayTask20.join(', ')+']</p>')

btnTask20.onclick = () => {
    let objTask20 = {},
        key;

    for (let i = 0; i < arrayTask20.length; i++) {
        key = arrayTask20[i]; 
        console.log(objTask20[key]);
        
        if (objTask20[key] != undefined) {
            objTask20[key]++;

        } else {
            objTask20[key] = 1;
        }
    }
    
    let resultTask20 = JSON.stringify(objTask20).slice(1, JSON.stringify(objTask20).length - 1).split(",");

    outTask20.innerHTML += `<p>Statistics</p>`;
    for (let i = 0; i < resultTask20.length; i++) {
      outTask20.innerHTML += `<p>${resultTask20[i]}</p>`
    }
}