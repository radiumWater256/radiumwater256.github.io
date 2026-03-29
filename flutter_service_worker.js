'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "59570e0a7039694f0e963c883e7d5b5c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/fonts/MaterialIcons-Regular.otf": "42118f9c610db10951efd268c8cfc07c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/NOTICES": "dc8279e4d3604bf2b1e20a19acefe7f9",
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
".git/logs/refs/remotes/origin/main": "508af6e82e96eefb745786ffa6f5f9b7",
".git/logs/refs/heads/main": "8c7cce234b1810af7266be009c821cb5",
".git/logs/HEAD": "ae37b3570b1f1407cf141270a68ec0b6",
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
".git/objects/fc/8a0a5b2e64ac99046de44e713247df6f48d968": "41209b7d31e5dc50b5927c321f268234",
".git/objects/d9/b497ae4a38e65df3cb7669003c4c7030d2e1fb": "1e260e402d4e07c1577d1eb310d61a01",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "043520c054ac0a6cbf0784a7e535c5a4",
".git/objects/d5/a1bd73534bd06eb0af521fc5526499fef3bffe": "bd4e2aa891453d9de394d01c8b246d7c",
".git/objects/ec/ddeebf048c56252d24ad701a91fc29c5fd46b2": "6f8f606b587a56b6a52c4e6db734af89",
".git/objects/d0/1f7f3260c0e559fd968cfea18c8a0a1e2b24e8": "be2a7c660b6536c494000ea338a3bc01",
".git/objects/87/75266b6dadb2efde3a2d077cbd894e8bc5e167": "47889f9eaadc14a69e4f7e24c86300aa",
".git/objects/87/15dcbe56727b1b65c4e5e4183f452e8a6f62f0": "b9a33e680e67c5026236378386e22a72",
".git/objects/87/6796cee444851b34ec2c5749560f01fe76af3b": "83959e1bc2d78379add98fb95474a8b4",
".git/objects/dc/76317a2bce82042b07daa1e544a712fc0ccc11": "5e784d46459b428f0685f38852ab54aa",
".git/objects/20/d8d0a05edef9bd01d3c1936a4f72d25dbc95e1": "c1f40c715e6bd394223b1a272dd28b9a",
".git/objects/04/75113c1272bdbe4ed0d4f59b9fe7507a2baf0f": "9f947135a084e9a5168d368c48516856",
".git/objects/42/f7ee084881fb191d6db8db783704539f44f6e9": "b55aa811bce31e58408f3da55eaf25a2",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "2ef39341367669d13106432cc82e409d",
".git/objects/43/4bf8c292d82aa8485dfe2b3c53ea5b45d2c1ee": "b021f2c60949d47f79669a8ca2645122",
".git/objects/4d/4bd846f594d282b76bf723f02f5f114b7d997b": "207c250381484cb1d7cf490cc8b92bf8",
".git/objects/e5/4145f43875dc54ae510668aa5a66f21574dffc": "59cbd8888a0d6dfd15a5bd19ed143440",
".git/objects/24/c90a4fb0e1ede0ee78507d7ec18079e974f6f4": "729bef9900e9962d5c98e941eb83b1f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3a663110118a15ba1de956e30344cd34",
".git/objects/1f/7d4a0b98c6bab34c90d0529e5c21408f9c97c1": "8a49ae5fc9196bcb57c60fade89c9eaa",
".git/objects/dd/85312a1093ec3e2ce456875e0b1b5f9713296e": "276310e7eb68c188d567fbb383e2613b",
".git/objects/3b/b9a5225e2d31405172f41ca164956f60940cbb": "3234cf3b65c2a548c1c86246b3ffe6de",
".git/objects/66/4689ca4e8875b6560ba293f435cc50e1490082": "d420853216ce0b405374f1f7ec85b090",
".git/objects/14/f7b7c8b7a44fbe91c4537bda43544ea081e93c": "abb1c44e999c4eba6c77b0d23e532dec",
".git/objects/14/a1f23208b041cf4ff78a6da45ce469a4f3a639": "560483330034c7625b5e47483362ac9a",
".git/objects/2e/2b62afee430f9d0a65c0d7e98fa0dcac7dd916": "07673482af1af0cb04975d49789aa3eb",
".git/objects/2c/72b48acedbf9e22d17d06e0cfed071780cdb0b": "00c96bfdc2bcbc2ac185a776efe6b23b",
".git/objects/45/71468c02e79d8deb6accfa5eab65e012389318": "d4f28edbdd6081a65678febc3588b859",
".git/objects/45/d4f49ebc47c0b063b089ef503fb84ddf671a9a": "59409465345920eed301ce65f6e5e022",
".git/objects/ae/488ebd66ddb0aa602951d7f7611d8587719214": "c5b6a454dc41bfbd3f402d97ec785cb8",
".git/objects/c3/84d05982498dab8d46ceb3aea471a8309e3758": "02d8c6cf4bc65e64a3da4ee38b526bdc",
".git/objects/f9/b2cb4ddb1f477558a1f272de956bbe0e5a42ff": "bd2c84f8ed551fc51a4e0d605313258d",
".git/objects/f9/57056b677f097c983f33521f1ee10311651789": "2970ed51e1b8b64a7d9def3121fe6731",
".git/objects/a5/d9f8a9d0c0a6e93c865f483a76215cf0149723": "9c1c5cef23f9be30cb1879ba85680fc0",
".git/objects/2a/b47591293d777bdfae251f6bb734d720fdbf05": "446ee7137c5851bb157b9431dd3ea9e8",
".git/objects/28/4d37bf15d77cd6ed8b7929d9c1a5ca6e06abfb": "c5e2bcea7a7642b1488b3e7316dceb52",
".git/objects/1d/a912ba90159a0bd276fbfeeb9402ec5eb2d6d5": "2d88f2f6ee30863af3e8b7cbc990d32b",
".git/objects/1d/9c22634fa47db0cfc58af9c8b2e38bec6c462d": "7f09160d66cb894f58a109b03ffbdd1a",
".git/objects/02/3fa8bb6a754af1fa71ad9db8844a143f8dc60c": "320104f01dc880d771a32997ec3a7055",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "5fbfd41a73be95fe0fa610703c666957",
".git/objects/cf/c6118e37fbeacbee1ad35639aec63fe796f920": "65d6167bc98513adfdb4eaa0baf846ad",
".git/objects/cf/395b28d6aa6f3601ccbc7095d24f4ab7ef230b": "56ba71b8acd983e75f5b4b56320f6f77",
".git/objects/9f/d8b8ffa4daadb6cda428955f75aadee9c3d6f7": "5a5c72defed322ac1f787f2fa68e7b4d",
".git/objects/ac/5c4e1fd84c59140b5aa1b3ab7f49aec5aa983a": "6b4f91113d1d8a61ee2045b990f27c4d",
".git/objects/18/a72f6b98abc4e8f05b1bf1b107287086407af0": "a7e36a6478f25f47e0d0ad5cd906d6bc",
".git/objects/10/532303bd1e2773ea1ec61628be0f1364332994": "d159d7eac5329386fcb73e162eaf8666",
".git/objects/ca/715b8ad6abc9f639e071263f4354f2ea0ca4e4": "eacaa3048c040f58ad07f42ca52d6a9f",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "6d692dfe2643a57a1acabbd9f4d16f97",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "e44dbcc4f8ba7b73e63f5274e03f757f",
".git/objects/96/d059e06b6cafd0021cc304e3f81cc27f9cc9e0": "2f148eb145a65fa4d6e469e1a3f903a4",
".git/objects/96/97b224d35eea97928a5d52cc11af353c28af1e": "01da928b3b188c6f1c5b100ea873ddc0",
".git/objects/22/60fc25d4f866d40192299809780bf8be853c79": "382ac8d8494dbbe5f34551906bf0b619",
".git/objects/da/d73d60ab347473356aa92f8c0551aebcf90b06": "fd4149ad8d07b547f210d9157a0d7a92",
".git/objects/57/ed1b8027c849c3f087333700b0e9db2166485b": "4107b04897f4c95840211e0d5d0653d2",
".git/objects/37/bf33e255e529501d8eca4c23ce7be3c46d6569": "48f84c6afc865d619669719643357161",
".git/objects/34/defc0e85d4152e6ebb89afd8fa8dee9e0af3c0": "aa78af1ad3bf81a58e6a757aa92b78b2",
".git/objects/aa/6456472d35a03fef6528bfa1690334ee12217b": "89e204abfc14888e69fb6c0c435eee3e",
".git/objects/aa/198980086f0cb88e21b1da8950f0bd67823455": "6aebb786bb88066bec38b6dfe9e7b743",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "af85c278711e6c817f328f12fc54f4bc",
".git/objects/a9/eaed3af2da7ba78c3dfebd05321889ccacaab4": "e595282b4c12d48b41300e92ce1c8f0a",
".git/objects/a9/709a29dc360f1e73a71276c5e136a28aaa272b": "d7da710fc188f79b0e956672a4a0cf1d",
".git/objects/92/c58797d4886ecd2b6b8460b673193298e5b070": "1be9c8519b94e0e7695efa073ed448f1",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "d3086c88096251642f83805078d30149",
".git/objects/67/c6a2ed786e653d50a7f422c367c44cc7064b4f": "f55c1ac6f636bb9918ea9adafa1761fb",
".git/objects/15/8bfc7f953e8a8219003bbeb456fcb98fff6f18": "6f9de8b54f47e8ed6850887bffa07c51",
".git/objects/72/82c3703bad092f70acc0fba94ee9392720632f": "dde0952adbc777627952c8fb0272c56d",
".git/objects/6a/7e80733c57162e1354318857c16aaae1f43867": "424d67fbeeb7ffae03958f14d8351746",
".git/objects/75/adb293ca08fa3e5a864980ff2bf0cfba323a5d": "9289a4cb1bc7e6ae3ce1a3636792efc6",
".git/objects/36/e3608fed0d8bf61fdbdaf125e9ef9450e2ab7d": "47c4e6c8c1759ba368f5ef60bdea2d71",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "8b9c31c4669a155fcefbae3e383fa1c3",
".git/objects/48/bfd426d60aad01aa31e3c7c50dba28c7907e06": "26087f5dbc9b5e4aac502145e7fd6b26",
".git/objects/af/22fcf12e1b9743d00c622230d42dce000a7333": "f831231bfbd93c693c7c1e376a9e3a0e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "89be096369acc9cae7566b769fa68dfa",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "3bc1cfa9d35b24ae15d0c92a3e1b7e58",
".git/objects/94/02c52626e2f1679004a91362073bb1848cfc0e": "f1ab6d3a5a319a4384f3e3af770f8737",
".git/objects/9b/54725d66da30cd0b818e37bd3e5492115b44bf": "722e3d0b8c96bd2dcce6c7f3de9a3f47",
".git/objects/13/fbb078b31b2a4338233d82280ab444c1dec3bb": "e94a9aaa584035dbaf99d53bfd2b046e",
".git/objects/4f/14b042773437c042eaf95e4ddd6fdadeb0ffdf": "ebbc5fb9ab270de397f611102d9b9a87",
".git/objects/a6/5600ea88bb78c3baaac780dae8c15455ee227e": "7710a856905e7583659de72ffb66c633",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "38c08fdc0dbc026fb372f8f06543db01",
".git/objects/38/1baacd96d3ad22012cf962774465ff23b16600": "241ff4be4b6a54afc050d6157798b7bc",
".git/objects/90/23bb91fdc3d6e827156390d79d8626ae4322fe": "08242edca3c9b758e7748ef47209f4c1",
".git/objects/76/1a406eb94dab3f08921728ee983e81d8c6c335": "7c84da12465c22c843c158381bc884eb",
".git/objects/b3/addbca9446bf6732307f55843000ccb038cea9": "d5d31d21b9c7a95cc54df1eec6afdafe",
".git/objects/ff/caacbc2c0ee74976233953e899b4ac19844644": "c14b1ec7fc8fa7b63a755b661fe2578a",
".git/objects/7f/75df3e142a1d14c8922fea2ebaf3d255154364": "14758244f269c8ea90d1858e548d8c2b",
".git/objects/9a/a0ea4dba4abec311dc81d6c38d9854d1541f5e": "de446e84fca97aafb6e966fee83206ce",
".git/objects/93/dff9820de72d41aa9d88138b7d31a1f1e06f61": "fc46ef1932eb40ac208a76e9c8e214b1",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/3c/54913cf96fb637a732f290c8f6780ea139eca4": "2a04527692fdae4a241151ece1f89f9f",
".git/objects/3c/35a9f50d7051ee14467010ed40722a0a633966": "3338fdcd5043dd3aa3c054974b252c77",
".git/objects/83/46c9fcde902665f1f00cf8fae7268fe567684a": "311f4596e1eeda4947dec4385ddcbde6",
".git/objects/68/625b7c14c275eda9b4b60d345bc7663a75a8ae": "f15973d407129d7a43e7a6226daf1b0d",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "3e6ddc94183a5f5f251d5f5f9d834ade",
".git/objects/47/46fd0ad91f5c01afcae6bb01d1a5f6b554a26f": "d2ed33cff54223623afa1da12bfd4e1b",
".git/objects/21/2bfda06cfeb162e94f2b42628ebcaf4b3f5d0d": "13d5e8b85e783ea28cd671744d99810d",
".git/objects/70/f338e4bdc1a160a95f729a087ff6da9e49fefa": "b6d39fe2733ee404fe01219235eb70cf",
".git/objects/70/0cda9a4bd256f0f9c643326280b94bc054d32b": "ccfba69cabf9a642c336f152b758cb7a",
".git/objects/25/a692d6f52f5b1f114e7ca05abc5c4fbaaec2d8": "0e6ba6f57bbc8f6fdd3272852c06d63c",
".git/objects/25/0bfbc580d3fed89b01df269d05b506c52f0342": "18598502f0102c41e149104c933757c6",
".git/objects/41/2236ae953b12d06686b81be66677bed5f6a724": "2c8c89d103ea3e7c3d17c709ddf87b9e",
".git/objects/41/1345a70b576ac259ddb58424cc87af58992041": "aa5085fde2835d449cbbce1f6ff0728a",
".git/objects/f4/cd782ea2596e56ea9a5df5dddcf15a72330aa6": "407466e03fd221942a5c6b715b3a391b",
".git/objects/6f/38c5aaca547a9d6d212af0d96e741bbcd3ba08": "5f23aa38914db668883b46e62cc07805",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "e96947424742b4d85c4522c5d2f29f0c",
".git/objects/a4/c2662f76e77185a0215e25a2ac87b2e5d1488a": "35763fa5afded513ab9b6218f65e2aaa",
".git/objects/cb/9cbf6801fb30af365b1a36ff338f650918b4bc": "829043cc5fb613f1310542f0dcf01988",
".git/objects/5d/930a3ea18207ba8c8f4cfac0a45bd95ff51943": "05fd9e74d9bce54c778ffe3379bb68f9",
".git/objects/6e/4fa62792b193ff402fd865a4b3332189e8b227": "2ecc5ce0419ddc406c5b7a8d4156f38b",
".git/objects/b7/6b51a9f4f2d80bf23d5d23f087d94501d5f5a8": "7a4fec9b85149193ec2a75f67837790b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "03dc7c3b440d9d36b3e1dc2ab06f364c",
".git/objects/b7/b3b4a25aa8fc6d70c82f1dfea93fa5222324df": "9ac756fa1ca398e70ff5d24ec3f228fc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/2f/34a7e357e3bf8d4f17abcda19d02d18b9c83ee": "34cd5cc6e9000bcf531089a484e8f75f",
".git/objects/8d/4b3aa98406a275bc173a8f075a510287cb4122": "667153e0dad2c9d3c3b2fcaaaa7c2c2e",
".git/objects/e3/55a81411790a4a4f71e7c9175f5b590208bdaf": "6072889540124b399488392cbda512db",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "1f96c5724f3157a75e32b916bb80a12d",
".git/objects/ad/c02299924c01448080c2341f0114eac487920a": "1752d6ff1fefc2e91c9c6ab07e9cb56c",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/60/7730ad845aa4f494d216fed76d92bf5e1b5100": "5247a41807f81429642c602eb9d25724",
".git/objects/b0/bcb3184789a925c1425e2b59a2228ca630b190": "1863cc4ac5847b63d41c9655485f4ff8",
".git/objects/b0/0172aff1c93ca53dbc49c82de7b4beabe874dd": "d2878f22830aad661a1a5ed4c1c2dbb0",
".git/objects/e6/689704a06cb6e8e312fc3b366bf12053018b33": "d99ce82c611d15651ce9d367d5983e38",
".git/objects/19/9bb0ceadd912b13aebde988d6351e05d9a3324": "12e43d2c1ebfb86693b7fd61fce0516b",
".git/objects/e7/15700c501879f8a3ad75a9c4d904fc85ccac69": "963482f9625abfa0d22261831b2c9044",
".git/objects/3e/91b68040fdfeda26a8366014e4f51740e31aa1": "6fdb07d1902649e24f0849c935a6ae61",
".git/objects/c4/d57830b937f7fdce0dffeea1c490a6733a4cf4": "425735962dc8728fbe416d78f089a19d",
".git/objects/c4/1854d445082ade048db616ca836a665aa94f46": "46ed8b17ff6e68ac816b5410a55582d1",
".git/objects/39/38d0a1edcbc6ee7bbbddbd9882011185f55160": "08a0e29b647e95fc3aa9e7572545b2a4",
".git/objects/39/a8588c95eefcd2aac3b9ed72b012c28a938abe": "76aeb440bb49ea67662b344d1f4667f1",
".git/objects/7e/d14fe09993f9cf693aae8249722b7b724ffda7": "00621782d9cb7f611019888cf69112ef",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "c86893109644c17e9714c1db6ccfdcce",
".git/objects/f5/ba1f6c8ba149b76dbfedb48216992a46ad78de": "89e1f015e7eb0a61f3d3327ca0ffa35f",
".git/objects/85/5c071d54f6d97ee42e75739daea847a2694c3e": "ecea3e356f07d9ce923e44cd7a92047e",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "3afc17e45da83758c0485c523d549fe5",
".git/objects/85/86cd7024cdaa52abd271524bd3f07e7a40b387": "543e276dea0a09ac387a0fa912fc271e",
".git/objects/f0/312c66ff522bc1d60436bfc9694c9b812cb5af": "41dcc64b26400e1168539d9313935f84",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "6c92b20fd7001a730b83dae39792730c",
".git/objects/f6/8d543297851c78582aa524bef910bece726934": "1f0b6a914dfea9152bff608d5df6b3ff",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "ad44b0e3874ce9a8490bb08d982b070a",
".git/objects/0c/e91113562256d97d945a81ccbebb7d872212c2": "28574f3dc16fc4a96d9f4641e6dbddcb",
".git/objects/0c/e04f7318f6d3427e7d3966eeae1786b1ae45d7": "dc3f67cf91fff4a998ca56e5b9c71b6e",
".git/objects/c2/9985595f92e0a2100dd58da9a0ae62eb7cb15f": "2056239cca5121a01a5b1397a6713878",
".git/objects/de/8b9ded99beb0bc247a6f1360700e16e5506e65": "9787228f713811e4be38b047dc199855",
".git/objects/de/2c8590d72ff0bb2c8b00fdba253766aa1b49c8": "a628f820b993dd5bc63b695d7b2576d6",
".git/objects/de/600a960fc8dcff3ea7ff3e87f8d2d66d14f7b7": "f5d51ad39168a1ef334c6d20a23db3fb",
".git/objects/64/93c4ea9bffafc6b968be7dd08039f9dd2ce9f6": "19e62e2360e66f5af66a64dac0681f5e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "aaf7a1ff595fd8aeefada99de1cedd95",
".git/objects/8b/4b6ca209e4f558966eb948c7f7de0633092ae0": "892e7a6d29c773899ef0fbfda7cb4f28",
".git/objects/8b/c96b34feba928ce5c73469a16e4c8d5fd1b666": "11126afaf045eb4740c6e27683016a26",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/eb/6343ae8c0b62f0b1b9e216f5dbba380679fe4f": "1e7f8bef31adf8d5a14c2c149e724616",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "36264bdfab0a32a2aefdc668e36d971d",
".git/objects/73/5bdbb17302351b8950d8c3d49c52a41ad7e23a": "c4c97889ae79263effbfe400a0686a2b",
".git/objects/62/527cd80a072f0b42fe4adb891f634bed8a1e12": "43bfb1a659d555601581f25dfffc2150",
".git/objects/27/92ce82b27e7cc95da22b8befe2b239d88d130f": "6f7d8f568dca65766fb806ec0d7b9020",
".git/objects/49/02cf681df386cd2035af9a04b0f51d5efeb9ca": "d751ca144347ab267e16b3bd008474f3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "70d7e891b9a9a44b4a65cd9990250a20",
".git/objects/8c/4fe367afbd94936bf07cb9facdef8a48bbcddc": "02744f0c70ebc8a770c9699744fb9c1e",
".git/objects/bd/3d307d6978e336b9aee9860ebd1f627f1d43f2": "b0bc2075268f96ac402ba7efbec7c4b0",
".git/objects/bd/46606ecee4310a4f622b07ff86726badd922ab": "39cc65e55391df5b32653c7a5d8a9d9e",
".git/objects/e1/ceff72394e6aa9a29818e57e5be95af7990260": "f17ea9bcc22d8b1445740e5931716468",
".git/objects/ed/4995a2148ccd394627c8a1b2332c7696c3823a": "645831755dba40660d9c07e8fdbbd95f",
".git/objects/5f/9368886519c18f345d88109efb95fda220c88c": "8e369a57ac7f3ebee8926159019a1d75",
".git/objects/54/1c438497f36cd7c8047e973271f1c781f0f856": "3757f1b9f3c97e829c2def4096d32788",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "9f3800cba3bdb0fd35ffbf1730e39d6a",
".git/objects/63/9208f406f8e3eac4cdfe05c6bfa35513e7aae8": "52f2935f17a778e36ad3efae94310ce1",
".git/objects/63/0011dbbcef63b80b71035fa2042f78e91c11d7": "0613bc3dd39235082c0c5d4843f527c2",
".git/objects/fd/db11306ff8e38bb486aed6935ac7197de6db4a": "64f7a527e0d7472b0d63e05f3a05df24",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "383232acfec6d014865ba00d787a04ec",
".git/objects/b8/cf29d488e56509aa1c72f5e972fbc39655c270": "24c279df90f14ed0fe3774f1a441aaa1",
".git/objects/0f/c393bcfa601d6748ee67854a3fed56f48f093d": "550ce2840d29200dd119957bea26e005",
".git/objects/0e/e034a5edede3861a69050d6fe003ae753330a9": "8c51e76267e229ee2dfc2a961c9ee36c",
".git/objects/17/115dc692a06078f248c879779d02b86c224388": "7ca8a1b96e941ca57542c160955baa5c",
".git/objects/3d/8cd0c88d7a05b870180b470a614a3f1bdaac10": "5518ed2d185626f4a1a4b6172a4ea92f",
".git/objects/3d/f6d7b94c263306bb92b7b70a0fd177933d1afd": "f4702dd5f9394b5d7df6ef2d8d7128ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "7a879841fa3127b99b4d4886c22caa98",
".git/refs/heads/main": "7a879841fa3127b99b4d4886c22caa98",
".git/index": "ffec5ed113fd350150a8feefaac29249",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "82322153cee1ff9c2fed6cea4ff7139f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "f3ca269d0a290fb56e182d13d5b3fcac",
"main.dart.js": "03813345b49976d34da28577bb062e91",
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
