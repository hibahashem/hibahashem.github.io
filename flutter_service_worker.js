'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "96ec25151e143461178ae6bdaa27b896",
".git/config": "f8577e11249decf703b8e3407c8bb0e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e04d1b8824b7b155d67b9c220be169db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0ea407e352bfb69c8206290ca4a9d6f",
".git/logs/refs/heads/main": "c396d40ab5d8645723faf9accd1d5004",
".git/logs/refs/remotes/origin/main": "3440d2c1421a6793dea7f9d9cb792e4f",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0b/58d1bf81ce6b52cc634be67fd6741c5bfaf085": "8ea52482e8a49187b50feaf78a8bcc77",
".git/objects/0b/850d9ed728afc9955d86bd09071e084b11a10f": "8b15a1e50cd9bf283892aa1d69dedd5d",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/ddfae2da915b94bbd9939987b0ede262d1aeb1": "76377b6616c71e0e68b1f7015c0c5884",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/14/46976fbce3763cf3e964d8b2895c04a8d2825a": "c4201b0a5ac0c43df1d79096326ae6b1",
".git/objects/15/d2c696b5570ad50645dfd564798e5331852daf": "84fd73ca109702a510dcba4374455f72",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/93e46857d2db496b7819c6eacdb1dbbc704b8d": "b71124c8e7dd8c52ddbe42c3b8c4a3ec",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/2ec6153c59aed9070dd79a7865b9d618a313b6": "2626ca91fdfabffa1260815bd864c24b",
".git/objects/46/c5c4d15f73ac3d67a9758d5506350c3adba0d3": "7f67e9ba2ef01958044bc1b72baeb3bb",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/ed6597ec1367ce56db9ee2e3080cd937dc8c65": "724d0778cd99c36a9c2f170d6cc83acb",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/73399836a5db1f98cd440b74c6ec7de879505b": "8c10afcce5bfd5a248d469c9dc67c431",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/732bf11e9b1449bf23e8ecdd8a17de4795f84c": "5a347290d0eb19c42fa2ee806e9b4944",
".git/objects/50/d5e4e6daeae5a980ce021433c40fbf154de84b": "22a4daacb3fe410f82d7eb7362c5c5a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/e3f374cccdcaf1c59b20f5354c0bd3898b6c99": "3272bc21f8f22d823ecc6c276130d6cd",
".git/objects/54/76b9ceb1f7435d34a02b659be57132994deeca": "d7cedb04c072c8ba9bca11e2d49ac7e8",
".git/objects/54/a0983ff820e3291b18c10c8d24543c6f6e07be": "bc25e1c987b9be021097411c9ab7c013",
".git/objects/56/5d9b16bff1fc115039771569debcbc75d80890": "f01743a77eb6908e3d10fd6e43af05db",
".git/objects/5a/e8d6e4a39b747299318b96283b09997255e52a": "8733913e0b5e5f432e3420c01a79132b",
".git/objects/63/015f602fecf820b7b7e650de8f6f1be9594245": "7ffa39cba371d96ce4995f6a5d79ecb1",
".git/objects/63/18f6989dc7d3be7c60540f6cf5447c40f51d1e": "5f96fdc85df245028414abdeb2b54b75",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/6a/23ccad72537594767003078181e331d125e41f": "4142899769ace50fdf5a44777aeabd8d",
".git/objects/6b/2cdcb2ee9e7f1c15164626edc50f10f87bea48": "6ac3b2a120b589c1289864578ac8c2ff",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/7a/5e346fe8600ec870ef1ecefd0548800409279c": "cb62e43cacbebf398f6ed51da957fa34",
".git/objects/7a/ecafeebc86598a2ce3d99cf8db8e00528609e8": "3eb92b2281bb175bc08fa402547cd23f",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/4ee07be8a74a332e5c66c1f8f5685145db472a": "3715e6d2c16e8bffa4fcb2a01eaf72de",
".git/objects/8b/ec8fc17d020eb3da8d67b7fc9b32cbe16162e3": "785cd106ac34aaf01ec3a33cbffcf4ad",
".git/objects/91/001b62c5e9b5d8f9a7d2f0a789bbac40e66803": "ff022156988bea96eeef01e68f166127",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b4/d12d986d507d83cdf81833ee83740c67455851": "a9f1fc22025987028be7e2dc52e686ac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c0494e81c7327ae3af6486089fee078e9d492": "568148cae2bf00a0f8229a7f1c87f555",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/d4/f56213f28eb8fe5b01447581d82c2fabb6130b": "b63848c60a07ac539756142d38992ea8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/47f172c5ffe4910673b693ed2d046e73a7f85c": "ec240b44bc435ac15befda473b14ef3d",
".git/objects/db/22fbb91645600fde1305e3aa9a9714afb12fef": "7ffb0641e264115b7f410582b26a837d",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/5ef0897b163b09cf8296462b6ab8595b303acb": "55ec3efc256459d812dec001e7c36655",
".git/objects/e8/95ca50f87a5cbdeb64b6d8a6c9cfa0603cec2b": "63af7da818aa86e3278996c727d8f301",
".git/objects/ea/29d9e9d8d4c69dd75714bee48d0af5d7e535bd": "cee87d81177f7fb1614a21b6692b8d30",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/61c0c9a43d9ee7183d13361ac91a505ba18283": "c47ea349b9033ba7dafadfaead23a013",
".git/objects/ed/572a8b5759b9dc405caaff018e479c797b3902": "8a89bc28e8851740ea469c8ea45bfdab",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f8/0783ac904a50e410127e212a9dd1043aef4192": "87a5132e9848741d2b118b92fe0db90b",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "51c2b1109770be5dc2a6324161c72f3a",
".git/refs/remotes/origin/main": "59548ec0632cd2d5e2b4dacc0c3863e3",
"assets/AssetManifest.bin": "3d4aa7cc710fb521e11d13eb3c9eb85b",
"assets/AssetManifest.bin.json": "88ba47fdd126f709d45e3ff54652fdde",
"assets/AssetManifest.json": "787f16be8bbf9e1884cfa9d8ca82cda2",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/facebook.svg": "1007f30c5104d0222535de74178fe1d2",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/space.json": "8cc69dbabeca5cd27d25377df031a2ec",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/albayan.png": "7a3d1bc5873cba205022664ae8a235e9",
"assets/assets/images/beefly.png": "bfe9339fa17afed3f9fdaf302af2f30b",
"assets/assets/images/coachee.png": "be3de047eb9ee1066abd84b74a10b05d",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/jumlatech.png": "996aad59b408e0042d673c97aef57b4f",
"assets/assets/images/me.png": "f0d2be6a2e13aacb633e2d8d73668992",
"assets/assets/images/me2.png": "c1f4f06b2f4e75b436a4238a1cb7af64",
"assets/assets/images/sales.png": "c48bc5b2832763906ce3706d173a4851",
"assets/assets/images/store_keeper.png": "57bbcbe573df4d657ee2c07dd381290f",
"assets/assets/images/telegram.png": "32c95c20d68e41902c39a67ef51c0e28",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "2dea70979bb3f44c90386feacb5ecd0a",
"assets/NOTICES": "de37675d65f224d30a92acdd08608790",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/img.png": "394f29d667620a8656e36a70ee05e144",
"icons/img_1.png": "394f29d667620a8656e36a70ee05e144",
"icons/img_2.png": "394f29d667620a8656e36a70ee05e144",
"index.html": "f2c3977558e1a98a39618d43347d5d25",
"/": "f2c3977558e1a98a39618d43347d5d25",
"main.dart.js": "7fe102d16eba502da098f4be7d8d58dc",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "5de63ee6639c0700086c8988e7342a6b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
