(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{561:function(t,o,e){"use strict";e.r(o);var n=e(0),l=e.n(n),p={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>提示文字</td><td>string | slot</td><td>无</td></tr></tbody></table><h2 id="共同的api"><span>共同的API</span><a href="#共同的api" class="anchor">#</a></h2><p>以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>arrowPointAtCenter</td><td>箭头是否指向目标元素中心</td><td>boolean</td><td><code>false</code></td></tr><tr><td>autoAdjustOverflow</td><td>气泡被遮挡时自动调整位置</td><td>boolean</td><td><code>true</code></td></tr><tr><td>defaultVisible</td><td>默认是否显隐</td><td>boolean</td><td><code>false</code></td></tr><tr><td>color</td><td>背景颜色</td><td>string</td><td>无</td></tr><tr><td>getPopupContainer</td><td>浮层渲染父节点，默认渲染到 body 上</td><td>Function(triggerNode)</td><td><code>() =&gt; document.body</code></td></tr><tr><td>mouseEnterDelay</td><td>鼠标移入后延时多少才显示 Tooltip，单位：秒</td><td>number</td><td>0.1</td></tr><tr><td>mouseLeaveDelay</td><td>鼠标移出后延时多少才隐藏 Tooltip，单位：秒</td><td>number</td><td>0.1</td></tr><tr><td>overlayClassName</td><td>卡片类名</td><td>string</td><td>无</td></tr><tr><td>overlayStyle</td><td>卡片样式</td><td>string|object</td><td>无</td></tr><tr><td>placement</td><td>气泡框位置，可选 <code>top</code> <code>left</code> <code>right</code> <code>bottom</code> <code>topLeft</code> <code>topRight</code> <code>bottomLeft</code> <code>bottomRight</code> <code>leftTop</code> <code>leftBottom</code> <code>rightTop</code> <code>rightBottom</code></td><td>string</td><td><code>top</code></td></tr><tr><td>trigger</td><td>触发行为，可选 hover/click</td><td>string</td><td><code>hover</code></td></tr><tr><td>visible</td><td>用于手动控制浮层显隐</td><td>boolean</td><td><code>false</code></td></tr><tr><td>on-visibleChange</td><td>显示隐藏的回调</td><td>(visible) =&gt; void</td><td>无</td></tr></tbody></table></section>'},s={template:'<section class="markdown"><h1 id="tooltip-文字提示"><span>Tooltip 文字提示</span><a href="#tooltip-文字提示" class="anchor">#</a></h1><p>简单的文字提示气泡框。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</p><p>可用来代替系统默认的 <code>title</code> 提示，提供一个按钮/文字/操作的文案解释。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},i=e(8),d={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-tooltip title=\"prompt text\">\n            &lt;span>Tooltip will show on mouse enter.&lt;/span>\n        &lt;/s-tooltip>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Tooltip} from 'santd';\n\nexport default {\n    components: {\n        's-tooltip': Tooltip\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tooltip":i.fb},template:'<div><s-tooltip title="prompt text"><span>Tooltip will show on mouse enter.</span></s-tooltip></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1623047126018"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},a={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-tooltip placement="topLeft" title="prompt text">\n            &lt;s-button>Align edge / 边缘对齐&lt;/s-button>\n        &lt;/s-tooltip>\n        &lt;s-tooltip placement="topLeft" title="prompt text" arrowPointAtCenter="{{true}}">\n            &lt;s-button>Arrow points to center / 箭头指向中心&lt;/s-button>\n        &lt;/s-tooltip>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Tooltip, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-tooltip\': Tooltip,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tooltip":i.fb,"s-button":i.i},template:'<div><s-tooltip placement="topLeft" title="prompt text"><s-button>Align edge / 边缘对齐</s-button></s-tooltip><s-tooltip placement="topLeft" title="prompt text" arrowPointAtCenter="{{true}}"><s-button>Arrow points to center / 箭头指向中心</s-button></s-tooltip></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1623047126009"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r=(e(776),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo">\n        &lt;div style="margin-left: 70px; white-space: nowrap;">\n            &lt;s-tooltip placement="topLeft" title="prompt text">\n                &lt;s-button>TL&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip placement="top" title="prompt text">\n                &lt;s-button>Top&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip placement="topRight" title="prompt text">\n                &lt;s-button>TR&lt;/s-button>\n            &lt;/s-tooltip>\n        &lt;/div>\n        &lt;div style="width: 70px; float: left;">\n            &lt;s-tooltip placement="leftTop" title="prompt text">\n                &lt;s-button>LT&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip placement="left" title="prompt text">\n                &lt;s-button>Left&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip placement="leftBottom" title="prompt text">\n                &lt;s-button>LB&lt;/s-button>\n            &lt;/s-tooltip>\n        &lt;/div>\n        &lt;div style="width: 70px; margin-left: 304px; ">\n            &lt;s-tooltip placement="rightTop" title="prompt text">\n                &lt;s-button>RT&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip placement="right" title="prompt text">\n                &lt;s-button>Right&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip placement="rightBottom" title="prompt text">\n                &lt;s-button>RB&lt;/s-button>\n            &lt;/s-tooltip>\n        &lt;/div>\n        &lt;div style="margin-left: 70px; clear: both; white-space: nowrap">\n            &lt;s-tooltip placement="bottomLeft" title="prompt text">\n                &lt;s-button>BL&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip placement="bottom" title="prompt text">\n                &lt;s-button>Bottom&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip placement="bottomRight" title="prompt text">\n                &lt;s-button>BR&lt;/s-button>\n            &lt;/s-tooltip>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Tooltip, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-tooltip\': Tooltip,\n        \'s-button\': Button\n    }\n}\n&lt;/script>\n&lt;style type="text/css">\n    .demo {\n        overflow: hidden;\n    }\n    .demo .san-btn {\n        width: 70px;\n        margin-bottom: 5px;\n    }\n&lt;/style></code></pre>',text:'\n<h4 id="位置"><span>位置</span><a href="#位置" class="anchor">#</a></h4><p>位置有12个方向。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tooltip":i.fb,"s-button":i.i},template:'<div class="demo"><div style="margin-left: 70px; white-space: nowrap;"><s-tooltip placement="topLeft" title="prompt text"><s-button>TL</s-button></s-tooltip><s-tooltip placement="top" title="prompt text"><s-button>Top</s-button></s-tooltip><s-tooltip placement="topRight" title="prompt text"><s-button>TR</s-button></s-tooltip></div><div style="width: 70px; float: left;"><s-tooltip placement="leftTop" title="prompt text"><s-button>LT</s-button></s-tooltip><s-tooltip placement="left" title="prompt text"><s-button>Left</s-button></s-tooltip><s-tooltip placement="leftBottom" title="prompt text"><s-button>LB</s-button></s-tooltip></div><div style="width: 70px; margin-left: 304px; "><s-tooltip placement="rightTop" title="prompt text"><s-button>RT</s-button></s-tooltip><s-tooltip placement="right" title="prompt text"><s-button>Right</s-button></s-tooltip><s-tooltip placement="rightBottom" title="prompt text"><s-button>RB</s-button></s-tooltip></div><div style="margin-left: 70px; clear: both; white-space: nowrap"><s-tooltip placement="bottomLeft" title="prompt text"><s-button>BL</s-button></s-tooltip><s-tooltip placement="bottom" title="prompt text"><s-button>Bottom</s-button></s-tooltip><s-tooltip placement="bottomRight" title="prompt text"><s-button>BR</s-button></s-tooltip></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1623047125845"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div>\n            &lt;s-tooltip color="pink"  style="margin: 10px;" title="prompt text">\n                &lt;s-button>pink&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip color="red" style="margin-right: 10px;" title="prompt text">\n                &lt;s-button>red&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip color="yellow" style="margin-right: 10px;"  title="prompt text">\n                &lt;s-button>yellow&lt;/s-button>\n            &lt;/s-tooltip>\n             &lt;s-tooltip color="orange" style="margin-right: 10px;" title="prompt text">\n                &lt;s-button>orange&lt;/s-button>\n            &lt;/s-tooltip>\n             &lt;s-tooltip color="cyan" style="margin-right: 10px;" title="prompt text">\n                &lt;s-button>cyan&lt;/s-button>\n            &lt;/s-tooltip>\n             &lt;s-tooltip color="green" style="margin-right: 10px;" title="prompt text">\n                &lt;s-button>green&lt;/s-button>\n            &lt;/s-tooltip>\n        &lt;/div>\n        &lt;div style="margin-top: 20px;">\n            &lt;s-tooltip color="purple" style="margin-right: 10px; "title="prompt text">\n                &lt;s-button>purple&lt;/s-button>\n            &lt;/s-tooltip>\n             &lt;s-tooltip color="geekblue" style="margin-right: 10px;" title="prompt text">\n                &lt;s-button>geekblue&lt;/s-button>\n            &lt;/s-tooltip>\n             &lt;s-tooltip color="magenta" style="margin-right: 10px;"  title="prompt text">\n                &lt;s-button>magenta&lt;/s-button>\n            &lt;/s-tooltip>\n             &lt;s-tooltip color="volcano" style="margin-right: 10px;" title="prompt text">\n                &lt;s-button>volcano&lt;/s-button>\n            &lt;/s-tooltip>\n             &lt;s-tooltip color="gold" style="margin-right: 10px;" title="prompt text">\n                &lt;s-button>gold&lt;/s-button>\n            &lt;/s-tooltip>\n            &lt;s-tooltip color="lime" style="margin-right: 10px;" title="prompt text">\n                &lt;s-button>lime&lt;/s-button>\n            &lt;/s-tooltip>\n        &lt;/div>\n        &lt;div style="margin-top: 20px;">\n            &lt;s-tooltip color="#f50" style="margin-right: 10px; "title="prompt text">\n                &lt;s-button>#f50&lt;/s-button>\n            &lt;/s-tooltip>\n             &lt;s-tooltip color="#2db7f5" style="margin-right: 10px;" title="prompt text">\n                &lt;s-button>#2db7f5&lt;/s-button>\n            &lt;/s-tooltip>\n             &lt;s-tooltip color="#87d068" style="margin-right: 10px;"  title="prompt text">\n                &lt;s-button>#87d068&lt;/s-button>\n            &lt;/s-tooltip>\n             &lt;s-tooltip color="#108ee9" style="margin-right: 10px;" title="prompt text">\n                &lt;s-button>#108ee9&lt;/s-button>\n            &lt;/s-tooltip>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Tooltip, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-tooltip\': Tooltip,\n        \'s-button\': Button\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="多彩文字提示"><span>多彩文字提示</span><a href="#多彩文字提示" class="anchor">#</a></h4><p>我们添加了多种预设色彩的文字提示样式，用作不同场景使用。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-tooltip":i.fb,"s-button":i.i},template:'<div><div><s-tooltip color="pink" style="margin: 10px;" title="prompt text"><s-button>pink</s-button></s-tooltip><s-tooltip color="red" style="margin-right: 10px;" title="prompt text"><s-button>red</s-button></s-tooltip><s-tooltip color="yellow" style="margin-right: 10px;" title="prompt text"><s-button>yellow</s-button></s-tooltip><s-tooltip color="orange" style="margin-right: 10px;" title="prompt text"><s-button>orange</s-button></s-tooltip><s-tooltip color="cyan" style="margin-right: 10px;" title="prompt text"><s-button>cyan</s-button></s-tooltip><s-tooltip color="green" style="margin-right: 10px;" title="prompt text"><s-button>green</s-button></s-tooltip></div><div style="margin-top: 20px;"><s-tooltip color="purple" style="margin-right: 10px; " title="prompt text"><s-button>purple</s-button></s-tooltip><s-tooltip color="geekblue" style="margin-right: 10px;" title="prompt text"><s-button>geekblue</s-button></s-tooltip><s-tooltip color="magenta" style="margin-right: 10px;" title="prompt text"><s-button>magenta</s-button></s-tooltip><s-tooltip color="volcano" style="margin-right: 10px;" title="prompt text"><s-button>volcano</s-button></s-tooltip><s-tooltip color="gold" style="margin-right: 10px;" title="prompt text"><s-button>gold</s-button></s-tooltip><s-tooltip color="lime" style="margin-right: 10px;" title="prompt text"><s-button>lime</s-button></s-tooltip></div><div style="margin-top: 20px;"><s-tooltip color="#f50" style="margin-right: 10px; " title="prompt text"><s-button>#f50</s-button></s-tooltip><s-tooltip color="#2db7f5" style="margin-right: 10px;" title="prompt text"><s-button>#2db7f5</s-button></s-tooltip><s-tooltip color="#87d068" style="margin-right: 10px;" title="prompt text"><s-button>#87d068</s-button></s-tooltip><s-tooltip color="#108ee9" style="margin-right: 10px;" title="prompt text"><s-button>#108ee9</s-button></s-tooltip></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1623047125834"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};o.default=l.a.defineComponent({components:{desc:s,readme:p,basic:d,arrow:a,position:r,preset:c},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <arrow/>\n            <position/>\n            <preset/>\n            <readme/>\n        </div>\n    "})},776:function(t,o,e){var n=e(4),l=e(777);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[t.i,l,""]]);var p={insert:"head",singleton:!1};n(l,p);t.exports=l.locals||{}},777:function(t,o,e){(o=e(5)(!1)).push([t.i,"\n    .demo {\n        overflow: hidden;\n    }\n    .demo .san-btn {\n        width: 70px;\n        margin-bottom: 5px;\n    }\n",""]),t.exports=o}}]);