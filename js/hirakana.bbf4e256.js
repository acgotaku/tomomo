(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hirakana"],{"0cb2":function(t,e,n){var a=n("7b0b"),r=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,s,l,u){var f=n+t.length,d=s.length,v=c;return void 0!==l&&(l=a(l),v=o),i.call(u,v,(function(a,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":o=l[i.slice(1,-1)];break;default:var c=+i;if(0===c)return a;if(c>d){var u=r(c/10);return 0===u?a:u<=d?void 0===s[u-1]?i.charAt(1):s[u-1]+i.charAt(1):a}o=s[c-1]}return void 0===o?"":o}))}},"14c3":function(t,e,n){var a=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"25f0":function(t,e,n){"use strict";var a=n("6eeb"),r=n("825a"),i=n("d039"),o=n("ad6d"),c="toString",s=RegExp.prototype,l=s[c],u=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=c;(u||f)&&a(RegExp.prototype,c,(function(){var t=r(this),e=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+a}),{unsafe:!0})},3115:function(t,e,n){"use strict";var a=n("57e3"),r=n.n(a);n.d(e,"default",(function(){return r.a}))},"44e7":function(t,e,n){var a=n("861d"),r=n("c6b6"),i=n("b622"),o=i("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"4d63":function(t,e,n){var a=n("83ab"),r=n("da84"),i=n("94ca"),o=n("7156"),c=n("9bf2").f,s=n("241c").f,l=n("44e7"),u=n("ad6d"),f=n("9f7f"),d=n("6eeb"),v=n("d039"),h=n("69f3").enforce,p=n("2626"),g=n("b622"),y=g("match"),b=r.RegExp,x=b.prototype,m=/a/g,_=/a/g,k=new b(m)!==m,E=f.UNSUPPORTED_Y,$=a&&i("RegExp",!k||E||v((function(){return _[y]=!1,b(m)!=m||b(_)==_||"/a/i"!=b(m,"i")})));if($){var w=function(t,e){var n,a=this instanceof w,r=l(t),i=void 0===e;if(!a&&r&&t.constructor===w&&i)return t;k?r&&!i&&(t=t.source):t instanceof w&&(i&&(e=u.call(t)),t=t.source),E&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var c=o(k?new b(t,e):b(t,e),a?this:x,w);if(E&&n){var s=h(c);s.sticky=!0}return c},O=function(t){t in w||c(w,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},j=s(b),R=0;while(j.length>R)O(j[R++]);x.constructor=w,w.prototype=x,d(r,"RegExp",w)}p("RegExp")},"4e7b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.hirakana},[n("Header"),n("div",{class:t.$style.hirakanaInner},[n("h2",{class:t.$style.title},[t._v(t._s(t.$t("views.hirakana.title")))]),n("div",{class:t.$style.container},[n("div",{class:t.$style.origin},[n("Textarea",{class:t.$style.textarea,attrs:{rows:8},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),n("div",{class:t.$style.result},[n("div",{class:t.$style.option},[n("Select",{class:t.$style.select,model:{value:t.width,callback:function(e){t.width=e},expression:"width"}},t._l(t.widthOptions,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),0),n("Select",{class:t.$style.select,model:{value:t.style,callback:function(e){t.style=e},expression:"style"}},t._l(t.styleOptions,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),0),n("Button",{on:{click:t.copy}},[t._v(" "+t._s(t.$t("common.copy")))])],1),n("Textarea",{class:t.$style.textarea,attrs:{rows:8,readonly:!0},model:{value:t.convertedText,callback:function(e){t.convertedText=e},expression:"convertedText"}})],1)])])],1)},r=[],i=n("d4ec"),o=n("bee2"),c=n("262e"),s=n("2caf"),l=n("9ab4"),u=n("1b40"),f=(n("ac1f"),n("5319"),n("4d63"),n("25f0"),["。","「","」","、","・","ヲ","ァ","ィ","ゥ","ェ","ォ","ャ","ュ","ョ","ッ","ー","ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ン","゛","゜","ヺ","ヴ","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","パ","ビ","ピ","ブ","プ","ベ","ペ","ボ","ポ","ヷ"]),d=["｡","｢","｣","､","･","ｦ","ｧ","ｨ","ｩ","ｪ","ｫ","ｬ","ｭ","ｮ","ｯ","ｰ","ｱ","ｲ","ｳ","ｴ","ｵ","ｶ","ｷ","ｸ","ｹ","ｺ","ｻ","ｼ","ｽ","ｾ","ｿ","ﾀ","ﾁ","ﾂ","ﾃ","ﾄ","ﾅ","ﾆ","ﾇ","ﾈ","ﾉ","ﾊ","ﾋ","ﾌ","ﾍ","ﾎ","ﾏ","ﾐ","ﾑ","ﾒ","ﾓ","ﾔ","ﾕ","ﾖ","ﾗ","ﾘ","ﾙ","ﾚ","ﾛ","ﾜ","ﾝ","ﾞ","ﾟ","ｦﾞ","ｳﾞ","ｶﾞ","ｷﾞ","ｸﾞ","ｹﾞ","ｺﾞ","ｻﾞ","ｼﾞ","ｽﾞ","ｾﾞ","ｿﾞ","ﾀﾞ","ﾁﾞ","ﾂﾞ","ﾃﾞ","ﾄﾞ","ﾊﾞ","ﾊﾟ","ﾋﾞ","ﾋﾟ","ﾌﾞ","ﾌﾟ","ﾍﾞ","ﾍﾟ","ﾎﾞ","ﾎﾟ","ﾜﾞ"];function v(t){return t=p(t),t=y(t),t}function h(t){return t=g(t),t=b(t),t}function p(t){return t.replace(/[Ａ-Ｚａ-ｚ０-９！-～]/g,(function(t){return String.fromCharCode(t.charCodeAt(0)-65248)}))}function g(t){return t.replace(/[A-Za-z0-9!-~]/g,(function(t){return String.fromCharCode(t.charCodeAt(0)+65248)}))}function y(t){return f.forEach((function(e,n){t=t.replace(new RegExp(e,"g"),d[n])})),t}function b(t){return d.forEach((function(e,n){t=t.replace(new RegExp(e,"g"),f[n])})),t}function x(t){return t.replace(/[\u30a1-\u30f6]/g,(function(t){var e=t.charCodeAt(0)-96;return String.fromCharCode(e)}))}function m(t){return t.replace(/[\u3041-\u3096]/g,(function(t){var e=t.charCodeAt(0)+96;return String.fromCharCode(e)}))}var _={toHalfWidth:v,toFullWidth:h,kanaToHira:x,hiraToKana:m};function k(t){var e=document.createElement("textarea");document.body.appendChild(e),e.value=t,e.focus(),e.select();var n=document.execCommand("copy");return e.remove(),n}var E,$=n("bbc2"),w=n("8707"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{class:t.$style.message,attrs:{tag:"div",name:"message-fade"},on:{"after-leave":t.afterLeave}},t._l(t.notifs,(function(t){return n("MessageItem",{key:t.name,attrs:{icon:t.icon,name:t.name,content:t.content,duration:t.duration}})})),1)},j=[],R=(n("b0c0"),n("c740"),n("a434"),new Uint8Array(16));function I(){if(!E&&(E="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(R)}var L=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function S(t){return"string"===typeof t&&L.test(t)}for(var C=S,T=[],A=0;A<256;++A)T.push((A+256).toString(16).substr(1));function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(T[t[e+0]]+T[t[e+1]]+T[t[e+2]]+T[t[e+3]]+"-"+T[t[e+4]]+T[t[e+5]]+"-"+T[t[e+6]]+T[t[e+7]]+"-"+T[t[e+8]]+T[t[e+9]]+"-"+T[t[e+10]]+T[t[e+11]]+T[t[e+12]]+T[t[e+13]]+T[t[e+14]]+T[t[e+15]]).toLowerCase();if(!C(n))throw TypeError("Stringified UUID is invalid");return n}var P=H;function U(t,e,n){t=t||{};var a=t.random||(t.rng||I)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){n=n||0;for(var r=0;r<16;++r)e[n+r]=a[r];return e}return P(a)}var D=U,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.item},[n("Icon",{class:t.$style.icon,attrs:{name:t.icon}}),n("p",{class:t.$style.text},[t._v(" "+t._s(t.content)+" ")])],1)},N=[],F=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(o["a"])(n,[{key:"mounted",value:function(){var t=this;this.duration&&setTimeout((function(){t.destroy()}),1e3*this.duration)}},{key:"destroy",value:function(){this.message.close(this.name)}}]),n}(u["d"]);Object(l["a"])([Object(u["c"])()],F.prototype,"name",void 0),Object(l["a"])([Object(u["c"])()],F.prototype,"icon",void 0),Object(l["a"])([Object(u["c"])()],F.prototype,"content",void 0),Object(l["a"])([Object(u["c"])({default:3})],F.prototype,"duration",void 0),Object(l["a"])([Object(u["b"])()],F.prototype,"message",void 0),F=Object(l["a"])([u["a"]],F);var K=F,V=K,W=n("88a8"),z=n("2877");function B(t){this["$style"]=W["default"].locals||W["default"]}var X=Object(z["a"])(V,M,N,!1,B,null,null),Y=X.exports,G=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.notifs=[],t}return Object(o["a"])(n,[{key:"add",value:function(t){t.name=t.name||D(),this.notifs.push(t)}},{key:"close",value:function(t){var e=this.notifs.findIndex((function(e){return e.name===t}));e>-1&&this.notifs.splice(e,1)}},{key:"afterLeave",value:function(){this.notifs.length||this.onDestory()}}]),n}(u["d"]);Object(l["a"])([Object(u["c"])()],G.prototype,"onDestory",void 0),G=Object(l["a"])([Object(u["a"])({components:{MessageItem:Y},provide:function(){return{message:this}}})],G);var J=G,Z=J,q=n("599a");n("bce5");function Q(t){this["$style"]=q["default"].locals||q["default"]}var tt=Object(z["a"])(Z,O,j,!1,Q,null,null),et=tt.exports,nt=3,at=function(){function t(){Object(i["a"])(this,t),this.instance=null}return Object(o["a"])(t,[{key:"info",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nt;this.show("info",t,e)}},{key:"success",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nt;this.show("success",t,e)}},{key:"warning",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nt;this.show("warning",t,e)}},{key:"error",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nt;this.show("error",t,e)}},{key:"loading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:nt;this.show("loading",t,e)}},{key:"getMessageInstance",value:function(){return this.instance=this.instance||this.initMessageInstance(),this.instance}},{key:"initMessageInstance",value:function(){var t=this,e={onDestory:function(){t.destroy()}},n=new et({propsData:e}),a=n.$mount();return document.body.appendChild(a.$el),n}},{key:"show",value:function(t,e,n){var a=this.getMessageInstance();a.add({icon:t,content:e,duration:n})}},{key:"destroy",value:function(){var t,e;null===(t=this.instance)||void 0===t||t.$destroy(),null===(e=this.instance)||void 0===e||e.$el.remove(),this.instance=null}}]),t}(),rt=new at,it=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.text="",t.width="full",t.style="katakana",t}return Object(o["a"])(n,[{key:"convertedText",get:function(){var t=_.toFullWidth(this.text),e="katakana"===this.style?_.hiraToKana(t):_.kanaToHira(t),n="full"===this.width?_.toFullWidth(e):_.toHalfWidth(e);return n}},{key:"widthOptions",get:function(){return[{value:"full",label:this.$i18n.t("views.hirakana.width.full")},{value:"half",label:this.$i18n.t("views.hirakana.width.half")}]}},{key:"styleOptions",get:function(){return[{value:"hiragana",label:this.$i18n.t("views.hirakana.style.hiragana")},{value:"katakana",label:this.$i18n.t("views.hirakana.style.katakana")}]}},{key:"copy",value:function(){var t=k(this.convertedText);t?rt.success(this.$i18n.t("common.copySuccess")):rt.warning(this.$i18n.t("common.copyFailed"))}}]),n}(u["d"]);it=Object(l["a"])([Object(u["a"])({components:{Lang:$["a"],Header:w["a"]}})],it);var ot=it,ct=ot,st=n("b066");function lt(t){this["$style"]=st["default"].locals||st["default"]}var ut=Object(z["a"])(ct,a,r,!1,lt,null,null);e["default"]=ut.exports},5319:function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),i=n("50c4"),o=n("a691"),c=n("1d80"),s=n("8aa5"),l=n("0cb2"),u=n("14c3"),f=Math.max,d=Math.min,v=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var h=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=a.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(n,a){var r=c(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,a):e.call(String(r),n,a)},function(t,a){if(!h&&p||"string"===typeof a&&-1===a.indexOf(g)){var c=n(e,t,this,a);if(c.done)return c.value}var y=r(t),b=String(this),x="function"===typeof a;x||(a=String(a));var m=y.global;if(m){var _=y.unicode;y.lastIndex=0}var k=[];while(1){var E=u(y,b);if(null===E)break;if(k.push(E),!m)break;var $=String(E[0]);""===$&&(y.lastIndex=s(b,i(y.lastIndex),_))}for(var w="",O=0,j=0;j<k.length;j++){E=k[j];for(var R=String(E[0]),I=f(d(o(E.index),b.length),0),L=[],S=1;S<E.length;S++)L.push(v(E[S]));var C=E.groups;if(x){var T=[R].concat(L,I,b);void 0!==C&&T.push(C);var A=String(a.apply(void 0,T))}else A=l(R,b,I,L,C,a);I>=O&&(w+=b.slice(O,I)+A,O=I+R.length)}return w+b.slice(O)}]}))},"57e3":function(t,e,n){t.exports={lang:"Lang_lang_2-oDH",button:"Lang_button_1Zzoz",icon:"Lang_icon_2SIGR",list:"Lang_list_1SRAN",item:"Lang_item_1epa2",selectLang:"Lang_selectLang__oj_C"}},"599a":function(t,e,n){"use strict";var a=n("d3b4"),r=n.n(a);n.d(e,"default",(function(){return r.a}))},"703c":function(t,e,n){t.exports={hirakana:"Hirakana_hirakana_2V2SI",hirakanaInner:"Hirakana_hirakanaInner_2nuYp",title:"Hirakana_title_26Qfl",container:"Hirakana_container_LCirL",origin:"Hirakana_origin_1auef",result:"Hirakana_result_XeKt3",textarea:"Hirakana_textarea_qnDaC",option:"Hirakana_option_1L11L",select:"Hirakana_select_adOEF"}},7156:function(t,e,n){var a=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var i,o;return r&&"function"==typeof(i=e.constructor)&&i!==n&&a(o=i.prototype)&&o!==n.prototype&&r(t,o),t}},8707:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:t.$style.header},[n("h1",{class:t.$style.title},[n("router-link",{class:t.$style.link,attrs:{to:{name:"home"}}},[t._v(" "+t._s(t.$t("common.title"))+" ")])],1),n("Lang")],1)},r=[],i=n("d4ec"),o=n("262e"),c=n("2caf"),s=n("9ab4"),l=n("1b40"),u=n("bbc2"),f=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(l["d"]);f=Object(s["a"])([Object(l["a"])({components:{Lang:u["a"]}})],f);var d=f,v=d,h=n("e22f"),p=n("2877");function g(t){this["$style"]=h["default"].locals||h["default"]}var y=Object(p["a"])(v,a,r,!1,g,null,null);e["a"]=y.exports},"88a8":function(t,e,n){"use strict";var a=n("df42"),r=n.n(a);n.d(e,"default",(function(){return r.a}))},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=n("5692"),o=RegExp.prototype.exec,c=i("native-string-replace",String.prototype.replace),s=o,l=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=l||f||u;d&&(s=function(t){var e,n,r,i,s=this,d=u&&s.sticky,v=a.call(s),h=s.source,p=0,g=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,p++),n=new RegExp("^(?:"+h+")",v)),f&&(n=new RegExp("^"+h+"$(?!\\s)",v)),l&&(e=s.lastIndex),r=o.call(d?n:s,g),d?r?(r.input=r.input.slice(p),r[0]=r[0].slice(p),r.index=s.lastIndex,s.lastIndex+=r[0].length):s.lastIndex=0:l&&r&&(s.lastIndex=s.global?r.index+r[0].length:e),f&&r&&r.length>1&&c.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=s},"9f7f":function(t,e,n){"use strict";var a=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,n){"use strict";var a=n("23e7"),r=n("23cb"),i=n("a691"),o=n("50c4"),c=n("7b0b"),s=n("65f0"),l=n("8418"),u=n("1dde"),f=u("splice"),d=Math.max,v=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var n,a,u,f,g,y,b=c(this),x=o(b.length),m=r(t,x),_=arguments.length;if(0===_?n=a=0:1===_?(n=0,a=x-m):(n=_-2,a=v(d(i(e),0),x-m)),x+n-a>h)throw TypeError(p);for(u=s(b,a),f=0;f<a;f++)g=m+f,g in b&&l(u,f,b[g]);if(u.length=a,n<a){for(f=m;f<x-a;f++)g=f+a,y=f+n,g in b?b[y]=b[g]:delete b[y];for(f=x;f>x-a+n;f--)delete b[f-1]}else if(n>a)for(f=x-a;f>m;f--)g=f+a-1,y=f+n-1,g in b?b[y]=b[g]:delete b[y];for(f=0;f<n;f++)b[f+m]=arguments[f+2];return b.length=x-a+n,u}})},ac1f:function(t,e,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b066:function(t,e,n){"use strict";var a=n("703c"),r=n.n(a);n.d(e,"default",(function(){return r.a}))},bbc2:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.lang},[n("button",{class:t.$style.button,on:{click:function(e){return e.stopPropagation(),t.toggle(e)}}},[n("Icon",{class:t.$style.icon,attrs:{name:"language"}})],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.showLang,expression:"showLang"}],class:t.$style.list},[n("li",{class:t.$style.item},[n("button",{class:t.$style.selectLang,on:{click:function(e){return t.toLang("en")}}},[t._v(" English ")])]),n("li",{class:t.$style.item},[n("button",{class:t.$style.selectLang,on:{click:function(e){return t.toLang("ja")}}},[t._v("日本語")])]),n("li",{class:t.$style.item},[n("button",{class:t.$style.selectLang,on:{click:function(e){return t.toLang("zh-CN")}}},[t._v(" 简体中文 ")])])])])},r=[],i=n("d4ec"),o=n("bee2"),c=n("262e"),s=n("2caf"),l=n("9ab4"),u=n("1b40"),f=function(t){Object(c["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.showLang=!1,t}return Object(o["a"])(n,[{key:"mounted",value:function(){window.addEventListener("click",this.close)}},{key:"beforeDestroy",value:function(){window.removeEventListener("click",this.close)}},{key:"toggle",value:function(){this.showLang=!this.showLang}},{key:"close",value:function(){this.showLang=!1}},{key:"toLang",value:function(t){this.$i18n.locale=t,localStorage.setItem("language",t)}}]),n}(u["d"]);f=Object(l["a"])([u["a"]],f);var d=f,v=d,h=n("3115"),p=n("2877");function g(t){this["$style"]=h["default"].locals||h["default"]}var y=Object(p["a"])(v,a,r,!1,g,null,null);e["a"]=y.exports},bce5:function(t,e,n){"use strict";n("ca25")},c740:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").findIndex,i=n("44d2"),o="findIndex",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},ca25:function(t,e,n){},d3b4:function(t,e,n){t.exports={message:"Message_message_XnbOm"}},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),i=n("b622"),o=n("9112"),c=i("species"),s=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),u=i("replace"),f=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),d=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,u){var v=i(t),h=!r((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),p=h&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!p||"replace"===t&&(!s||!l||f)||"split"===t&&!d){var g=/./[v],y=n(v,""[t],(function(t,e,n,a,r){return e.exec===RegExp.prototype.exec?h&&!r?{done:!0,value:g.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),b=y[0],x=y[1];a(String.prototype,t,b),a(RegExp.prototype,v,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}u&&o(RegExp.prototype[v],"sham",!0)}},df42:function(t,e,n){t.exports={item:"MessageItem_item_36Fo7",icon:"MessageItem_icon_3OTUs",text:"MessageItem_text_15bLK"}},e22f:function(t,e,n){"use strict";var a=n("ed0b"),r=n.n(a);n.d(e,"default",(function(){return r.a}))},ed0b:function(t,e,n){t.exports={header:"Header_header_jztFD",title:"Header_title_3KdW4",link:"Header_link_3NAaO"}}}]);