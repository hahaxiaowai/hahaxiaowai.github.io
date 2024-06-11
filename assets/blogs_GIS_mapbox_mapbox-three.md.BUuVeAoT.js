import{_ as e,c as a,o as t,a7 as o}from"./chunks/framework.BJd-zmx9.js";const m=JSON.parse('{"title":"mapbox-gl | mapbox与three结合常见问题","description":"","frontmatter":{"title":"mapbox-gl | mapbox与three结合常见问题","sidebarDepth":5,"date":"2022-05-01","categories":["GIS","webgl","record"],"tags":["问题集"],"publish":false},"headers":[],"relativePath":"blogs/GIS/mapbox/mapbox-three.md","filePath":"blogs/GIS/mapbox/mapbox-three.md"}'),r={name:"blogs/GIS/mapbox/mapbox-three.md"},h=o('<h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>记录遇到的两者结合出现的问题。</p><h2 id="坐标系" tabindex="-1">坐标系 <a class="header-anchor" href="#坐标系" aria-label="Permalink to &quot;坐标系&quot;">​</a></h2><p>three采用的和opengl相同的右手坐标系，y轴朝上，z轴朝向屏幕，但是mapbox不同，为了更贴合地理坐标的习惯，用xy代表经纬度，z轴朝上，这也就意味着，我们需要把y和z交换一下才能得到正确的three坐标</p><h2 id="坐标原点与坐标转换" tabindex="-1">坐标原点与坐标转换 <a class="header-anchor" href="#坐标原点与坐标转换" aria-label="Permalink to &quot;坐标原点与坐标转换&quot;">​</a></h2><p>在mapbox中的three采用相对坐标，即规定一个原定作为three的(0,0,0)点，将经纬度转为墨卡托坐标，这里的墨卡托坐标也可以称作世界坐标，它的原点在地图的左上角，再获取当前纬度每世界单位等于多少米，这样就能让three场景里的单位作为米去使用，而three的原点坐标是我们已知的，同样可以转换为世界坐标，这样我们就可以构建一个世界坐标与three的坐标转换体系</p><p>转换坐标中，我们只能转换-180~180的点位，超出这个范围似乎不能展示，每个纬度所转换的米是不一样的,这也就意味着，如果我们确定了原点，只能用原点所在纬度的转换米去转换。</p><p>离中心点越远，three渲染就会有问题，例如，画一个圆，离中心点越远就会显示不正确，在three独立场景中是没问题的，两者结合会出现，目前咱不知道什么原因</p>',8),p=[h];function s(l,i,n,c,_,b){return t(),a("div",null,p)}const x=e(r,[["render",s]]);export{m as __pageData,x as default};