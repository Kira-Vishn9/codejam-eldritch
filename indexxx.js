import ancientsData from '../data/ancients.js';
import cardsDataGr from './data/mythicCards/green/index.js';
import cardsDataBr from './data/mythicCards/brown/index.js';
import cardsDataBl from './data/mythicCards/blue/index.js';

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
const buttons = document.querySelectorAll('.difficulty');

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
// let randNum = 0;

// function getRandomNum(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     const result =Math.floor(Math.random() * (max - min + 1)) + min;
//     return randNum = result;
//   };getRandomNum(0, 12);
//   console.log(randNum);

// ПОГНАЛИ НАХУЙ!!! ВСЕ ПОЛУЧИТЬСЯ!!!
bossAll.forEach((elem) => {
    elem.addEventListener('click', () => {
        level1.innerHTML = 'level 1';
        level2.innerHTML = 'level 2';
        level3.innerHTML = 'level 3';
        level4.innerHTML = 'level 4';
        level5.innerHTML = 'level 5';
    })
})
//функии вешашаем евенты на босоов
// boss Azathoth



boss1.addEventListener('click', () => {
    conteinerLevels.classList.remove('display_none');
    ChooseBoss = ancientsData[0];
    bossAll.forEach((elem) =>{
        elem.classList.remove('active')
    });
    bossAll[0].classList.add('active');
  
})

//boss Cthulthu
boss2.addEventListener('click', () => {
    conteinerLevels.classList.remove('display_none');
    bossAll.forEach((elem) =>{
        elem.classList.remove('active')
    });
    bossAll[1].classList.add('active');
    ChooseBoss = ancientsData[1];
})

//boss IogSothoth
boss3.addEventListener('click', () => {
    conteinerLevels.classList.remove('display_none');
    bossAll.forEach((elem) =>{
        elem.classList.remove('active')
    });
    bossAll[2].classList.add('active');
    ChooseBoss = ancientsData[2];
})

//ShubNiggurath
boss4.addEventListener('click', () => {
    conteinerLevels.classList.remove('display_none');
    bossAll.forEach((elem) =>{
        elem.classList.remove('active')
    });
    bossAll[3].classList.add('active');
    ChooseBoss = ancientsData[3];
})

// нажатие на деку
backgroundCard.addEventListener('click', () => {

    let firstcard;
    if (!gameDeck[0].every(val => val.length === 0)) {
        while (!firstcard) {
            firstcard = deleteCard(gameDeck[0]);
        }
        newDec.style.background = `url(${firstcard.cardFace})`;
        newDec.style.backgroundSize = "contain";
        newDec.style.backgroundRepeat = "no-repeat";
        rewrite(gameDeck);

        if (gameDeck[0].flat(Infinity).length === 0) {
            titleFirst.classList.add('finished');
        }

    } else if (!gameDeck[1].every(val => val.length === 0)) {

        while (!firstcard) {
            firstcard = deleteCard(gameDeck[1]);
        }
        newDec.style.background = `url(${firstcard.cardFace})`;
        newDec.style.backgroundSize = "contain";
        newDec.style.backgroundRepeat = "no-repeat";
        rewrite(gameDeck);

        if (gameDeck[1].flat(Infinity).length === 0) {
            titleSecond.classList.add('finished');
        }

    } else if (!gameDeck[2].every(val => val.length === 0)) {
        while (!firstcard) {
            firstcard = deleteCard(gameDeck[2]);
        }
        newDec.style.background = `url(${firstcard.cardFace})`;
        newDec.style.backgroundSize = "contain";
        newDec.style.backgroundRepeat = "no-repeat";
        rewrite(gameDeck);

        if (gameDeck[2].flat(Infinity).length === 0) {
            titleThird.classList.add('finished');
        }
    }
    if (gameDeck.flat(Infinity).length === 0) {
       
    }
})



//выкидываем карту
const deleteCard = (deckArray) => {
    if (deckArray) {
        let randNumb = Math.floor(Math.random() * 3);
        return deckArray[randNumb].pop();
    }}

// вешаем евент на массив уровней 

