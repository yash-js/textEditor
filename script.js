
let textarea = document.querySelector("textarea");

// For Tab
textarea.addEventListener("keydown", function (e) {
  if (e.key == "Tab") {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value =
      this.value.substring(0, start) + "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart = this.selectionEnd = start + 1;
  }
});

// Styling Functions

function boldBtn() {
  if (!textarea.classList.contains("boldText")) {
    textarea.classList.add("boldText");
  } else {
    textarea.classList.remove("boldText");
  }
}
function italicBtn() {
  if (!textarea.classList.contains("italicText")) {
    textarea.classList.add("italicText");
  } else {
    textarea.classList.remove("italicText");
  }
}
function underlineBtn() {
  if (!textarea.classList.contains("underlineText")) {
    textarea.classList.add("underlineText");
  } else {
    textarea.classList.remove("underlineText");
  }
}


