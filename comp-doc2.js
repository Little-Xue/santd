(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{543:function(t,n,e){"use strict";e.r(n);var s=e(0),o=e.n(s),a={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="anchor-props"><span>Anchor props</span><a href="#anchor-props" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>affix</td><td>固定模式</td><td>boolean</td><td>true</td></tr><tr><td>bounds</td><td>锚点区域边界</td><td>number</td><td>5(px)</td></tr><tr><td>getContainer</td><td>指定滚动的容器</td><td>() =&gt; HTMLElement</td><td>() =&gt; window</td></tr><tr><td>offsetBottom</td><td>距离窗口底部达到指定偏移量后触发</td><td>number</td><td></td></tr><tr><td>offsetTop</td><td>距离窗口顶部达到指定偏移量后触发</td><td>number</td><td></td></tr><tr><td>showInkInFixed</td><td>固定模式是否显示小圆点</td><td>boolean</td><td>false</td></tr><tr><td>wrapperClass</td><td>容器的类名</td><td>string</td><td>-</td></tr><tr><td>wrapperStyle</td><td>容器样式</td><td>string | object</td><td>-</td></tr><tr><td>on-click</td><td><code>click</code> 事件的 handler</td><td>Function(e: Event, link: Object)</td><td></td></tr><tr><td>on-change</td><td>监听锚点链接改变</td><td>Function(currentActiveLink: string)</td><td></td></tr><tr><td>getCurrentAnchor</td><td>自定义高亮的锚点</td><td>() =&gt; string</td><td>-</td></tr><tr><td>targetOffset</td><td>锚点滚动偏移量，默认与 offsetTop 相同</td><td>number</td><td>-</td></tr></tbody></table><h3 id="link-props"><span>Link props</span><a href="#link-props" class="anchor">#</a></h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>href</td><td>锚点链接</td><td>string</td><td></td></tr><tr><td>title</td><td>文字内容</td><td>string</td><td></td></tr><tr><td>target</td><td>该属性指定在何处显示链接的资源</td><td>string</td><td></td></tr></tbody></table></section>'},i={template:'<section class="markdown"><h1 id="anchor-锚点"><span>Anchor 锚点</span><a href="#anchor-锚点" class="anchor">#</a></h1><p>用于跳转到页面指定位置。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},c=e(8),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div id="components-anchor-demo-basic">\n        &lt;s-anchor>\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},template:'<div id="components-anchor-demo-basic"><s-anchor><s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link><s-link href="#components-anchor-demo-static" title="Static Demo"></s-link><s-link href="#api" title="API"><s-link href="#anchor-props" title="Anchor Props"></s-link><s-link href="#link-props" title="Link Props"></s-link></s-link></s-anchor></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667467608365"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div id="components-anchor-demo-static">\n        &lt;s-anchor affix="{{false}}">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="静态位置"><span>静态位置</span><a href="#静态位置" class="anchor">#</a></h4><p>不浮动，状态不随页面滚动变化</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},template:'<div id="components-anchor-demo-static"><s-anchor affix="{{false}}"><s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link><s-link href="#components-anchor-demo-static" title="Static Demo"></s-link><s-link href="#api" title="API"><s-link href="#anchor-props" title="Anchor Props"></s-link><s-link href="#link-props" title="Link Props"></s-link></s-link></s-anchor></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667467608360"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-anchor affix="{{false}}" on-click="handleClick">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    },\n    handleClick({e, link}) {\n        e.preventDefault();\n        console.log(link);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义on-click事件"><span>自定义on-Click事件</span><a href="#自定义on-click事件" class="anchor">#</a></h4><p>点击锚点不记录历史。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},handleClick({e:t,link:n}){t.preventDefault(),console.log(n)},template:'<div><s-anchor affix="{{false}}" on-click="handleClick"><s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link><s-link href="#components-anchor-demo-static" title="Static Demo"></s-link><s-link href="#api" title="API"><s-link href="#anchor-props" title="Anchor Props"></s-link><s-link href="#link-props" title="Link Props"></s-link></s-link></s-anchor></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667467608353"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-anchor affix="{{false}}" getCurrentAnchor="{{getCurrentAnchor}}">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    },\n    initData() {\n        return {\n            getCurrentAnchor: () => \'#api\'\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义锚点高亮"><span>自定义锚点高亮</span><a href="#自定义锚点高亮" class="anchor">#</a></h4><p>自定义锚点高亮。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},initData:()=>({getCurrentAnchor:()=>"#api"}),template:'<div><s-anchor affix="{{false}}" getCurrentAnchor="{{getCurrentAnchor}}"><s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link><s-link href="#components-anchor-demo-static" title="Static Demo"></s-link><s-link href="#api" title="API"><s-link href="#anchor-props" title="Anchor Props"></s-link><s-link href="#link-props" title="Link Props"></s-link></s-link></s-anchor></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667467608348"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-anchor affix="{{false}}" on-change="handleChange">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    },\n    handleChange(link) {\n        console.log(\'Anchor:OnChange\', link);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="监听锚点链接改变"><span>监听锚点链接改变</span><a href="#监听锚点链接改变" class="anchor">#</a></h4><p>监听锚点链接改变。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},handleChange(t){console.log("Anchor:OnChange",t)},template:'<div><s-anchor affix="{{false}}" on-change="handleChange"><s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link><s-link href="#components-anchor-demo-static" title="Static Demo"></s-link><s-link href="#api" title="API"><s-link href="#anchor-props" title="Anchor Props"></s-link><s-link href="#link-props" title="Link Props"></s-link></s-link></s-anchor></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667467608341"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-anchor affix="{{false}}" targetOffset="{{targetOffset}}">\n            &lt;s-link href="#components-anchor-demo-basic" title="Basic Demo" />\n            &lt;s-link href="#components-anchor-demo-static" title="Static Demo" />\n            &lt;s-link href="#api" title="API">\n                &lt;s-link href="#anchor-props" title="Anchor Props" />\n                &lt;s-link href="#link-props" title="Link Props" />\n            &lt;/s-link>\n        &lt;/s-anchor>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Anchor} from \'santd\';\n\nexport default {\n    components: {\n        \'s-anchor\': Anchor,\n        \'s-link\': Anchor.Link\n    },\n    initData() {\n        return {\n            targetOffset: undefined\n        };\n    },\n    attached() {\n        this.data.set(\'targetOffset\', window.innerHeight / 2);\n    },\n}\n&lt;/script></code></pre>',text:'\n<h4 id="设置锚点滚动偏移量"><span>设置锚点滚动偏移量</span><a href="#设置锚点滚动偏移量" class="anchor">#</a></h4><p>锚点目标滚动到屏幕正中间。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-anchor":c.c,"s-link":c.c.Link},initData:()=>({targetOffset:void 0}),attached(){this.data.set("targetOffset",window.innerHeight/2)},template:'<div><s-anchor affix="{{false}}" targetOffset="{{targetOffset}}"><s-link href="#components-anchor-demo-basic" title="Basic Demo"></s-link><s-link href="#components-anchor-demo-static" title="Static Demo"></s-link><s-link href="#api" title="API"><s-link href="#anchor-props" title="Anchor Props"></s-link><s-link href="#link-props" title="Link Props"></s-link></s-link></s-anchor></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667467608335"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};n.default=o.a.defineComponent({components:{readme:a,head:i,basic:d,static:l,click:r,custom:p,change:h,"target-offset":m},template:"\n        <div>\n            <head/>\n            <basic/>\n            <static/>\n            <click/>\n            <custom/>\n            <change/>\n            <target-offset/>\n            <readme/>\n        </div>\n    "})}}]);