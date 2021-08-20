(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{519:function(n,e,t){"use strict";t.r(e);var o=t(0),s=t.n(o),i={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>disabled</td>\n<td>菜单是否禁用</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>getPopupContainer</td>\n<td>菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。</td>\n<td>Function(triggerNode)</td>\n<td><code>() =&gt; document.body</code></td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>菜单</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayClassName</td>\n<td>下拉根元素的类名称</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlayStyle</td>\n<td>下拉根元素的样式</td>\n<td>object</td>\n<td>-</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>菜单弹出位置：<code>bottomLeft</code> <code>bottomCenter</code> <code>bottomRight</code> <code>topLeft</code> <code>topCenter</code> <code>topRight</code></td>\n<td>string</td>\n<td><code>bottomLeft</code></td>\n</tr>\n<tr>\n<td>trigger</td>\n<td>触发下拉的行为：<code>hover</code> <code>click</code> <code>contextMenu</code>, 移动端不支持 hover</td>\n<td>string</td>\n<td><code>hover</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>菜单是否显示</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-visibleChange</td>\n<td>菜单显示状态改变时调用,参数为 visible</td>\n<td>Function(visible)</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<p><code>overlay</code> 菜单使用 Menu，还包括菜单项 <code>Menu.Item</code>，分割线 <code>Menu.Divider</code>。</p><blockquote>\n<p>注意： Menu.Item 必须设置唯一的 key 属性。</p><p>Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 <code>&lt;Menu selectable&gt;</code>.</p></blockquote>\n<h2 id="dropdownbutton"><span>Dropdown.Button</span><a href="#dropdownbutton" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>disabled</td>\n<td>菜单是否禁用</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>右侧的 icon 类型</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>overlay</td>\n<td>菜单</td>\n<td>同dropdown</td>\n<td>-</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>菜单弹出位置：<code>bottomLeft</code> <code>bottomCenter</code> <code>bottomRight</code> <code>topLeft</code> <code>topCenter</code> <code>topRight</code></td>\n<td>string</td>\n<td><code>bottom-start</code></td>\n</tr>\n<tr>\n<td>size</td>\n<td>按钮大小，和 <code>Button</code> 一致</td>\n<td>string</td>\n<td><code>default</code></td>\n</tr>\n<tr>\n<td>trigger</td>\n<td>触发形式,可选值: <code>hover</code>, <code>click</code></td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>type</td>\n<td>按钮类型，和 <code>Button</code> 一致</td>\n<td>string</td>\n<td><code>default</code></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>菜单是否显示</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>on-click</td>\n<td>点击左侧按钮的回调，和 <code>Button</code> 一致</td>\n<td>function</td>\n<td></td>\n</tr>\n<tr>\n<td>on-visibleChange</td>\n<td>菜单显示状态改变时调用</td>\n<td>function</td>\n<td></td>\n</tr>\n</tbody></table>\n</section>'},d={template:'<section class="markdown"><h1 id="dropdown-下拉菜单"><span>Dropdown 下拉菜单</span><a href="#dropdown-下拉菜单" class="anchor">#</a></h1><p>向下弹出的列表。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},a=t(8),m={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-dropdown>\n            &lt;s-menu prefixCls=\"{{prefixCls}}\" slot=\"overlay\">\n                &lt;s-menu-item s-for=\"n,index in data\" key=\"'{{index}}'\">\n                    &lt;a href=\"http://www.baidu.com\" target=\"_blank\">{{n}} menu item&lt;/a>\n                &lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;a href=\"javascript:;\">Hover me&lt;s-icon type=\"down\" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Icon, Dropdown, Menu} from 'santd';\n\nexport default {\n    components: {\n        's-dropdown': Dropdown,\n        's-icon': Icon,\n        's-menu': Menu,\n        's-menu-item': Menu.Item\n    },\n    initData() {\n        return {\n            data: ['1st', '2nd', '3rd']\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的下拉菜单。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":a.v,"s-icon":a.z,"s-menu":a.G,"s-menu-item":a.G.Item},initData:()=>({data:["1st","2nd","3rd"]}),template:'\n    <div>\n        <s-dropdown>\n            <s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                <s-menu-item s-for="n,index in data" key="\'{{index}}\'">\n                    <a href="http://www.baidu.com" target="_blank">{{n}} menu item</a>\n                </s-menu-item>\n            </s-menu>\n            <a href="javascript:;">Hover me<s-icon type="down"></s-icon></a>\n        </s-dropdown>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847385">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},c={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdown trigger="click">\n            &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                &lt;s-menu-item s-for="n,index in data" key="\'{{index}}\'">\n                    &lt;a href="http://www.baidu.com" target="_blank">{{n}} menu item&lt;/a>\n                &lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;a href="javascript:;">Click me&lt;s-icon type="down" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Icon, Dropdown, Menu} from \'santd\';\n\nexport default {\n    components: {\n        \'s-dropdown\': Dropdown,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item\n    },\n    initData() {\n        return {\n            data: [\'1st\', \'2nd\', \'3rd\']\n        }\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="触发方式"><span>触发方式</span><a href="#触发方式" class="anchor">#</a></h4><p>默认是移入触发菜单，可以点击触发。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":a.v,"s-icon":a.z,"s-menu":a.G,"s-menu-item":a.G.Item},initData:()=>({data:["1st","2nd","3rd"]}),template:'\n    <div>\n        <s-dropdown trigger="click">\n            <s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                <s-menu-item s-for="n,index in data" key="\'{{index}}\'">\n                    <a href="http://www.baidu.com" target="_blank">{{n}} menu item</a>\n                </s-menu-item>\n            </s-menu>\n            <a href="javascript:;">Click me<s-icon type="down"></s-icon></a>\n        </s-dropdown>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847380">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},l=t(71),p=(t(567),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdownbutton trigger="click" on-click="handleButtonClick" placement="bottomRight">\n            &lt;s-menu prefixCls="{{prefixCls}}" on-click="handleMenuClick" slot="overlay">\n                &lt;s-menu-item key="1">1st menu item&lt;/s-menu-item>\n                &lt;s-menu-item key="2">2nd memu item&lt;/s-menu-item>\n                &lt;s-menu-item key="3">3rd menu item&lt;/s-menu-item>\n            &lt;/s-menu>\n            DropDown\n        &lt;/s-dropdownbutton>\n        &lt;s-dropdownbutton trigger="click" disabled="{{true}}">\n            &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                &lt;s-menu-item key="1">1st menu item&lt;/s-menu-item>\n                &lt;s-menu-item key="2">2nd memu item&lt;/s-menu-item>\n                &lt;s-menu-item key="3">3rd menu item&lt;/s-menu-item>\n            &lt;/s-menu>\n            DropDown\n        &lt;/s-dropdownbutton>\n        &lt;s-dropdown trigger="click">\n            &lt;s-menu prefixCls="{{prefixCls}}" on-click="handleMenuClick" slot="overlay">\n                &lt;s-menu-item key="1">1st menu item&lt;/s-menu-item>\n                &lt;s-menu-item key="2">2nd memu item&lt;/s-menu-item>\n                &lt;s-menu-item key="3">3rd menu item&lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;s-button>DropDown &lt;s-icon type="down" />&lt;/s-button>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button, Icon, Dropdown, Menu} from \'santd\';\nimport message from \'santd/es/message\';\nimport \'santd/es/message/style\';\n\nexport default {\n    components: {\n        \'s-dropdown\': Dropdown,\n        \'s-dropdownbutton\': Dropdown.Button,\n        \'s-button\': Button,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item\n    },\n    handleButtonClick() {\n        message.info(\'Click on left button.\');\n    },\n    handleMenuClick(e) {\n        message.info(\'Click on menu item.\');\n        console.log(\'click\', e);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带下拉框的按钮"><span>带下拉框的按钮</span><a href="#带下拉框的按钮" class="anchor">#</a></h4><p>左边是按钮，右边是额外的相关功能菜单。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":a.v,"s-dropdownbutton":a.v.Button,"s-button":a.i,"s-icon":a.z,"s-menu":a.G,"s-menu-item":a.G.Item},handleButtonClick(){l.a.info("Click on left button.")},handleMenuClick(n){l.a.info("Click on menu item."),console.log("click",n)},template:'\n    <div>\n        <s-dropdownbutton trigger="click" on-click="handleButtonClick" placement="bottomRight">\n            <s-menu prefixCls="{{prefixCls}}" on-click="handleMenuClick" slot="overlay">\n                <s-menu-item key="1">1st menu item</s-menu-item>\n                <s-menu-item key="2">2nd memu item</s-menu-item>\n                <s-menu-item key="3">3rd menu item</s-menu-item>\n            </s-menu>\n            DropDown\n        </s-dropdownbutton>\n        <s-dropdownbutton trigger="click" disabled="{{true}}">\n            <s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                <s-menu-item key="1">1st menu item</s-menu-item>\n                <s-menu-item key="2">2nd memu item</s-menu-item>\n                <s-menu-item key="3">3rd menu item</s-menu-item>\n            </s-menu>\n            DropDown\n        </s-dropdownbutton>\n        <s-dropdown trigger="click">\n            <s-menu prefixCls="{{prefixCls}}" on-click="handleMenuClick" slot="overlay">\n                <s-menu-item key="1">1st menu item</s-menu-item>\n                <s-menu-item key="2">2nd memu item</s-menu-item>\n                <s-menu-item key="3">3rd menu item</s-menu-item>\n            </s-menu>\n            <s-button>DropDown <s-icon type="down"></s-icon></s-button>\n        </s-dropdown>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847372">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'}),r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdown trigger="hover">\n            &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                &lt;s-menu-item key="item-1">2nd menu item&lt;/s-menu-item>\n                &lt;s-sub-menu title="Sub-Menu" key="sub1">\n                    &lt;s-menu-item key="1">3rd menu item&lt;/s-menu-item>\n                    &lt;s-menu-item key="2">4th menu item&lt;/s-menu-item>\n                &lt;/s-sub-menu>\n                &lt;s-sub-menu title="disabled sub menu" disabled="{{true}}" key="sub2">\n                    &lt;s-menu-item key="3">5th menu item&lt;/s-menu-item>\n                    &lt;s-menu-item key="4">6th menu item&lt;/s-menu-item>\n                &lt;/s-sub-menu>\n            &lt;/s-menu>\n            &lt;a href="javascript:;">Cascading menu&lt;s-icon type="down" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button, Icon, Dropdown, Menu} from \'santd\';\n\nexport default {\n    components: {\n        \'s-dropdown\': Dropdown,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item,\n        \'s-sub-menu\': Menu.Sub\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="多级菜单"><span>多级菜单</span><a href="#多级菜单" class="anchor">#</a></h4><p>传入的菜单里有多个层级。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":a.v,"s-icon":a.z,"s-menu":a.G,"s-menu-item":a.G.Item,"s-sub-menu":a.G.Sub},template:'\n    <div>\n        <s-dropdown trigger="hover">\n            <s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                <s-menu-item key="item-1">2nd menu item</s-menu-item>\n                <s-sub-menu title="Sub-Menu" key="sub1">\n                    <s-menu-item key="1">3rd menu item</s-menu-item>\n                    <s-menu-item key="2">4th menu item</s-menu-item>\n                </s-sub-menu>\n                <s-sub-menu title="disabled sub menu" disabled="{{true}}" key="sub2">\n                    <s-menu-item key="3">5th menu item</s-menu-item>\n                    <s-menu-item key="4">6th menu item</s-menu-item>\n                </s-sub-menu>\n            </s-menu>\n            <a href="javascript:;">Cascading menu<s-icon type="down"></s-icon></a>\n        </s-dropdown>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847366">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdown>\n            &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                &lt;s-menu-item s-for="n,index in data" key="{{index}}">\n                    &lt;a href="http://www.baidu.com" target="_blank">{{n}} menu item&lt;/a>\n                &lt;/s-menu-item>\n                &lt;s-menu-divider />\n                &lt;s-menu-item disabled="{{true}}">3rd menu item（disabled）&lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;a href="javascript:;">Hover me&lt;s-icon type="down" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Icon, Dropdown, Menu} from \'santd\';\n\nexport default {\n    components: {\n        \'s-dropdown\': Dropdown,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item,\n        \'s-menu-divider\': Menu.MenuDivider\n    },\n    initData() {\n        return {\n            data: [\'1st\', \'2nd\']\n        }\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="其它元素"><span>其它元素</span><a href="#其它元素" class="anchor">#</a></h4><p>分割线和不可用菜单项。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":a.v,"s-icon":a.z,"s-menu":a.G,"s-menu-item":a.G.Item,"s-menu-divider":a.G.MenuDivider},initData:()=>({data:["1st","2nd"]}),template:'\n    <div>\n        <s-dropdown>\n            <s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                <s-menu-item s-for="n,index in data" key="{{index}}">\n                    <a href="http://www.baidu.com" target="_blank">{{n}} menu item</a>\n                </s-menu-item>\n                <s-menu-divider></s-menu-divider>\n                <s-menu-item disabled="{{true}}">3rd menu item（disabled）</s-menu-item>\n            </s-menu>\n            <a href="javascript:;">Hover me<s-icon type="down"></s-icon></a>\n        </s-dropdown>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847354">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdown>\n            &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay" on-click="handleClick">\n                &lt;s-menu-item key="1">1st menu item&lt;/s-menu-item>\n                &lt;s-menu-item key="2">2nd memu item&lt;/s-menu-item>\n                &lt;s-menu-item key="3">3rd menu item&lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;a href="javascript:;">Hover me, Click menu item&lt;s-icon type="down" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Icon, Dropdown, Menu} from \'santd\';\nimport message from \'santd/es/message\';\nimport \'santd/es/message/style\';\n\nexport default {\n    components: {\n        \'s-dropdown\': Dropdown,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item\n    },\n    handleClick({key, value}) {\n        message.info(&#96;Click item is: &#36;&#123;key}&#96;);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="触发事件"><span>触发事件</span><a href="#触发事件" class="anchor">#</a></h4><p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":a.v,"s-icon":a.z,"s-menu":a.G,"s-menu-item":a.G.Item},handleClick({key:n,value:e}){l.a.info("Click item is: "+n)},template:'\n    <div>\n        <s-dropdown>\n            <s-menu prefixCls="{{prefixCls}}" slot="overlay" on-click="handleClick">\n                <s-menu-item key="1">1st menu item</s-menu-item>\n                <s-menu-item key="2">2nd memu item</s-menu-item>\n                <s-menu-item key="3">3rd menu item</s-menu-item>\n            </s-menu>\n            <a href="javascript:;">Hover me, Click menu item<s-icon type="down"></s-icon></a>\n        </s-dropdown>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847347">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},x={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdown style="display:inline-block;margin-right: 10px;" s-for="placement in placemens" trigger="hover" placement="{{placement}}">\n            &lt;s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                &lt;s-menu-item key="item1">\n                    &lt;a target="_blank" href="http://www.baidu.com">1st menu item&lt;/a>\n                &lt;/s-menu-item>\n                &lt;s-menu-item key="item2">\n                    &lt;a target="_blank" href="http://www.baidu.com">2nd menu item&lt;/a>\n                &lt;/s-menu-item>\n                &lt;s-menu-item key="item3">\n                    &lt;a target="_blank" href="http://www.baidu.com">3rd menu item&lt;/a>\n                &lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;s-button>{{placement}}&lt;/s-button>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Button, Icon, Dropdown, Menu} from \'santd\';\n\nexport default {\n    components: {\n        \'s-dropdown\': Dropdown,\n        \'s-button\': Button,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item\n    },\n    initData() {\n        return {\n            placemens: [\'bottomLeft\', \'bottomCenter\', \'bottomRight\', \'topLeft\', \'topCenter\', \'topRight\']\n        }\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="弹出位置"><span>弹出位置</span><a href="#弹出位置" class="anchor">#</a></h4><p>支持 6 个弹出位置。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":a.v,"s-button":a.i,"s-menu":a.G,"s-menu-item":a.G.Item},initData:()=>({placemens:["bottomLeft","bottomCenter","bottomRight","topLeft","topCenter","topRight"]}),template:'\n    <div>\n        <s-dropdown style="display:inline-block;margin-right: 10px;" s-for="placement in placemens" trigger="hover" placement="{{placement}}">\n            <s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                <s-menu-item key="item1">\n                    <a target="_blank" href="http://www.baidu.com">1st menu item</a>\n                </s-menu-item>\n                <s-menu-item key="item2">\n                    <a target="_blank" href="http://www.baidu.com">2nd menu item</a>\n                </s-menu-item>\n                <s-menu-item key="item3">\n                    <a target="_blank" href="http://www.baidu.com">3rd menu item</a>\n                </s-menu-item>\n            </s-menu>\n            <s-button>{{placement}}</s-button>\n        </s-dropdown>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847333">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},w={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-dropdown visible="{{visible}}" on-visibleChange="onVisibleChange">\n            &lt;s-menu prefixCls="{{prefixCls}}" on-click="menuClick" slot="overlay">\n                &lt;s-menu-item key="1">Clicking me will not close the menu.&lt;/s-menu-item>\n                &lt;s-menu-item key="2">Clicking me will not close the menu also.&lt;/s-menu-item>\n                &lt;s-menu-item key="3">Clicking me will close the menu.&lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;a href="javascript:;">Hover me&lt;s-icon type="down" />&lt;/a>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Icon, Dropdown, Menu} from \'santd\';\n\nexport default {\n    components: {\n        \'s-dropdown\': Dropdown,\n        \'s-icon\': Icon,\n        \'s-menu\': Menu,\n        \'s-menu-item\': Menu.Item\n    },\n    initData() {\n        return {\n            visible: false\n        }\n    },\n    menuClick({key, value}) {\n        if (key === \'3\') {\n            this.data.set(\'visible\', false);\n        }\n    },\n    onVisibleChange(visible) {\n        this.data.set(\'visible\', visible);\n    }\n\n}\n&lt;/script></code></pre>',text:'\n<h4 id="菜单隐藏方式"><span>菜单隐藏方式</span><a href="#菜单隐藏方式" class="anchor">#</a></h4><p>默认是点击关闭菜单，可以关闭此功能。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":a.v,"s-icon":a.z,"s-menu":a.G,"s-menu-item":a.G.Item},initData:()=>({visible:!1}),menuClick({key:n,value:e}){"3"===n&&this.data.set("visible",!1)},onVisibleChange(n){this.data.set("visible",n)},template:'\n    <div>\n        <s-dropdown visible="{{visible}}" on-visibleChange="onVisibleChange">\n            <s-menu prefixCls="{{prefixCls}}" on-click="menuClick" slot="overlay">\n                <s-menu-item key="1">Clicking me will not close the menu.</s-menu-item>\n                <s-menu-item key="2">Clicking me will not close the menu also.</s-menu-item>\n                <s-menu-item key="3">Clicking me will close the menu.</s-menu-item>\n            </s-menu>\n            <a href="javascript:;">Hover me<s-icon type="down"></s-icon></a>\n        </s-dropdown>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847341">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-dropdown trigger=\"contextMenu\">\n            &lt;s-menu prefixCls=\"{{prefixCls}}\" slot=\"overlay\">\n                &lt;s-menu-item s-for=\"n,index in data\" key=\"'{{index}}'\">\n                    &lt;a href=\"http://www.baidu.com\" target=\"_blank\">{{n}} menu item&lt;/a>\n                &lt;/s-menu-item>\n            &lt;/s-menu>\n            &lt;span style=\"user-select: none;\">Right Click on Me&lt;/span>\n        &lt;/s-dropdown>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Icon, Dropdown, Menu} from 'santd';\n\nexport default {\n    components: {\n        's-dropdown': Dropdown,\n        's-icon': Icon,\n        's-menu': Menu,\n        's-menu-item': Menu.Item\n    },\n    initData() {\n        return {\n            data: ['1st', '2nd', '3rd']\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="右键菜单"><span>右键菜单</span><a href="#右键菜单" class="anchor">#</a></h4><p>默认是移入触发菜单，可以点击鼠标右键触发。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-dropdown":a.v,"s-icon":a.z,"s-menu":a.G,"s-menu-item":a.G.Item},initData:()=>({data:["1st","2nd","3rd"]}),template:'\n    <div>\n        <s-dropdown trigger="contextMenu">\n            <s-menu prefixCls="{{prefixCls}}" slot="overlay">\n                <s-menu-item s-for="n,index in data" key="\'{{index}}\'">\n                    <a href="http://www.baidu.com" target="_blank">{{n}} menu item</a>\n                </s-menu-item>\n            </s-menu>\n            <span style="user-select: none;">Right Click on Me</span>\n        </s-dropdown>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452847327">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};e.default=s.a.defineComponent({components:{readme:i,head:d,basic:m,click:c,button:p,menue:r,contextmenu:g,item:u,event:h,placement:x,visible:w},template:"\n        <div>\n            <head/>\n            <basic/>\n            <item/>\n            <event/>\n            <menue/>\n            <contextmenu/>\n            <placement/>\n            <click/>\n            <button/>\n            <visible/>\n            <readme/>\n        </div>\n    "})},567:function(n,e,t){"use strict";t(124)}}]);