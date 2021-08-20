(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{548:function(t,n,e){"use strict";e.r(n);var a=e(0),s=e.n(a),o={template:'<section class="markdown"><h1 id="skeleton-骨架屏"><span>Skeleton 骨架屏</span><a href="#skeleton-骨架屏" class="anchor">#</a></h1><p>在需要等待加载内容的位置提供一个占位图形组合。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul>\n<li>网络较慢，需要长时间等待加载处理的情况下。</li>\n<li>图文信息内容较多的列表/卡片中。</li>\n<li>只适合用在第一次加载数据的场景。</li>\n<li>可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。</li>\n</ul>\n<h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},i=e(8),l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-skeleton />\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Skeleton} from 'santd';\n\nexport default {\n    components: {\n        's-skeleton': Skeleton\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的占位效果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-skeleton":i.T},template:"\n    <div>\n        <s-skeleton></s-skeleton>\n    </div>\n"}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452846016">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},d={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-skeleton avatar="{{true}}" paragraph="{{paragraph}}"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Skeleton} from \'santd\';\n\nexport default {\n    components: {\n        \'s-skeleton\': Skeleton\n    },\n    initData() {\n        return {\n            paragraph: {\n                rows: 4\n            }\n        };\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="复杂的组合"><span>复杂的组合</span><a href="#复杂的组合" class="anchor">#</a></h4><p>更复杂的组合。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-skeleton":i.T},initData:()=>({paragraph:{rows:4}}),template:'\n    <div>\n        <s-skeleton avatar="{{true}}" paragraph="{{paragraph}}"></s-skeleton>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452846010">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},p={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-skeleton active=\"{{true}}\"/>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Skeleton} from 'santd';\n\nexport default {\n    components: {\n        's-skeleton': Skeleton\n    }\n}\n&lt;/script></code></pre>",text:'\n<h4 id="动画效果"><span>动画效果</span><a href="#动画效果" class="anchor">#</a></h4><p>显示动画效果。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-skeleton":i.T},template:'\n    <div>\n        <s-skeleton active="{{true}}"></s-skeleton>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452846002">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},c=(e(715),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-children">\n        &lt;div class="article">\n            &lt;s-skeleton loading="{=loading=}">\n                &lt;div>\n                    &lt;h4>Ant Design, a design language&lt;/h4>\n                    &lt;p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.&lt;/p>\n                &lt;/div>\n            &lt;/s-skeleton>\n            &lt;s-button on-click="showSkeleton" disabled="{{loading}}">\n                Show Skeleton\n            &lt;/s-button>\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Skeleton, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-skeleton\': Skeleton\n    },\n    initData() {\n        return {\n            loading: false\n        };\n    },\n    showSkeleton() {\n        this.data.set(\'loading\', true);\n        setTimeout(() => {\n            this.data.set(\'loading\', false);\n        }, 3000);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-children .article h4 {\n    margin-bottom: 16px;\n}\n.demo-children .article button {\n    margin-top: 16px;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="包含子组件"><span>包含子组件</span><a href="#包含子组件" class="anchor">#</a></h4><p>加载占位图包含子组件。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":i.i,"s-skeleton":i.T},initData:()=>({loading:!1}),showSkeleton(){this.data.set("loading",!0),setTimeout(()=>{this.data.set("loading",!1)},3e3)},template:'\n    <div class="demo-children">\n        <div class="article">\n            <s-skeleton loading="{=loading=}">\n                <div>\n                    <h4>Ant Design, a design language</h4>\n                    <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>\n                </div>\n            </s-skeleton>\n            <s-button on-click="showSkeleton" disabled="{{loading}}">\n                Show Skeleton\n            </s-button>\n        </div>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845996">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'});const r=[];for(let t=0;t<3;t++)r.push({href:"javascript:;",title:"ant design part "+t,avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"Ant Design, a design language for background applications, is refined by Ant UED Team.",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."});var h={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-list">\n        &lt;s-switcher checked="{{!loading}}" on-change="onChange"/>\n        &lt;s-list itemLayout="vertical" size="large" dataSource="{{listData}}">\n            &lt;s-list-item slot="renderItem" key="{{item.title}}">\n                &lt;s-skeleton loading="{{loading}}" active="{{true}}" avatar="{{true}}"/>\n                &lt;ul slot="actions" class="{{prefixCls}}-item-action" s-if="!loading">\n                    &lt;li>&lt;s-icon type="star-o" style="margin-right: 8px;" />156&lt;/li>\n                    &lt;li>&lt;s-icon type="like-o" style="margin-right: 8px;" />156&lt;/li>\n                    &lt;li>&lt;s-icon type="message" style="margin-right: 8px;" />2&lt;/li>\n                &lt;/ul>\n                &lt;s-list-item-meta s-if="!loading" description="{{item.description}}">\n                    &lt;s-avatar slot="avatar" src="{{item.avatar}}"/>\n                    &lt;a slot="title" href="{{item.href}}">{{item.title}}&lt;/a>\n                &lt;/s-list-item-meta>\n                {{!loading ? item.content : \'\'}}\n                &lt;img s-if="!loading" slot="extra" width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>\n            &lt;/s-list-item>\n        &lt;/s-list>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport san from \'san\';\nimport {Skeleton, Avatar, Icon, List, Switch} from \'santd\';\n\nconst listData = [];\nfor (let i = 0; i &lt; 3; i++) {\n    listData.push({\n        href: \'javascript:;\',\n        title: &#96;ant design part &#36;&#123;i}&#96;,\n        avatar: \'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\',\n        description: \'Ant Design, a design language for background applications, is refined by Ant UED Team.\',\n        content: \'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.\'\n    });\n}\n\nexport default {\n    components: {\n        \'s-icon\': Icon,\n        \'s-avatar\': Avatar,\n        \'s-list\': List,\n        \'s-list-item\': List.Item,\n        \'s-list-item-meta\': List.Item.Meta,\n        \'s-skeleton\': Skeleton,\n        \'s-switcher\': Switch\n    },\n    initData() {\n        return {\n            loading: true,\n            listData\n        };\n    },\n    onChange(checked) {\n        this.data.set(\'loading\', !checked);\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="列表"><span>列表</span><a href="#列表" class="anchor">#</a></h4><p>在列表组件中使用加载占位符。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-icon":i.z,"s-avatar":i.e,"s-list":i.D,"s-list-item":i.D.Item,"s-list-item-meta":i.D.Item.Meta,"s-skeleton":i.T,"s-switcher":i.Z},initData:()=>({loading:!0,listData:r}),onChange(t){this.data.set("loading",!t)},template:'\n    <div class="demo-list">\n        <s-switcher checked="{{!loading}}" on-change="onChange"></s-switcher>\n        <s-list itemLayout="vertical" size="large" dataSource="{{listData}}">\n            <s-list-item slot="renderItem" key="{{item.title}}">\n                <s-skeleton loading="{{loading}}" active="{{true}}" avatar="{{true}}"></s-skeleton>\n                <ul slot="actions" class="{{prefixCls}}-item-action" s-if="!loading">\n                    <li><s-icon type="star-o" style="margin-right: 8px;"></s-icon>156</li>\n                    <li><s-icon type="like-o" style="margin-right: 8px;"></s-icon>156</li>\n                    <li><s-icon type="message" style="margin-right: 8px;"></s-icon>2</li>\n                </ul>\n                <s-list-item-meta s-if="!loading" description="{{item.description}}">\n                    <s-avatar slot="avatar" src="{{item.avatar}}"></s-avatar>\n                    <a slot="title" href="{{item.href}}">{{item.title}}</a>\n                </s-list-item-meta>\n                {{!loading ? item.content : \'\'}}\n                <img s-if="!loading" slot="extra" width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png">\n            </s-list-item>\n        </s-list>\n    </div>\n'}},template:'\n    <section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1629452845987">\n        <section class="code-box-demo"><code-preview></code-preview></section>\n        <section class="code-box-meta markdown">\n            {{ text | raw}}\n            <span class="code-expand-icon" on-click="toggleExpand">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}">\n                <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}">\n            </span>\n        </section>\n        <section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">\n            {{ code | raw}}\n        </section>\n    </section>\n'},m={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><h3 id="skeleton"><span>Skeleton</span><a href="#skeleton" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>active</td>\n<td>是否展示动画效果</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>avatar</td>\n<td>是否显示头像占位图</td>\n<td>boolean | <a href="#skeletonavatarprops">SkeletonAvatarProps</a></td>\n<td>false</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>为 <code>true</code> 时，显示占位图。反之则直接展示子组件</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>paragraph</td>\n<td>是否显示段落占位图</td>\n<td>boolean | <a href="#skeletonparagraphprops">SkeletonParagraphProps</a></td>\n<td>true</td>\n</tr>\n<tr>\n<td>title</td>\n<td>是否显示标题占位图</td>\n<td>boolean | <a href="#skeletontitleprops">SkeletonTitleProps</a></td>\n<td>true</td>\n</tr>\n</tbody></table>\n<h3 id="skeletonavatarprops"><span>SkeletonAvatarProps</span><a href="#skeletonavatarprops" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>size</td>\n<td>设置头像占位图的大小</td>\n<td>Enum{ &#39;large&#39;, &#39;small&#39;, &#39;default&#39; }</td>\n<td>-</td>\n</tr>\n<tr>\n<td>shape</td>\n<td>指定头像的形状</td>\n<td>Enum{ &#39;circle&#39;, &#39;square&#39; }</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<h3 id="skeletontitleprops"><span>SkeletonTitleProps</span><a href="#skeletontitleprops" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>width</td>\n<td>设置标题占位图的宽度</td>\n<td>number | string</td>\n<td>-</td>\n</tr>\n</tbody></table>\n<h3 id="skeletonparagraphprops"><span>SkeletonParagraphProps</span><a href="#skeletonparagraphprops" class="anchor">#</a></h3><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>rows</td>\n<td>设置段落占位图的行数</td>\n<td>number</td>\n<td>-</td>\n</tr>\n<tr>\n<td>width</td>\n<td>设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度</td>\n<td>number | string | Array&lt;number | string&gt;</td>\n<td>-</td>\n</tr>\n</tbody></table>\n</section>'};n.default=s.a.defineComponent({template:"\n        <div>\n            <head/>\n            <basic/>\n            <complex/>\n            <active/>\n            <children/>\n            <list/>\n            <readme/>\n        </div>\n    ",components:{head:o,basic:l,complex:d,active:p,children:c,list:h,readme:m}})},715:function(t,n,e){var a=e(4),s=e(716);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var o={insert:"head",singleton:!1};a(s,o);t.exports=s.locals||{}},716:function(t,n,e){(n=e(5)(!1)).push([t.i,"\n.demo-children .article h4 {\n    margin-bottom: 16px;\n}\n.demo-children .article button {\n    margin-top: 16px;\n}\n",""]),t.exports=n}}]);