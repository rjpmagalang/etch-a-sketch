var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.addEventListener("click", toggleClassItem);
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var remove = document.createElement("button");
  remove.innerHTML = "remove";
  remove.addEventListener("click", removeItem);
  li.appendChild(remove);

  function removeItem() {
    var item = this.closest("li");
    item.remove();
  };

  function toggleClassItem() {
    var item = this.closest("li");
    li.classList.toggle("done");
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
