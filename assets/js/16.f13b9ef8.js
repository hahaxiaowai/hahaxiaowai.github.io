(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{615:function(t,e,r){"use strict";r.r(e);var a=r(6),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"简述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),r("p",[t._v("记录遇到的两者结合出现的问题。")]),t._v(" "),r("h2",{attrs:{id:"坐标系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#坐标系"}},[t._v("#")]),t._v(" 坐标系")]),t._v(" "),r("p",[t._v("three采用的和opengl相同的右手坐标系，y轴朝上，z轴朝向屏幕，但是mapbox不同，为了更贴合地理坐标的习惯，用xy代表经纬度，z轴朝上，这也就意味着，我们需要把y和z交换一下才能得到正确的three坐标")]),t._v(" "),r("h2",{attrs:{id:"坐标原点与坐标转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#坐标原点与坐标转换"}},[t._v("#")]),t._v(" 坐标原点与坐标转换")]),t._v(" "),r("p",[t._v("在mapbox中的three采用相对坐标，即规定一个原定作为three的(0,0,0)点，将经纬度转为墨卡托坐标，这里的墨卡托坐标也可以称作世界坐标，它的原点在地图的左上角，再获取当前纬度每世界单位等于多少米，这样就能让three场景里的单位作为米去使用，而three的原点坐标是我们已知的，同样可以转换为世界坐标，这样我们就可以构建一个世界坐标与three的坐标转换体系")]),t._v(" "),r("p",[t._v("转换坐标中，我们只能转换-180~180的点位，超出这个范围似乎不能展示，每个纬度所转换的米是不一样的,这也就意味着，如果我们确定了原点，只能用原点所在纬度的转换米去转换。")]),t._v(" "),r("p",[t._v("离中心点越远，three渲染就会有问题，例如，画一个圆，离中心点越远就会显示不正确，在three独立场景中是没问题的，两者结合会出现，目前咱不知道什么原因")])])}),[],!1,null,null,null);e.default=s.exports}}]);