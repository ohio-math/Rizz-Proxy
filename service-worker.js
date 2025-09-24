// Script to be injected

self.addEventListener('fetch', event => {
  const encode = (input) => encodeURIComponent(input);
  const url = event.request.url;
  const compiled = new URL(event.request.url);

  // Example: proxy requests to /api/* to another server
  if (url.startsWith("http") {
    const newUrl = 'https://fschwieb-2597dad56586.herokuapp.com/prox?url=' + encode( url );
    event.respondWith(fetch(newUrl));
  } else {
    // Let other requests go normally
    event.respondWith(fetch(event.request));
  }
});
