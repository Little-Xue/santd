(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{570:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>dashed</td><td>是否虚线</td><td>Boolean</td><td>false</td></tr><tr><td>orientation</td><td>分割线标题的位置</td><td>enum: <code>left</code> <code>right</code></td><td><code>center</code></td></tr><tr><td>type</td><td>水平还是垂直类型</td><td>enum: <code>horizontal</code> <code>vertical</code></td><td><code>horizontal</code></td></tr></tbody></table></section>'},d={template:'<section class="markdown"><h1 id="divider-分割线"><span>Divider 分割线</span><a href="#divider-分割线" class="anchor">#</a></h1><p>区隔内容的分割线。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>对不同章节的文本段落进行分割。</li><li>对行内文字/链接进行分割，例如表格的操作列。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},s=i(8),r={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.&lt;/p>\n        &lt;s-divider />\n        &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.&lt;/p>\n        &lt;s-divider dashed=\"{{true}}\" />\n        &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.&lt;/p>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Divider} from 'santd';\n\nexport default {\n    components: {\n        's-divider': Divider\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="水平分割线"><span>水平分割线</span><a href="#水平分割线" class="anchor">#</a></h4><p>默认为水平分割线，可在中间加入文字。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-divider":s.t},template:'<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p><s-divider></s-divider><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p><s-divider dashed="{{true}}"></s-divider><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755123307"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.&lt;/p>\n        &lt;s-divider>Text&lt;/s-divider>\n        &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.&lt;/p>\n        &lt;s-divider orientation="left">Left Text&lt;/s-divider>\n        &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.&lt;/p>\n        &lt;s-divider orientation="right">Right Text&lt;/s-divider>\n        &lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.&lt;/p>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Divider} from \'santd\';\n\nexport default {\n    components: {\n        \'s-divider\': Divider\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带文字的分割线"><span>带文字的分割线</span><a href="#带文字的分割线" class="anchor">#</a></h4><p>分割线中带有文字，可以用 <code>orientation</code> 指定文字位置。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-divider":s.t},template:'<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p><s-divider>Text</s-divider><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p><s-divider orientation="left">Left Text</s-divider><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p><s-divider orientation="right">Right Text</s-divider><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755123297"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        Text\n        &lt;s-divider type="vertical" />\n        &lt;a href="#">Link&lt;/a>\n        &lt;s-divider type="vertical" />\n        &lt;a href="#">Link&lt;/a>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Divider} from \'santd\';\n\nexport default {\n    components: {\n        \'s-divider\': Divider\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="垂直分割线"><span>垂直分割线</span><a href="#垂直分割线" class="anchor">#</a></h4><p>使用 <code>type=&quot;vertical&quot;</code> 设置为行内的垂直分割线。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-divider":s.t},template:'<div>Text<s-divider type="vertical"></s-divider><a href="#">Link</a><s-divider type="vertical"></s-divider><a href="#">Link</a></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755123292"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};t.default=o.a.defineComponent({components:{readme:a,horizontal:r,orientation:c,vertical:p,desc:d},template:"\n        <div>\n            <desc/>\n            <horizontal/>\n            <orientation/>\n            <vertical/>\n            <readme/>\n        </div>\n    "})}}]);