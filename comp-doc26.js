(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{507:function(t,n,e){"use strict";e.r(n);var s=e(0),o=e.n(s),a={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="input"><span>input</span><a href="#input" class="anchor">#</a></h3><h3 id="基本api"><span>基本api</span><a href="#基本api" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>addonAfter</td>\n<td>设置后置标签</td>\n<td>string | slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>addonBefore</td>\n<td>设置前置标签</td>\n<td>string | slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>输入框默认内容</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>placeholder</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用状态，默认为 false</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>id</td>\n<td>输入框的 id</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>maxLength</td>\n<td>最大长度</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>带有前缀图标的 input</td>\n<td>string | slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>控件大小。注：标准表单内的输入框大小限制为 large。可选<code>large</code> <code>small</code></td>\n<td>string</td>\n<td>default</td>\n</tr>\n<tr>\n<td>suffix</td>\n<td>带有后缀图标的 input</td>\n<td>string | slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>type</td>\n<td>默认为text，支持input原生type类型,但最好只用text，其它type参照对应实现的组件<br>注意：textarea直接用<code>Input.TextArea</code>代替<code>type=&quot;textarea&quot;</code><br>并且<code>type=&quot;number&quot;</code>有单独的inputNumber组件实现</td>\n<td>string</td>\n<td>text</td>\n</tr>\n<tr>\n<td>value</td>\n<td>输入框内容</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>allowClear</td>\n<td>可以点击清除图标删除内容</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>输入框内容变化时的回调</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-pressEnter</td>\n<td>按下回车的回调</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-blur</td>\n<td>失去焦点时的回调</td>\n<td>function</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<h3 id="inputtextarea"><span>Input.TextArea</span><a href="#inputtextarea" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>autosize</td>\n<td>自适应内容高度，可设置为 <code>true|false</code> 或对象：<code>{ minRows: 2, maxRows: 6 }</code></td>\n<td>boolean|object</td>\n<td>-</td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td>输入框默认内容</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>value</td>\n<td>输入框内容</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-pressEnter</td>\n<td>按下回车的回调</td>\n<td>function</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<blockquote>\n<p>注：其他属性和浏览器自带的 textarea 一致</p></blockquote>\n<h3 id="inputsearch"><span>Input.Search</span><a href="#inputsearch" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>enterButton</td>\n<td>是否有确认按钮，可设为按钮文字。该属性会与 addon 冲突。</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-search</td>\n<td>当点击搜索时执行</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>搜索 loading</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n</tbody></table>\n<h3 id="inputgroup"><span>Input.Group</span><a href="#inputgroup" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>compact</td>\n<td>是否用紧凑模式</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>size</td>\n<td>Input.Group 中所有的 Input 的大小，可选 <code>large</code> <code>default</code> <code>small</code></td>\n<td>string</td>\n<td><code>default</code></td>\n</tr>\n</tbody></table>\n<blockquote>\n<p>例子：</p></blockquote>\n<pre><code class="language-html">&lt;s-input-group compact&gt;\n    &lt;s-input style=&quot;width: 20%&quot; defaultValue=&quot;0571&quot;/&gt;\n    &lt;s-input style=&quot;width: 30%&quot; defaultValue=&quot;26888888&quot;/&gt;\n&lt;/s-input-group&gt;</code></pre>\n<h3 id="inputpassword"><span>Input.Password</span><a href="#inputpassword" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>visibilityToggle</td>\n<td>是否显示切换按钮</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n</tbody></table>\n<h3 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>blur()</td>\n<td>取消焦点</td>\n</tr>\n<tr>\n<td>focus()</td>\n<td>获取焦点</td>\n</tr>\n</tbody></table>\n</section>'},p={template:'<section class="markdown"><h1 id="input-输入框"><span>Input 输入框</span><a href="#input-输入框" class="anchor">#</a></h1><p>通过鼠标或键盘输入内容，是最基础的表单域的包装。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul>\n<li>需要用户输入表单域内容时。</li>\n<li>提供组合型输入框，带搜索的输入框，还可以进行大小选择。</li>\n</ul>\n<h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},i=e(8),d={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-input placeholder=\"Basic useage\" />\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Input} from 'santd';\n\nexport default {\n    components: {\n        's-input': Input\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本形式"><span>基本形式</span><a href="#基本形式" class="anchor">#</a></h4><p>基本使用</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A},template:'\n    <div>\n        <s-input placeholder="Basic useage"></s-input>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447997">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />\n        &lt;/div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input defaultValue="mysite">\n                &lt;s-select defaultValue="http://" style="width:90px" slot="addonBefore">\n                    &lt;s-select-option value="http://">http://&lt;/s-select-option>\n                    &lt;s-select-option value="https://">https://&lt;/s-select-option>\n                &lt;/s-select>\n                &lt;s-select defaultValue=".com" style="width:90px" slot="addonAfter">\n                    &lt;s-select-option value=".com">.com&lt;/s-select-option>\n                    &lt;s-select-option value=".jp">.jp&lt;/s-select-option>\n                    &lt;s-select-option value=".cn">.cn&lt;/s-select-option>\n                    &lt;s-select-option value=".org">.org&lt;/s-select-option>\n                &lt;/s-select>\n            &lt;/s-input>\n        &lt;/div>\n        &lt;div>\n            &lt;s-input defaultValue="mysite">\n                &lt;s-icon slot="addonAfter" type="setting" />\n            &lt;/s-input>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input, Icon, Select} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-select\': Select,\n        \'s-select-option\': Select.Option,\n        \'s-icon\': Icon\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="前置后置标签"><span>前置/后置标签</span><a href="#前置后置标签" class="anchor">#</a></h4><p>用于配置一些固定组合。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A,"s-select":i.S,"s-select-option":i.S.Option,"s-icon":i.z},template:'\n    <div>\n        <div style="margin-bottom: 16px">\n            <s-input addonBefore="Http://" addonAfter=".com" defaultValue="mysite"></s-input>\n        </div>\n        <div style="margin-bottom: 16px">\n            <s-input defaultValue="mysite">\n                <s-select defaultValue="http://" style="width:90px" slot="addonBefore">\n                    <s-select-option value="http://">http://</s-select-option>\n                    <s-select-option value="https://">https://</s-select-option>\n                </s-select>\n                <s-select defaultValue=".com" style="width:90px" slot="addonAfter">\n                    <s-select-option value=".com">.com</s-select-option>\n                    <s-select-option value=".jp">.jp</s-select-option>\n                    <s-select-option value=".cn">.cn</s-select-option>\n                    <s-select-option value=".org">.org</s-select-option>\n                </s-select>\n            </s-input>\n        </div>\n        <div>\n            <s-input defaultValue="mysite">\n                <s-icon slot="addonAfter" type="setting"></s-icon>\n            </s-input>\n        </div>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447991">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input-search\n                placeholder="input search text"\n                on-search="onSearch"\n                style="width: 200px;"\n            >&lt;/s-input-search>\n        &lt;/div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input-search placeholder="input search text" enterButton="{{true}}" on-search="onSearch">&lt;/s-input-search>\n        &lt;/div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input-search placeholder="input search text" enterButton="Search" on-search="onSearch" size="large">&lt;/s-input-search>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-icon\': Icon,\n        \'s-input-search\': Input.Search\n    },\n    onSearch(value) {\n        console.log(\'the search value is: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="搜索框"><span>搜索框</span><a href="#搜索框" class="anchor">#</a></h4><p>带有搜索按钮的输入框。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A,"s-icon":i.z,"s-input-search":i.A.Search},onSearch(t){console.log("the search value is: ",t)},template:'\n    <div>\n        <div style="margin-bottom: 16px">\n            <s-input-search placeholder="input search text" on-search="onSearch" style="width: 200px;"></s-input-search>\n        </div>\n        <div style="margin-bottom: 16px">\n            <s-input-search placeholder="input search text" enterButton="{{true}}" on-search="onSearch"></s-input-search>\n        </div>\n        <div style="margin-bottom: 16px">\n            <s-input-search placeholder="input search text" enterButton="Search" on-search="onSearch" size="large"></s-input-search>\n        </div>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447984">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n&lt;div>\n    &lt;div style="margin-bottom: 16px">\n        &lt;s-input>\n            &lt;s-icon type="user" style="color: rgba(0, 0, 0, .25);" slot="prefix" />\n            &lt;s-tooltip title="Extra information" slot="suffix">\n                &lt;s-icon type="info-circle" style="color: rgba(0, 0, 0, .45);" />\n            &lt;/s-tooltip>\n        &lt;/s-input>\n    &lt;/div>\n    &lt;div style="margin-bottom: 16px">\n        &lt;s-input suffix="RMB" prefix="￥" />\n    &lt;/div>\n&lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input, Icon, Tooltip} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-icon\': Icon,\n        \'s-tooltip\': Tooltip\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="前缀和后缀"><span>前缀和后缀</span><a href="#前缀和后缀" class="anchor">#</a></h4><p>在输入框上添加前缀或后缀图标。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A,"s-icon":i.z,"s-tooltip":i.fb},template:'\n<div>\n    <div style="margin-bottom: 16px">\n        <s-input>\n            <s-icon type="user" style="color: rgba(0, 0, 0, .25);" slot="prefix"></s-icon>\n            <s-tooltip title="Extra information" slot="suffix">\n                <s-icon type="info-circle" style="color: rgba(0, 0, 0, .45);"></s-icon>\n            </s-tooltip>\n        </s-input>\n    </div>\n    <div style="margin-bottom: 16px">\n        <s-input suffix="RMB" prefix="￥"></s-input>\n    </div>\n</div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447980">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},u=(e(641),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div class="example-input">\n    &lt;s-input size="large" placeholder="large size" />\n    &lt;s-input placeholder="default size" />\n    &lt;s-input size="small" placeholder="small size" />\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input\': Input\n    },\n    onChange(value) {\n        console.log(\'the value is: \', value);\n    }\n}\n&lt;/script>\n&lt;style>\n.example-input .santd-input {\n    width: 200px;\n    margin: 0 8px 8px 0;\n  }\n&lt;/style></code></pre>',text:'\n<h4 id="三种大小"><span>三种大小</span><a href="#三种大小" class="anchor">#</a></h4><p>我们为 <code>&lt;Input /&gt;</code> 输入框定义了三种尺寸（大、默认、小），高度分别为 <code>40px</code>、<code>32px</code> 和 <code>24px</code>。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A},onChange(t){console.log("the value is: ",t)},template:'\n  <div class="example-input">\n    <s-input size="large" placeholder="large size"></s-input>\n    <s-input placeholder="default size"></s-input>\n    <s-input size="small" placeholder="small size"></s-input>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447972">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'}),h={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n&lt;div>\n    &lt;div style=\"margin-bottom: 10px;\">\n        &lt;s-textarea placeholder=\"please input something\" rows=\"5\" on-pressEnter=\"onPressEnter\" defaultValue=\"defaultValue\" value=\"{{textArea}}\" on-textareaBlur=\"onBlur\">&lt;/s-textarea>\n    &lt;/div>\n&lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input} from 'santd';\n\nexport default {\n    components: {\n        's-input': Input,\n        's-textarea': Input.TextArea\n    },\n    initData() {\n        return {\n            textArea: 'textarea'\n        }\n    },\n    attached() {\n        setTimeout(() => {\n            this.data.set('textArea', '这是textarea的value');\n        },1000);\n    },\n    onChange(value) {\n        console.log('the value is: ', value);\n    },\n    onPressEnter(value) {\n        console.log('pressEnter string is :', value);\n    },\n    onBlur(value) {\n        console.log('blur value is : ', value);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="文本域"><span>文本域</span><a href="#文本域" class="anchor">#</a></h4><p>用于多行输入。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A,"s-textarea":i.A.TextArea},initData:()=>({textArea:"textarea"}),attached(){setTimeout(()=>{this.data.set("textArea","这是textarea的value")},1e3)},onChange(t){console.log("the value is: ",t)},onPressEnter(t){console.log("pressEnter string is :",t)},onBlur(t){console.log("blur value is : ",t)},template:'\n<div>\n    <div style="margin-bottom: 10px;">\n        <s-textarea placeholder="please input something" rows="5" on-pressEnter="onPressEnter" defaultValue="defaultValue" value="{{textArea}}" on-textareaBlur="onBlur"></s-textarea>\n    </div>\n</div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447966">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n&lt;div>\n    &lt;div style="margin-bottom: 10px;">\n        &lt;s-textarea placeholder="Autosize height based on content lines" autosize="{{true}}">&lt;/s-textarea>\n    &lt;/div>\n    &lt;div style="margin-bottom: 10px;">\n        &lt;s-textarea placeholder="Autosize height with minimum and maximum number of lines" autosize="{{{minRows: 2, maxRows: 6}}}">&lt;/s-textarea>\n    &lt;/div>\n&lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-icon\': Icon,\n        \'s-textarea\': Input.TextArea\n    },\n    onChange(value) {\n        console.log(\'the value is: \', value);\n    },\n    onPressEnter(value) {\n        console.log(\'pressEnter string is :\', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="适应文本高度的文本域"><span>适应文本高度的文本域</span><a href="#适应文本高度的文本域" class="anchor">#</a></h4><p><code>autosize</code> 属性适用于 <code>textarea</code> 节点，并且只有高度会自动变化。此外 <code>autosize</code> 可以设定为一个对象，指定最小行数和最大行数。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A,"s-icon":i.z,"s-textarea":i.A.TextArea},onChange(t){console.log("the value is: ",t)},onPressEnter(t){console.log("pressEnter string is :",t)},template:'\n<div>\n    <div style="margin-bottom: 10px;">\n        <s-textarea placeholder="Autosize height based on content lines" autosize="{{true}}"></s-textarea>\n    </div>\n    <div style="margin-bottom: 10px;">\n        <s-textarea placeholder="Autosize height with minimum and maximum number of lines" autosize="{{{minRows: 2, maxRows: 6}}}"></s-textarea>\n    </div>\n</div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447939">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n&lt;div>\n    &lt;s-tooltip\n        trigger="click"\n        placement="topLeft"\n        title="{{value || \'Input a number\'}}"\n    >\n        &lt;s-input\n            placeholder="base useage"\n            on-change="onChange"\n            maxLength="20"\n            style="width:120px"\n        >&lt;/s-input>\n    &lt;/s-tooltip>\n&lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input, Tooltip} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-tooltip\': Tooltip\n    },\n    onChange(value) {\n        this.data.set(\'value\', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="输入时格式化展示"><span>输入时格式化展示</span><a href="#输入时格式化展示" class="anchor">#</a></h4><p>结合 <code>tooltip</code>组件，实现一个数值输入框，方便内容超长时的全量展现。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A,"s-tooltip":i.fb},onChange(t){this.data.set("value",t)},template:'\n<div>\n    <s-tooltip trigger="click" placement="topLeft" title="{{value || \'Input a number\'}}">\n        <s-input placeholder="base useage" on-change="onChange" maxLength="20" style="width:120px"></s-input>\n    </s-tooltip>\n</div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447944">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},g={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n  &lt;div>\n      &lt;s-input-group size="large">\n          &lt;s-row gutter="{{8}}">\n            &lt;s-col span="{{5}}">\n              &lt;s-input defaultValue="0571" />\n          &lt;/s-col>\n            &lt;s-col span="{{8}}">\n              &lt;s-input defaultValue="26888888" />\n            &lt;/s-col>\n        &lt;/s-row>\n      &lt;/s-input-group>\n      &lt;br/>\n      &lt;s-input-group compact="{{true}}">\n          &lt;s-input style="width: 20%" defaultValue="0571" />\n          &lt;s-input style="width: 30%" defaultValue="26888888" />\n    &lt;/s-input-group>\n    &lt;br/>\n    &lt;s-input-group compact="{{true}}">\n        &lt;s-select defaultValue="zhejiang" style="width:120px">\n          &lt;s-select-option value="zhejiang">Zhejiang&lt;/s-select-option>\n          &lt;s-select-option value="jiangsu">Jiangsu&lt;/s-select-option>\n        &lt;/s-select>\n        &lt;s-input style="width: 50%" defaultValue="Xihu District, Hangzhou"/>\n    &lt;/s-input-group>\n    &lt;br/>\n    &lt;s-input-group compact="{{true}}">\n        &lt;s-select defaultValue="Option" style="width:120px">\n          &lt;s-select-option value="Option">Option&lt;/s-select-option>\n          &lt;s-select-option value="Option">Option&lt;/s-select-option>\n        &lt;/s-select>\n        &lt;s-input style="width: 50%" defaultValue="input content"/>\n        &lt;s-inputnumber/>\n    &lt;/s-input-group>\n    &lt;br/>\n    &lt;s-input-group compact="{{true}}">\n        &lt;s-input style="width: 50%" defaultValue="input content"/>\n        &lt;s-datepicker />\n    &lt;/s-input-group>\n    &lt;br/>\n    &lt;s-input-group compact="{{true}}">\n        &lt;s-select defaultValue="Option1-1" style="width:120px">\n          &lt;s-select-option value="Option1-1">Option1-1&lt;/s-select-option>\n          &lt;s-select-option value="Option1-2">Option1-2&lt;/s-select-option>\n        &lt;/s-select>\n        &lt;s-select defaultValue="Option2-1" style="width:120px">\n          &lt;s-select-option value="Option2-1">Option2-1&lt;/s-select-option>\n          &lt;s-select-option value="Option2-2">Option2-2&lt;/s-select-option>\n        &lt;/s-select>\n    &lt;/s-input-group>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input, Icon, Grid, Select, InputNumber, DatePicker} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-input-group\': Input.Group,\n        \'s-row\': Grid.Row,\n        \'s-col\': Grid.Col,\n        \'s-select\': Select,\n        \'s-select-option\': Select.Option,\n        \'s-inputnumber\': InputNumber,\n        \'s-datepicker\': DatePicker\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="输入框组合"><span>输入框组合</span><a href="#输入框组合" class="anchor">#</a></h4><p>输入框的组合展现。\n注意：使用 <code>compact</code> 模式时，不需要通过 <code>Col</code> 来控制宽度。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A,"s-input-group":i.A.Group,"s-row":i.y.Row,"s-col":i.y.Col,"s-select":i.S,"s-select-option":i.S.Option,"s-inputnumber":i.B,"s-datepicker":i.r},template:'\n  <div>\n      <s-input-group size="large">\n          <s-row gutter="{{8}}">\n            <s-col span="{{5}}">\n              <s-input defaultValue="0571"></s-input>\n          </s-col>\n            <s-col span="{{8}}">\n              <s-input defaultValue="26888888"></s-input>\n            </s-col>\n        </s-row>\n      </s-input-group>\n      <br>\n      <s-input-group compact="{{true}}">\n          <s-input style="width: 20%" defaultValue="0571"></s-input>\n          <s-input style="width: 30%" defaultValue="26888888"></s-input>\n    </s-input-group>\n    <br>\n    <s-input-group compact="{{true}}">\n        <s-select defaultValue="zhejiang" style="width:120px">\n          <s-select-option value="zhejiang">Zhejiang</s-select-option>\n          <s-select-option value="jiangsu">Jiangsu</s-select-option>\n        </s-select>\n        <s-input style="width: 50%" defaultValue="Xihu District, Hangzhou"></s-input>\n    </s-input-group>\n    <br>\n    <s-input-group compact="{{true}}">\n        <s-select defaultValue="Option" style="width:120px">\n          <s-select-option value="Option">Option</s-select-option>\n          <s-select-option value="Option">Option</s-select-option>\n        </s-select>\n        <s-input style="width: 50%" defaultValue="input content"></s-input>\n        <s-inputnumber></s-inputnumber>\n    </s-input-group>\n    <br>\n    <s-input-group compact="{{true}}">\n        <s-input style="width: 50%" defaultValue="input content"></s-input>\n        <s-datepicker></s-datepicker>\n    </s-input-group>\n    <br>\n    <s-input-group compact="{{true}}">\n        <s-select defaultValue="Option1-1" style="width:120px">\n          <s-select-option value="Option1-1">Option1-1</s-select-option>\n          <s-select-option value="Option1-2">Option1-2</s-select-option>\n        </s-select>\n        <s-select defaultValue="Option2-1" style="width:120px">\n          <s-select-option value="Option2-1">Option2-1</s-select-option>\n          <s-select-option value="Option2-2">Option2-2</s-select-option>\n        </s-select>\n    </s-input-group>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447928">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},v={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n&lt;div>\n    &lt;s-input placeholder="input with clear icon" allowClear="{{true}}" on-change="onChange"/>\n&lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input\': Input\n    },\n    onChange(value) {\n        console.log(value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带移除图标"><span>带移除图标</span><a href="#带移除图标" class="anchor">#</a></h4><p>带移除图标的输入框，点击图标删除所有内容</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A},onChange(t){console.log(t)},template:'\n<div>\n    <s-input placeholder="input with clear icon" allowClear="{{true}}" on-change="onChange"></s-input>\n</div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447919">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},w={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n    &lt;s-input-password placeholder=\"input password\" on-change=\"onChange\"/>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input} from 'santd';\n\nexport default {\n    components: {\n        's-input-password': Input.Password\n    },\n    onChange(value) {\n        console.log('the value is: ', value);\n    },\n}\n&lt;/script></code></pre>",text:'\n<h4 id="密码框"><span>密码框</span><a href="#密码框" class="anchor">#</a></h4><p>密码框</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input-password":i.A.Password},onChange(t){console.log("the value is: ",t)},template:'\n  <div>\n    <s-input-password placeholder="input password" on-change="onChange"></s-input-password>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447914">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},b={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input-search\n                placeholder="input search text"\n                on-search="onSearch"\n                style="width: 200px;"\n                loading="{{true}}"\n            >&lt;/s-input-search>\n        &lt;/div>\n        &lt;div style="margin-bottom: 16px">\n            &lt;s-input-search loading="{{true}}" placeholder="input search text" enterButton="{{true}}" on-search="onSearch">&lt;/s-input-search>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Input, Icon} from \'santd\';\n\nexport default {\n    components: {\n        \'s-input\': Input,\n        \'s-icon\': Icon,\n        \'s-input-search\': Input.Search\n    },\n    onSearch(value) {\n        console.log(\'the search value is: \', value);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="搜索框loading"><span>搜索框loading</span><a href="#搜索框loading" class="anchor">#</a></h4><p>用于 onSearch 的时候展示 loading。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-input":i.A,"s-icon":i.z,"s-input-search":i.A.Search},onSearch(t){console.log("the search value is: ",t)},template:'\n    <div>\n        <div style="margin-bottom: 16px">\n            <s-input-search placeholder="input search text" on-search="onSearch" style="width: 200px;" loading="{{true}}"></s-input-search>\n        </div>\n        <div style="margin-bottom: 16px">\n            <s-input-search loading="{{true}}" placeholder="input search text" enterButton="{{true}}" on-search="onSearch"></s-input-search>\n        </div>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1627640447923">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};n.default=o.a.defineComponent({components:{readme:a,head:p,basic:d,addon:l,psfix:r,search:c,size:u,group:g,textarea:h,autoarea:x,tooltip:m,allow:v,password:w,loading:b},template:"\n        <div>\n            <head/>\n            <basic/>\n            <addon/>\n            <search/>\n            <loading/>\n            <autoarea/>\n            <psfix/>\n            <allow/>\n            <size/>\n            <group/>\n            <textarea/>\n            <tooltip/>\n            <password/>\n            <readme/>\n        </div>\n    "})},641:function(t,n,e){var s=e(4),o=e(642);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1};s(o,a);t.exports=o.locals||{}},642:function(t,n,e){(n=e(5)(!1)).push([t.i,"\n.example-input .santd-input {\n    width: 200px;\n    margin: 0 8px 8px 0;\n  }\n",""]),t.exports=n}}]);