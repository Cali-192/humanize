const cacheName = 'humanize-v1';
const staticAssets = [
  './',
  './index.html',
  './humanize.css',
  './humanize.js',
  'https://cdn-icons-png.flaticon.com/512/2103/2103633.png'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
