(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{537:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o={template:'<section class="markdown"><h1 id="checkbox-多选框"><span>Checkbox 多选框</span><a href="#checkbox-多选框" class="anchor">#</a></h1><p>多选框。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul>\n<li>在一组可选项中进行多项选择时；</li>\n<li>单独使用可以表示两种状态之间的切换，和 <code>switch</code> 类似。区别在于切换 <code>switch</code> 会直接触发状态改变，而 <code>checkbox</code> 一般用于状态标记，需要和提交操作配合。</li>\n</ul>\n<h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},s=t(8),d={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-checkbox on-change=\"handleChange\">checkbox&lt;/s-checkbox>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Checkbox} from 'santd';\n\nexport default {\n    components:{\n       's-checkbox': Checkbox\n    },\n    handleChange(e) {\n        console.log(&#96;checked = &#36;&#123;e.target.checked}&#96;);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本用法"><span>基本用法</span><a href="#基本用法" class="anchor">#</a></h4><p>简单的checkbox</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-checkbox":s.n},handleChange(e){console.log("checked = "+e.target.checked)},template:'\n    <div>\n        <s-checkbox on-change="handleChange">checkbox</s-checkbox>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847961">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="checkbox-demo">\n        &lt;s-checkbox defaultChecked="{{false}}" disabled="{{true}}" />\n        &lt;br />\n        &lt;s-checkbox defaultChecked="{{true}}" disabled="{{true}}" />\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Checkbox} from \'santd\';\n\nexport default {\n    components:{\n       \'s-checkbox\': Checkbox\n    }\n\n}\n&lt;/script></code></pre>',text:'\n<h4 id="不可用"><span>不可用</span><a href="#不可用" class="anchor">#</a></h4><p>checkbox不可用。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-checkbox":s.n},template:'\n    <div class="checkbox-demo">\n        <s-checkbox defaultChecked="{{false}}" disabled="{{true}}"></s-checkbox>\n        <br>\n        <s-checkbox defaultChecked="{{true}}" disabled="{{true}}"></s-checkbox>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847957">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},i={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;p style=\"margin-bottom: 20px;\">\n            &lt;s-checkbox on-change=\"handleChange\" checked=\"{{checked}}\" disabled=\"{{disabled}}\">{{label}}&lt;/s-checkbox>\n        &lt;/p>\n        &lt;p>\n            &lt;s-button type=\"primary\" size=\"small\" on-click=\"handleChecked\">{{checked ? 'Check' : 'Uncheck'}}&lt;/s-button>\n            &lt;s-button type=\"primary\" size=\"small\" on-click=\"handleDisable\">{{disabled ? 'Disable' : 'Enable'}}&lt;/s-button>\n        &lt;/p>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Checkbox, Button} from 'santd';\n\nexport default {\n    components:{\n       's-checkbox': Checkbox,\n       's-button': Button\n    },\n    computed: {\n        label() {\n            const checked = this.data.get('checked');\n            const disabled = this.data.get('disabled');\n\n            return (checked ? 'Checked' : 'Unchecked') + '-' + (disabled ? 'Disabled' : 'Enable');\n        }\n    },\n    initData() {\n        return {\n            checked: true,\n            disabled: false\n        }\n    },\n    handleChecked() {\n        this.data.set('checked', !this.data.get('checked'));\n    },\n    handleDisable() {\n        this.data.set('disabled', !this.data.get('disabled'));\n    },\n    handleChange(e) {\n        console.log('checked = ', e.target.checked);\n        this.data.set('checked', e.target.checked);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="受控的checkbox"><span>受控的Checkbox</span><a href="#受控的checkbox" class="anchor">#</a></h4><p>联动Checkbox。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-checkbox":s.n,"s-button":s.i},computed:{label(){return(this.data.get("checked")?"Checked":"Unchecked")+"-"+(this.data.get("disabled")?"Disabled":"Enable")}},initData:()=>({checked:!0,disabled:!1}),handleChecked(){this.data.set("checked",!this.data.get("checked"))},handleDisable(){this.data.set("disabled",!this.data.get("disabled"))},handleChange(e){console.log("checked = ",e.target.checked),this.data.set("checked",e.target.checked)},template:'\n    <div>\n        <p style="margin-bottom: 20px;">\n            <s-checkbox on-change="handleChange" checked="{{checked}}" disabled="{{disabled}}">{{label}}</s-checkbox>\n        </p>\n        <p>\n            <s-button type="primary" size="small" on-click="handleChecked">{{checked ? \'Check\' : \'Uncheck\'}}</s-button>\n            <s-button type="primary" size="small" on-click="handleDisable">{{disabled ? \'Disable\' : \'Enable\'}}</s-button>\n        </p>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847937">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};const p=["Apple","Pear","Orange"],h=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],r=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!1}];var x={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"checkbox-demo\">\n        &lt;s-checkboxgroup options=\"{{plainOptions}}\" defaultValue=\"{{['Apple']}}\" on-change=\"handleChange\">&lt;/s-checkboxgroup>\n        &lt;br />&lt;br />\n        &lt;s-checkboxgroup options=\"{{options}}\" defaultValue=\"{{['Pear']}}\" on-change=\"handleChange\">&lt;/s-checkboxgroup>\n        &lt;br />&lt;br />\n        &lt;s-checkboxgroup options=\"{{optionsWithDisabled}}\" disabled=\"{{true}}\" defaultValue=\"{{['Apple']}}\" on-change=\"handleChange\">&lt;/s-checkboxgroup>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Checkbox} from 'santd';\n\nconst plainOptions = ['Apple', 'Pear', 'Orange'];\n\nconst options = [\n    {label: 'Apple', value: 'Apple'},\n    {label: 'Pear', value: 'Pear'},\n    {label: 'Orange', value: 'Orange'}\n];\nconst optionsWithDisabled = [\n    {label: 'Apple', value: 'Apple'},\n    {label: 'Pear', value: 'Pear'},\n    {label: 'Orange', value: 'Orange', disabled: false}\n];\n\nexport default {\n    components:{\n       's-checkboxgroup': Checkbox.Group\n    },\n    computed: {\n        groupValueAllJson() {\n            let groupValue = this.data.get('groupValueAll');\n            return JSON.stringify(groupValue);\n        }\n    },\n    initData() {\n        return {\n            plainOptions,\n            options,\n            optionsWithDisabled\n        };\n    },\n    handleChange(checkedValues) {\n        console.log('checked = ', checkedValues);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="checkbox组"><span>Checkbox组</span><a href="#checkbox组" class="anchor">#</a></h4><p>方便的从数组生成Checkbox组。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-checkboxgroup":s.n.Group},computed:{groupValueAllJson(){let e=this.data.get("groupValueAll");return JSON.stringify(e)}},initData:()=>({plainOptions:p,options:h,optionsWithDisabled:r}),handleChange(e){console.log("checked = ",e)},template:'\n    <div class="checkbox-demo">\n        <s-checkboxgroup options="{{plainOptions}}" defaultValue="{{[\'Apple\']}}" on-change="handleChange"></s-checkboxgroup>\n        <br><br>\n        <s-checkboxgroup options="{{options}}" defaultValue="{{[\'Pear\']}}" on-change="handleChange"></s-checkboxgroup>\n        <br><br>\n        <s-checkboxgroup options="{{optionsWithDisabled}}" disabled="{{true}}" defaultValue="{{[\'Apple\']}}" on-change="handleChange"></s-checkboxgroup>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847932">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};const b=["Apple","Pear","Orange"],g=["Apple","Orange"];var k={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;div style=\"border-bottom: 1px solid #E9E9E9\">\n            &lt;s-checkbox indeterminate=\"{{indeterminate}}\" on-change=\"handleAllChange\" checked=\"{{checkAll}}\">Check All&lt;/s-checkbox>\n        &lt;/div>\n        &lt;br />\n        &lt;s-checkboxgroup options=\"{{plainOptions}}\" value=\"{{checkedList}}\" on-change=\"handleChange\">&lt;/s-checkboxgroup>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Checkbox} from 'santd';\n\nconst plainOptions = ['Apple', 'Pear', 'Orange'];\nconst defaultCheckedList = ['Apple', 'Orange'];\n\nexport default {\n    components:{\n        's-checkbox': Checkbox,\n       's-checkboxgroup': Checkbox.Group\n    },\n    computed: {\n        groupValueAllJson() {\n            let groupValue = this.data.get('groupValueAll');\n            return JSON.stringify(groupValue);\n        }\n    },\n    initData() {\n        return {\n            plainOptions,\n            checkedList: defaultCheckedList,\n            indeterminate: true,\n            checkAll: false\n        };\n    },\n    handleChange(checkedList) {\n        const plainOptions = this.data.get('plainOptions');\n        this.data.set('checkedList', checkedList);\n        this.data.set('indeterminate', !!checkedList.length && (checkedList.length &lt; plainOptions.length));\n        this.data.set('checkAll', checkedList.length === plainOptions.length);\n    },\n    handleAllChange(e) {\n        const plainOptions = this.data.get('plainOptions');\n        this.data.set('checkedList', e.target.checked ? plainOptions : []);\n        this.data.set('indeterminate', false);\n        this.data.set('checkAll', e.target.checked);\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="全选"><span>全选</span><a href="#全选" class="anchor">#</a></h4><p>在实现全选效果时，你可能会用到 indeterminate 属性。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-checkbox":s.n,"s-checkboxgroup":s.n.Group},computed:{groupValueAllJson(){let e=this.data.get("groupValueAll");return JSON.stringify(e)}},initData:()=>({plainOptions:b,checkedList:g,indeterminate:!0,checkAll:!1}),handleChange(e){const n=this.data.get("plainOptions");this.data.set("checkedList",e),this.data.set("indeterminate",!!e.length&&e.length<n.length),this.data.set("checkAll",e.length===n.length)},handleAllChange(e){const n=this.data.get("plainOptions");this.data.set("checkedList",e.target.checked?n:[]),this.data.set("indeterminate",!1),this.data.set("checkAll",e.target.checked)},template:'\n    <div>\n        <div style="border-bottom: 1px solid #E9E9E9">\n            <s-checkbox indeterminate="{{indeterminate}}" on-change="handleAllChange" checked="{{checkAll}}">Check All</s-checkbox>\n        </div>\n        <br>\n        <s-checkboxgroup options="{{plainOptions}}" value="{{checkedList}}" on-change="handleChange"></s-checkboxgroup>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847926">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-checkboxgroup on-change="handleChange" style="{{{width: \'100%\'}}}">\n            &lt;s-row>\n                &lt;s-col span="8">&lt;s-checkbox value="A">A&lt;/s-checkbox>&lt;/s-col>\n                &lt;s-col span="8">&lt;s-checkbox value="B">B&lt;/s-checkbox>&lt;/s-col>\n                &lt;s-col span="8">&lt;s-checkbox value="C">C&lt;/s-checkbox>&lt;/s-col>\n                &lt;s-col span="8">&lt;s-checkbox value="D">D&lt;/s-checkbox>&lt;/s-col>\n                &lt;s-col span="8">&lt;s-checkbox value="E">E&lt;/s-checkbox>&lt;/s-col>\n            &lt;/s-row>\n        &lt;/s-checkboxgroup>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Checkbox, Grid} from \'santd\';\n\nexport default {\n    components:{\n        \'s-row\': Grid.Row,\n        \'s-col\': Grid.Col,\n        \'s-checkbox\': Checkbox,\n        \'s-checkboxgroup\': Checkbox.Group\n    },\n    handleChange(checkedValues) {\n        console.log(\'checked = \', checkedValues);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="布局"><span>布局</span><a href="#布局" class="anchor">#</a></h4><p>Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-row":s.y.Row,"s-col":s.y.Col,"s-checkbox":s.n,"s-checkboxgroup":s.n.Group},handleChange(e){console.log("checked = ",e)},template:'\n    <div>\n        <s-checkboxgroup on-change="handleChange" style="{{{width: \'100%\'}}}">\n            <s-row>\n                <s-col span="8"><s-checkbox value="A">A</s-checkbox></s-col>\n                <s-col span="8"><s-checkbox value="B">B</s-checkbox></s-col>\n                <s-col span="8"><s-checkbox value="C">C</s-checkbox></s-col>\n                <s-col span="8"><s-checkbox value="D">D</s-checkbox></s-col>\n                <s-col span="8"><s-checkbox value="E">E</s-checkbox></s-col>\n            </s-row>\n        </s-checkboxgroup>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847919">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="checkbox"><span>Checkbox</span><a href="#checkbox" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>autoFocus</td>\n<td>自动获取焦点</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>指定当前是否选中</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>defaultChecked</td>\n<td>初始是否选中</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>失效状态</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>indeterminate</td>\n<td>设置 indeterminate 状态，只负责样式控制</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>变化时回调函数</td>\n<td>Function(e:Event)</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<h3 id="checkbox-group"><span>Checkbox Group</span><a href="#checkbox-group" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>defaultValue</td>\n<td>默认选中的项</td>\n<td>string[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>整组失效</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>name</td>\n<td><code>CheckboxGroup</code> 下所有 <code>input[type=&quot;checkbox&quot;]</code> 的 <code>name</code> 属性</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>options</td>\n<td>指定可选项</td>\n<td>string[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>value</td>\n<td>指定选中的选项</td>\n<td>string[]</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>变化时回调函数</td>\n<td>Function(checkedValue)</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<h2 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h2><h3 id="checkbox-1"><span>Checkbox</span><a href="#checkbox-1" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>blur()</td>\n<td>移除焦点</td>\n</tr>\n<tr>\n<td>focus()</td>\n<td>获取焦点</td>\n</tr>\n</tbody></table>\n</section>'};n.default=c.a.defineComponent({components:{desc:o,basic:d,disabled:l,controller:i,group:x,checkall:k,grid:u,readme:m},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <disabled/>\n            <controller/>\n            <group/>\n            <checkall/>\n            <grid/>\n            <readme/>\n        </div>\n    "})}}]);