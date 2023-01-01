/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/09/26/p1/index.html","7167c404dd2642235848fc1ac4c03b27"],["/2022/09/27/p2-2022浙江省微积分竞赛/index.html","475aaae8eb4d57547843bc8a4390705b"],["/2022/09/28/p3-关于换元后的积分变换/index.html","de2e34dc3c79a199e32520e9c07afba6"],["/2022/09/29/p4-关于数列求通项方法/index.html","eea88979d9d09d3a1046b35b7744885c"],["/2022/10/02/p5-操作系统实验一-题目1/index.html","49d45d2e344235715afd3e5937c723f2"],["/2022/10/03/p6-关于Stolz定理/index.html","911c67cde05e366bca381204a7e45136"],["/2022/10/04/p7-分享一些题目/index.html","ed984786f2856fdd00a4bf0f3090a0dd"],["/2022/10/05/p8-关于分式除法和有理式分解/index.html","9744c901e3d8b56a373e572983f4e22b"],["/2022/10/07/p9-关于不定积分和定积分计算的小技巧/index.html","126fe17ab3fe08ca7feb7c23543136a1"],["/2022/10/13/p10-操作系统实验二题目5/index.html","dbbc0965d517b827409f3f22281006c2"],["/2022/10/16/p11-第十三界全国大学生数学竞赛预赛/index.html","8cf1658059c85703aebe29ff38837c81"],["/2022/10/17/p12-第十二界全国大学生数学竞赛预赛/index.html","4b1a5942903c9b0d8d4a34c105ec6abe"],["/2022/10/22/p13-一些考前资料/index.html","16d538b2118b8663970591cea7416657"],["/2022/10/29/p14第十一界全国大学生数学竞赛预赛/index.html","38faddf34e0ec2de83ef892f15576ac5"],["/2022/10/30/p15第十届全国大学生数学竞赛预赛/index.html","1a8a470599e75e9ca1edefcf0d777e96"],["/2022/11/04/p16最近关于数学的思考/index.html","676dcd30a5bf081e95e73c8356d19b03"],["/2022/11/11/p17计网实验ARP/index.html","960469ebe294080663e013afd0a8c178"],["/2022/11/13/p18计网Apache部署&DNS配置&Socket编程/index.html","e03f157d2e1a7ed3e5fd4a2271bf6eda"],["/2022/11/27/p19操作系统实验三题目四/index.html","18ffcf1ea00eec250002943b27ff4560"],["/2022/11/27/p20线性代数-复看/index.html","dfd36575a6df10099c1fde86b76573d9"],["/2022/11/28/p21Vlan&生成树&静态路由&RIP/index.html","6b11febfbe1f4f321601f101f7e74209"],["/2022/12/16/p22操作系统实验四文件系统/index.html","ba0d84c1745d6547faeb6bf0bfbf30c4"],["/2022/12/22/p23没有名字/index.html","46cd712ba68e3873b1a58359821cd79e"],["/404.html","e2e413fb68d2a8cb8a6674ea7a8830a1"],["/about/index.html","89861d6386992e84ff917604b444191d"],["/archives/2022/09/index.html","7d2dbdc3f4fb4baa8a59c5c1fcc9c7d6"],["/archives/2022/10/index.html","3642c93ddd61ba587882316823ee2e90"],["/archives/2022/10/page/2/index.html","f04ae82c6fe4ca3e48d328df4bbad958"],["/archives/2022/11/index.html","c7faef2c8ba12bf06a8b2f1336567c7b"],["/archives/2022/12/index.html","956bd8888eea5113f29ab8ce0cb1838f"],["/archives/2022/index.html","dfc53b8156afe1d66f7174ae864c768e"],["/archives/2022/page/2/index.html","dfde37974ba6787d5a8934c4f030999d"],["/archives/2022/page/3/index.html","54f46ce855b113dcabc5153f4b0ae8db"],["/archives/index.html","c3f466e3fe0638555642b5d107d2ba7e"],["/archives/page/2/index.html","155302bd53db816ca18612f93ee0a0c8"],["/archives/page/3/index.html","b1d668cb33c63860d6ac7873e45d058e"],["/categories/index.html","effd56705417744b23b5db0ec02be32b"],["/categories/操作系统/index.html","bb0c8848d6e69795f2489cf6f13cdcfa"],["/categories/杂记/index.html","2d8e2750c01190ecd3c597677a4a33bf"],["/categories/线性代数/index.html","55fb52f40e23f99a115856d44c67799d"],["/categories/计算机网络/index.html","4cbaaeb9a62cc6f566a7d5a661781a67"],["/categories/高等数学/index.html","a4e0c1867b4e543fcc5161ce73d84b99"],["/categories/高等数学/page/2/index.html","e3c83904cb4ba0c403a53a741d920aea"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","1faec9713240b36b5ae891d339dd42b6"],["/css/highlight.css","1faec9713240b36b5ae891d339dd42b6"],["/css/main.css","a53ad788d6e15bec88f38d8872a73ff1"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cnet/ARP/1.png","fd2aa04609fd08ccc49237df883a3665"],["/img/cnet/ARP/10.png","b83122ef302ba350c2fb6de2d3af41ba"],["/img/cnet/ARP/2.png","aa9f2b6a8e2c090d8e8988b3507ccf47"],["/img/cnet/ARP/3.png","4ddab00a235523bacf42e87365849acc"],["/img/cnet/ARP/4.png","8c5a11f9a9e47c869332418e0210a581"],["/img/cnet/ARP/5.png","0e08419d0202a8b7e96948118e9b6b45"],["/img/cnet/ARP/6.png","16c920993a59c23cf8b8ddfc76c047fe"],["/img/cnet/ARP/7.png","a245d9d69bb39333cbec1300a30208c1"],["/img/cnet/ARP/8.png","0f7c2cd208411ec4809d239dcbeab74a"],["/img/cnet/ARP/9.png","3cbf1c46feb195e59109f82ac5ccb289"],["/img/cnet/Apache/1.png","d8016a8c42f57eadb1e1d36fd2ead118"],["/img/cnet/Apache/2.png","12e62739d119e8ddc9402b5535cf37d3"],["/img/cnet/Apache/3.png","90be5bbc5d3ea6b018096f28e44c81cf"],["/img/cnet/Apache/4.png","b4e2ea4d82ae4929b19c449afe3902d6"],["/img/cnet/Apache/5.png","9e5bcbb205eb0d5e40ef8d9dbceddd87"],["/img/cnet/Apache/6.png","454058189b418362949453247b9f06ce"],["/img/cnet/Apache/7.png","a6db1afa3bca5b85305ace71bd61c5cf"],["/img/cnet/DNS/1.png","7fd434030727cab6098bfba55c638c6a"],["/img/cnet/DNS/2.png","963c63a1e4dcca28d3ad352711f9ac99"],["/img/cnet/DNS/3.png","8105b77cb0e6b5db0b2aa7b835046aa0"],["/img/cnet/DNS/4.png","baf2e4ef27f1826ea621167773a1fb99"],["/img/cnet/DNS/5.png","42568f40a9592ad0b55e951c11814f5a"],["/img/cnet/RIP/1.png","e133ef43ac50a0e9a7e56ebcba178266"],["/img/cnet/Vlan/1.png","71904749975f65e60dff54802489d71a"],["/img/cnet/Vlan/2.png","2c52b2fc0b0814a36d82ee269565c3f6"],["/img/cnet/ospf/1.png","bdf4acc3e8c0ba5dc26f57a37dce4563"],["/img/cnet/socket/1.png","a480f8d8468bcc69519cd648c4886492"],["/img/cnet/socket/2.png","7d4cd6dc8370f38389780ec4e485ea09"],["/img/cnet/socket/3.png","2d1897dbe659466f2d51075405d7177f"],["/img/cnet/生成树/1.png","e25c982669e948a5327bf3d4122aff63"],["/img/cnet/静态路由/1.png","6e625ca85475be641c3c376e05101e49"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/grade.jpg","ad47b1b0b8db8930efef94c10616dca0"],["/img/hduLogo.jpg","9f7817d359b81cf639fb23a9ec2c5b79"],["/img/linux.jpg","5a9b453b80c84932f15b070610e3fa50"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/math/1.png","421fa361a4e4ed01dd7eaa3f9c1c7d68"],["/img/math/10.png","86177917cff390783b5a36ae00d3fb8b"],["/img/math/10_1.png","7ae5885b5a69ee455bc3cfc61ee7cc15"],["/img/math/11.png","2f312da58705e240aafdccfaebd7e822"],["/img/math/11_1.png","4727f47744801585cbe2565285f81944"],["/img/math/12.png","a35849286e96ff03023be1b7b99a84dd"],["/img/math/12_1.png","c8d2326af492b9c74f95c113f3b6e70b"],["/img/math/13.png","a9c2691653d6210f080d2a91c7ca9714"],["/img/math/13_1.png","d6452fc6b9c811304b68aac8d6000f40"],["/img/math/13_2.png","eab6809aa43547eae9d41ab4a4018d5b"],["/img/math/14.png","2f29b717d1b4c46bbd3181bc956fb374"],["/img/math/15.png","412b9fe3692792afa255607ca3aea5f3"],["/img/math/16.png","3f3fbd97515237393ffbba2dd2dab77b"],["/img/math/16_1.png","7eff0e51e8aff0139c88bba4843df7de"],["/img/math/16_2.png","972e1112a076c8225fe4625689ca34e7"],["/img/math/17.png","58979aea3a8a7d4afdbebd5cedbbe519"],["/img/math/17_1.png","6de7ca6fa5447ecb3d66cc85acc475e4"],["/img/math/18.png","e8422853957143e21c7b47a49f752c19"],["/img/math/18_1.png","415894319805e7ba85b53785897e8eff"],["/img/math/19.png","32270bd5ff16e6c68deea23349276731"],["/img/math/19_1.png","b81bc1ff0e0ff7a3d63583026f9a73a2"],["/img/math/19_2.png","37b5bda9af179725986d07724068e0bb"],["/img/math/2.png","b4808e1ccd9d6eaef838903396b296d2"],["/img/math/20.png","4527226c9ebbf629e0d7a168414e9d22"],["/img/math/20_1.png","0f4a4bf3f556129c134d26f7ea2045c3"],["/img/math/21.png","c02db079e2113afa4ab131b66c1360fa"],["/img/math/21_1.png","517962fa9799eb7d91c59c9732b8754f"],["/img/math/22.png","02e0e97177ef53cd52e88bee5566a5d5"],["/img/math/23.png","afca0de84d08cb7e1c0f05d3e0dd0c32"],["/img/math/23_1.png","99ec89b6dfc38076145d9e4b5bca5021"],["/img/math/24.png","01c7c8ece01a7152ab7638594a1cf095"],["/img/math/24_1.png","82e8100a0d19916969701cfe61c8ba9d"],["/img/math/25.png","5f2858eaa664f33f1963c1b7a59ad557"],["/img/math/25_1.png","73815dec39f8e019f40a27c55b485890"],["/img/math/26.png","029e94e37929067c817e4efb9ef9588b"],["/img/math/3.png","53dbf8a0a0d6fe3f9e5637524a485cfa"],["/img/math/3_1.png","9224b5a4af01ecf6752de58fc7186ce9"],["/img/math/4.png","234e7ddb414ab21b963ee7c24dfdadf0"],["/img/math/4_1.png","c8535db2bff0cc49129165dd17e7140c"],["/img/math/5.png","f4d2273ac5a18898dff645edcf3b0e4f"],["/img/math/5_1.png","d0fc1ac5408a4dedd84805e5839b5916"],["/img/math/6.png","42ba41ce709c5a0b61598b901f70b090"],["/img/math/6_1.png","2f13f4da0954648dbfdbd0678c772b64"],["/img/math/7.png","1d80bb7c606b63b8b43072956a6ef74d"],["/img/math/7_1.png","399b6a3bc8781a55b1e0805123b5c98e"],["/img/math/8.png","d2edd14209083f5b4fcdce712dcb32fb"],["/img/math/8_1.png","fd3f0096934e595b175b12242b4fa379"],["/img/math/9.png","84224e87d43a65c651eb1c10f4f66a94"],["/img/math/9_1.png","fcfc5472c9e532d62e991a276a342a10"],["/img/math/mc1.png","18767ae19763d3966a1de111a2d8e243"],["/img/math/mc2.png","c8c32a6e02fffef3872b09cf6799c9f7"],["/img/math/mc3.png","58780df102b4c298256c8fe1e0a3b60d"],["/img/math/mc4.png","7ada5ae2eece65d8b8bcadd69eb0f132"],["/img/math/mc5.png","12de936020eb8ea441d843411976490d"],["/img/math/mc6.png","617a27d31e588a56290f6e7241165389"],["/img/math/mc7.png","038f1a2b571dde3646ebfdf8978cc1b9"],["/img/math/mc8.png","9cae9bf805b4e2d5fef0a85386a8913b"],["/img/mathcpt/cy10/1.png","5bfd25c9c6317f73a9afde3ebf132ba6"],["/img/mathcpt/cy10/2.jpg","956b5251979b356b89874fbe141fc0c1"],["/img/mathcpt/cy10/3.jpg","0552ddb74ca813c89441884e30fcd641"],["/img/mathcpt/cy10/4.jpg","3be0bd9d0d78d843f878a1c7c4d01abd"],["/img/mathcpt/cy10/5.jpg","b76b9bc89b930f9d48d1e892bb5d5f72"],["/img/mathcpt/cy10/6.jpg","519876709b10690eecc3459b9a1dfd78"],["/img/mathcpt/cy10/7.jpg","cf93f5231a13229be0804e18935bad79"],["/img/mathcpt/cy10/8.jpg","6a362494b3f2e7f610b46fb9153a0648"],["/img/mathcpt/cy10/9.jpg","43fd06b3d47c7ad660cdc98cb670a6ae"],["/img/mathcpt/cy11/1.png","ed1f7dcaa218bd9e038750d12e2a4fb3"],["/img/mathcpt/cy11/2.jpg","91b61266598704950c8adbab79c64e2d"],["/img/mathcpt/cy11/3.jpg","1e4bdfecda36b7ac99f1d3cc2c7916d6"],["/img/mathcpt/cy11/4.jpg","016812adbbe8b23b3cf2bc8bc6c55aa7"],["/img/mathcpt/cy11/5.jpg","6423dd7d9dcb0d2df786eba18d542d9c"],["/img/mathcpt/cy11/6.jpg","cf9c060d8291d6b0dd87c462c1195b1b"],["/img/mathcpt/cy11/7.jpg","b6ed57f5c8e6e260a252fc6122db4c68"],["/img/mathcpt/cy12/1.jpg","973eadede89ca5ca921d5364fcd60247"],["/img/mathcpt/cy12/10.jpg","664d705bd38f9534649f84d6e5d397e6"],["/img/mathcpt/cy12/11.jpg","3d91fd403dde067f4ca750b5ae1d621c"],["/img/mathcpt/cy12/2.jpg","7671580a741e327da47f9626be10e480"],["/img/mathcpt/cy12/3.jpg","f37efe9bddaf67ee3b78dd680551a84d"],["/img/mathcpt/cy12/4.jpg","c3f38798c7d40e621cf5aa26cb2ed58c"],["/img/mathcpt/cy12/5.jpg","1e6ee8eba1912f0c0412765c6d3092ac"],["/img/mathcpt/cy12/6.jpg","554c92e961f6bec3cf2d3f65674749c6"],["/img/mathcpt/cy12/7.jpg","34fe6e369ed95ed5de68e3e00668e944"],["/img/mathcpt/cy12/8.jpg","3bd4f932d94e894ffb4f560d4626258f"],["/img/mathcpt/cy12/9.jpg","7cdbe6a9bfd972bb2837cb3567287a75"],["/img/mathcpt/cy13/1.jpg","51f0c9548cf17beea74efcf0ef21449c"],["/img/mathcpt/cy13/2.jpg","914aa50de0344196ac09f549f7041d95"],["/img/mathcpt/cy13/3.jpg","7e3234f35f69c6abf0fe08bf1ea08686"],["/img/mathcpt/cy13/4.jpg","3c3cb6f4a1f072727374e3c137d6064b"],["/img/mathcpt/cy13/5.jpg","7e6802c9340b8d36598e62beef5e65c0"],["/img/mathcpt/cy13/6.jpg","3b92dc80e5a4f75fdec7f4d05cdb5c54"],["/img/mathcpt/cy13/7.jpg","937c206ba0c4913668ba20b2bc937870"],["/img/mathcpt/cy13/8.jpg","99a8c583d8028d462096e6bd88ab88d9"],["/img/mathcpt/cy13/9.jpg","db7b70fe48bac329d16e43d1a6a6e543"],["/img/miaoshu.jpg","c97c25fa1ef2a70b85ac2c7871205d4e"],["/img/os/1.png","57184eafc116e0d2179fa807f3ef35b1"],["/img/os/10.png","e50e7b1c39e07fd91c5e3b1167b45bda"],["/img/os/11.png","1da2f45c2778976c30d873e4d7c5889a"],["/img/os/12.png","d6d9dc180d01262c7c2ad39f0c13dc65"],["/img/os/13.png","3733714d41742c2a366d614dce6104d5"],["/img/os/14.png","9ee70c8ac4dc22071415be626724c41d"],["/img/os/2.png","19013a7972d52502c1cf732e3d77e305"],["/img/os/3.png","cddc04b63df0d9866a273ae1bc5a75e9"],["/img/os/4.png","2fe8b7d590422d2624293873ae8168d4"],["/img/os/5.png","0353043cc35b609338a3eee52a11a331"],["/img/os/6.png","49adf80c6d21b791139172e4eae69203"],["/img/os/7.png","24d1b97c5e46d520ed75368a40afbaa0"],["/img/os/8.png","730ae9b5bd11889ccd9f374217dfff52"],["/img/os/9.png","407ed34363b7a9f16e901ae501eed8ce"],["/img/pikaq.png","07a03e835d90d6169f37958d0cd72852"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/star.jpg","2cd5e00266ca5416654bb1f52eace5a7"],["/img/star1.jpg","09cb113a36ea1d8a704d921f94090874"],["/img/touxiang.jpg","c5510889841e1535164506a7bc4aa91a"],["/img/touxiang.png","c5510889841e1535164506a7bc4aa91a"],["/img/z1.jpg","aabab88f7c24d41ab4986ae129f883d5"],["/img/z2.jpg","74bdb655afd5d5f7cf7efafe6d5a4ef6"],["/img/z3.jpg","616135f61b09917eb112114d9fef863f"],["/img/不定积分1.png","e5e404be23dcb5e016ae4bb5bbcf224f"],["/img/不定积分2.png","50aa3b7785193e36af8fd31fa968f3d8"],["/img/不定积分3.png","cf515a5cd47c76a8dad825090c14b52f"],["/img/不定积分4.png","06208f607f2aa2cd97251cac07270422"],["/img/不定积分5.png","be4200057b50b978f0ab57a979768d6b"],["/img/关于.jpg","008722970eeb1bf5adb2c368c64c6c4f"],["/img/关于1.jpg","9bb3b789dad898ce448540a4e4deeddf"],["/img/关于2.jpg","73cc1aa259e3b5f2a628c1bde51998f0"],["/img/关于3.jpg","4415b6b6b0d17d25ed8eff60d3af4153"],["/img/分式通项题一.png","b287f66dbbb43725ffea53e95bff54c3"],["/img/分式通项题二.png","b81bb27f08ee0f53eb99304c2567ba14"],["/img/分类.jpg","54e32764846f30b7e39079e5325073d1"],["/img/定积分1.png","d04b2a8c66117b8a1b88f1ba29195624"],["/img/定积分2.png","60541f32b34ffd60ecb76cae8330a4c0"],["/img/带余除法.png","ddb0db29832323ade90314971abdafaa"],["/img/归档.jpg","848d23d6671a12ee127ecfcf36980383"],["/img/文章头.jpg","69ac174532c9b181bdb6addf4f399ef8"],["/img/文章首.jpg","aeeaefc30c8bdc9632d93235eeba84c1"],["/img/真分式分解1.png","9fa7b435c2ecd5d204146ef4db69ff08"],["/img/真分式分解2.png","3bf014263fddafda255faf6833ae5ded"],["/img/真分式分解3.png","153ea0db4988e42884d6a754f89d453e"],["/img/真分式分解4.png","2a116d0a26fcbe0b138c3c0c6b7b7a18"],["/img/纳西妲.jpg","5778f0318c6b898162e4352d338e3748"],["/img/胡桃.jpg","2497081de331d883c73b782eae9af972"],["/img/莫晴.jpg","7342b763fa8a34545ad6aef3f66fe9ff"],["/img/首页.jpg","a414e0e1016a9760510f6f18e7530d5c"],["/img/魈.jpg","0ead003fdf3007df275bada694ec5c52"],["/img/齐次函数.png","ed7ea62cebf8010b9a05e0da39a51378"],["/index.html","5f3f1e933aa547e378dc699e3c2a9024"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","fda9ab19205d5873d3710a4cc5bb5ec3"],["/js/events.js","7fa076a71a5559d89af6b0c6dfd3a0d2"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/plugins.js","85b5700ee52692e268d7ce57a8e3647b"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/links/index.html","85c2b3f05c884b9a59ee4ac4dc2a7790"],["/page/2/index.html","f381dbdadbc5f0d29108266a368f29a1"],["/page/3/index.html","d2f7fba7f743dea8f70c73c8eb04eacb"],["/sw-register.js","06dfae86290a21aaa09cbf9163e6fdba"],["/yHDU/index.html","8921e291ebd62a377e8548c2277d5f5d"]];
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
