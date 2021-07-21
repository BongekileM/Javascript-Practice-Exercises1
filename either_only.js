// Function determines if a number is divisible by either 3 or 5, but not both. 

function eitherOnly(num) {
    if (num % 3 == 0 && num % 5 == 0 ) {
    return false;
    } else {
        return (num % 3 == 0 || num % 5 == 0);
    }   
}
console.log(eitherOnly(15));


