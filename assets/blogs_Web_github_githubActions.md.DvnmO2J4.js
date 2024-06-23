import{_ as h,D as e,c as p,j as s,a as i,I as n,w as t,a7 as l,o as k}from"./chunks/framework.pa7dew15.js";const G=JSON.parse('{"title":"博客搭建 | 一、vuepress+GitHub Actions自动构建并发布","description":"","frontmatter":{"title":"博客搭建 | 一、vuepress+GitHub Actions自动构建并发布","date":"2021-01-05","categories":["web"],"tags":["github"]},"headers":[],"relativePath":"blogs/Web/github/githubActions.md","filePath":"blogs/Web/github/githubActions.md","lastUpdated":1719131442000}'),r={name:"blogs/Web/github/githubActions.md"},o=l(`<h1 id="博客搭建-一、vuepress-github-actions自动构建并发布" tabindex="-1">博客搭建 | 一、vuepress+GitHub Actions自动构建并发布 <a class="header-anchor" href="#博客搭建-一、vuepress-github-actions自动构建并发布" aria-label="Permalink to &quot;博客搭建 | 一、vuepress+GitHub Actions自动构建并发布&quot;">​</a></h1><h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>当我们使用vuepress搭建好属于自己风格的博客，我们需要重新打包并放在GitHub或者自己的私服上，但是当我们一旦更新博客，我们便需要重新打包上传，这般繁琐并不适合常态化的更新博客，于是便有了将打包，上传，部署进行自动化的需求</p></div><h2 id="github-actions" tabindex="-1">GitHub Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;GitHub Actions&quot;">​</a></h2><p>GitHub Actions 是 GitHub 的持续集成服务，于2018年10月推出。官方还推出了相关插件库市场，可以直接使用他人写好的插件，如果你想详细了解GitHub Actions 请参考阮一峰老师的博客<a href="http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html" target="_blank" rel="noreferrer">GitHub Actions入门</a>。</p><p>使用Github Actions我们可以实现：</p><ol><li>监听git push 自动打包</li><li>分离博客源码和打包后代码</li><li>自动部署发布</li></ol><p>简单来说，它的作用便是，当我们将新博客push到仓库中，后续的打包发布都不需要我们去管，其次，为了更方便对博客文章进行管理，我将博客源码（私有）和部署博客（公开）分别放在两个仓库中。接下来便是实现方式。</p><h2 id="github-actions配置" tabindex="-1">GitHub Actions配置 <a class="header-anchor" href="#github-actions配置" aria-label="Permalink to &quot;GitHub Actions配置&quot;">​</a></h2><p>在博客源码仓库中，选择Actions,点击Set up this workflow <img src="https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/GitHubActions_1.png" alt="alt actions_1"></p><h3 id="配置actions" tabindex="-1">配置Actions <a class="header-anchor" href="#配置actions" aria-label="Permalink to &quot;配置Actions&quot;">​</a></h3><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Automatic blog update</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 该Action的名字</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># on:何时触发该事件.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 在push或pull请求事件时触发工作流，但只针对主分支</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  pull_request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 允许从Actions选项卡手动运行此工作流</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 工作流运行由一个或多个jobs组成，这些job可以按顺序或并行运行</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 此工作流包含一个名为“build-deploy”的job。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build-deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 改job运行于什么虚拟机上</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Ubuntu-20.04</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # steps表示将作为job一部分执行的一系列任务</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@master</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 切换分支到master</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">         fetch-depth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Use Node.js 12.x</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #使用nodejs 12.x版本</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;12.x&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">install and build</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #安装以来并打包，执行的是项目我们定义的命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install &amp;&amp; npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deploy</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #部署</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">peaceiris/actions-gh-pages@v3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #和上面一样，这里使用的是他人写好的插件库，作用是发布到其他仓库中或者其他分支上，想要具体了解可以在插件库中搜索</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          deploy_key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.BLOG }}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # key</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          external_repository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hahaxiaowai/hahaxiaowai.github.io</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #推送到该仓库中，地址格式为github名称/仓库名</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          publish_branch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">master</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #分支名</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          publish_dir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docs/.vuepress/dist</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #要推送的内容（打包后的博客文件夹）</span></span></code></pre></div><p>配置好之后commit即可。</p><h3 id="deploy-key" tabindex="-1">deploy_key <a class="header-anchor" href="#deploy-key" aria-label="Permalink to &quot;deploy_key&quot;">​</a></h3><p>配置过程中容易出错的便是deploy_key的配置,设置deploy_key的目的是获取push权限，并且不被其他人所见。接下来讲解如何设置deploy_key</p>`,15),c=s("li",null,[i("在cmd中执行 ssh-keygen -t rsa -C "),s("a",{href:"mailto:yourname@youremail.com",target:"_blank",rel:"noreferrer"},"yourname@youremail.com")],-1),d=s("li",null,"生成了两个文件 xx(私有) 和 xx.pub(公有)",-1),E=s("img",{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/GitHubActions_3.png",alt:"alt actions_2"},null,-1),g=s("img",{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/GitHubActions_4.png",alt:"alt actions_3"},null,-1),y=s("li",null,"打开博客源码所在仓库的Settings,选择Secrets,与添加Deploy_key相仿，选择添加新的Secret，添加名称（建议与deploy_key相同），将xx(私有)的内容复制到文本框，最后选择Add Secret",-1),u=s("li",null,"设置deploy_key， secrets.BLOG 其中BLOG为Secrets中我们设置的名称",-1),b=l('<h3 id="验证调试" tabindex="-1">验证调试 <a class="header-anchor" href="#验证调试" aria-label="Permalink to &quot;验证调试&quot;">​</a></h3><p>当我们commit之后，actions会自动执行一遍该命令，我们可以在Actions选项卡中查看执行情况，如果有报错，你可以根据具体报错进行调整修改。 <img src="https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/GitHubActions_5.png" alt="alt actions_3"></p><h2 id="结束语" tabindex="-1">结束语 <a class="header-anchor" href="#结束语" aria-label="Permalink to &quot;结束语&quot;">​</a></h2><ol><li>综上便完成了自动部署，如果你的博客actions通过后没有自动运行起来，则还需要设置一下部署博客（公开）的仓库GitHub Pages,这里不做阐述</li><li>如果你不想将博客源码私有化，peaceiris/actions-gh-pages@v3 这个库也同样可以实现，如果你想将博客部署到私服上，也可以通过GitHub Actions去实现，不过需要使用相应的插件库</li></ol><p><a href="http://blog.nighttea.space/blogs/Web/github/githubActions2.html" target="_blank" rel="noreferrer">【博客搭建】二、GitHub Actions部署至Gitee</a></p>',5);function A(_,D,m,F,x,f){const a=e("font");return k(),p("div",null,[o,s("ol",null,[c,d,s("li",null,[i("打开"),n(a,{color:"red"},{default:t(()=>[i("external_repository所设置仓库的Settings")]),_:1}),i("，也就是部署博客（公开）的仓库,选择Deploy_keys>Add depoly_key "),E,i(" 为了方便分辩，我将名称设置为BLOG,再将xx.pub(公有)的内容复制到文本框中，"),n(a,{color:"red"},{default:t(()=>[i("勾选Allow write access(写入权限)")]),_:1}),i("最后选择Add Key "),g]),y,u]),b])}const B=h(r,[["render",A]]);export{G as __pageData,B as default};