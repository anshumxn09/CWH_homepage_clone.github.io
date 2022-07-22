const optionBox = document.getElementById('optionsContainer');
const clickMe = document.getElementById('toggle');
var toggling = false;
clickMe.addEventListener('click', () => {
    if((window.innerWidth > 888)){
        return;
    }
    if(!toggling){
        toggling = true;
        clickMe.innerText = "X";
        optionBox.style.display = "block";
        return;
    }
    toggling = false;
    optionBox.style.display = "none";
    clickMe.innerText = "|||";
})

setInterval(() => {
    if(window.innerWidth > 888){
        optionBox.style.display = "block";
        console.log('hello');
        return;
    }

    if(!toggling){
        optionBox.style.display = "none";
    }
}, 1000)