(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{617:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),a("p",[t._v("回顾了一下之前写的四节内容，发现并没有给出一个完整的Demo示例，为了方便后面的讲解，这里提供一个简单的模板，同时补充一些在前端框架中，写地图组件的注意事项，也希望你能把自己的经验分享在评论区，共同进步。")]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("h3",{attrs:{id:"html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[t._v("#")]),t._v(" html")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[t._v("#")]),t._v(" js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mapboxgl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCESS_TOKEN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mapboxgl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("container")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"map"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// div的id")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'mapbox://styles/mapbox/streets-v11' 可直接用这个地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("center")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("116.39104843139647")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("39.912287369097186")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 地图加载后默认中心点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("zoom")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 地图缩放比例")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// load 也可以写成style.load")]),t._v("\n  map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载图层，注册事件等都需要写在这里面")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[t._v("#")]),t._v(" css")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 宽高 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"地图组件注意事项-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#地图组件注意事项-vue"}},[t._v("#")]),t._v(" 地图组件注意事项（vue)")]),t._v(" "),a("p",[t._v("在日常的开发工作中，项目一般会使用前端框架作为基础，在其上做业务的实现，封装一个地图组件是GIS开发的日常，下面会提供几个注意事项，希望对你有帮助。")]),t._v(" "),a("h3",{attrs:{id:"绑定数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定数据"}},[t._v("#")]),t._v(" 绑定数据")]),t._v(" "),a("p",[t._v("不要将map在data中定义，这会导致vue一直监听map的变化，整个地图会变卡，可以选择直接this.map去赋值，也可以在vue对象外定义一个变量存储。")]),t._v(" "),a("h3",{attrs:{id:"规范代码逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规范代码逻辑"}},[t._v("#")]),t._v(" 规范代码逻辑")]),t._v(" "),a("p",[t._v("不同于其他前端组件或页面，代码逻辑并不会太多，地图组件稍不注意就有几百行的代码量，如果是vue3,那么直接写在js/ts文件里，vue2也能这么做。")]),t._v(" "),a("p",[t._v("GIS代码用一个一个函数分割开，保证代码的可读性，在methods里，例如:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// init")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化地图")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化图层，在map.on中调用")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initLayers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化地图/图层事件 在map.on中调用")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMapEvents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 控制图层显隐")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hiddenAndShow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩放至某某地方")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flyToSomeWhere")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改图层数据")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("editLayer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// web-gis")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对另外的组件/页面进行操作")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operateOhter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他组件想调用地图数据或进行操作")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("otherOperateMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ....")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这么做的目的是可读，方便自己改bug，也方便他人改你的代码，我简单的将methods分为：初始化、功能、对外（其他组件/页面）接口")]),t._v(" "),a("h3",{attrs:{id:"与其他组件的交互-有争议-欢迎讨论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与其他组件的交互-有争议-欢迎讨论"}},[t._v("#")]),t._v(" 与其他组件的交互（有争议，欢迎讨论）")]),t._v(" "),a("p",[t._v("从我个人开发经历来讲，这个问题并不好解决，每种交互方式都会带来不同的问题。")]),t._v(" "),a("p",[t._v("这里所说的交互，是与其他组件的通信方式，举例来讲，有一块大屏，中间是地图，周围是图表和其他内容，图表需要调用地图的数据，该如何去传递呢？")]),t._v(" "),a("p",[t._v("实现传输是简单的，问题在于规范的交互传输，目前，我曾使用过以下几种方式：")]),t._v(" "),a("ol",[a("li",[t._v("store 存储变量，通过监听变量进行传递")]),t._v(" "),a("li",[t._v("bus 通信")]),t._v(" "),a("li",[t._v("其他组件直接调用相对应的方法，地图组件相当于后台接口，反之亦然。")])]),t._v(" "),a("h3",{attrs:{id:"数据处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据处理"}},[t._v("#")]),t._v(" 数据处理")]),t._v(" "),a("p",[t._v("在很多场景中，数据并不符合业务的需求，需要进行处理，这时候一定注意代码的逻辑与执行效率。")]),t._v(" "),a("h3",{attrs:{id:"性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[t._v("#")]),t._v(" 性能")]),t._v(" "),a("p",[t._v("对于刚入门的同学来说，在开发过程中要注意，每当一个功能或业务逻辑堆叠在项目时，首先注意的是 是否互相影响，其次注意页面运行是否变卡顿了，是前者，那么是出现了bug；是后者，你可以先初步鉴定一下，没有办法解决的话，也要及时做记录，后面如果有提升性能的需求，你也会有好的入手点。")])])}),[],!1,null,null,null);s.default=e.exports}}]);