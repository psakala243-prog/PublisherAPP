const CACHE = "chipunka-v2";
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.add("./index.html").catch(()=>{})).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.map((k) => (k !== CACHE ? caches.delete(k) : null)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = e.request.url;
  if (url.includes("firebase") || url.includes("firestore") || url.includes("googleapis")) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});