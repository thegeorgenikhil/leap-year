var date = document.getElementById("date");
var checkBtn = document.getElementById("btn");
var resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", clickHandler);

function clickHandler() {
  if (date.value.length > 0) {
    var year = parseInt(date.value.slice(0, 4));
    var isLeap = false;
    if (year % 4 === 0) {
      if (year % 100 !== 0) {
        isLeap = true;
      } else {
        if (year % 400 === 0) {
          isLeap = true;
        } else {
          isLeap = false;
        }
      }
    } else {
      isLeap = false;
    }
    resultDiv.style.display = "block";
    if (isLeap) {
      resultDiv.innerHTML = "Yay! You were born in a leap year.";
    } else {
      resultDiv.innerHTML = "Aw, You were not born in a leap year";
    }
  }
}
