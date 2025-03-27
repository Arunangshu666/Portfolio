const changeColorBtn = document.getElementById('changeColorBtn');

function changeBackgroundColor(){
    document.body.style.backgroundColor = document.body.backgroundColor === 'lightblue'?'#f4f4f4': 'lightblue';
}

changeColorBtn.addEventListener('click', changeBackgroundColor);