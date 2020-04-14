// Global Variables
let button = document.querySelector('.colorchange');
let background = document.querySelector('body');
const colors = ['yellow', 'green', 'blue', 'gray', 'purple', 'teal', 'pink'];

// Event Listner
button.addEventListener('click', bodyBcg);

// Color Change Function
function bodyBcg () {
    let random = Math.floor(Math.random() * colors.length);
    background.style.backgroundColor = colors[random];
}


