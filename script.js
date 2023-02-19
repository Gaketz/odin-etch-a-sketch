//sets important constants
const container = document.getElementById('container');
const btn = document.getElementById('newGrid');
const resBtn = document.getElementById('reset')



// make grid
function makeGrid(num) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    for (let r = 0; r < num; r++) {
        let row = document.createElement('div');
        wrapper.appendChild(row).className = 'rows';
        for (let c = 0; c < num; c++) {
            let column = document.createElement('div');
            row.appendChild(column).className = 'columns';
            column.style.height = 325/num + 'px';
            column.style.width = 325/num + 'px';
            //hover efect
            column.addEventListener('mouseenter', () =>
            column.style.backgroundColor = 'black');
        };

    };
    container.appendChild(wrapper);
};

makeGrid(16);

//Add an event listener
btn.addEventListener('click', giveNum);
resBtn.addEventListener('click', resetGrid);


//Get a grid number from the user
function giveNum() {
    let newNum = prompt('Type your grid size');
    if(newNum == typeof Number || (newNum > 0  && newNum < 100)) {
        makeGrid(newNum);
        const wrapper = document.querySelector('.wrapper');
        wrapper.remove();
    } else {
    }
}

//Reseting a grid
function resetGrid() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.remove();
    makeGrid(16);
}

