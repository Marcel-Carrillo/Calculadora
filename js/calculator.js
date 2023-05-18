let addToScreen = (element) => {
  document.getElementById("screen").value += element;
}

let clearScreen = () => {
  document.getElementById("screen").value = "";
}

let calculate = () => {
  let operation = document.getElementById("screen").value;

  console.log(operation);  

  let result = "Fatal error";

  let operatorPosition = getOperatorPosition(operation);

  let operator = operation[operatorPosition];
  let operand1 = operation.slice(0, operatorPosition);
  let operand2 = operation.slice(operatorPosition + 1);
  
  if (checkOperand(operand1) && checkOperand(operand2)){
      result = getResult(operator, operand1, operand2);
  }    

  document.getElementById("screen").value = result;
}


let checkOperand = (operand) => {
  let operandOk = true;

  if (operand[0] == "*" || operand[0] == "/"){
      operandOk = false;
      console.log("A");
  }
  else {
      for (let i = 1; i < operand.length; i++){
          if (isNaN(operand[i])){
              operandOk = false;
              console.log("B");
          }
      }
  }

  console.log("OperandoOk " + operandOk);
  return operandOk;
}

let getResult = (operator, operand1, operand2) => {
  let res = "Fatal error";

  switch(operator){
      case "+":
          res = parseInt(operand1) + parseInt(operand2);
          break;
      case "-":
          res = parseInt(operand1) - parseInt(operand2);
          break;
      case "*":
          res = parseInt(operand1) * parseInt(operand2);
          break;
      case "/":
          res = parseInt(operand1) / parseInt(operand2);
          break;
  }

  return res;
}


let getOperatorPosition = (operation) => {
  let pos = -1;

  for (let i = 0; i < operation.length && pos == -1; i++){
      if (operation[i + 1] != undefined
          && isNaN(operation[i]) == false 
          && isNaN(operation[i + 1]) == true){
              pos = i + 1;
          }
  }

  return pos;
}

