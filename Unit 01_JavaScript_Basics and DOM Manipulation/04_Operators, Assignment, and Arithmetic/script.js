let number1 = prompt("enter a number: ");
let number2 = prompt("enter a number: ");

number1 = +number1;
number2 = +number2;

console.log(typeof(number1))

sum = number1 + number2;
dif = number1 - number2;
prod = number1 * number2;
quo = number1 / number2;
mod = number1 % number2;

document.getElementById("sum").innerHTML = sum;
document.getElementById("dif").innerHTML = dif;
document.getElementById("prod").innerHTML = prod;
document.getElementById("quo").innerHTML = quo;
document.getElementById("mod").innerHTML = mod;