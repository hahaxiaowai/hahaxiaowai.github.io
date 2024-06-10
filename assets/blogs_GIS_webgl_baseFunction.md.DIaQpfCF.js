import{_ as a,c as s,o as i,a7 as t}from"./chunks/framework.BJd-zmx9.js";const g=JSON.parse('{"title":"WebGL 常量与内置函数","description":"","frontmatter":{"title":"WebGL 常量与内置函数","sidebarDepth":5,"date":"2021-9-17","categories":["webgl"],"tags":["基础"],"isTimeLine":false},"headers":[],"relativePath":"blogs/GIS/webgl/baseFunction.md","filePath":"blogs/GIS/webgl/baseFunction.md"}'),l={name:"blogs/GIS/webgl/baseFunction.md"},e=t(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>在WegGL开发中，glsl里有很多基本函数与变量，需要我们熟知，为方便记忆，做此记录。</p></div><h2 id="内置函数" tabindex="-1">内置函数 <a class="header-anchor" href="#内置函数" aria-label="Permalink to &quot;内置函数&quot;">​</a></h2><h3 id="dot" tabindex="-1">dot <a class="header-anchor" href="#dot" aria-label="Permalink to &quot;dot&quot;">​</a></h3><p>dot(vec x,vec y) 返回x和y的点乘结果</p><p>点积一个单位向量，那么得到的是向量投影在单位向量上的分量</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vec2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x1,y1),</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vec2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x2,y2)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// x1*x2+x2*y2</span></span></code></pre></div><h3 id="clamp" tabindex="-1">clamp <a class="header-anchor" href="#clamp" aria-label="Permalink to &quot;clamp&quot;">​</a></h3><p>clamp( x, min, max) 将 x 限制在min与max之间</p><p>说明：</p><ul><li>if(x&gt;max) return max</li><li>if(x&lt;max &amp;&amp; x&gt;min) return x</li><li>if(x&lt;min) return min</li></ul><h3 id="abs" tabindex="-1">abs <a class="header-anchor" href="#abs" aria-label="Permalink to &quot;abs&quot;">​</a></h3><p>abs(x) 返回x的绝对值</p><h3 id="dfdx-dfdy" tabindex="-1">dFdx dFdy <a class="header-anchor" href="#dfdx-dfdy" aria-label="Permalink to &quot;dFdx dFdy&quot;">​</a></h3><p>偏导数函数（HLSL中的ddx和ddy，GLSL中的dFdx和dFdy）是片元着色器中的一个用于计算任何变量基于屏幕空间坐标的变化率的指令（函数）。</p><p>法向量贴图用此计算，求出每个像素在插值化传值过来的点的变化率当成一个法线</p><h3 id="smoothstep-float-t1-float-t2-float-x" tabindex="-1">smoothstep(float t1, float t2, float x); <a class="header-anchor" href="#smoothstep-float-t1-float-t2-float-x" aria-label="Permalink to &quot;smoothstep(float t1, float t2, float x);&quot;">​</a></h3><p>与 clamp相似，但是返回值x会经过计算，该函数被称为平滑阶梯函数</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 源码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">smoothstep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(float t1, float t2, float x) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> clamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t1) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (t2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> t1), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3X^2 - 2X^3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="step-float-x-float-y" tabindex="-1">step(float x,float y) <a class="header-anchor" href="#step-float-x-float-y" aria-label="Permalink to &quot;step(float x,float y)&quot;">​</a></h3><p>如果x&gt;y则返回0.0，如果x&lt;y 则返回1.0</p><p>也可以传入vec2等其他类型变量</p><h3 id="fract-float-x" tabindex="-1">fract(float x) <a class="header-anchor" href="#fract-float-x" aria-label="Permalink to &quot;fract(float x)&quot;">​</a></h3><p>返回x的小数部分 该方法可能会导致精度问题，目前无法确认</p><h3 id="floor-float-x-ceil-float-x" tabindex="-1">floor(float x) ceil(float x) <a class="header-anchor" href="#floor-float-x-ceil-float-x" aria-label="Permalink to &quot;floor(float x) ceil(float x)&quot;">​</a></h3><p>向下取整，向上取整</p><h3 id="mod-float-x-float-y" tabindex="-1">mod(float x,float y) <a class="header-anchor" href="#mod-float-x-float-y" aria-label="Permalink to &quot;mod(float x,float y)&quot;">​</a></h3><p>返回x/y的余数 该方法可能会导致精度问题，目前无法确认</p><h3 id="clamp-float-x-float-minval-float-maxval" tabindex="-1">clamp(float x,float minVal,float maxVal) <a class="header-anchor" href="#clamp-float-x-float-minval-float-maxval" aria-label="Permalink to &quot;clamp(float x,float minVal,float maxVal)&quot;">​</a></h3><p>将x的值限制在minVal与maxVal之间</p><h3 id="pow-x-y" tabindex="-1">pow(x,y) <a class="header-anchor" href="#pow-x-y" aria-label="Permalink to &quot;pow(x,y)&quot;">​</a></h3><p>x的y次方</p><h3 id="exp" tabindex="-1">exp() <a class="header-anchor" href="#exp" aria-label="Permalink to &quot;exp()&quot;">​</a></h3><p>以自然常数e为底的指数函数</p><h3 id="log" tabindex="-1">log() <a class="header-anchor" href="#log" aria-label="Permalink to &quot;log()&quot;">​</a></h3><p>对数函数</p><h3 id="sqrt" tabindex="-1">sqrt() <a class="header-anchor" href="#sqrt" aria-label="Permalink to &quot;sqrt()&quot;">​</a></h3><p>平方根函数</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sqrt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5</span></span></code></pre></div><h3 id="sign-x" tabindex="-1">sign(x) <a class="header-anchor" href="#sign-x" aria-label="Permalink to &quot;sign(x)&quot;">​</a></h3><p>提取 x 的正负号</p><h3 id="mix-vec3-a-vec3-b-float-c" tabindex="-1">mix(vec3 a, vec3 b, float c) <a class="header-anchor" href="#mix-vec3-a-vec3-b-float-c" aria-label="Permalink to &quot;mix(vec3 a, vec3 b, float c)&quot;">​</a></h3><p>混合 a,b c为百分比（0-1），也可以理解为a为起点，b为终点，c是两点之间按百分比取值的一个点:a*(1-c)+b * c</p><h3 id="length" tabindex="-1">length() <a class="header-anchor" href="#length" aria-label="Permalink to &quot;length()&quot;">​</a></h3><p>返回向量的长度</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(float x)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec2 x)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec3 x)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec4 x)</span></span></code></pre></div><h3 id="distance" tabindex="-1">distance() <a class="header-anchor" href="#distance" aria-label="Permalink to &quot;distance()&quot;">​</a></h3><p>返回两点之间的距离</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">distance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(float p0, float p1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">distance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec2 p0, vec2 p1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">distance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec3 p0, vec3 p1)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">distance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec4 p0, vec4 p1)</span></span></code></pre></div><h3 id="normalize" tabindex="-1">normalize() <a class="header-anchor" href="#normalize" aria-label="Permalink to &quot;normalize()&quot;">​</a></h3><p>返回单位向量</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">float </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">normalize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(float x)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vec2 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">normalize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec2 x)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vec3 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">normalize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec3 x)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vec4 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">normalize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vec4 x)</span></span></code></pre></div>`,51),h=[e];function n(p,k,o,d,r,c){return i(),s("div",null,h)}const y=a(l,[["render",n]]);export{g as __pageData,y as default};
