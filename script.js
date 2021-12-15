let button = document.querySelector("#changeColorBtn")
let span = document.querySelector("span")
let main = document.querySelector("main")
let hex = document.querySelector("#hex")
let simple = document.querySelector("#simple")
let simpleIsOn = true;
let hexIsOn = false;

let simpleColors = ["red", "blue", "magenta", "black", "orange", "pink", "green"]

hex.addEventListener("click", function () {
    hex.classList.add("active")
    simple.classList.remove("active")
    simpleIsOn = false;
    hexIsOn = true;
})

simple.addEventListener("click", function (){
    hex.classList.remove("active")
    simple.classList.add("active")
    simpleIsOn = true;
    hexIsOn = false;
})

button.addEventListener("click", function () {
    if (simpleIsOn) {
        let randomIndex = Math.floor(Math.random() * simpleColors.length)
        let randomColor = simpleColors[randomIndex]
        console.log(randomColor)
        span.innerHTML = randomColor;
        main.style.backgroundColor = randomColor
    } else {
        let randomHex = `#${Math.floor(Math.random()*16777215).toString(16)}`
        span.innerHTML = randomHex;
        main.style.backgroundColor = randomHex;
    }
})


