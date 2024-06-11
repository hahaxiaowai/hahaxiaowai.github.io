import{_ as e,c as a,o as t,a7 as r}from"./chunks/framework.BJd-zmx9.js";const b=JSON.parse('{"title":"three 计算法向量","description":"","frontmatter":{"title":"three 计算法向量","sidebarDepth":5,"date":"2022-06-15","categories":["GIS","webgl"],"tags":["three"],"isTimeLine":true,"publish":false},"headers":[],"relativePath":"blogs/GIS/three/calcNormal.md","filePath":"blogs/GIS/three/calcNormal.md"}'),o={name:"blogs/GIS/three/calcNormal.md"},l=r('<h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>在three中计算法向量，从而理解webgl计算法向量的思路</p><h2 id="计算思路" tabindex="-1">计算思路 <a class="header-anchor" href="#计算思路" aria-label="Permalink to &quot;计算思路&quot;">​</a></h2><p>三个顶点能够绘制一个三角面，每个面都有它的法向量，在本次计算中，是将面的法线量计算完成后，赋给顶点，这三个顶点的法向量都相同，从而确定了一个面的法向量。</p><h2 id="有顶点索引计算法向量" tabindex="-1">有顶点索引计算法向量 <a class="header-anchor" href="#有顶点索引计算法向量" aria-label="Permalink to &quot;有顶点索引计算法向量&quot;">​</a></h2><p>在组织顶点时，我们会用到索引去重复使用顶点，比方说，画一个立方体，只需要8个顶点，而每个顶点在多个面上去使用,我们仍按照之前的计算思路去给顶点赋法向量，但在重复点时，我们需要把之前的法向量加到当前计算的方向量里，待到着色器中，一个面的三个顶点就可以相加归一化后获取当前面的方向量</p>',6),s=[l];function c(i,h,n,_,d,p){return t(),a("div",null,s)}const u=e(o,[["render",c]]);export{b as __pageData,u as default};
