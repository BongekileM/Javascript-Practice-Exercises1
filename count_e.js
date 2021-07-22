// Function returns the number of 'e's in a word.

let str = "";
function countE(str) {
    if (str.match(/e/gi) === null) {
        return 0;
    } else {
        return str.match(/e/gi).length;
    }
}
console.log(countE("pEnsion e penny"));


  

  