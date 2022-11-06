(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{520:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n.n(o),a={template:'<section class="markdown"><h1 id="modal-对话框"><span>Modal 对话框</span><a href="#modal-对话框" class="anchor">#</a></h1><p>模态对话框。</p><h2 id="何时使用"><span>何时使用</span><a href="#何时使用" class="anchor">#</a></h2><p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 <code>modal</code> 在当前页面正中打开一个浮层，承载相应的操作。</p><p>另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 <code>modal.confirm()</code> 等方法。</p><h2 id="代码演示"><span>代码演示</span><a href="#代码演示" class="anchor">#</a></h2></section>'},d=(n(679),n(8)),l={initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-basic">\n        &lt;s-button type="primary" on-click="clickHandler">Open Modal&lt;/s-button>\n        &lt;s-modal title="Basic Modal"\n            visible="{=visible=}"\n            on-ok="handleOk"\n            on-cancel="handleCancel"\n            on-afterClose="afterClose"\n            getContainer="{{getContainer}}"\n        >\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n        &lt;/s-modal>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Modal, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-modal\': Modal\n    },\n    clickHandler() {\n        this.data.set(\'visible\', true);\n    },\n    initData() {\n        return {\n            visible: false,\n            getContainer: () => {\n                const div = document.createElement(\'div\');\n                div.id = \'modal-container\';\n                document.body.appendChild(div);\n                return div;\n            }\n        };\n    },\n    handleOk(e) {\n        console.log(e);\n        this.data.set(\'visible\', false);\n    },\n    handleCancel(e) {\n        console.log(e);\n        this.data.set(\'visible\', false);\n    },\n    afterClose() {\n        console.log(\'afterClose\');\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-basic {}\n.san-modal p {\n    margin: 0;\n}\n&lt;/style></code></pre>',text:'\n<h4 id="基本"><span>基本</span><a href="#基本" class="anchor">#</a></h4><p>第一个对话框。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i,"s-modal":d.I},clickHandler(){this.data.set("visible",!0)},initData:()=>({visible:!1,getContainer:()=>{const t=document.createElement("div");return t.id="modal-container",document.body.appendChild(t),t}}),handleOk(t){console.log(t),this.data.set("visible",!1)},handleCancel(t){console.log(t),this.data.set("visible",!1)},afterClose(){console.log("afterClose")},template:'<div class="demo-basic"><s-button type="primary" on-click="clickHandler">Open Modal</s-button><s-modal title="Basic Modal" visible="{=visible=}" on-ok="handleOk" on-cancel="handleCancel" on-afterClose="afterClose" getContainer="{{getContainer}}"><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p></s-modal></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755122301"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},i=(n(681),{initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"demo-async\">\n        &lt;s-button type=\"primary\" on-click=\"clickHandler\">Open Modal with async logic&lt;/s-button>\n        &lt;s-modal title=\"Title\"\n            visible=\"{=visible=}\"\n            on-ok=\"handleOk\"\n            on-cancel=\"handleCancel\"\n            confirmLoading=\"{{confirmLoading}}\"\n        >\n            &lt;p>{{modalText}}&lt;/p>\n        &lt;/s-modal>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Modal, Button} from 'santd';\n\nexport default {\n    components: {\n        's-button': Button,\n        's-modal': Modal\n    },\n    clickHandler() {\n        this.data.set('visible', true);\n    },\n    initData() {\n        return {\n            visible: false,\n            modalText: 'Content of the modal',\n            confirmLoading: false\n        };\n    },\n    handleOk(e) {\n        this.data.set('modalText', 'The modal will be closed after two seconds');\n        this.data.set('confirmLoading', true);\n        setTimeout(() => {\n            this.data.set('visible', false);\n            this.data.set('confirmLoading', false);\n        }, 2000);\n    },\n    handleCancel(e) {\n        console.log('Clicked cancel button', e);\n        this.data.set('visible', false);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-async {}\n&lt;/style></code></pre>",text:'\n<h4 id="异步关闭"><span>异步关闭</span><a href="#异步关闭" class="anchor">#</a></h4><p>点击确定后异步关闭对话框，例如提交表单。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i,"s-modal":d.I},clickHandler(){this.data.set("visible",!0)},initData:()=>({visible:!1,modalText:"Content of the modal",confirmLoading:!1}),handleOk(t){this.data.set("modalText","The modal will be closed after two seconds"),this.data.set("confirmLoading",!0),setTimeout(()=>{this.data.set("visible",!1),this.data.set("confirmLoading",!1)},2e3)},handleCancel(t){console.log("Clicked cancel button",t),this.data.set("visible",!1)},template:'<div class="demo-async"><s-button type="primary" on-click="clickHandler">Open Modal with async logic</s-button><s-modal title="Title" visible="{=visible=}" on-ok="handleOk" on-cancel="handleCancel" confirmLoading="{{confirmLoading}}"><p>{{modalText}}</p></s-modal></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755122291"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),c=(n(683),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-footer">\n        &lt;s-button type="primary" on-click="clickHandler">Open Modal with customized footer&lt;/s-button>\n        &lt;s-modal title="Title"\n            visible="{=visible=}"\n            on-ok="handleOk"\n            on-cancel="handleCancel"\n            confirmLoading="{{confirmLoading}}"\n        >\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n            &lt;template slot="footer">\n                &lt;s-button on-click="handleCancel">Return&lt;/s-button>\n                &lt;s-button type="primary" loading="{{loading}}" on-click="handleOk">Submit&lt;/s-button>\n            &lt;/template>\n        &lt;/s-modal>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Modal, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-modal\': Modal\n    },\n    clickHandler() {\n        this.data.set(\'visible\', true);\n    },\n    initData() {\n        return {\n            loading: false,\n            visible: false\n        };\n    },\n    handleOk(e) {\n        this.data.set(\'loading\', true);\n        setTimeout(() => {\n            this.data.set(\'visible\', false);\n            this.data.set(\'loading\', false);\n        }, 3000);\n    },\n    handleCancel(e) {\n        console.log(e);\n        this.data.set(\'visible\', false);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-footer {}\n&lt;/style></code></pre>',text:'\n<h4 id="自定义页脚"><span>自定义页脚</span><a href="#自定义页脚" class="anchor">#</a></h4><p>更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。\n不需要默认确定取消按钮时，你可以把 <code>hasFooter</code> 设为 <code>false</code>。(hasFooter=&quot;&#123;&#123;false}}&quot;)</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i,"s-modal":d.I},clickHandler(){this.data.set("visible",!0)},initData:()=>({loading:!1,visible:!1}),handleOk(t){this.data.set("loading",!0),setTimeout(()=>{this.data.set("visible",!1),this.data.set("loading",!1)},3e3)},handleCancel(t){console.log(t),this.data.set("visible",!1)},template:'<div class="demo-footer"><s-button type="primary" on-click="clickHandler">Open Modal with customized footer</s-button><s-modal title="Title" visible="{=visible=}" on-ok="handleOk" on-cancel="handleCancel" confirmLoading="{{confirmLoading}}"><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p><template slot="footer"><s-button on-click="handleCancel">Return</s-button><s-button type="primary" loading="{{loading}}" on-click="handleOk">Submit</s-button></template></s-modal></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755122283"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'});n(685);const p=d.I.confirm;var r={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"demo-confirm\">\n        &lt;s-button on-click=\"showConfirm\">Confirm&lt;/s-button>\n        &lt;s-button on-click=\"showDeleteConfirm\" type=\"dashed\">Delete&lt;/s-button>\n        &lt;s-button on-click=\"showPropsConfirm\" type=\"dashed\">With extra props&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Modal, Button} from 'santd';\n\nconst confirm = Modal.confirm;\n\nexport default {\n    components: {\n        's-button': Button\n    },\n    showConfirm() {\n        confirm({\n            title: 'Do you Want to delete these items?',\n            content: 'Some descriptions',\n            onOk() {\n                console.log('OK');\n            },\n            onCancel() {\n                console.log('Cancel');\n            }\n        });\n    },\n    showDeleteConfirm() {\n        confirm({\n            title: 'Are you sure delete this task?',\n            content: 'Some descriptions',\n            okText: 'Yes',\n            okType: 'danger',\n            cancelText: 'No',\n            onOk() {\n                console.log('OK');\n            },\n            onCancel() {\n                console.log('Cancel');\n            }\n        });\n    },\n    showPropsConfirm() {\n        confirm({\n            title: 'Are you sure delete this task?',\n            content: 'Some descriptions',\n            okText: 'Yes',\n            okType: 'danger',\n            okButtonProps: {\n                disabled: true,\n            },\n            cancelText: 'No',\n            onOk() {\n                console.log('OK');\n            },\n            onCancel() {\n                console.log('Cancel');\n            }\n        });\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-confirm {}\n&lt;/style></code></pre>",text:'\n<h4 id="确认对话框"><span>确认对话框</span><a href="#确认对话框" class="anchor">#</a></h4><p>使用 <code>confirm()</code> 可以快捷地弹出确认框。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i},showConfirm(){p({title:"Do you Want to delete these items?",content:"Some descriptions",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})},showDeleteConfirm(){p({title:"Are you sure delete this task?",content:"Some descriptions",okText:"Yes",okType:"danger",cancelText:"No",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})},showPropsConfirm(){p({title:"Are you sure delete this task?",content:"Some descriptions",okText:"Yes",okType:"danger",okButtonProps:{disabled:!0},cancelText:"No",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})},template:'<div class="demo-confirm"><s-button on-click="showConfirm">Confirm</s-button><s-button on-click="showDeleteConfirm" type="dashed">Delete</s-button><s-button on-click="showPropsConfirm" type="dashed">With extra props</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755122273"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};n(687);const m=d.I.confirm;var h={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"demo-confirm-promise\">\n        &lt;s-button on-click=\"showConfirm\">Confirm&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Modal, Button} from 'santd';\n\nconst confirm = Modal.confirm;\n\nexport default {\n    components: {\n        's-button': Button\n    },\n    showConfirm() {\n        confirm({\n            title: 'Do you Want to delete these items?',\n            content: 'When clicked the OK button, this dialog will be closed after 1 second',\n            onOk() {\n                return new Promise((resolve, reject) => {\n                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);\n                }).catch(() => console.log('Oops errors!'));\n            },\n            onCancel() {\n                console.log('Cancel');\n            }\n        });\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-confirm-promise {}\n&lt;/style></code></pre>",text:'\n<h4 id="确认对话框"><span>确认对话框</span><a href="#确认对话框" class="anchor">#</a></h4><p>使用 <code>confirm()</code> 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i},showConfirm(){m({title:"Do you Want to delete these items?",content:"When clicked the OK button, this dialog will be closed after 1 second",onOk:()=>new Promise((t,e)=>{setTimeout(Math.random()>.5?t:e,1e3)}).catch(()=>console.log("Oops errors!")),onCancel(){console.log("Cancel")}})},template:'<div class="demo-confirm-promise"><s-button on-click="showConfirm">Confirm</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755122266"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'};n(689);const b=s.a.defineComponent({template:"\n        <div>\n            <p>some messages...some messages...</p>\n            <p>some messages...some messages...</p>\n        </div>\n    "});var u={initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"demo-info\">\n        &lt;s-button on-click=\"info\">Info&lt;/s-button>\n        &lt;s-button on-click=\"success\">Success&lt;/s-button>\n        &lt;s-button on-click=\"error\">Error&lt;/s-button>\n        &lt;s-button on-click=\"warning\">Warning&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport san from 'san';\nimport {Modal, Button} from 'santd';\n\nconst content = san.defineComponent({\n    template: &#96;\n        &lt;div>\n            &lt;p>some messages...some messages...&lt;/p>\n            &lt;p>some messages...some messages...&lt;/p>\n        &lt;/div>\n    &#96;\n});\n\nexport default {\n    components: {\n        's-button': Button\n    },\n    info() {\n        Modal.info({\n            title: 'This is a notification message',\n            content,\n            onOk() {}\n        });\n    },\n    success() {\n        Modal.success({\n            title: 'This is a success message',\n            content: 'some messages...some messages...'\n        });\n    },\n    error() {\n        Modal.error({\n            title: 'This is an error message',\n            content: 'some messages...some messages...'\n        });\n    },\n    warning() {\n        Modal.warning({\n            title: 'This is a warning message',\n            content: 'some messages...some messages...'\n        });\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-info {}\n&lt;/style></code></pre>",text:'\n<h4 id="信息提示"><span>信息提示</span><a href="#信息提示" class="anchor">#</a></h4><p>各种类型的信息提示，只提供一个按钮用于关闭。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i},info(){d.I.info({title:"This is a notification message",content:b,onOk(){}})},success(){d.I.success({title:"This is a success message",content:"some messages...some messages..."})},error(){d.I.error({title:"This is an error message",content:"some messages...some messages..."})},warning(){d.I.warning({title:"This is a warning message",content:"some messages...some messages..."})},template:'<div class="demo-info"><s-button on-click="info">Info</s-button><s-button on-click="success">Success</s-button><s-button on-click="error">Error</s-button><s-button on-click="warning">Warning</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755122253"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'},g=(n(691),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-local">\n        &lt;s-button type="primary" on-click="clickHandler">Modal&lt;/s-button>\n        &lt;s-modal title="Modal"\n            visible="{=visible=}"\n            okText="确认"\n            cancelText="取消(ESC)"\n            on-ok="handleOk"\n            on-cancel="handleCancel"\n        >\n            &lt;p>Bla bla ...&lt;/p>\n            &lt;p>Bla bla ...&lt;/p>\n            &lt;p>Bla bla ...&lt;/p>\n        &lt;/s-modal>\n        &lt;br/>\n        &lt;br/>\n        &lt;s-button on-click="confirm">Confirm&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Modal, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-modal\': Modal\n    },\n    clickHandler() {\n        this.data.set(\'visible\', true);\n    },\n    initData() {\n        return {\n            visible: false\n        };\n    },\n    handleOk(e) {\n        console.log(e);\n        this.data.set(\'visible\', false);\n    },\n    handleCancel(e) {\n        console.log(e);\n        this.data.set(\'visible\', false);\n    },\n    confirm() {\n        Modal.confirm({\n            title: \'Confirm\',\n            content: \'Bla bla ...\',\n            okText: \'确认\',\n            cancelText: \'取消\'\n        });\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-local {}\n&lt;/style></code></pre>',text:'\n<h4 id="国际化"><span>国际化</span><a href="#国际化" class="anchor">#</a></h4><p>设置 <code>okText</code> 与 <code>cancelText</code> 以自定义按钮文字。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i,"s-modal":d.I},clickHandler(){this.data.set("visible",!0)},initData:()=>({visible:!1}),handleOk(t){console.log(t),this.data.set("visible",!1)},handleCancel(t){console.log(t),this.data.set("visible",!1)},confirm(){d.I.confirm({title:"Confirm",content:"Bla bla ...",okText:"确认",cancelText:"取消"})},template:'<div class="demo-local"><s-button type="primary" on-click="clickHandler">Modal</s-button><s-modal title="Modal" visible="{=visible=}" okText="确认" cancelText="取消(ESC)" on-ok="handleOk" on-cancel="handleCancel"><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p></s-modal><br><br><s-button on-click="confirm">Confirm</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755122260"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),x=(n(693),{initData:()=>({isExpand:!1,code:"\n<pre><code class=\"language-html\">&lt;template>\n    &lt;div class=\"demo-manual\">\n        &lt;s-button on-click=\"countDown\">Open modal to close in 5s&lt;/s-button>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Modal, Button} from 'santd';\n\nexport default {\n    components: {\n        's-button': Button\n    },\n    countDown() {\n        let secondsToGo = 5;\n        const instance = Modal.success({\n            title: 'This is a notification message',\n            content: &#96;This modal will be destroyed after &#36;&#123;secondsToGo} second.&#96;\n        });\n        setInterval(() => {\n            secondsToGo -= 1;\n            instance.update({\n                content: &#96;This modal will be destroyed after &#36;&#123;secondsToGo} second.&#96;,\n            });\n        }, 1000);\n        setTimeout(() => instance.destroy(), secondsToGo * 1000);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-manual {}\n&lt;/style></code></pre>",text:'\n<h4 id="手动更新和移除"><span>手动更新和移除</span><a href="#手动更新和移除" class="anchor">#</a></h4><p>手动更新和关闭 <code>Modal.method</code> 方式创建的对话框。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i},countDown(){let t=5;const e=d.I.success({title:"This is a notification message",content:`This modal will be destroyed after ${t} second.`});setInterval(()=>{t-=1,e.update({content:`This modal will be destroyed after ${t} second.`})},1e3),setTimeout(()=>e.destroy(),1e3*t)},template:'<div class="demo-manual"><s-button on-click="countDown">Open modal to close in 5s</s-button></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755122247"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),f=(n(695),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-position">\n        &lt;s-button type="primary" on-click="setModal1Visible(true)">Display a modal dialog at 20px to Top&lt;/s-button>\n        &lt;s-modal title="20px to Top"\n            visible="{=modal1Visible=}"\n            modalStyle="top:20px;"\n            on-ok="setModal1Visible(false)"\n            on-cancel="setModal1Visible(false)"\n        >\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n        &lt;/s-modal>\n        &lt;br/>&lt;br/>\n        &lt;s-button type="primary" on-click="setModal2Visible(true)">Vertically centered modal dialog&lt;/s-button>\n        &lt;s-modal centered="{{true}}"\n            title="Vertically centered modal dialog"\n            visible="{=modal2Visible=}"\n            on-ok="setModal2Visible(false)"\n            on-cancel="setModal2Visible(false)"\n        >\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n        &lt;/s-modal>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Modal, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-modal\': Modal\n    },\n    initData() {\n        return {\n            modal1Visible: false,\n            modal2Visible: false\n        };\n    },\n    setModal1Visible(modal1Visible) {\n        this.data.set(\'modal1Visible\', modal1Visible);\n    },\n    setModal2Visible(modal2Visible) {\n        this.data.set(\'modal2Visible\', modal2Visible);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-position {}\n&lt;/style></code></pre>',text:'\n<h4 id="自定义位置"><span>自定义位置</span><a href="#自定义位置" class="anchor">#</a></h4><p>使用 <code>centered</code> 或 <code>modalStyle</code> 添加top样式来设置对话框位置。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i,"s-modal":d.I},initData:()=>({modal1Visible:!1,modal2Visible:!1}),setModal1Visible(t){this.data.set("modal1Visible",t)},setModal2Visible(t){this.data.set("modal2Visible",t)},template:'<div class="demo-position"><s-button type="primary" on-click="setModal1Visible(true)">Display a modal dialog at 20px to Top</s-button><s-modal title="20px to Top" visible="{=modal1Visible=}" modalStyle="top:20px;" on-ok="setModal1Visible(false)" on-cancel="setModal1Visible(false)"><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p></s-modal><br><br><s-button type="primary" on-click="setModal2Visible(true)">Vertically centered modal dialog</s-button><s-modal centered="{{true}}" title="Vertically centered modal dialog" visible="{=modal2Visible=}" on-ok="setModal2Visible(false)" on-cancel="setModal2Visible(false)"><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p></s-modal></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755122239"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),v=(n(697),{initData:()=>({isExpand:!1,code:'\n<pre><code class="language-html">&lt;template>\n    &lt;div class="demo-button-props">\n        &lt;s-button type="primary" on-click="showModal">Open Modal with customized button props&lt;/s-button>\n        &lt;s-modal title="Basic Modal"\n            visible="{=visible=}"\n            okButtonProps="{{{disabled:true}}}"\n            cancelButtonProps="{{{disabled:true}}}"\n            on-ok="handleOk"\n            on-cancel="handleCancel"\n        >\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n            &lt;p>Some contents...&lt;/p>\n        &lt;/s-modal>\n    &lt;/div>\n&lt;/template>\n\n&lt;script>\nimport {Modal, Button} from \'santd\';\n\nexport default {\n    components: {\n        \'s-button\': Button,\n        \'s-modal\': Modal\n    },\n    initData() {\n        return {\n            visible: false\n        };\n    },\n    showModal() {\n        this.data.set(\'visible\', true);\n    },\n    handleOk(e) {\n        console.log(e);\n        this.data.set(\'visible\', false);\n    },\n    handleCancel(e) {\n        console.log(e);\n        this.data.set(\'visible\', false);\n    }\n}\n&lt;/script>\n\n&lt;style>\n.demo-button-props {}\n&lt;/style></code></pre>',text:'\n<h4 id="自定义页脚按钮属性"><span>自定义页脚按钮属性</span><a href="#自定义页脚按钮属性" class="anchor">#</a></h4><p>传入 <code>okButtonProps</code> 和 <code>cancelButtonProps</code> 可分别自定义确定按钮和取消按钮的 props。</p>'}),toggleExpand(){this.data.set("isExpand",!this.data.get("isExpand"))},components:{"code-preview":{components:{"s-button":d.i,"s-modal":d.I},initData:()=>({visible:!1}),showModal(){this.data.set("visible",!0)},handleOk(t){console.log(t),this.data.set("visible",!1)},handleCancel(t){console.log(t),this.data.set("visible",!1)},template:'<div class="demo-button-props"><s-button type="primary" on-click="showModal">Open Modal with customized button props</s-button><s-modal title="Basic Modal" visible="{=visible=}" okButtonProps="{{{disabled:true}}}" cancelButtonProps="{{{disabled:true}}}" on-ok="handleOk" on-cancel="handleCancel"><p>Some contents...</p><p>Some contents...</p><p>Some contents...</p></s-modal></div>'}},template:'<section class="code-box {{isExpand?\'expand\':\'\'}}" id="components-demo-1667755122232"><section class="code-box-demo"><code-preview></code-preview></section><section class="code-box-meta markdown">{{ text | raw}}<span class="code-expand-icon" on-click="toggleExpand"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="{{isExpand?\'code-expand-icon-hide\':\'code-expand-icon-show\'}}"><img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="{{isExpand?\'code-expand-icon-show\':\'code-expand-icon-hide\'}}"></span></section><section class="highlight-wrapper {{isExpand?\'highlight-wrapper-expand\':\'\'}}">{{ code | raw}}</section></section>'}),w={template:'<section class="markdown"><h2 id="api"><span>API</span><a href="#api" class="anchor">#</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>bodyStyle</td><td>modal body 样式</td><td>string|object</td><td>{}</td></tr><tr><td>maskStyle</td><td>遮罩样式</td><td>string|object</td><td>{}</td></tr><tr><td>modalStyle</td><td>可用于设置浮层的样式，调整浮层位置等</td><td>string|object</td><td>-</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td>string</td><td>取消</td></tr><tr><td>centered</td><td>垂直居中展示 modal</td><td>boolean</td><td><code>false</code></td></tr><tr><td>closable</td><td>是否显示右上角的关闭按钮</td><td>boolean</td><td>true</td></tr><tr><td>closeIcon</td><td>自定义关闭图标</td><td>slot</td><td>-</td></tr><tr><td>confirmLoading</td><td>确定按钮 loading</td><td>boolean</td><td>无</td></tr><tr><td>getContainer</td><td>指定 modal 挂载的 HTML 节点</td><td>(instance): HTMLElement</td><td>() =&gt; document.body</td></tr><tr><td>hasFooter</td><td>是否显示底部内容</td><td>boolean</td><td>true</td></tr><tr><td>keyboard</td><td>是否支持键盘esc关闭</td><td>boolean</td><td>true</td></tr><tr><td>mask</td><td>是否展示遮罩</td><td>boolean</td><td>true</td></tr><tr><td>maskClosable</td><td>点击蒙层是否允许关闭</td><td>boolean</td><td>true</td></tr><tr><td>okText</td><td>确认按钮文字</td><td>string</td><td>确定</td></tr><tr><td>okType</td><td>确认按钮类型</td><td>string</td><td>primary</td></tr><tr><td>okButtonProps</td><td>ok 按钮 props</td><td><a href="/button">ButtonProps</a></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>cancel 按钮 props</td><td><a href="/button">ButtonProps</a></td><td>-</td></tr><tr><td>title</td><td>标题</td><td>string</td><td>无</td></tr><tr><td>visible</td><td>对话框是否可见</td><td>boolean</td><td>无</td></tr><tr><td>width</td><td>宽度</td><td>string|number</td><td>520</td></tr><tr><td>wrapClassName</td><td>对话框外层容器的类名</td><td>string</td><td>-</td></tr><tr><td>wrapStyle</td><td>对话框外层容器的样式</td><td>string|object</td><td>-</td></tr><tr><td>zIndex</td><td>设置 modal 的 <code>z-index</code></td><td>number</td><td>1000</td></tr><tr><td>on-afterClose</td><td>modal 完全关闭后的回调</td><td>function</td><td>无</td></tr><tr><td>on-cancel</td><td>点击遮罩层或右上角叉或取消按钮的回调</td><td>function(e)</td><td>无</td></tr><tr><td>on-ok</td><td>点击确定回调</td><td>function(e)</td><td>无</td></tr></tbody></table><h2 id="插槽"><span>插槽</span><a href="#插槽" class="anchor">#</a></h2><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>(default) 默认插槽</td><td>主体内容</td></tr><tr><td>title</td><td>头部标题内容</td></tr><tr><td>footer</td><td>底部内容，当不需要默认底部按钮时，可以设为 <code>hasFooter=false</code></td></tr></tbody></table><h3 id="modalmethod"><span>Modal.method()</span><a href="#modalmethod" class="anchor">#</a></h3><p>包括：</p><ul><li><code>Modal.info</code></li><li><code>Modal.success</code></li><li><code>Modal.error</code></li><li><code>Modal.warning</code></li><li><code>Modal.confirm</code></li></ul><p>以上均为一个函数，参数为 object，具体属性如下：</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>autoFocusButton</td><td>指定自动获得焦点的按钮</td><td>null|string: <code>ok</code> <code>cancel</code></td><td><code>ok</code></td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td>string</td><td>取消</td></tr><tr><td>centered</td><td>垂直居中展示 modal</td><td>boolean</td><td><code>false</code></td></tr><tr><td>className</td><td>容器类名</td><td>string</td><td>-</td></tr><tr><td>content</td><td>内容</td><td>string|SanComponent</td><td>无</td></tr><tr><td>iconType</td><td>图标 Icon 类型</td><td>string</td><td>question-circle</td></tr><tr><td>maskClosable</td><td>点击蒙层是否允许关闭</td><td>boolean</td><td><code>false</code></td></tr><tr><td>okText</td><td>确认按钮文字</td><td>string</td><td>确定</td></tr><tr><td>okType</td><td>确认按钮类型</td><td>string</td><td>primary</td></tr><tr><td>okButtonProps</td><td>ok 按钮 props</td><td><a href="/button">ButtonProps</a></td><td>-</td></tr><tr><td>cancelButtonProps</td><td>cancel 按钮 props</td><td><a href="/button">ButtonProps</a></td><td>-</td></tr><tr><td>title</td><td>标题</td><td>string|SanComponent</td><td>无</td></tr><tr><td>width</td><td>宽度</td><td>string|number</td><td>416</td></tr><tr><td>zIndex</td><td>设置 modal 的 <code>z-index</code></td><td>number</td><td>1000</td></tr><tr><td>onCancel</td><td>取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭</td><td>function</td><td>无</td></tr><tr><td>onOk</td><td>点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭</td><td>function</td><td>无</td></tr></tbody></table><p>以上函数调用后，会返回一个引用，可以通过该引用更新和关闭弹窗。</p><pre><code class="language-js">const Modal = Modal.info();Modal.update({title: &#39;修改的标题&#39;,content: &#39;修改的内容&#39;,});Modal.destroy();</code></pre></section>'};e.default=s.a.defineComponent({template:"\n        <div>\n            <head/>\n            <basic/>\n            <async/>\n            <footer/>\n            <confirm/>\n            <confirm2/>\n            <info/>\n            <locale/>\n            <manual/>\n            <position/>\n            <button/>\n            <readme/>\n        </div>\n    ",components:{head:a,basic:l,async:i,footer:c,confirm:r,confirm2:h,info:u,locale:g,manual:x,position:f,button:v,readme:w}})},679:function(t,e,n){var o=n(4),s=n(680);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},680:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.demo-basic {}\n.san-modal p {\n    margin: 0;\n}\n",""]),t.exports=e},681:function(t,e,n){var o=n(4),s=n(682);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},682:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.demo-async {}\n",""]),t.exports=e},683:function(t,e,n){var o=n(4),s=n(684);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},684:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.demo-footer {}\n",""]),t.exports=e},685:function(t,e,n){var o=n(4),s=n(686);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},686:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.demo-confirm {}\n",""]),t.exports=e},687:function(t,e,n){var o=n(4),s=n(688);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},688:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.demo-confirm-promise {}\n",""]),t.exports=e},689:function(t,e,n){var o=n(4),s=n(690);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},690:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.demo-info {}\n",""]),t.exports=e},691:function(t,e,n){var o=n(4),s=n(692);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},692:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.demo-local {}\n",""]),t.exports=e},693:function(t,e,n){var o=n(4),s=n(694);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},694:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.demo-manual {}\n",""]),t.exports=e},695:function(t,e,n){var o=n(4),s=n(696);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},696:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.demo-position {}\n",""]),t.exports=e},697:function(t,e,n){var o=n(4),s=n(698);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var a={insert:"head",singleton:!1};o(s,a);t.exports=s.locals||{}},698:function(t,e,n){(e=n(5)(!1)).push([t.i,"\n.demo-button-props {}\n",""]),t.exports=e}}]);