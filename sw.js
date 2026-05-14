self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  if (url.pathname.includes("proxy/")) {
    const encoded = url.pathname.split("proxy/")[1];
    const decoded = atob(encoded);

    event.respondWith(fetch(decoded, { mode: "cors" }));
  }
});
