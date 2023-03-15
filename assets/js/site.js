
let myTrigger = document.getElementById('triggerButton');
let myBall = document.getElementById('myBall');


myTrigger.addEventListener('click', () => {
    myBall.classList.toggle('animateRightSlow');

});