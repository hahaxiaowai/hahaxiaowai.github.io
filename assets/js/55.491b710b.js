(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{559:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),a("p",[t._v("初次接触UE编程，很多问题都不清楚，做此积累")]),t._v(" "),a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("h3",{attrs:{id:"ue集成gdal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ue集成gdal"}},[t._v("#")]),t._v(" UE集成GDAL")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/panpan143/article/details/126705294")]),t._v(" "),a("p",[t._v("编译时会有C的文件报错，不让编译，可以选择删掉这部分文件，目前还看到有什么影响")]),t._v(" "),a("h3",{attrs:{id:"vs-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vs-设置"}},[t._v("#")]),t._v(" vs 设置")]),t._v(" "),a("p",[t._v("https://zhuanlan.zhihu.com/p/266199524\n根据自己理解酌情设置，并不是所有的都需要设置")]),t._v(" "),a("h3",{attrs:{id:"fstring-转-const-char"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fstring-转-const-char"}},[t._v("#")]),t._v(" FString 转 const char*")]),t._v(" "),a("p",[t._v("TCHAR_TO_UTF8")]),t._v(" "),a("h3",{attrs:{id:"其他类型转fstring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他类型转fstring"}},[t._v("#")]),t._v(" 其他类型转FString")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//int\nFString NewString = FString::FromInt(MyInt);\n//float //double    ----只能精确到小数点后6位\nFString VeryCleanString = FString::SanitizeFloat(MyFloat);\n//bool\nFString MyFString = MyBool?TEXT("true") :TEXT("false");\n//FVector\nFString MyFString = MyVector.ToString();\n//FVector2D\nFString MyFString = MyVector2D.ToString();\n//FRotator\nFString MyFString = MyRotator.ToString();\n//FLinearColor\nFString MyFString = MyLinearColor.ToString();\n//UObject\nFString MyFString = (MyObj != NULL) ? MyObj->GetName() : FString(TEXT("None"));\n//FMatrix\nFMatrix rotationMatrix(FPlane(0,1,2,3),FPlane(4,5,6,7),FPlane(8,9,10,11),FPlane(12,13,14,15));\nFString str = rotationMatrix.ToString();\n')])])]),a("h3",{attrs:{id:"手写归一化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写归一化"}},[t._v("#")]),t._v(" 手写归一化")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  FVector3f targetVector = FVector3f(0.5,0.5，0.5);\n  float targetLength = sqrt(targetVector.X * targetVector.X + targetVector.Y * targetVector.Y + targetVector.Z * targetVector.Z);\n  targetLength = 1 / targetLength;\n  targetVector.X *= targetLength;\n  targetVector.Y *= targetLength;\n  targetVector.Z *= targetLength;\n")])])]),a("h3",{attrs:{id:"tmap-获取值问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tmap-获取值问题"}},[t._v("#")]),t._v(" TMap 获取值问题")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("TMap"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FString"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nkv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nFString a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A")]),t._v("\nFString b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错,报错原因是空指针问题")]),t._v("\nFString c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//报错,报错原因是返回类型不是FString,类型不一致。const char * 与 ValueType *")]),t._v("\nFString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不再报错 Empty")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"窗口化时标题设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#窗口化时标题设置"}},[t._v("#")]),t._v(" 窗口化时标题设置")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("编辑>项目设置")]),t._v(" 中搜索 "),a("code",[t._v("标题")]),t._v("，出现两个设置，"),a("code",[t._v("项目显示标题")]),t._v("和"),a("code",[t._v("项目调试标题信息")]),t._v(" 前者可以写系统名称，后者写版本号或者其他，如果不写他会显示其他内容，所以最好不要让它为空。")]),t._v(" "),a("h3",{attrs:{id:"打包后的窗口化和全屏化设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包后的窗口化和全屏化设置"}},[t._v("#")]),t._v(" 打包后的窗口化和全屏化设置")]),t._v(" "),a("p",[t._v("试过一些方法，最靠谱的是在 "),a("code",[t._v("Config")]),t._v("文件夹下创建"),a("code",[t._v("DefaultGameUserSetting.ini")]),t._v(" 文件，如果有直接覆盖相应属性即可")]),t._v(" "),a("p",[t._v("全屏写法：")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[/Script/Engine.GameUserSettings]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FullscreenMode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Version")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("5")]),t._v("\n")])])]),a("p",[t._v("窗口写法：")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[/Script/Engine.GameUserSettings]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("bUseVSync")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("False")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ResolutionSizeX")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("1920")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ResolutionSizeY")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("1080")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LastUserConfirmedResolutionSizeX")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("1920")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LastUserConfirmedResolutionSizeY")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("1080")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WindowPosX")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("-1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WindowPosY")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("-1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FullscreenMode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LastConfirmedFullscreenMode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Version")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PreferredFullscreenMode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("2")]),t._v("\n")])])]),a("h3",{attrs:{id:"设置窗口全屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置窗口全屏"}},[t._v("#")]),t._v(" 设置窗口全屏")]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 蓝图写法\n// 获取用户游戏设置\nGetGameUserSetting // 返回 gameUserSetting对象引用\n// 设置全屏模式\nSetFullscreenMode // 有三个枚举类型：全屏、窗口全屏、窗口，选择窗口全屏\n// 获取桌面分辨率\nGetDesktopResolution //gameUserSetting的方法，返回桌面的分辨率\n// 设置屏幕分辨率\nSetScreenResolution // gameUserSetting的方法，参数为上一步获取的分辨率\n// 应用设置\nApplySettings // gameUserSetting的方法，check for command line overrides打勾\n\n\n")])])]),a("p",[t._v("这么写会生效，但是打包后该配置文件存在哪里还不清楚，打包目录下有同名文件，但是配置内容并不相同")]),t._v(" "),a("h3",{attrs:{id:"获取机器码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取机器码"}},[t._v("#")]),t._v(" 获取机器码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("FPlatformMisc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetMachineId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"http请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http请求"}},[t._v("#")]),t._v(" http请求")]),t._v(" "),a("ol",[a("li",[t._v("在.h、"),a("code",[t._v("RPipeCreatorUnreal.Build.cs")]),t._v("中引入相关模块")])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// .h\n#include "HttpModule.h"\n#include "Interfaces/IHttpResponse.h"\n')])])]),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('PublicDependencyModuleNames.AddRange(new string[] { ... "HTTP" });\n')])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("声明变量和枚举")])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FPromise, const FString&, ResponseString);\n// 枚举 get post\nUENUM(BlueprintType)\nenum class RequestType:uint8\n{\n\tGET UMETA(DisplayName = "GET"),\n\tPOST UMETA(DisplayName = "POST"),\n};\n')])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("请求函数")])]),t._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// 开始请求\nvoid APipeMenu::httpRequest(const FString &u, RequestType type, TArray<FString> requestBody)\n{\n  // requset\n\tTSharedRef<IHttpRequest> Request = FHttpModule::Get().CreateRequest();\n  // 设置回调，callback是自己创建的函数\n\tRequest->OnProcessRequestComplete().BindUObject(this, &APipeMenu::callback);\n  // 设置请求头\n\tRequest->SetHeader(TEXT("Content-Type"), TEXT("application/json; charset=utf-8"));\n  // 设置请求地址\n\tRequest->SetURL(u);\n  // post get\n\tRequest->SetVerb(type == RequestType::GET ? TEXT("GET") : TEXT("POST"));\n  // 如果是post需要设置参数\n\tif (type == RequestType::POST)\n\t{\n\t\tTSharedPtr<FJsonObject> JsonObject = MakeShareable(new FJsonObject);\n    // requsetBody 是传进来的参数，为[参数名，参数值，参数名，参数值...]\n    // 这里因人而异，能把参数写进去就行\n\t\tfor (int i = 0; i < requestBody.Num(); i += 2)\n\t\t{\n\t\t\tJsonObject->SetStringField(requestBody[i], requestBody[i + 1]);\n\t\t}\n\n\t\t// Convert the JSON object to a string\n\t\tFString RequestBody;\n\t\tTSharedRef<TJsonWriter<>> Writer = TJsonWriterFactory<>::Create(&RequestBody);\n\t\tFJsonSerializer::Serialize(JsonObject.ToSharedRef(), Writer);\n    // 设置请求体\n\t\tRequest->SetContentAsString(RequestBody);\n\t}\n  // 发出请求\n\tRequest->ProcessRequest();\n}\n// 请求回到\nvoid APipeMenu::callback(FHttpRequestPtr request, FHttpResponsePtr response, bool bSuccess)\n{\n  // 是否请求成功\n\tif (bSuccess && response.IsValid())\n\t{\n    // 成功后将返回内容作为字符串存入promise，类似与js中成功回调\n\t\tFString content = response->GetContentAsString();\n\t\tpromise.Broadcast(content);\n\t}\n}\n')])])]),a("h3",{attrs:{id:"打开文件-夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开文件-夹"}},[t._v("#")]),t._v(" 打开文件(夹)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件")]),t._v("\n\tTArray"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FString"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" OutFiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tTArray"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FString"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选中文件路径")]),t._v("\n\tFString fileType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shape (*.shp)|*.shp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过滤文件类型")]),t._v("\n\tFString defaultPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FPaths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertRelativePathToFull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FPaths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ProjectDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件选择窗口默认开启路径")]),t._v("\n\tIDesktopPlatform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("DesktopPlatform "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FDesktopPlatformModule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 找到父窗体，如果不设置，那么在选择文件后会失去焦点")]),t._v("\n\tDesktopPlatform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OpenFileDialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FSlateApplication"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindBestParentWindowHandleForDialogs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nullptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shp导入"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("fileType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EFileDialogFlags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("None"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tFString uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\turi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件夹")]),t._v("\n\tTArray"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FString"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" OutFiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TArray<FString> path;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t // 选中文件路径")]),t._v("\n\tFString path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tFString fileType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shape (*.shp)|*.shp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 过滤文件类型")]),t._v("\n\tFString defaultPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FPaths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConvertRelativePathToFull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FPaths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ProjectDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件选择窗口默认开启路径")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IDesktopPlatform *DesktopPlatform = FDesktopPlatformModule::Get();")]),t._v("\n\n\tFDesktopPlatformModule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OpenDirectoryDialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FSlateApplication"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindBestParentWindowHandleForDialogs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nullptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3dTile导出"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);