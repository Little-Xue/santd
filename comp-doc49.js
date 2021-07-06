(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{533:function(n,t,e){"use strict";e.r(t);var s=e(0),a=e.n(s),o={template:'<section class="markdown"><h1 id="spin-加载中"><span>Spin 加载中</span><a href="#spin-加载中" class="anchor">#</a></h1><p>用于页面和区块的加载中状态。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},i=e(8),d={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-spin/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Spin} from 'santd';\n\nexport default {\n    components: {\n        's-spin': Spin\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本用法"><span>基本用法</span><a href="#基本用法" class="anchor">#</a></h4><p>一个简单的 loading 状态</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-spin":i.W},template:"<div><s-spin></s-spin></div>"}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560838512"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p=(e(722),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-size">\n        &lt;s-spin size="small"/>\n        &lt;s-spin/>\n        &lt;s-spin size="large"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Spin} from \'santd\';\n\nexport default {\n    components: {\n        \'s-spin\': Spin\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-size .san-spin {\n    margin-right: 16px;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="各种大小"><span>各种大小</span><a href="#各种大小" class="anchor">#</a></h4><p>小的用于文本加载，默认用于卡片容器级加载，大的用于<strong>页面级</strong>加载。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-spin":i.W},template:'<div class="demo-size"><s-spin size="small"></s-spin><s-spin></s-spin><s-spin size="large"></s-spin></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560838497"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),c=(e(724),{initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"demo-inside\">\n        &lt;s-spin/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Spin} from 'santd';\n\nexport default {\n    components: {\n        's-spin': Spin\n    }\n}\n&lt;/script>\n\n&lt;style scoped>\n.demo-inside {\n    text-align: center;\n    background: rgba(0,0,0,0.05);\n    border-radius: 4px;\n    margin-bottom: 20px;\n    padding: 30px 50px;\n    margin: 20px 0;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="容器"><span>容器</span><a href="#容器" class="anchor">#</a></h4><p>放入一个容器中。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-spin":i.W},template:'<div class="demo-inside"><s-spin></s-spin></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560838505"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-spin spinning="{{loading}}">\n            &lt;s-alert slot="content"\n                type="info"\n                message="Alert message title"\n                description="Further details about the context of this alert."\n            >\n        &lt;/s-spin>\n        &lt;div style="margin-top: 16px;">\n            Loading state： &lt;s-switch checked="{=loading=}" on-change="toggle"/>\n        &lt;div>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Spin, Alert, Switch} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert,\n        \'s-spin\': Spin,\n        \'s-switch\': Switch\n    },\n    initData() {\n        return {\n            loading: false\n        }\n    },\n    toggle() {\n        const loading = this.data.get(\'loading\');\n        this.data.set(\'loading\', !loading);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="卡片加载中"><span>卡片加载中</span><a href="#卡片加载中" class="anchor">#</a></h4><p>可以直接把<code>slot=content</code>的内容内嵌到 <code>Spin</code> 中，将现有容器变为加载状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b,"s-spin":i.W,"s-switch":i.Z},initData:()=>({loading:!1}),toggle(){const n=this.data.get("loading");this.data.set("loading",!n)},template:'<div><s-spin spinning="{{loading}}"><s-alert slot="content" type="info" message="Alert message title" description="Further details about the context of this alert."></s-alert></s-spin><div style="margin-top: 16px;">Loading state： <s-switch checked="{=loading=}" on-change="toggle"></s-switch><div></div></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560838487"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-spin tip="Loading...">\n            &lt;s-alert slot="content"\n                type="info"\n                message="Alert message title"\n                description="Further details about the context of this alert."\n            >\n        &lt;/s-spin>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Spin, Alert} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert,\n        \'s-spin\': Spin\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义描述文案"><span>自定义描述文案</span><a href="#自定义描述文案" class="anchor">#</a></h4><p>自定义描述文案。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b,"s-spin":i.W},template:'<div><s-spin tip="Loading..."><s-alert slot="content" type="info" message="Alert message title" description="Further details about the context of this alert."></s-alert></s-spin></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560838475"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-spin spinning="{{loading}}" delay="{{500}}">\n            &lt;s-alert slot="content"\n                type="info"\n                message="Alert message title"\n                description="Further details about the context of this alert."\n            >\n            &lt;/s-alert>\n        &lt;/s-spin>\n        &lt;div style="margin-top: 16px;">\n            Loading state：&lt;s-switch checked={{loading}} on-change="toggleHandler"/>\n        &lt;div>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Spin, Alert, Switch} from \'santd\';\n\nexport default {\n    components: {\n        \'s-alert\': Alert,\n        \'s-spin\': Spin,\n        \'s-switch\': Switch\n    },\n    initData() {\n        return {\n            loading: false\n        }\n    },\n    toggleHandler() {\n        const loading = this.data.get(\'loading\');\n        this.data.set(\'loading\', !loading);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="延迟"><span>延迟</span><a href="#延迟" class="anchor">#</a></h4><p>延迟显示 loading 效果。当 spinning 状态在 <code>delay</code> 时间内结束，则不显示 loading 状态。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-alert":i.b,"s-spin":i.W,"s-switch":i.Z},initData:()=>({loading:!1}),toggleHandler(){const n=this.data.get("loading");this.data.set("loading",!n)},template:'<div><s-spin spinning="{{loading}}" delay="{{500}}"><s-alert slot="content" type="info" message="Alert message title" description="Further details about the context of this alert."></s-alert></s-spin><div style="margin-top: 16px;">Loading state：<s-switch checked="{{loading}}" on-change="toggleHandler"></s-switch><div></div></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560838480"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-spin>\n            &lt;s-icon slot="indicator" type="loading" style="font-size: 24px;"/>\n        &lt;/s-spin>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Spin, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-icon\': Icon,\n        \'s-spin\': Spin\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="自定义指示符"><span>自定义指示符</span><a href="#自定义指示符" class="anchor">#</a></h4><p>使用自定义指示符。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-icon":i.z,"s-spin":i.W},template:'<div><s-spin><s-icon slot="indicator" type="loading" style="font-size: 24px;"></s-icon></s-spin></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560838468"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},x={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>delay</td><td>(todo)延迟显示加载效果的时间（防止闪烁）</td><td>number (毫秒)</td><td>-</td></tr><tr><td>indicator</td><td>自定义加载指示符</td><td>slot</td><td>-</td></tr><tr><td>size</td><td>组件大小，可选值为 <code>small</code> <code>default</code> <code>large</code></td><td>string</td><td>&#39;default&#39;</td></tr><tr><td>spinning</td><td>是否为加载中状态</td><td>boolean</td><td>true</td></tr><tr><td>tip</td><td>当作为包裹元素时，可以自定义描述文案</td><td>string</td><td>-</td></tr><tr><td>wrapperClassName</td><td>包装器的类属性</td><td>string</td><td>-</td></tr><tr><td>content</td><td>可以直接把<code>slot=content</code>的内容内嵌到 <code>Spin</code> 中，将现有容器变为加载状态。</td><td>slot</td><td>-</td></tr></tbody></table><h2 id="静态方法"><span>静态方法</span><a href="#静态方法" class="anchor">#</a></h2><ul><li><code>spin.setDefaultIndicator(indicator: SanComponent)</code>同上 <code>indicator</code>，你可以自定义全局默认元素</li></ul></section>'};t.default=a.a.defineComponent({template:"\n        <div>\n            <head/>\n            <basic/>\n            <size/>\n            <inside/>\n            <nested/>\n            <tip/>\n            <delay/>\n            <indicator/>\n            <readme/>\n        </div>\n    ",components:{head:o,basic:d,size:p,inside:c,nested:l,tip:r,delay:g,indicator:h,readme:x}})},722:function(n,t,e){var s=e(4),a=e(723);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1};s(a,o);n.exports=a.locals||{}},723:function(n,t,e){(t=e(5)(!1)).push([n.i,"\n.demo-size .san-spin {\n    margin-right: 16px;\n}\n",""]),n.exports=t},724:function(n,t,e){var s=e(4),a=e(725);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1};s(a,o);n.exports=a.locals||{}},725:function(n,t,e){(t=e(5)(!1)).push([n.i,"\n.demo-inside {\n    text-align: center;\n    background: rgba(0,0,0,0.05);\n    border-radius: 4px;\n    margin-bottom: 20px;\n    padding: 30px 50px;\n    margin: 20px 0;\n}\n",""]),n.exports=t}}]);