buttons.forEach((element, ) =>{
    element.addEventListener('click', (event) => {
        backgroundCard.classList.remove('display_none');
        buttonStart.classList.remove('display_none');
        conteinerTreker.classList.remove('display_none');
        
        buttons.forEach((elem, ) =>{
            elem.classList.remove('active_level');  
        });
        if (event.target.classList.contains('level_1')){
            deck = shuffle(buildDeckfromDifficulty(cardsDataGr, cardsDataBl, cardsDataBr, 'veryeasy'));
            buttons[0].classList.add('active_level');
        } else if (event.target.classList.contains('level_2')) {
            deck = shuffle(buildDeckfromDifficulty(cardsDataGr, cardsDataBl, cardsDataBr, 'easy'))
            buttons[1].classList.add('active_level');
        } else if (event.target.classList.contains('level_3')) {
            deck = shuffle(buildDeckfromDifficulty(cardsDataGr, cardsDataBl, cardsDataBr, 'normal'))
            buttons[2].classList.add('active_level');
        } else if (event.target.classList.contains('level_4')) {
            deck = shuffle(buildDeckfromDifficulty(cardsDataGr, cardsDataBl, cardsDataBr, 'hard'))
            buttons[3].classList.add('active_level');
        } else if (event.target.classList.contains('level_5')) {
            deck =shuffle(buildDeckfromDifficulty(cardsDataGr, cardsDataBl, cardsDataBr, 'veryhard'));
            buttons[4].classList.add('active_level');
        }
    })
})

buttonStart.addEventListener('click', () =>{
    gameDeck = shuffleDeck(ChooseBoss);
    rewrite(gameDeck);
    
});



// сортируем по уровню
const buildDeckfromDifficulty = (cardsDataGr, cardsDataBl, cardsDataBr, difficulty) => {
    let fullDeck = [...cardsDataGr, ...cardsDataBl, ...cardsDataBr];
    let easyCards = [];
    let normalCards = [];
    let hardCards = [];
    fullDeck.forEach(elem => {
        if (elem.difficulty === 'easy') {
            easyCards.push(elem);
        } else if (elem.difficulty === 'normal') {
            normalCards.push(elem);
        } else {
            hardCards.push(elem);
        }
    })
    switch (difficulty) {
        case 'veryeasy': {
            return [...shuffle(easyCards), ...shuffle(normalCards)];
        }
        case 'easy': {
            return [...shuffle(easyCards), ...shuffle(normalCards)];
        }
        case 'normal': {
            return [...shuffle(easyCards), ...shuffle(normalCards), ...shuffle(hardCards)];
        }
        case 'hard': {
            return [...shuffle(normalCards), ...shuffle(hardCards)];
        }
        case 'veryhard': {
            return [...shuffle(hardCards), ...shuffle(normalCards)];
        }
    }

}


//сортируем по цвету
const stagesCreate = (stage, deck) => {

    let greenCards = [];
    let brownCards = [];
    let blueCards = [];

    for (const key in stage) {
        for (let i = 0; i < stage[key]; i++) {
            if (key === 'greenCards') {
                const index = deck.findIndex(value => value.color === 'green');
                greenCards.push(...deck.splice(index, 1));
            } else if (key === 'brownCards') {
                const index = deck.findIndex(value => value.color === 'brown');
                brownCards.push(...deck.splice(index, 1));
            } else if (key === 'blueCards') {
                const index = deck.findIndex(value => value.color === 'blue');
                blueCards.push(...deck.splice(index, 1));
            }
        }
    }
    return [shuffle(greenCards), shuffle(brownCards), shuffle(blueCards)]

}


const shuffleDeck = (boss) => {

    const first = stagesCreate(boss.firstStage, deck);
    const second = stagesCreate(boss.secondStage, deck);
    const third = stagesCreate(boss.thirdStage, deck);

    return [first, second, third];


}

//трекер
const rewrite = (array) => {

    firstGreenPoint.textContent = array[0][0].length;
    firstbBluePoint.textContent = array[0][1].length;
    firstRedPoint.textContent = array[0][2].length;

    secondGreenPoint.textContent = array[1][0].length;
    secondBluePoint.textContent = array[1][1].length;
    secondRedPoint.textContent = array[1][2].length;

    thirdtGreenPoint.textContent = array[2][0].length;
    thirdbBluePoint.textContent = array[2][1].length;
    thirdRedPoint.textContent = array[2][2].length;
}

// замес колоды

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}























































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

