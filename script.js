/*
const alertButton = document.getElementById("mybutton");
alertButton.addEventListener("click", function () {
  alert("button clicked!");
});
*/
const attachEventToAlertButton = function() {
  const alertButton = document.getElementById("alert-button");
  alertButton.addEventListener("click", function() {
      alert("Hallo Stefan");
  });
};

const toggleColor = function() {
  const bodyElement = document.body;
  bodyElement.classList.toggle("red-background");
};

const attachEventToChangeColorButton = function() {
  const changeColorButton = document.getElementById("change-background-button");
  changeColorButton.addEventListener("click", function() {
      toggleColor();
  });
};

attachEventToAlertButton();
attachEventToChangeColorButton();