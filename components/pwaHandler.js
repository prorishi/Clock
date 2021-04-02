const serviceWorker = navigator.serviceWorker;

if (serviceWorker) {
    serviceWorker
        .register("./sw.js")
        .then(() => console.log("service worker registered"))
        .catch(() => console.log("failed to register service worker"));
}
let beforeInstallEvent;
const installButton = document.getElementById("install");

window.addEventListener('beforeinstallprompt',  (event) => {
    event.preventDefault();
    beforeInstallEvent = event;
    installButton.style.display = "block";
});

installButton.addEventListener('click', () => beforeInstallEvent.prompt());