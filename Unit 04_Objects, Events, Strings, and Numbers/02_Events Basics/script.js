function mouseOverHandler() {
    document.getElementById("demo").innerHTML = "Hi I'm Spongebob"
}

function mouseOutHandler() {
    document.getElementById("Spongebob").hidden = false;
}

function keyDownHandler() {
    let x = 4
    let y = x + 9
    document.getElementById("demo").innerHTML = y
    
}

function keyUpHandler() {
    document.getElementById("Spongebob").hidden = true;
}