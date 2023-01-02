const inputEl = document.getElementById('input-el')
const submitEl = document.getElementById('submit-el')
const displayEl = document.getElementById('display-el')
const errorEL = document.getElementById('error-el')

submitEl.addEventListener('click', function() {
    let characters = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

    if(inputEl.value.match(characters)) {
        displayEl.innerHTML = ""
        inputEl.style.border = "1px solid hsl(0, 80%, 86%);"
        errorEL.style.display = "none"
    }
    else {
        displayEl.innerHTML = "Please provide a valid email"
        inputEl.style.border = "2px solid red"
        errorEL.style.display = "block"
    }
})