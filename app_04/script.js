// let a = 7;
// a = "9";

// // ==
// // !=
// // > < >= <=


// if (a === 9) {
//     console.log("work");
// } else {
//     console.log("not work");
// }

let r = Math.random();
r = r * 10;
r = Math.round(r);
console.log(r);

let userNum = document.querySelector('#user-num');
let btn = document.querySelector('#btn');
btn.onclick = checkNum;

function checkNum(e) {
    let num = userNum.value;
    num = parseInt(num);
    console.log(num);

    if (!isNaN(num)) {
        if (num == r) {
            alert('Вы угадали!');
            location.reload();
        } else {
            alert('Пробуй еще!');
        }
    } else {
        alert("Please enter correct number");
    }
}