//Input and Output document Objects
let pName = document.querySelector('.pName');
let attemptLimit = document.querySelector('.pGuessLimit');
let pGuess = document.querySelector('.pGuess');
let responseField = document.querySelector('.guessResult');

//Button Input document Objects
const nameSubmitter = document.querySelector('.nameSubmitter');
const guessLimitSubmitter = document.querySelector('.guessLimitSubmitter');
const guessSubmitter = document.querySelector('.guessSubmitter');

//RNG Core
const num = Math.floor(Math.random() * 100) + 1;

//Name Accept Logic
const acceptName = () => {
    nameSubmitter.disabled = true;
    pName.disabled = true;
    attemptLimit.disabled = false;
    guessLimitSubmitter.disabled = false;
    console.log('acceptName ran')
};
nameSubmitter.addEventListener('click', acceptName);
pName.addEventListener('keydown', guessEnter = (e) => {
    if (e.keyCode === 13) {
        acceptName();
    }
});
//# of Guesses Accept Logic
const acceptGuessLimit = () => {
    attemptLimit.disabled = true;
    guessLimitSubmitter.disabled = true;
    pGuess.disabled = false;
    guessSubmitter.disabled = false;
    console.log('acceptGuessLimit ran');
};
guessLimitSubmitter.addEventListener('click',acceptGuessLimit);
attemptLimit.addEventListener('keydown', guessEnter = (e) => {
    if (e.keyCode === 13) {
        acceptGuessLimit();
    }
});
//Guess Accept and game Logic
const acceptGuess = () => {
    console.log('acceptGuess was called')
    if (pGuess.value == num) {
        responseField.textContent = `Congratulations! You found the number! Wanna try again ${pName.value}?  (try again by reloading the website!)`;
        gameState = false;
        pGuess.value = null;
        console.log(attemptLimit.value);
    } else if (pGuess.value > num) {
        responseField.textContent = `${pGuess.value} is too big! Please enter a new value!`;
        attemptLimit.value = attemptLimit.value - 1;
        pGuess.value = null;
        console.log(attemptLimit.value);
        if (attemptLimit.value == 0) {
            gameState = false;
            responseField.textContent = `Oh no ${pName.value}! You ran out of Guesses! Want to try again? :'( (try again by reloading the website!)`;
            console.log('Fail screen low ultimate ran');
        };
    } else if (pGuess.value < num) {
        responseField.textContent = `${pGuess.value} is too small! Please enter a new value!`;
        attemptLimit.value = attemptLimit.value - 1;
        pGuess.value = null;
        console.log(attemptLimit.value);
        if (attemptLimit.value == 0) {
            gameState = false;
            responseField.textContent = `Oh no ${pName.value}! You ran out of Guesses! Want to try again? :'(  (try again by reloading the website!)`;
            console.log('Fail screen low ultimate ran');
        };
}};
guessSubmitter.addEventListener('click', acceptGuess);
pGuess.addEventListener('keydown', guessEnter = (e) => {
    if (e.keyCode === 13) {
        acceptGuess();
    }
});