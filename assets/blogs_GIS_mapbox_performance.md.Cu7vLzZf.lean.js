import{_ as t,c as o,o as r,j as a,a as e}from"./chunks/framework.B8wp6KFe.js";const D=JSON.parse('{"title":"mapbox-gl | 性能注意事项","description":"","frontmatter":{"title":"mapbox-gl | 性能注意事项","date":"2022-03-30","categories":["GIS"],"tags":["mapbox"]},"headers":[],"relativePath":"blogs/GIS/mapbox/performance.md","filePath":"blogs/GIS/mapbox/performance.md","lastUpdated":1718505716000}'),s={name:"blogs/GIS/mapbox/performance.md"},d=a("h2",{id:"简述",tabindex:"-1"},[e("简述 "),a("a",{class:"header-anchor",href:"#简述","aria-label":'Permalink to "简述"'},"​")],-1),c=a("p",null,"浏览器性能优化一直是开发中需要注意的问题，mapbox涉及webgl渲染，从各个角度都可能会涉及优化，此篇将日常见到的优化方案或影响性能的地方记录下来，方便解决或排查问题。",-1),n=a("h2",{id:"addsource-addlayer-setdata",tabindex:"-1"},[e("addSource addLayer setData "),a("a",{class:"header-anchor",href:"#addsource-addlayer-setdata","aria-label":'Permalink to "addSource addLayer setData"'},"​")],-1),l=a("p",null,"在做一些点、线移动的时候，我们会考虑使用设置图层去实现这些功能，通过不断setData实现，如果过多图层同时进行setData，整体地图会卡顿。addSource与addLayer短时间多次运行也会影响，但不如setData影响明显。",-1),i=a("p",null,"在做多点动画时，多source设置setData不如使用marker，marker反而性能会好很多，也可以尝试单source设置setData,目前为尝试过，不清楚效率",-1),p=[d,c,n,l,i];function m(_,h,b,u,f,x){return r(),o("div",null,p)}const S=t(s,[["render",m]]);export{D as __pageData,S as default};
