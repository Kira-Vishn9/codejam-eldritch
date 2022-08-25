import ancientsData from '../data/ancients.js';
import cardsDataGr from '../data//mythicCards/green/index.js';
import cardsDataBr from '../data/mythicCards/brown/index.js';
import cardsDataBl from '../data/mythicCards/blue/index.js';

// виды боссов
const bossAll = document.querySelectorAll('.boss');
const boss1 = document.querySelector('.drevni_1');
const boss2 = document.querySelector('.drevni_2');
const boss3 = document.querySelector('.drevni_3');
const boss4 = document.querySelector('.drevni_4');
//все уровни
//контейнер всех уровни
const conteinerLevels = document.querySelector('.levels');
//массив уровней
const allLevels = document.querySelectorAll('.levUp');
//уровни по отдельности
const level1 = document.querySelector('.level_1');
const level2 = document.querySelector('.level_2');
const level3 = document.querySelector('.level_3');
const level4 = document.querySelector('.level_4');
const level5 = document.querySelector('.level_5');
//перевернутая колода
const backgroundCard = document.querySelector('.background_card');
//контейнер со счетчиком карт
const conteinerTreker = document.querySelector('.conteiner');
//массив тайтлов всех контейнеров
const titleTrekerAll = document.querySelectorAll('.conteiner_for_stage');
//тайтлы по отдельности
const titleFirst = document.querySelector('.first-title');
const titleSecond = document.querySelector('.second-title');
const titleThird = document.querySelector('.third-title');
//масcив всех уровней cчетчика трекера
const allStage = document.querySelectorAll('.conteiner_for_card');
//уровни счетчика по отдельности
const stage1 = document.querySelector('.stage_1');
const stage2 = document.querySelector('.stage_2');
const stage3 = document.querySelector('.stage_3');
//первый уровень счетчика 
let firstGreenPoint = document.querySelector('.first-green-point');
let firstbBluePoint = document.querySelector('.first-blue-point');
let firstRedPoint = document.querySelector('.first-red-point');
//второй уровень счетчика
let secondGreenPoint = document.querySelector('.second-green-point');
let secondBluePoint = document.querySelector('.second-blue-point');
let secondRedPoint = document.querySelector('.second-red-point');
//третий уровень счетчика
let thirdtGreenPoint = document.querySelector('.third-green-point');
let thirdbBluePoint = document.querySelector('.third-blue-point');
let thirdRedPoint = document.querySelector('.third-red-point');
//контейнер куда должны открываться карты
const newDec = document.querySelector('.open-card');
//кнопка старта для тусовки колоды
const buttonStart = document.querySelector('.button_start');

// новый массивы для работы

let ChooseBoss = {};
let deck = [];
let gameDeck = [];

// функция рандомного числа
let randNum = 0;

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result =Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum = result;
  };getRandomNum(0, 12);
  console.log(randNum);

// ПОГНАЛИ НАХУЙ!!! ВСЕ ПОЛУЧИТЬСЯ!!!

//функии вешашаем евенты на босоов
// boss Azathoth
boss1.addEventListener('click', () => {
    conteinerLevels.classList.remove('display_none');
    bossAll.forEach(element => {
        element.classList.remove('active');
    });
    boss1.classList.add('active');
    ChooseBoss = ancientsData[0];
})

//boss Cthulthu
boss2.addEventListener('click', () => {
    conteinerLevels.classList.remove('display_none');
    bossAll.forEach(element => {
        element.classList.remove('active');
    });
    boss2.classList.add('active');
    ChooseBoss = ancientsData[1];
})

//boss IogSothoth
boss3.addEventListener('click', () => {
    conteinerLevels.classList.remove('display_none');
    bossAll.forEach(element => {
        element.classList.remove('active');
    });
    boss3.classList.add('active');
    ChooseBoss = ancientsData[2];
})

//ShubNiggurath
boss4.addEventListener('click', () => {
    conteinerLevels.classList.remove('display_none');
    bossAll.forEach(element => {
        element.classList.remove('active');
    });
    boss4.classList.add('active');
    ChooseBoss = ancientsData[3];
})

// вешаем евент на массив уровней 

allLevels.forEach((element, index) =>{
    element.addEventListener('click', () => {
        backgroundCard.classList.remove('display_none');
        buttonStart.classList.remove('display_none');
        conteinerTreker.classList.remove('display_none');
        allLevels.forEach((element) =>{
            element.classList.remove('active_level');
        });
        allLevels[index].classList.add('active_level');
    })
})

// вешам евент на перевернутую колоду

backgroundCard.addEventListener('click', () =>{
    
})























































// const levUp = document.querySelectorAll('.levUp');

// const buttonStart =document.querySelector('.button_start');
// const conteiner = document.querySelector('.conteiner');
// const conteinerForCard = document.querySelectorAll('.conteiner_for_card');
// const newCol =document.querySelector('.new_col');
// let randNum = getRandomNum(1, 11);
// let blueN = `blue${randNum}`; 

// const firstStage = document.querySelector('.first-title');
// const secondStage = document.querySelector('.second-title');
// const thirdStage =document.querySelector('.third-title');

// let ChooseBoss = {};
// let deck = [];
// let gameDeck = [];


// console.log(blueN);

// boss.forEach((elem, index) => {
//     elem.addEventListener('click', () => {
//         levels.classList.remove('displa_none');
//         ChooseBoss =Ancients.ancientsData[3];
//     })});
//     console.log(ChooseBoss);


// levUp.forEach((elem, index) => {
//     elem.addEventListener('click', () =>{
//         indexLev = index;
//         backgroundCard.classList.remove('displa_none');
//         buttonStart.classList.remove('displa_none');
//         conteiner.classList.remove('displa_none');
//     })
// });


// buttonStart.addEventListener('click', deckneading)

// function deckneading(){ 
//     conteinerForCard.forEach((elem)=>{
//         const Green = document.querySelectorAll('.green');
//         Green[0].textContent =ancientsData[0].firstStage.greenCards;
//         const Blue = document.querySelectorAll('.blue');
//         Blue[0].textContent =ancientsData[0].firstStage.blueCards;
//         const Red = document.querySelectorAll('.red');
//         Red[0].textContent =ancientsData[0].firstStage.brownCards;

        
//         Green[1].textContent =ancientsData[0].secondStage.greenCards;
        
//         Blue[1].textContent =ancientsData[0].secondStage.blueCards;
        
//         Red[1].textContent =ancientsData[0].secondStage.brownCards;

        
//         Green[2].textContent =ancientsData[0].thirdStage.greenCards;
        
//         Blue[2].textContent =ancientsData[0].thirdStage.blueCards;
        
//         Red[2].textContent =ancientsData[0].thirdStage.brownCards;
        
//     })
//     ancientsData.forEach((elem) =>{
        
//     })
    
// };

// function getRandomNum(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     const result =Math.floor(Math.random() * (max - min + 1)) + min;
//     return result;
//   };getRandomNum(0, 12);
// console.log(randNum)
// backgroundCard.addEventListener('click', () =>{
//     let popCard;
//     if(!gameDeck[0].every(val => val.length ===0)){
//         while (!popCard){
//             popoCard = deleteDeck(gameDeck[0]);
//         }
//         newCol.style.background = `url(${popCard.cardFace})`;
//         newCol.style.backgroundSize = "contain";
//         newCol.style.backgroundRepeat = "no-repeat";
//         rewrite(gameDeck);
//     }
// }
// );



// function starGame () {
// let url = `./assets/Mythiccards/blue/${blueN}.png`;
// let img = new Image();
// img.src = url;
//     newCol.append(img);
// };

