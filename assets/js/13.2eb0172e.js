(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{505:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("当我们使用vuepress搭建好属于自己风格的博客，我们需要重新打包并放在GitHub或者自己的私服上，但是当我们一旦更新博客，我们便需要重新打包上传，这般繁琐并不适合常态化的更新博客，于是便有了将打包，上传，部署进行自动化的需求")])]),a("h3",{attrs:{id:"github-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions"}},[t._v("#")]),t._v(" GitHub Actions")]),t._v(" "),a("p",[t._v("GitHub Actions 是 GitHub 的持续集成服务，于2018年10月推出。官方还推出了相关插件库市场，可以直接使用他人写好的插件，如果你想详细了解GitHub Actions 请参考阮一峰老师的博客"),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions入门"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("使用Github Actions我们可以实现：")]),t._v(" "),a("ol",[a("li",[t._v("监听git push 自动打包")]),t._v(" "),a("li",[t._v("分离博客源码和打包后代码")]),t._v(" "),a("li",[t._v("自动部署发布")])]),t._v(" "),a("p",[t._v("简单来说，它的作用便是，当我们将新博客push到仓库中，后续的打包发布都不需要我们去管，其次，为了更方便对博客文章进行管理，我将博客源码（私有）和部署博客（公开）分别放在两个仓库中。接下来便是实现方式。")]),t._v(" "),a("h3",{attrs:{id:"github-actions配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-actions配置"}},[t._v("#")]),t._v(" GitHub Actions配置")]),t._v(" "),a("p",[t._v("在博客源码仓库中，选择Actions,点击Set up this workflow\n"),a("img",{attrs:{src:"/docsImages/web/GitHubActions_1.png",alt:"alt actions_1"}})]),t._v(" "),a("h4",{attrs:{id:"配置actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置actions"}},[t._v("#")]),t._v(" 配置Actions")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Automatic blog update "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 该Action的名字")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# on:何时触发该事件. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在push或pull请求事件时触发工作流，但只针对主分支")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许从Actions选项卡手动运行此工作流")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflow_dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工作流运行由一个或多个jobs组成，这些job可以按顺序或并行运行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此工作流包含一个名为“build-deploy”的job。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build-deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改job运行于什么虚拟机上")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.04")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# steps表示将作为job一部分执行的一系列任务")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支到master")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetch-depth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Use Node.js 12.x  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#使用nodejs 12.x版本")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1 \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12.x'")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" install and build "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装以来并打包，执行的是项目我们定义的命令")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm install "),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("&&")]),t._v(" npm run build\n        \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#部署")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" peaceiris/actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v3 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#和上面一样，这里使用的是他人写好的插件库，作用是发布到其他仓库中或者其他分支上，想要具体了解可以在插件库中搜索")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy_key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.BLOG "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# key")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external_repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hahaxiaowai/hahaxiaowai.github.io "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#推送到该仓库中，地址格式为github名称/仓库名")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#分支名")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#要推送的内容（打包后的博客文件夹）")]),t._v("\n       \n")])])]),a("p",[t._v("配置好之后commit即可。")]),t._v(" "),a("h4",{attrs:{id:"deploy-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-key"}},[t._v("#")]),t._v(" deploy_key")]),t._v(" "),a("p",[t._v("配置过程中容易出错的便是deploy_key的配置,设置deploy_key的目的是获取push权限，并且不被其他人所见。接下来讲解如何设置deploy_key")]),t._v(" "),a("ol",[a("li",[t._v("在cmd中执行 ssh-keygen -t rsa -C  yourname@youremail.com")]),t._v(" "),a("li",[t._v("生成了两个文件 xx(私有) 和 xx.pub(公有)")]),t._v(" "),a("li",[t._v("打开"),a("font",{attrs:{color:"yellow"}},[t._v("external_repository所设置仓库的Settings")]),t._v("，也就是部署博客（公开）的仓库,选择Deploy_keys>Add depoly_key\n"),a("img",{attrs:{src:"/docsImages/web/GitHubActions_3.png",alt:"alt actions_2"}}),t._v("\n为了方便分辩，我将名称设置为BLOG,再将xx.pub(公有)的内容复制到文本框中，"),a("font",{attrs:{color:"yellow"}},[t._v("勾选Allow write access(写入权限)")]),t._v("最后选择Add Key\n"),a("img",{attrs:{src:"/docsImages/web/GitHubActions_4.png",alt:"alt actions_3"}})],1),t._v(" "),a("li",[t._v("打开博客源码所在仓库的Settings,选择Secrets,与添加Deploy_key相仿，选择添加新的Secret，添加名称（建议与deploy_key相同），将xx(私有)的内容复制到文本框，最后选择Add Secret")]),t._v(" "),a("li",[t._v("设置deploy_key， secrets.BLOG  其中BLOG为Secrets中我们设置的名称")])]),t._v(" "),a("h4",{attrs:{id:"验证调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证调试"}},[t._v("#")]),t._v(" 验证调试")]),t._v(" "),a("p",[t._v("当我们commit之后，actions会自动执行一遍该命令，我们可以在Actions选项卡中查看执行情况，如果有报错，你可以根据具体报错进行调整修改。\n"),a("img",{attrs:{src:"/docsImages/web/GitHubActions_5.png",alt:"alt actions_3"}})]),t._v(" "),a("h3",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("ol",[a("li",[t._v("综上便完成了自动部署，如果你的博客actions通过后没有自动运行起来，则还需要设置一下博客部署（公开）的仓库GitHub Pages,这里不做阐述")]),t._v(" "),a("li",[t._v("如果你不想将博客源码私有化，peaceiris/actions-gh-pages@v3 这个库也同样可以实现，如果你想将博客部署到私服上，也可以通过GitHub Actions去实现，不过需要使用相应的插件库")])])])}),[],!1,null,null,null);s.default=e.exports}}]);