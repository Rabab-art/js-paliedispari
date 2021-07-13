// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer
//  (usando una funzione).
// // Sommiamo i due numeri
// // Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione)
// // Dichiariamo chi ha vinto.


// function random() {
//     var number = parseInt(prompt(Math.floor(Math.random() * 5) + 1));
//     number = parseInt(prompt(Math.floor(Math.random() * 5) + 1));

//     return number + number;

// };

// var number = random('Inserisci un numero')

// function somma(number, number) {
//     sum(numer + number);
// };

var userChoice = prompt('scegli "pari"o"dispari"', 'pari');

// VALIDATION
while (userChoice = prompt('scegli "pari"o"dispari"', 'pari')) {
    userChoice.toLowerCase().trim() !== 'pari' &&
        userChoice.toLowerCase().trim() !== 'dispari';
};

var userNumber = prompt('Scegli un numero da 1 a 5', 'pari');

// VALIDATION

while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    userNumber = prompt('scegli "pari"o"dispari"', 'pari');
};
//  GENERO UN NUMERO
var cpuNumber = Math.floor(Math.random() * (5 - 1 + 1) - 1);
var sum = parseInt(userNumber) + cpuNumber;

console.log(sum);