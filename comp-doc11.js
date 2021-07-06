(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{563:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),d={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>on-afterChange</td><td>切换面板的回调</td><td>function(current)</td><td>无</td></tr><tr><td>autoplay</td><td>是否自动切换</td><td>boolean</td><td>false</td></tr><tr><td>on-beforeChange</td><td>切换面板的回调</td><td>function(param)</td><td>无</td></tr><tr><td>dots</td><td>是否显示面板指示点</td><td>boolean</td><td><code>true</code></td></tr><tr><td>easing</td><td>动画效果</td><td>string</td><td>linear</td></tr><tr><td>dotPosition</td><td>位置 可选 <code>top</code> <code>bottom</code> <code>left</code> <code>right</code></td><td>string</td><td><code>bottom</code></td></tr></tbody></table><h2 id="方法"><span>方法</span><a href="#方法" class="anchor">#</a></h2><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>goTo(slideNumber)</td><td>切换到指定面板</td></tr><tr><td>next()</td><td>切换到下一面板</td></tr><tr><td>prev()</td><td>切换到上一面板</td></tr></tbody></table></section>'},s=(n(600),n(8)),l={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div style=\"width: 600px\">\n        &lt;s-carousel on-afterChange=\"handleAfter\" on-beforeChange=\"handleBefore\">\n            &lt;div>&lt;h3>1&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>2&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>3&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>4&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>5&lt;/h3>&lt;/div>\n        &lt;/s-carousel>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Carousel} from 'santd';\n\nexport default {\n    components: {\n        's-carousel': Carousel\n    },\n    handleAfter(current) {\n        console.log('afterChange', current);\n    },\n    handleBefore(param) {\n        console.log('beforeChange', param);\n    }\n}\n&lt;/script>\n&lt;style>\n.santd-carousel .slick-slide {\n    text-align: center;\n    height: 160px;\n    line-height: 160px;\n    background: #364d79;\n    overflow: hidden;\n}\n\n.santd-carousel .slick-slide h3 {\n    color: #fff;\n}\n&lt;/style></code></pre>",text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>最简单的用法。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-carousel":s.l},handleAfter(t){console.log("afterChange",t)},handleBefore(t){console.log("beforeChange",t)},template:'<div style="width: 600px"><s-carousel on-afterChange="handleAfter" on-beforeChange="handleBefore"><div><h3>1</h3></div><div><h3>2</h3></div><div><h3>3</h3></div><div><h3>4</h3></div><div><h3>5</h3></div></s-carousel></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560840508"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},i=(n(602),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div style="width: 600px">\n        &lt;div>\n            &lt;s-group style="margin-bottom: 8px" defaultValue="top" on-change="handleChange" name="position">\n                &lt;s-button value="top">Top&lt;/s-button>\n                &lt;s-button value="bottom">Bottom&lt;/s-button>\n                &lt;s-button value="left">Left&lt;/s-button>\n                &lt;s-button value="right">Right&lt;/s-button>\n            &lt;/s-group>\n        &lt;/div>\n        &lt;s-carousel dotPosition="{{dotPosition}}" on-afterChange="handleAfter" on-beforeChange="handleBefore">\n            &lt;div>&lt;h3>1&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>2&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>3&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>4&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>5&lt;/h3>&lt;/div>\n        &lt;/s-carousel>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Carousel, Radio} from \'santd\';\n\nexport default {\n    components: {\n        \'s-carousel\': Carousel,\n        \'s-group\': Radio.Group,\n        \'s-button\': Radio.Button\n    },\n    initData() {\n        return {\n            dotPosition: \'top\'\n        };\n    },\n    handleAfter(current) {\n        console.log(\'afterChange\', current);\n    },\n    handleBefore(param) {\n        console.log(\'beforeChange\', param);\n    },\n    handleChange(e) {\n        console.log(&#96;radio checked:&#36;&#123;e.target.value}&#96;);\n        this.data.set(\'dotPosition\', e.target.value);\n    }\n}\n&lt;/script>\n&lt;style>\n.santd-carousel .slick-slide {\n    text-align: center;\n    height: 160px;\n    line-height: 160px;\n    background: #364d79;\n    overflow: hidden;\n}\n\n.santd-carousel .slick-slide h3 {\n    color: #fff;\n    margin: 0;\n    padding: 0;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="位置"><span>位置</span><a href="#位置" class="anchor">#</a></h4><p>位置有 4 个方向</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-carousel":s.l,"s-group":s.O.Group,"s-button":s.O.Button},initData:()=>({dotPosition:"top"}),handleAfter(t){console.log("afterChange",t)},handleBefore(t){console.log("beforeChange",t)},handleChange(t){console.log("radio checked:"+t.target.value),this.data.set("dotPosition",t.target.value)},template:'<div style="width: 600px"><div><s-group style="margin-bottom: 8px" defaultValue="top" on-change="handleChange" name="position"><s-button value="top">Top</s-button><s-button value="bottom">Bottom</s-button><s-button value="left">Left</s-button><s-button value="right">Right</s-button></s-group></div><s-carousel dotPosition="{{dotPosition}}" on-afterChange="handleAfter" on-beforeChange="handleBefore"><div><h3>1</h3></div><div><h3>2</h3></div><div><h3>3</h3></div><div><h3>4</h3></div><div><h3>5</h3></div></s-carousel></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560840500"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),r={template:'<section class="markdown"><h1 id="carousel-走马灯"><span>Carousel 走马灯</span><a href="#carousel-走马灯" class="anchor">#</a></h1><p>旋转木马，一组轮播的区域。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><ul><li>当有一组平级的内容。</li><li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</li><li>常用于一组图片或卡片轮播。</li></ul><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},c=(n(604),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div style="width: 600px">\n        &lt;s-carousel on-afterChange="handleAfter" on-beforeChange="handleBefore" autoplay="true">\n            &lt;div>&lt;h3>1&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>2&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>3&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>4&lt;/h3>&lt;/div>\n            &lt;div>&lt;h3>5&lt;/h3>&lt;/div>\n        &lt;/s-carousel>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Carousel} from \'santd\';\n\nexport default {\n    components: {\n        \'s-carousel\': Carousel\n    },\n    handleAfter(current) {\n        console.log(\'afterChange\', current);\n    },\n    handleBefore(param) {\n        console.log(\'beforeChange\', param);\n    }\n}\n&lt;/script>\n&lt;style>\n.santd-carousel .slick-slide {\n    text-align: center;\n    height: 160px;\n    line-height: 160px;\n    background: #364d79;\n    overflow: hidden;\n}\n\n.santd-carousel .slick-slide h3 {\n    color: #fff;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="自动切换"><span>自动切换</span><a href="#自动切换" class="anchor">#</a></h4><p>定时切换下一张。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-carousel":s.l},handleAfter(t){console.log("afterChange",t)},handleBefore(t){console.log("beforeChange",t)},template:'<div style="width: 600px"><s-carousel on-afterChange="handleAfter" on-beforeChange="handleBefore" autoplay="true"><div><h3>1</h3></div><div><h3>2</h3></div><div><h3>3</h3></div><div><h3>4</h3></div><div><h3>5</h3></div></s-carousel></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1625560840493"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'});e.default=a.a.defineComponent({components:{readme:d,basic:l,position:i,head:r,autoplay:c},template:"\n        <div>\n            <head/>\n            <basic/>\n            <position/>\n            <autoplay/>\n            <readme/>\n        </div>\n    "})},600:function(t,e,n){var o=n(4),a=n(601);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var d={insert:"head",singleton:!1};o(a,d);t.exports=a.locals||{}},601:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.santd-carousel .slick-slide {\n    text-align: center;\n    height: 160px;\n    line-height: 160px;\n    background: #364d79;\n    overflow: hidden;\n}\n\n.santd-carousel .slick-slide h3 {\n    color: #fff;\n}\n",""]),t.exports=e},602:function(t,e,n){var o=n(4),a=n(603);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var d={insert:"head",singleton:!1};o(a,d);t.exports=a.locals||{}},603:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.santd-carousel .slick-slide {\n    text-align: center;\n    height: 160px;\n    line-height: 160px;\n    background: #364d79;\n    overflow: hidden;\n}\n\n.santd-carousel .slick-slide h3 {\n    color: #fff;\n    margin: 0;\n    padding: 0;\n}\n",""]),t.exports=e},604:function(t,e,n){var o=n(4),a=n(605);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var d={insert:"head",singleton:!1};o(a,d);t.exports=a.locals||{}},605:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.santd-carousel .slick-slide {\n    text-align: center;\n    height: 160px;\n    line-height: 160px;\n    background: #364d79;\n    overflow: hidden;\n}\n\n.santd-carousel .slick-slide h3 {\n    color: #fff;\n}\n",""]),t.exports=e}}]);