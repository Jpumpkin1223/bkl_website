'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c579aa1150e82d735d04816309de21b5",
"index.html": "6f0c491677e2b69c8282ba912a19182f",
"/": "6f0c491677e2b69c8282ba912a19182f",
"main.dart.js": "22837f5a735c4b142a6c562a97d95666",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1f4cbb1244bf6229b5b8f152aa172899",
"assets/AssetManifest.json": "39e9758a7186d03406e57b6424614b89",
"assets/NOTICES": "59ed610354b0d3b531a6a9f97b256e61",
"assets/FontManifest.json": "9aeffcac0a95346eec1407956e481364",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/main_page/search_inner_desktop.png": "10bdbc870b3fcbbeec72f0e1b0c3d683",
"assets/assets/main_page/banner_1.webp": "a46f55fb554a4efc61dcd7f4dd7e1761",
"assets/assets/main_page/use_inner_3_desktop.png": "a5fe2adc785cd0ae3b925e5eee578538",
"assets/assets/main_page/icon_arrow_left.png": "8ca684291f19af61fbb3b437f4303a90",
"assets/assets/main_page/search_inner_2x_mobile.png": "6e071e04b31bacf7bf59e75b28dc3352",
"assets/assets/main_page/tjlabs_logo_desktop.png": "a405fd829da1e7f81a0bbae2edc49c1f",
"assets/assets/main_page/screen_shot_3_desktop.png": "62481a2e2b9953f7d0908122b8348c23",
"assets/assets/main_page/ticket_price_desktop.png": "e950e1ab2b6e85dd2f9731dd67029d09",
"assets/assets/main_page/ticket_price_2x_mobile.png": "ce44ee8b98dfc13e917fbbc3c23710f7",
"assets/assets/main_page/map_mobile.png": "56f30180d8c8a69169def2b3790fa274",
"assets/assets/main_page/map_desktop.png": "11bc02d07a748059747fbc29768a4beb",
"assets/assets/main_page/schedule_2x_mobile.png": "643b81aa94dfd9e2122d5e7b41321bb8",
"assets/assets/main_page/use_inner_2_desktop.png": "1cafbf1da0f8430107e907ac865127be",
"assets/assets/main_page/screen_shot_1_desktop.png": "5bb5905f3aa293dd53f1fc7e037ac15c",
"assets/assets/main_page/banner_4.webp": "8b569595f028644a82cf0988d2c42cb4",
"assets/assets/main_page/main_logo.png": "df28bca656d2bd05e72ec40159668300",
"assets/assets/main_page/banner_3.webp": "30a0d565a4b0bcd60619ebc3fb454145",
"assets/assets/main_page/screen_shot_2_desktop.png": "d155dede78f532c4dcca04245bfa6d09",
"assets/assets/main_page/use_inner_1_desktop.png": "c45e5dd98c07cc4583128076d9c2ec38",
"assets/assets/main_page/map_2x_mobile.png": "e2ed828d23d0bc54cbfce30931d93737",
"assets/assets/main_page/use_inner_4_desktop.png": "3e74f08e3e3bc1e09c8494d0839ac2ec",
"assets/assets/main_page/icon_arrow_right.png": "42da54c5957c429d5cecf9d2f458cc30",
"assets/assets/main_page/schedule_desktop.png": "28b999b677ecbdb3da3d48a8545d0727",
"assets/assets/main_page/banner_2.webp": "7800409847acf9acb6f68ccd284b9471",
"assets/assets/font/Pretendard/Pretendard-Regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/assets/font/Pretendard/Pretendard-Black.otf": "6bc3f501ba4e736b706074a29826ec0a",
"assets/assets/font/Pretendard/Pretendard-Medium.otf": "9ac30a1a68a5140a58b23aaf8025f1db",
"assets/assets/font/Pretendard/Pretendard-Light.otf": "aef3dc5f5592a0a9bfd7e8de7abdc2c5",
"assets/assets/font/Pretendard/Pretendard-ExtraBold.otf": "dac19e30ed93b7aed171830c38cda6a2",
"assets/assets/font/Pretendard/Pretendard-Bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/assets/font/Pretendard/Pretendard-Thin.otf": "0b09a12c024a6380cd40dbfaf2fd79cd",
"assets/assets/font/Pretendard/Pretendard-SemiBold.otf": "d9d912f2630bae445757f4769271c35c",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
