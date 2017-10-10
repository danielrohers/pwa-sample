importScripts('/vendor/sw-toolbox/sw-toolbox.js');

toolbox.router.get('/css*', toolbox.cacheFirst);
toolbox.router.get('/images*', toolbox.cacheFirst);
toolbox.router.get('/js*', toolbox.cacheFirst);

toolbox.router.get('/', toolbox.cacheFirst, {
  cache: {
      name: 'pages',
  }
});

toolbox.router.get('/user', toolbox.cacheFirst, {
  cache: {
      name: 'pages',
  }
});