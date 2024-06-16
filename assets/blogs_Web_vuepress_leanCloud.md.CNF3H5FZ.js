import{_ as a,c as e,o as l,a7 as r}from"./chunks/framework.B8wp6KFe.js";const _=JSON.parse('{"title":"博客搭建 | 三、LeanCloud 评论系统","description":"","frontmatter":{"title":"博客搭建 | 三、LeanCloud 评论系统","date":"2021-09-30 17:19:00","categories":["web"],"tags":["vuepress","leanCloud"]},"headers":[],"relativePath":"blogs/Web/vuepress/leanCloud.md","filePath":"blogs/Web/vuepress/leanCloud.md","lastUpdated":1718505716000}'),t={name:"blogs/Web/vuepress/leanCloud.md"},n=r('<h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>在使用一段时间lc评论系统后，想起博客一直没有后台评论通知功能，于是查了一些资料，踩了一些坑，终于完善了评论系统。</p><p>本文会略过很多过程，只说坑的部分，如果是准备搭建评论系统的同学，按着下面所推荐的官方文档走一遍就OK啦。</p><p><strong>非正经教程，仅针对问题给出解决方法。</strong></p><h2 id="使用-valine-leancloud" tabindex="-1">使用 Valine + leanCloud <a class="header-anchor" href="#使用-valine-leancloud" aria-label="Permalink to &quot;使用 Valine + leanCloud&quot;">​</a></h2><p>此处略，配置Valine的过程:<a href="https://vuepress-theme-reco.recoluan.com/views/plugins/comments.html" target="_blank" rel="noreferrer">Valine</a>,看Valine部分就好</p><p>创建leanCloud的过程： <a href="https://valine.js.org/quickstart.html" target="_blank" rel="noreferrer">leanCloud</a></p><p>lc分为国际版和国内版，国际版不需要身份证验证，国内需要，其他大差不差了。</p><h2 id="配置部署valine-admin" tabindex="-1">配置部署Valine-Admin <a class="header-anchor" href="#配置部署valine-admin" aria-label="Permalink to &quot;配置部署Valine-Admin&quot;">​</a></h2><p>最后一步，也是坑最多的一步，我的建议是按照这个<a href="https://github.com/DesertsP/Valine-Admin" target="_blank" rel="noreferrer">文档</a>自己先来一遍，如果成功没问题了，那么恭喜你，如果中间出现问题，回来看看我的方法是否能够帮到你。</p><h3 id="_1-smtp-pass-配置邮箱密码-部署后启动报错-smtp邮箱配置异常" tabindex="-1">1. SMTP_PASS 配置邮箱密码（部署后启动报错：SMTP邮箱配置异常） <a class="header-anchor" href="#_1-smtp-pass-配置邮箱密码-部署后启动报错-smtp邮箱配置异常" aria-label="Permalink to &quot;1. SMTP_PASS 配置邮箱密码（部署后启动报错：SMTP邮箱配置异常）&quot;">​</a></h3><p>我使用的是QQ邮箱，首先需要给QQ邮箱设置独立密码，之后进入邮箱，选择设置-账号页面</p><p><img src="https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/leanCloud1.jpg" alt="leanCloud1"> 下滑看到下面这个页面，将POP3/SMTP服务打开，手机验证之后，会有一个授权码，将它复制到SMTP_PASS设置中。 <img src="https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/leanCloud2.jpg" alt="leanCloud2"> 如果是部署后报错，那么设置后重启服务，看看是否报错，如果仍然报错，则手机重新验证，获取新的授权码，再设置一遍。</p><h3 id="_2-admin-url-二级域名设置-用于自动唤醒" tabindex="-1">2. ADMIN_URL 二级域名设置（用于自动唤醒） <a class="header-anchor" href="#_2-admin-url-二级域名设置-用于自动唤醒" aria-label="Permalink to &quot;2. ADMIN_URL 二级域名设置（用于自动唤醒）&quot;">​</a></h3><p>官网上这个是选填项，我建议必须填上吧，大多数人都是使用的免费的开发版，自动唤醒还是有必要的。在你绑定域名后，在下方会出现一个lc的二级域名，我们需要设置的就是这个。 <img src="https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/leanCloud3.jpg" alt="leanCloud3"></p><h3 id="_3-定时任务时间设置" tabindex="-1">3. 定时任务时间设置 <a class="header-anchor" href="#_3-定时任务时间设置" aria-label="Permalink to &quot;3. 定时任务时间设置&quot;">​</a></h3><p>因为使用的是UTC-0 所以将官网教程的两个定时任务改为 0 */30 0-23 * * ?和 0 0 0 * * ? 但是由于体验版有强制休眠，建议将时间修改为早上9点到晚上22:59</p><h3 id="_4-博客通知模板" tabindex="-1">4. 博客通知模板 <a class="header-anchor" href="#_4-博客通知模板" aria-label="Permalink to &quot;4. 博客通知模板&quot;">​</a></h3><p>这一步按着官网来就行，需要注意的是，通知博主和通知其他人的模板需要分开设置，<strong>里面的环境变量并不相同</strong>。</p><h3 id="_5-因流控原因" tabindex="-1">5. 因流控原因... <a class="header-anchor" href="#_5-因流控原因" aria-label="Permalink to &quot;5. 因流控原因...&quot;">​</a></h3><p>体验版lc有强制休眠的设置，24小时内运行了18个小时则会休眠,实测时间更短，无法持续运行18个小时。</p><p>实测几天后，发现几遍将定时任务关闭以后，仍然会自启，特别是在凌晨0点到早上八点这段时间，这就导致本该在休眠的时间段运行，正常的时间段又因为流控问题停止运行。或许是我设置（理解）的不对吧。</p><h3 id="_6-自唤醒任务执行成功-响应状态码为-undefined" tabindex="-1">6. 自唤醒任务执行成功，响应状态码为: undefined <a class="header-anchor" href="#_6-自唤醒任务执行成功-响应状态码为-undefined" aria-label="Permalink to &quot;6. 自唤醒任务执行成功，响应状态码为: undefined&quot;">​</a></h3><p>这句话应该不是报错，目前并未发现会有什么影响，只是返回状态是undefined</p><h2 id="评论的配置项" tabindex="-1">评论的配置项 <a class="header-anchor" href="#评论的配置项" aria-label="Permalink to &quot;评论的配置项&quot;">​</a></h2><p>文章的最后，重新讲一下评论的配置项，其实Valine的评论系统功能还是很丰富的，不过需要我们花时间学习一下评论的配置项，这是<a href="https://valine.js.org/configuration.html" target="_blank" rel="noreferrer">官方API</a>。</p><p>在这里推荐几个配置，其他的按需求在官网上找字段吧。</p><ol><li>requiredFields 评论是必填的字段（昵称，邮箱，网址），我设置了评论通知，所以必填邮箱</li><li>meta 评论可填字段（昵称，邮箱，网址），我设置了昵称和邮箱，将网址去掉了</li><li>emojiCDN 表情来源 有需求可以改成其他的（如B站）,不过要相应的设置emojiMaps</li></ol><p>建议将官方文档读一下，还可以<a href="https://valine.js.org/avatar.html" target="_blank" rel="noreferrer">设置评论的头像</a>， 如果有想用B站表情的，请参考<a href="https://github.com/hahaxiaowai/bilbilEmoji" target="_blank" rel="noreferrer">这个仓库</a>,里面有不同主题的B站表情包，以及相应的配置博客的keyValue文件。</p><p>如果想体验一下这套评论系统，欢迎到我的博客来尝试~</p>',30),o=[n];function i(s,h,d,p,u,c){return l(),e("div",null,o)}const b=a(t,[["render",i]]);export{_ as __pageData,b as default};
