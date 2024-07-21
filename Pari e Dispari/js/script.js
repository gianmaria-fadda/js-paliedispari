const userChoice = prompt("Scegli 'pari' o 'dispari':");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));
playGame(userChoice, userNumber);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
    return number % 2 == 0;
}

function playGame(userChoice, userNumber) {
    const computerNumber = getRandomNumber(1, 5);
    const sum = userNumber + computerNumber;
    const sumIsEven = isEven(sum);

    console.log(`Hai scelto ${userChoice}. Il tuo numero è ${userNumber}, il numero del computer è ${computerNumber}. La somma è ${sum}.`);

    if ((sumIsEven && userChoice == 'pari') || (!sumIsEven && userChoice == 'dispari')) {
        console.log('Hai vinto!');
    } else {
        console.log('Hai perso!');
    }
}