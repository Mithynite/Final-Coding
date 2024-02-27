const hamburger = document.getElementById('hamburger');

let hamOpen = false;
hamburger.addEventListener('click', () => {
    hamOpen = !hamOpen;
    if(hamOpen){
        hamburger.classList.remove('hamburger-closed');
        hamburger.classList.add('hamburger-open');
    }
    else{
        hamburger.classList.remove('hamburger-open');
        hamburger.classList.add('hamburger-closed');
    }
})