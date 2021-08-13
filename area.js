var inputs = document.querySelectorAll("input");
var result = document.querySelector(".formula");
var form = document.querySelector("form");
var error = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var base = inputs[0];
  var height = inputs[1];
  if (base.value > 0 && height.value > 0) {
    var area = (1 / 2) * (base.value * height.value);
    result.textContent = area;
    inputs[0].value = " ";
    inputs[1].value = " ";
    error.style.display = "none";
  } else {
    error.innerText = "Base and height should be greater than 0";
  }
});
