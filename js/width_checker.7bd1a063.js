(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["width_checker"],{"466d":function(t,e,n){"use strict";var i=n("d784"),a=n("825a"),c=n("50c4"),r=n("1d80"),l=n("8aa5"),h=n("14c3");i("match",1,(function(t,e,n){return[function(e){var n=r(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var r=a(t),s=String(this);if(!r.global)return h(r,s);var o=r.unicode;r.lastIndex=0;var u,d=[],f=0;while(null!==(u=h(r,s))){var v=String(u[0]);d[f]=v,""===v&&(r.lastIndex=l(s,c(r.lastIndex),o)),f++}return 0===f?null:d}]}))},"4e3d":function(t,e,n){t.exports={widthChecker:"WidthChecker_widthChecker_1mCAr",widthCheckerInner:"WidthChecker_widthCheckerInner_gwcB1",title:"WidthChecker_title_3OBad",container:"WidthChecker_container_2TTi8",origin:"WidthChecker_origin_SeZoo",result:"WidthChecker_result_25MdI",resultText:"WidthChecker_resultText_Chf5u",highlight:"WidthChecker_highlight_3uzwv",textarea:"WidthChecker_textarea_2tb_V",option:"WidthChecker_option_1qu7U",select:"WidthChecker_select_1YTeu"}},"5acd":function(t,e,n){"use strict";var i=n("4e3d"),a=n.n(i);n.d(e,"default",(function(){return a.a}))},a15b:function(t,e,n){"use strict";var i=n("23e7"),a=n("44ad"),c=n("fc6a"),r=n("a640"),l=[].join,h=a!=Object,s=r("join",",");i({target:"Array",proto:!0,forced:h||!s},{join:function(t){return l.call(c(this),void 0===t?",":t)}})},b4c1:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.widthChecker},[n("Header"),n("div",{class:t.$style.widthCheckerInner},[n("h2",{class:t.$style.title},[t._v(t._s(t.$t("views.widthChecker.title")))]),n("div",{class:t.$style.container},[n("div",{class:t.$style.origin},[n("Textarea",{class:t.$style.textarea,attrs:{rows:8},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),n("div",{class:t.$style.result},[n("div",{class:t.$style.option},[n("Select",{class:t.$style.select,model:{value:t.width,callback:function(e){t.width=e},expression:"width"}},t._l(t.widthOptions,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),0)],1),n("div",{class:t.$style.resultText},t._l(t.convertedText,(function(e,i){var a;return n("span",{key:i,class:(a={},a[t.$style.highlight]=e.width===t.width,a)},[t._v(" "+t._s(e.content)+" ")])})),0)])])])],1)},a=[],c=n("d4ec"),r=n("bee2"),l=n("262e"),h=n("2caf"),s=n("9ab4"),o=n("1b40"),u=(n("4d63"),n("ac1f"),n("25f0"),n("a15b"),n("466d"),n("159b"),n("0a44"));function d(t){var e=new RegExp("[A-Za-z0-9!-~".concat(u["b"].join(""),"]+"),"g"),n=new RegExp("[^A-Za-z0-9!-~".concat(u["b"].join(""),"]+"),"g"),i=t.match(e),a=t.match(n),c=[];if(i&&!a)i.forEach((function(t){c.push({width:"half",content:t})}));else if(!i&&a)a.forEach((function(t){c.push({width:"full",content:t})}));else if(i&&a)if(i[0][0]===t[0])while(i.length>0||a.length>0){var r=i.shift();r&&c.push({width:"half",content:r});var l=a.shift();l&&c.push({width:"full",content:l})}else while(i.length>0||a.length>0){var h=a.shift();h&&c.push({width:"full",content:h});var s=i.shift();s&&c.push({width:"half",content:s})}return c}var f=n("bbc2"),v=n("8707"),w=function(t){Object(l["a"])(n,t);var e=Object(h["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.text="",t.width="half",t.style="katakana",t}return Object(r["a"])(n,[{key:"convertedText",get:function(){return d(this.text)}},{key:"widthOptions",get:function(){return[{value:"full",label:this.$i18n.t("common.width.full")},{value:"half",label:this.$i18n.t("common.width.half")}]}}]),n}(o["d"]);w=Object(s["a"])([Object(o["a"])({components:{Lang:f["a"],Header:v["a"]}})],w);var _=w,p=_,k=n("5acd"),b=n("2877");function g(t){this["$style"]=k["default"].locals||k["default"]}var x=Object(b["a"])(p,i,a,!1,g,null,null);e["default"]=x.exports}}]);