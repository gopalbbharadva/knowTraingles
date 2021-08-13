var inputs = document.querySelectorAll("input");
var result = document.querySelector("p");
var form = document.querySelector("form");
var error = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  var sum = 0;
  e.preventDefault();
  inputs.forEach((item) => {
    sum += Number(item.value);
  });
  if (inputs[0].value > 0 && inputs[1].value > 0 && inputs[2].value > 0) {
    if (sum === 180) {
      result.style.color = "#059669";
      result.innerText = "Nice! Your angles make traingle";
      inputs.forEach((item) => {
        item.value = "";
      });
    } else {
      result.style.color = "#dc2626";
      result.innerText = `Opps! Your triangle can't generate`;
    }
  } else {  
    error.innerText = "Angles of trainagles are always greater than 0";
  }
});
