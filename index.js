
 function checkNumber() {
  const input = document.getElementById("numInput").value;
  const result = document.getElementById("result");

  try {
    if (input === "") {
      throw "Input is empty!";
    }

    const num = Number(input);  

    if (isNaN(num)) {
      throw "Not a number!";
    }
    if (num < 0) {
      throw "Number cannot be negative!";
    }

    result.innerHTML = "You entered: " + num;
  } catch (err) {
    result.innerHTML = "Error: " + err;
  }
}



