// Задание 1
let hideBtn = document.querySelector('#hide-btn'),
	link = document.querySelector('link');

hideBtn.onclick = function() {
	link.href = 'style2.css';
}
// 

// Задание 2
document.querySelector('#add-word2').onclick = () => {
	let pOut2 = document.querySelector('#out-p-2');

	pOut2.innerText += ' world';
}
// 

// Задание 3
document.querySelector('#add-word3').onclick = () => {
	let pOut3 = document.querySelector('#out-p-3');

	pOut3.insertAdjacentHTML('afterbegin', 'The world is telling you ');
}
// 

// Задание 4
document.querySelector('#add-word4').onclick = () => {
	let pOut4 = document.querySelector('#out-p-4');

	pOut4.insertAdjacentHTML('beforebegin', 'Любой текст');
}
//

// Задание 5
document.querySelector('#add-word5').onclick = () => {
	let pOut5 = document.querySelector('#out-p-5');

	pOut5.insertAdjacentHTML('beforeend', ' world');
}
//

// Задание 6
document.querySelector('#add-word6').onclick = () => {
	let pOut6 = document.querySelector('#out-p-6');

	pOut6.innerText = '<b>Hi</b>';
}
//

// Задание 7
document.querySelector('#add-word7').onclick = () => {
	let pOut7 = document.querySelector('#out-p-7');

	pOut7.outerText = '<b>Hi</b>';
}
//