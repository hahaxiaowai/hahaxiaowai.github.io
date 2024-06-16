import{_ as a,c as e,o as r,a7 as o}from"./chunks/framework.B8wp6KFe.js";const u=JSON.parse('{"title":"mapbox-gl | 2.1 style文件详解","description":"","frontmatter":{"title":"mapbox-gl | 2.1 style文件详解","date":"2022-01-05","categories":["GIS"],"tags":["教程","mapbox"],"publish":false},"headers":[],"relativePath":"blogs/GIS/mapbox/mapbox2-2 copy.md","filePath":"blogs/GIS/mapbox/mapbox2-2 copy.md","lastUpdated":1718505716000}'),t={name:"blogs/GIS/mapbox/mapbox2-2 copy.md"},l=o('<h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>在上一节中，我们以geojson的数据为例，通过addLayer加载了点线面图层，并没有详细的展开讲述addSource,以及addLayer的类型，本节将展开讲述。</p><p>在GIS开发中，数据是十分重要的，数据存储与数据源，由于应用场景不同，来源不同，也产生很多种数据源格式。mapbox支持市面上绝大部分的数据格式，如：geojson、影像、地形等，除此之外，mapbox定义了一个名为“vector-tile-spec”的开放标准，也就是被各大GIS厂商所使用的矢量瓦片。</p><p>从其发展来讲，矢量瓦片标准并非完全首创于mapbox,而是基于Google protocol buffers制定了这样的标准，并被更多的公司和组织采用<a href="https://zhuanlan.zhihu.com/p/257037471" target="_blank" rel="noreferrer">1</a>。</p><h2 id="数据源类型" tabindex="-1">数据源类型 <a class="header-anchor" href="#数据源类型" aria-label="Permalink to &quot;数据源类型&quot;">​</a></h2><p>mapbox（2.6）目前支持以下GIS数据类型： vector, raster, raster-dem, geojson, image, video</p><h3 id="vector-矢量瓦片" tabindex="-1">vector 矢量瓦片 <a class="header-anchor" href="#vector-矢量瓦片" aria-label="Permalink to &quot;vector 矢量瓦片&quot;">​</a></h3><p>矢量瓦片是较新的技术，各厂商也在使用，简单来讲，他仍属于瓦片，以金字塔的结构存储，加载速度快，同时他又具备着矢量图层的能力，即地图引擎可以识别出瓦片所包含的图形，它与常规的矢量数据功能相同。</p><h3 id="raster-瓦片" tabindex="-1">raster 瓦片 <a class="header-anchor" href="#raster-瓦片" aria-label="Permalink to &quot;raster 瓦片&quot;">​</a></h3><p>栅格瓦片，常见的瓦片格式，以遥感影像为主，也有矢量地图切成瓦片的，主要用于底图的展示。</p><h3 id="raster-dem-地形瓦片" tabindex="-1">raster-dem 地形瓦片 <a class="header-anchor" href="#raster-dem-地形瓦片" aria-label="Permalink to &quot;raster-dem 地形瓦片&quot;">​</a></h3><p>将dem数据以rgb的形式存储在图片上，市面上有相似的数据形式（terrain RGB)， 但在存储高程值上有一些差别，用于在地图上展示地形数据。</p><h3 id="geojson" tabindex="-1">geojson <a class="header-anchor" href="#geojson" aria-label="Permalink to &quot;geojson&quot;">​</a></h3><p>矢量图层，标准的矢量数据，结构清晰，易读，用于点线面的展示。</p><h3 id="image" tabindex="-1">image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;image&quot;">​</a></h3><p>图片图层，不常用，可将图片直接覆盖在地图之上。</p><h3 id="video" tabindex="-1">video <a class="header-anchor" href="#video" aria-label="Permalink to &quot;video&quot;">​</a></h3><p>视频图层，不常用，将视频覆盖在地图上。</p><p>对于初次接触的人来说，只需要大概了解，在开发过程中熟悉即可，<a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/" target="_blank" rel="noreferrer">sources API</a></p><h2 id="图层类别" tabindex="-1">图层类别 <a class="header-anchor" href="#图层类别" aria-label="Permalink to &quot;图层类别&quot;">​</a></h2><p>图层类别和数据类型类似，更多的是从表现形式上去划分，主要是对矢量数据的表现形式进行细分，其他格式数据基本只有一种表现形式： polygon,symbol,line,fill-extrusion,background,raster,circle,heatmap,hillshade,sky</p><h3 id="polygon-line-symbol-fill-extrusion" tabindex="-1">polygon,line,symbol,fill-extrusion <a class="header-anchor" href="#polygon-line-symbol-fill-extrusion" aria-label="Permalink to &quot;polygon,line,symbol,fill-extrusion&quot;">​</a></h3><p>点线面，体块，常用的矢量元素，体块是我个人的叫法，fill-extrusion直译过来是填充挤压，是将一个平面根据高度拉伸起来。</p><h3 id="background" tabindex="-1">background <a class="header-anchor" href="#background" aria-label="Permalink to &quot;background&quot;">​</a></h3><p>背景颜色，有用，但是很少改动的一个属性，因为底图基本靠影像数据。</p><h3 id="raster" tabindex="-1">raster <a class="header-anchor" href="#raster" aria-label="Permalink to &quot;raster&quot;">​</a></h3><p>栅格瓦片，对应的source的raster</p><h3 id="circle" tabindex="-1">circle <a class="header-anchor" href="#circle" aria-label="Permalink to &quot;circle&quot;">​</a></h3><p>圆，相对于点，和点相似，数据源靠点数据，就像一个用了圆形图片的点，相对于面，这个圆不会贴合地面，而是一直面向屏幕，“贴合”屏幕，常用于聚合效果的实现。</p><h3 id="heatmap" tabindex="-1">heatmap <a class="header-anchor" href="#heatmap" aria-label="Permalink to &quot;heatmap&quot;">​</a></h3><p>二维热力图</p><h3 id="hillshade" tabindex="-1">hillshade <a class="header-anchor" href="#hillshade" aria-label="Permalink to &quot;hillshade&quot;">​</a></h3><p>阴影，针对地形数据的阴影（个人不常用，所以不瞎说，不细说）</p><h3 id="sky" tabindex="-1">sky <a class="header-anchor" href="#sky" aria-label="Permalink to &quot;sky&quot;">​</a></h3><p>天空盒，2.x后的产物，目前mapbox支持倾仰角最大为85度,能够看到天空了，这个图层可以绘制一个比较真是的天空盒。</p><p><a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/" target="_blank" rel="noreferrer">layers API</a></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>对于初学者来说，太多的分类是令人头疼的，不要着急，其实在开发中用的最多的数据源类型是geojson,矢量瓦片和瓦片，前两者是矢量数据，后者为影像数据。</p><p>讲到这里，理论基础就够了，剩下的在开发过程中逐渐了解，接下来，是一系列的加载练习，在之后是新手比较头疼的一件事——看API，这对于新手来说十分重要，学会看API，这入门教程便达到了目的。</p><p>单指Mapbox-gl(2.6)，是不支持3d tiles 类型数据的，不过可以通过deck.gl叠加的方式将3d tiles加载，但是存在性能与精度上（瓦片之间有缝隙）的问题，从Mapbox近期的更新来看，球形地图必然会出现（某分支已出现），那么3d tiles也应该在计划之内。</p>',40),s=[l];function i(h,n,p,d,c,b){return r(),e("div",null,s)}const x=a(t,[["render",i]]);export{u as __pageData,x as default};
