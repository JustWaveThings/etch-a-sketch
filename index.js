

const boardContainer = document.querySelector("body > div"); // holds gameboard





function makeDivs(foo = 16) {
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

    const sketch = document.querySelectorAll(".squares"); // selects all divs so that I can apply an style on mouseover

    sketch.forEach((squares) => {
    squares.addEventListener("mouseover", () => {
        squares.setAttribute("style", "background-color: rgb(55, 122, 145);");
    });
    });
}

// draws board
makeDivs(); 

// removes board items interatively
function removeDivs() {
    const allRows = document.querySelectorAll(".rows");
    for (let i = 0; i < allRows.length; i++) {
        allRows[i].remove();
    }
}



const topOfPage = document.querySelector("body > span");
const title = document.createElement('h1');
const reload = document.createElement('button');
title.classList.add('header');
reload.classList.add('reload');
title.textContent = "Etch-a-Sketch by JustWaveThings";
reload.textContent = 'Erase and Redraw Sketch Board';

topOfPage.appendChild(title);
topOfPage.appendChild(reload);


// adding listener to reload button 
reload.addEventListener('click', fireReload);

// erases and reloads board 
function fireReload(foo) {
    foo = +prompt("New Board Time! How many squares across should we draw? \n(max: 150)", 16);
    if (foo >= 8 && foo <= 150 && Number.isInteger(foo)) {
        removeDivs();
        makeDivs(foo);
    } else {
        alert("Make sure you've input a whole number between 8 and 150!\nTry again.");
    }
}


// current problems (2);

// how to reset divs to white on reload button click

// how to redraw board to foo input 