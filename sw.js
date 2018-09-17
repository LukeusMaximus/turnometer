// Mostly from https://css-tricks.com/serviceworker-for-offline/

const VERSION = "v1";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(`${VERSION}/fundamentals`).then((cache) => {
            return cache.addAll([
                "/",
                "/config.js",
                "/turnometer.js",
                "/turnometer.css"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    console.log("WORKER: fetch event in progress.");

    if(event.request.method !== "GET") {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cached) => {

            const networked = fetch(event.request)
                .then(fetchedFromNetwork, unableToResolve)
                .catch(unableToResolve);

            /* We return the cached response immediately if there is one, and fall
               back to waiting on the network as usual.
            */
            return cached || networked;

            function fetchedFromNetwork(response) {
                /* We copy the response before replying to the network request.
                   This is the response that will be stored on the ServiceWorker cache.
                */
                const cacheCopy = response.clone();

                caches.open(`${VERSION}/pages`).then((cache) => {
                    /* We store the response for this request. It'll later become
                       available to caches.match(event.request) calls, when looking
                       for cached responses.
                    */
                    cache.put(event.request, cacheCopy);
                });
                return response;
            }

            function unableToResolve() {
                return new Response("<h1>Service Unavailable</h1>", {
                    status    : 503,
                    statusText: "Service Unavailable",
                    headers   : new Headers({
                        "Content-Type": "text/html"
                    })
                });
            }
        })
    );
});
