// screen text overflow issues
// after entering lot of digits it's return . value without any operations
// why i cann't declare expression = screenBox.innerText out of the function .
var screenBox = document.querySelector('.screen');

screenBox.addEventListener('keydown', function (event) {
    // Get the key code of the pressed key
    var keyCode = event.keyCode || event.which;

    // Allowed key codes: 0-9, +, -, *, /, ., and Backspace
    var allowedKeyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 45, 42, 47, 46, 8];
    // Check if the key code is not in the allowedKeyCodes array
    if (allowedKeyCodes.indexOf(keyCode) === -1) {
        // Prevent the default action (typing the key)
        event.preventDefault();
    }
});

function getBtnText(btn) {
    screenBox.value = screenBox.value + btn.innerText
}

var expression;

function evaluateme() {
    expression = screenBox.value
    var res = eval(expression)
    if (res == undefined) {
        screenBox.value = "wrong input"
    } else {
        screenBox.value = res
    }

}

function BackBtn() {
    expression = screenBox.value
    var lgth = expression.length
    if (lgth > 0) {
        expression = expression.slice(0, -1); // Remove the last character
        screenBox.value = expression;
    }
}

function allClear() {
    screenBox.value = ""
}