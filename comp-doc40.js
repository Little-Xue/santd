(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{514:function(e,t,s){"use strict";s.r(t);var n=s(0),o=s.n(n),a={template:'<section class="markdown"><h1 id="progress-进度条"><span>Progress 进度条</span><a href="#progress-进度条" class="anchor">#</a></h1><p>展示操作的当前进度。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p><ul><li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；</li><li>当需要显示一个操作完成的百分比时。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},c=s(8),p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress percent="{{30}}"/>\n        &lt;s-progress percent="{{50}}" status="active"/>\n        &lt;s-progress percent="{{70}}" status="exception"/>\n        &lt;s-progress percent="{{100}}"/>\n        &lt;s-progress percent="{{50}}" showInfo="{{false}}"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="进度条"><span>进度条</span><a href="#进度条" class="anchor">#</a></h4><p>标准的进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'<div><s-progress percent="{{30}}"></s-progress><s-progress percent="{{50}}" status="active"></s-progress><s-progress percent="{{70}}" status="exception"></s-progress><s-progress percent="{{100}}"></s-progress><s-progress percent="{{50}}" showInfo="{{false}}"></s-progress></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1622815887947"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r=(s(701),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress type="circle" percent="{{75}}"/>\n        &lt;s-progress type="circle" percent="{{70}}" status="exception"/>\n        &lt;s-progress type="circle" percent="{{100}}"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script>\n\n&lt;style>\n.san-progress-circle-wrap,\n.san-progress-line-wrap {\n    margin-right: 8px;\n    margin-bottom: 5px;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="进度圈"><span>进度圈</span><a href="#进度圈" class="anchor">#</a></h4><p>圈形的进度。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'<div><s-progress type="circle" percent="{{75}}"></s-progress><s-progress type="circle" percent="{{70}}" status="exception"></s-progress><s-progress type="circle" percent="{{100}}"></s-progress></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1622815887954"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div style="width: 170px;">\n        &lt;s-progress percent="{{30}}" size="small"/>\n        &lt;s-progress percent="{{50}}" size="small" status="active"/>\n        &lt;s-progress percent="{{70}}" size="small" status="exception"/>\n        &lt;s-progress percent="{{100}}" size="small"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="小型进度条"><span>小型进度条</span><a href="#小型进度条" class="anchor">#</a></h4><p>适合放在较狭窄的区域内。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'<div style="width: 170px;"><s-progress percent="{{30}}" size="small"></s-progress><s-progress percent="{{50}}" size="small" status="active"></s-progress><s-progress percent="{{70}}" size="small" status="exception"></s-progress><s-progress percent="{{100}}" size="small"></s-progress></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1622815887904"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress type="circle" percent="{{75}}" width="{{80}}"/>\n        &lt;s-progress type="circle" percent="{{70}}" width="{{80}}" status="exception"/>\n        &lt;s-progress type="circle" percent="{{100}}" width="{{80}}"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="小型进度圈"><span>小型进度圈</span><a href="#小型进度圈" class="anchor">#</a></h4><p>小一号的圈形进度。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'<div><s-progress type="circle" percent="{{75}}" width="{{80}}"></s-progress><s-progress type="circle" percent="{{70}}" width="{{80}}" status="exception"></s-progress><s-progress type="circle" percent="{{100}}" width="{{80}}"></s-progress></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1622815887940"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l=(s(703),{initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"demo-dynamic\">\n        &lt;s-progress percent=\"{{percent}}\"/>\n        &lt;s-button-group>\n            &lt;s-button on-click=\"decline\" icon=\"minus\">&lt;/s-button>\n            &lt;s-button on-click=\"increase\" icon=\"plus\">&lt;/s-button>\n        &lt;/s-button-group>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Progress, Button} from 'santd';\n\nexport default {\n    components: {\n        's-button': Button,\n        's-button-group': Button.Group,\n        's-progress': Progress\n    },\n    initData() {\n        return {\n            percent: 0\n        };\n    },\n    increase() {\n        let percent = this.data.get('percent') + 10;\n        if (percent > 100) {\n            percent = 100;\n        }\n        this.data.set('percent', percent);\n    },\n    decline() {\n        let percent = this.data.get('percent') - 10;\n        if (percent &lt; 0) {\n            percent = 0;\n        }\n        this.data.set('percent', percent);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-dynamic .san-btn > span {\n    margin-left: 0!important;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="动态展示"><span>动态展示</span><a href="#动态展示" class="anchor">#</a></h4><p>会动的进度条才是好进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":c.i,"s-button-group":c.i.Group,"s-progress":c.N},initData:()=>({percent:0}),increase(){let e=this.data.get("percent")+10;e>100&&(e=100),this.data.set("percent",e)},decline(){let e=this.data.get("percent")-10;e<0&&(e=0),this.data.set("percent",e)},template:'<div class="demo-dynamic"><s-progress percent="{{percent}}"></s-progress><s-button-group><s-button on-click="decline" icon="minus"></s-button><s-button on-click="increase" icon="plus"></s-button></s-button-group></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1622815887923"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),g=(s(705),{initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"demo-circle-dynamic\">\n        &lt;s-progress type=\"circle\" percent=\"{{percent}}\"/>\n        &lt;s-button-group>\n            &lt;s-button on-click=\"decline\" icon=\"minus\">&lt;/s-button>\n            &lt;s-button on-click=\"increase\" icon=\"plus\">&lt;/s-button>\n        &lt;/s-button-group>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Progress, Button} from 'santd';\n\nexport default {\n    components: {\n        's-button': Button,\n        's-button-group': Button.Group,\n        's-progress': Progress\n    },\n    initData() {\n        return {\n            percent: 0\n        };\n    },\n    increase() {\n        let percent = this.data.get('percent') + 10;\n        if (percent > 100) {\n            percent = 100;\n        }\n        this.data.set('percent', percent);\n    },\n    decline() {\n        let percent = this.data.get('percent') - 10;\n        if (percent &lt; 0) {\n            percent = 0;\n        }\n        this.data.set('percent', percent);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-circle-dynamic .san-btn > span {\n    margin-left: 0!important;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="进度圈动态展示"><span>进度圈动态展示</span><a href="#进度圈动态展示" class="anchor">#</a></h4><p>会动的进度条才是好进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":c.i,"s-button-group":c.i.Group,"s-progress":c.N},initData:()=>({percent:0}),increase(){let e=this.data.get("percent")+10;e>100&&(e=100),this.data.set("percent",e)},decline(){let e=this.data.get("percent")-10;e<0&&(e=0),this.data.set("percent",e)},template:'<div class="demo-circle-dynamic"><s-progress type="circle" percent="{{percent}}"></s-progress><s-button-group><s-button on-click="decline" icon="minus"></s-button><s-button on-click="increase" icon="plus"></s-button></s-button-group></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1622815887910"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),m=(s(707),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-format">\n        &lt;s-progress type="circle" percent="{{75}}" format="{{format1}}"/>\n        &lt;s-progress type="circle" percent="{{100}}" format="{{format2}}"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Progress, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-button-group\': Button.Group,\n        \'s-progress\': Progress\n    },\n    initData() {\n        return {\n            format1: percent => &#96;&#36;&#123;percent} Days&#96;,\n            format2: () => \'Done\'\n        };\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-format div.san-progress-circle,\n.demo-format div.san-progress-line {\n    margin-right: 8px;\n    margin-bottom: 8px;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="自定义文字格式"><span>自定义文字格式</span><a href="#自定义文字格式" class="anchor">#</a></h4><p><code>format</code> 属性指定格式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":c.i,"s-button-group":c.i.Group,"s-progress":c.N},initData:()=>({format1:e=>e+" Days",format2:()=>"Done"}),template:'<div class="demo-format"><s-progress type="circle" percent="{{75}}" format="{{format1}}"></s-progress><s-progress type="circle" percent="{{100}}" format="{{format2}}"></s-progress></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1622815887898"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress type="dashboard" percent="{{75}}"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="仪表盘"><span>仪表盘</span><a href="#仪表盘" class="anchor">#</a></h4><p>通过设置 <code>type=dashboard</code>，可以很方便地实现仪表盘样式的进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'<div><s-progress type="dashboard" percent="{{75}}"></s-progress></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1622815887888"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress percent="{{60}}" successPercent="{{30}}"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="分段进度条"><span>分段进度条</span><a href="#分段进度条" class="anchor">#</a></h4><p>标准的进度条。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'<div><s-progress percent="{{60}}" successPercent="{{30}}"></s-progress></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1622815887871"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-progress strokeLinecap="square" percent="{{75}}"/>\n        &lt;s-progress strokeLinecap="square" type="circle" percent="{{75}}"/>\n        &lt;s-progress strokeLinecap="square" type="dashboard" percent="{{75}}"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Progress} from \'santd\';\n\nexport default {\n    components: {\n        \'s-progress\': Progress\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="圆角方角边缘"><span>圆角/方角边缘</span><a href="#圆角方角边缘" class="anchor">#</a></h4><p>通过设定 <code>strokeLinecap=&quot;square|round&quot;</code> 可以调整进度条边缘的形状。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-progress":c.N},template:'<div><s-progress strokeLinecap="square" percent="{{75}}"></s-progress><s-progress strokeLinecap="square" type="circle" percent="{{75}}"></s-progress><s-progress strokeLinecap="square" type="dashboard" percent="{{75}}"></s-progress></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1622815887880"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},w={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>format</td><td>内容的模板函数</td><td>function(percent, successPercent)</td><td><code>percent =&gt; percent + &#39;%&#39;</code></td></tr><tr><td>gapDegree <code>(type=circle)</code></td><td>圆形进度条缺口角度，可取值 0 ~ 360</td><td>number</td><td>0</td></tr><tr><td>gapPosition <code>(type=circle)</code></td><td>圆形进度条缺口位置</td><td>Enum{ &#39;top&#39;, &#39;bottom&#39;, &#39;left&#39;, &#39;right&#39; }</td><td><code>top</code></td></tr><tr><td>percent</td><td>百分比</td><td>number</td><td>0</td></tr><tr><td>showInfo</td><td>是否显示进度数值或状态图标</td><td>boolean</td><td>true</td></tr><tr><td>status</td><td>状态，可选：<code>success</code> <code>exception</code> <code>active</code></td><td>string</td><td>-</td></tr><tr><td>strokeWidth <code>(type=line)</code></td><td>进度条线的宽度，单位 px</td><td>number</td><td>8</td></tr><tr><td>strokeWidth <code>(type=circle)</code></td><td>圆形进度条线的宽度，单位是进度条画布宽度的百分比</td><td>number</td><td>6</td></tr><tr><td>strokeLinecap</td><td></td><td>Enum{ &#39;round&#39;, &#39;square&#39; }</td><td><code>round</code></td></tr><tr><td>strokeColor</td><td>进度条的色彩</td><td>string</td><td>-</td></tr><tr><td>successPercent</td><td>已完成的分段百分比，<code>type=&quot;line&quot;</code> 时有效</td><td>number</td><td>0</td></tr><tr><td>type</td><td>类型，可选 <code>line</code> <code>circle</code> <code>dashboard</code></td><td>string</td><td><code>line</code></td></tr><tr><td>width <code>(type=circle)</code></td><td>圆形进度条画布宽度，单位 px</td><td>number</td><td>132</td></tr></tbody></table></section>'};t.default=o.a.defineComponent({template:"\n        <div>\n            <head/>\n            <line/>\n            <circle/>\n            <linemini/>\n            <circlemini/>\n            <dynamic/>\n            <circledynamic/>\n            <format/>\n            <dashboard/>\n            <segment/>\n            <linecap/>\n            <readme/>\n        </div>\n    ",components:{head:a,line:p,circle:r,linemini:d,circlemini:i,dynamic:l,circledynamic:g,format:m,dashboard:x,segment:h,linecap:u,readme:w}})},701:function(e,t,s){var n=s(4),o=s(702);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},702:function(e,t,s){(t=s(5)(!1)).push([e.i,"\n.san-progress-circle-wrap,\n.san-progress-line-wrap {\n    margin-right: 8px;\n    margin-bottom: 5px;\n}\n",""]),e.exports=t},703:function(e,t,s){var n=s(4),o=s(704);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},704:function(e,t,s){(t=s(5)(!1)).push([e.i,"\n.demo-dynamic .san-btn > span {\n    margin-left: 0!important;\n}\n",""]),e.exports=t},705:function(e,t,s){var n=s(4),o=s(706);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},706:function(e,t,s){(t=s(5)(!1)).push([e.i,"\n.demo-circle-dynamic .san-btn > span {\n    margin-left: 0!important;\n}\n",""]),e.exports=t},707:function(e,t,s){var n=s(4),o=s(708);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(o,a);e.exports=o.locals||{}},708:function(e,t,s){(t=s(5)(!1)).push([e.i,"\n.demo-format div.san-progress-circle,\n.demo-format div.san-progress-line {\n    margin-right: 8px;\n    margin-bottom: 8px;\n}\n",""]),e.exports=t}}]);