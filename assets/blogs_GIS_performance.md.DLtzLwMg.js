import{_ as a,c as e,o,a7 as r}from"./chunks/framework.BJd-zmx9.js";const f=JSON.parse('{"title":"性能优化","description":"","frontmatter":{"title":"性能优化","sidebarDepth":5,"date":"2022-06-29","categories":["GIS"],"tags":["性能"]},"headers":[],"relativePath":"blogs/GIS/performance.md","filePath":"blogs/GIS/performance.md"}'),t={name:"blogs/GIS/performance.md"},d=r('<h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>针对GIS项目的相关性能优化</p><h2 id="操作dom元素" tabindex="-1">操作dom元素 <a class="header-anchor" href="#操作dom元素" aria-label="Permalink to &quot;操作dom元素&quot;">​</a></h2><p>平常我们用Dom元素创建一些标签，比如mapbox的marker，根据经纬度计算出屏幕坐标，最后渲染一个dom元素，这个功能十分消耗性能，特别是在做动画相关的东西时，帧率很容易降低。以下是已知解决方案</p><ol><li>抽帧，如果在做动画相关的dom,可以抽取二分之一，或者四分之一，减少dom操作次数，也可以做进一步的优化，比如对比前后屏幕坐标的变化量，如果这个变化量小那么不进行dom操作</li><li>超出屏幕外的内容不进行操作，判断transform的xy值域，注意在边缘位置要根据实际情况设置更新dom,同时也要注意dom本身长度与屏幕的之间的关系。</li></ol><h2 id="模型减少重复请求" tabindex="-1">模型减少重复请求 <a class="header-anchor" href="#模型减少重复请求" aria-label="Permalink to &quot;模型减少重复请求&quot;">​</a></h2><p>以three举例，他的loader已经做了图片的缓存，当图片需要第二次请求时，会判断缓存中是否有这张图片，如果有，便直接拿来用，不再请求。</p><p>这里有一个需要注意的地方，现有的loader,在调用loader.load的时候会记录缓存，但是当你第二次调用时，之前的缓存会清除掉，这样的逻辑实际上是正确的，因为调用load就是在加载新的模型，模型与模型之间是没有关系的，所以这么做是对的。但是当进行分块（瓦片）模型加载，会多次调用这个方法，这个时候便需要改造一下这个缓存机制了。</p>',8),l=[d];function s(i,n,c,m,_,p){return o(),e("div",null,l)}const b=a(t,[["render",s]]);export{f as __pageData,b as default};
