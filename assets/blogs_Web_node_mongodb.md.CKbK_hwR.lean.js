import{_ as t,c as a,o as n,j as e,a as o}from"./chunks/framework.BJd-zmx9.js";const f=JSON.parse('{"title":"mongodb","description":"","frontmatter":{"title":"mongodb","sidebarDepth":5,"date":"2021-10-10 18:12:00","categories":["nodejs","record"],"tags":["cli","vue","vite"],"isTimeLine":true,"publish":false},"headers":[],"relativePath":"blogs/Web/node/mongodb.md","filePath":"blogs/Web/node/mongodb.md"}'),s={name:"blogs/Web/node/mongodb.md"},d=e("h2",{id:"时区",tabindex:"-1"},[o("时区 "),e("a",{class:"header-anchor",href:"#时区","aria-label":'Permalink to "时区"'},"​")],-1),i=e("p",null,"默认存储的是ISO时间，实际上和时间戳一样，在3T里如果不设置时区的话会比当前时间少八个小时(东八区)，所以需要设置一下3T默认显示： Edit>Preference>General>local time zone to display date value in = Local time zone",-1),r=e("p",null,[o("在接口输出时需要使用"),e("code",null,"toLocaleTimeString()"),o("等类似方法将时间转成本地的")],-1),l=[d,i,r];function c(m,_,b,p,h,g){return n(),a("div",null,l)}const v=t(s,[["render",c]]);export{f as __pageData,v as default};
