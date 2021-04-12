// Reference Elements from the DOM.
const hands = [
    document.getElementById("hour"), 
    document.getElementById("minute"), 
    document.getElementById("second")
];
const digitalClock = document.getElementById("digital");

// Execute the clock function every 100ms, to sustain the clocks.
setInterval(clock, 100);

// Rotates an element by a specified angle.
function rotate(element, angle) {
    element.style.transform = `rotateZ(${angle + 180}deg)`;
}

// Prefixes the number with a zero if it's not two-digit; needed for the digital clock.
function pad(number) {
    if (number < 10) return '0' + number
    return number
}

// Handles both the Clocks.
function clock() {
    let time = new Date();
    let hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

    digitalClock.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    if (hours > 12) hours -= 12;
    if (hours == 0) hours = 12;

    rotate(hands[0], hours * 30 + minutes / 2);
    rotate(hands[1], minutes * 6 + seconds / 10);
    rotate(hands[2], seconds * 6);
}
