(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hirakana"],{"4e7b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.hirakana},[n("Header"),n("div",{class:t.$style.hirakanaInner},[n("h2",{class:t.$style.title},[t._v(t._s(t.$t("views.hirakana.title")))]),n("div",{class:t.$style.container},[n("div",{class:t.$style.origin},[n("Textarea",{class:t.$style.textarea,attrs:{rows:8},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),n("div",{class:t.$style.result},[n("div",{class:t.$style.option},[n("Select",{class:t.$style.select,model:{value:t.width,callback:function(e){t.width=e},expression:"width"}},t._l(t.widthOptions,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),0),n("Select",{class:t.$style.select,model:{value:t.style,callback:function(e){t.style=e},expression:"style"}},t._l(t.styleOptions,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),0),n("Button",{attrs:{disabled:!t.convertedText},on:{click:t.copy}},[t._v(" "+t._s(t.$t("common.copy"))+" ")])],1),n("Textarea",{class:t.$style.textarea,attrs:{rows:8,readonly:!0},model:{value:t.convertedText,callback:function(e){t.convertedText=e},expression:"convertedText"}})],1)])])],1)},i=[],o=n("d4ec"),s=n("bee2"),r=n("262e"),c=n("2caf"),l=n("9ab4"),u=n("1b40"),d=n("0a44");function f(t){var e=document.createElement("textarea");document.body.appendChild(e),e.value=t,e.focus(),e.select();var n=document.execCommand("copy");return e.remove(),n}var v,h=n("bbc2"),y=n("8707"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{class:t.$style.message,attrs:{tag:"div",name:"message-fade"},on:{"after-leave":t.afterLeave}},t._l(t.notifs,(function(t){return n("MessageItem",{key:t.name,attrs:{icon:t.icon,name:t.name,content:t.content,duration:t.duration}})})),1)},m=[],b=(n("b0c0"),n("c740"),n("a434"),new Uint8Array(16));function g(){if(!v&&(v="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!v))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return v(b)}var k=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function _(t){return"string"===typeof t&&k.test(t)}for(var O=_,x=[],w=0;w<256;++w)x.push((w+256).toString(16).substr(1));function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(x[t[e+0]]+x[t[e+1]]+x[t[e+2]]+x[t[e+3]]+"-"+x[t[e+4]]+x[t[e+5]]+"-"+x[t[e+6]]+x[t[e+7]]+"-"+x[t[e+8]]+x[t[e+9]]+"-"+x[t[e+10]]+x[t[e+11]]+x[t[e+12]]+x[t[e+13]]+x[t[e+14]]+x[t[e+15]]).toLowerCase();if(!O(n))throw TypeError("Stringified UUID is invalid");return n}var $=j;function I(t,e,n){t=t||{};var a=t.random||(t.rng||g)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=a[i];return e}return $(a)}var T=I,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.item},[n("Icon",{class:t.$style.icon,attrs:{name:t.icon}}),n("p",{class:t.$style.text},[t._v(" "+t._s(t.content)+" ")])],1)},M=[],C=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"mounted",value:function(){var t=this;this.duration&&setTimeout((function(){t.destroy()}),1e3*this.duration)}},{key:"destroy",value:function(){this.message.close(this.name)}}]),n}(u["d"]);Object(l["a"])([Object(u["c"])()],C.prototype,"name",void 0),Object(l["a"])([Object(u["c"])()],C.prototype,"icon",void 0),Object(l["a"])([Object(u["c"])()],C.prototype,"content",void 0),Object(l["a"])([Object(u["c"])({default:3})],C.prototype,"duration",void 0),Object(l["a"])([Object(u["b"])()],C.prototype,"message",void 0),C=Object(l["a"])([u["a"]],C);var L=C,E=L,S=n("88a8"),D=n("2877");function V(t){this["$style"]=S["default"].locals||S["default"]}var F=Object(D["a"])(E,H,M,!1,V,null,null),R=F.exports,A=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.notifs=[],t}return Object(s["a"])(n,[{key:"add",value:function(t){t.name=t.name||T(),this.notifs.push(t)}},{key:"close",value:function(t){var e=this.notifs.findIndex((function(e){return e.name===t}));e>-1&&this.notifs.splice(e,1)}},{key:"afterLeave",value:function(){this.notifs.length||this.onDestory()}}]),n}(u["d"]);Object(l["a"])([Object(u["c"])()],A.prototype,"onDestory",void 0),A=Object(l["a"])([Object(u["a"])({components:{MessageItem:R},provide:function(){return{message:this}}})],A);var U=A,K=U,W=n("599a");n("bce5");function J(t){this["$style"]=W["default"].locals||W["default"]}var P=Object(D["a"])(K,p,m,!1,J,null,null),X=P.exports,q=3,B=function(){function t(){Object(o["a"])(this,t),this.instance=null}return Object(s["a"])(t,[{key:"info",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q;this.show("info",t,e)}},{key:"success",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q;this.show("success",t,e)}},{key:"warning",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q;this.show("warning",t,e)}},{key:"error",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q;this.show("error",t,e)}},{key:"loading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q;this.show("loading",t,e)}},{key:"getMessageInstance",value:function(){return this.instance=this.instance||this.initMessageInstance(),this.instance}},{key:"initMessageInstance",value:function(){var t=this,e={onDestory:function(){t.destroy()}},n=new X({propsData:e}),a=n.$mount();return document.body.appendChild(a.$el),n}},{key:"show",value:function(t,e,n){var a=this.getMessageInstance();a.add({icon:t,content:e,duration:n})}},{key:"destroy",value:function(){var t,e;null===(t=this.instance)||void 0===t||t.$destroy(),null===(e=this.instance)||void 0===e||e.$el.remove(),this.instance=null}}]),t}(),Q=new B,Y=function(t){Object(r["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.text="",t.width="full",t.style="katakana",t}return Object(s["a"])(n,[{key:"convertedText",get:function(){var t=d["a"].toFullWidth(this.text),e="katakana"===this.style?d["a"].hiraToKana(t):d["a"].kanaToHira(t),n="full"===this.width?d["a"].toFullWidth(e):d["a"].toHalfWidth(e);return n}},{key:"widthOptions",get:function(){return[{value:"full",label:this.$i18n.t("common.width.full")},{value:"half",label:this.$i18n.t("common.width.half")}]}},{key:"styleOptions",get:function(){return[{value:"hiragana",label:this.$i18n.t("views.hirakana.style.hiragana")},{value:"katakana",label:this.$i18n.t("views.hirakana.style.katakana")}]}},{key:"copy",value:function(){var t=f(this.convertedText);t?Q.success(this.$i18n.t("common.copySuccess")):Q.warning(this.$i18n.t("common.copyFailed"))}}]),n}(u["d"]);Y=Object(l["a"])([Object(u["a"])({components:{Lang:h["a"],Header:y["a"]}})],Y);var z=Y,G=z,N=n("b066");function Z(t){this["$style"]=N["default"].locals||N["default"]}var tt=Object(D["a"])(G,a,i,!1,Z,null,null);e["default"]=tt.exports},"599a":function(t,e,n){"use strict";var a=n("d3b4"),i=n.n(a);n.d(e,"default",(function(){return i.a}))},"703c":function(t,e,n){t.exports={hirakana:"Hirakana_hirakana_2V2SI",hirakanaInner:"Hirakana_hirakanaInner_2nuYp",title:"Hirakana_title_26Qfl",container:"Hirakana_container_LCirL",origin:"Hirakana_origin_1auef",result:"Hirakana_result_XeKt3",textarea:"Hirakana_textarea_qnDaC",option:"Hirakana_option_1L11L",select:"Hirakana_select_adOEF"}},"88a8":function(t,e,n){"use strict";var a=n("df42"),i=n.n(a);n.d(e,"default",(function(){return i.a}))},a434:function(t,e,n){"use strict";var a=n("23e7"),i=n("23cb"),o=n("a691"),s=n("50c4"),r=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=u("splice"),f=Math.max,v=Math.min,h=9007199254740991,y="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,a,u,d,p,m,b=r(this),g=s(b.length),k=i(t,g),_=arguments.length;if(0===_?n=a=0:1===_?(n=0,a=g-k):(n=_-2,a=v(f(o(e),0),g-k)),g+n-a>h)throw TypeError(y);for(u=c(b,a),d=0;d<a;d++)p=k+d,p in b&&l(u,d,b[p]);if(u.length=a,n<a){for(d=k;d<g-a;d++)p=d+a,m=d+n,p in b?b[m]=b[p]:delete b[m];for(d=g;d>g-a+n;d--)delete b[d-1]}else if(n>a)for(d=g-a;d>k;d--)p=d+a-1,m=d+n-1,p in b?b[m]=b[p]:delete b[m];for(d=0;d<n;d++)b[d+k]=arguments[d+2];return b.length=g-a+n,u}})},b066:function(t,e,n){"use strict";var a=n("703c"),i=n.n(a);n.d(e,"default",(function(){return i.a}))},bce5:function(t,e,n){"use strict";n("ca25")},c740:function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").findIndex,o=n("44d2"),s="findIndex",r=!0;s in[]&&Array(1)[s]((function(){r=!1})),a({target:"Array",proto:!0,forced:r},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},ca25:function(t,e,n){},d3b4:function(t,e,n){t.exports={message:"Message_message_XnbOm"}},df42:function(t,e,n){t.exports={item:"MessageItem_item_36Fo7",icon:"MessageItem_icon_3OTUs",text:"MessageItem_text_15bLK"}}}]);