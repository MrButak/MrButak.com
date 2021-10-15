const fixedGridSize = 250000 //500px * 500px
let parentContainer;//document.querySelector('#parentContainer');
let removableWrapper;//document.createElement('div');
let gridBox;//document.createElement('div');
let clearBtn;//document.querySelector('#clearBtn');
let userInputGridSize;
let calculateNumberOfDivs;
let divDimentions;
let colorDivHover = document.getElementsByClassName('gridDivs')//references all of the divs created to make the grid

function createGrid() {

    parentContainer = document.querySelector('#parentContainer');
    removableWrapper = document.createElement('div');
    removableWrapper.classList.add('tempDiv')
    
    //promt user for grid size and calculate grid dimentions
    userInputGridSize = prompt("What grid size? 1 - 100");//this prompts "ok" button only works a few times. then its 2 clicks before input is ented, then 4, then 8 etc.
    userInputGridSize *= userInputGridSize; 
    calculateNumberOfDivs = fixedGridSize / userInputGridSize;
    divDimentions = Math.sqrt(calculateNumberOfDivs); //calculates div dimentions (width and height)
    divDimentions -= 2;// -2 to div dimentions because I have a border of 1px
    divDimentions += "px";
    
    // loops and creates grid based on user input
    for (let x = 0; x < userInputGridSize; x++) {
        gridBox = document.createElement('div');
        gridBox.style.width = (divDimentions);
        gridBox.style.height = (divDimentions);
        gridBox.style.border = '1px solid black';
        gridBox.classList.add('gridDivs')// I referenced this class name below to add hover effect to all
        removableWrapper.appendChild(gridBox);  
        parentContainer.appendChild(removableWrapper);
        // adds hover effect to all newly created divs
        colorDivHover[x].addEventListener('mouseover', function ( event ) {
            event.target.style.background = ('red');
        })
    }   
    clearButton();
}


function clearButton() {
    clearBtn = document.querySelector('#clearBtn');
    clearBtn.addEventListener('click', () => {
        
        parentContainer.removeChild(removableWrapper);// removes removableWrapper div along with all of the divs that make up the grid
        createGrid();
    }) 
}