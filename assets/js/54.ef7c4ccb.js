(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{558:function(e,t,a){"use strict";a.r(t);var s=a(6),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[e._v("#")]),e._v(" 简述")]),e._v(" "),a("p",[e._v("cesium for ue 中 3dTile类参数说明")]),e._v(" "),a("h2",{attrs:{id:"mobility-移动性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobility-移动性"}},[e._v("#")]),e._v(" Mobility 移动性")]),e._v(" "),a("p",[e._v("The component mobility to use for the tileset.")]),e._v(" "),a("p",[e._v("tileset 是否可移动，三个可选参数，静态（默认）,固定，可移动，不需要改")]),e._v(" "),a("h2",{attrs:{id:"georeference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#georeference"}},[e._v("#")]),e._v(" Georeference:")]),e._v(" "),a("p",[e._v("The designated georeference actor controlling how the actor's\ncoordinate system relates to the coordinate system in this Unreal Engine\nlevel.\nIf this is null, the Tileset will find and use the first Georeference\nActor in the level, or create one if necessary. To get the active/effective\nGeoreference from Blueprints or C++, use ResolvedGeoreference instead.")]),e._v(" "),a("p",[e._v("地理：\n指定的地球员演员控制着演员的方式\n坐标系与此虚幻引擎中的坐标系有关\n等级。\n如果这是空的，则瓷砖将找到并使用第一个georeference\n演员处于该级别，或者在必要时创建一个。 获得主动/有效\n来自蓝图或C ++的地理方案，改用ResolvedGeoreference。")]),e._v(" "),a("h2",{attrs:{id:"credit-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credit-system"}},[e._v("#")]),e._v(" Credit System:")]),e._v(" "),a("p",[e._v("The actor managing this tileset s content attributions.\nIf this is null, the Tileset will find and use the first Credit System\nActor in the level, or create one if necessary. To get the active/effective\nCredit System from Blueprints or C++, use ResolvedCreditSystem instead.")]),e._v(" "),a("p",[e._v("信用系统：\n管理此图块的内容属性的演员。\n如果这是空的，则瓷砖将找到并使用第一个信用系统\n演员处于该级别，或者在必要时创建一个。 获得主动/有效\n来自蓝图或C ++的信用系统，改用ResolvedCreditSystem。")]),e._v(" "),a("h2",{attrs:{id:"show-credits-on-screen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-credits-on-screen"}},[e._v("#")]),e._v(" Show Credits on Screen:")]),e._v(" "),a("p",[e._v("Whether or not to show this tileset's credits on screen.")]),e._v(" "),a("p",[e._v("在屏幕上显示积分：\n是否在屏幕上显示该瓷砖的信用。")]),e._v(" "),a("h2",{attrs:{id:"source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[e._v("#")]),e._v(" Source")]),e._v(" "),a("p",[e._v("资源类型，ion或者url")]),e._v(" "),a("h2",{attrs:{id:"url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[e._v("#")]),e._v(" url")]),e._v(" "),a("p",[e._v("资源url")]),e._v(" "),a("h2",{attrs:{id:"maximum-screen-space-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maximum-screen-space-error"}},[e._v("#")]),e._v(" Maximum Screen Space Error:")]),e._v(" "),a("p",[e._v("The maximum number of pixels of error when rendering this tileset.\nThis is used to select an appropriate level-of-detail: A low value will cause many tiles with a high level of detail to be loaded,causing a finer visual representation of the tiles, but with a higher performance cost for loading and rendering A higher value will cause a coarser visual representation, with lower performance requirements.When a tileset uses the older layer json / quantized-mesh format rather than 3D Tiles, this value is effectively divided by 8.0. So the default value of 1 6.0 corresponds to the standard value for quantized-mesh terrain\nof 2.0.")]),e._v(" "),a("p",[e._v("最大屏幕空间错误：\n呈现此瓷砖时，误差像素的最大数量。\n这用于选择适当的详细信息：低值会导致许多瓷砖加载高度的细节，从而导致瓷砖的视觉表现更高，但是加载和渲染的性能成本更高 较高的价值将导致更粗糙的视觉表示，并且性能较低要求。当一个瓷砖使用旧层JSON /量化网格格式而不是3D图块时，该值有效地除以8.0。 因此，1 6.0的默认值对应于量化网状地形的标准值\n2.0。")]),e._v(" "),a("h2",{attrs:{id:"preload-ancestors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preload-ancestors"}},[e._v("#")]),e._v(" Preload Ancestors:")]),e._v(" "),a("p",[e._v("Whether to preload ancestor tiles.Setting this to true optimizes the zoom-out experience and provides more detail in newly-exposed areas when panning. The down side is that it requires loading more tiles.")]),e._v(" "),a("p",[e._v("预加载祖先：")]),e._v(" "),a("p",[e._v("是否预加载父瓦片。将此设置为true可优化缩小体验，并在平移时提供新曝光区域的更多细节。缺点是它需要加载更多的瓦片。")]),e._v(" "),a("h2",{attrs:{id:"maximum-simultaneous-tile-loads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maximum-simultaneous-tile-loads"}},[e._v("#")]),e._v(" Maximum simultaneous Tile Loads:")]),e._v(" "),a("p",[e._v("The maximum number of tiles that may be loaded at once.When new parts of the tileset become visible, the tasks to load the corresponding tiles are put into a queue. This value determines how many of these tasks are processed at the same time. A higher value\nmay cause the tiles to be loaded and rendered more quickly, at the cost of a higher network- and processing load.")]),e._v(" "),a("p",[e._v("最大同时瓷砖负载：\n可以立即加载的最大瓷砖数量。当瓷砖的新部分可见时，加载相应图块的任务被放入队列中。 此值决定了同时处理其中有多少个任务。 更高的价值\n可能导致瓷砖被加载并更快地渲染，以更高的网络和处理负载为代价。")]),e._v(" "),a("h2",{attrs:{id:"loading-descendant-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-descendant-limit"}},[e._v("#")]),e._v(" Loading Descendant Limit:")]),e._v(" "),a("p",[e._v("The number of loading descendents a tile should allow before deciding to render itself instead of waiting.Setting this to 0 will cause each level of detail to be loaded successively. This will increase the overall loading time, but cause\nadditional detail to appear more gradually. Setting this to a high value like 1000 will decrease the overall time until the desired level of detail is achieved, but this high-detail representation will appear at once, as soon as it is loaded completely.")]),e._v(" "),a("p",[e._v("加载后代极限：\n在决定渲染而不是等待之前，瓷砖的加载后代的数量应允许。将其设置为0将导致每个细节均连续加载。 这将增加整体加载时间，但导致\n其他细节以逐渐出现。 将其设置为高价值，例如1000，将减少整个时间，直到达到所需的细节水平，但是该高详细表示形式将立即出现，一旦完全加载。")])])}),[],!1,null,null,null);t.default=r.exports}}]);