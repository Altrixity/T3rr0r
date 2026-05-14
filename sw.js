self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Only intercept /proxy/<base64>
  if (url.pathname.startsWith("/proxy/")) {
    const encoded = url.pathname.replace("/proxy/", "");
    const decoded = atob(encoded);

    event.respondWith(fetch(decoded, {
      mode: "cors",
      credentials: "omit"
    }));
  }
});
