const CACHE = "cacheV1";
let urlsToCache = ["./", "./index.html", "./components", "./components/clock.png", "./components/main.css", "./components/main.js", "./components/pwaHandler.js"];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE).then(function (cache) {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });