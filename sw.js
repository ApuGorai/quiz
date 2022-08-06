self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('user3schools').then((cache) => cache.addAll([
      './',
    './index.html',
    './css/styles.css',
     'manifest.webmanifest',
     'sw.js',
      'index.js',
      'install.html',
      'editor.html',
      'search.html',
      'home.html',
      '404.html',
      'profile.html',
    './images/icon_16.png',
    './images/icon_32.png',
    './images/icon_192.png',
    './images/icon_256.png',
    './images/icon_512.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
}); 
