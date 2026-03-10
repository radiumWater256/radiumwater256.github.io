'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "c79cc0cee2a373c3c04b968612d1b0b2",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/fonts/MaterialIcons-Regular.otf": "517fda0de165d24bda0aea49f3fe37ef",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/NOTICES": "503243629ee0e98a37f85bd3e482f4b1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"index.html": "5ff6fa8d634409418643ba357e48df9a",
"/": "5ff6fa8d634409418643ba357e48df9a",
"icons/Icon-maskable-512.png": "b00e77a2bcb3934e0fb7e28a1770cc9e",
"icons/Icon-maskable-192.png": "6cdf7b403053bffd5df16491d15f8dba",
"icons/Icon-512.png": "b00e77a2bcb3934e0fb7e28a1770cc9e",
"icons/Icon-192.png": "6cdf7b403053bffd5df16491d15f8dba",
"favicon.png": "4bf6381155050d6406d5615cc11f9b29",
"version.json": "ac890ed0509b79663b4e23f1eeee3870",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
".git/logs/refs/remotes/origin/main": "4d5cfc6773ce41c00c067931b0592867",
".git/logs/refs/heads/main": "f85e318a8ae7749b316eabf46891e38e",
".git/logs/HEAD": "e08809e59d498805c1b850a66d88a337",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "043520c054ac0a6cbf0784a7e535c5a4",
".git/objects/ec/ddeebf048c56252d24ad701a91fc29c5fd46b2": "6f8f606b587a56b6a52c4e6db734af89",
".git/objects/87/6796cee444851b34ec2c5749560f01fe76af3b": "83959e1bc2d78379add98fb95474a8b4",
".git/objects/dc/76317a2bce82042b07daa1e544a712fc0ccc11": "5e784d46459b428f0685f38852ab54aa",
".git/objects/04/75113c1272bdbe4ed0d4f59b9fe7507a2baf0f": "9f947135a084e9a5168d368c48516856",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/43/4bf8c292d82aa8485dfe2b3c53ea5b45d2c1ee": "b021f2c60949d47f79669a8ca2645122",
".git/objects/24/c90a4fb0e1ede0ee78507d7ec18079e974f6f4": "729bef9900e9962d5c98e941eb83b1f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/14/a1f23208b041cf4ff78a6da45ce469a4f3a639": "560483330034c7625b5e47483362ac9a",
".git/objects/2e/2b62afee430f9d0a65c0d7e98fa0dcac7dd916": "07673482af1af0cb04975d49789aa3eb",
".git/objects/c3/84d05982498dab8d46ceb3aea471a8309e3758": "02d8c6cf4bc65e64a3da4ee38b526bdc",
".git/objects/a5/d9f8a9d0c0a6e93c865f483a76215cf0149723": "9c1c5cef23f9be30cb1879ba85680fc0",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "5fbfd41a73be95fe0fa610703c666957",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "6d692dfe2643a57a1acabbd9f4d16f97",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "e44dbcc4f8ba7b73e63f5274e03f757f",
".git/objects/96/97b224d35eea97928a5d52cc11af353c28af1e": "01da928b3b188c6f1c5b100ea873ddc0",
".git/objects/22/60fc25d4f866d40192299809780bf8be853c79": "382ac8d8494dbbe5f34551906bf0b619",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "d3086c88096251642f83805078d30149",
".git/objects/6a/7e80733c57162e1354318857c16aaae1f43867": "424d67fbeeb7ffae03958f14d8351746",
".git/objects/75/adb293ca08fa3e5a864980ff2bf0cfba323a5d": "9289a4cb1bc7e6ae3ce1a3636792efc6",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "8b9c31c4669a155fcefbae3e383fa1c3",
".git/objects/48/bfd426d60aad01aa31e3c7c50dba28c7907e06": "26087f5dbc9b5e4aac502145e7fd6b26",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "3bc1cfa9d35b24ae15d0c92a3e1b7e58",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/83/46c9fcde902665f1f00cf8fae7268fe567684a": "311f4596e1eeda4947dec4385ddcbde6",
".git/objects/68/625b7c14c275eda9b4b60d345bc7663a75a8ae": "f15973d407129d7a43e7a6226daf1b0d",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "3e6ddc94183a5f5f251d5f5f9d834ade",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "e96947424742b4d85c4522c5d2f29f0c",
".git/objects/b7/6b51a9f4f2d80bf23d5d23f087d94501d5f5a8": "7a4fec9b85149193ec2a75f67837790b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/e3/55a81411790a4a4f71e7c9175f5b590208bdaf": "6072889540124b399488392cbda512db",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "1f96c5724f3157a75e32b916bb80a12d",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/c4/d57830b937f7fdce0dffeea1c490a6733a4cf4": "425735962dc8728fbe416d78f089a19d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/f5/ba1f6c8ba149b76dbfedb48216992a46ad78de": "89e1f015e7eb0a61f3d3327ca0ffa35f",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "3afc17e45da83758c0485c523d549fe5",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "ad44b0e3874ce9a8490bb08d982b070a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "aaf7a1ff595fd8aeefada99de1cedd95",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/27/92ce82b27e7cc95da22b8befe2b239d88d130f": "6f7d8f568dca65766fb806ec0d7b9020",
".git/objects/49/02cf681df386cd2035af9a04b0f51d5efeb9ca": "d751ca144347ab267e16b3bd008474f3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "70d7e891b9a9a44b4a65cd9990250a20",
".git/objects/bd/3d307d6978e336b9aee9860ebd1f627f1d43f2": "b0bc2075268f96ac402ba7efbec7c4b0",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "9f3800cba3bdb0fd35ffbf1730e39d6a",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "383232acfec6d014865ba00d787a04ec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "a86f3e9a2f7e34cc4c2dc6322ae94b68",
".git/refs/heads/main": "a86f3e9a2f7e34cc4c2dc6322ae94b68",
".git/index": "564a2e2775f6b93bb703eb87d78ffbeb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "82322153cee1ff9c2fed6cea4ff7139f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "71941a1ba05b10859ed2d11ef2a5f810",
"main.dart.js": "c8752427e6a69a8c5a84eba6248c5fb9",
"manifest.json": "4e4de26a5ed52ce85a024caac09037af"};
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
