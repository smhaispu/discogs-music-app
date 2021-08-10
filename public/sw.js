const cacheName = "discogsPWA-v1";
const dataCacheName = "discogsDataPWA-v1";
const ImageCacheName = "discogsImagePWA-v1";
const filesToCache = ['/', '/index.html', '/src/index.js', '/src/app.js'];
const dataURL = 'https://api.discogs.com/artists/'
const imageURL = 'https://img.discogs.com/';

self.addEventListener('install', event => {
    event.waitUntil(caches.open(cacheName).then((cache) => {
        cache.addAll(filesToCache);
    }))
    // console.log('install event');
})

self.addEventListener('activate', event => {
    // console.log('activate event');
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key != cacheName) {
                    // console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }))
        })
    )
})

self.addEventListener('fetch', event => {
    if (event.request.url.startsWith(dataURL)) {
        event.respondWith(
            fetch(event.request).then(response => {
                return caches.open(dataCacheName).then(cache => {
                    console.log('[Service Worker] Response from the Fetch API', event.request.url);
                    cache.put(event.request.url, response.clone());
                    return response;
                })
            }))
    } else if (event.request.url.startsWith(imageURL)) {
        event.respondWith(
            fetch(event.request).then(response => {
                return caches.open(ImageCacheName).then(cache => {
                    console.log('[Service Worker] Response from the Fetch API', event.request.url);
                    cache.put(event.request.url, response.clone());
                    return response;
                })
            }))
    } else {
        event.respondWith(caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }))
    }

})
