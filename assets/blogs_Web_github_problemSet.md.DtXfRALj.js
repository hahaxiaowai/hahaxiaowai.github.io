import{_ as e,c as t,o as a,a8 as i}from"./chunks/framework.CfV4vhYM.js";const u=JSON.parse('{"title":"github小问题集","description":"","frontmatter":{"title":"github小问题集","date":"2023-02-24 17:50:00","categories":["记录","web"],"tags":["github"]},"headers":[],"relativePath":"blogs/Web/github/problemSet.md","filePath":"blogs/Web/github/problemSet.md","lastUpdated":1722242476000}'),s={name:"blogs/Web/github/problemSet.md"},o=i('<h1 id="github小问题集" tabindex="-1">github小问题集 <a class="header-anchor" href="#github小问题集" aria-label="Permalink to &quot;github小问题集&quot;">​</a></h1><h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>工作中遇到的很多小问题，解决了但是疏于整理，导致重复问题重复仍需百度搜索，特有此记录小问题。</p><h2 id="kex-exchange-identification-connection-closed-by-remote-host" tabindex="-1">kex_exchange_identification: Connection closed by remote host <a class="header-anchor" href="#kex-exchange-identification-connection-closed-by-remote-host" aria-label="Permalink to &quot;kex_exchange_identification: Connection closed by remote host&quot;">​</a></h2><p>该问题有很多解，有重新生成key的</p><p>这里提供一个可能，将仓库地址改成https的,不适用git开头的</p><h2 id="_443-10053" tabindex="-1">443 10053 <a class="header-anchor" href="#_443-10053" aria-label="Permalink to &quot;443 10053&quot;">​</a></h2><p>true false 来回切换试试，再加上加速器</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http.sslverify</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span></code></pre></div><h2 id="ssh-depoly-部署至ecs-错误代码解决办法" tabindex="-1">ssh-depoly 部署至ecs 错误代码解决办法 <a class="header-anchor" href="#ssh-depoly-部署至ecs-错误代码解决办法" aria-label="Permalink to &quot;ssh-depoly 部署至ecs 错误代码解决办法&quot;">​</a></h2><h3 id="error-rsync-exited-with-code-127" tabindex="-1">Error: rsync exited with code 127 <a class="header-anchor" href="#error-rsync-exited-with-code-127" aria-label="Permalink to &quot;Error: rsync exited with code 127&quot;">​</a></h3><p>重新更新一下部署服务器的ip，不要有空格</p>',12),h=[o];function n(r,l,c,d,p,b){return a(),t("div",null,h)}const _=e(s,[["render",n]]);export{u as __pageData,_ as default};