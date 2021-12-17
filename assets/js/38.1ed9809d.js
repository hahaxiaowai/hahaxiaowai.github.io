(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{600:function(t,a,s){"use strict";s.r(a);var e=s(5),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"简述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),s("p",[t._v("在如今的手机相册里，有一个有趣的功能：地图相册。它能够根据照片拍摄时的位置，将图片展示在地图中，exifReader可以允许我们在前端实现这一功能。")]),t._v(" "),s("h2",{attrs:{id:"exif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exif"}},[t._v("#")]),t._v(" EXIF")]),t._v(" "),s("p",[t._v("照片并非只有我们看到的像素信息，还有一些我们常见的宽高、拍摄时间等等，如果手机相机拍摄时设置了存储地理位置，这些信息也会存储在图片里，这些信息被称作EXIF。")]),t._v(" "),s("p",[t._v("百度定义为：可交换图像文件格式（英语：Exchangeable image file format，官方简称Exif），是专门为数码相机的照片设定的，可以记录数码照片的属性信息和拍摄数据。")]),t._v(" "),s("h2",{attrs:{id:"exifreader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exifreader"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/mattiasw/ExifReader",target:"_blank",rel:"noopener noreferrer"}},[t._v("ExifReader"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("之所以推荐这个库的重要原因，便是作者一直在维护这个库，所以如果在使用中遇到什么问题，也可以提issue来解决。")]),t._v(" "),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ExifReader "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exifreader'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将图片传入，tags里便是我们需要的照片信息。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tags.GPSLongitude tags.GPSLatitude是经纬度")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tags "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ExifReader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("使用起来是很简单的，这里提几个作者给出使用建议，首先，如果你想将所有信息都存储，建议删除MarkerNote,因为他的没啥用却非常大")]),t._v(" "),s("h2",{attrs:{id:"exif-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exif-js"}},[t._v("#")]),t._v(" exif.js")]),t._v(" "),s("p",[t._v("exif.js star 4k+，但我没有这个库，最大原因是这个库不再维护，如果遇到一些无法解决的bug，不能方便的解决问题。另一个原因，我在使用过程中，想要获取经纬度坐标，exif.js也返回了经纬度，只不过单位制是度分秒，不是常用的十进制，如果我想将经纬度放在地图里定位，不能直接使用（虽然度分秒转换十进制非常简单）。")])])}),[],!1,null,null,null);a.default=r.exports}}]);