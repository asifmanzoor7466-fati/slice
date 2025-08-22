
    function checkNumber() {
      const input = document.getElementById("numInput").value;
      const result = document.getElementById("result");

      try {
        if (input === "") {
          throw "Input is empty!";
        }
        if (isNaN(input)) {
          throw "Not a number!";
        }
        if (Number(input) < 0) {
          throw "Number cannot be negative!";
        }

        result.innerHTML = "You entered: " + input;
      } catch (err) {
        result.innerHTML = "Error: " + err;
      }
    }



