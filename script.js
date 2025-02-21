function appendCharacter(character) {
    document.getElementById("display").value += character;
  }
  
  function appendFunction(funcName) {
    document.getElementById("display").value += funcName + "(";
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    let expression = document.getElementById("display").value;
    try {
      const result = new Function('return ' + expression)();
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }