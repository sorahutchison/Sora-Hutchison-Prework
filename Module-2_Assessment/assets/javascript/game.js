// words list
var words = ["STRAWBERRY", "BLUEBERRY", "BLACKBERRY", "CHERRY", "RASPBERRY"];

var maxNumGuesses = 8; 
var guessedLetters = []; 
var ansWordArr = []; 
var numGuessesRemaining = 0; 
var numWins = 0; 
var numLosses = 0; 
var isFinished = false; 
var ansWord; 

// restart function
function setup() {
    //random word pick
    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];

    // adds underline
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }

 
    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];

 
    document.getElementById("image").src = "";
    document.getElementById("numGuesses").style.color = "";


    updateScreen();
};

//updates
function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

//functions
function checkGuess(letter) {

    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            if (numGuessesRemaining <=3) {
                document.getElementById("numGuesses").style.color = "#e12d2e";
            }
        } else { 
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                } 
            }                
        }
    }

}; 
//if winner
function isWinner() {
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
        //pics
        if(ansWord === "STRAWBERRY") {
            document.getElementById("image").src = "assets/images/strawberry.jpeg";
        } else if (ansWord === "BLACKBERRY") {
            document.getElementById("image").src = "assets/images/blackberry.png";
        } else if (ansWord === "BLUEBERRY") {
            document.getElementById("image").src = "assets/images/blueberry.png";
        } else if (ansWord === "CHERRY") {
            document.getElementById("image").src = "assets/images/cherry.png";
        } else if (ansWord === "RASPBERRY") {
            document.getElementById("image").src = "assets/images/raspberry.jpg";
        }
    }
};

//if loser
function isLoser() {

    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
        document.getElementById("image").src = "assets/images/loser.jpeg";
        document.getElementById("numLosses").style.color = "#e12d2e";
    }

};


//key press
document.onkeyup = function(event) {

    if (isFinished) {
        setup();
        isFinished = false;
    } else {

        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase()); 
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};


setup();
updateScreen();

console.log(ansWord);








