self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ask3schools').then((cache) => cache.addAll([
      'index.html',
      'ask3schools.png',
      'index.js',
      'style.css',
      'home.html',
      'search.html',
      '404.html',
      'profile.html',
      'daily.html',
      '/gk/home.html',
      '/gk/fullForms.html',
      '/gk/a.html',
      '/gk/b.html',
      '/gk/c.html',
      '/gk/d.html',
      '/gk/e.html',
      '/gk/f.html',
      '/gk/g.html',
      '/gk/h.html',
      '/gk/i.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
}); 
