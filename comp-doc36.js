(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{557:function(n,t,e){"use strict";e.r(t);var a=e(0),s=e.n(a),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>title</td>\n<td>自定义标题文字</td>\n<td>String</td>\n<td>-</td>\n</tr>\n<tr>\n<td>subTitle</td>\n<td>自定义的二级标题文字</td>\n<td>String</td>\n<td>-</td>\n</tr>\n<tr>\n<td>avatar</td>\n<td>标题栏旁的头像，参考 <code>Avatar</code> 组件</td>\n<td>Object</td>\n<td>-</td>\n</tr>\n<tr>\n<td>backIcon</td>\n<td>自定义 back icon ，如果为 false 不渲染 back icon</td>\n<td>slot | boolean</td>\n<td><code>&lt;s-icon type=&quot;arrow-left&quot; /&gt;</code></td>\n</tr>\n<tr>\n<td>tags</td>\n<td>title 旁的 tag 列表</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>extra</td>\n<td>操作区，位于 title 行的行尾</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>breadcrumb</td>\n<td>面包屑的配置</td>\n<td>详见Breadcrumb</td>\n<td>-</td>\n</tr>\n<tr>\n<td>footer</td>\n<td>PageHeader 的页脚，一般用于渲染 TabBar</td>\n<td>slot</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onBack</td>\n<td>返回按钮的点击事件</td>\n<td><code>()=&gt;void</code></td>\n<td><code>()=&gt;history.back()</code></td>\n</tr>\n</tbody></table>\n</section>'},i=e(8),d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-pageheader\n            onBack="{{onBack}}"\n            title="Title"\n            subTitle="This is a subtitle">\n        &lt;/s-pageheader>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {PageHeader} from \'santd\';\n\n\nexport default {\n    components: {\n        \'s-pageheader\': PageHeader\n    },\n    initData() {\n        return {\n            onBack: () => {\n                console.log(\'onBack\');\n            }\n        }\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="标准样式"><span>标准样式</span><a href="#标准样式" class="anchor">#</a></h4><p>标准页头，适合使用在需要简单描述的场景。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-pageheader":i.J},initData:()=>({onBack:()=>{console.log("onBack")}}),template:'\n    <div>\n        <s-pageheader onBack="{{onBack}}" title="Title" subTitle="This is a subtitle">\n        </s-pageheader>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845869">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},c={template:'<section class="markdown"><h1 id="pageheader-页头"><span>PageHeader 页头</span><a href="#pageheader-页头" class="anchor">#</a></h1><p>页头可用于声明页面主题、展示用户所关注的页面重要信息，以及承载与当前页相关的操作项（包含页面级操作，页面间导航等）</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n  &lt;div>\n  \t&lt;s-pageheader\n        onBack=\"{{onBack}}\"\n        title=\"Title\"\n        subTitle=\"This is a subtitle\"\n        breadcrumb=\"{{breadcrumb}}\">&lt;/s-pageheader>\n  &lt;/div>\n&lt;/template>\n&lt;script>\nimport {PageHeader} from 'santd';\n\nexport default {\n    components: {\n        's-pageheader': PageHeader\n    },\n    initData() {\n        return {\n            onBack: () => {\n                console.log('onBack');\n            },\n            breadcrumb: {\n                routes: [\n                    {\n                        path: 'index',\n                        breadcrumbName: 'First-level Menu',\n                    },\n                    {\n                        path: 'first',\n                        breadcrumbName: 'Second-level Menu',\n                    },\n                    {\n                        path: 'second',\n                        breadcrumbName: 'Third-level Menu',\n                    },\n                ]\n            }\n        }\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="带面包屑页头"><span>带面包屑页头</span><a href="#带面包屑页头" class="anchor">#</a></h4><p>带面包屑页头，适合层级比较深的页面，让用户可以快速导航。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-pageheader":i.J},initData:()=>({onBack:()=>{console.log("onBack")},breadcrumb:{routes:[{path:"index",breadcrumbName:"First-level Menu"},{path:"first",breadcrumbName:"Second-level Menu"},{path:"second",breadcrumbName:"Third-level Menu"}]}}),template:'\n  <div>\n  \t<s-pageheader onBack="{{onBack}}" title="Title" subTitle="This is a subtitle" breadcrumb="{{breadcrumb}}"></s-pageheader>\n  </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845862">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p=(e(692),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div id="components-pageheader-demo-content">\n        &lt;s-pageheader title="Title" breadcrumb="{{breadcrumb}}">\n            &lt;div class="wrap">\n            &lt;div class="content">\n                &lt;div class="content">\n                    &lt;s-paragraph>\n                        Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.\n                    &lt;/s-paragraph>\n                    &lt;s-paragraph>\n                        Ant Design&#x27;s design team preferred to design with the HSB color model,\n                        which makes it easier for designers to have a clear psychological\n                        expectation of color when adjusting colors, as well as facilitate\n                        communication in teams.\n                    &lt;/s-paragraph>\n                    &lt;p class="contentLink">\n                        &lt;a>&lt;img src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" alt="start" />Quick Start&lt;/a>\n                        &lt;a>&lt;img src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" alt="info" />Product Info&lt;/a>\n                        &lt;a>&lt;img src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" alt="doc" />Product Doc&lt;/a>\n                    &lt;/p>\n                &lt;/div>\n            &lt;/div>\n            &lt;div class="extraContent">&lt;img src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original" alt="content" />&lt;/div>\n        &lt;/div>\n        &lt;/s-pageheader>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {PageHeader, Typography} from \'santd\';\n\nexport default {\n    components: {\n        \'s-pageheader\': PageHeader,\n        \'s-paragraph\': Typography.Paragraph\n    },\n    initData() {\n        return {\n            onBack: () => {\n                console.log(\'onBack\');\n            },\n            breadcrumb: {\n                routes: [\n                    {\n                        path: \'index\',\n                        breadcrumbName: \'First-level Menu\',\n                    },\n                    {\n                        path: \'first\',\n                        breadcrumbName: \'Second-level Menu\',\n                    },\n                    {\n                        path: \'second\',\n                        breadcrumbName: \'Third-level Menu\',\n                    },\n                ]\n            }\n        }\n    }\n}\n&lt;/script>\n&lt;style type="text/css">\n    #components-pageheader-demo-content .wrap {\n        display: flex;\n    }\n    #components-pageheader-demo-content .content {\n        flex: 1;\n    }\n    #components-pageheader-demo-content .extraContent {\n        min-width: 240px;\n        text-align: right;\n    }\n    #components-pageheader-demo-content .contentLink {\n        padding-top: 16px;\n    }\n    #components-pageheader-demo-content .contentLink a {\n        display: inline-block;\n        vertical-align: text-top;\n        margin-right: 32px;\n    }\n    #components-pageheader-demo-content .contentLink a img {\n        margin-right: 8px;\n    }\n&lt;/style></code></pre>',text:'\n<h4 id="带内容的例子"><span>带内容的例子</span><a href="#带内容的例子" class="anchor">#</a></h4><p>带内容的例子,可以优先展示页面的主要信息。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-pageheader":i.J,"s-paragraph":i.jb.Paragraph},initData:()=>({onBack:()=>{console.log("onBack")},breadcrumb:{routes:[{path:"index",breadcrumbName:"First-level Menu"},{path:"first",breadcrumbName:"Second-level Menu"},{path:"second",breadcrumbName:"Third-level Menu"}]}}),template:'\n    <div id="components-pageheader-demo-content">\n        <s-pageheader title="Title" breadcrumb="{{breadcrumb}}">\n            <div class="wrap">\n            <div class="content">\n                <div class="content">\n                    <s-paragraph>\n                        Ant Design interprets the color system into two levels: a system-level color system and a product-level color system.\n                    </s-paragraph>\n                    <s-paragraph>\n                        Ant Design&#x27;s design team preferred to design with the HSB color model,\n                        which makes it easier for designers to have a clear psychological\n                        expectation of color when adjusting colors, as well as facilitate\n                        communication in teams.\n                    </s-paragraph>\n                    <p class="contentLink">\n                        <a><img src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" alt="start">Quick Start</a>\n                        <a><img src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" alt="info">Product Info</a>\n                        <a><img src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" alt="doc">Product Doc</a>\n                    </p>\n                </div>\n            </div>\n            <div class="extraContent"><img src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original" alt="content"></div>\n        </div>\n        </s-pageheader>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845851">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'});e(694);var r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div id="components-pageheader-demo-actions">\n        &lt;s-pageheader\n            onBack="{{onBack}}"\n            title="Title"\n            subTitle="This is a subtitle"\n        >\n            &lt;s-tag color="red" slot="tags">Warning&lt;/s-tag>\n            &lt;template slot="extra">\n                &lt;s-button>Operation&lt;/s-button>\n                &lt;s-button>Operation&lt;/s-button>\n                &lt;s-button type="primary">Primary&lt;/s-button>\n            &lt;/template>\n            &lt;s-tabs slot="footer" defaultActiveKey="1">\n                &lt;s-tabpane tab="Details" key="1">&lt;/s-tabpane>\n                &lt;s-tabpane tab="Rule" key="2">&lt;/s-tabpane>\n            &lt;/s-tabs>\n            &lt;div class="wrap">\n                &lt;div class="content padding">\n                    &lt;s-row>\n                        &lt;s-col span="{{12}}">\n                            &lt;div class="description">\n                                &lt;div class="term">Created：&lt;/div>\n                                &lt;div class="detail">Lili Qu&lt;/div>\n                            &lt;/div>\n                        &lt;/s-col>\n                        &lt;s-col span="{{12}}">\n                            &lt;div class="description">\n                                &lt;div class="term">Association：&lt;/div>\n                                &lt;div class="detail">&lt;a>421421&lt;/a>&lt;/div>\n                            &lt;/div>\n                        &lt;/s-col>\n                        &lt;s-col span="{{12}}">\n                            &lt;div class="description">\n                                &lt;div class="term">Creation Time：&lt;/div>\n                                &lt;div class="detail">2017-01-10&lt;/div>\n                            &lt;/div>\n                        &lt;/s-col>\n                        &lt;s-col span="{{12}}">\n                            &lt;div class="description">\n                                &lt;div class="term">Effective：&lt;/div>\n                                &lt;div class="detail">2017-10-10&lt;/div>\n                            &lt;/div>\n                        &lt;/s-col>\n                        &lt;s-col span="{{24}}">\n                            &lt;div class="description">\n                                &lt;div class="term">Remarks：&lt;/div>\n                                &lt;div class="detail">Gonghu Road, Xihu District, Hangzhou, Zhejiang, China&lt;/div>\n                            &lt;/div>\n                        &lt;/s-col>\n                    &lt;/s-row>\n                &lt;/div>\n                &lt;div class="extraContent">\n                    &lt;s-row>\n                        &lt;s-col span="{{12}}">\n                            &lt;s-statistic title="Status" value="Pending" />\n                        &lt;/s-col>\n                        &lt;s-col span="{{12}}">\n                            &lt;s-statistic title="Price" prefix="$" value="{{568.08}}" />\n                        &lt;/s-col>\n                    &lt;/s-row>\n                &lt;/div>\n            &lt;/div>\n        &lt;/s-pageheader>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {PageHeader, Tag, Tabs, Button, Statistic, Grid} from \'santd\';\n\nconst description = function () {\n    return &#96;&lt;div>a&lt;/div>&#96;;\n};\n\nexport default {\n    components: {\n        \'s-pageheader\': PageHeader,\n        \'s-tag\': Tag,\n        \'s-tabs\': Tabs,\n        \'s-tabpane\': Tabs.TabPane,\n        \'s-statistic\': Statistic,\n        \'s-button\': Button,\n        \'s-row\': Grid.Row,\n        \'s-col\': Grid.Col\n    },\n    initData() {\n        return {\n            onBack: () => {\n                console.log(\'onBack\');\n            }\n        }\n    }\n}\n&lt;/script>\n&lt;style type="text/css">\n#components-pageheader-demo-actions .wrap {\n    display: flex;\n}\n#components-pageheader-demo-actions .content.padding {\n    padding-left: 40px;\n}\n#components-pageheader-demo-actions .content .description {\n    display: table;\n}\n#components-pageheader-demo-actions .description .term {\n    display: table-cell;\n    margin-right: 8px;\n    padding-bottom: 8px;\n    white-space: nowrap;\n    line-height: 20px;\n}\n#components-pageheader-demo-actions .description .detail {\n    display: table-cell;\n    padding-bottom: 8px;\n    width: 100%;\n    line-height: 20px;\n}\n#components-pageheader-demo-actions .extraContent {\n    min-width: 240px;\n    text-align: right;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="复杂的例子"><span>复杂的例子</span><a href="#复杂的例子" class="anchor">#</a></h4><p>使用操作区，并自定义子节点，适合使用在需要展示一些复杂的信息，帮助用户快速了解这个页面的信息和操作。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-pageheader":i.J,"s-tag":i.cb,"s-tabs":i.bb,"s-tabpane":i.bb.TabPane,"s-statistic":i.X,"s-button":i.i,"s-row":i.y.Row,"s-col":i.y.Col},initData:()=>({onBack:()=>{console.log("onBack")}}),template:'\n    <div id="components-pageheader-demo-actions">\n        <s-pageheader onBack="{{onBack}}" title="Title" subTitle="This is a subtitle">\n            <s-tag color="red" slot="tags">Warning</s-tag>\n            <template slot="extra">\n                <s-button>Operation</s-button>\n                <s-button>Operation</s-button>\n                <s-button type="primary">Primary</s-button>\n            </template>\n            <s-tabs slot="footer" defaultActiveKey="1">\n                <s-tabpane tab="Details" key="1"></s-tabpane>\n                <s-tabpane tab="Rule" key="2"></s-tabpane>\n            </s-tabs>\n            <div class="wrap">\n                <div class="content padding">\n                    <s-row>\n                        <s-col span="{{12}}">\n                            <div class="description">\n                                <div class="term">Created：</div>\n                                <div class="detail">Lili Qu</div>\n                            </div>\n                        </s-col>\n                        <s-col span="{{12}}">\n                            <div class="description">\n                                <div class="term">Association：</div>\n                                <div class="detail"><a>421421</a></div>\n                            </div>\n                        </s-col>\n                        <s-col span="{{12}}">\n                            <div class="description">\n                                <div class="term">Creation Time：</div>\n                                <div class="detail">2017-01-10</div>\n                            </div>\n                        </s-col>\n                        <s-col span="{{12}}">\n                            <div class="description">\n                                <div class="term">Effective：</div>\n                                <div class="detail">2017-10-10</div>\n                            </div>\n                        </s-col>\n                        <s-col span="{{24}}">\n                            <div class="description">\n                                <div class="term">Remarks：</div>\n                                <div class="detail">Gonghu Road, Xihu District, Hangzhou, Zhejiang, China</div>\n                            </div>\n                        </s-col>\n                    </s-row>\n                </div>\n                <div class="extraContent">\n                    <s-row>\n                        <s-col span="{{12}}">\n                            <s-statistic title="Status" value="Pending"></s-statistic>\n                        </s-col>\n                        <s-col span="{{12}}">\n                            <s-statistic title="Price" prefix="$" value="{{568.08}}"></s-statistic>\n                        </s-col>\n                    </s-row>\n                </div>\n            </div>\n        </s-pageheader>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845841">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'};t.default=s.a.defineComponent({components:{readme:o,basic:d,head:c,breadcrumb:l,content:p,actions:r},template:"\n        <div>\n            <head/>\n            <basic/>\n            <breadcrumb/>\n            <content/>\n            <actions/>\n            <readme/>\n        </div>\n    "})},692:function(n,t,e){var a=e(4),s=e(693);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[n.i,s,""]]);var o={insert:"head",singleton:!1};a(s,o);n.exports=s.locals||{}},693:function(n,t,e){(t=e(5)(!1)).push([n.i,"\n    #components-pageheader-demo-content .wrap {\n        display: flex;\n    }\n    #components-pageheader-demo-content .content {\n        flex: 1;\n    }\n    #components-pageheader-demo-content .extraContent {\n        min-width: 240px;\n        text-align: right;\n    }\n    #components-pageheader-demo-content .contentLink {\n        padding-top: 16px;\n    }\n    #components-pageheader-demo-content .contentLink a {\n        display: inline-block;\n        vertical-align: text-top;\n        margin-right: 32px;\n    }\n    #components-pageheader-demo-content .contentLink a img {\n        margin-right: 8px;\n    }\n",""]),n.exports=t},694:function(n,t,e){var a=e(4),s=e(695);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[n.i,s,""]]);var o={insert:"head",singleton:!1};a(s,o);n.exports=s.locals||{}},695:function(n,t,e){(t=e(5)(!1)).push([n.i,"\n#components-pageheader-demo-actions .wrap {\n    display: flex;\n}\n#components-pageheader-demo-actions .content.padding {\n    padding-left: 40px;\n}\n#components-pageheader-demo-actions .content .description {\n    display: table;\n}\n#components-pageheader-demo-actions .description .term {\n    display: table-cell;\n    margin-right: 8px;\n    padding-bottom: 8px;\n    white-space: nowrap;\n    line-height: 20px;\n}\n#components-pageheader-demo-actions .description .detail {\n    display: table-cell;\n    padding-bottom: 8px;\n    width: 100%;\n    line-height: 20px;\n}\n#components-pageheader-demo-actions .extraContent {\n    min-width: 240px;\n    text-align: right;\n}\n",""]),n.exports=t}}]);