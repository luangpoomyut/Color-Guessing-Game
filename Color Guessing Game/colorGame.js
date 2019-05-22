var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors
    squares[i].style.backgroundColor = colors[i];

    // add event listeners
    squares[i].addEventListener("click", function() {
        // retrieve color of square clicked on
        var clickedColor = this.style.backgroundColor;
        // compare clicked to picked color
        if (clickedColor === pickedColor) {
            alert("Correct!");
        }
        else {
            alert("Wrong!");
        }
    });
}