// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

function enterCorrectNum() {
    let numVar = prompt('enter a number?')

    while (numVar > 100) {
        numVar = prompt('enter a new number')
    }
}

enterCorrectNum()

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.