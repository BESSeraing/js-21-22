let gameFrame;
let chrono = 0;
let targets = [];
let globalSpeed = 1;
let points = 0;
let pointsFrame;

init();

function init() {
    let title = document.createElement('h1');
    title.textContent = "JEU";

    pointsFrame = document.createElement("div")
    pointsFrame.innerText = points;
    pointsFrame.style.position = 'absolute';
    pointsFrame.style.left = '90%';
    pointsFrame.style.top = '0';

    gameFrame = document.createElement('div');
    gameFrame.style.position =  'absolute';
    gameFrame.style.width =  '90%';
    gameFrame.style.height =  '80%';
    gameFrame.style.top =  '10%';
    gameFrame.style.border =  '1px solid #333';
    gameFrame.style.overflow =  'hidden';

    document.body.append(title, pointsFrame, gameFrame);



    let clock = setInterval(doClock, 30);
}




function doClock() {
    chrono ++;
    if (chrono % 180 === 0) {
        createBall();
    }
    moveTargets();
}

function moveTargets() {
    for(let index in targets) {
        let target = targets[index];
        let rect = target.getBoundingClientRect();
        // console.log(rect.left);
        if (rect.left > gameFrame.offsetWidth) {
            removeTarget(target);
        } else {
            target.style.left = rect.left + globalSpeed + 'px';
        }

    }
}

function createBall() {
    console.log("create ball");
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.borderRadius = '50%';
    ball.style.left = "-50px";
    ball.style.backgroundColor = 'rgb('+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)+')';

    // Connaître le height du parent (gameFrame)
    let maxY = gameFrame.offsetHeight - 50;
    console.log( gameFrame.offsetHeight );

    ball.style.top = getRandomInt(0, maxY) + 'px';
    targets.push(ball);
    gameFrame.append(ball);

    ball.addEventListener('click', targetClicked);
}

function removeTarget(target) {
    target.remove();
    targets.splice(targets.indexOf(target),1);
}

function targetClicked(e) {
    points += 10;
    pointsFrame.innerText = points;
    removeTarget(e.target);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
