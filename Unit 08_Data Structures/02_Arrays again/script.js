const numbers = []

for(let i = 0; i < 10; i++){
    let num = Math.floor(Math.random() * 10) + 1;
    if(num % 2 !== 0){
        numbers.push(num);
    }
    
}

document.getElementById("sorted").innerHTML = numbers;