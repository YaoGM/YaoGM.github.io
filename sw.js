/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/02/p1/index.html","1a9e14f1ffd337b4d3e8b877f4b2343b"],["/2022/10/13/p2/index.html","bc3bac27de2f61252c577445cdf44ba3"],["/2022/11/11/p5/index.html","746b1c4056a2bb30e8a90c216e4c8fb5"],["/2022/11/27/p3/index.html","643c1e80480b70b1c965b3ca3b69c9c2"],["/2022/12/16/p4/index.html","68be53ea4d3e74be1ed05dba9e59834f"],["/404.html","66477d2adada2ccd7d8f9c061ac739e1"],["/about/index.html","0b3e84d92b7e105de606bb45a45d2c2a"],["/archives/2022/10/index.html","f744083dcfe4450caa94e0be0ce394bb"],["/archives/2022/11/index.html","a3103e157f89605ce8a054a50dcf3be1"],["/archives/2022/12/index.html","382ae858e03cde0b144494ccd0323ba2"],["/archives/2022/index.html","d01c6228499f74e90405415635b97d0e"],["/archives/index.html","222aac161ad90f0b0bd9b311f85eba03"],["/categories/index.html","157c51087dd097ce0897237df24e824a"],["/categories/操作系统/index.html","fdad5e573a78b32e49c995d289b54e0c"],["/categories/计算机网络/index.html","fc3a2d0c21eeda3521ddc1f24b5c5e06"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","be3af4b8abf2074e66acb737867c43dc"],["/css/highlight.css","1faec9713240b36b5ae891d339dd42b6"],["/css/main.css","67d1a62042a006a246737a49816931f9"],["/css/mypage.css","b7c59672a53cc80c20d41e26f5493155"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cnet/ARP/1.png","fd2aa04609fd08ccc49237df883a3665"],["/img/cnet/ARP/10.png","b83122ef302ba350c2fb6de2d3af41ba"],["/img/cnet/ARP/2.png","aa9f2b6a8e2c090d8e8988b3507ccf47"],["/img/cnet/ARP/3.png","4ddab00a235523bacf42e87365849acc"],["/img/cnet/ARP/4.png","8c5a11f9a9e47c869332418e0210a581"],["/img/cnet/ARP/5.png","0e08419d0202a8b7e96948118e9b6b45"],["/img/cnet/ARP/6.png","16c920993a59c23cf8b8ddfc76c047fe"],["/img/cnet/ARP/7.png","a245d9d69bb39333cbec1300a30208c1"],["/img/cnet/ARP/8.png","0f7c2cd208411ec4809d239dcbeab74a"],["/img/cnet/ARP/9.png","3cbf1c46feb195e59109f82ac5ccb289"],["/img/cnet/Apache/1.png","d8016a8c42f57eadb1e1d36fd2ead118"],["/img/cnet/Apache/2.png","12e62739d119e8ddc9402b5535cf37d3"],["/img/cnet/Apache/3.png","90be5bbc5d3ea6b018096f28e44c81cf"],["/img/cnet/Apache/4.png","b4e2ea4d82ae4929b19c449afe3902d6"],["/img/cnet/Apache/5.png","9e5bcbb205eb0d5e40ef8d9dbceddd87"],["/img/cnet/Apache/6.png","454058189b418362949453247b9f06ce"],["/img/cnet/Apache/7.png","a6db1afa3bca5b85305ace71bd61c5cf"],["/img/cnet/DNS/1.png","7fd434030727cab6098bfba55c638c6a"],["/img/cnet/DNS/2.png","963c63a1e4dcca28d3ad352711f9ac99"],["/img/cnet/DNS/3.png","8105b77cb0e6b5db0b2aa7b835046aa0"],["/img/cnet/DNS/4.png","baf2e4ef27f1826ea621167773a1fb99"],["/img/cnet/DNS/5.png","42568f40a9592ad0b55e951c11814f5a"],["/img/cnet/RIP/1.png","e133ef43ac50a0e9a7e56ebcba178266"],["/img/cnet/Vlan/1.png","71904749975f65e60dff54802489d71a"],["/img/cnet/Vlan/2.png","2c52b2fc0b0814a36d82ee269565c3f6"],["/img/cnet/ospf/1.png","bdf4acc3e8c0ba5dc26f57a37dce4563"],["/img/cnet/socket/1.png","a480f8d8468bcc69519cd648c4886492"],["/img/cnet/socket/2.png","7d4cd6dc8370f38389780ec4e485ea09"],["/img/cnet/socket/3.png","2d1897dbe659466f2d51075405d7177f"],["/img/cnet/生成树/1.png","e25c982669e948a5327bf3d4122aff63"],["/img/cnet/静态路由/1.png","6e625ca85475be641c3c376e05101e49"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/grade.jpg","ad47b1b0b8db8930efef94c10616dca0"],["/img/hduLogo.jpg","9f7817d359b81cf639fb23a9ec2c5b79"],["/img/linux.jpg","5a9b453b80c84932f15b070610e3fa50"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/math/1.png","421fa361a4e4ed01dd7eaa3f9c1c7d68"],["/img/math/10.png","86177917cff390783b5a36ae00d3fb8b"],["/img/math/10_1.png","7ae5885b5a69ee455bc3cfc61ee7cc15"],["/img/math/11.png","2f312da58705e240aafdccfaebd7e822"],["/img/math/11_1.png","4727f47744801585cbe2565285f81944"],["/img/math/12.png","a35849286e96ff03023be1b7b99a84dd"],["/img/math/12_1.png","c8d2326af492b9c74f95c113f3b6e70b"],["/img/math/13.png","a9c2691653d6210f080d2a91c7ca9714"],["/img/math/13_1.png","d6452fc6b9c811304b68aac8d6000f40"],["/img/math/13_2.png","eab6809aa43547eae9d41ab4a4018d5b"],["/img/math/14.png","2f29b717d1b4c46bbd3181bc956fb374"],["/img/math/15.png","412b9fe3692792afa255607ca3aea5f3"],["/img/math/16.png","3f3fbd97515237393ffbba2dd2dab77b"],["/img/math/16_1.png","7eff0e51e8aff0139c88bba4843df7de"],["/img/math/16_2.png","972e1112a076c8225fe4625689ca34e7"],["/img/math/17.png","58979aea3a8a7d4afdbebd5cedbbe519"],["/img/math/17_1.png","6de7ca6fa5447ecb3d66cc85acc475e4"],["/img/math/18.png","e8422853957143e21c7b47a49f752c19"],["/img/math/18_1.png","415894319805e7ba85b53785897e8eff"],["/img/math/19.png","32270bd5ff16e6c68deea23349276731"],["/img/math/19_1.png","b81bc1ff0e0ff7a3d63583026f9a73a2"],["/img/math/19_2.png","37b5bda9af179725986d07724068e0bb"],["/img/math/2.png","b4808e1ccd9d6eaef838903396b296d2"],["/img/math/20.png","4527226c9ebbf629e0d7a168414e9d22"],["/img/math/20_1.png","0f4a4bf3f556129c134d26f7ea2045c3"],["/img/math/21.png","c02db079e2113afa4ab131b66c1360fa"],["/img/math/21_1.png","517962fa9799eb7d91c59c9732b8754f"],["/img/math/22.png","02e0e97177ef53cd52e88bee5566a5d5"],["/img/math/23.png","afca0de84d08cb7e1c0f05d3e0dd0c32"],["/img/math/23_1.png","99ec89b6dfc38076145d9e4b5bca5021"],["/img/math/24.png","01c7c8ece01a7152ab7638594a1cf095"],["/img/math/24_1.png","82e8100a0d19916969701cfe61c8ba9d"],["/img/math/25.png","5f2858eaa664f33f1963c1b7a59ad557"],["/img/math/25_1.png","73815dec39f8e019f40a27c55b485890"],["/img/math/26.png","029e94e37929067c817e4efb9ef9588b"],["/img/math/3.png","53dbf8a0a0d6fe3f9e5637524a485cfa"],["/img/math/3_1.png","9224b5a4af01ecf6752de58fc7186ce9"],["/img/math/4.png","234e7ddb414ab21b963ee7c24dfdadf0"],["/img/math/4_1.png","c8535db2bff0cc49129165dd17e7140c"],["/img/math/5.png","f4d2273ac5a18898dff645edcf3b0e4f"],["/img/math/5_1.png","d0fc1ac5408a4dedd84805e5839b5916"],["/img/math/6.png","42ba41ce709c5a0b61598b901f70b090"],["/img/math/6_1.png","2f13f4da0954648dbfdbd0678c772b64"],["/img/math/7.png","1d80bb7c606b63b8b43072956a6ef74d"],["/img/math/7_1.png","399b6a3bc8781a55b1e0805123b5c98e"],["/img/math/8.png","d2edd14209083f5b4fcdce712dcb32fb"],["/img/math/8_1.png","fd3f0096934e595b175b12242b4fa379"],["/img/math/9.png","84224e87d43a65c651eb1c10f4f66a94"],["/img/math/9_1.png","fcfc5472c9e532d62e991a276a342a10"],["/img/math/mc1.png","18767ae19763d3966a1de111a2d8e243"],["/img/math/mc2.png","c8c32a6e02fffef3872b09cf6799c9f7"],["/img/math/mc3.png","58780df102b4c298256c8fe1e0a3b60d"],["/img/math/mc4.png","7ada5ae2eece65d8b8bcadd69eb0f132"],["/img/math/mc5.png","12de936020eb8ea441d843411976490d"],["/img/math/mc6.png","617a27d31e588a56290f6e7241165389"],["/img/math/mc7.png","038f1a2b571dde3646ebfdf8978cc1b9"],["/img/math/mc8.png","9cae9bf805b4e2d5fef0a85386a8913b"],["/img/mathcpt/cy10/1.png","5bfd25c9c6317f73a9afde3ebf132ba6"],["/img/mathcpt/cy10/2.jpg","956b5251979b356b89874fbe141fc0c1"],["/img/mathcpt/cy10/3.jpg","0552ddb74ca813c89441884e30fcd641"],["/img/mathcpt/cy10/4.jpg","3be0bd9d0d78d843f878a1c7c4d01abd"],["/img/mathcpt/cy10/5.jpg","b76b9bc89b930f9d48d1e892bb5d5f72"],["/img/mathcpt/cy10/6.jpg","519876709b10690eecc3459b9a1dfd78"],["/img/mathcpt/cy10/7.jpg","cf93f5231a13229be0804e18935bad79"],["/img/mathcpt/cy10/8.jpg","6a362494b3f2e7f610b46fb9153a0648"],["/img/mathcpt/cy10/9.jpg","43fd06b3d47c7ad660cdc98cb670a6ae"],["/img/mathcpt/cy11/1.png","ed1f7dcaa218bd9e038750d12e2a4fb3"],["/img/mathcpt/cy11/2.jpg","91b61266598704950c8adbab79c64e2d"],["/img/mathcpt/cy11/3.jpg","1e4bdfecda36b7ac99f1d3cc2c7916d6"],["/img/mathcpt/cy11/4.jpg","016812adbbe8b23b3cf2bc8bc6c55aa7"],["/img/mathcpt/cy11/5.jpg","6423dd7d9dcb0d2df786eba18d542d9c"],["/img/mathcpt/cy11/6.jpg","cf9c060d8291d6b0dd87c462c1195b1b"],["/img/mathcpt/cy11/7.jpg","b6ed57f5c8e6e260a252fc6122db4c68"],["/img/mathcpt/cy12/1.jpg","973eadede89ca5ca921d5364fcd60247"],["/img/mathcpt/cy12/10.jpg","664d705bd38f9534649f84d6e5d397e6"],["/img/mathcpt/cy12/11.jpg","3d91fd403dde067f4ca750b5ae1d621c"],["/img/mathcpt/cy12/2.jpg","7671580a741e327da47f9626be10e480"],["/img/mathcpt/cy12/3.jpg","f37efe9bddaf67ee3b78dd680551a84d"],["/img/mathcpt/cy12/4.jpg","c3f38798c7d40e621cf5aa26cb2ed58c"],["/img/mathcpt/cy12/5.jpg","1e6ee8eba1912f0c0412765c6d3092ac"],["/img/mathcpt/cy12/6.jpg","554c92e961f6bec3cf2d3f65674749c6"],["/img/mathcpt/cy12/7.jpg","34fe6e369ed95ed5de68e3e00668e944"],["/img/mathcpt/cy12/8.jpg","3bd4f932d94e894ffb4f560d4626258f"],["/img/mathcpt/cy12/9.jpg","7cdbe6a9bfd972bb2837cb3567287a75"],["/img/mathcpt/cy13/1.jpg","51f0c9548cf17beea74efcf0ef21449c"],["/img/mathcpt/cy13/2.jpg","914aa50de0344196ac09f549f7041d95"],["/img/mathcpt/cy13/3.jpg","7e3234f35f69c6abf0fe08bf1ea08686"],["/img/mathcpt/cy13/4.jpg","3c3cb6f4a1f072727374e3c137d6064b"],["/img/mathcpt/cy13/5.jpg","7e6802c9340b8d36598e62beef5e65c0"],["/img/mathcpt/cy13/6.jpg","3b92dc80e5a4f75fdec7f4d05cdb5c54"],["/img/mathcpt/cy13/7.jpg","937c206ba0c4913668ba20b2bc937870"],["/img/mathcpt/cy13/8.jpg","99a8c583d8028d462096e6bd88ab88d9"],["/img/mathcpt/cy13/9.jpg","db7b70fe48bac329d16e43d1a6a6e543"],["/img/miaoshu.jpg","c97c25fa1ef2a70b85ac2c7871205d4e"],["/img/os/1.png","57184eafc116e0d2179fa807f3ef35b1"],["/img/os/10.png","e50e7b1c39e07fd91c5e3b1167b45bda"],["/img/os/11.png","1da2f45c2778976c30d873e4d7c5889a"],["/img/os/12.png","d6d9dc180d01262c7c2ad39f0c13dc65"],["/img/os/13.png","3733714d41742c2a366d614dce6104d5"],["/img/os/14.png","9ee70c8ac4dc22071415be626724c41d"],["/img/os/2.png","19013a7972d52502c1cf732e3d77e305"],["/img/os/3.png","cddc04b63df0d9866a273ae1bc5a75e9"],["/img/os/4.png","2fe8b7d590422d2624293873ae8168d4"],["/img/os/5.png","0353043cc35b609338a3eee52a11a331"],["/img/os/6.png","49adf80c6d21b791139172e4eae69203"],["/img/os/7.png","24d1b97c5e46d520ed75368a40afbaa0"],["/img/os/8.png","730ae9b5bd11889ccd9f374217dfff52"],["/img/os/9.png","407ed34363b7a9f16e901ae501eed8ce"],["/img/pikaq.png","07a03e835d90d6169f37958d0cd72852"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/star.jpg","2cd5e00266ca5416654bb1f52eace5a7"],["/img/star1.jpg","09cb113a36ea1d8a704d921f94090874"],["/img/touxiang.jpg","c5510889841e1535164506a7bc4aa91a"],["/img/touxiang.png","c5510889841e1535164506a7bc4aa91a"],["/img/z1.jpg","aabab88f7c24d41ab4986ae129f883d5"],["/img/z2.jpg","74bdb655afd5d5f7cf7efafe6d5a4ef6"],["/img/z3.jpg","616135f61b09917eb112114d9fef863f"],["/img/不定积分1.png","e5e404be23dcb5e016ae4bb5bbcf224f"],["/img/不定积分2.png","50aa3b7785193e36af8fd31fa968f3d8"],["/img/不定积分3.png","cf515a5cd47c76a8dad825090c14b52f"],["/img/不定积分4.png","06208f607f2aa2cd97251cac07270422"],["/img/不定积分5.png","be4200057b50b978f0ab57a979768d6b"],["/img/关于.png","1b259d8e0e91be0a2edbfb52fd75bb59"],["/img/关于1.jpg","9bb3b789dad898ce448540a4e4deeddf"],["/img/关于2.jpg","73cc1aa259e3b5f2a628c1bde51998f0"],["/img/关于3.jpg","4415b6b6b0d17d25ed8eff60d3af4153"],["/img/分式通项题一.png","b287f66dbbb43725ffea53e95bff54c3"],["/img/分式通项题二.png","b81bb27f08ee0f53eb99304c2567ba14"],["/img/分类.jpg","54e32764846f30b7e39079e5325073d1"],["/img/初音.png","4c84b7798361057cf638fb64f9358bb5"],["/img/刻晴.jpg","76a63ab72c693b70a210a56afb7e2949"],["/img/原神/七七.jpg","92ecdb466355104da312e5e66bc3b637"],["/img/原神/万叶.jpg","e5aa4a52913a9258e0967ee2b7d87889"],["/img/原神/云堇.jpg","80714b430ba9596bdc1c5177937a78b9"],["/img/原神/优菈.jpg","56a6af7c77fe6bab0fd9f73ecdf54c56"],["/img/原神/八重神子.jpg","3f1f8d96965684a2d897e7b3f6c18d5f"],["/img/原神/刻晴.jpg","4d94e9aa830a23ea785abecb18b23a78"],["/img/原神/北斗.jpg","cb72eee94da0328ba614e51a2bc3b089"],["/img/原神/可莉.jpg","9cb06c79c2108b7c16b6c1dab902b66b"],["/img/原神/妮露.jpg","a127a2e52b573f572927369b8d9e1524"],["/img/原神/安柏.jpg","8d120c0835db9a47b3c71469e28c81d7"],["/img/原神/宵宫.jpg","5634ebd60b62b76f254ad2bddd4b9715"],["/img/原神/巴巴托斯.jpg","8c4c704b199e61cb30702dd6196abab9"],["/img/原神/派蒙.jpg","ae94588bb70008846ce76b6664e6b636"],["/img/原神/烟菲.jpg","2cd2f305eaf7da130c779e9a6247abfe"],["/img/原神/珊瑚宫心海.jpg","7353b68109d9e79d21d3144d42167f58"],["/img/原神/琴.jpg","ec9c6518c3fc9962b4f566ad922bafb7"],["/img/原神/甘雨.jpg","6836c31541b4e4f876f0c4047d963311"],["/img/原神/申鹤.jpg","52b044079f9093e6cf30900da4424142"],["/img/原神/男主.jpg","4936fe55eec3147d1d34493aad9a9487"],["/img/原神/神里绫人.jpg","d2fb173fd2cb1cf72545e9f4ef825cd2"],["/img/原神/神里绫华.jpg","5d170ef1d599447623665d5c81ff8836"],["/img/原神/胡桃.jpg","c3911664ce3fc9a470762d85b1604814"],["/img/原神/芭芭拉.jpg","43289040abd998bc2cc7307216cf8e43"],["/img/原神/草神.jpg","0472a5a532ed044e65e4e744797f391b"],["/img/原神/草神新年.jpg","40b2ab1d38c30333e5d5873c41d02ae8"],["/img/原神/荧.jpg","cebce120f216b39ab27021f8e2fec20f"],["/img/原神/莫娜.jpg","81fa5d06ab8d09d605ff2e826012fde8"],["/img/原神/菲谢尔.jpg","03f11dabd306340200d1709572e0557e"],["/img/原神/诺艾尔.jpg","88c285b0eed6dbffddcc55dd952987cb"],["/img/原神/赛诺.jpg","e410f579a28d2d6a4595643660c12a5f"],["/img/原神/达达利亚.jpg","b9d46401f1e22d61a3bfd530ceb52bee"],["/img/原神/迪卢克.jpg","d569a4947448082adbece9e8c104fd76"],["/img/原神/钟离.jpg","4626504ff3b3f81972b192de198dad7b"],["/img/原神/阿贝多.jpg","04589240b1a8fe2c029db0fdcba511ec"],["/img/原神/雷电.jpg","5631fa61519ce1a7f2c3d4e631a300d4"],["/img/原神/香菱.jpg","7424b6ccca9968811baa2c08d4ea5928"],["/img/原神/魈.jpg","0166094fd4bef8cf2bf1255890cbba5f"],["/img/原神/魈新年.jpg","418aadb1fc6f97612bae23ca45ba67c5"],["/img/原神壁纸.png","9923ecdd6bf86750cb79053c2ae80728"],["/img/定积分1.png","d04b2a8c66117b8a1b88f1ba29195624"],["/img/定积分2.png","60541f32b34ffd60ecb76cae8330a4c0"],["/img/带余除法.png","ddb0db29832323ade90314971abdafaa"],["/img/归档.jpg","848d23d6671a12ee127ecfcf36980383"],["/img/文章头.jpg","69ac174532c9b181bdb6addf4f399ef8"],["/img/文章首.jpg","aeeaefc30c8bdc9632d93235eeba84c1"],["/img/真分式分解1.png","9fa7b435c2ecd5d204146ef4db69ff08"],["/img/真分式分解2.png","3bf014263fddafda255faf6833ae5ded"],["/img/真分式分解3.png","153ea0db4988e42884d6a754f89d453e"],["/img/真分式分解4.png","2a116d0a26fcbe0b138c3c0c6b7b7a18"],["/img/纳西妲.jpg","5778f0318c6b898162e4352d338e3748"],["/img/胡桃.jpg","abdf8a84ab0f1094ceb01d552443a7a3"],["/img/首页.png","162def835975f473d3537bb1d7251782"],["/img/高等数学/16_1.jpg","a9c8416ebb4aff0e61f09d5fbb89474a"],["/img/高等数学/16_2.jpg","d2e5fe6d75f2d3bf6b361f6740954ee9"],["/img/高等数学/16_3.jpg","1182320dbbe2f75dea3e5047a1547f61"],["/img/高等数学/16_4.jpg","b2cb95d9380178cb739635709c6dcae7"],["/img/高等数学/16_5.jpg","4d0d19270ed4214638af67c3b2dc0cb1"],["/img/高等数学/16_6.jpg","3afc22566a5278c4f3664f2e74b5e69f"],["/img/高等数学/16_7.jpg","1dfe7c2455c7b2bd396a9fe9ef8ebad1"],["/img/高等数学/16_8.jpg","bd41e4fb306028597c596e2d7b0f4f8e"],["/img/高等数学/16_9.jpg","3b3cf594c9f8843b5593d6280bb983bb"],["/img/高等数学/24_1.jpg","55c4d58c18e8d2c575722a5381fe942e"],["/img/高等数学/24_2.jpg","4247c74243d8d3cb07606256ec061f68"],["/img/高等数学/2_1.jpg","87b173d5fb3c7c58dcee66b74e33566e"],["/img/高等数学/2_2.jpg","2c7d546c2e0244161b1ac04e759b9ab5"],["/img/高等数学/2_3.jpg","c5dedcae650372ee60f075d810490794"],["/img/高等数学/2_4.jpg","bb4243b81e43f175f33dc0f2e61fe819"],["/img/高等数学/2_5.jpg","e208ebff3674190234edebacdd9a80e9"],["/img/高等数学/2_6.jpg","30f862763608844f157001c50da89ea0"],["/img/高等数学/3_1.jpg","61baf25faef71fb6e84e4f6aa2cc9c92"],["/img/高等数学/3_2.jpg","9f5f3ab7a53b8d54082cc51db1b50468"],["/img/高等数学/3_3.jpg","4d32dac3427fa9b21146ef574feeff4d"],["/img/高等数学/4_1.jpg","8c6d6a6095ee3d1f885ed74ab25edd5e"],["/img/高等数学/4_2.jpg","4f35cb8f6f6f95b002d3c104324e92e7"],["/img/高等数学/4_3.jpg","9a769a47e97bf4a2baca38b860025548"],["/img/高等数学/4_4.jpg","9cd2f8ad6077c7f0acf0e2ce6c22d94c"],["/img/高等数学/8_1.jpg","38bd9b7865bb89f3374624db2036a2ae"],["/img/高等数学/9_1.jpg","e295050252e70805828646a8c3321c33"],["/img/高等数学/9_2.jpg","0360f3635c37008b958c2d1999ad53c1"],["/img/高等数学/9_3.jpg","781862ca1ec4224529ba24e4690c414c"],["/img/魈.jpg","0ead003fdf3007df275bada694ec5c52"],["/img/齐次函数.png","ed7ea62cebf8010b9a05e0da39a51378"],["/index.html","294833135e9a4e3e423dac0f474e17ff"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/click_show_text.js","1c3f67421d920d415a4daecd5b318f5d"],["/js/color-schema.js","605f587be2ab3d36472bb03ac27ede65"],["/js/events.js","7fa076a71a5559d89af6b0c6dfd3a0d2"],["/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/love.js","eee8f2c2bd37bca027d4fe044be30794"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/links/index.html","251aa1e20daafb2d55f54f4afc42558d"],["/live2dw/assets/sagiri.2048/texture_00.png","8520262e2fe96f1bc2da8c8045f3b40f"],["/live2dw/assets/sagiri.2048/texture_01.png","b370aac78b7904f4f1cc048ab3339faa"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/sw-register.js","e02b38bda4567d883cbbb019890c69f3"],["/tags/index.html","a668ab736c1880478511d1adcccf52fe"],["/心/music/index.html","b1f91183e43497f07a064613f4289e76"],["/心/原神语录/index.html","e1f7e8206bc7bc0e20e42186a48da418"],["/心/成绩/index.html","e63937b0ff36a7a5396e5b227df5fb8b"],["/心/有趣的比赛/index.html","c0e070db2e51890723e0fa31191fbee7"],["/心/自己做的资料/index.html","c20e721d12c0b4d85a084142d33e450c"]];
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
