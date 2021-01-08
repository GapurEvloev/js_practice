document.querySelector('.push').onclick = function () {

    // данные из input type = radio
    // console.log(document.querySelector('.radio-input:checked').value);

    let radio = document.querySelectorAll('.radio-input');
    // console.log(radio);
    // radio[0].hidden = true;
    for(let i = 0; i < radio.length; i++) {
        if(radio[i].checked){
            console.log(radio[i].value); 
        }
    }


    let p = document.querySelectorAll('p');
    for(let i = 0; i < p.length; i++) {
        p[i].style.color = 'red';
    }


    let option = document.querySelectorAll('#my-select option');
    for(let i = 0; i < option.length; i++) {
        if(option[i].selected) {
            console.log(option[i].value);
        }
    }


    // console.log(option);
    // for (let i = 0; i < option.length; i = i + 1) {
    //     // console.log(option[i].selected);
    //     if (option[i].selected) {
    //         console.log(option[i].innerHTML);
    //     }
    // }
}