// document.querySelector('#test').onkeypress = function (e) {
//     console.log(e.keyCode);
//     if (e.keyCode < 97 || e.keyCode > 122) {
//         console.log("Invalid");
//         return false;
//     }
//     // e.altKey = false;
//     // e.charCode = 97;
//     // e.code = 'KeyA';
//     // e.ctrlKey = false;
//     // e.key = "a";
//     // e.keyCode = 97;
//     // e.shiftKey = false;
//     // e.timeStamp = 2324;
//     // return false;
// }

let left = 0;

document.onkeydown = function (e) {
    let sq = document.querySelector('.sq');
    console.log(e);
    if (e.key === "ArrowLeft"){
        left -= 10;
        console.log(e.key);
        sq.style.marginLeft = `${left}px`;
    }
    if (e.key === "ArrowRight"){
        left += 10;
        console.log(e.key);
        sq.style.marginLeft = `${left}px`;
    }
}