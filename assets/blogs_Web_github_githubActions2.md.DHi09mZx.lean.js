import{_ as i,c as a,a6 as n,o as t}from"./chunks/framework.B6dxnelD.js";const g=JSON.parse('{"title":"博客搭建 | 二、GitHub Actions部署至Gitee","description":"","frontmatter":{"title":"博客搭建 | 二、GitHub Actions部署至Gitee","date":"2021-03-28 22:11:00","categories":["web"],"tags":["github"]},"headers":[],"relativePath":"blogs/Web/github/githubActions2.md","filePath":"blogs/Web/github/githubActions2.md","lastUpdated":1729653278000}'),h={name:"blogs/Web/github/githubActions2.md"};function e(l,s,p,k,r,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="博客搭建-二、github-actions部署至gitee" tabindex="-1">博客搭建 | 二、GitHub Actions部署至Gitee <a class="header-anchor" href="#博客搭建-二、github-actions部署至gitee" aria-label="Permalink to &quot;博客搭建 | 二、GitHub Actions部署至Gitee&quot;">​</a></h1><h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>在上一篇博客搭建中，我使用了GitHub Actions实现了将博客自动部署发布至GitHub上，但是在使用过一段时间后，发现GitHub访问速度缓慢，特别是最近，如果不适用vpn的话可能访问不了GitHub，所以打算在原有的部署方案中，增加部署至Gitee上，这样国内访问速度便有了保证。</p></div><p>如果你没有看过上一篇内容，请点击<a href="http://blog.nighttea.space/blogs/Web/github/githubActions.html" target="_blank" rel="noreferrer">这里</a></p><h2 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-label="Permalink to &quot;步骤&quot;">​</a></h2><p>基本原理还是使用GitHub Actions,再部署到GitHub后，新增两个step：</p><ol><li>同步代码至gitee</li><li>重新部署pages</li></ol><p>第一步我所同步的是编译后的代码，保证仓库代码同步，由于Gitee没有自动更新pages,所以在仓库代码更新后，我们还需要对其进行更新。</p><h3 id="初始化gitee博客仓库" tabindex="-1">初始化Gitee博客仓库 <a class="header-anchor" href="#初始化gitee博客仓库" aria-label="Permalink to &quot;初始化Gitee博客仓库&quot;">​</a></h3><p>由于我们要将一份代码部署至两个不同网址下，vuepress的基础路径十分重要，路径不对会导致打包后的静态文件路径不对，在GitHub中，我的基础路径是:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https://hahaxiaowai.github.io/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span></code></pre></div><p>所以仓库名称非常重要，在Gitee上依然要保证这样的仓库命名规范：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在GitHub上仓库命名规范</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yourname.github.io</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在Gitee上仓库命名规范</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yourname</span></span></code></pre></div><p>创建时，可以顺便把GitHub仓库的代码拉下来，然后选择 服务&gt;Gitee Pages 配置一下博客并启动，这里不详细展开。</p><h3 id="增加配置" tabindex="-1">增加配置 <a class="header-anchor" href="#增加配置" aria-label="Permalink to &quot;增加配置&quot;">​</a></h3><ol><li>在Gitee中，点击右上角头像&gt;设置&gt;SSH公钥，同GitHub上一样，设置一个ssh key，这里推荐使用同一个key（BLOG).</li><li>在Gitee中，点击右上角头像&gt;设置，进行第三方账号绑定，将微信绑定(我也是拒绝的，但是后面会用到，没有办法)。</li><li>在上一篇文章中，我们在源代码 Settings&gt;Secrets 中设置了BlOG变量，这一次我们再增加GITEE变量，变量内容为Gitee的密码，设置好后，我们进入正题，设置Actions.</li></ol><h3 id="配置actions" tabindex="-1">配置Actions <a class="header-anchor" href="#配置actions" aria-label="Permalink to &quot;配置Actions&quot;">​</a></h3><p>配置文件将省略上一篇文章的配置内容，只将结构留下</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Automatic blog update</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 该Action的名字</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># on:何时触发该事件.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 工作流运行由一个或多个jobs组成，这些job可以按顺序或并行运行</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 此工作流包含一个名为“build-deploy”的job。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build-deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # steps表示将作为job一部分执行的一系列任务</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@master</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 切换分支到master</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">         fetch-depth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Use Node.js 12.x</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #使用nodejs 12.x版本</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">install and build</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deploy</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #部署至GitHub</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Sync to Gitee</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 同步到Gitee</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">wearerequired/git-mirror-action@d5724af3876c8fdfdb59312c99df0d11b769ca8c</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 注意在 Settings-&gt;Secrets 配置 GITEE_RSA_PRIVATE_KEY</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          SSH_PRIVATE_KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.BLOG }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 注意替换为你的 GitHub 公开仓库地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          source-repo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git@github.com:hahaxiaowai/hahaxiaowai.github.io.git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 注意替换为你的 Gitee 目标仓库地址</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          destination-repo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">git@gitee.com:hahaxiaowai/hahaxiaowai.git</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deploy2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #部署到gitee</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yanglbme/gitee-pages-action@v1.3.2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          deploy_key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.BLOG }}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # key</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          gitee-username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hahaxiaowai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          gitee-password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.GITEE }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          gitee-repo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hahaxiaowai/hahaxiaowai</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #推送到该仓库中，地址格式为gitee名称/仓库名</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          branch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">master</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #分支名</span></span></code></pre></div><p>如果你想了解更多关于这个插件的信息，请点击<a href="https://github.com/marketplace/actions/gitee-pages-action" target="_blank" rel="noreferrer">这里</a></p><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><p>第一次运行时，大概率是失败的，提示你要验证微信登录，如果你提前绑定了微信，应该是没问题的。</p><p><a href="http://blog.nighttea.space/blogs/Web/github/githubActions3.html" target="_blank" rel="noreferrer">博客搭建 | 四、GitHub Actions ssh-deploy部署至阿里云</a></p>`,23)]))}const o=i(h,[["render",e]]);export{g as __pageData,o as default};
