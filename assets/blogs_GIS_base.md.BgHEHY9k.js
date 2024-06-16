import{_ as a,c as e,o as t,a7 as r}from"./chunks/framework.B8wp6KFe.js";const m=JSON.parse('{"title":"GIS常见问题 面试用","description":"","frontmatter":{"title":"GIS常见问题 面试用","date":"2022-02-16","categories":["GIS","记录"],"tags":["基础"]},"headers":[],"relativePath":"blogs/GIS/base.md","filePath":"blogs/GIS/base.md","lastUpdated":1718505716000}'),l={name:"blogs/GIS/base.md"},i=r('<h2 id="矢量瓦片与栅格瓦片的区别" tabindex="-1">矢量瓦片与栅格瓦片的区别 <a class="header-anchor" href="#矢量瓦片与栅格瓦片的区别" aria-label="Permalink to &quot;矢量瓦片与栅格瓦片的区别&quot;">​</a></h2><h3 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>矢量瓦片：将矢量数据分割成矢量要素描述文件存储在服务器端，再通过客户端渲染成指定样式。</p><p>栅格瓦片：将地图切割成无数大小相同的矩形栅格图片，由这些矩形栅格图片按照一定规则拼接成不同层级的地图显示。</p><h3 id="相同点" tabindex="-1">相同点 <a class="header-anchor" href="#相同点" aria-label="Permalink to &quot;相同点&quot;">​</a></h3><ol><li>金字塔模型分级</li><li>瓦片号（序列号）</li></ol><h3 id="不同点" tabindex="-1">不同点 <a class="header-anchor" href="#不同点" aria-label="Permalink to &quot;不同点&quot;">​</a></h3><ol><li>矢量瓦片为矢量数据文件，存储矢量信息和属性信息，为二进制文件</li><li>栅格瓦片存储为图片格式，不存在矢量和属性信息</li><li>矢量瓦片自身不带样式，是通过客户端指定样式进行渲染</li><li>栅格瓦片存在样式</li></ol><h3 id="优劣" tabindex="-1">优劣 <a class="header-anchor" href="#优劣" aria-label="Permalink to &quot;优劣&quot;">​</a></h3><ol><li>矢量瓦片比栅格瓦片小，切片、存储、传输、加载相对快一些，</li><li>矢量瓦片比栅格瓦片分辨率高（4096）</li><li>栅格瓦片比矢量瓦片对客户端的性能要求相对较小。</li></ol><p>参考：<a href="https://zhuanlan.zhihu.com/p/272203128" target="_blank" rel="noreferrer">1</a></p><h2 id="wfs-wms-wmts-区别" tabindex="-1">wfs wms wmts 区别 <a class="header-anchor" href="#wfs-wms-wmts-区别" aria-label="Permalink to &quot;wfs wms wmts 区别&quot;">​</a></h2><h3 id="描述-1" tabindex="-1">描述 <a class="header-anchor" href="#描述-1" aria-label="Permalink to &quot;描述&quot;">​</a></h3><ol><li>wms 网络地图服务，它是利用具有地理空间位置信息的数据制作地图，其中将地图定义为地理数据的可视化表现，能够根据用户的请求，返回相应的地图，包括PNG、GIF、JPEG等栅格形式，或者SVG或者WEB CGM等矢量形式。 一句话：只返回栅格数据（影像），不切瓦片。</li><li>wmts WMTS弥补了WMS不能提供分块地图的不足。WMS针对提供可定制地图的服务，是一个动态数据或用户定制地图（需结合SLD标准）的理想解决办法。WMTS牺牲了提供定制地图的灵活性，代之以通过提供静态数据（基础地图）来增强伸缩性，这些静态数据的范围框和比例尺被限定在各个图块内。一句话：栅格瓦片数据，切瓦片。</li><li>wfs 网络要素服务（WFS）支持用户在分布式的环境下通过HTTP对地理要素进行插入，更新，删除，检索和发现服务。该服务根据HTTP客户请求返回要素级的GML(Geography Markup Language、地理标识语言)数据，并提供对要素的增加、修改、删除等事务操作，是对Web地图服务的进一步深入。WFS通过OGC Filter构造查询条件，支持基于空间几何关系的查询，基于属性域的查询，当然还包括基于空间关系和属性域的共同查询。 一句话：能增删改</li></ol><h3 id="误区" tabindex="-1">误区 <a class="header-anchor" href="#误区" aria-label="Permalink to &quot;误区&quot;">​</a></h3><p>wms,wmts,可以获取指定点附近要素的信息，wfs,可以通过空间或属性进行查询。</p><h3 id="其他ogc标准服务" tabindex="-1">其他OGC标准服务 <a class="header-anchor" href="#其他ogc标准服务" aria-label="Permalink to &quot;其他OGC标准服务&quot;">​</a></h3><p>WCS 网络覆盖服务是面向空间影像数据，它将包含地理位置的地理空间数据作为&quot;覆盖（Coverage）&quot;在网上相互交换，如卫星影像、数字高程数据等栅格数据</p><p>WPS Web Processing Server（WPS）是新近推出的标准，它的功能其实我们已经耳熟能详了。Processing即ArcView中的GeoProcessing，诸如Union，Intersect等方法。WPS要做的就是暴露基于URL接口来实现客户端通过WebService对此类方法的调用、并返回数据。</p><p>参考: <a href="https://blog.csdn.net/qq_18298439/article/details/93329098" target="_blank" rel="noreferrer">1</a></p><h2 id="地理坐标系与投影坐标系的区别" tabindex="-1">地理坐标系与投影坐标系的区别 <a class="header-anchor" href="#地理坐标系与投影坐标系的区别" aria-label="Permalink to &quot;地理坐标系与投影坐标系的区别&quot;">​</a></h2><h3 id="描述-2" tabindex="-1">描述 <a class="header-anchor" href="#描述-2" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>地理坐标系统使用三维球面定义地球表面位置，以实现通过经纬度对地球表面点位引用的坐标系，参考平面为椭球面</p><p>投影坐标系统是定义在一个二维平面的坐标系统，使用基于xy值的坐标系统来描述地球上某个点所在的位置，是一种二维平面坐标。</p><h3 id="重点" tabindex="-1">重点 <a class="header-anchor" href="#重点" aria-label="Permalink to &quot;重点&quot;">​</a></h3><ol><li>投影分多类</li><li>web墨卡托投影与常规墨卡托投影的主要区别是把地球模拟为正球体，而非椭球体。</li></ol><p>参考：<a href="https://blog.csdn.net/liuxu841911548/article/details/78569519?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164499579316780366531384%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&amp;request_id=164499579316780366531384&amp;biz_id=0&amp;utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-78569519.pc_search_insert_es_download&amp;utm_term=%E7%9F%A2%E9%87%8F%E7%93%A6%E7%89%87&amp;spm=1018.2226.3001.4187" target="_blank" rel="noreferrer">1</a></p><h2 id="矢量数据与栅格数据结构的比较" tabindex="-1">矢量数据与栅格数据结构的比较 <a class="header-anchor" href="#矢量数据与栅格数据结构的比较" aria-label="Permalink to &quot;矢量数据与栅格数据结构的比较&quot;">​</a></h2><h3 id="矢量数据" tabindex="-1">矢量数据 <a class="header-anchor" href="#矢量数据" aria-label="Permalink to &quot;矢量数据&quot;">​</a></h3><p>数据存储量小 空间位置精度高 用网络连接法能完整描述拓扑关系 输出简单容易，绘图细腻、精确、美观 可对图形及其属性进行检索、更新和综合 数据结构复杂 获取数据慢 数学模拟困难 多种地图叠合分析困难 不能直接处理数字图像信息 空间分析不容易实现 边界复杂、模糊的事物难以描述 数据输出的费用较高</p><h3 id="栅格数据" tabindex="-1">栅格数据 <a class="header-anchor" href="#栅格数据" aria-label="Permalink to &quot;栅格数据&quot;">​</a></h3><p>数据存储量大 空间位置精度低 难于建立网络连接关系 输出速度快，但绘图粗糙、不美观 便于面状数据处理 数据结构简单 快速获取大量数据 数学模拟方便 多种地图叠合分析方便 能直接处理数字图像信息 空间分析易于进行 容易描述边界复杂、模糊的事物 技术开发费用低</p>',32),o=[i];function s(h,n,d,c,u,p){return t(),e("div",null,o)}const _=a(l,[["render",s]]);export{m as __pageData,_ as default};
