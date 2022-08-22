const boss1 = document.querySelector('.drevni_1');
const boss2 = document.querySelector('.drevni_2');
const boss3 = document.querySelector('.drevni_3');
const boss4 = document.querySelector('.drevni_4');
const boss = document.querySelectorAll('.boss');
const levels = document.querySelector('.main');
let indexBoss = Number;
let indexLev = Number;
const levUp = document.querySelectorAll('.levUp');
const backgroundCard = document.querySelector('.background_card'); 

boss.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        indexBoss = index;
        levels.classList.remove('displa_none');
    })})


levUp.forEach((elem, index) => {
    elem.addEventListener('click', () =>{
        indexLev = index;
        backgroundCard.classList.remove('displa_none');
    })
})