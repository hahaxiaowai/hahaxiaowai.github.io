(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{631:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("h2",{attrs:{id:"简述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),s("p",[t._v("在WegGL开发中，glsl里有很多基本函数与变量，需要我们熟知，为方便记忆，做此记录。")])]),s("h2",{attrs:{id:"内置函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置函数"}},[t._v("#")]),t._v(" 内置函数")]),t._v(" "),s("h3",{attrs:{id:"dot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dot"}},[t._v("#")]),t._v(" dot")]),t._v(" "),s("p",[t._v("dot(vec x,vec y)\t返回x和y的点乘结果")]),t._v(" "),s("p",[t._v("点积一个单位向量，那么得到的是向量投影在单位向量上的分量")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vec2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x1*x2+x2*y2")]),t._v("\n")])])]),s("h3",{attrs:{id:"clamp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clamp"}},[t._v("#")]),t._v(" clamp")]),t._v(" "),s("p",[t._v("clamp( x, min, max) 将 x 限制在min与max之间")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("if(x>max) return max")]),t._v(" "),s("li",[t._v("if(x<max && x>min) return x")]),t._v(" "),s("li",[t._v("if(x<min) return min")])]),t._v(" "),s("h3",{attrs:{id:"abs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abs"}},[t._v("#")]),t._v(" abs")]),t._v(" "),s("p",[t._v("abs(x) 返回x的绝对值")]),t._v(" "),s("h3",{attrs:{id:"dfdx-dfdy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dfdx-dfdy"}},[t._v("#")]),t._v(" dFdx dFdy")]),t._v(" "),s("p",[t._v("偏导数函数（HLSL中的ddx和ddy，GLSL中的dFdx和dFdy）是片元着色器中的一个用于计算任何变量基于屏幕空间坐标的变化率的指令（函数）。")]),t._v(" "),s("p",[t._v("法向量贴图用此计算，求出每个像素在插值化传值过来的点的变化率当成一个法线")]),t._v(" "),s("h3",{attrs:{id:"smoothstep-float-t1-float-t2-float-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smoothstep-float-t1-float-t2-float-x"}},[t._v("#")]),t._v(" smoothstep(float t1, float t2, float x);")]),t._v(" "),s("p",[t._v("与 clamp相似，但是返回值x会经过计算，该函数被称为平滑阶梯函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 源码")]),t._v("\nfloat "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("smoothstep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("float t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" float t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" float x")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3X^2 - 2X^3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"step-float-x-float-y"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-float-x-float-y"}},[t._v("#")]),t._v(" step(float x,float y)")]),t._v(" "),s("p",[t._v("如果x>y则返回0.0，如果x<y 则返回1.0")]),t._v(" "),s("p",[t._v("也可以传入vec2等其他类型变量")]),t._v(" "),s("h3",{attrs:{id:"fract-float-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fract-float-x"}},[t._v("#")]),t._v(" fract(float x)")]),t._v(" "),s("p",[t._v("返回x的小数部分\n该方法可能会导致精度问题，目前无法确认")]),t._v(" "),s("h3",{attrs:{id:"floor-float-x-ceil-float-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#floor-float-x-ceil-float-x"}},[t._v("#")]),t._v(" floor(float x) ceil(float x)")]),t._v(" "),s("p",[t._v("向下取整，向上取整")]),t._v(" "),s("h3",{attrs:{id:"mod-float-x-float-y"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mod-float-x-float-y"}},[t._v("#")]),t._v(" mod(float x,float y)")]),t._v(" "),s("p",[t._v("返回x/y的余数\n该方法可能会导致精度问题，目前无法确认")]),t._v(" "),s("h3",{attrs:{id:"clamp-float-x-float-minval-float-maxval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clamp-float-x-float-minval-float-maxval"}},[t._v("#")]),t._v(" clamp(float x,float minVal,float maxVal)")]),t._v(" "),s("p",[t._v("将x的值限制在minVal与maxVal之间")]),t._v(" "),s("h3",{attrs:{id:"pow-x-y"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pow-x-y"}},[t._v("#")]),t._v(" pow(x,y)")]),t._v(" "),s("p",[t._v("x的y次方")]),t._v(" "),s("h3",{attrs:{id:"exp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exp"}},[t._v("#")]),t._v(" exp()")]),t._v(" "),s("p",[t._v("以自然常数e为底的指数函数")]),t._v(" "),s("h3",{attrs:{id:"log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log()")]),t._v(" "),s("p",[t._v("对数函数")]),t._v(" "),s("h3",{attrs:{id:"sqrt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqrt"}},[t._v("#")]),t._v(" sqrt()")]),t._v(" "),s("p",[t._v("平方根函数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sqrt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n")])])]),s("h3",{attrs:{id:"sign-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sign-x"}},[t._v("#")]),t._v(" sign(x)")]),t._v(" "),s("p",[t._v("提取 x 的正负号")]),t._v(" "),s("h3",{attrs:{id:"mix-vec3-a-vec3-b-float-c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mix-vec3-a-vec3-b-float-c"}},[t._v("#")]),t._v(" mix(vec3 a, vec3 b, float c)")]),t._v(" "),s("p",[t._v("混合 a,b c为百分比（0-1），也可以理解为a为起点，b为终点，c是两点之间按百分比取值的一个点:a*(1-c)+b * c")]),t._v(" "),s("h3",{attrs:{id:"length"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#length"}},[t._v("#")]),t._v(" length()")]),t._v(" "),s("p",[t._v("返回向量的长度")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("float "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("float x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec2 x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec3 x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec4 x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"distance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distance"}},[t._v("#")]),t._v(" distance()")]),t._v(" "),s("p",[t._v("返回两点之间的距离")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("float "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("distance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("float p0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" float p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("distance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec2 p0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vec2 p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("distance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec3 p0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vec3 p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("distance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec4 p0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vec4 p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"normalize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#normalize"}},[t._v("#")]),t._v(" normalize()")]),t._v(" "),s("p",[t._v("返回单位向量")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("float "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("float x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvec2 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec2 x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvec3 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec3 x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvec4 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vec4 x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);