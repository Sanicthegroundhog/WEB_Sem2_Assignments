function takeSquareRoot() {
    let number = +document.getElementById("input1").value;
    

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;
    
}

function PI() {
    document.getElementById("result").innerHTML = Math.PI;
}

function Round() {
    document.getElementById("result").innerHTML = Math.round(7.8);
}
