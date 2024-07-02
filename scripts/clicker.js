let mainCapy = document.querySelector('.clicker-content__main-btn');
let counter = document.querySelector('.clicker-content__counter');
let factorCounter = document.querySelector('.stats-list-item__int');
let progressValue = document.querySelector('.value');
let curLevel = document.querySelector('.current-level')
let coinNeeded = document.querySelector('.coin-needed');

let lostEnergy = document.querySelector('.lost');
let GotEnergy = document.querySelector('.got');

let clicks = 0;
let factor = 1;

let level = Number(curLevel.textContent);
let needToLvl = [];


function needtolevel(level, cost) {
    needToLvl[level] = cost;
}

needtolevel(2, 100);
needtolevel(3, 500);
needtolevel(4, 2500);
needtolevel(5, 10000);
needtolevel(6, 25000);
needtolevel(7, 50000);
needtolevel(8, 100000);
needtolevel(9, 1000000);
needtolevel(10, 5000000);

function levelCheck() {
    if(clicks >= needToLvl[level + 1]) {
        level++;
        factor++;
        factorCounter.textContent++;
        progressValue.setAttribute("style", `width: 0%`)
    }
    curLevel.textContent = level;
    coinNeeded.textContent = needToLvl[level + 1]
}

let lost = 1000;
let got = 1000;

mainCapy.onclick = function() {
    clicks += factor;
    counter.textContent = clicks;
    lostEnergy.textContent = lost - (clicks + factor);
    levelCheck();
    progressValue.setAttribute("style", `width: ${clicks / needToLvl[level + 1] * 100}%`);
}