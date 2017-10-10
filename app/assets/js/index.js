!(function () {
  'use strict';

  const status = navigator.onLine ? 'online' : 'offline';
  
  document.querySelector('#title').innerHTML = `PWA - Example (${status})`;
})();