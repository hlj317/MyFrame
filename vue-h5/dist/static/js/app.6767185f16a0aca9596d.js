webpackJsonp([1],{"0Iv2":function(t,e){},"1uuo":function(t,e){},K35F:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App"},s,!1,function(t){i("rkxn")},"data-v-59db77e0",null).exports,c=i("/ocq"),r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var o=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},r,!1,function(t){i("1uuo")},"data-v-d8ec41bc",null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"banner"},[e("div",{staticClass:"btn-rule",on:{click:this.showrule}})])},staticRenderFns:[]};var d=i("VU/8")({props:["showrule"]},l,!1,function(t){i("hk+1")},null,null).exports,u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"r-dialog"},[i("div",{staticClass:"r-model"},[i("div",{staticClass:"close-btn",on:{click:t.onclose}}),t._v(" "),i("div",{staticClass:"rule-title"},[t._v("\n            活动规则\n        ")]),t._v(" "),i("div",{staticClass:"rule-list"},t._l(t.rules,function(e,a){return i("div",{key:a,staticClass:"rule-item"},[t._v("\n                "+t._s(e)+"\n            ")])}))])])},staticRenderFns:[]};var p=i("VU/8")({data:function(){return{rules:["1、每人初始五次猜价机会，分享好友助力后，可增加猜价机会；","2、猜中价格的用户，有机会获得力士沐浴乳或红包，奖品随机赠送，先到先得；","3、为防止作弊，每个用户竞猜的商品价格在一定区间范围之内随机生成；","4、中奖用户，根据提示填写收货地址，活动结束后7个工作日会安排发货；","5、最后告诉大家的一个秘诀是，多分享给朋友助力，然后靠运气和头脑竞猜价格成功，免费领取商品。祝大家玩得愉快！"]}},methods:{},mounted:function(){},props:["tips","onsubmit","onclose"]},u,!1,function(t){i("qaB6")},null,null).exports,m=i("pFYg"),_=i.n(m),h=(i("fZjL"),function(t){if(!t){if(!("undefined"!=typeof window))return console.error("Param of url is need."),null;t=window.location.href}return function(t){var e=document.createElement("a");e.href=t;var i={params:{}};["protocol","host","hostname","origin","username","password","pathname","port","search","hash"].forEach(function(t){i[t]=e[t]});var a=i.search;if(a){var s={};a.substring(1).split("&").forEach(function(t){var e=t.split("=");if(e[0]){var i=e.shift(),a=e.join("=")||"";try{s[decodeURIComponent(i)]=decodeURIComponent(a)}catch(t){s[i]=a}}}),i.params=s}return i}(t)}),g=function(t,e){var i={},a=(new Date).getTime(),s=function(t){return t<10?"0"+t:t};return function(t){if(t<=0)return e&&e(),void(i={});var a=Math.floor(t/864e5),n=t%864e5,c=n%36e5,r=c%6e4;i={days:s(a),hours:s(Math.floor(n/36e5)),minutes:s(Math.floor(c/6e4)),seconds:s(Math.floor(r/1e3))}}(1e3*t-a),{days:i.days,hours:i.hours,minutes:i.minutes,seconds:i.seconds}},f=h().params,v=void 0,b={data:function(){return{inviteCode:f.invite_code,leftTime:"",btns:{NO_LOGIN:4,ACTIVE_END:3,IS_AWARD:2,AWARD:1,CONTUINE:0},btnsText:["我要猜价格","立即领取","我已领过奖","活动已结束","我要帮忙助力"]}},props:["guessNow","count","end","minPrice","maxPrice","isaward","award","isLogin"],created:function(){},computed:{btnType:function(){return 1e3*+this.end<Date.now()?this.btns.ACTIVE_END:this.isaward?this.btns.IS_AWARD:this.award?this.btns.AWARD:!this.isLogin&&this.inviteCode?this.btns.NO_LOGIN:this.btns.CONTUINE}},mounted:function(){var t=this;t.countDown(),v=setInterval(function(){t.countDown(function(){clearInterval(v)})},1e3)},methods:{countDown:function(t){var e=g(this.end,t),i=e.days,a=e.hours,s=e.minutes,n=e.seconds;"object"!==(void 0===e?"undefined":_()(e))||i||a||s||n?"00"==i?this.leftTime="00"==a?"00"==s?""+n:s+":"+n:a+":"+s+":"+n:(a=+a+24*i,this.leftTime=a+":"+s+":"+n):this.leftTime=""}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"main"},[t._m(0),t._v(" "),i("img",{staticClass:"item-img",attrs:{src:"//h0.hucdn.com/open/201825/f387cc70724ed773_405x416.png"}}),t._v(" "),i("p",{staticClass:"price-range"},[t._v("预期价格区间："),i("span",{staticClass:"strong"},[t._v(t._s(t.minPrice||"36.99"))]),t._v("元 至 "),i("span",{staticClass:"strong"},[t._v(t._s(t.maxPrice||"38.99"))]),t._v("元之间")]),t._v(" "),i("div",{staticClass:"btn-guess",on:{click:function(e){t.guessNow(t.btnType)}}},[i("p",{staticClass:"i-guess"},[t._v(t._s(t.btnsText[t.btnType]))])]),t._v(" "),i("div",{staticClass:"left-chances"},[t._v("您当前有"),i("span",{staticClass:"strong"},[t._v(t._s(void 0===t.count?"5":t.count))]),t._v("次机会")]),t._v(" "),t.leftTime?i("div",{staticClass:"left-time"},[t._v("还剩"),i("span",{staticClass:"strong"},[t._v(t._s(t.leftTime))]),t._v("结束，快来猜价格吧~")]):i("div",{staticClass:"left-time"},[t.isLogin?i("span",[t._v("活动已结束，请下次再来吧~")]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-wrapper"},[e("p",{staticClass:"pro-title"},[this._v("【猜价有礼】力士沐浴乳1350mL，624活动价格？")])])}]};var x=i("VU/8")(b,w,!1,function(t){i("mpYP")},null,null).exports,C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.history&&t.history.length?i("div",{staticClass:"history"},[i("p",{staticClass:"title"},[t._v("我的猜价历史")]),t._v(" "),t._l(t.history,function(e,a){return i("div",{key:a,staticClass:"list"},[i("div",{staticClass:"item-img"},[i("img",{attrs:{src:e.img}})]),t._v(" "),i("div",{staticClass:"item-detail"},[i("p",{staticClass:"title"},[t._v("力士薰衣草沐浴乳1350mL，超大组合装")]),t._v(" "),i("p",{staticClass:"guess-result"},[t._v("猜 "),i("span",{staticClass:"strong"},[t._v(t._s(e.price))]),t._v(" 元"),i("span",{staticClass:"result"},[t._v(t._s(e.status))])]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(e.time))])])])})],2):t._e()},staticRenderFns:[]};var k=i("VU/8")({props:["history","minPrice","maxPrice"]},C,!1,function(t){i("aFXu")},null,null).exports,j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items&&t.items.length?i("section",{},[i("div",{staticClass:"award-list-title"},[t._v("实物中奖名单")]),t._v(" "),i("div",{staticClass:"award-list-container"},[i("div",{staticClass:"award-list J_award-list slide-up"},t._l(t.items,function(e,a){return i("div",{key:a,staticClass:"award-item"},[i("img",{attrs:{src:e.avatar,alt:""}}),t._v(" "),i("p",{staticClass:"name"},[t._v(t._s(e.nick_name))]),t._v(" "),i("p",{staticClass:"desc"},[i("em",[t._v("免费领取")]),t._v(" "+t._s(e.desc))])])}))])]):t._e()},staticRenderFns:[]};var L=i("VU/8")({data:function(){return{price:"",isani:!1,aitems:[]}},props:["items"]},j,!1,function(t){i("K35F")},null,null).exports,D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"dialog"},[i("div",{staticClass:"model"},[i("div",{staticClass:"model-inner"},[i("div",{staticClass:"model-tips"},[i("span",{domProps:{innerHTML:t._s(t.tips)}})]),t._v(" "),i("div",{staticClass:"model-input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"model-input",attrs:{placeholder:"请填写你要猜的价格，最小单位分",type:"text"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"btn",on:{click:function(e){t.onsubmit(t.price)}}},[t._v(t._s(t.inputing?"正在提交...":"确定"))])]),t._v(" "),i("div",{staticClass:"model-close",on:{click:t.onclose}})])])},staticRenderFns:[]};var y=i("VU/8")({data:function(){return{price:""}},methods:{},mounted:function(){},props:["tips","onsubmit","onclose","inputing"]},D,!1,function(t){i("w2Rp")},null,null).exports,M=i("TQvf"),A=i.n(M),P={data:function(){return{price:""}},methods:{},mounted:function(){if("我要打开APP"===this.btntext||"下载APP"===this.btntext){var t=new A.a(".J_copy-btn");console.log("监听"),t.on("success",function(t){console.log("复制成功")}),t.on("error",function(){console.log("复制失败")})}},props:["tips","onsubmit","onclose","btntext"]},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"a-dialog"},[i("div",{staticClass:"a-model"},[i("div",{staticClass:"a-model-inner"},[i("div",{staticClass:"a-model-tips"},t._l(t.tips,function(e,a){return i("div",{key:a,staticClass:"a-model-tip-item"},[i("span",{domProps:{innerHTML:t._s(e)}})])})),t._v(" "),i("div",{staticClass:"a-btn J_copy-btn",attrs:{"data-clipboard-target":"#clipboard-command"},on:{click:function(e){t.onsubmit(t.price)}}},[t._v(t._s(t.btntext))])]),t._v(" "),i("div",{staticClass:"a-model-close",on:{click:t.onclose}})])])},staticRenderFns:[]};var R=i("VU/8")(P,T,!1,function(t){i("VBEt")},null,null).exports,E=i("mtWM"),I=i.n(E),O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"ad"},this._l(this.items,function(t,i){return e("div",{key:i},[e("a",{class:t.class,attrs:{href:t.target,title:t.title}},[e("img",{attrs:{src:t.img}})])])}))},staticRenderFns:[]};var N=i("VU/8")({data:function(){return{}},props:["items"]},O,!1,function(t){i("0Iv2")},null,null).exports,F={invite_code:"89P85H",bcode:"bb_Z1hgNlZ_bb",main_img:"http://b1.hucdn.com/upload/item/1712/21/33827995737362_800x800.jpg",title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",gmt_begin:"1529632800",gmt_end:"1529769600",tmall_price:"3829",bingo_num:102,left_chance:1,guess_history:[{iid:28222959,title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",guess_price:3702,guess_result:100,gmt_create:"2018-06-22 11:53:27"},{iid:28222959,title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",guess_price:3701,guess_result:99,gmt_create:"2018-06-22 11:38:22"},{iid:28222959,title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",guess_price:3702,guess_result:101,gmt_create:"2018-06-22 11:16:34"},{iid:28222959,title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",guess_price:3704,guess_result:101,gmt_create:"2018-06-22 11:09:26"},{iid:28222959,title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",guess_price:3708,guess_result:101,gmt_create:"2018-06-22 11:07:54"},{iid:28222959,title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",guess_price:3715,guess_result:101,gmt_create:"2018-06-22 11:07:42"},{iid:28222959,title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",guess_price:3725,guess_result:101,gmt_create:"2018-06-22 11:07:31"},{iid:28222959,title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",guess_price:3750,guess_result:101,gmt_create:"2018-06-22 11:07:17"},{iid:28222959,title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",guess_price:3800,guess_result:101,gmt_create:"2018-06-22 11:06:42"}],price_section:{min:3702,max:3702},is_bingo:!0,is_award:!0,award:!0,item_list:[{iid:28222959,img:"http://b1.hucdn.com/upload/item/1712/21/33827995737362_800x800.jpg",title:"力士沐浴露薰衣草精油香氛幽莲魅肤男女士沐浴乳1000ml+350ml 持久留香",desc:"【买即赠力士沐浴露350ml+浴球】【1350ml超大容量】花香凝萃精油，层层绽放，丰盈泡沫，绵密奢宠，香氛泡沫萦绕全身，细腻绵滑感为肌肤带来呵护，时刻享受沐浴带来的愉悦宠爱。持久留香，深层清洁易清洗，让肌肤散发迷人芳香。大容量家庭装，经济实惠！",price:3690,origin_price:6480},{iid:28268327,img:"http://b1.hucdn.com/upload/item/1709/29/80010430848945_800x800.jpg",title:"【洗发新科技 枯发救星】潘婷丝质顺滑洗发露750ML男女士通用家庭装洗发露",desc:"潘婷洗发水，一款营养越洗越多的秀发能量水，营养深入渗透，氨基酸成分抵抗氧化，头发拉扯15000，依然强韧，泡沫绵密，能量易吸收，湿发不打结，抚顺发丝，每洗一次，头发强韧一次。",price:3970,origin_price:8e3},{iid:28299051,img:"http://b1.hucdn.com/upload/item/1806/21/72882737914732_800x800.jpg",title:"20支炫彩成人软毛牙刷 待客旅行牙刷成人家庭装",desc:"产品包含：总共20支炫彩成人软毛牙刷用的时候抽取一只即可，其他的可以整版储存！方便待客以及家庭成员使用，每个人一支颜色，不易拿错！",price:1990,origin_price:3900},{iid:28302426,img:"http://b1.hucdn.com/upload/item/1806/20/92805345265966_800x800.jpg",title:"苏菲卫生巾弹力贴身日用+超熟睡290夜用棉柔组合共74片",desc:"【日x44片 夜*10片 护垫*20片】超熟睡超长巾身设计，从前至后整片贴合，一片熟睡到天亮；另肌肤干净如初、亲体设计 紧贴生理曲线",price:4990,origin_price:12900},{iid:28300072,img:"http://b1.hucdn.com/upload/item/1801/02/75153089308930_800x800.jpg",title:"清扬去屑洗发水樱花沁爽洗发乳500ml控油清爽去屑止痒送100ml旅行装",desc:"【品牌授权 正品保证】清扬樱花香型洗发水 清新舒爽 控油去屑 保湿滋润",price:6990,origin_price:9900},{iid:28267965,img:"http://b1.hucdn.com/upload/item/1710/13/64415901498945_800x800.jpg",title:"【有效去屑 深层控油】海飞丝去屑洗发露丝质柔滑型/清爽去油型 750ml",desc:"1，长效去屑双重去屑因子，深入毛孔去屑，深层去油纳米级吸油微利，快速吸走头油。舒缓止痒护肤品般棉细泡沫，轻松舒缓头痒。海飞丝去屑洗发露丝质柔滑型/清爽去油型 750ml",price:5400,origin_price:1e4},{iid:28283648,img:"http://b1.hucdn.com/upload/item/1806/27/83809409808466_800x800.jpg",title:"舒肤佳沐浴露 家庭装700ml2瓶 送海飞丝旅行装2瓶",desc:"12小时长效抑*菌，呵护全家。温和，亲肤，低刺激。丰盈泡沫，易冲洗干净，滋润补水，长效保护肌肤屏障。（明细：舒肤佳薰衣草沐浴露700ml 2瓶 +海飞丝旅行装 2瓶）",price:4790,origin_price:6500},{iid:28299792,img:"http://b1.hucdn.com/upload/item/1801/08/91808273878930_800x800.jpg",title:"多芬沐浴露套装深层莹润沐浴乳持久留香补水保湿美肌护肤",desc:"【品牌授权 正品保证】买就送2瓶180ml力士旅行装 深层清洁 补水保湿",price:4990,origin_price:5900},{iid:28299039,img:"http://b1.hucdn.com/upload/item/1806/20/63632266938466_800x800.jpg",title:"潘婷 排浊赋能头皮洗发水/护发素300mlx2瓶",desc:"无硅油排浊能量水洗发水，去油洗头膏男女士正品，排浊赋能黄金搭档，毛孔级洁净，营养秒吸收。",price:10900,origin_price:12900},{iid:28300115,img:"http://b1.hucdn.com/upload/item/1801/02/80783361078930_800x800.jpg",title:"清扬男士去屑洗发水活力薄荷清爽控油止痒洗发露500ml送100ml旅行装",desc:"男士活力运动薄荷洗发水 含茶叶提取物和薄荷醇成分 抑制头屑和油腻 层层渗透 滋润养护头皮",price:7480,origin_price:9900},{iid:28300180,img:"http://b1.hucdn.com/upload/item/1801/08/76198051088930_800x800.jpg",title:"力士沐浴露精油香氛闪亮冰爽沐浴乳补水保湿清爽美肌持久留香",desc:"力士闪亮冰爽沐浴露 水漾沁透 炫出冰爽美肌",price:4990,origin_price:5900},{iid:28299638,img:"http://b1.hucdn.com/upload/item/1806/20/77151439078466_800x800.jpg",title:"沙宣修护水养500ML润发乳+修护水养洗发露50ml",desc:"沙宣修护水养500ML润发乳+沙宣修护水养洗发露50ml",price:6990,origin_price:6990},{iid:28299977,img:"http://b1.hucdn.com/upload/item/1802/09/44418721648930_800x800.jpg",title:"凌仕男士保湿沐浴露清新留香醒体沐浴乳身体洗护沐浴液400ml多款可选",desc:"滋润保湿 清爽控油 淡雅清香 持久留香 欧美潮流香氛 多款可选",price:2990,origin_price:4900},{iid:28299298,img:"http://b1.hucdn.com/upload/item/1806/20/81565363328466_800x800.jpg",title:"当妮 护衣留香珠莓果花香150g 送草木100g（限前100名送）",desc:"当妮Downy柔顺剂护衣留香珠，搭配使用碧浪、汰渍洗衣液。不管是运动还是吃火锅，衣服持久留香。（限前100名送）",price:5990,origin_price:6900},{iid:28299444,img:"http://b1.hucdn.com/upload/item/1806/20/76399768398466_800x800.jpg",title:"佳洁士3D炫白双效牙膏180g+全优七效(祛牙渍健白+强健牙釉质)120gx2",desc:"佳洁士3D炫白双效牙膏180克+佳洁士全优7效祛牙渍健白牙膏120克+佳洁士全优7效强健牙釉质牙膏120克",price:6500,origin_price:6900},{iid:28299515,img:"http://b1.hucdn.com/upload/item/1806/28/67953186308466_800x800.jpg",title:"佳洁士 草本水晶牙膏 90g 3支+盐白牙膏 90g 3支",desc:"佳洁士草本水晶牙膏 （清爽薄荷香型）90克 3支+佳洁士盐白牙膏（清凉薄荷香型）90克 3支",price:4200,origin_price:4900},{iid:28299884,img:"http://b1.hucdn.com/upload/item/1801/08/93574183298930_800x800.jpg",title:"多芬深层营润滋养美肤沐浴乳720毫升*2件保湿滋养牛奶净润沐浴露",desc:"两瓶装大容量  居家囤货必备",price:9880,origin_price:9900},{iid:28298895,img:"http://b1.hucdn.com/upload/item/1806/20/63377106258466_800x800.jpg",title:"飘柔 甜美花漾香氛·滋养柔滑 洗护组合300ML",desc:"飘柔甜美花漾香氛洗发露300ML·滋养柔滑+飘柔甜美花漾香氛润发乳300ML·滋养柔滑",price:9900,origin_price:10900},{iid:28298776,img:"http://b1.hucdn.com/upload/item/1806/20/60861639958466_800x800.jpg",title:"飘柔 海滩曼舞香氛·滋润去屑 洗护组合300ML",desc:"飘柔海滩曼舞香氛洗发水300ML·滋润去屑+飘柔海滩曼舞香氛润发乳300ML·滋润去屑",price:9900,origin_price:10900},{iid:28282494,img:"http://b1.hucdn.com/upload/item/1806/19/02176811677362_800x800.jpg",title:"LUX/力士水润丝滑洗发乳500ml+护发素50ml",desc:"精油香氛，持久留香，拥有力士，让您持久芳香萦绕，特别添加ZPT去屑成分，对抗油腻及头屑，秀发清爽舒爽，水润丝滑：针对干枯毛糙发质",price:6490,origin_price:8690},{iid:28299150,img:"http://b1.hucdn.com/upload/item/1806/20/74626727208466_800x800.jpg",title:"护舒宝 未来感·极护卫生巾日用10片 3包",desc:"送云感棉赠品3包。欧美进口，无感保护，一试再也回不去。",price:9900,origin_price:10390},{iid:28298616,img:"http://b1.hucdn.com/upload/item/1806/20/60089709228466_800x800.jpg",title:"Olay美肌滋润沐浴乳-深润滋养 650ml+香皂100g 2块",desc:"玉兰油深度滋润香皂（普通型）100g+深度滋润香皂（无香温和型）100g+Olay美肌滋润沐浴乳-深润滋养 650ml",price:7600,origin_price:8900},{iid:28299745,img:"http://b1.hucdn.com/upload/item/1806/20/79329995668466_800x800.jpg",title:"佳洁士3D炫白双效牙膏180gx2+佳洁士天鹅绒护龈牙刷（抹茶绿+静谧蓝)x2",desc:"佳洁士天鹅绒护龈牙刷（抹茶绿）+佳洁士天鹅绒护龈牙刷（静谧蓝）+佳洁士3D炫白双效牙膏180克 2支",price:8400,origin_price:8900},{iid:28298401,img:"http://b1.hucdn.com/upload/item/1806/19/01643639418466_800x800.jpg",title:"博朗 DB4510K阶段型儿童电动牙刷 1支+佳洁士儿童牙膏90g 2支",desc:"DB4510K阶段型儿童电动牙刷+佳洁士阶段型儿童牙膏浆果味+佳洁士儿童牙膏 超人总动员款(水果味)90克",price:23900,origin_price:25900},{iid:28298484,img:"http://b1.hucdn.com/upload/item/1806/20/59554526728466_800x800.jpg",title:"博朗 DB4510K阶段型儿童电动牙刷+刷头替换装3支",desc:"博朗DB4510K阶段型儿童电动牙刷+EB10-3K儿童电动牙刷头三支装（注：颜色随机发货）",price:29900,origin_price:31900}],award_list:[{nick_name:"黄力钧",avatar:"http://b3.hucdn.com/upload/face/1806/28/8b3c1df80bc6d41e307a6f7f23cd584b.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"花花花花花",avatar:"http://b3.hucdn.com/upload/face/1806/27/55b85237a4eb63cbccef2e2752500cd2.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"小木头#.#",avatar:"http://b3.hucdn.com/upload/face/1806/27/b5838c007b773b208582031a031cb7f6.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"若蓝",avatar:"http://b3.hucdn.com/upload/face/1806/27/b15eed674652aeaaf8941cf102c0e7ef.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"不言而喻。",avatar:"http://b3.hucdn.com/upload/face/1806/28/26b86b8ffedd2aa5f7adec0132ef54f4.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"XM。",avatar:"http://b3.hucdn.com/upload/face/1806/27/831e8fe4675c2afbd7512c5bccaf22a8.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"JOJO🍎BB",avatar:"http://b3.hucdn.com/upload/face/1806/22/25518ee17eb30040b56534f2c9a1cb9b.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"Ning",avatar:"http://b3.hucdn.com/upload/face/1806/27/3dd589a82a286e7c239580a3c370c110.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"爱新觉罗萍",avatar:"http://b3.hucdn.com/upload/face/1806/27/102850cad6a03eb9fd72d0b1a2d63f3a.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"伟崽妈",avatar:"http://b3.hucdn.com/upload/face/1806/28/5f1b9e66f34674f46cfb636a3e63ff82.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"香蕉超人",avatar:"http://b3.hucdn.com/upload/face/1804/11/f282c416ad8fd589440db5b562bc6b44.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"嘘嘘",avatar:"http://b3.hucdn.com/upload/face/1806/27/ef9ce38fa5d57cf114307d8fa909cda5.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"nico🌸",avatar:"http://b3.hucdn.com/upload/face/1806/27/1af9a63bb9bc1a3f7a68fab74f4bb89e.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"188****5130",avatar:"http://h0.hucdn.com/open/201824/a06ebf06867afc17_225x225.png",award_desc:"力士沐浴乳1350mL"},{nick_name:"186****0868",avatar:"http://h0.hucdn.com/open/201824/a06ebf06867afc17_225x225.png",award_desc:"力士沐浴乳1350mL"},{nick_name:"🎵木木🏸",avatar:"http://b3.hucdn.com/upload/face/1806/27/a154c45871b521d2ad5ebdaea55691f4.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"王世林",avatar:"http://b3.hucdn.com/upload/face/1806/22/4d827ac3a38c8855e1fdc7bcfdcbba24.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"一丢丢～",avatar:"http://b3.hucdn.com/upload/face/1806/22/b2d516f37d1eb5ee6bc070b21017d99f.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"瓶子",avatar:"http://b3.hucdn.com/upload/face/1806/27/cce5114b4999c59e43b164cf2d4cfa4d.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"wendy",avatar:"http://b3.hucdn.com/upload/face/1806/22/1809e2cad5e93ffa69786fe757b4dfa1.jpg",award_desc:"力士沐浴乳1350mL"},{nick_name:"💦Little chord🍋",avatar:"http://b3.hucdn.com/upload/face/1806/26/6d031f05f1e337ba6d34cfb075a7431a.jpg",award_desc:"力士沐浴乳1350mL"}]},V=(h().params,document.queryCommandSupported&&document.queryCommandSupported("copy"),function(t){return(t=String(t)).replace(/\d\d$/,function(t){return"."+t})}),H="http://h0.hucdn.com/open/201825/d408f7cdf30594ed_405x416.png",U={data:function(){return{showRule:!1,showAlert:!1,showInput:!1,rspData:{},adData:[]}},components:{Banner:d,RuleModel:p,Main:x,History:k,awardList:L,InputModel:y,AlertModel:R,Ad:N},computed:{inputModelTip:function(){return"预期价格区间：<em>"+this.rspData.minPrice+"</em>元 至 <em>"+this.rspData.maxPrice+"</em>元之间"}},created:function(){this.init(F)},methods:{init:function(t){var e=this.formatData(t);this.rspData=e,this.adData=this.getAdData(function(t){return t})},showRuleModel:function(){this.showRule=!0},closeRuleModel:function(){this.showRule=!1},guessNow:function(t){if(3===t)return note("活动已结束",closeTime);if(2===t)return note("已经领取过了",closeTime);if(1!==t){var e=this.rspData,i=e.minPrice,a=e.maxPrice;e.award;if(this.rspData.count)this.showInput=!0;else{var s="app"===platform?"noCountInApp":"noCountInH5";this.updateAlertStatus({type:s,data:{min:i,max:a}})}}else this.btnHandlers("createOrder")()},getAdData:function(t){var e=this;I.a.get("https://dsapi.beibei.com/ads/h5.html",{params:{ad_id:"7_28_246_9_236",app:"sbeibei",user_tag:"2147483646"},responseType:"json"}).then(function(i){for(var a=e.adData=i.request.response.promotion_pro_shortcuts,s=["second-kill","nine-mail","hot-list","new-pro","brand-clean"],n=0;n<a.length;n++)a[n].class=s[n];t(a)}).catch(function(t){console.log(t)})},formatData:function(t){var e={99:"低了",100:"猜中了",101:"高了"},i=t.price_section,a=i.min,s=i.max,n=t.award_list.map(function(t){return{nick_name:t.nick_name,avatar:t.avatar+"!60x60.jpg",desc:t.award_desc}});return{minPrice:V(a),maxPrice:V(s),guessHistory:t.guess_history.map(function(t){return{img:H,title:t.title,price:V(t.guess_price),status:e[t.guess_result]||"低了",time:t.gmt_create}}),begin:t.gmt_begin,end:t.gmt_end,isValid:1e3*t.gmt_end-Date.now()>1e3,count:t.left_chance,product:{img:H,title:t.title},inviteCode:t.invite_code,inviter_nick:t.inviter_nick,award:t.award,isAward:t.is_award,isGuessOk:t.is_bingo,bcode:t.bcode,products:t.item_list.map(function(t){return{title:t.title,desc:t.desc,iid:t.iid,img:t.img+"!320x320.jpg",price:V(t.price)}}),toastList:n.concat(n)}},goOutLink:function(){this.btnHandlers("goOutLink").call(this)},btnHandlers:function(t){return{share:function(){this.shareConfig.template_prepare=!1,hybrid("share").share(this.shareConfig,function(){statistics.sendLog({et:"click",json:{block_name:"分享成功"}})})},createOrder:function(){},helpThis:function(){var t=this;!isWeixin()||this.isWxLogin?handleHelp({iid:iid,invite_code:inviteCode}).then(function(e){if(e.success){var i=e.data&&e.data.left_num;5==+i?t.updateAlertStatus({type:"helpOk",data:{}}):0==+i?t.updateAlertStatus({type:"helpOkAndShare",data:{min:t.rspData.minPrice,max:t.rspData.maxPrice}}):t.updateAlertStatus({type:"helpOkAndPlay",data:{count:i,min:t.rspData.minPrice,max:t.rspData.maxPrice}})}else note(e.message,closeTime)}):this.beforeInit()},playGuess:function(){},goOutLink:function(){}}[t]}}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"guess-page",attrs:{id:"guess"}},[i("Banner",{attrs:{showrule:t.showRuleModel}}),t._v(" "),i("Main",{attrs:{count:t.rspData.count,end:t.rspData.end,guessNow:t.guessNow,award:t.rspData.award,isaward:t.rspData.isAward,minPrice:t.rspData.minPrice,maxPrice:t.rspData.maxPrice}}),t._v(" "),i("History",{attrs:{history:t.rspData.guessHistory}}),t._v(" "),i("award-list",{attrs:{items:t.rspData.toastList}}),t._v(" "),t.showInput?i("InputModel",{attrs:{tips:t.inputModelTip,inputing:t.inputing,onsubmit:t.submitPrice,onclose:t.closeInputModel}}):t._e(),t._v(" "),t.showAlert?i("AlertModel",{attrs:{tips:t.alertTips,btntext:t.alertModelBtnText,onsubmit:t.handleAlertBtn,onclose:t.closeAlertModel}}):t._e(),t._v(" "),t.showRule?i("RuleModel",{attrs:{onclose:t.closeRuleModel}}):t._e(),t._v(" "),t.showRule?i("RuleModel",{attrs:{onclose:t.closeRuleModel}}):t._e(),t._v(" "),i("div",{staticClass:"to-link-img",on:{click:t.goOutLink}},[i("img",{attrs:{src:"//h0.hucdn.com/open/201825/a62b3cf61dc10af2_750x200.png",alt:""}})]),t._v(" "),i("Ad",{attrs:{items:t.adData}})],1)},staticRenderFns:[]};var $=i("VU/8")(U,B,!1,function(t){i("ToDX")},"data-v-8c054b80",null).exports;a.a.use(c.a);var W=new c.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:o},{path:"/guess",name:"guess",component:$}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:W,components:{App:n},template:"<App/>"})},ToDX:function(t,e){},VBEt:function(t,e){},aFXu:function(t,e){},"hk+1":function(t,e){},mpYP:function(t,e){},qaB6:function(t,e){},rkxn:function(t,e){},w2Rp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6767185f16a0aca9596d.js.map