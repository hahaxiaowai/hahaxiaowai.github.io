import{_ as h,C as e,c as k,o as r,al as t,j as i,a,G as l,w as p}from"./chunks/framework.JA_jVa1h.js";const A=JSON.parse('{"title":"博客搭建 | 一、vuepress+GitHub Actions自动构建并发布","description":"","frontmatter":{"title":"博客搭建 | 一、vuepress+GitHub Actions自动构建并发布","date":"2021-01-05","categories":["web"],"tags":["github"]},"headers":[],"relativePath":"blogs/Web/github/githubActions.md","filePath":"blogs/Web/github/githubActions.md","lastUpdated":1743348223000}'),o={name:"blogs/Web/github/githubActions.md"};function d(E,s,g,y,c,u){const n=e("font");return r(),k("div",null,[s[12]||(s[12]=t("",15)),i("ol",null,[s[8]||(s[8]=i("li",null,[a("在cmd中执行 ssh-keygen -t rsa -C "),i("a",{href:"mailto:yourname@youremail.com",target:"_blank",rel:"noreferrer"},"yourname@youremail.com")],-1)),s[9]||(s[9]=i("li",null,"生成了两个文件 xx(私有) 和 xx.pub(公有)",-1)),i("li",null,[s[2]||(s[2]=a("打开")),l(n,{color:"red"},{default:p(()=>s[0]||(s[0]=[a("external_repository所设置仓库的Settings")])),_:1}),s[3]||(s[3]=a("，也就是部署博客（公开）的仓库,选择Deploy_keys>Add depoly_key ")),s[4]||(s[4]=i("img",{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/GitHubActions_3.png",alt:"alt actions_2"},null,-1)),s[5]||(s[5]=a(" 为了方便分辩，我将名称设置为BLOG,再将xx.pub(公有)的内容复制到文本框中，")),l(n,{color:"red"},{default:p(()=>s[1]||(s[1]=[a("勾选Allow write access(写入权限)")])),_:1}),s[6]||(s[6]=a("最后选择Add Key ")),s[7]||(s[7]=i("img",{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/GitHubActions_4.png",alt:"alt actions_3"},null,-1))]),s[10]||(s[10]=i("li",null,"打开博客源码所在仓库的Settings,选择Secrets,与添加Deploy_key相仿，选择添加新的Secret，添加名称（建议与deploy_key相同），将xx(私有)的内容复制到文本框，最后选择Add Secret",-1)),s[11]||(s[11]=i("li",null,"设置deploy_key， secrets.BLOG 其中BLOG为Secrets中我们设置的名称",-1))]),s[13]||(s[13]=t("",5))])}const D=h(o,[["render",d]]);export{A as __pageData,D as default};
