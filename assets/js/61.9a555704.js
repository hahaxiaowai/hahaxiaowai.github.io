(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{565:function(s,t,a){"use strict";a.r(t);var r=a(6),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[s._v("#")]),s._v(" 简述")]),s._v(" "),a("p",[s._v("工作中遇到的很多小问题，解决了但是疏于整理，导致重复问题重复仍需百度搜索，特有此记录小问题。")]),s._v(" "),a("h2",{attrs:{id:"图片跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片跨域"}},[s._v("#")]),s._v(" 图片跨域")]),s._v(" "),a("p",[s._v("静态资源的一个重要原因（80%）是一位服务器端未设置跨域的白名单，以至于造成跨域，还有另外一种便是客户端未设置跨域请求Access-Control-Allow-Origin，这两种情况十分好解决。")]),s._v(" "),a("p",[s._v("图片跨域问题我是在webgl请求资源时出现的，代码中实例化一个image对象，想要请求跨域的资源，image类同样能够设置一个跨域请求头：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//地址")]),s._v("\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crossOrigin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'anonymous'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 跨域设置")]),s._v("\n\n")])])]),a("p",[s._v("crossOrigin有两个可以设置的选项，use-credentials和anonymous，两者设置后都可以跨域，但前者可以带cookie，后者不可。")]),s._v(" "),a("h2",{attrs:{id:"package-json参数解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json参数解析"}},[s._v("#")]),s._v(" package.json参数解析")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为 true 时，不发布 npm 包。")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"private"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将会覆盖main字段的效果")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果写了import和require，表名用这两种方式引入时，引入指向的不同文件")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exports"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"import"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./dist/es/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"require"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./dist/js/index.js"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"vue文件不被引用时-是否会被打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue文件不被引用时-是否会被打包"}},[s._v("#")]),s._v(" vue文件不被引用时，是否会被打包")]),s._v(" "),a("p",[s._v("不会，vue根据路由和引用去打包")]),s._v(" "),a("h2",{attrs:{id:"前端播放mp4黑屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端播放mp4黑屏"}},[s._v("#")]),s._v(" 前端播放mp4黑屏")]),s._v(" "),a("p",[s._v("视频可能是H.265编码，无法直接播放。H.264的可以播放，使用bandicam可以设置编码格式。")]),s._v(" "),a("h2",{attrs:{id:"cjs-umd-es-amd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cjs-umd-es-amd"}},[s._v("#")]),s._v(" cjs umd es amd")]),s._v(" "),a("p",[s._v("都是打包导出后的形式，只需要知道 umd是cjs与amd的混合，可以直接代替两者，这样格式打包出来的是使用script标签引入的，es是ES6模块化方式，导出的可用于import形式引入")]),s._v(" "),a("h3",{attrs:{id:"typeerror-found-non-callable-iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeerror-found-non-callable-iterator"}},[s._v("#")]),s._v(" TypeError: Found non-callable @@iterator")]),s._v(" "),a("p",[s._v("不是可迭代对象，所谓的JS中的可迭代对象包括常用的集合对象（数组、Set、Map集合）和字符串都是可迭代对象。")])])}),[],!1,null,null,null);t.default=e.exports}}]);