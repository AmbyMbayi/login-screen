const inputs = document.querySelectorAll(".form__input");

/*add focus*/
function addFocus() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

/*remove focus*/
function removeFocus() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

/*call fucntion*/
inputs.forEach((input) => {
  input.addEventListener("focus", addFocus);
  input.addEventListener("blur", removeFocus);
});
