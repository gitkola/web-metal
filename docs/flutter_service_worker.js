'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ccbe338fbcb26f57c5d9023b5a88b7d0",
"version.json": "e6231f6a1bba31f937b9426b5cfa47d7",
"index.html": "a37a2f2ae38b290334656994648bf3bc",
"/": "a37a2f2ae38b290334656994648bf3bc",
"main.dart.js": "c8ac9217a15ffa1a5e575fac84aa7240",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dfe05bb9e3927e32ebf5d2469f9ae349",
"assets/AssetManifest.json": "4d2316b434724ec670d3414c98fda98b",
"assets/NOTICES": "95ff6541f343caf75b3eca562775cb0c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "be772d042ca1ec239ac9ed9c7848d88e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e7b98bb78d85a5374827499dc24b1cee",
"assets/fonts/MaterialIcons-Regular.otf": "5b303c39f78f90594646f18ac9bd3115",
"assets/assets/images/c_profile.png": "23f77ebd3a6052fd256f21f6df1df7f7",
"assets/assets/images/fittings_icon.png": "47f5bf006b3da960c0c9f9a5a442c1d3",
"assets/assets/images/hexagon_icon.png": "7bc9c3f5007db9decf8744e1cdb1fe36",
"assets/assets/images/square_icon_3d.png": "0c37361bb046627afe246518231b2e66",
"assets/assets/images/angle_image.png": "3b0645ef8dc12057e629f0ad51dac6a7",
"assets/assets/images/channel_icon.png": "922ab36ecc42f7436cf143dd5995cdd0",
"assets/assets/images/square_icon.png": "4eb2f1f6471cbbbdfaf1760dfb34c276",
"assets/assets/images/tube_icon.png": "7d08b36da1343dfac0dbd87d0ea80995",
"assets/assets/images/c_profile_big.png": "ccd1dab5fa4934ce0ca226f673007e21",
"assets/assets/images/short_profile_image_big.png": "db44b85c4934aed7a1e6251b22650c3c",
"assets/assets/images/forging_icon.png": "a0a65c764b8ba4d1b587e8763c0c7acb",
"assets/assets/images/shunt_icon.png": "fc0bf1d608d2686ce46df132b737c672",
"assets/assets/images/sheet_icon_3d.png": "7cd4c3dd369fcbf11141b63adb7b7f35",
"assets/assets/images/profile_pipe_icon.png": "2aa60f1d6587db54e350bcf22de0b6db",
"assets/assets/images/channel_icon_3d.png": "e01b36f9b92292547d7736afc67993b2",
"assets/assets/images/z_profile_image_big.png": "f1524d55b1e433583f11d53dd63f5748",
"assets/assets/images/channel_image.png": "e176c6e0184e64fbcd088fd570836d40",
"assets/assets/images/angle_icon.png": "0fac9aacef9e8c05ed4e08370711b900",
"assets/assets/images/angle_image_big.png": "d64b6210ac52a247199348b154dfdae3",
"assets/assets/images/tube_icon_3d.png": "fd9055dd878418387dba610fffbc65fc",
"assets/assets/images/forging_icon_3d.png": "14db984c12b108c8dfe3bcdee6d3c9b4",
"assets/assets/images/short_profile_image.png": "0976e58ddb030cfbc1d99ec42917bd9d",
"assets/assets/images/channel_image_big.png": "5929330e98ae9b86bb03768da845c046",
"assets/assets/images/beam_icon.png": "faa164d1c607f1f538814a0c76a0a3b3",
"assets/assets/images/beam_icon_3d.png": "fb226bb4a1860014415d01de8f6e838f",
"assets/assets/images/sheet_icon.png": "2b517bd24d3c8be01557fa71f7c8dd0f",
"assets/assets/images/pvl_icon_3d.png": "d4332c287bc1e72c0fac5bb2956990d4",
"assets/assets/images/profile_pipe_icon_3d.png": "4aa2bd6608fdf26561c7fdde7bbc70de",
"assets/assets/images/pvl_icon.png": "9719cfd0d9b738eb5673d20167bb7d4b",
"assets/assets/images/rails_icon_3d.png": "e11a70f9aa72f612d25d1b78a12cc989",
"assets/assets/images/shunt_icon_3d.png": "0d1e35478bf9d57e19ccac1a316be686",
"assets/assets/images/hexagon_icon_3d.png": "150a398104807b2e2e36183124382425",
"assets/assets/images/fittings_icon_3d.png": "9e0f8f370783ccdbdf4fb413b355c924",
"assets/assets/images/fittings_icon_2d.png": "79bc9726da00861781ad494f8b8e33ea",
"assets/assets/images/angle_icon_3d.png": "68987735f072fa96efc9c1964fb9332b",
"assets/assets/images/rails_icon.png": "3e3788943a2c5fc408ec3d40dcfb0669",
"assets/assets/images/square.jpg": "8ff4af094ad0d99fe08ba3967dad5952",
"assets/assets/images/z_profile_image.png": "f8c038503909e31fa50a49c42e426cfd",
"assets/assets/images/table_K_factor.jpg": "80037c0ce8e030f8f0f7b040f4ce882c",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
