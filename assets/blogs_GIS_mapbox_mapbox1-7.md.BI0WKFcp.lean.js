import{_ as i,c as a,a6 as n,o as t}from"./chunks/framework.B6dxnelD.js";const d=JSON.parse('{"title":"mapbox-gl | 1.7 球形地图","description":"","frontmatter":{"title":"mapbox-gl | 1.7 球形地图","date":"2022-05-23","categories":["GIS"],"tags":["教程","mapbox"]},"headers":[],"relativePath":"blogs/GIS/mapbox/mapbox1-7.md","filePath":"blogs/GIS/mapbox/mapbox1-7.md","lastUpdated":1729653278000}'),h={name:"blogs/GIS/mapbox/mapbox1-7.md"};function p(l,s,e,k,E,r){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="mapbox-gl-1-7-球形地图" tabindex="-1">mapbox-gl | 1.7 球形地图 <a class="header-anchor" href="#mapbox-gl-1-7-球形地图" aria-label="Permalink to &quot;mapbox-gl | 1.7 球形地图&quot;">​</a></h1><h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>随着mapbox不断更迭，终于支持了以球形展示地图的方式。在21年下半旬，mapbox便有分支对球形地图进行了尝试，mapbox2.9也终于将这个功能上线。</p><h2 id="初始化球形地图" tabindex="-1">初始化球形地图 <a class="header-anchor" href="#初始化球形地图" aria-label="Permalink to &quot;初始化球形地图&quot;">​</a></h2><p>与平常mapbox无异，只需要在初始化时设置投影为 <code>global</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mapboxgl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      container: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      style: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mapbox://styles/mapbox/streets-v11&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      center: [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">74.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">40</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      zoom: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      projection: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;globe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 球</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span></code></pre></div><p>效果如下： <img src="https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/1-7-1.png" alt="图片1"></p><p>需要注意的是，如果不设置<code>projection</code>，使用的style是v12结尾，会默认为球形地图。 为了让效果更加美观，可以增加一下“雾气”</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;load&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setFog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        range: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;white&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;horizon-blend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span></code></pre></div><p><img src="https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/1-7-2.png" alt="图片2"></p><h3 id="fog" tabindex="-1">Fog <a class="header-anchor" href="#fog" aria-label="Permalink to &quot;Fog&quot;">​</a></h3><p>Fog本身是指雾气，在原本平面地图下，<code>setFog</code> 给当前地图加一层雾气，但这里的雾气指的是大气层的“发光”效果，以及星空效果。</p><h2 id="球形地图下的其他功能" tabindex="-1">球形地图下的其他功能 <a class="header-anchor" href="#球形地图下的其他功能" aria-label="Permalink to &quot;球形地图下的其他功能&quot;">​</a></h2><p>目前所有功能都在global下进行了一定适配，比如marker，增加了朝向球心的属性设置</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mapboxgl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Marker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element: el,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Point markers toward the nearest horizon</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rotationAlignment: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;horizon&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">offset: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setLngLat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(marker.geometry.coordinates)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(map);</span></span></code></pre></div><p><a href="https://docs.mapbox.com/mapbox-gl-js/example/marker-horizon-aligned/" target="_blank" rel="noreferrer">官方实例</a></p><p>除此之外，需要关注的是customLayer，以往mapbox与three等结合，都是在同一个平面下，如今有一个变成了球，矩阵如何转换可能需要研究一下，自己还没有看过相关代码，不好下结论。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>球形版本的出现，给了我们学习更多底层的机会，当然，想要完全掌握他变得更加困难，不过对于走mapbox这条技术线的人来说，多了解总归是没坏处的。相比较Cesium，mapbox需要增加对大场景的支持，如3dTiles文件，让引擎拥有更多的可能性。 对于刚入门的同学来讲，不要害怕新功能的增加，功能的增多只会让社区生态更加丰富，当下需要做的仍是掌握上层的api,随后慢慢扩展和深入，找到适合自己的开发方向。</p>`,19)]))}const g=i(h,[["render",p]]);export{d as __pageData,g as default};
