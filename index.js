/* requirements and pseudocode 

- initally we need a 16x16 grid of div squares
    - keep in mind, we will need to be able to get user input to add divs in same overall space, within a refresh the page function (limit 100x100 divs)
- add a css class to the divs with hover to change color 
- 
*/


// try to dom manipulate my way into 256 divs

    // function to get correct number of divs based on one input

    // make x number of containers, in each container make x number of divs -- guaranteed to always be a square and always render. 

// funct






const boardContainer = document.querySelector('#boardContainer');

function makeDivs(number) {
    for (let i = 0; i < number; i++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        boardContainer.appendChild(rows);
    }
}
makeDivs(8); // makes 8 divs under parent div 'boardcontainer



// // not using this function -- thought of new way to do this...
// function etchNumberOfSquares(number) {
//     number = parseInt(prompt("How many squares across?", "16"));
//     return (number != null && number > 0 && Number.isInteger(number) && number <= 100 ? (number * number) : "Choose integer between 1-100.")
// }
