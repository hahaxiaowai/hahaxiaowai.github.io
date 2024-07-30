import{_ as a,c as e,o,a8 as t}from"./chunks/framework.CfV4vhYM.js";const x=JSON.parse('{"title":"mapbox源码解析（一）","description":"","frontmatter":{"title":"mapbox源码解析（一）","date":"2021-02-05","categories":["GIS"],"tags":["mapbox"],"publish":false},"headers":[],"relativePath":"blogs/GIS/mapbox/sourceCode1.md","filePath":"blogs/GIS/mapbox/sourceCode1.md","lastUpdated":1722315377000}'),s={name:"blogs/GIS/mapbox/sourceCode1.md"},r=t('<h1 id="mapbox源码解析-一" tabindex="-1">mapbox源码解析（一） <a class="header-anchor" href="#mapbox源码解析-一" aria-label="Permalink to &quot;mapbox源码解析（一）&quot;">​</a></h1><h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>mapbox是主流开源GIS框架之一，了解mapbox源码是我们学习它的必然之路，这有助于我们平日里的开发，也有益于我们对其进行拓展。本文记录我对mapbox源码阅读的心得。</p><h2 id="cesium与mapbox" tabindex="-1">Cesium与Mapbox <a class="header-anchor" href="#cesium与mapbox" aria-label="Permalink to &quot;Cesium与Mapbox&quot;">​</a></h2><p>两者均是当前最流行的开源框架，Cesium拥有更多的渲染机制，能实现复杂的渲染与功能，更重要的是，它是以球形的方式展示地理信息，这在展示大场景数据时更具有优势，Mapbox相对于Cesium，它显得更加轻便，并且随着2.X版本的更新，Mapbox也支持更多的三维展示效果了，两者都是十分优秀的开源框架，只是侧重点不相同，没必要捧一踩一，在平日的项目中，往往是根据需求而选择更合适的框架进行开发。</p><h2 id="特别注意" tabindex="-1">特别注意 <a class="header-anchor" href="#特别注意" aria-label="Permalink to &quot;特别注意&quot;">​</a></h2><p>这一系列文章都是我个人开发时的经验，在源码逻辑上并不能保证100%的正确，也希望能够得到他人的指正，我会以实现某一功能进行源码解析，这更方便理解。</p><h2 id="源码结构" tabindex="-1">源码结构 <a class="header-anchor" href="#源码结构" aria-label="Permalink to &quot;源码结构&quot;">​</a></h2><p>如果你阅读过Cesium的源码，你会发现两者有很大的不同，在有一定程度上，你会觉得mapbox的源码足够“模块”化，但有时候你会觉得他很碎，再加上现在GitHub上的mapbox源码其写法是ts,他自定义了很多类型，这在初次接触阅读时（即便现在也是）会造成很大的理解麻烦。</p>',9),i=[r];function p(m,b,c,l,d,n){return o(),e("div",null,i)}const u=a(s,[["render",p]]);export{x as __pageData,u as default};