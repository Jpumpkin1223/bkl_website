'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c579aa1150e82d735d04816309de21b5",
"favicon.ico": "7f1c48e700a2eed4f94cf62a3602b427",
"index.html": "482f295938cb30a8c81ac0ba249aed38",
"/": "482f295938cb30a8c81ac0ba249aed38",
"main.dart.js": "da33044a57f28566756a19d8f0f191f7",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/android-chrome-192x192.png": "638419bc5c74569c8ebdad307dc29d4d",
"icons/apple-touch-icon.png": "b766b6d704bad697373ee9a1f6d049dd",
"icons/android-chrome-512x512.png": "199243ac6071c0bffc45409b0152d779",
"manifest.json": "991eae23f062283e16c6f07071ed601a",
"assets/AssetManifest.json": "b54cc15c4b40c3ff581c33d48226b7b4",
"assets/NOTICES": "0c08449bf42c34f432985486e5f5371b",
"assets/FontManifest.json": "9aeffcac0a95346eec1407956e481364",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/main_page/banner_1.webp": "a46f55fb554a4efc61dcd7f4dd7e1761",
"assets/assets/main_page/search_inner_desktop.webp": "5fbc602e4914b3f7dc9f5db6972be86e",
"assets/assets/main_page/event_info/search_inner_desktop.png": "0f7e74bca8bc1fb5e1b5e19e6e0093fa",
"assets/assets/main_page/event_info/inner_use_instruction_1_desktop.webp": "bf448dc88b9b070fcd32a6e168fba8c1",
"assets/assets/main_page/event_info/inner_use_instruction_4_desktop.webp": "ed0f1e45e99b3ac854d1488adeca88b2",
"assets/assets/main_page/event_info/inner_use_instruction_3_desktop.webp": "49815b82b880da07290d744c54ac89cb",
"assets/assets/main_page/event_info/inner_use_instruction_2_desktop.webp": "b008b8ec31fd01bd954f570d6c07abbe",
"assets/assets/main_page/event_info/icon_arrow_left.webp": "af131ac91d88e2cb0d386113f10b2b91",
"assets/assets/main_page/event_info/icon_arrow_right.webp": "979c6b8cc6d6313e47c368f31f4ebb41",
"assets/assets/main_page/event_info/inner_screen_shot_1.png": "2a1d697d0347be11a6d20d684d64e4bd",
"assets/assets/main_page/event_info/inner_screen_shot_1.jpg": "cf65714ae90b0b2da5bcad35dc6f554e",
"assets/assets/main_page/event_info/inner_screen_shot_2.png": "93649ec4a061a3c8aef72e0e7b7189c7",
"assets/assets/main_page/event_info/inner_screen_shot_2.jpg": "ecba1900551ddedb90866e7df1fe0ee5",
"assets/assets/main_page/event_info/inner_screen_shot_3.jpg": "cfa5fa8c35f8effc6d783d84185664af",
"assets/assets/main_page/event_info/inner_screen_shot_3.png": "578fe135c92344f2efe8b143ec47c90f",
"assets/assets/main_page/banner_5_mobile.webp": "fa8dfbe4237376f0c2d1b7427a151251",
"assets/assets/main_page/ticket_info/ticket_info_desktop.jpg": "976102e6345a0862dd87d97e969a2dd8",
"assets/assets/main_page/ticket_info/ticket_info_1_mobile.jpg": "f69df6b560c3ab03c5423be715cee010",
"assets/assets/main_page/ticket_info/ticket_info_2_mobile.png": "38a7fd0b49a013bf4b8b7dcdbf620dc5",
"assets/assets/main_page/map_mobile.webp": "c9b399eee3a25a55788b367d80f05916",
"assets/assets/main_page/map_desktop.webp": "1bb738767f3163043fdb883d77bf23f6",
"assets/assets/main_page/screen_shot_2_desktop.webp": "dc91bc55b0d0e4f98b09807a2315b796",
"assets/assets/main_page/main_logo.webp": "95130f39b038c15f2f8630bb9f6aa15b",
"assets/assets/main_page/banner_3_mobile.webp": "0fb095ccb8d139cad308ce835ec01fa6",
"assets/assets/main_page/search_inner_2x_mobile.webp": "f83bd4b8248ce47ede232dc1331bf2dc",
"assets/assets/main_page/map_2x_mobile.webp": "1b34ef48e85017d29a076c397471baf8",
"assets/assets/main_page/banner_6.webp": "d92ce80069998cdc256420c06204b75a",
"assets/assets/main_page/banner_6_mobile.webp": "bd3da3d2934fbe8ade57cecafa46319c",
"assets/assets/main_page/screen_shot_3_desktop.webp": "3e01fd538979e4a0ae7662f4d62f2df1",
"assets/assets/main_page/use_inner_1_desktop.webp": "bf448dc88b9b070fcd32a6e168fba8c1",
"assets/assets/main_page/tjlabs_logo_desktop.webp": "722d56ca49218f3d0479cba8c5865f0c",
"assets/assets/main_page/search_inner_3x_mobile.webp": "4212514b0d8441588051301eb51bb5ef",
"assets/assets/main_page/ticket_price_desktop.webp": "c8cbc81db6f3b23cc5da81f4fb626abe",
"assets/assets/main_page/screen_shot_1_desktop.webp": "84567b5e035bc24552a157f9c2450e66",
"assets/assets/main_page/map_info/map_info_mobile.png": "bc5abd57f684938c2248c7b457036898",
"assets/assets/main_page/map_info/map_info_desktop.png": "5852bba447fffecdcc62810a7bf1f483",
"assets/assets/main_page/ticket_price_2x_mobile.webp": "e6196847faf1813fed8669e4d4345526",
"assets/assets/main_page/use_inner_4_desktop.webp": "ed0f1e45e99b3ac854d1488adeca88b2",
"assets/assets/main_page/use_inner_3_desktop.webp": "49815b82b880da07290d744c54ac89cb",
"assets/assets/main_page/banner_5.webp": "3119e6f861026e34fbb809a438878c1f",
"assets/assets/main_page/banner_1_mobile.webp": "642bee24d10b9efafb458f10c6c0a3ad",
"assets/assets/main_page/play_store_button_3x_mobile.webp": "714805cecc6b468c40693954d8d9daee",
"assets/assets/main_page/app_store_button_3x_mobile.webp": "3f8e62a79886de1faf1996aeab772070",
"assets/assets/main_page/use_inner_2_desktop.webp": "b008b8ec31fd01bd954f570d6c07abbe",
"assets/assets/main_page/banner_4_mobile.webp": "bd48fe70ab25dc49622ddfd34540a39d",
"assets/assets/main_page/banner_4.webp": "8b569595f028644a82cf0988d2c42cb4",
"assets/assets/main_page/contact_info/tjlabs_logo.png": "151140e84fcc503f493765b2807bc618",
"assets/assets/main_page/icon_arrow_left.webp": "af131ac91d88e2cb0d386113f10b2b91",
"assets/assets/main_page/main_banner/main_banner_mobile.jpg": "787afe3209a761a70bbf1e23161ad952",
"assets/assets/main_page/main_banner/main_banner_desktop.jpg": "1c377dba09aa7b54d4597d0c0d8b9600",
"assets/assets/main_page/banner_3.webp": "30a0d565a4b0bcd60619ebc3fb454145",
"assets/assets/main_page/icon_arrow_right.webp": "979c6b8cc6d6313e47c368f31f4ebb41",
"assets/assets/main_page/schedule_2x_mobile.webp": "a5ed19bb9854af7c4f65cd8795a1da43",
"assets/assets/main_page/schedule_info/schedule_title_mobile.jpg": "f6f23908898970a75a07c62578b197c0",
"assets/assets/main_page/schedule_info/schedule_date_desktop.png": "a1b41c4ea692aa7a921832699c9360ce",
"assets/assets/main_page/schedule_info/schedule_graph_mobile.png": "7c47ec0e95793daea23a9e6ae56726f4",
"assets/assets/main_page/schedule_info/schedule_graph_1_desktop.png": "48e605853738ae2de5a8908bac154d92",
"assets/assets/main_page/schedule_info/schedule_title_desktop.jpg": "7c7a809d9728d8cc671b9ff1596cf559",
"assets/assets/main_page/schedule_info/schedule_date_mobile.png": "ad2321a9ed4b4829d49852e5b49117b1",
"assets/assets/main_page/schedule_info/schedule_graph_2_desktop.png": "ee83df4124227209040363c557852c86",
"assets/assets/main_page/schedule_desktop.webp": "1d8dc21761c348f7dae0c61c9fded7e7",
"assets/assets/main_page/banner_2_mobile.webp": "252277ad8da5ca576c9ff1205c8809ea",
"assets/assets/main_page/league_logo.png": "e51bdc51f64c5877331065e6462de3bb",
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
