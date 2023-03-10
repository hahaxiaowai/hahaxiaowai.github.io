(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{517:function(s,a,t){"use strict";t.r(a);var e=t(6),c=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[s._v("#")]),s._v(" 简述")]),s._v(" "),t("p",[s._v("对于用习惯vscode的我来说，使用vs十分笨拙，为了提高自己的开发效率，遂决定vscode配置C++的开发环境\n初次接触C++，很多问题都不清楚，做此积累")]),s._v(" "),t("h2",{attrs:{id:"配置mingw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置mingw"}},[s._v("#")]),s._v(" 配置MinGW")]),s._v(" "),t("p",[s._v("必须安装此环境，否则无法编译,以下为"),t("a",{attrs:{href:"https://code.visualstudio.com/docs/languages/cpp",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1),s._v("推荐方式")]),s._v(" "),t("h3",{attrs:{id:"msys2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msys2"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://www.msys2.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MSYS2"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("下载后，更改安装目录，然后等待安装即可，过程较慢安装\n"),t("img",{attrs:{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/c_vscode_01.png",alt:"图片1"}})]),s._v(" "),t("h3",{attrs:{id:"安装mingw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mingw"}},[s._v("#")]),s._v(" 安装MinGW")]),s._v(" "),t("p",[s._v("运行MSYS2终端，输入命令：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" pacman -S mingw-w64-ucrt-x86_64-gcc\n")])])]),t("p",[s._v("等待片刻，会打印出安装列表，询问你是否安装，输入y即可。")]),s._v(" "),t("p",[s._v("安装完成后输入命令：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc --version\n")])])]),t("p",[s._v("如果出现版本号，说明安装成功\n"),t("img",{attrs:{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/c_vscode_02.png",alt:"图片2"}})]),s._v(" "),t("h3",{attrs:{id:"gdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gdb"}},[s._v("#")]),s._v(" gdb")]),s._v(" "),t("p",[s._v("执行以下命令安装gdb，流程与上面一致")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pacman -S --needed base-devel mingw-w64-x86_64-toolchain\n")])])]),t("h3",{attrs:{id:"设置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置环境变量"}},[s._v("#")]),s._v(" 设置环境变量")]),s._v(" "),t("p",[s._v("windows搜索环境变量，在高级中点击环境变量，选中path，点击编辑，添加以下路径")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你没有更改安装目录，就是下面的路径，如果改了则按照你的路径填写")]),s._v("\nC:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("msys64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mingw64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin\n")])])]),t("p",[s._v("需要注意的是，官方只说添加环境变量到用户变量，保险起见我在系统变量中也添加了，随后重启电脑，cmd中输入")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc --version\ng++ --version\ngdb --version\n")])])]),t("p",[s._v("如果出现版本号，说明配置成功")]),s._v(" "),t("h2",{attrs:{id:"配置vscode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置vscode"}},[s._v("#")]),s._v(" 配置vscode")]),s._v(" "),t("h3",{attrs:{id:"安装插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[s._v("#")]),s._v(" 安装插件")]),s._v(" "),t("p",[s._v("打开vscode，搜索C/C++，安装插件\n"),t("img",{attrs:{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/c_vscode_03.png",alt:"图片3"}})]),s._v(" "),t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),t("p",[s._v("打开vscode，按下快捷键"),t("code",[s._v("ctrl+shift+p")]),s._v("，输入"),t("code",[s._v("C/C++:Edit Configurations (UI)")]),s._v("，打开配置文件\n"),t("img",{attrs:{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/c_vscode_04.png",alt:"图片4"}}),s._v("\n点击"),t("code",[s._v("Add Configuration")]),s._v("，选择"),t("code",[s._v("gcc")]),s._v("，然后点击"),t("code",[s._v("Add Configuration")]),s._v("，会自动添加配置文件\n"),t("img",{attrs:{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/c_vscode_05.png",alt:"图片5"}})]),s._v(" "),t("h3",{attrs:{id:"配置编译器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置编译器"}},[s._v("#")]),s._v(" 配置编译器")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("C_Cpp.default.compilerPath")]),s._v("中填写编译器路径，我的是"),t("code",[s._v("C:\\msys64\\mingw64\\bin\\gcc.exe")]),s._v(" "),t("img",{attrs:{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/c_vscode_06.png",alt:"图片6"}})]),s._v(" "),t("h3",{attrs:{id:"配置调试器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置调试器"}},[s._v("#")]),s._v(" 配置调试器")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("C_Cpp.default.configurationProvider")]),s._v("中填写调试器路径，我的是"),t("code",[s._v("C:\\msys64\\mingw64\\bin\\gdb.exe")]),s._v(" "),t("img",{attrs:{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/c_vscode_07.png",alt:"图片7"}})]),s._v(" "),t("h3",{attrs:{id:"配置编译选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置编译选项"}},[s._v("#")]),s._v(" 配置编译选项")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("C_Cpp.default.cStandard")]),s._v("中填写编译选项，我的是"),t("code",[s._v("c17")]),s._v(" "),t("img",{attrs:{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/c_vscode_08.png",alt:"图片8"}})]),s._v(" "),t("h3",{attrs:{id:"配置调试选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置调试选项"}},[s._v("#")]),s._v(" 配置调试选项")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("C_Cpp.default.cppStandard")]),s._v("中填写调试选项，我的是"),t("code",[s._v("c++17")]),s._v(" "),t("img",{attrs:{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/c_vscode_09.png",alt:"图片9"}})]),s._v(" "),t("h3",{attrs:{id:"配置头文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置头文件"}},[s._v("#")]),s._v(" 配置头文件")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("C_Cpp.default.includePath")]),s._v("中填写头文件路径，我的是"),t("code",[s._v("C:\\msys64\\mingw64\\include")]),s._v(" "),t("img",{attrs:{src:"https://hhxy-blog.oss-cn-zhangjiakou.aliyuncs.com/docs/web/c_vscode_10.png",alt:"图片10"}})]),s._v(" "),t("h3",{attrs:{id:"配置库文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置库文件"}},[s._v("#")]),s._v(" 配置库文件")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("C_Cpp.default.intelliSenseMode")]),s._v("中填写库文件路径，我的是"),t("code",[s._v("C:\\msys64\\mingw64\\lib")])])])}),[],!1,null,null,null);a.default=c.exports}}]);