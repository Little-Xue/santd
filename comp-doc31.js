(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{558:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),l={template:'<section class="markdown"><h1 id="localeprovider-国际化"><span>LocaleProvider 国际化</span><a href="#localeprovider-国际化" class="anchor">#</a></h1><p>为组件内建文案提供统一的国际化支持。</p><h2 id="使用"><span>使用</span><a href="#使用" class="anchor">#</a></h2><p>LocaleProvider只需在应用外围包裹一次即可全局生效。</p><pre><code class="language-js">import {LocaleProvider} from &#39;santd&#39;;import zh_CN from &#39;santd/locale-provider/zh_CN&#39;;import dayjs from &#39;dayjs&#39;;import &#39;dayjs/locale/zh-cn&#39;;dayjs.locale(&#39;zh-cn&#39;);return san.defineComponent({initData() {return {locale: zh_CN};},components: {&#39;s-localprovider&#39;: LocaleProvider},template: &#39;&lt;div&gt;&lt;s-locale-provider locale=&quot;&#123;&#123;locale}}&quot;&gt;&lt;app /&gt;&lt;/s-locale-provider&gt;&lt;/div&gt;&#39;});</code></pre><p>我们提供了英语，中文，俄语，法语，德语等多种语言支持，所有语言包可以在 <a href="https://github.com/ecomfe/santd/tree/master/src/locale-provider">这里</a> 找到。</p><h2 id="增加语言包"><span>增加语言包</span><a href="#增加语言包" class="anchor">#</a></h2><p>如果你找不到你需要的语言包，欢迎你在 <a href="https://github.com/ecomfe/santd/blob/master/src/locale-provider/default.js">英文语言包</a> 的基础上创建一个新的语言包，并给我们 Pull Request。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},i=n(8),s=n(28),r={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;s-locale-provider locale="{{locale}}">\n            &lt;s-pagination defaultCurrent="{{1}}" total="{{50}}" showSizeChanger="{{true}}" />\n        &lt;/s-locale-provider>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {Pagination, LocaleProvider} from \'santd\';\nimport zhCN from \'santd/locale-provider/zh_CN\';\n\nexport default {\n    initData() {\n        return {\n            locale: zhCN\n        }\n    },\n    components: {\n        \'s-locale-provider\': LocaleProvider,\n        \'s-pagination\': Pagination\n    }\n}\n&lt;/script></code></pre>',text:'\n<h4 id="国际化"><span>国际化</span><a href="#国际化" class="anchor">#</a></h4><p>用 <code>LocaleProvider</code> 包裹你的应用，并引用对应的语言包。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({locale:s.a}),components:{"s-locale-provider":i.F,"s-pagination":i.L},template:'<div><s-locale-provider locale="{{locale}}"><s-pagination defaultCurrent="{{1}}" total="{{50}}" showSizeChanger="{{true}}"></s-pagination></s-locale-provider></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667467606223"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},c=(n(669),{placeholder:"Select time"});function d(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?d(Object(n),!0).forEach((function(a){m(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}var h={lang:p({placeholder:"Select date",rangePlaceholder:["Start date","End date"]},n(76).a),timePickerLocale:p({},c)},g={locale:"en",Pagination:{items_per_page:"/ page",jump_to:"Goto",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"},DatePicker:h,TimePicker:c,Calendar:h,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",selectAll:"Select current page",selectInvert:"Invert current page",sortTitle:"Sort"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file"},Empty:{description:"No Data"},Icon:{icon:"icon"},Text:{edit:"edit",copy:"copy",copied:"copy success",expand:"expand"},PageHeader:{back:"back"}},u={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div>\n        &lt;div class="change-locale">\n        &lt;span style="margin-right: 16px">Change locale of components: &lt;/span>\n        &lt;s-radiogroup defaultValue="zhCN" on-change="handleChangeLocale" name="language">\n            &lt;s-radiobutton key="en" value="enUS">English&lt;/s-radiobutton>\n            &lt;s-radiobutton key="cn" value="zhCN">中文&lt;/s-radiobutton>\n        &lt;/s-radiogroup>\n        &lt;/div>\n        &lt;s-locale-provider locale="{{locale}}">\n            &lt;div class="locale-components">\n                &lt;div class="example">\n                    &lt;s-pagination defaultCurrent="{{1}}" total="{{50}}" showSizeChanger="{{true}}" />\n                &lt;/div>\n                &lt;div class="example">\n                    &lt;s-datepicker/>\n                    &lt;s-timepicker/>\n                    &lt;s-rangepicker style="width: 200px" />\n                &lt;/div>\n                &lt;div class="example">\n                    &lt;s-button type="primary" on-click="showModal">Show Modal&lt;/s-button>\n                    &lt;s-popconfirm title="Question?">\n                        &lt;a href="#">Click to confirm&lt;/a>\n                    &lt;/s-popconfirm>\n                &lt;/div>\n                &lt;div class="example">\n                    &lt;s-transfer dataSource="{{[]}}" showSearch="{{true}}" targetKeys="{{[]}}" render="{{render}}"/>\n                &lt;div>\n                &lt;div class="example" style="width: 319px; border: 1px solid #d9d9d9; border-radius: 4px">\n                    &lt;s-calendar fullscreen="{{false}}"  />\n                &lt;/div>\n                &lt;div class="example">\n                    &lt;s-table dataSource="{{[]}}" columns="{{columns}}" />\n                &lt;/div>\n                &lt;s-modal title="Locale Modal" visible="{{visible}}" on-cancel="hideModal">\n                    &lt;p>Locale Modal&lt;/p>\n                &lt;/s-modal>\n            &lt;/div>\n        &lt;/s-locale-provider>\n    &lt;/div>\n&lt;/template>\n&lt;script>\nimport {\n    Pagination,\n    LocaleProvider,\n    Radio,\n    Select,\n    DatePicker,\n    TimePicker,\n    Button,\n    Modal,\n    Popconfirm,\n    Transfer,\n    Calendar,\n    Table\n} from \'santd\';\nimport zhCN from \'santd/locale-provider/zh_CN\';\nimport enUS from \'santd/locale-provider/en_US\';\n\nexport default {\n    initData() {\n        return {\n            locale: null,\n            visible: false,\n            render(item) {\n                return item.title;\n            },\n            columns: [{\n                title: \'Name\',\n                dataIndex: \'name\'\n            }, {\n                title: \'Age\',\n                dataIndex: \'age\'\n            }]\n        }\n    },\n    components: {\n        \'s-locale-provider\': LocaleProvider,\n        \'s-pagination\': Pagination,\n        \'s-radiogroup\': Radio.Group,\n        \'s-radiobutton\': Radio.Button,\n        \'s-select\': Select,\n        \'s-selectoption\': Select.Option,\n        \'s-datepicker\': DatePicker,\n        \'s-timepicker\': TimePicker,\n        \'s-rangepicker\': DatePicker.RangePicker,\n        \'s-button\': Button,\n        \'s-modal\': Modal,\n        \'s-popconfirm\': Popconfirm,\n        \'s-transfer\': Transfer,\n        \'s-calendar\': Calendar,\n        \'s-table\': Table\n    },\n    handleChangeLocale(e) {\n        const value = e.target.value;\n        this.data.set(\'locale\', value === \'zhCN\' ? zhCN : enUS);\n    },\n    showModal() {\n        this.data.set(\'visible\', true);\n    },\n    hideModal() {\n        this.data.set(\'visible\', false);\n    },\n    info() {\n        Modal.info({\n            title: \'some info\',\n            content: \'some info\'\n        });\n    }\n}\n&lt;/script>\n&lt;style>\n.locale-components {\n    border-top: 1px solid #d9d9d9;\n    padding-top: 16px;\n}\n\n.example {\n    margin: 16px 0;\n}\n\n.example > * {\n    margin-right: 8px;\n}\n\n.change-locale {\n    margin-bottom: 16px;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="国际化"><span>国际化</span><a href="#国际化" class="anchor">#</a></h4><p>用 <code>LocaleProvider</code> 包裹你的应用，并引用对应的语言包。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{initData:()=>({locale:null,visible:!1,render:e=>e.title,columns:[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"}]}),components:{"s-locale-provider":i.F,"s-pagination":i.L,"s-radiogroup":i.P.Group,"s-radiobutton":i.P.Button,"s-select":i.T,"s-selectoption":i.T.Option,"s-datepicker":i.r,"s-timepicker":i.eb,"s-rangepicker":i.r.RangePicker,"s-button":i.i,"s-modal":i.I,"s-popconfirm":i.M,"s-transfer":i.hb,"s-calendar":i.j,"s-table":i.bb},handleChangeLocale(e){const a=e.target.value;this.data.set("locale","zhCN"===a?s.a:g)},showModal(){this.data.set("visible",!0)},hideModal(){this.data.set("visible",!1)},info(){i.I.info({title:"some info",content:"some info"})},template:'<div><div class="change-locale"><span style="margin-right: 16px">Change locale of components: </span><s-radiogroup defaultValue="zhCN" on-change="handleChangeLocale" name="language"><s-radiobutton key="en" value="enUS">English</s-radiobutton><s-radiobutton key="cn" value="zhCN">中文</s-radiobutton></s-radiogroup></div><s-locale-provider locale="{{locale}}"><div class="locale-components"><div class="example"><s-pagination defaultCurrent="{{1}}" total="{{50}}" showSizeChanger="{{true}}"></s-pagination></div><div class="example"><s-datepicker></s-datepicker><s-timepicker></s-timepicker><s-rangepicker style="width: 200px"></s-rangepicker></div><div class="example"><s-button type="primary" on-click="showModal">Show Modal</s-button><s-popconfirm title="Question?"><a href="#">Click to confirm</a></s-popconfirm></div><div class="example"><s-transfer dataSource="{{[]}}" showSearch="{{true}}" targetKeys="{{[]}}" render="{{render}}"></s-transfer><div><div class="example" style="width: 319px; border: 1px solid #d9d9d9; border-radius: 4px"><s-calendar fullscreen="{{false}}"></s-calendar></div><div class="example"><s-table dataSource="{{[]}}" columns="{{columns}}"></s-table></div><s-modal title="Locale Modal" visible="{{visible}}" on-cancel="hideModal"><p>Locale Modal</p></s-modal></div></div></div></s-locale-provider></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667467606209"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};a.default=o.a.defineComponent({components:{desc:l,basic:r,locale:u},template:"\n        <div>\n            <desc/>\n            <basic/>\n            <locale/>\n        </div>\n    "})},669:function(e,a,n){var t=n(4),o=n(670);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var l={insert:"head",singleton:!1};t(o,l);e.exports=o.locals||{}},670:function(e,a,n){(a=n(5)(!1)).push([e.i,"\n.locale-components {\n    border-top: 1px solid #d9d9d9;\n    padding-top: 16px;\n}\n\n.example {\n    margin: 16px 0;\n}\n\n.example > * {\n    margin-right: 8px;\n}\n\n.change-locale {\n    margin-bottom: 16px;\n}\n",""]),e.exports=a}}]);