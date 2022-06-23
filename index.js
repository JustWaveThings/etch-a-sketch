/* requirements and pseudocode 

- initally we need a 16x16 grid of div squares
    - keep in mind, we will need to be able to get user input to add divs in same overall space, within a refresh the page function (limit 100x100 divs)
- add a css class to the divs with hover to change color 
- 
*/


// try to dom manipulate my way into 256 divs

    // function to get correct number of divs based on one input

    // make x number of containers, in each container make x number of divs -- guaranteed to always be a square and always render. 


const boardContainer = document.querySelector('#boardContainer');

let row = 0;
let column = 0;

document.write("starting function.")
function makeDivs(number) {
    document.write("in function - at top")
    while (row < number) {
        document.write("in row while.")
        // const rows = document.createElement('div');
        // rows.classList.add('rows');
        // boardContainer.appendChild(rows);

        while (column < number); {
            document.write("in column while")
            // const squares = document.createElement('div');
            // squares.classList.add('squares');
            // rows.appendChild(squares);
            column++;
            document.write(`${column} has column been increased?`)
        }
        row++;
        document.write(`${row} has row been increased?`);
    }
}

makeDivs(1); // makes 8 divs under parent div 'boardContainer' with class 'rows', and creates 8 divs in each row container named 'squares'

 

// // not using this function -- thought of new way to do this...
// function etchNumberOfSquares(number) {
//     number = parseInt(prompt("How many squares across?", "16"));
//     return (number != null && number > 0 && Number.isInteger(number) && number <= 100 ? (number * number) : "Choose integer between 1-100.")
// }
