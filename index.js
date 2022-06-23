/* requirements and pseudocode 

- initally we need a 16x16 grid of div squares
    - keep in mind, we will need to be able to get user input to add divs in same overall space, within a refresh the page function (limit 100x100 divs)
- add a css class to the divs with hover to change color 
- 
*/


// try to dom manipulate my way into 256 divs

    // function to get correct number of divs based on one input

    // make x number of containers, in each container make x number of divs -- guaranteed to always be a square and always render. 


const boardContainer = document.querySelector("body > div");;

foo = 8;

function makeDivs(foo) {
    let row = 0;
    let column = 0;

    while (row < foo) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        boardContainer.appendChild(rows);
        column = 0;

        while (column < foo) {
            const squares = document.createElement('div');
            squares.classList.add('squares');
            rows.appendChild(squares);
            column++;
            
        }
        row++;
    }
}

 makeDivs(foo);