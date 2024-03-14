
// multiplying it by itself (num * num).
function square(num) {
    return num * num;
}
function squareNumbers() {
    for (let k = 1; k <= 10; k++) {
    let squared = square(k);
    console.log("The square of " + k + " is: " + squared);
}
}

squareNumbers();
// // Call the function to square numbers and display the result
// javascript