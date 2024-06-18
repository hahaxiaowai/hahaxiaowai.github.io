import{_ as s,c as i,o as a,a7 as e}from"./chunks/framework.B8wp6KFe.js";const c=JSON.parse('{"title":"Node环境小问题集 持续更新","description":"","frontmatter":{"title":"Node环境小问题集 持续更新","date":"2021-07-07 18:30:00","categories":["web","记录"],"tags":["node"]},"headers":[],"relativePath":"blogs/Web/node/problemSet.md","filePath":"blogs/Web/node/problemSet.md","lastUpdated":1718725834000}'),t={name:"blogs/Web/node/problemSet.md"},n=e(`<h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>工作中遇到的很多小问题，解决了但是疏于整理，导致重复问题重复仍需百度搜索，特有此记录小问题。</p><h2 id="nrm-安装成功但运行失败" tabindex="-1">nrm 安装成功但运行失败 <a class="header-anchor" href="#nrm-安装成功但运行失败" aria-label="Permalink to &quot;nrm 安装成功但运行失败&quot;">​</a></h2><p>找到并打开这个文件</p><div class="language-nodejs vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nodejs</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>C:\\Users\\你的用户名\\AppData\\Roaming\\npm\\node_modules\\nrm\\cli.js</span></span></code></pre></div><p>将第十七行换成下面这个</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NRMRC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env[(process.platform </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;win32&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;USERPROFILE&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;HOME&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.nrmrc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>如果你的nrm 安装不上，查看是否有权限问题，或者是npm 缓存问题</p><h2 id="devdependencies与dependencies区别" tabindex="-1">devDependencies与dependencies区别 <a class="header-anchor" href="#devdependencies与dependencies区别" aria-label="Permalink to &quot;devDependencies与dependencies区别&quot;">​</a></h2><p>前者目录下的包仅用于开发环境，打包时不会被打包。后者开发与线上均在使用。</p><p>前者安包参数为 --save-dev或-D 后者安包参数为 --save或-S</p><p>-D-S必须大写</p><h2 id="解决vscode-因为在此系统上禁止运行脚本-报错" tabindex="-1">解决VSCODE&quot;因为在此系统上禁止运行脚本&quot;报错 <a class="header-anchor" href="#解决vscode-因为在此系统上禁止运行脚本-报错" aria-label="Permalink to &quot;解决VSCODE&quot;因为在此系统上禁止运行脚本&quot;报错&quot;">​</a></h2><p>执行后关闭当前命令行窗口，另打开一个即可</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Set</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecutionPolicy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecutionPolicy RemoteSigned </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Scope CurrentUser</span></span></code></pre></div><h2 id="解决-lf-crlf-导致的项目警告与格式报错" tabindex="-1">解决 LF CRLF 导致的项目警告与格式报错 <a class="header-anchor" href="#解决-lf-crlf-导致的项目警告与格式报错" aria-label="Permalink to &quot;解决 LF CRLF 导致的项目警告与格式报错&quot;">​</a></h2><p>导致这个的原因是git默认设置的换行方式是LF，需要设置一下git，然后重新下载一下项目，就ok了</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global core.autocrlf </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><h3 id="解决更改文件名带小写-被git忽略" tabindex="-1">解决更改文件名带小写，被git忽略 <a class="header-anchor" href="#解决更改文件名带小写-被git忽略" aria-label="Permalink to &quot;解决更改文件名带小写，被git忽略&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config core.ignorecase </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre></div><h2 id="解决-node-gyp-安装东西报错-并提示安装vs和c" tabindex="-1">解决 node-gyp 安装东西报错，并提示安装VS和C++ <a class="header-anchor" href="#解决-node-gyp-安装东西报错-并提示安装vs和c" aria-label="Permalink to &quot;解决 node-gyp 安装东西报错，并提示安装VS和C++&quot;">​</a></h2><p>具体报错如下</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">You need to install the latest version </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Visual Studio</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ERR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gyp </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ERR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> find </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> including the </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Desktop development with C++&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> workload.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ERR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gyp </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ERR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> find </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> For more information consult the documentation </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">at</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ERR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gyp </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ERR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> find </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VS</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//github.com/nodejs/node-gyp#on-windows</span></span></code></pre></div><p>解决方法:以管理员身份打开PowerShell，运行以下命令</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">production windows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">build</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tools</span></span></code></pre></div>`,25),h=[n];function p(l,k,d,o,r,E){return a(),i("div",null,h)}const y=s(t,[["render",p]]);export{c as __pageData,y as default};
