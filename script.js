var button = document.getElementById("btn")
var Rbutton = document.getElementById("rbtn")
var h1 = document.getElementById("number")
localStorage.setItem("prints", localStorage.getItem("prints"))
if (localStorage.getItem("prints") == null) {
    localStorage.setItem("prints", "10")
}

h1.innerHTML = localStorage.getItem("prints")
function minus() {
    if (localStorage.getItem("prints") == "") {
        localStorage.setItem("prints", "10")
        localStorage.setItem("prints", localStorage.getItem("prints") - 1)
        h1.innerHTML = localStorage.getItem("prints")
        console.log(localStorage.getItem("prints"))
    } else {
        localStorage.setItem("prints", localStorage.getItem("prints") - 1)
        h1.innerHTML = localStorage.getItem("prints")
        console.log(localStorage.getItem("prints"))
    }
    
}

function reset() {
    localStorage.setItem("prints", "10")
    h1.innerHTML = localStorage.getItem("prints")
}

button.addEventListener('click', minus)
Rbutton.addEventListener('click', reset)
