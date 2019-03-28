function Addition() {
    let numberOne = Number(document.getElementById("Result").value);
    document.getElementById("Result").innerHTML = "";
}
function Answer() {
    let numberTwo = Number(document.getElementById("Result"));
    switch (this.id) {
        case addition:
            Result= numberOne + numberTwo
        break;
        case subtraction:
            Result= numberOne - numberTwo
        break;
        case multiplication:
            Result= numberOne * numberTwo
        break;
        case division:
            Result= numberOne / numberTwo
        break;
    document.getElementById("Result").innerHTML = Result;
    }
}