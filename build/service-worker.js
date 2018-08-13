/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "08cb09a33036854ed6be3b4ed71b766c"
  },
  {
    "url": "about.html",
    "revision": "02a85bffb7e59ce271e54de2545ca721"
  },
  {
    "url": "assets/css/0.styles.485ae2de.css",
    "revision": "d8c4e2f7d37649f97d91cbb17d3c4e0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.d314a889.js",
    "revision": "77fea7426cad9b322f6f0c9e274e9c96"
  },
  {
    "url": "assets/js/4.7a3f864c.js",
    "revision": "625876dbddf68c7b24dab342c72ca13d"
  },
  {
    "url": "assets/js/5.fd050c2a.js",
    "revision": "47dc041df8a7a2328672ff2047362f02"
  },
  {
    "url": "assets/js/6.43e512b9.js",
    "revision": "2fc13226f55c2680e1b3e8b2fdab8298"
  },
  {
    "url": "assets/js/7.0b8ce13d.js",
    "revision": "53c8ee30bde240319b996f6039d50a16"
  },
  {
    "url": "assets/js/8.07cdc994.js",
    "revision": "fc74602abee9534d28414c1bd9009e8d"
  },
  {
    "url": "assets/js/app.a9247fbe.js",
    "revision": "d601a9121e9bebb374aacac73952f2ad"
  },
  {
    "url": "basic/index.html",
    "revision": "d7f0e3342d13a7b07832880c41246dfc"
  },
  {
    "url": "hero.png",
    "revision": "8fe765eec12f8b66f3a17a313a7c0335"
  },
  {
    "url": "index.html",
    "revision": "6b6343e62a941c165a238e839475d8b5"
  },
  {
    "url": "index404.html",
    "revision": "0a7d2c7a161d1717e60bdac5e213318c"
  },
  {
    "url": "sixteen/index.html",
    "revision": "647d1bffb536349dd5e095ef31ffe275"
  },
  {
    "url": "tweleve/index.html",
    "revision": "58fcde40d17ca45ab73befdb5a7262f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
