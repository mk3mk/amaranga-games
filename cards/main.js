window.onload = function() {

    let card = document.querySelectorAll('.card');
    let cardCircle = document.querySelectorAll('.card-circle');
    let backLight1 = document.querySelector('#back-light-1');
    let light1 = document.querySelectorAll('.light-1');


    for (let i = 0; i < cardCircle.length; i++) {
        cardCircle[i].addEventListener('click', function() {
            backLight1.style = `bottom: ${(i+0)*100 - 600 + 'px'}`;
            cardCircle[i].parentElement.classList.remove('round-auto');
        })
    }

    for (let i = 0; i < light1.length; i++) {
        light1[i].addEventListener('click', function() {
            light1[i].parentElement.parentElement.classList.add('round-auto');
        })
    }

    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function() {
            card[i].classList.toggle('red');
        })
    }

}