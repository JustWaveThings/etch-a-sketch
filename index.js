

const boardContainer = document.querySelector("body > div"); // holds gameboard



foo = 16;

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


const sketch = document.querySelectorAll('.squares'); // selects all divs so that I can apply an style on mouseover

sketch.forEach((squares) => {
    squares.addEventListener('mouseover', () => {
        squares.setAttribute('style', 'background-color: blue;');
    });
});

const topOfPage = document.querySelector("body > span");
const reload = document.createElement('button');
reload.classList.add('reload');
reload.textContent = 'Erase and Redraw Sketch Board';

topOfPage.appendChild(reload);


// adding listener to reload button 
reload.addEventListener('click', fireReload);

// dummy function to test functionality
function fireReload(foo) {
    foo = +prompt("New Board Time! How many squares across should I draw?", 16);
    (foo > 7 && foo <= 100 && Number.isInteger(foo)) ? true /* true condition i need to work on */ : alert("Make sure you've input an integer between 8 and 100!")
}
