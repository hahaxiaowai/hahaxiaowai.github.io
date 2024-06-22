import{_ as e,c as a,o as t,a7 as r}from"./chunks/framework.B7PcuEop.js";const b=JSON.parse('{"title":"Vue实例挂载地图实例","description":"","frontmatter":{"title":"Vue实例挂载地图实例","date":"2020-12-08","categories":["GIS","记录"],"tags":["vue"]},"headers":[],"relativePath":"blogs/GIS/bindMap.md","filePath":"blogs/GIS/bindMap.md","lastUpdated":1719054396000}'),o={name:"blogs/GIS/bindMap.md"},l=r('<h1 id="vue实例挂载地图实例" tabindex="-1">Vue实例挂载地图实例 <a class="header-anchor" href="#vue实例挂载地图实例" aria-label="Permalink to &quot;Vue实例挂载地图实例&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><h2 id="问题说明" tabindex="-1">问题说明 <a class="header-anchor" href="#问题说明" aria-label="Permalink to &quot;问题说明&quot;">​</a></h2><p>在我们使用Vue作为开发框架时，我们会习惯于将数据挂载到Vue示例上，方便监听数据以及销毁和调用。对于地图也是如此，我们希望将地图实例同样挂载到Vue实例（某一组件）上，地图数据量不大时，我们发现不了性能差异，但是当我们数据量变大，就会发现地图在拖拽时变卡，性能大大降低，该如何解决呢？</p></div><h2 id="问题所在" tabindex="-1">问题所在 <a class="header-anchor" href="#问题所在" aria-label="Permalink to &quot;问题所在&quot;">​</a></h2><p>造成这个原因的便是Vue的监听数据变化造成的，Vue实例与地图实例都有各自的监听事件，并且地图实例的属性（相机等）经常发生变化，每次变化都会触发Vue的监听数据的事件，导致性能降低。</p><h2 id="尝试解决" tabindex="-1">尝试解决 <a class="header-anchor" href="#尝试解决" aria-label="Permalink to &quot;尝试解决&quot;">​</a></h2><ol><li>不挂载，使用var或let进行定义成全局变量，这样确实会解决这个问题，但是又会造成另一个问题，当路由切换时，我们需要在beforedestory中主动调用地图销毁事件。更何况这么写并不美观。</li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze" target="_blank" rel="noreferrer">Object.freeze()</a>,考虑过使用此方法解决监听问题，但是这样会导致地图实例无法变化，造成地图报错，此思路走不通。</li></ol><h2 id="最终解决" tabindex="-1">最终解决 <a class="header-anchor" href="#最终解决" aria-label="Permalink to &quot;最终解决&quot;">​</a></h2><p>仍然走Vue挂载方式，但是这次挂载并不在data中声明，这样挂载的变量不会触发数据监听，也不会影响地图实例的性能。</p>',8),i=[l];function s(c,d,n,h,u,_){return t(),a("div",null,i)}const f=e(o,[["render",s]]);export{b as __pageData,f as default};
