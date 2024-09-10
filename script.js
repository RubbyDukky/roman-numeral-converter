// get references
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output-div");
const output = document.getElementById("output");

// loop function
/*
const getRomanNumeral = (num) => {
  let out = [];
  const romanRef = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  romanRef.forEach((refArr) => {
    while (num >= refArr[0]) {
      out.push(refArr[1]);
      num -= refArr[0];
    }
  })
  
  return out.join("");
}
*/

// recursive function
const getRomanNumeral = (num) => {
  if (num >= 1000) {
    return "M" + getRomanNumeral(num - 1000);
  } else if (num >= 900) {
    return "CM" + getRomanNumeral(num - 900);
  } else if (num >= 500) {
    return "D" + getRomanNumeral(num - 500);
  } else if (num >= 400) {
    return "CD" + getRomanNumeral(num - 400);
  } else if (num >= 100) {
    return "C" + getRomanNumeral(num - 100);
  } else if (num >= 90) {
    return "XC" + getRomanNumeral(num - 90);
  } else if (num >= 50) {
    return "L" + getRomanNumeral(num - 50);
  } else if (num >= 40) {
    return "XL" + getRomanNumeral(num - 40);
  } else if (num >= 10) {
    return "X" + getRomanNumeral(num - 10);
  } else if (num >= 9) {
    return "IX" + getRomanNumeral(num - 9);
  } else if (num >= 5) {
    return "V" + getRomanNumeral(num - 5);
  } else if (num >= 4) {
    return "IV" + getRomanNumeral(num - 4);
  } else if (num >= 1) {
    return "I" + getRomanNumeral(num - 1);
  } else {
    return "";
  }
}


const convertAndDisplayNumber = () => {
  const number = parseInt(numberInput.value, 10);
  if (isValidInput(number)) {
      displayConversion(getRomanNumeral(number));
  }
  outputDiv.classList.remove("hidden");
}

const isValidInput = (num) => {
  let isValid = true;
  if (numberInput.value === "") {
    displayWarning("Please enter a valid number");
    isValid = false;
  } else {
    if (num <= 0) {
      displayWarning("Please enter a number greater than or equal to 1");
      isValid = false;
    } else if (num >= 4000) {
      displayWarning("Please enter a number less than or equal to 3999");
      isValid = false;
    }
  }
  return isValid;
}

const displayWarning = (msg) => {
  outputDiv.classList.add("warning");
  output.innerText = msg;
}

const displayConversion = (msg) => {
  outputDiv.classList.remove("warning");
  output.innerText = msg;
}

// handle enter key
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertAndDisplayNumber();
  }
})

// get click event, store number, calculate and display roman numeral
convertBtn.addEventListener("click", convertAndDisplayNumber);