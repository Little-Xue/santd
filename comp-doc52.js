(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{549:function(n,t,e){"use strict";e.r(t);var s=e(0),d=e.n(s),a={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>autoFocus</td>\n<td>组件自动获取焦点</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>checkedChildren</td>\n<td>选中时的内容</td>\n<td>string|slot</td>\n<td></td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>初始是否选中</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>加载中的开关</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>size</td>\n<td>开关大小，可选值：<code>default</code> <code>small</code></td>\n<td>string</td>\n<td>default</td>\n</tr>\n<tr>\n<td>unCheckedChildren</td>\n<td>非选中时的内容</td>\n<td>string|slot</td>\n<td></td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>变化时回调函数</td>\n<td>Function(checked:Boolean)</td>\n<td></td>\n</tr>\n<tr>\n<td>on-click</td>\n<td>点击时回调函数</td>\n<td>Function(checked:Boolean)</td>\n<td></td>\n</tr>\n</tbody></table>\n<h2 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>blur()</td>\n<td>移除焦点</td>\n</tr>\n<tr>\n<td>focus()</td>\n<td>获取焦点</td>\n</tr>\n</tbody></table>\n</section>'},c={template:'<section class="markdown"><h1 id="switch-开关"><span>Switch 开关</span><a href="#switch-开关" class="anchor">#</a></h1><p>开关选择器</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul>\n<li>需要表示开关状态/两种状态之间的切换时；</li>\n<li>和 <code>checkbox</code>的区别是，切换 <code>switch</code> 会直接触发状态改变，而 <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。<h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></li>\n</ul>\n</section>'},o=e(8),i={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-switch on-change='onChange' defaultChecked=\"{{true}}\" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Switch} from 'santd';\n\nexport default {\n    components: {\n        's-switch': Switch\n    },\n    initData() {\n        return {\n            checked: true,\n        }\n    },\n    onChange(checked) {\n        console.log(checked);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-switch":o.Z},initData:()=>({checked:!0}),onChange(n){console.log(n)},template:'\n    <div>\n        <s-switch on-change="onChange" defaultChecked="{{true}}"></s-switch>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845708">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-switch disabled=\"{{disabled}}\" defaultChecked=\"{{true}}\"/>\n        &lt;br />&lt;br />\n        &lt;s-button type=\"primary\" on-click=\"handleToggle\">Toggle disabled&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Switch, Button} from 'santd';\n\nexport default {\n    components: {\n        's-switch': Switch,\n        's-button': Button\n    },\n    initData() {\n        return {\n            disabled: true\n        }\n    },\n    handleToggle() {\n        this.data.set('disabled', !this.data.get('disabled'));\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="不可用"><span>不可用</span><a href="#不可用" class="anchor">#</a></h4><p>Switch 失效状态</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-switch":o.Z,"s-button":o.i},initData:()=>({disabled:!0}),handleToggle(){this.data.set("disabled",!this.data.get("disabled"))},template:'\n    <div>\n        <s-switch disabled="{{disabled}}" defaultChecked="{{true}}"></s-switch>\n        <br><br>\n        <s-button type="primary" on-click="handleToggle">Toggle disabled</s-button>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845704">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-switch defaultChecked="{{true}}" />\n        &lt;br />\n        &lt;s-switch defaultChecked="{{true}}" size="small" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Switch} from \'santd\';\n\nexport default {\n    components: {\n        \'s-switch\': Switch\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="两种大小"><span>两种大小</span><a href="#两种大小" class="anchor">#</a></h4><p><code>size=&quot;small&quot;</code> 表示小号开关。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-switch":o.Z},template:'\n    <div>\n        <s-switch defaultChecked="{{true}}"></s-switch>\n        <br>\n        <s-switch defaultChecked="{{true}}" size="small"></s-switch>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845700">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},h={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-switch defaultChecked=\"{{true}}\" on-change='onChange'>\n            &lt;template slot='checkedChildren'>N&lt;/template>\n            &lt;template slot='unCheckedChildren'>Y&lt;/template>\n        &lt;/s-switch>&lt;br />\n         &lt;s-switch defaultChecked=\"{{true}}\" disabled=\"{{true}}\" on-change='onChange' checkedChildren=\"1\" unCheckedChildren=\"0\" />&lt;br />\n         &lt;s-switch defaultChecked=\"{{true}}\" on-change='onChange'>&lt;br />\n            &lt;s-icon slot='checkedChildren' type=\"check\" />\n            &lt;s-icon slot='unCheckedChildren' type=\"login\" />\n        &lt;/s-switch>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Switch, Icon} from 'santd';\n\nexport default {\n    components: {\n        's-switch': Switch,\n        's-icon': Icon,\n    },\n    initData() {\n        return {\n            checked: true,\n        }\n    },\n    onChange(checked) {\n        console.log(checked);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="文字和图标"><span>文字和图标</span><a href="#文字和图标" class="anchor">#</a></h4><p>带有文字和图标。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-switch":o.Z,"s-icon":o.z},initData:()=>({checked:!0}),onChange(n){console.log(n)},template:'\n    <div>\n        <s-switch defaultChecked="{{true}}" on-change="onChange">\n            <template slot="checkedChildren">N</template>\n            <template slot="unCheckedChildren">Y</template>\n        </s-switch><br>\n         <s-switch defaultChecked="{{true}}" disabled="{{true}}" on-change="onChange" checkedChildren="1" unCheckedChildren="0"></s-switch><br>\n         <s-switch defaultChecked="{{true}}" on-change="onChange"><br>\n            <s-icon slot="checkedChildren" type="check"></s-icon>\n            <s-icon slot="unCheckedChildren" type="login"></s-icon>\n        </s-switch>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845695">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-switch loading="{{true}}" defaultChecked="{{true}}" />&lt;br />\n        &lt;s-switch loading="{{true}}" size="small"/>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Switch} from \'santd\';\n\nexport default {\n    components: {\n        \'s-switch\': Switch\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="加载中"><span>加载中</span><a href="#加载中" class="anchor">#</a></h4><p>标识开关操作仍在执行中。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-switch":o.Z},template:'\n    <div>\n        <s-switch loading="{{true}}" defaultChecked="{{true}}"></s-switch><br>\n        <s-switch loading="{{true}}" size="small"></s-switch>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845690">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};t.default=d.a.defineComponent({components:{readme:a,basic:i,disabled:l,size:p,text:h,loading:r,description:c},template:'\n    <div class="form">\n        <description />\n        <basic />\n        <disabled />\n        <size />\n        <text />\n        <loading />\n        <readme />\n    </div>\n    '})}}]);