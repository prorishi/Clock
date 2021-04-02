const hands = [
    document.getElementById("hour"), 
    document.getElementById("minute"), 
    document.getElementById("second")
];
const digitalClock = document.getElementById("digital");

setInterval(main, 100);

function rotate(element, angle) {
    element.style.transform = `rotateZ(${angle + 180}deg)`;
}

function lt10(number) {
    if (number < 10) return '0' + number
    return number
}

function main() {
    let time = new Date();
    let hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

    digitalClock.innerText = `${lt10(hours)}:${lt10(minutes)}:${lt10(seconds)}`;

    if (hours > 12) hours -= 12;
    if (hours == 0) hours = 12;

    rotate(hands[0], hours * 30 + minutes / 2);
    rotate(hands[1], minutes * 6 + seconds / 10);
    rotate(hands[2], seconds * 6);
}
