
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

// const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 10

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})


var playerName;
var playerScore;
var gameResult = {};
var highscoreList = [];


function toHighscoreList() {
    playerName = $('#nameTag').text();   // for example value "Henry"
    playerScore = guessedWrong.length;   // for example value 3

    gameResult = {player: playerName, score: playerScore};
    highscoreList.push(gameResult);
    highscoreList.sort(function(a,b) { return (b.score - a.score ) });

    $('#score1').text(highscoreList[0].player + " - score: "+ highscoreList[0].score);
};




