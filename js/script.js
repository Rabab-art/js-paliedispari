// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola 
// inserita è palindroma.





function isPalindrome(str) {


    var len = str.length;
    var mid = Math.floor(len / 2);

    for (var i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;

}



// function isPalindrome(s) {
//     var s = s.split("").reverse().join("");
//     s = 's';
//     if (s === s) {
//         return true
//     }
//     return false;

// };


var palindrome = isPalindrome(prompt('Inserisci una parola', 'giorgio'));
console.log(palindrome);