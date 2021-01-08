let j = 1,
    tab = document.querySelectorAll('.tab');

function init () {
    let tabBody = document.querySelectorAll('.tab-body');
    
    for (let i = j; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    }
}
init(j);

tab.forEach(function (element) {
    element.onclick = showTab;
});

function showTab () {
    let data = this.getAttribute('data');
    j = 0;
    init(j);
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
}