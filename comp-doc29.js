(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{539:function(t,n,e){"use strict";e.r(n);var a=e(0),s=e.n(a),i={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="list"><span>List</span><a href="#list" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>bordered</td>\n<td>是否展示边框</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>footer</td>\n<td>列表底部</td>\n<td>string|slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>grid</td>\n<td>列表栅格配置</td>\n<td>object</td>\n<td>-</td>\n</tr>\n<tr>\n<td>header</td>\n<td>列表头部</td>\n<td>string|slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>itemLayout</td>\n<td>设置 List.Item 布局, 设置成<code>vertical</code>则竖直样式显示, 默认横排</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>当卡片内容还在加载中时，可以用 loading 展示一个占位</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>loadMore</td>\n<td>加载更多</td>\n<td>boolean|slot</td>\n<td>false</td>\n</tr>\n<tr>\n<td>locale</td>\n<td>默认文案设置，目前包括没有数据文案</td>\n<td>object</td>\n<td>{emptyText: 没有数据}</td>\n</tr>\n<tr>\n<td>pagination</td>\n<td>对应的 <code>pagination</code> 配置, 设置 <code>false</code> 不显示</td>\n<td>boolean|object</td>\n<td>false</td>\n</tr>\n<tr>\n<td>size</td>\n<td>list 的尺寸</td>\n<td><code>default</code> | <code>middle</code> | <code>small</code></td>\n<td>default</td>\n</tr>\n</tbody></table>\n<h3 id="pagination"><span>pagination</span><a href="#pagination" class="anchor">#</a></h3><p>分页的配置项</p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>position</td>\n<td>指定分页显示的位置</td>\n<td>&#39;top&#39; | &#39;bottom&#39; | &#39;both&#39; | &#39;bottom&#39;</td>\n<td></td>\n</tr>\n</tbody></table>\n<p>更多配置项，请查看 Pagination</p><h4 id="list-grid-props"><span>List grid props</span><a href="#list-grid-props" class="anchor">#</a></h4><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>column</td>\n<td>列数</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>gutter</td>\n<td>栅格间隔</td>\n<td>number</td>\n<td>0</td>\n</tr>\n<tr>\n<td>xs</td>\n<td>&lt;576px 展示的列数</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>sm</td>\n<td>≥576px 展示的列数</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>md</td>\n<td>≥768px 展示的列数</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>lg</td>\n<td>≥992px 展示的列数</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>xl</td>\n<td>≥1200px 展示的列数</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>xxl</td>\n<td>≥1600px 展示的列数</td>\n<td>number</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<h3 id="listitem"><span>List.Item</span><a href="#listitem" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>actions</td>\n<td>列表操作组对应的slot名称，根据 <code>itemLayout</code> 的不同, 位置在卡片底部或者最右侧</td>\n<td>Array</td>\n<td>-</td>\n</tr>\n<tr>\n<td>extra</td>\n<td>额外内容, 通常用在 <code>itemLayout</code> 为 <code>vertical</code> 的情况下, 展示右侧内容; <code>horizontal</code> 展示在列表元素最右侧</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<h4 id="listitemmeta"><span>List.Item.Meta</span><a href="#listitemmeta" class="anchor">#</a></h4><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>avatar</td>\n<td>列表元素的图标</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>description</td>\n<td>列表元素的描述内容</td>\n<td>string|slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>title</td>\n<td>列表元素的标题</td>\n<td>string|slot</td>\n<td>-</td>\n</tr>\n</tbody></table>\n</section>'},o={template:'<section class="markdown"><h1 id="list-列表"><span>List 列表</span><a href="#list-列表" class="anchor">#</a></h1><p>通用列表。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},d=e(8),l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;h3 style="margin-bottom: 16px;">Default Size&lt;/h3>\n        &lt;s-list bordered="{{true}}" dataSource="{{data}}">\n            &lt;div slot="header">Header&lt;/div>\n            &lt;s-list-item slot="renderItem">&lt;s-text mark>[ITEM]&lt;/s-text> {{item}}&lt;/s-list-item>\n            &lt;div slot="footer">Footer&lt;/div>\n        &lt;/s-list>\n        &lt;h3 style="margin: 16px 0;">Small Size&lt;/h3>\n        &lt;s-list bordered="{{true}}" dataSource="{{data}}" size="small">\n            &lt;div slot="header">Header&lt;/div>\n            &lt;s-list-item slot="renderItem">{{item}}&lt;/s-list-item>\n            &lt;div slot="footer">Footer&lt;/div>\n        &lt;/s-list>\n        &lt;h3 style="margin: 16px 0;">Large Size&lt;/h3>\n        &lt;s-list bordered="{{true}}" dataSource="{{data}}" size="large">\n            &lt;div slot="header">Header&lt;/div>\n            &lt;s-list-item slot="renderItem">{{item}}&lt;/s-list-item>\n            &lt;div slot="footer">Footer&lt;/div>\n        &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {List, Icon, Typography} from \'santd\';\n\nexport default {\n    components: {\n        \'s-list\': List,\n        \'s-list-item\': List.Item,\n        \'s-text\': Typography.Text\n    },\n    initData() {\n        return {\n            data: [\n                \'Racing car sprays burning fuel into crowd.\',\n                \'Japanese princess to wed commoner.\',\n                \'Australian walks 100km after outback crash.\',\n                \'Man charged over missing wedding girl.\',\n                \'Los Angeles battles huge wildfires.\'\n            ]\n        }\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="简单列表"><span>简单列表</span><a href="#简单列表" class="anchor">#</a></h4><p>列表拥有大、中、小三种尺寸。\n通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。\n可通过设置 <code>header</code> 和 <code>footer</code>，来自定义列表头部和尾部。\n如果<code>header</code>或 <code>footer</code>是个复杂结构，比如里面需要放组件，那么支持用<code>slot</code>来处理。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-list":d.D,"s-list-item":d.D.Item,"s-text":d.jb.Text},initData:()=>({data:["Racing car sprays burning fuel into crowd.","Japanese princess to wed commoner.","Australian walks 100km after outback crash.","Man charged over missing wedding girl.","Los Angeles battles huge wildfires."]}),template:'\n    <div>\n        <h3 style="margin-bottom: 16px;">Default Size</h3>\n        <s-list bordered="{{true}}" dataSource="{{data}}">\n            <div slot="header">Header</div>\n            <s-list-item slot="renderItem"><s-text mark="">[ITEM]</s-text> {{item}}</s-list-item>\n            <div slot="footer">Footer</div>\n        </s-list>\n        <h3 style="margin: 16px 0;">Small Size</h3>\n        <s-list bordered="{{true}}" dataSource="{{data}}" size="small">\n            <div slot="header">Header</div>\n            <s-list-item slot="renderItem">{{item}}</s-list-item>\n            <div slot="footer">Footer</div>\n        </s-list>\n        <h3 style="margin: 16px 0;">Large Size</h3>\n        <s-list bordered="{{true}}" dataSource="{{data}}" size="large">\n            <div slot="header">Header</div>\n            <s-list-item slot="renderItem">{{item}}</s-list-item>\n            <div slot="footer">Footer</div>\n        </s-list>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452846964">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},r={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-list itemLayout=\"horizontal\" dataSource=\"{{data}}\">\n            &lt;s-list-item slot=\"renderItem\">\n                &lt;s-list-item-meta\n                    description=\"{{item.description}}\"\n                >\n                    &lt;s-avatar slot=\"avatar\" src=\"{{item.src}}\">&lt;/s-avatar>\n                    &lt;a slot=\"title\" href=\"#\">{{item.title}}&lt;/a>\n                &lt;/s-list-item-meta>\n            &lt;/s-list-item>\n        &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {List, Avatar} from 'santd';\n\nexport default {\n    components: {\n        's-list': List,\n        's-list-item': List.Item,\n        's-list-item-meta': List.Item.Meta,\n        's-avatar': Avatar\n    },\n    initData() {\n        return {\n            data: [\n                {\n                    title: 'santd Title 1',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 2',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 3',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 4',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n            ]\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基础列表"><span>基础列表</span><a href="#基础列表" class="anchor">#</a></h4><p>基础列表</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-list":d.D,"s-list-item":d.D.Item,"s-list-item-meta":d.D.Item.Meta,"s-avatar":d.e},initData:()=>({data:[{title:"santd Title 1",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 2",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 3",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 4",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"}]}),template:'\n    <div>\n        <s-list itemLayout="horizontal" dataSource="{{data}}">\n            <s-list-item slot="renderItem">\n                <s-list-item-meta description="{{item.description}}">\n                    <s-avatar slot="avatar" src="{{item.src}}"></s-avatar>\n                    <a slot="title" href="#">{{item.title}}</a>\n                </s-list-item-meta>\n            </s-list-item>\n        </s-list>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452846953">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};const c=[];for(let t=0;t<23;t++)c.push({href:"#",title:"San design part "+t,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"San Design, a design language for background applications, is refined by Baidu App Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."});var p={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-list\n            itemLayout="vertical"\n            size="large"\n            pagination="{{pagination}}"\n            dataSource="{{listData}}"\n        >\n            &lt;s-list-item slot="renderItem" key="{{item.title}}" actions="{{[\'star\', \'like\', \'message\']}}">\n                &lt;span slot="star">&lt;s-icon type="star-o" style="margin-right: 8px;" />156&lt;/span>\n                &lt;span slot="like">&lt;s-icon type="like-o" style="margin-right: 8px;" />156&lt;/span>\n                &lt;span slot="message">&lt;s-icon type="message" style="margin-right: 8px;" />2&lt;/span>\n                &lt;ul slot="actions" class="{{prefixCls}}-item-action">\n                    &lt;li>&lt;s-icon type="star-o" style="margin-right: 8px;" />156&lt;/li>\n                    &lt;li>&lt;s-icon type="like-o" style="margin-right: 8px;" />156&lt;/li>\n                    &lt;li>&lt;s-icon type="message" style="margin-right: 8px;" />2&lt;/li>\n                &lt;/ul>\n                &lt;img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="logo" width="272" slot="extra">\n                &lt;s-list-item-meta description="{{item.description}}">\n                    &lt;s-avatar src="{{item.avatar}}" slot="avatar">&lt;/s-avatar>\n                    &lt;a href="{{item.href}}" slot="title">{{item.title}}&lt;/a>\n                &lt;/s-list-item-meta>\n                {{item.content}}\n            &lt;/s-list-item>\n            &lt;div slot="footer">&lt;b>Santd&lt;/b> footer part&lt;/div>\n        &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {List, Icon, Avatar} from \'santd\';\n\nconst listData = [];\nfor (let i = 0; i &lt; 23; i++) {\n    listData.push({\n        href: \'#\',\n        title: &#96;San design part &#36;&#123;i}&#96;,\n        avatar: \'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\',\n        description: \'San Design, a design language for background applications, is refined by Baidu App Team.\',\n        content: \'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\',\n    });\n}\n\nexport default {\n    components: {\n        \'s-icon\': Icon,\n        \'s-list\': List,\n        \'s-list-item\': List.Item,\n        \'s-list-item-meta\': List.Item.Meta,\n        \'s-avatar\': Avatar\n    },\n    initData() {\n        return {\n            listData: listData,\n            pagination: {\n                onChange(page) {\n                    console.log(page);\n                },\n                pageSize: 3\n            }\n        }\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="竖排列表样式"><span>竖排列表样式</span><a href="#竖排列表样式" class="anchor">#</a></h4><p>通过设置 <code>itemLayout</code> 属性为 <code>vertical</code> 可实现竖排列表样式。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-icon":d.z,"s-list":d.D,"s-list-item":d.D.Item,"s-list-item-meta":d.D.Item.Meta,"s-avatar":d.e},initData:()=>({listData:c,pagination:{onChange(t){console.log(t)},pageSize:3}}),template:'\n    <div>\n        <s-list itemLayout="vertical" size="large" pagination="{{pagination}}" dataSource="{{listData}}">\n            <s-list-item slot="renderItem" key="{{item.title}}" actions="{{[\'star\', \'like\', \'message\']}}">\n                <span slot="star"><s-icon type="star-o" style="margin-right: 8px;"></s-icon>156</span>\n                <span slot="like"><s-icon type="like-o" style="margin-right: 8px;"></s-icon>156</span>\n                <span slot="message"><s-icon type="message" style="margin-right: 8px;"></s-icon>2</span>\n                <ul slot="actions" class="{{prefixCls}}-item-action">\n                    <li><s-icon type="star-o" style="margin-right: 8px;"></s-icon>156</li>\n                    <li><s-icon type="like-o" style="margin-right: 8px;"></s-icon>156</li>\n                    <li><s-icon type="message" style="margin-right: 8px;"></s-icon>2</li>\n                </ul>\n                <img src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt="logo" width="272" slot="extra">\n                <s-list-item-meta description="{{item.description}}">\n                    <s-avatar src="{{item.avatar}}" slot="avatar"></s-avatar>\n                    <a href="{{item.href}}" slot="title">{{item.title}}</a>\n                </s-list-item-meta>\n                {{item.content}}\n            </s-list-item>\n            <div slot="footer"><b>Santd</b> footer part</div>\n        </s-list>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452846946">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m=(e(658),{initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-list\n            grid=\"{{{gutter:16, column:4}}}\"\n            dataSource=\"{{data}}\"\n        >\n            &lt;s-list-item slot=\"renderItem\">\n                &lt;s-card title=\"{{item.title}}\">{{item.content}}&lt;/s-card>\n           &lt;/s-list-item>\n       &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {List, Card} from 'santd';\n\nexport default {\n    components: {\n        's-list': List,\n        's-list-item': List.Item,\n        's-card': Card\n    },\n    initData() {\n        return {\n            data: [\n                {\n                    title: 'santd Title 1',\n                    content: 'Santd, content1!'\n                },\n                {\n                    title: 'santd Title 2',\n                    content: 'Santd, content2!'\n                },\n                {\n                    title: 'santd Title 3',\n                    content: 'Santd, content3!'\n                },\n                {\n                    title: 'santd Title 4',\n                    content: 'Santd, content4!'\n                },\n            ]\n        }\n    }\n}\n&lt;/script>\n&lt;style>\n.title {\n    width: 100%;\n    height:35px;\n    line-height: 35px;\n    color:#666;\n    border-bottom: 1px solid #ccc;\n}\n.content {\n    width: 100%;\n    height: 70px;\n    color: #333;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="栅格列表"><span>栅格列表</span><a href="#栅格列表" class="anchor">#</a></h4><p>可以通过设置 <code>List</code> 的 <code>grid</code> 属性来实现栅格列表，<code>column</code> 可设置期望显示的列数。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-list":d.D,"s-list-item":d.D.Item,"s-card":d.k},initData:()=>({data:[{title:"santd Title 1",content:"Santd, content1!"},{title:"santd Title 2",content:"Santd, content2!"},{title:"santd Title 3",content:"Santd, content3!"},{title:"santd Title 4",content:"Santd, content4!"}]}),template:'\n    <div>\n        <s-list grid="{{{gutter:16, column:4}}}" dataSource="{{data}}">\n            <s-list-item slot="renderItem">\n                <s-card title="{{item.title}}">{{item.content}}</s-card>\n           </s-list-item>\n       </s-list>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452846957">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'}),g={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-list\n            grid=\"{{\n                {gutter:16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}\n            }}\"\n            dataSource=\"{{data}}\"\n        >\n            &lt;s-list-item slot=\"renderItem\">\n                &lt;s-card title=\"{{item.title}}\">{{item.content}}&lt;/s-card>\n           &lt;/s-list-item>\n       &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {List, Card} from 'santd';\n\nexport default {\n    components: {\n        's-list': List,\n        's-list-item': List.Item,\n        's-card': Card\n    },\n    initData() {\n        return {\n            data: [\n                {\n                    title: 'santd Title 1',\n                    content: 'Santd, content1!'\n                },\n                {\n                    title: 'santd Title 2',\n                    content: 'Santd, content2!'\n                },\n                {\n                    title: 'santd Title 3',\n                    content: 'Santd, content3!'\n                },\n                {\n                    title: 'santd Title 4',\n                    content: 'Santd, content4!'\n                },\n                {\n                    title: 'santd Title 5',\n                    content: 'Santd, content4!'\n                },\n                {\n                    title: 'santd Title 6',\n                    content: 'Santd, content4!'\n                }\n            ]\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="响应式的栅格列表"><span>响应式的栅格列表</span><a href="#响应式的栅格列表" class="anchor">#</a></h4><p>响应式的栅格列表。尺寸与 Layout Grid 保持一致。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-list":d.D,"s-list-item":d.D.Item,"s-card":d.k},initData:()=>({data:[{title:"santd Title 1",content:"Santd, content1!"},{title:"santd Title 2",content:"Santd, content2!"},{title:"santd Title 3",content:"Santd, content3!"},{title:"santd Title 4",content:"Santd, content4!"},{title:"santd Title 5",content:"Santd, content4!"},{title:"santd Title 6",content:"Santd, content4!"}]}),template:'\n    <div>\n        <s-list grid="{{\n                {gutter:16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}\n            }}" dataSource="{{data}}">\n            <s-list-item slot="renderItem">\n                <s-card title="{{item.title}}">{{item.content}}</s-card>\n           </s-list-item>\n       </s-list>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452846878">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},h={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-list\n            class=\"demo-loadmore-list\"\n            loading=\"{{initLoading}}\"\n            itemLayout=\"horizontal\"\n            dataSource=\"{{list}}\"\n        >\n            &lt;s-list-item slot=\"renderItem\" actions=\"{{['edit', 'more']}}\">\n                &lt;a slot=\"edit\">edit&lt;/a>\n                &lt;a slot=\"more\">more&lt;/a>\n                &lt;s-skeleton avatar=\"{{true}}\" loading=\"{{item.loading}}\" active=\"{{true}}\">\n                    &lt;s-list-item-meta description=\"San Design, a design language for background applications, is refined by Baidu App Team\">\n                        &lt;s-avatar src=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\" slot=\"avatar\">&lt;/s-avatar>\n                        &lt;a href=\"#\" slot=\"title\">{{item.title}}&lt;/a>\n                    &lt;/s-list-item-meta>\n                &lt;/s-skeleton>\n            &lt;/s-list-item>\n            &lt;div\n                s-if=\"!initLoading && !loading\" slot=\"loadMore\"\n                style=\"text-align: center; margin-top: 12px; height: 32px; line-height: 32px;\"\n            >&lt;s-button on-click=\"handleLoadMore\">loading more&lt;/s-button>&lt;/div>\n        &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {List, Avatar, Button, Skeleton} from 'santd';\n\nexport default {\n    components: {\n        's-list': List,\n        's-list-item': List.Item,\n        's-list-item-meta': List.Item.Meta,\n        's-avatar': Avatar,\n        's-button': Button,\n        's-skeleton': Skeleton\n    },\n    initData() {\n        return {\n            initLoading: true,\n            loading: false,\n            list: [],\n            data: [],\n            defaultData: [\n                {\n                    title: 'santd Title 1',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 2',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 3',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n                {\n                    title: 'santd Title 4',\n                    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',\n                    description: 'Santd, a design language for background applications, is refined by Baidu Team'\n                },\n            ]\n        }\n    },\n    getData(callback) {\n        window.setTimeout(() => {\n            const defaultData = this.data.get('defaultData');\n            callback(defaultData);\n        }, 2000);\n    },\n    attached() {\n        this.getData((res) => {\n            this.data.set('initLoading', false);\n            res = res.map(item => {\n                item.loading = false;\n                return item;\n            });\n            this.data.set('list', res);\n            this.data.set('data', res);\n        });\n    },\n    handleLoadMore() {\n        this.data.set('loading', true);\n        this.data.push('list', {loading: true, title: true});\n\n        this.getData((res) => {\n            res = res.map(item => {\n                item.loading = false;\n                return item;\n            });\n\n            this.data.pop('list');\n            console.log(res);\n            res.forEach(item => {\n                this.data.push('list', item);\n            });\n            this.data.set('loading', false);\n        });\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="加载更多"><span>加载更多</span><a href="#加载更多" class="anchor">#</a></h4><p>可通过 loadMore 属性实现加载更多功能。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-list":d.D,"s-list-item":d.D.Item,"s-list-item-meta":d.D.Item.Meta,"s-avatar":d.e,"s-button":d.i,"s-skeleton":d.T},initData:()=>({initLoading:!0,loading:!1,list:[],data:[],defaultData:[{title:"santd Title 1",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 2",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 3",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"},{title:"santd Title 4",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Santd, a design language for background applications, is refined by Baidu Team"}]}),getData(t){window.setTimeout(()=>{const n=this.data.get("defaultData");t(n)},2e3)},attached(){this.getData(t=>{this.data.set("initLoading",!1),t=t.map(t=>(t.loading=!1,t)),this.data.set("list",t),this.data.set("data",t)})},handleLoadMore(){this.data.set("loading",!0),this.data.push("list",{loading:!0,title:!0}),this.getData(t=>{t=t.map(t=>(t.loading=!1,t)),this.data.pop("list"),console.log(t),t.forEach(t=>{this.data.push("list",t)}),this.data.set("loading",!1)})},template:'\n    <div>\n        <s-list class="demo-loadmore-list" loading="{{initLoading}}" itemLayout="horizontal" dataSource="{{list}}">\n            <s-list-item slot="renderItem" actions="{{[\'edit\', \'more\']}}">\n                <a slot="edit">edit</a>\n                <a slot="more">more</a>\n                <s-skeleton avatar="{{true}}" loading="{{item.loading}}" active="{{true}}">\n                    <s-list-item-meta description="San Design, a design language for background applications, is refined by Baidu App Team">\n                        <s-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" slot="avatar"></s-avatar>\n                        <a href="#" slot="title">{{item.title}}</a>\n                    </s-list-item-meta>\n                </s-skeleton>\n            </s-list-item>\n            <div s-if="!initLoading && !loading" slot="loadMore" style="text-align: center; margin-top: 12px; height: 32px; line-height: 32px;"><s-button on-click="handleLoadMore">loading more</s-button></div>\n        </s-list>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452846871">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};n.default=s.a.defineComponent({components:{readme:i,desc:o,simple:l,basic:r,vertical:p,grid:m,resposive:g,loadmore:h},template:"\n        <div>\n            <desc/>\n            <simple/>\n            <basic/>\n            <loadmore/>\n            <vertical/>\n            <grid/>\n            <resposive/>\n            <readme/>\n        </div>\n    "})},658:function(t,n,e){var a=e(4),s=e(659);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var i={insert:"head",singleton:!1};a(s,i);t.exports=s.locals||{}},659:function(t,n,e){(n=e(5)(!1)).push([t.i,"\n.title {\n    width: 100%;\n    height:35px;\n    line-height: 35px;\n    color:#666;\n    border-bottom: 1px solid #ccc;\n}\n.content {\n    width: 100%;\n    height: 70px;\n    color: #333;\n}\n",""]),t.exports=n}}]);