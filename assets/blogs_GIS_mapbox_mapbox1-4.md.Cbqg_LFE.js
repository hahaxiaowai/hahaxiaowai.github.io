import{_ as s,c as a,o as i,a8 as n}from"./chunks/framework.CfV4vhYM.js";const c=JSON.parse('{"title":"mapbox-gl | 1.4 完整示例与地图组件的注意事项","description":"","frontmatter":{"title":"mapbox-gl | 1.4 完整示例与地图组件的注意事项","date":"2022-01-07","categories":["GIS"],"tags":["教程","mapbox"]},"headers":[],"relativePath":"blogs/GIS/mapbox/mapbox1-4.md","filePath":"blogs/GIS/mapbox/mapbox1-4.md","lastUpdated":1721930431000}'),l={name:"blogs/GIS/mapbox/mapbox1-4.md"},h=n(`<h1 id="mapbox-gl-1-4-完整示例与地图组件的注意事项" tabindex="-1">mapbox-gl | 1.4 完整示例与地图组件的注意事项 <a class="header-anchor" href="#mapbox-gl-1-4-完整示例与地图组件的注意事项" aria-label="Permalink to &quot;mapbox-gl | 1.4 完整示例与地图组件的注意事项&quot;">​</a></h1><h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>回顾了一下之前写的四节内容，发现并没有给出一个完整的Demo示例，为了方便后面的讲解，这里提供一个简单的模板，同时补充一些在前端框架中，写地图组件的注意事项，也希望你能把自己的经验分享在评论区，共同进步。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="html" tabindex="-1">html <a class="header-anchor" href="#html" aria-label="Permalink to &quot;html&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="js" tabindex="-1">js <a class="header-anchor" href="#js" aria-label="Permalink to &quot;js&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mapboxgl.accessToken </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ACCESS_TOKEN&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mapboxgl.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    container: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// div的id</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style: style, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;mapbox://styles/mapbox/streets-v11&#39; 可直接用这个地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    center: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">116.39104843139647</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">39.912287369097186</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 地图加载后默认中心点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    zoom: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 地图缩放比例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // load 也可以写成style.load</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;load&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 加载图层，注册事件等都需要写在这里面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><h3 id="css" tabindex="-1">css <a class="header-anchor" href="#css" aria-label="Permalink to &quot;css&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 宽高 */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="地图组件注意事项-vue" tabindex="-1">地图组件注意事项（vue) <a class="header-anchor" href="#地图组件注意事项-vue" aria-label="Permalink to &quot;地图组件注意事项（vue)&quot;">​</a></h2><p>在日常的开发工作中，项目一般会使用前端框架作为基础，在其上做业务的实现，封装一个地图组件是GIS开发的日常，下面会提供几个注意事项，希望对你有帮助。</p><h3 id="绑定数据" tabindex="-1">绑定数据 <a class="header-anchor" href="#绑定数据" aria-label="Permalink to &quot;绑定数据&quot;">​</a></h3><p>不要将map在data中定义，这会导致vue一直监听map的变化，整个地图会变卡，可以选择直接this.map去赋值，也可以在vue对象外定义一个变量存储。</p><h3 id="规范代码逻辑" tabindex="-1">规范代码逻辑 <a class="header-anchor" href="#规范代码逻辑" aria-label="Permalink to &quot;规范代码逻辑&quot;">​</a></h3><p>不同于其他前端组件或页面，代码逻辑并不会太多，地图组件稍不注意就有几百行的代码量，如果是vue3,那么直接写在js/ts文件里，vue2也能这么做。</p><p>GIS代码用一个一个函数分割开，保证代码的可读性，在methods里，例如:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // init</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 初始化地图</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  initMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 初始化图层，在map.on中调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  initLayers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 初始化地图/图层事件 在map.on中调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  initMapEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // function</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 控制图层显隐</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  hiddenAndShow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 缩放至某某地方</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  flyToSomeWhere</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 修改图层数据</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  editLayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // web-gis</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 对另外的组件/页面进行操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  operateOhter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 其他组件想调用地图数据或进行操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  otherOperateMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ....</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这么做的目的是可读，方便自己改bug，也方便他人改你的代码，我简单的将methods分为：初始化、功能、对外（其他组件/页面）接口</p><h3 id="与其他组件的交互-有争议-欢迎讨论" tabindex="-1">与其他组件的交互（有争议，欢迎讨论） <a class="header-anchor" href="#与其他组件的交互-有争议-欢迎讨论" aria-label="Permalink to &quot;与其他组件的交互（有争议，欢迎讨论）&quot;">​</a></h3><p>从我个人开发经历来讲，这个问题并不好解决，每种交互方式都会带来不同的问题。</p><p>这里所说的交互，是与其他组件的通信方式，举例来讲，有一块大屏，中间是地图，周围是图表和其他内容，图表需要调用地图的数据，该如何去传递呢？</p><p>实现传输是简单的，问题在于规范的交互传输，目前，我曾使用过以下几种方式：</p><ol><li>store 存储变量，通过监听变量进行传递</li><li>bus 通信</li><li>其他组件直接调用相对应的方法，地图组件相当于后台接口，反之亦然。</li></ol><h3 id="数据处理" tabindex="-1">数据处理 <a class="header-anchor" href="#数据处理" aria-label="Permalink to &quot;数据处理&quot;">​</a></h3><p>在很多场景中，数据并不符合业务的需求，需要进行处理，这时候一定注意代码的逻辑与执行效率。</p><h3 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h3><p>对于刚入门的同学来说，在开发过程中要注意，每当一个功能或业务逻辑堆叠在项目时，首先注意的是 是否互相影响，其次注意页面运行是否变卡顿了，是前者，那么是出现了bug；是后者，你可以先初步鉴定一下，没有办法解决的话，也要及时做记录，后面如果有提升性能的需求，你也会有好的入手点。</p>`,28),t=[h];function p(e,k,d,r,E,o){return i(),a("div",null,t)}const y=s(l,[["render",p]]);export{c as __pageData,y as default};