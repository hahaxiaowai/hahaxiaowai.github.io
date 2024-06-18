import{_ as e,c as a,o as t,a7 as r}from"./chunks/framework.B8wp6KFe.js";const b=JSON.parse('{"title":"three 矩阵","description":"","frontmatter":{"title":"three 矩阵","date":"2022-06-23","categories":["GIS","webgl"],"tags":["three"],"publish":false},"headers":[],"relativePath":"blogs/GIS/three/matrix.md","filePath":"blogs/GIS/three/matrix.md","lastUpdated":1718725834000}'),i={name:"blogs/GIS/three/matrix.md"},o=r('<h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>three 中矩阵与webgl中命名的矩阵有些差异，本文记录three中常见的矩阵对应的webgl矩阵</p><h2 id="object3d" tabindex="-1">Object3D <a class="header-anchor" href="#object3d" aria-label="Permalink to &quot;Object3D&quot;">​</a></h2><h3 id="matrix" tabindex="-1">.matrix <a class="header-anchor" href="#matrix" aria-label="Permalink to &quot;.matrix&quot;">​</a></h3><p>本地矩阵，three中有层级模型的概念，本地模型是相对于父元素原点的模型矩阵，模型矩阵即平移矩阵、缩放矩阵、旋转矩阵的乘积。</p><h3 id="matrixworld" tabindex="-1">.matrixWorld <a class="header-anchor" href="#matrixworld" aria-label="Permalink to &quot;.matrixWorld&quot;">​</a></h3><p>世界矩阵，相对于整个场景的模型矩阵，对于一个模型的子对象，它就等于子模型的本地矩阵和他所有父类（父父类,以此类推到场景）的乘积</p><h3 id="modelviewmatrix" tabindex="-1">modelViewMatrix <a class="header-anchor" href="#modelviewmatrix" aria-label="Permalink to &quot;modelViewMatrix&quot;">​</a></h3><p>模型视图矩阵，同 webgl，</p>',9),l=[o];function d(h,s,c,n,m,_){return t(),a("div",null,l)}const p=e(i,[["render",d]]);export{b as __pageData,p as default};
