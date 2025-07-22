let randomNumber = Math.floor(Math.random() * 100) + 1
let guessCount = 0

function checkGuess() {
    const userGuess = Number(document.getElementById("guess").value)
    guessCount++

    let feedback = "";
    if (userGuess === randomNumber) {
        feedback = `🎉 Correct! You guessed it in ${guessCount} attempts.`
    } else if (userGuess > randomNumber) {
        feedback = "Too high!"
    } else {
        feedback = "Too low!"
    }

    document.getElementById("feedback").textContent = feedback
    document.getElementById("attempts").textContent = `Attempts: ${guessCount}`
}