'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c579aa1150e82d735d04816309de21b5",
"favicon.ico": "7f1c48e700a2eed4f94cf62a3602b427",
"index.html": "a7cad457e9b42863ffdb9b1e060b5075",
"/": "a7cad457e9b42863ffdb9b1e060b5075",
"main.dart.js": "15717462ace5e9c16aeccaca299accc5",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/android-chrome-192x192.png": "638419bc5c74569c8ebdad307dc29d4d",
"icons/apple-touch-icon.png": "b766b6d704bad697373ee9a1f6d049dd",
"icons/android-chrome-512x512.png": "199243ac6071c0bffc45409b0152d779",
"manifest.json": "991eae23f062283e16c6f07071ed601a",
"assets/AssetManifest.json": "a5609d7f3bfed3946e4b3cd5d6653bf4",
"assets/NOTICES": "0c08449bf42c34f432985486e5f5371b",
"assets/FontManifest.json": "9aeffcac0a95346eec1407956e481364",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
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
"assets/assets/main_page/ticket_info/ticket_info_desktop.jpg": "976102e6345a0862dd87d97e969a2dd8",
"assets/assets/main_page/ticket_info/ticket_info_1_mobile.jpg": "f69df6b560c3ab03c5423be715cee010",
"assets/assets/main_page/ticket_info/ticket_info_2_mobile.png": "38a7fd0b49a013bf4b8b7dcdbf620dc5",
"assets/assets/main_page/map_mobile.webp": "c9b399eee3a25a55788b367d80f05916",
"assets/assets/main_page/search_inner_3x_mobile.webp": "4212514b0d8441588051301eb51bb5ef",
"assets/assets/main_page/map_info/map_info_mobile.png": "bc5abd57f684938c2248c7b457036898",
"assets/assets/main_page/map_info/map_info_desktop.png": "5852bba447fffecdcc62810a7bf1f483",
"assets/assets/main_page/play_store_button_3x_mobile.webp": "714805cecc6b468c40693954d8d9daee",
"assets/assets/main_page/app_store_button_3x_mobile.webp": "3f8e62a79886de1faf1996aeab772070",
"assets/assets/main_page/contact_info/tjlabs_logo.png": "151140e84fcc503f493765b2807bc618",
"assets/assets/main_page/main_banner/main_banner_2_mobile.jpg": "668e19d1052599a42505a9333f5e9fc9",
"assets/assets/main_page/main_banner/main_banner_1_desktop.jpg": "4a7e91b4ad5ead9e7e4d27535aeb4ce3",
"assets/assets/main_page/main_banner/main_banner_8_desktop.jpg": "777a71d958c6862a811e359279466c33",
"assets/assets/main_page/main_banner/main_banner_7_mobile.jpg": "cfb766772ea06f10aec271eb9cebc340",
"assets/assets/main_page/main_banner/main_banner_4_desktop.jpg": "0ecede04792a58a52b2c1e706095e7d7",
"assets/assets/main_page/main_banner/main_banner_7_desktop.jpg": "17fe21408d6d401fa5515a3aeab5daae",
"assets/assets/main_page/main_banner/main_banner_0_mobile.jpg": "c66a8de1dc00054e5a56c0f19602bcca",
"assets/assets/main_page/main_banner/main_banner_8_mobile.jpg": "b65647724904544784d33b32e8da5b2f",
"assets/assets/main_page/main_banner/main_banner_5_mobile.jpg": "b50fea294af6bdcd94df29acfdcb44dc",
"assets/assets/main_page/main_banner/main_banner_2_desktop.jpg": "d44416989f04a5a306107b881456c16f",
"assets/assets/main_page/main_banner/main_banner_5_desktop.jpg": "cad950846b5367e3fc69113e015efb63",
"assets/assets/main_page/main_banner/main_banner_6_mobile.jpg": "a400298d513a8ab9a45617b93f5f5080",
"assets/assets/main_page/main_banner/main_banner_9_desktop.jpg": "99e6d20e08366ead068f39c4cb4c2cec",
"assets/assets/main_page/main_banner/main_banner_3_mobile.jpg": "08e9992aaa4331d50a174f9522dc3f9e",
"assets/assets/main_page/main_banner/main_banner_0_desktop.jpg": "6a792b9dd0a2802da65fd2a6df6609d1",
"assets/assets/main_page/main_banner/main_banner_9_mobile.jpg": "ec91811e83b8879841fdb52ad7f3a477",
"assets/assets/main_page/main_banner/main_banner_3_desktop.jpg": "163d77fedc232a35870daf262e366957",
"assets/assets/main_page/main_banner/main_banner_4_mobile.jpg": "b1a35e2df94187627237ffa264088a27",
"assets/assets/main_page/main_banner/main_banner_1_mobile.jpg": "7d97acbe665e09da5996473efb057897",
"assets/assets/main_page/main_banner/main_banner_6_desktop.jpg": "e8584eb5c5651931e8f656c7f62b3457",
"assets/assets/main_page/schedule_info/schedule_title_mobile.jpg": "f6f23908898970a75a07c62578b197c0",
"assets/assets/main_page/schedule_info/schedule_date_desktop.png": "fd53ca4d3168dc81ba618c0137ed826b",
"assets/assets/main_page/schedule_info/schedule_graph_mobile.png": "7c47ec0e95793daea23a9e6ae56726f4",
"assets/assets/main_page/schedule_info/schedule_graph_1_desktop.png": "fb4d9177220d35e4d29d52ed95a52a49",
"assets/assets/main_page/schedule_info/schedule_title_desktop.jpg": "7c7a809d9728d8cc671b9ff1596cf559",
"assets/assets/main_page/schedule_info/schedule_date_mobile.png": "355a4ec43e7d7e00b95da87e59fb7433",
"assets/assets/main_page/schedule_info/schedule_graph_2_desktop.png": "b9374182b7fbd02dd66386ebf758e272",
"assets/assets/main_page/league_logo.png": "e51bdc51f64c5877331065e6462de3bb",
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
