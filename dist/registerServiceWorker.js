"use strict";function register(){if("production"===process.env.NODE_ENV&&"serviceWorker"in navigator){if(new URL(process.env.PUBLIC_URL,window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e=process.env.PUBLIC_URL+"/service-worker.js";isLocalhost?checkValidServiceWorker(e):registerValidSW(e)})}}function registerValidSW(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}function checkValidServiceWorker(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):registerValidSW(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=register,exports.unregister=unregister;var isLocalhost=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));