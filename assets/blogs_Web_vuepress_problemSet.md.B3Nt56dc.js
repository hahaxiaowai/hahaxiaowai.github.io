import{_ as e,c as a,o as s,a7 as r}from"./chunks/framework.B8wp6KFe.js";const g=JSON.parse('{"title":"博客搭建(vuepress版) | 常见问题","description":"","frontmatter":{"title":"博客搭建(vuepress版) | 常见问题","sidebarDepth":5,"date":"2021-10-28","categories":["web","记录"],"tags":["vuepress"]},"headers":[],"relativePath":"blogs/Web/vuepress/problemSet.md","filePath":"blogs/Web/vuepress/problemSet.md","lastUpdated":1718436996000}'),t={name:"blogs/Web/vuepress/problemSet.md"},i=r('<h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>将自己搭建博客遇到的小问题总结一下，以此记录</p><h2 id="_1-打赏插件位置问题-vuepress-plugin-sponsor" tabindex="-1">1. 打赏插件位置问题 vuepress-plugin-sponsor <a class="header-anchor" href="#_1-打赏插件位置问题-vuepress-plugin-sponsor" aria-label="Permalink to &quot;1. 打赏插件位置问题 vuepress-plugin-sponsor&quot;">​</a></h2><p>由于个人技术能力有限，研究了一下，未能解决插件位置问题，可能需要vuepress-reco调整一下评论插件和打赏插件的顺序。最笨拙的方法是在你需要使用打赏插件的文章后面加上</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Sponsor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><p>原作者的打赏插件基于别的插件改的，把jq换成了vue，样式和动效做的都挺好，不过我觉得只需要留下微信和支付宝的打赏就好了，于是重新搞了一下。如果需要，可以使用<a href="https://github.com/hahaxiaowai/vuepress-sponsor" target="_blank" rel="noreferrer">这个仓库</a></p><h2 id="_2-评论的配置项" tabindex="-1">2. 评论的配置项 <a class="header-anchor" href="#_2-评论的配置项" aria-label="Permalink to &quot;2. 评论的配置项&quot;">​</a></h2><p><a href="https://valine.js.org/configuration.html" target="_blank" rel="noreferrer">官方API</a></p><p>在这里推荐几个配置，其他的按需求在官网上找字段吧</p><ol><li>requiredFields 评论是必填的字段（昵称，邮箱，网址），我设置了评论通知，所以必填邮箱</li><li>meta 评论可填字段（昵称，邮箱，网址），我设置了昵称和邮箱，将网址去掉了</li><li>emojiCDN 表情来源 有需求可以改成其他的（如B站）,不过要相应的设置emojiMaps</li></ol><p>建议将官方文档读一下，还可以<a href="https://valine.js.org/avatar.html" target="_blank" rel="noreferrer">设置评论</a>的头像， 如果有想用B站表情的，请参考<a href="https://github.com/hahaxiaowai/bilbilEmoji" target="_blank" rel="noreferrer">这个仓库</a>,里面有不同主题的B站表情包，以及相应的配置博客的keyValue文件。</p><h2 id="_3-关于部署" tabindex="-1">3. 关于部署 <a class="header-anchor" href="#_3-关于部署" aria-label="Permalink to &quot;3. 关于部署&quot;">​</a></h2><p>目前该博客实现了自动部署，分别部署在gitee和GitHub上，博客都是中文，部署在gitee上访问非常快，比我那阿里学生价的服务器强很多，自动部署可以参考我写的自动部署文章，实现的效果是,将写好的md文档push到GitHub上，GitHub自动完成打包并部署到pages上，同时部署到gitee的pages上。</p><h2 id="_4-关于静态资源" tabindex="-1">4. 关于静态资源 <a class="header-anchor" href="#_4-关于静态资源" aria-label="Permalink to &quot;4. 关于静态资源&quot;">​</a></h2><p>博客所涉及的静态资源基本就两种吧，图片和背景音乐，其他的没有过大的资源请求，首页的背景图，如果你用的是图床，那么加载速度不是你能控制的了，如果是自己的图片，还有博客引用的图片，我建议都放在oss上，访问速度快，特别是在搬运博客的时候，不需要考虑访问不到的情况，背景音乐也是同样，都可以放在oss中。</p><h2 id="_5-vuepress-plugin-season" tabindex="-1">5. <a href="https://github.com/hahaxiaowai/vuepress-plugin-season" target="_blank" rel="noreferrer">vuepress-plugin-season</a> <a class="header-anchor" href="#_5-vuepress-plugin-season" aria-label="Permalink to &quot;5. [vuepress-plugin-season](https://github.com/hahaxiaowai/vuepress-plugin-season)&quot;">​</a></h2><p>个人安利，魔改的樱花插件，能根据四季变幻而变幻，欢迎尝鲜，也欢迎PR</p>',17),o=[i];function p(l,n,h,u,d,c){return s(),a("div",null,o)}const _=e(t,[["render",p]]);export{g as __pageData,_ as default};
