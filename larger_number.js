// Function returns larger number out of the two numbers

function largerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "The values entered are invalid";
    }
}

console.log(largerNumber(85, 100));