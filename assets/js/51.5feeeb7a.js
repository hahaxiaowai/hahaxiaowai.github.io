(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{555:function(t,a,s){"use strict";s.r(a);var n=s(6),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"简述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),s("p",[t._v("初次接触UE编程，很多问题都不清楚，做此积累")]),t._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("h3",{attrs:{id:"ue集成gdal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ue集成gdal"}},[t._v("#")]),t._v(" UE集成GDAL")]),t._v(" "),s("p",[t._v("https://blog.csdn.net/panpan143/article/details/126705294")]),t._v(" "),s("p",[t._v("编译时会有C的文件报错，不让编译，可以选择删掉这部分文件，目前还看到有什么影响")]),t._v(" "),s("h3",{attrs:{id:"vs-设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vs-设置"}},[t._v("#")]),t._v(" vs 设置")]),t._v(" "),s("p",[t._v("https://zhuanlan.zhihu.com/p/266199524\n根据自己理解酌情设置，并不是所有的都需要设置")]),t._v(" "),s("h3",{attrs:{id:"fstring-转-const-char"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fstring-转-const-char"}},[t._v("#")]),t._v(" FString 转 const char*")]),t._v(" "),s("p",[t._v("TCHAR_TO_UTF8")]),t._v(" "),s("h3",{attrs:{id:"手写归一化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手写归一化"}},[t._v("#")]),t._v(" 手写归一化")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  FVector3f targetVector = FVector3f(0.5,0.5，0.5);\n  float targetLength = sqrt(targetVector.X * targetVector.X + targetVector.Y * targetVector.Y + targetVector.Z * targetVector.Z);\n  targetLength = 1 / targetLength;\n  targetVector.X *= targetLength;\n  targetVector.Y *= targetLength;\n  targetVector.Z *= targetLength;\n")])])]),s("h3",{attrs:{id:"tmap-获取值问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tmap-获取值问题"}},[t._v("#")]),t._v(" TMap 获取值问题")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("TMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nkv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nFString a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A")]),t._v("\nFString b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错,报错原因是空指针问题")]),t._v("\nFString c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//报错,报错原因是返回类型不是FString,类型不一致。const char * 与 ValueType *")]),t._v("\nFString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不再报错 Empty")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);