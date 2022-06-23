/* requirements and pseudocode 

- initally we need a 16x16 grid of div squares
    - keep in mind, we will need to be able to get user input to add divs in same overall space, within a refresh the page function (limit 100x100 divs)
- add a css class to the divs with hover to change color 
- 
*/


// try to dom manipulate my way into 256 divs

    // function to get correct number of divs based on one input

function etchNumberOfSquares(number) {
    number = parseInt(prompt("How many squares across", "16"));
    console.log(number);
    console.log(typeof(number));
    return (number != null && number > 0 && Number.isInteger(number) && number <= 100 ? (number * number) : "Choose integer between 1-100.")

}

console.log(etchNumberOfSquares());

const container = document.querySelector("#container");


const squares = document.createElement("div");
squares.classList.add("squares");

container.appendChild(squares);
