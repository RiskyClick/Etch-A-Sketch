const DEFAULT_SIZE = 16;


const sizeChange = document.getElementsByClassName('.butt');


function clearDivs(){
    let elem = document.querySelectorAll('.sub');
    elem.remove();
}

function getSize(){
    let newSize = prompt("Enter a number > 4 and < 100:");
    if (newSize < 4 || newSize > 100) {
        getSize();
    } else {
        clearDivs();
        setupGrid(newSize);
    }
}

function changeColor(e){
    if (e.type === 'mouseover'){
        e.target.style.backgroundColor = 'blue';
    }
}



function setupGrid(size){
    console.log(size);
    const main = document.querySelector('.main');

    for(let i = 0; i < size * size; i++){
        const sub = document.createElement('div');
        sub.classList.add('sub');
        sub.addEventListener('mouseover', changeColor);
        main.appendChild(sub);
    }
}




window.onload = () => {
    setupGrid(DEFAULT_SIZE)
}