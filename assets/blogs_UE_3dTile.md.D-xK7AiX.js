import{_ as e,c as t,o as a,a7 as i}from"./chunks/framework.BJd-zmx9.js";const f=JSON.parse('{"title":"cesium for ue 3dTile","description":"","frontmatter":{"title":"cesium for ue 3dTile","sidebarDepth":5,"date":"2023-2-26","categories":["c++","UE"],"tags":["3dTile"],"publish":false},"headers":[],"relativePath":"blogs/UE/3dTile.md","filePath":"blogs/UE/3dTile.md"}'),r={name:"blogs/UE/3dTile.md"},o=i('<h2 id="简述" tabindex="-1">简述 <a class="header-anchor" href="#简述" aria-label="Permalink to &quot;简述&quot;">​</a></h2><p>cesium for ue 中 3dTile类参数说明</p><h2 id="mobility-移动性" tabindex="-1">Mobility 移动性 <a class="header-anchor" href="#mobility-移动性" aria-label="Permalink to &quot;Mobility 移动性&quot;">​</a></h2><p>The component mobility to use for the tileset.</p><p>tileset 是否可移动，三个可选参数，静态（默认）,固定，可移动，不需要改</p><h2 id="georeference" tabindex="-1">Georeference: <a class="header-anchor" href="#georeference" aria-label="Permalink to &quot;Georeference:&quot;">​</a></h2><p>The designated georeference actor controlling how the actor&#39;s coordinate system relates to the coordinate system in this Unreal Engine level. If this is null, the Tileset will find and use the first Georeference Actor in the level, or create one if necessary. To get the active/effective Georeference from Blueprints or C++, use ResolvedGeoreference instead.</p><p>地理： 指定的地球员演员控制着演员的方式 坐标系与此虚幻引擎中的坐标系有关 等级。 如果这是空的，则瓷砖将找到并使用第一个georeference 演员处于该级别，或者在必要时创建一个。 获得主动/有效 来自蓝图或C ++的地理方案，改用ResolvedGeoreference。</p><h2 id="credit-system" tabindex="-1">Credit System: <a class="header-anchor" href="#credit-system" aria-label="Permalink to &quot;Credit System:&quot;">​</a></h2><p>The actor managing this tileset s content attributions. If this is null, the Tileset will find and use the first Credit System Actor in the level, or create one if necessary. To get the active/effective Credit System from Blueprints or C++, use ResolvedCreditSystem instead.</p><p>信用系统： 管理此图块的内容属性的演员。 如果这是空的，则瓷砖将找到并使用第一个信用系统 演员处于该级别，或者在必要时创建一个。 获得主动/有效 来自蓝图或C ++的信用系统，改用ResolvedCreditSystem。</p><h2 id="show-credits-on-screen" tabindex="-1">Show Credits on Screen: <a class="header-anchor" href="#show-credits-on-screen" aria-label="Permalink to &quot;Show Credits on Screen:&quot;">​</a></h2><p>Whether or not to show this tileset&#39;s credits on screen.</p><p>在屏幕上显示积分： 是否在屏幕上显示该瓷砖的信用。</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p>资源类型，ion或者url</p><h2 id="url" tabindex="-1">url <a class="header-anchor" href="#url" aria-label="Permalink to &quot;url&quot;">​</a></h2><p>资源url</p><h2 id="maximum-screen-space-error" tabindex="-1">Maximum Screen Space Error: <a class="header-anchor" href="#maximum-screen-space-error" aria-label="Permalink to &quot;Maximum Screen Space Error:&quot;">​</a></h2><p>The maximum number of pixels of error when rendering this tileset. This is used to select an appropriate level-of-detail: A low value will cause many tiles with a high level of detail to be loaded,causing a finer visual representation of the tiles, but with a higher performance cost for loading and rendering A higher value will cause a coarser visual representation, with lower performance requirements.When a tileset uses the older layer json / quantized-mesh format rather than 3D Tiles, this value is effectively divided by 8.0. So the default value of 1 6.0 corresponds to the standard value for quantized-mesh terrain of 2.0.</p><p>最大屏幕空间错误： 呈现此瓷砖时，误差像素的最大数量。 这用于选择适当的详细信息：低值会导致许多瓷砖加载高度的细节，从而导致瓷砖的视觉表现更高，但是加载和渲染的性能成本更高 较高的价值将导致更粗糙的视觉表示，并且性能较低要求。当一个瓷砖使用旧层JSON /量化网格格式而不是3D图块时，该值有效地除以8.0。 因此，1 6.0的默认值对应于量化网状地形的标准值 2.0。</p><h2 id="preload-ancestors" tabindex="-1">Preload Ancestors: <a class="header-anchor" href="#preload-ancestors" aria-label="Permalink to &quot;Preload Ancestors:&quot;">​</a></h2><p>Whether to preload ancestor tiles.Setting this to true optimizes the zoom-out experience and provides more detail in newly-exposed areas when panning. The down side is that it requires loading more tiles.</p><p>预加载祖先：</p><p>是否预加载父瓦片。将此设置为true可优化缩小体验，并在平移时提供新曝光区域的更多细节。缺点是它需要加载更多的瓦片。</p><h2 id="maximum-simultaneous-tile-loads" tabindex="-1">Maximum simultaneous Tile Loads: <a class="header-anchor" href="#maximum-simultaneous-tile-loads" aria-label="Permalink to &quot;Maximum simultaneous Tile Loads:&quot;">​</a></h2><p>The maximum number of tiles that may be loaded at once.When new parts of the tileset become visible, the tasks to load the corresponding tiles are put into a queue. This value determines how many of these tasks are processed at the same time. A higher value may cause the tiles to be loaded and rendered more quickly, at the cost of a higher network- and processing load.</p><p>最大同时瓷砖负载： 可以立即加载的最大瓷砖数量。当瓷砖的新部分可见时，加载相应图块的任务被放入队列中。 此值决定了同时处理其中有多少个任务。 更高的价值 可能导致瓷砖被加载并更快地渲染，以更高的网络和处理负载为代价。</p><h2 id="loading-descendant-limit" tabindex="-1">Loading Descendant Limit: <a class="header-anchor" href="#loading-descendant-limit" aria-label="Permalink to &quot;Loading Descendant Limit:&quot;">​</a></h2><p>The number of loading descendents a tile should allow before deciding to render itself instead of waiting.Setting this to 0 will cause each level of detail to be loaded successively. This will increase the overall loading time, but cause additional detail to appear more gradually. Setting this to a high value like 1000 will decrease the overall time until the desired level of detail is achieved, but this high-detail representation will appear at once, as soon as it is loaded completely.</p><p>加载后代极限： 在决定渲染而不是等待之前，瓷砖的加载后代的数量应允许。将其设置为0将导致每个细节均连续加载。 这将增加整体加载时间，但导致 其他细节以逐渐出现。 将其设置为高价值，例如1000，将减少整个时间，直到达到所需的细节水平，但是该高详细表示形式将立即出现，一旦完全加载。</p>',31),s=[o];function l(n,d,h,c,u,m){return a(),t("div",null,s)}const b=e(r,[["render",l]]);export{f as __pageData,b as default};
