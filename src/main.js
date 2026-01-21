const modal = document.getElementById('modal');
const seeButton = document.getElementById('seeButton');
const closeButton = document.getElementById('closeButton');


function show(){
    modal.style.display = 'flex'
}

function hide(){
    modal.style.display = 'none'
}


seeButton.addEventListener('click', show);
closeButton.addEventListener('click', hide);
