var inputs = document.querySelectorAll("input");
var result = document.querySelector("p");
var form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  var sum = 0;
  e.preventDefault();
  inputs.forEach((item) => {
    sum += Number(item.value);
  });
  if (sum === 180) {
    result.style.color = "#34D399";
    result.innerText = "Nice! Your angles make traingle";
    inputs.forEach(item=>{
        item.value='';
    })
  } else {
    result.style.color = "#F87171";
    result.innerText = `Opps! Your triangle can't generate`;
  }
});
