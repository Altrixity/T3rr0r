self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  if (url.pathname.includes("/T3rr0r/proxy/")) {
    const encoded = url.pathname.split("/T3rr0r/proxy/")[1];
    const decoded = atob(encoded);

    event.respondWith(fetch(decoded, { mode: "cors" }));
  }
});
