(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{553:function(a,t,e){"use strict";e.r(t);var s=e(0),n=e.n(s),o={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>icon</td><td>设置头像的图标类型，参考 <code>Icon</code> 组件</td><td>string</td><td>-</td></tr><tr><td>shape</td><td>指定头像的形状</td><td>Enum{ &#39;circle&#39;, &#39;square&#39; }</td><td><code>circle</code></td></tr><tr><td>size</td><td>设置头像的大小</td><td>number | Enum{ &#39;large&#39;, &#39;small&#39;, &#39;default&#39; }</td><td><code>default</code></td></tr><tr><td>src</td><td>图片类头像的资源地址</td><td>string</td><td>-</td></tr><tr><td>srcSet</td><td>设置图片类头像响应式资源地址</td><td>string</td><td>-</td></tr><tr><td>alt</td><td>图像无法显示时的替代文本</td><td>string</td><td>-</td></tr><tr><td>gap</td><td>字符类型距离左右两侧边界单位像素</td><td>number</td><td>4</td></tr><tr><td>on-error</td><td>图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为</td><td>() =&gt; boolean</td><td>-</td></tr></tbody></table></section>'},d={template:'<section class="markdown"><h1 id="avatar-头像"><span>Avatar 头像</span><a href="#avatar-头像" class="anchor">#</a></h1><p>用来代表用户或事物，支持图片、图标或字符展示。</p><h2 id="设计师专属"><span>设计师专属</span><a href="#设计师专属" class="anchor">#</a></h2><p>安装 <a href="https://kitchen.alipay.com/">Kitchen Sketch 插件</a> 💎，一键填充高逼格头像和文本.</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},c=e(8),i={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div>\n            &lt;s-avatar size="{{64}}" icon="user" />\n            &lt;s-avatar size="large" icon="user"/>\n            &lt;s-avatar icon="user"/>\n            &lt;s-avatar size="small" icon="user"/>\n        &lt;/div>\n        &lt;div>\n            &lt;s-avatar shape="square" size="{{64}}" icon="user" />\n            &lt;s-avatar shape="square" size="large" icon="user" />\n            &lt;s-avatar shape="square" icon="user" />\n            &lt;s-avatar shape="square" size="small" icon="user" />\n        &lt;/div>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Avatar} from \'santd\';\n\nexport default {\n    components: {\n        \'s-avatar\': Avatar\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>头像有三种尺寸，两种形状可选。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-avatar":c.e},template:'<div><div><s-avatar size="{{64}}" icon="user"></s-avatar><s-avatar size="large" icon="user"></s-avatar><s-avatar icon="user"></s-avatar><s-avatar size="small" icon="user"></s-avatar></div><div><s-avatar shape="square" size="{{64}}" icon="user"></s-avatar><s-avatar shape="square" size="large" icon="user"></s-avatar><s-avatar shape="square" icon="user"></s-avatar><s-avatar shape="square" size="small" icon="user"></s-avatar></div></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560840857"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-avatar icon="user" />\n        &lt;s-avatar>U&lt;/s-avatar>\n        &lt;s-avatar>USER&lt;/s-avatar>\n        &lt;s-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />\n        &lt;s-avatar style="color: #f56a00; backgroundColor: #fde3cf">U&lt;/s-avatar>\n        &lt;s-avatar style="backgroundColor:#87d068" icon="user" />\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Avatar} from \'santd\';\n\nexport default {\n    components: {\n        \'s-avatar\': Avatar\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="类型"><span>类型</span><a href="#类型" class="anchor">#</a></h4><p>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-avatar":c.e},template:'<div><s-avatar icon="user"></s-avatar><s-avatar>U</s-avatar><s-avatar>USER</s-avatar><s-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></s-avatar><s-avatar style="color: #f56a00; backgroundColor: #fde3cf">U</s-avatar><s-avatar style="backgroundColor:#87d068" icon="user"></s-avatar></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560840854"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;span style="margin-right:24px">\n            &lt;s-badge count="1">&lt;s-avatar shape="square" icon="user" />&lt;/s-badge>\n        &lt;/span>\n        &lt;span>\n            &lt;s-badge dot="{{true}}">&lt;s-avatar shape="square" icon="user" />&lt;/s-badge>\n        &lt;/span>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Avatar, Badge} from \'santd\';\n\nexport default {\n    components: {\n        \'s-avatar\': Avatar,\n        \'s-badge\': Badge\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="带徽标的头像"><span>带徽标的头像</span><a href="#带徽标的头像" class="anchor">#</a></h4><p>通常用于消息提示。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-avatar":c.e,"s-badge":c.g},template:'<div><span style="margin-right:24px"><s-badge count="1"><s-avatar shape="square" icon="user"></s-avatar></s-badge></span><span><s-badge dot="{{true}}"><s-avatar shape="square" icon="user"></s-avatar></s-badge></span></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560840848"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};const p=["U","Lucy","Tom","Edward"],g=["#f56a00","#7265e6","#ffbf00","#00a2ae"],h=[4,3,2,1];var v={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div>\n        &lt;s-avatar size=\"large\" style=\"background-color: {{color}};vertical-align: middle\" gap=\"{{gap}}\">{{avatarValue}}&lt;/s-avatar>\n        &lt;s-button size=\"small\" style=\"margin-left: 16px; vertical-a=lign:middle\" on-click=\"changeValue\"\n            >Change&lt;/s-button\n        >\n        &lt;s-button size=\"small\" style=\"margin-left: 16px; vertical-a=lign:middle\" on-click=\"changeGapValue\"\n            >ChangeGap&lt;/s-button\n        >\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Avatar, Button} from 'santd';\n\nconst UserList = ['U', 'Lucy', 'Tom', 'Edward'];\nconst colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];\nconst gapList = [4, 3, 2, 1];\nexport default {\n    components: {\n        's-avatar': Avatar,\n        's-button': Button\n    },\n    initData() {\n        return {\n            avatarValue: UserList[0],\n            color: colorList[0],\n            gap: 4\n        };\n    },\n    changeValue() {\n        const index = UserList.indexOf(this.data.get('avatarValue'));\n        this.data.set('avatarValue', index &lt; UserList.length - 1 ? UserList[index + 1] : UserList[0]);\n        this.data.set('color', index &lt; colorList.length - 1 ? colorList[index + 1] : colorList[0]);\n    },\n    changeGapValue() {\n        const index = gapList.indexOf(this.data.get('gap'));\n        this.data.set('gap', index &lt; gapList.length - 1 ? gapList[index + 1] : gapList[0]);\n    }\n};\n&lt;/script></code></pre>",text:'\n<h4 id="自动调整字符大小"><span>自动调整字符大小</span><a href="#自动调整字符大小" class="anchor">#</a></h4><p>对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-avatar":c.e,"s-button":c.i},initData:()=>({avatarValue:p[0],color:g[0],gap:4}),changeValue(){const a=p.indexOf(this.data.get("avatarValue"));this.data.set("avatarValue",a<p.length-1?p[a+1]:p[0]),this.data.set("color",a<g.length-1?g[a+1]:g[0])},changeGapValue(){const a=h.indexOf(this.data.get("gap"));this.data.set("gap",a<h.length-1?h[a+1]:h[0])},template:'<div><s-avatar size="large" style="background-color: {{color}};vertical-align: middle" gap="{{gap}}">{{avatarValue}}</s-avatar><s-button size="small" style="margin-left: 16px; vertical-a=lign:middle" on-click="changeValue">Change</s-button><s-button size="small" style="margin-left: 16px; vertical-a=lign:middle" on-click="changeGapValue">ChangeGap</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560840842"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};t.default=n.a.defineComponent({components:{desc:d,basic:i,type:r,readme:o,dynamic:v,badge:l},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <dynamic/>\n            <type/>\n            <badge/>\n            <readme/>\n        </div>\n    "})}}]);