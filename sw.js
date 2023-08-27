/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/02/p1/index.html","a5854721e8e0cfaeb88e63c01f336a83"],["/2022/10/13/p2/index.html","9ab8563968d50ee62abad0129aca74ca"],["/2022/11/11/p5/index.html","9328a80f889734429941cde0455ec524"],["/2022/11/27/p3/index.html","6b50cdb139efd89b417749c3d207d338"],["/2022/12/16/p4/index.html","c6a74ec00408d61900d7c7615a0f7123"],["/2023/03/05/1数置顶/index.html","7848e10614d48086bbcd99b88b142912"],["/2023/06/22/p6计算机网络/index.html","9b8bea91372934b6694c3704d40350f5"],["/2023/06/22/p7数据结构/index.html","ecf0bc3313a94ca0c11ad825a43247aa"],["/2023/06/22/p8操作系统/index.html","afcc4b3a6965e0b3dea08439b29f043f"],["/2023/06/22/p9计算机组成原理/index.html","829f89b3511233fcfc9fc5cdcefa57cb"],["/404.html","8224d189481df8beed2f6e97c5bca4de"],["/about/index.html","043fe7add6a17c488bb6b4e3a4be8671"],["/archives/2022/10/index.html","c3dea9718dead4df467ea97f81f17546"],["/archives/2022/11/index.html","92cffe070dd35007b9d415773c14f1ea"],["/archives/2022/12/index.html","4b484189b4030847a25b1a7e6a96104a"],["/archives/2022/index.html","e4cd58f81159368b336cab762fc95d10"],["/archives/2023/03/index.html","fe722dfad441ec79c69cb4d981634e5c"],["/archives/2023/06/index.html","64b7f6bea69cdcff4e7416f0538db779"],["/archives/2023/index.html","0ec77ecfdd527e552bd2fde3ae83bb2b"],["/archives/index.html","650826c1360b19f024614c38ab68264b"],["/categories/index.html","371e898efcd64e91c9df9e298f50bcf8"],["/categories/操作系统/index.html","745986b16c0cc623741c2a94af223e9f"],["/categories/数学/index.html","5c5125535991e0595d3068104342e9f0"],["/categories/数据结构/index.html","02cd8b6561f7ee2d72757d5ccd71e2de"],["/categories/计算机组成原理/index.html","5cca3dbe5cf0ceace90e4cc55ac4ab4c"],["/categories/计算机网络/index.html","b6d47633a9d4e69bbfb42bcdf8f6c443"],["/css/aos.css","847da8fca8060ca1a70f976aab1210b9"],["/css/dt.css","44ebc9d2ea9be9085a03790bf3578be8"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","be3af4b8abf2074e66acb737867c43dc"],["/css/highlight.css","1faec9713240b36b5ae891d339dd42b6"],["/css/main.css","67d1a62042a006a246737a49816931f9"],["/css/mypage.css","b7c59672a53cc80c20d41e26f5493155"],["/css/spoiler.css","7db2d895f12c2289d4c81e7eb92c34c7"],["/dt/index.html","9a2ec07bba638e8a277f3211744440ab"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cnet/ARP/1.png","fd2aa04609fd08ccc49237df883a3665"],["/img/cnet/ARP/10.png","b83122ef302ba350c2fb6de2d3af41ba"],["/img/cnet/ARP/2.png","aa9f2b6a8e2c090d8e8988b3507ccf47"],["/img/cnet/ARP/3.png","4ddab00a235523bacf42e87365849acc"],["/img/cnet/ARP/4.png","8c5a11f9a9e47c869332418e0210a581"],["/img/cnet/ARP/5.png","0e08419d0202a8b7e96948118e9b6b45"],["/img/cnet/ARP/6.png","16c920993a59c23cf8b8ddfc76c047fe"],["/img/cnet/ARP/7.png","a245d9d69bb39333cbec1300a30208c1"],["/img/cnet/ARP/8.png","0f7c2cd208411ec4809d239dcbeab74a"],["/img/cnet/ARP/9.png","3cbf1c46feb195e59109f82ac5ccb289"],["/img/cnet/Apache/1.png","d8016a8c42f57eadb1e1d36fd2ead118"],["/img/cnet/Apache/2.png","12e62739d119e8ddc9402b5535cf37d3"],["/img/cnet/Apache/3.png","90be5bbc5d3ea6b018096f28e44c81cf"],["/img/cnet/Apache/4.png","b4e2ea4d82ae4929b19c449afe3902d6"],["/img/cnet/Apache/5.png","9e5bcbb205eb0d5e40ef8d9dbceddd87"],["/img/cnet/Apache/6.png","454058189b418362949453247b9f06ce"],["/img/cnet/Apache/7.png","a6db1afa3bca5b85305ace71bd61c5cf"],["/img/cnet/DNS/1.png","7fd434030727cab6098bfba55c638c6a"],["/img/cnet/DNS/2.png","963c63a1e4dcca28d3ad352711f9ac99"],["/img/cnet/DNS/3.png","8105b77cb0e6b5db0b2aa7b835046aa0"],["/img/cnet/DNS/4.png","baf2e4ef27f1826ea621167773a1fb99"],["/img/cnet/DNS/5.png","42568f40a9592ad0b55e951c11814f5a"],["/img/cnet/RIP/1.png","e133ef43ac50a0e9a7e56ebcba178266"],["/img/cnet/Vlan/1.png","71904749975f65e60dff54802489d71a"],["/img/cnet/Vlan/2.png","2c52b2fc0b0814a36d82ee269565c3f6"],["/img/cnet/ospf/1.png","bdf4acc3e8c0ba5dc26f57a37dce4563"],["/img/cnet/socket/1.png","a480f8d8468bcc69519cd648c4886492"],["/img/cnet/socket/2.png","7d4cd6dc8370f38389780ec4e485ea09"],["/img/cnet/socket/3.png","2d1897dbe659466f2d51075405d7177f"],["/img/cnet/生成树/1.png","e25c982669e948a5327bf3d4122aff63"],["/img/cnet/静态路由/1.png","6e625ca85475be641c3c376e05101e49"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/grade.jpg","ad47b1b0b8db8930efef94c10616dca0"],["/img/hduLogo.jpg","9f7817d359b81cf639fb23a9ec2c5b79"],["/img/linux.jpg","5a9b453b80c84932f15b070610e3fa50"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/miaoshu.jpg","c97c25fa1ef2a70b85ac2c7871205d4e"],["/img/os/1.png","57184eafc116e0d2179fa807f3ef35b1"],["/img/os/10.png","e50e7b1c39e07fd91c5e3b1167b45bda"],["/img/os/11.png","1da2f45c2778976c30d873e4d7c5889a"],["/img/os/12.png","d6d9dc180d01262c7c2ad39f0c13dc65"],["/img/os/13.png","3733714d41742c2a366d614dce6104d5"],["/img/os/14.png","9ee70c8ac4dc22071415be626724c41d"],["/img/os/2.png","19013a7972d52502c1cf732e3d77e305"],["/img/os/3.png","cddc04b63df0d9866a273ae1bc5a75e9"],["/img/os/4.png","2fe8b7d590422d2624293873ae8168d4"],["/img/os/5.png","0353043cc35b609338a3eee52a11a331"],["/img/os/6.png","49adf80c6d21b791139172e4eae69203"],["/img/os/7.png","24d1b97c5e46d520ed75368a40afbaa0"],["/img/os/8.png","730ae9b5bd11889ccd9f374217dfff52"],["/img/os/9.png","407ed34363b7a9f16e901ae501eed8ce"],["/img/pikaq.png","07a03e835d90d6169f37958d0cd72852"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/star.jpg","2cd5e00266ca5416654bb1f52eace5a7"],["/img/star1.jpg","09cb113a36ea1d8a704d921f94090874"],["/img/touxiang.jpg","c5510889841e1535164506a7bc4aa91a"],["/img/touxiang.png","c5510889841e1535164506a7bc4aa91a"],["/img/z1.jpg","aabab88f7c24d41ab4986ae129f883d5"],["/img/z2.jpg","74bdb655afd5d5f7cf7efafe6d5a4ef6"],["/img/z3.jpg","616135f61b09917eb112114d9fef863f"],["/img/不定积分1.png","e5e404be23dcb5e016ae4bb5bbcf224f"],["/img/不定积分2.png","50aa3b7785193e36af8fd31fa968f3d8"],["/img/不定积分3.png","cf515a5cd47c76a8dad825090c14b52f"],["/img/不定积分4.png","06208f607f2aa2cd97251cac07270422"],["/img/不定积分5.png","be4200057b50b978f0ab57a979768d6b"],["/img/关于.png","f38434613a45527a0b43188ee86cd973"],["/img/关于1.jpg","9bb3b789dad898ce448540a4e4deeddf"],["/img/关于2.jpg","73cc1aa259e3b5f2a628c1bde51998f0"],["/img/关于3.jpg","4415b6b6b0d17d25ed8eff60d3af4153"],["/img/分式通项题一.png","b287f66dbbb43725ffea53e95bff54c3"],["/img/分式通项题二.png","b81bb27f08ee0f53eb99304c2567ba14"],["/img/分类.jpg","54e32764846f30b7e39079e5325073d1"],["/img/初音.png","4c84b7798361057cf638fb64f9358bb5"],["/img/刻晴.jpg","76a63ab72c693b70a210a56afb7e2949"],["/img/原神.jpg","78a0b773bceea6557d3d024d2fdb4c0f"],["/img/原神/七七.jpg","92ecdb466355104da312e5e66bc3b637"],["/img/原神/万叶.jpg","e5aa4a52913a9258e0967ee2b7d87889"],["/img/原神/云堇.jpg","80714b430ba9596bdc1c5177937a78b9"],["/img/原神/优菈.jpg","56a6af7c77fe6bab0fd9f73ecdf54c56"],["/img/原神/八重神子.jpg","3f1f8d96965684a2d897e7b3f6c18d5f"],["/img/原神/凝光.jpg","f108bbbf032d9361f0425efea4ef3aab"],["/img/原神/刻晴.jpg","4d94e9aa830a23ea785abecb18b23a78"],["/img/原神/北斗.jpg","ea9f486416eb7498552d1a579b6d9cb1"],["/img/原神/可莉.jpg","9cb06c79c2108b7c16b6c1dab902b66b"],["/img/原神/妮露.jpg","a127a2e52b573f572927369b8d9e1524"],["/img/原神/安柏.jpg","988fea9323293d7433cefadabeecf698"],["/img/原神/宵宫.jpg","5634ebd60b62b76f254ad2bddd4b9715"],["/img/原神/巴巴托斯.jpg","8c4c704b199e61cb30702dd6196abab9"],["/img/原神/散兵.jpg","82eaf3b483674758054a72cc0d72892a"],["/img/原神/派蒙.jpg","ae94588bb70008846ce76b6664e6b636"],["/img/原神/烟菲.jpg","2cd2f305eaf7da130c779e9a6247abfe"],["/img/原神/珊瑚宫心海.jpg","7353b68109d9e79d21d3144d42167f58"],["/img/原神/琴.jpg","ec9c6518c3fc9962b4f566ad922bafb7"],["/img/原神/甘雨.jpg","6836c31541b4e4f876f0c4047d963311"],["/img/原神/申鹤.jpg","52b044079f9093e6cf30900da4424142"],["/img/原神/男主.jpg","4936fe55eec3147d1d34493aad9a9487"],["/img/原神/神里绫人.jpg","d2fb173fd2cb1cf72545e9f4ef825cd2"],["/img/原神/神里绫华.jpg","5d170ef1d599447623665d5c81ff8836"],["/img/原神/胡桃.jpg","c3911664ce3fc9a470762d85b1604814"],["/img/原神/良良.jpg","5edb202e20cee63dceb04a876715c24d"],["/img/原神/艾尔海参.jpg","96053c0f8ec7e6ec9197aa578b9d1822"],["/img/原神/芭芭拉.jpg","43289040abd998bc2cc7307216cf8e43"],["/img/原神/草神.jpg","0472a5a532ed044e65e4e744797f391b"],["/img/原神/草神新年.jpg","40b2ab1d38c30333e5d5873c41d02ae8"],["/img/原神/荧.jpg","cebce120f216b39ab27021f8e2fec20f"],["/img/原神/莫娜.jpg","81fa5d06ab8d09d605ff2e826012fde8"],["/img/原神/菲谢尔.jpg","03f11dabd306340200d1709572e0557e"],["/img/原神/诺艾尔.jpg","88c285b0eed6dbffddcc55dd952987cb"],["/img/原神/赛诺.jpg","e410f579a28d2d6a4595643660c12a5f"],["/img/原神/达达利亚.jpg","b9d46401f1e22d61a3bfd530ceb52bee"],["/img/原神/迪卢克.jpg","d569a4947448082adbece9e8c104fd76"],["/img/原神/钟离.jpg","4626504ff3b3f81972b192de198dad7b"],["/img/原神/阿贝多.jpg","04589240b1a8fe2c029db0fdcba511ec"],["/img/原神/雷电.jpg","5631fa61519ce1a7f2c3d4e631a300d4"],["/img/原神/风辅.jpg","2a2808d13d44db8fedba36c6d725e540"],["/img/原神/香菱.jpg","7424b6ccca9968811baa2c08d4ea5928"],["/img/原神/魈.jpg","0166094fd4bef8cf2bf1255890cbba5f"],["/img/原神/魈新年.jpg","418aadb1fc6f97612bae23ca45ba67c5"],["/img/原神1/20230613.jpg","328f28f0c665926bbf1be61c1e0f9e3b"],["/img/原神1/20230613y.jpg","7d9402a9d27dd7a4d94ed6b96749a913"],["/img/原神1/20230806.jpg","a06e01eb12ea150cc4f69857e82e14e5"],["/img/原神1/20230818.jpg","847082497e888868a88a5b8659d3a757"],["/img/原神1/20230827.jpg","b49f718487b7ccad738b0400a75ace8d"],["/img/原神1/77.jpg","1c331f19a4cc701c920e9bbcf313acd2"],["/img/原神1/tkzj.jpg","b90ba249cc7b81e4496d3ff9b46de4fa"],["/img/原神1/wy.jpg","da8c75ae5f4be75e1b15a06c30d3093c"],["/img/原神1/宵宫.jpg","479d594f14cd161c739f26f2d928be3c"],["/img/原神1/岩神瞳.jpg","f0a3d39dcaba515740c66586aba77529"],["/img/原神1/神里凌华.jpg","a6c7652f00b3af4d24b8241adcf714ad"],["/img/原神1/胡桃.jpg","5397ab5ff1ff973b5f0a138d27401a9d"],["/img/原神1/魈生日.jpg","f38434613a45527a0b43188ee86cd973"],["/img/原神壁纸.png","9923ecdd6bf86750cb79053c2ae80728"],["/img/定积分1.png","d04b2a8c66117b8a1b88f1ba29195624"],["/img/定积分2.png","60541f32b34ffd60ecb76cae8330a4c0"],["/img/宵宫.png","bb4133d7c6fafd55811166abbd8014b1"],["/img/带余除法.png","ddb0db29832323ade90314971abdafaa"],["/img/归档.jpg","848d23d6671a12ee127ecfcf36980383"],["/img/文章头.jpg","69ac174532c9b181bdb6addf4f399ef8"],["/img/文章首.jpg","aeeaefc30c8bdc9632d93235eeba84c1"],["/img/王者.jpg","9a593728f5760c561d11c308aa9e6d4b"],["/img/王者/AG2023春.jpg","248fe648813b7f27dc5dccabec30d52b"],["/img/王者/全息碎影.jpg","73a40b9a33abbd78df970e18602ad1ff"],["/img/王者/暗影游猎.jpg","6f7964372f87d99fff9c4a2ff74d939e"],["/img/王者/王者1.jpg","f0a6bfddb3648cd76c86f7b2e54b63f3"],["/img/真分式分解1.png","9fa7b435c2ecd5d204146ef4db69ff08"],["/img/真分式分解2.png","3bf014263fddafda255faf6833ae5ded"],["/img/真分式分解3.png","153ea0db4988e42884d6a754f89d453e"],["/img/真分式分解4.png","2a116d0a26fcbe0b138c3c0c6b7b7a18"],["/img/纳西妲.jpg","5778f0318c6b898162e4352d338e3748"],["/img/胡桃.jpg","abdf8a84ab0f1094ceb01d552443a7a3"],["/img/解UID.jpg","1e6b1197419e377868370053adca9c71"],["/img/音乐.jpg","fd02411760d0cd1b758fecef42df2de0"],["/img/首页.png","162def835975f473d3537bb1d7251782"],["/img/魈.jpg","0ead003fdf3007df275bada694ec5c52"],["/img/齐次函数.png","ed7ea62cebf8010b9a05e0da39a51378"],["/index.html","9e25abf02ab4214bb4f2a5520ccb1efd"],["/js/aos.js","a01f9089e8301e9eacfb9d029dc0ca5c"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/click_show_text.js","1c3f67421d920d415a4daecd5b318f5d"],["/js/color-schema.js","605f587be2ab3d36472bb03ac27ede65"],["/js/events.js","7fa076a71a5559d89af6b0c6dfd3a0d2"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/jquery-3.4.1.min.js","220afd743d9e9643852e31a135a9f3ae"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/links/index.html","bd925504be20f6be6e1b411bdfbe8936"],["/live2dw/assets/sagiri.2048/texture_00.png","8520262e2fe96f1bc2da8c8045f3b40f"],["/live2dw/assets/sagiri.2048/texture_01.png","b370aac78b7904f4f1cc048ab3339faa"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/sw-register.js","2d748e305bc59682118e8a0e4d8e971d"],["/其他/HDU/成绩/index.html","e6979c2dbe0a5327d3877f781934cb6b"],["/其他/HDU/比赛/index.html","c7a120cc97bfae609d4fe8b6c2a50ec0"],["/其他/index.html","0ca9a6291dfe94b7a177bd69e2a86e2c"],["/其他/原神语录/index.html","120ea490e527b46a0406293962d4f4b9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
