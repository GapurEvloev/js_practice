function numGenerate(min, max) {
    let randomNum = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(randomNum);
}
randomNum = numGenerate(1, 9);
console.log(randomNum);

let input1 = document.querySelector('#input-1');
let btn1 = document.querySelector('#btn-1');
btn1.onclick = checkNum;

function checkNum() {
    let num = input1.value;
    num = parseInt(num);
    console.log(num);

    if(isNaN(num)) {
        alert('Please enter a valid number');
    } else {
        if (randomNum === num) {
            alert('Вы угадали!');
            location.reload();
        } else if (randomNum !== num) {
            alert('Попробуйте еще раз');
            input1.value = "";
        }
    }
}