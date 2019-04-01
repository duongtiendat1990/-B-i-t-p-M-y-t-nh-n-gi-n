
function listen() {
document.addEventListener("click",clickCount)
}
function clickCount() {
    let count = 0;
    if (count===0) {
        count= count+1;
    } else {
        event.preventDefault()
    }
}