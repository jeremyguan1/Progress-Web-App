self.addEventListener("install", function(event) {
  console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches.open("static").then(caches => {
      console.log("[Service Worker] Precaching App Shell");
      caches.add("/src/js/app.js");
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("[Service Worker] Activating Service Worker ....", event);
  return self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  event.respondWith(fetch(event.request));
});
