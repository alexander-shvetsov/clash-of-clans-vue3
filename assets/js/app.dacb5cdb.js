(function(t){function e(e){for(var r,i,l=e[0],s=e[1],o=e[2],b=0,d=[];b<l.length;b++)i=l[b],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],r=!0,l=1;l<a.length;l++){var s=a[l];0!==n[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},c=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=s;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"283a":function(t,e,a){},"31f2":function(t,e,a){},3769:function(t,e,a){"use strict";a("31f2")},"3ba7":function(t,e,a){"use strict";a("bd77")},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var r=a("7a23"),n=a("6c02"),c=Object(r["F"])("data-v-6f1604f7");Object(r["t"])("data-v-6f1604f7");var i={key:0,class:"card-stats"};Object(r["r"])();var l=c((function(t,e,a,n,l,s){var o=Object(r["y"])("CardStats"),u=Object(r["y"])("Card"),b=Object(r["y"])("slide"),d=Object(r["y"])("navigation"),O=Object(r["y"])("carousel");return Object(r["q"])(),Object(r["d"])(O,{settings:l.settings,breakpoints:l.breakpoints},{addons:c((function(){return[Object(r["g"])(d)]})),default:c((function(){return[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(l.items,(function(t){return Object(r["q"])(),Object(r["d"])(b,{class:"card-wrapper",key:t.id},{default:c((function(){return[Object(r["g"])(u,{name:"".concat(t.lvl," lvl"),title:t.title,imgUrl:t.img,link:"/".concat(t.alias)},{body:c((function(){return[Object(r["f"])(Object(r["A"])(t.descr),1)]})),footer:c((function(){return[t.info?(Object(r["q"])(),Object(r["d"])("div",i,[Object(r["g"])(o,{item:t.info},null,8,["item"])])):Object(r["e"])("",!0)]})),_:2},1032,["name","title","imgUrl","link"])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"])})),s=(a("b0c0"),a("9911"),Object(r["F"])("data-v-0e1e285e"));Object(r["t"])("data-v-0e1e285e");var o={class:"card"},u={key:0,class:"card-img__wrapper"},b={class:"card-name"},d={class:"card-title"},O={class:"card-body"},j={class:"card-body__text"},f=Object(r["f"])("See more");Object(r["r"])();var v=s((function(t,e,a,n,c,i){var l=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["d"])("div",o,[a.imgUrl?(Object(r["q"])(),Object(r["d"])("div",u,[Object(r["g"])("img",{src:a.imgUrl,alt:a.title,class:"card-img"},null,8,["src","alt"])])):Object(r["e"])("",!0),Object(r["g"])("span",b,Object(r["A"])(a.name),1),Object(r["g"])("span",d,Object(r["A"])(a.title),1),Object(r["g"])("div",O,[Object(r["g"])("div",j,[Object(r["x"])(t.$slots,"body"),a.link?(Object(r["q"])(),Object(r["d"])(l,{key:0,class:"link",to:a.link},{default:s((function(){return[f]})),_:1},8,["to"])):Object(r["e"])("",!0)]),Object(r["x"])(t.$slots,"footer")])])})),p={props:{name:{type:String,required:!0},title:{type:String,required:!0},imgUrl:{type:String},link:{type:String}}};a("fab5");p.render=v,p.__scopeId="data-v-0e1e285e";var g=p,h={class:"stat-value"},m={class:"stat"};function y(t,e,a,n,c,i){return Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.item,(function(t,e){return Object(r["q"])(),Object(r["d"])("div",{key:e,class:"one-third"},[Object(r["g"])("div",h,Object(r["A"])(t.value),1),Object(r["g"])("div",m,Object(r["A"])(t.title),1)])})),128)}var w={props:{item:{type:Array,required:!0}}};w.render=y;var k=w,_=[{id:1,alias:"barbarian",title:"The Barbarian",descr:"The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.",img:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/barbarian.png",lvl:4,info:[{title:"training",value:"20s"},{title:"speed",value:"16"},{title:"cost",value:"150"}]},{id:2,alias:"archer",title:"The Archer",descr:"The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.",img:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/archer.png",lvl:4,info:[{title:"training",value:"25s"},{title:"speed",value:"24"},{title:"cost",value:"300"}]},{id:3,alias:"giant",title:"The Giant",descr:"Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show them a turret or cannon and you will see their fury unleashed!",img:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/giant.png",lvl:4,info:[{title:"training",value:"2m"},{title:"speed",value:"12"},{title:"cost",value:"2250"}]},{id:4,alias:"goblin",title:"The Goblin",descr:"These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.",img:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/goblin.png",lvl:5,info:[{title:"training",value:"30s"},{title:"speed",value:"32"},{title:"cost",value:"100"}]},{id:5,alias:"wizard",title:"The Wizard",descr:"The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",img:"https://tocode.ru/static/uploads/courses/3/clash-of-clans-images/wizard.png",lvl:6,info:[{title:"training",value:"5m"},{title:"speed",value:"16"},{title:"cost",value:"3800"}]}],q=(a("4001"),a("0b81")),S={components:{Card:g,CardStats:k,Carousel:q["a"],Slide:q["c"],Navigation:q["b"]},data:function(){return{items:_,settings:{itemsToShow:2,wrapAround:!0,snapAlign:"center"},breakpoints:{300:{itemsToShow:1},700:{itemsToShow:2}}}}};a("3ba7");S.render=l,S.__scopeId="data-v-6f1604f7";var A=S,T=Object(r["F"])("data-v-dbeb0ee4");Object(r["t"])("data-v-dbeb0ee4");var C={class:"md-body"},x=Object(r["g"])("h1",null,"В этом приложении:",-1),P=Object(r["g"])("ul",null,[Object(r["g"])("li",null,"Полная настройка шаблона на Vue CLI"),Object(r["g"])("li",null,"Установка и настройка Vue-router для Vue.js 3"),Object(r["g"])("li",null,"Динамическая перерисовка без перезагрузки страницы"),Object(r["g"])("li",null,"Динамичный навбар и ссылки"),Object(r["g"])("li",null,"Обработка несуществующих роутов"),Object(r["g"])("li",null,"Хеши и моды для роутера"),Object(r["g"])("li",null,"Храниение и взаимодействие с данными из Seeders"),Object(r["g"])("li",null,"Слайдер с персонажами")],-1);Object(r["r"])();var F=T((function(t,e){return Object(r["q"])(),Object(r["d"])("div",C,[x,P])}));a("c1cd");const I={};I.render=F,I.__scopeId="data-v-dbeb0ee4";var U=I,z={class:"title"};function H(t,e){return Object(r["q"])(),Object(r["d"])("h1",z,"404 Not Found")}const M={};M.render=H;var E=M,G=Object(r["F"])("data-v-c148fbf6");Object(r["t"])("data-v-c148fbf6");var V={class:"wrapper view-sm"},$={key:0},B={class:"title"},J={key:0,class:"card-stats"},L=Object(r["f"])("back to home");Object(r["r"])();var N=G((function(t,e,a,n,c,i){var l=Object(r["y"])("CardStats"),s=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["d"])("div",V,[c.item?(Object(r["q"])(),Object(r["d"])("div",$,[Object(r["g"])("img",{src:c.item.img,alt:c.item.title,class:"item-item"},null,8,["src","alt"]),Object(r["g"])("h1",B,Object(r["A"])(c.item.title),1),Object(r["g"])("p",null,Object(r["A"])(c.item.descr),1),c.item.info?(Object(r["q"])(),Object(r["d"])("div",J,[Object(r["g"])(l,{item:c.item.info},null,8,["item"])])):Object(r["e"])("",!0),Object(r["g"])("div",null,[Object(r["g"])(s,{to:"/",class:"btn btnPrimary"},{default:G((function(){return[L]})),_:1})])])):Object(r["e"])("",!0)])})),W=(a("7db0"),{components:{CardStats:k},data:function(){return{item:null}},created:function(){var t=this.$route.params.itemAlias,e=_.find((function(e){return e.alias===t}));this.item=e}});a("3769");W.render=N,W.__scopeId="data-v-c148fbf6";var K=W,D=Object(n["b"])(),Q=Object(n["a"])({history:D,routes:[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:U},{path:"/:itemAlias",name:"itemAlias",component:K},{path:"/:CatchAll(.*)",name:"404",component:E}]}),R=Q,X={class:"wrapper"},Y={class:"wrapper-content"},Z={class:"container"};function tt(t,e,a,n,c,i){var l=Object(r["y"])("Header"),s=Object(r["y"])("router-view"),o=Object(r["y"])("Footer");return Object(r["q"])(),Object(r["d"])("div",X,[Object(r["g"])(l),Object(r["g"])("div",Y,[Object(r["g"])("div",Z,[Object(r["g"])(s)])]),Object(r["g"])(o)])}var et={class:"navbar"},at={class:"container"},rt={class:"navbar-content"},nt={class:"navbar-list"};function ct(t,e,a,n,c,i){var l=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["d"])("header",null,[Object(r["g"])("div",et,[Object(r["g"])("div",at,[Object(r["g"])("div",rt,[Object(r["g"])(l,{class:"navbar-logo",to:"/"},{default:Object(r["E"])((function(){return[Object(r["f"])(Object(r["A"])(c.title),1)]})),_:1}),Object(r["g"])("ul",nt,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(c.links,(function(t){return Object(r["q"])(),Object(r["d"])("li",{class:"navbar-item",key:t.alias},[Object(r["g"])(l,{class:"navbar-link",to:t.url},{default:Object(r["E"])((function(){return[Object(r["f"])(Object(r["A"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])])])])}var it={dev:!0},lt=(it.dev,{title:"Clash of Clans"}),st=[{title:"Home",alias:"home",url:"/"},{title:"About",alias:"about",url:"/about"}],ot={data:function(){return{title:lt.title,links:st}}};ot.render=ct;var ut=ot,bt={class:"footer"},dt={class:"container"},Ot={class:"navbar-list"};function jt(t,e,a,n,c,i){var l=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["d"])("footer",bt,[Object(r["g"])("div",dt,[Object(r["g"])("ul",Ot,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(c.links,(function(t){return Object(r["q"])(),Object(r["d"])("li",{class:"navbar-item",key:t.alias},[Object(r["g"])(l,{class:"navbar-link",to:t.url},{default:Object(r["E"])((function(){return[Object(r["f"])(Object(r["A"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])])}var ft={data:function(){return{links:st}}};ft.render=jt;var vt=ft,pt={components:{Header:ut,Footer:vt}};pt.render=tt;var gt=pt,ht=(a("c1c3"),Object(r["c"])(gt));ht.use(R),ht.mount("#app")},bd77:function(t,e,a){},c1c3:function(t,e,a){},c1cd:function(t,e,a){"use strict";a("da3c")},da3c:function(t,e,a){},fab5:function(t,e,a){"use strict";a("283a")}});