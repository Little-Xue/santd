(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{501:function(t,a,n){"use strict";n.r(a),a.default='<h1 id="快速上手"><span>快速上手</span><a href="#快速上手" class="anchor">#</a></h1><p>Santd致力于提供给程序员愉悦的开发体验。</p><blockquote>\n<p>在开始之前，推荐先学习 San 和 ES2015，并正确安装和配置了 Node.js v8 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 San 全家桶的正确开发方式。如果你刚开始学习前端或者 San，将 UI 框架作为你的第一步可能不是最好的主意。</p></blockquote>\n<h2 id="第一个例子"><span>第一个例子</span><a href="#第一个例子" class="anchor">#</a></h2><p>最简单的使用方式参照以下 CodeSandbox 演示。</p><p><a href="https://codesandbox.io/s/hungry-raman-8xmiz" target="_blank"><img src="https://codesandbox.io/static/img/play-codesandbox.svg"/></a></p><h3 id="_1-使用组件"><span>1. 使用组件</span><a href="#_1-使用组件" class="anchor">#</a></h3><pre><code class="language-javascript">import san from &#39;san&#39;;\nimport {DatePicker, Message} from &#39;santd&#39;;\nimport dayjs from &#39;dayjs&#39;;\nimport &#39;dayjs/locale/zh-cn&#39;;\nimport &#39;santd/dist/santd.css&#39;;\nimport &#39;./index.css&#39;;\n\ndayjs.locale(&#39;zh-cn&#39;);\n\nconst App = san.defineComponent({\n    initData() {\n        return {\n            date: null\n        }\n    },\n    components: {\n        &#39;s-datepicker&#39;: DatePicker\n    },\n    handleChange({date}) {\n        Message.info(`您选择的日期是: ${date ? date.format(&#39;YYYY-MM-DD&#39;) : &#39;未选择&#39;}`);\n        this.data.set(&#39;date&#39;, date);\n    },\n    getDate(date) {\n        return date ? date.format(&#39;YYYY-MM-DD&#39;) : &#39;未选择&#39;;\n    },\n    template: `&lt;div style=&quot;width: 400px; margin: 100px auto;&quot;&gt;\n        &lt;s-datepicker on-change=&quot;handleChange&quot; /&gt;\n        &lt;div style=&quot;margin-top: 20px;&quot;&gt;\n            当前日期：&#123;&#123;getDate(date)}}\n        &lt;/div&gt;\n    &lt;/div&gt;`\n});\n\nconst app = new App();\napp.attach(document.body);</code></pre>\n<h3 id="_2-探索更多组件用法"><span>2. 探索更多组件用法</span><a href="#_2-探索更多组件用法" class="anchor">#</a></h3><p>你可以在左侧菜单查看组件列表，比如 <a href="/#/components/alert">Alert</a> 组件，组件文档中提供了各类演示，最下方有组件 API 文档可以查阅。在代码演示部分找到第一个例子，点击右下角的图标展开代码。</p><p>然后依照演示代码的写法，在之前的代码里修改 index.js，首先在 import 内引入 Alert 组件：</p><pre><code class="language-javascript">import {DatePicker, message, Alert} from &#39;santd&#39;;</code></pre>\n<p>然后添加相应的代码：</p><pre><code class="language-javascript">const App = san.defineComponent({\n    initData() {\n        return {\n            date: null\n        }\n    },\n    components: {\n        &#39;s-datepicker&#39;: DatePicker,\n        &#39;s-alert&#39;: Alert\n    },\n    handleChange({date}) {\n        message.info(`您选择的日期是: ${date ? date.format(&#39;YYYY-MM-DD&#39;) : &#39;未选择&#39;}`);\n        this.data.set(&#39;date&#39;, date);\n    },\n    getDate(date) {\n        return date ? date.format(&#39;YYYY-MM-DD&#39;) : &#39;未选择&#39;;\n    },\n    template: `&lt;div style=&quot;width: 400px; margin: 100px auto;&quot;&gt;\n        &lt;s-datepicker on-change=&quot;handleChange&quot; /&gt;\n        &lt;div style=&quot;margin-top: 20px;&quot;&gt;\n            &lt;s-alert message=&quot;当前日期：{{getDate(date)}}&quot; type=&quot;success&quot; /&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;`\n});</code></pre>\n<p>在右侧预览区就可以看到如图的效果。</p><p><img src="https://gw.alipayobjects.com/zos/antfincdn/Up3%24VYhN0S/134614ee-7440-46f1-a797-fa6f6b3e300f.png" alt="avatar"></p><p>好的，现在你已经会使用基本的 santd 组件了，你可以在这个例子中继续探索其他组件的用法。如果你遇到组件的 bug，也推荐建一个可重现的 codesandbox 来报告 bug。</p><h2 id="兼容性"><span>兼容性</span><a href="#兼容性" class="anchor">#</a></h2><p>Ant Design San 支持所有的现代浏览器和 IE9+。</p><table>\n<thead>\n<tr>\n<th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE"> <br/> IE \\ Edge</th>\n<th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox"> <br/> Firefox</th>\n<th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome"> <br/> Chrome</th>\n<th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari"> <br/> Safari</th>\n<th><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera"> <br/> Opera</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>IE9, IE10, IE11, Edge</td>\n<td>last 2 versions</td>\n<td>last 2 versions</td>\n<td>last 2 versions</td>\n<td>last 2 versions</td>\n</tr>\n</tbody></table>\n<p>我们对 IE9/10 提供有限度的支持，部分样式和动画在 IE9/10 下的表现会比较裸。少数组件使用到了 Flex 布局，在 IE9/10 下也会有问题。</p><p>对于 IE 系列浏览器，需要提供相应的 Polyfill 支持，建议使用 <a href="https://babeljs.io/docs/en/babel-preset-env">babel-preset-env</a> 来解决浏览器兼容问题。</p><h2 id="自行构建"><span>自行构建</span><a href="#自行构建" class="anchor">#</a></h2><p>如果想自己维护工作流，我们推荐使用 webpack 进行构建和调试。理论上你可以利用 San 生态圈中的 各种脚手架 进行开发。</p><h2 id="按需加载"><span>按需加载</span><a href="#按需加载" class="anchor">#</a></h2><p>可以通过以下的写法来按需加载组件。</p><pre><code class="language-javascript">import Button from &#39;santd/es/button&#39;;\nimport &#39;santd/es/button/style&#39;</code></pre>\n<p>如果你使用了 babel，那么可以使用 <a href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a> 来进行按需加载，加入这个插件后。你可以仍然这么写：</p><pre><code class="language-javascript">import { Button } from &#39;santd&#39;;</code></pre>\n<p>插件会帮你转换成 santd/es/xxx 的写法。另外此插件配合 style 属性可以做到模块样式的按需自动加载。</p>'}}]);