/* Function returns the string "long" if the word is longer than 6 characters, medium if exactly 6 characters,
and short if less than 6 characters. */

let word = "";
function wordCheck(word) {
    if (word.length < 6) {
        return "short"; 
    } else if (word.length == 6) {
        return "medium"; 
    } else {
        return "long";
    }
}

console.log(wordCheck("Bongekile"));