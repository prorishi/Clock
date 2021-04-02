const CACHE = "cacheV1";
let urlsToCache = ["./", "./index.html", "./components", "./components/clock.png", "./components/main.css", "./components/main.js", "./components/pwaHandler.js"];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response ? response : fetch(event.request);
        })
    );
});
