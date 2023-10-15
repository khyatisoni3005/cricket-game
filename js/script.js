let indiaRun = 0;
let australiaRun = 0;
let indiaBalls = 0;
let australiaBalls = 0;
let indiawicket = 0;
let australiawicket = 0;
let battingTeam = "";
const totalBalls = 30;


function play(team) {
    document.getElementById("h2").innerHTML = ``;
    document.getElementById("what").innerHTML = "";
    if (team !== battingTeam) {
        return;
    }
    if (australiaRun) {

    }
    let outcome = playball();
    if (team === "INDIA") {
        if (outcome == "wicket") {
            indiawicket = indiawicket + 1;
        }
        else {
            indiaRun = indiaRun + outcome;
        }

        indiaBalls = indiaBalls + 1;
    }
    if (team === "AUSTRALIA") {

        if (outcome == "wicket") {
            australiawicket = australiawicket + 1
        }
        else {
            australiaRun = australiaRun + outcome;
        }

        australiaBalls = australiaBalls + 1;
    }
    let what = document.getElementById("what");

    if (outcome == "wicket" || outcome == 6 || outcome == 4) {
        what.classList.remove('animate__animated', 'animate__fadeIn'); // remove existing animation classes
        setTimeout(() => {
            what.innerHTML = outcome == "wicket" ? "WICKET!" : `${outcome} RUNS!`;
            what.classList.add('animate__animated', 'animate__fadeIn'); // add Animate.css classes for the fade-in animation
        }, 20); // short delay to ensure classes are removed before re-adding
    }

    changeBattting();
    updateScoreCard();
    result();
    need();


}
function need() {
    if (battingTeam == "INDIA" && australiaBalls >= totalBalls) {
        let runsNeeded = australiaRun - indiaRun + 1;
        let ballsNeeded = totalBalls - indiaBalls;
        document.getElementById("need-ind").innerHTML = ` need ${runsNeeded} runs in ${ballsNeeded} balls`;

    }
    else if (battingTeam == "AUSTRALIA" && indiaBalls >= totalBalls) {
        let neededRuns = indiaRun - australiaRun + 1;
        let neededBall = totalBalls - australiaBalls;
        document.getElementById("need-aus").innerHTML = ` need ${neededRuns} runs in ${neededBall} balls`;

    }
    if (indiaBalls >= totalBalls && australiaBalls >= totalBalls) {
        document.getElementById("need-ind").innerHTML = "";
        document.getElementById("need-aus").innerHTML = ""


    }

}
function convertBallsToOvers(balls) {
    const overs = Math.floor(balls / 6);
    const overBalls = balls - (overs * 6);
    return `${overs}.${overBalls}`;
}
function playball() {
    let outcomes = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6, "wicket"];
    let randomIndex = getRandomNumberInRange(0, outcomes.length - 1);
    return outcomes[randomIndex];

}
console.log(playball());

function updateScoreCard() {
    document.getElementById("india-run").innerHTML = indiaRun;
    document.getElementById("australia-run").innerHTML = australiaRun;
    const indiaOvers = convertBallsToOvers(indiaBalls);
    const australiaOvers = convertBallsToOvers(australiaBalls);
    document.getElementById("india-overs").innerHTML = indiaOvers;
    document.getElementById("australia-overs").innerHTML = australiaOvers;
    document.getElementById("india-wicket").innerHTML = indiawicket;
    document.getElementById("aus-wicket").innerHTML = australiawicket;

}
function result() {
    if (indiaBalls >= totalBalls && australiaBalls >= totalBalls) {
        if (indiaRun > australiaRun) {
            document.getElementById("h1").innerHTML = "WINNER IS INDIA"
            document.getElementById("img").src = "image/trofi-removebg-preview.png"

        }
        else if (indiaRun < australiaRun) {
            document.getElementById("h1").innerHTML = "WINNER IS AUSETRILIA"
            document.getElementById("img").src = "image/trofi-removebg-preview.png"


        }
    }

}

function toss() {
    const teams = ["INDIA", "AUSTRALIA"]
    const teamIndex = getRandomNumberInRange(0, 1);
    const winnerTeam = teams[teamIndex];
    document.getElementById("h2").innerHTML = `${winnerTeam} won the toss`

    if (winnerTeam === "INDIA") {
        // darkens the image by applying a CSS filter
        document.getElementById('indiaImg').style.filter = "brightness(100%)";
        document.getElementById('australiaImg').style.filter = "brightness(30%)";
    } else {
        // resets the image to full brightness
        document.getElementById('indiaImg').style.filter = "brightness(30%)";
        document.getElementById('australiaImg').style.filter = "brightness(100%)";
    }
    console.log(winnerTeam)

    battingTeam = winnerTeam;
    return winnerTeam;
}
function changeBattting() {
    if (battingTeam == "INDIA" && indiaBalls >= totalBalls) {
        battingTeam = "AUSTRALIA"
    }
    else if (battingTeam == "AUSTRALIA" && australiaBalls >= totalBalls) {
        battingTeam = "INDIA"
    };
    if (battingTeam === "INDIA") {
        // darkens the image by applying a CSS filter
        document.getElementById('indiaImg').style.filter = "brightness(100%)";
        document.getElementById('australiaImg').style.filter = "brightness(30%)";
    } else {
        // resets the image to full brightness
        document.getElementById('indiaImg').style.filter = "brightness(30%)";
        document.getElementById('australiaImg').style.filter = "brightness(100%)";
    }
    if (indiaBalls >= totalBalls && australiaBalls >= totalBalls) {
        document.getElementById('australiaImg').style.filter = "brightness(30%)";
        document.getElementById('indiaImg').style.filter = "brightness(30%)";
        battingTeam = ""
    }
}
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}