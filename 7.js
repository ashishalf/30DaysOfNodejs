//Simple Calculator

const args = process.argv.slice(2);
const num1 = parseFloat(args[0]);

const operator = args[1];
const num2 = parseFloat(args[2]);

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
default:
    console.log("Enter Valid Values")
    return
}

console.log(result)
