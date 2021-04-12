// Name of the Cache.
const CACHE = "cacheV1";

console.log('helo');

// Select files for caching.
let urlsToCache = [
    "./",
    "./index.html",
    "./components", 
    "./components/favicon.png", 
    "./components/clock-face.png",
    "./components/main.css", 
    "./components/main.js", 
    "./components/pwa-handler.js"
];

// Cache all the selected items once application is installed.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Caching started.");
            return cache.addAll(urlsToCache);
        })
    );
});

// Whenever a resource is requested, return if its cached else fetch the resourcefrom server.
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
