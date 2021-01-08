let blocks = document.querySelectorAll('.block');

for(let i = 0; i < blocks.length; i++) {
    blocks[i].onclick = one;
}

// blocks.forEach (function (block) {
//     block.onclick = function () {
//         console.log('work');
            // console.log(this);
//     }
// })

function one() {
    console.log("work");
    console.log(this);
}