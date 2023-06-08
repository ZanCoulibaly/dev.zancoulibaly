let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}
var typeText = document.querySelector(".typeText")
var textToBeTyped = "je suis développeur full stack front-end & backend."
var index = 0,
    isAdding = true

function playAnim() {
    setTimeout(function() {
        // set the text of typeText to a substring of the text to be typed using index.
        typeText.innerText = textToBeTyped.slice(0, index)
        if (isAdding) {
            // adding text
            if (index > textToBeTyped.length) {
                // no more text to add
                isAdding = false
                    //break: wait 2s before playing again
                setTimeout(function() {
                    playAnim()
                }, 2000)
                return
            } else { // increment index by 1
                index++
            }
        } else {
            // removing text
            if (index === 0) {
                // no more text to remove
                isAdding = true
            } else {
                // decrement index by 1
                index--
            }
        }
        // call itself
        playAnim()
    }, 120)
}
// start animation
playAnim()