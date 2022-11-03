(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{796:function(l,n,e){"use strict";e.r(n),n.default='<h1 id="更新日志"><span>更新日志</span><a href="#更新日志" class="anchor">#</a></h1><p><code>ant-design-san</code> 严格遵循 <a href="http://semver.org/lang/zh-CN/">Semantic Versioning 2.0.0</a> 语义化版本规范</p><h4 id="发布周期"><span>发布周期</span><a href="#发布周期" class="anchor">#</a></h4><ul>\n<li>修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）</li>\n<li>次版本号：带有新特性的向下兼容的版本</li>\n<li>主版本号：含有破坏性更新和新特性，不在发布周期内</li>\n</ul>\n<hr>\n<h2 id="_1017"><span>1.0.17</span><a href="#_1017" class="anchor">#</a></h2><p><code>2022-06-21</code></p><ul>\n<li>Table<ul>\n<li>🐞 修复 Form 校验问题，该问题是由 1.0.16 引入</li>\n</ul>\n</li>\n</ul>\n<h2 id="_1016"><span>1.0.16</span><a href="#_1016" class="anchor">#</a></h2><p><code>2022-06-13</code></p><ul>\n<li>Table<ul>\n<li>🆕 列自定义 title 支持获取 column 信息</li>\n<li>🌟 优化 force 选项</li>\n</ul>\n</li>\n</ul>\n<h2 id="_1015"><span>1.0.15</span><a href="#_1015" class="anchor">#</a></h2><p><code>2021-12-13</code></p><ul>\n<li>Table<ul>\n<li>🐞 修复 table 数据 data 为 null 时报错 <a href="https://github.com/ecomfe/santd/pull/78">#78</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_1014"><span>1.0.14</span><a href="#_1014" class="anchor">#</a></h2><p><code>2021-10-15</code></p><ul>\n<li>MultipleSelector<ul>\n<li>🐞 修复远程搜索重置 data 不显示 title <a href="https://github.com/ecomfe/santd/pull/74">#74</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_1013"><span>1.0.13</span><a href="#_1013" class="anchor">#</a></h2><p><code>2021-09-09</code></p><ul>\n<li>AutoComplete<ul>\n<li>🐞 修复使用该组件会导致编译报错的问题 <a href="https://github.com/ecomfe/santd/pull/73">#73</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_1012"><span>1.0.12</span><a href="#_1012" class="anchor">#</a></h2><p><code>2021-08-20</code></p><ul>\n<li>PageHeader<ul>\n<li>🐞 修复 PageHeader 组件的面包屑不能正常工作的问题 <a href="https://github.com/ecomfe/santd/pull/72">#72</a></li>\n</ul>\n</li>\n<li>Tabs<ul>\n<li>🐞 在某些情况下无法切换 tab 的问题 <a href="https://github.com/ecomfe/santd/pull/71">#71</a></li>\n</ul>\n</li>\n<li>Radio<ul>\n<li>🐞 修复 RadioGroup 组件的 value 属性的值不能为 0 的问题 <a href="https://github.com/ecomfe/santd/pull/70">#70</a></li>\n</ul>\n</li>\n<li>Select<ul>\n<li>🐞 修复 multiple 模式下清空输入后报错的问题 <a href="https://github.com/ecomfe/santd/pull/70">#70</a></li>\n</ul>\n</li>\n<li>Checkbox<ul>\n<li>🐞 修复部分选中状态的 disabled 效果不能正常生效的问题 <a href="https://github.com/ecomfe/santd/pull/66">#66</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_1011"><span>1.0.11</span><a href="#_1011" class="anchor">#</a></h2><p><code>2021-07-30</code></p><ul>\n<li>Descriptions<ul>\n<li>🐞 修复使用 3.10.6 或以上版本的 san 时该组件完全用不了的问题  <a href="https://github.com/ecomfe/santd/pull/65">#65</a></li>\n</ul>\n</li>\n<li>TreeSelect<ul>\n<li>🐞 修复默认不展开节点时控制台会报错的问题（不过不影响使用） <a href="https://github.com/ecomfe/santd/pull/65">#65</a></li>\n</ul>\n</li>\n<li>Tree<ul>\n<li>🐞 修复子节点的复选框默认全选时父节点的复选框的选中状态是部分选中的问题 <a href="https://github.com/ecomfe/santd/pull/65">#65</a></li>\n</ul>\n</li>\n<li>TimePicker<ul>\n<li>🐞 修复无论是否设置了 autoFocus 属性都会自动 focus 的问题 <a href="https://github.com/ecomfe/santd/pull/62">#62</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_1010"><span>1.0.10</span><a href="#_1010" class="anchor">#</a></h2><p><code>2021-07-06</code></p><ul>\n<li>Table<ul>\n<li>🐞 修复开启 expandRowByClick 后无法通过展开按钮展开的问题 <a href="https://github.com/ecomfe/santd/pull/60">#60</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_109"><span>1.0.9</span><a href="#_109" class="anchor">#</a></h2><p><code>2021-07-05</code></p><ul>\n<li>PageHeader<ul>\n<li>🐞 修改 pageHeader、localeProvider 组件的目录名为短横线分隔（page-header、locale-provider），解决 babel-plugin-import 插件引入问题 <a href="https://github.com/ecomfe/santd/commit/a064242731ccc13108d42831cd598809b736200b">a064242</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_108"><span>1.0.8</span><a href="#_108" class="anchor">#</a></h2><p><code>2021-06-16</code></p><ul>\n<li>Popconfirm<ul>\n<li>🐞 解决 popconfirm 组件样式丢失问题 <a href="https://github.com/ecomfe/santd/commit/1c2f87a5bf3de3c415354816cd1a1dcde43e19e8">1c2f87a</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_107"><span>1.0.7</span><a href="#_107" class="anchor">#</a></h2><p><code>2021-06-04</code></p><ul>\n<li>Result<ul>\n<li>💄 子标题去掉自带的引号 <a href="https://github.com/ecomfe/santd/pull/56">#56</a></li>\n</ul>\n</li>\n<li>其它<ul>\n<li>🛠 postcss 的版本从 v7 升级到 v8 <a href="https://github.com/Lohoyo/santd/commit/5032e8c95982e28a54769250710b37956ded2164">5032e8c</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_106"><span>1.0.6</span><a href="#_106" class="anchor">#</a></h2><p><code>2021-05-01</code></p><ul>\n<li>DatePicker<ul>\n<li>🆕 RangePicker 新增 on-calendarChange 属性：待选日期发生变化的回调 <a href="https://github.com/ecomfe/santd/pull/55">#55</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_105"><span>1.0.5</span><a href="#_105" class="anchor">#</a></h2><p><code>2021-03-31</code></p><ul>\n<li>🐞 修复部分时间日期相关的组件内部使用的 Day.js 的插件没有在内部引入而需要用户引入的问题 <a href="https://github.com/ecomfe/santd/pull/53">#53</a></li>\n</ul>\n<h2 id="_104"><span>1.0.4</span><a href="#_104" class="anchor">#</a></h2><p><code>2021-03-30</code></p><ul>\n<li>Table<ul>\n<li>🐞 修复某些情况下该组件的分页功能没有样式的问题 <a href="https://github.com/ecomfe/santd/pull/52">#52</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_103"><span>1.0.3</span><a href="#_103" class="anchor">#</a></h2><p><code>2021-03-29</code></p><ul>\n<li>TimePicker<ul>\n<li>🐞 修复无法用首字母大写的形式引入该组件的问题 <a href="https://github.com/ecomfe/santd/pull/51">#51</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_102"><span>1.0.2</span><a href="#_102" class="anchor">#</a></h2><p><code>2021-03-24</code></p><ul>\n<li>🐞 修复 1.0.0 版本把 Moment.js 换成 Day.js 后引起的和时间日期相关的组件的一系列 bug，涉及的组件包括 Calendar、DatePicker、LocaleProvider、TimePicker <a href="https://github.com/ecomfe/santd/pull/48">#48</a></li>\n</ul>\n<h2 id="_101"><span>1.0.1</span><a href="#_101" class="anchor">#</a></h2><p><code>2021-03-23</code></p><ul>\n<li>Menu<ul>\n<li>🐞 修复 MenuItem 溢出折叠时的可用空间的计算逻辑 <a href="https://github.com/ecomfe/santd/pull/47">#47</a></li>\n<li>🐞 修复 MenuItem 的 padding 没有正常生效的问题 <a href="https://github.com/ecomfe/santd/pull/47">#47</a></li>\n<li>🐞 修复 MenuItem 之间有间隙导致溢出折叠的计算不精确的问题 <a href="https://github.com/ecomfe/santd/pull/47">#47</a></li>\n<li>🐞 修复折叠图标的空间的计算逻辑 <a href="https://github.com/ecomfe/santd/pull/47">#47</a></li>\n</ul>\n</li>\n<li>Table<ul>\n<li>🐞 修复当存在子表格时展开子表格的按钮默认隐藏的问题，改为了默认显示 <a href="https://github.com/ecomfe/santd/pull/45">#45</a></li>\n</ul>\n</li>\n<li>其它<ul>\n<li>🐞 修复发布 NPM 包的脚本因外部依赖 @octokit/rest 的 API 更改导致脚本运行失败的问题 <a href="https://github.com/ecomfe/santd/pull/44">#44</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_100"><span>1.0.0</span><a href="#_100" class="anchor">#</a></h2><p><code>2021-03-15</code></p><ul>\n<li>Affix<ul>\n<li>🆕 新增 target 属性：设置 Affix 需要监听其滚动事件的元素 <a href="https://github.com/ecomfe/santd/pull/27">#27</a></li>\n</ul>\n</li>\n<li>AutoComplete<ul>\n<li>🆕 新增 backfill 属性：使用键盘选择选项的时候把选中项回填到输入框中 <a href="https://github.com/ecomfe/santd/pull/24">#24</a></li>\n</ul>\n</li>\n<li>Menu<ul>\n<li>🆕 新增 overflowedIndicator 属性：自定义 Menu 折叠时的图标 <a href="https://github.com/ecomfe/santd/pull/30">#30</a></li>\n<li>🆕 新增菜单项过多而溢出时会自动折叠的功能 <a href="https://github.com/ecomfe/santd/pull/29">#29</a></li>\n<li>💄 子菜单统一为垂直菜单 <a href="https://github.com/ecomfe/santd/pull/29">#29</a></li>\n<li>🐞 修复展开收起箭头某些情况下会遮盖文字的问题 <a href="https://github.com/ecomfe/santd/pull/29">#29</a></li>\n</ul>\n</li>\n<li>Select<ul>\n<li>🌟 默认根据 value 筛选改为默认同时根据 value 和内嵌内容筛选 <a href="https://github.com/ecomfe/santd/pull/34">34</a></li>\n</ul>\n</li>\n<li>Space<ul>\n<li>🆕 新增 Space 组件：设置组件之间的间距 <a href="https://github.com/ecomfe/santd/pull/25">#25</a></li>\n</ul>\n</li>\n<li>Tabs<ul>\n<li>🆕 新增 forceRender 属性：被隐藏时是否渲染 DOM 结构 <a href="https://github.com/ecomfe/santd/pull/28">#28</a></li>\n<li>🆕 Tabpane 的内容支持 slot <a href="https://github.com/ecomfe/santd/pull/32">#32</a></li>\n</ul>\n</li>\n<li>Tree<ul>\n<li>🆕 新增 height 和 virtual 属性：支持虚拟滚动 <a href="https://github.com/ecomfe/santd/pull/35">#35</a></li>\n<li>🆕 支持通过 treeData 属性自定义图标 <a href="https://github.com/ecomfe/santd/pull/40">#40</a></li>\n<li>🐞 修复子节点是否可选的判断逻辑 <a href="https://github.com/ecomfe/santd/pull/35">#35</a></li>\n<li>🐞 修复 disableCheckbox 属性没有生效的问题 <a href="https://github.com/ecomfe/santd/pull/40">#40</a></li>\n</ul>\n</li>\n<li>TreeSelect<ul>\n<li>🆕 新增 showSearch 属性：支持搜索框 <a href="https://github.com/ecomfe/santd/pull/33">#33</a></li>\n<li>🆕 新增 searchValue 属性：手动控制搜索框的值 <a href="https://github.com/ecomfe/santd/pull/33">#33</a></li>\n</ul>\n</li>\n<li>其它<ul>\n<li>🛠 把 Moment.js 换成 Day.js <a href="https://github.com/ecomfe/santd/pull/38">#38</a></li>\n<li>🛠 组件文件的命名统一为帕斯卡命名法 <a href="https://github.com/ecomfe/santd/pull/37">#37</a></li>\n<li>🌟 使用内部实现用到 s-show 的组件要求 San 版本至少 3.9.3 <a href="https://github.com/ecomfe/santd/pull/29">#29</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="_029"><span>0.2.9</span><a href="#_029" class="anchor">#</a></h2><p><code>2020-10-10</code></p><ul>\n<li>🐞 新增 Avatar支持gap设置字符距离左右两侧边界单位像素</li>\n<li>🐞 新增 collapse支持expandIconPosition设置图标位置</li>\n<li>🐞 新增 list支持locale设置空数据文案</li>\n<li>🐞 新增 Tooltip支持color预设色彩的文字提示样式</li>\n<li>🐞 新增 Timeline支持label设置标签</li>\n<li>🐞 新增 Tag属性<ul>\n<li>closeIcon设置图标</li>\n<li>icon自定义关闭标签</li>\n</ul>\n</li>\n<li>🐞 新增 Notification支持closeIcon自定义关闭图标</li>\n<li>🐞 新增 Steps属性<ul>\n<li>initial支持设置起始序号，从 0 开始记数</li>\n<li>type步骤条支持两种类型（默认和navigate类型）</li>\n<li>subTitle支持每个步骤支持设置子标题</li>\n<li>disabled支持每个步骤支持禁用点击</li>\n</ul>\n</li>\n<li>🐞 新增 Tabs属性<ul>\n<li>centered支持标签居中</li>\n<li>addIcon自定义添加按钮</li>\n<li>closeIcon自定义关闭标签</li>\n<li>keyboard开启键盘切换tab功能   </li>\n</ul>\n</li>\n<li>🐞 新增 Input Search 支持搜索 loading</li>\n<li>🐞 新增 Modal支持closeIcon自定义关闭图标</li>\n<li>🐞 新增 Drawer属性<ul>\n<li>closeIcon自定义关闭标签</li>\n<li>forceRender预渲染drawer里子元素</li>\n<li>drawerStyl、headerStyle设置弹出层、头部样式</li>\n<li>keyboard是否支持键盘关闭</li>\n<li>afterVisibleChange动画结束回调</li>\n<li>footer、footerStyle自定义抽屉页脚及样式</li>\n</ul>\n</li>\n<li>🐞 新增 Table属性<ul>\n<li>position指定分页显示的位置</li>\n<li>locale设置默认文案</li>\n<li>ellipsis列内容超过宽度将自动省略</li>\n<li>checkStrictly设置父子数据选中状态是否关联</li>\n<li>type单选/多选设置</li>\n<li>rowExpandable点击展开图标时触发事件</li>\n</ul>\n</li>\n<li>🐞 新增 Layout属性<ul>\n<li>Layout 的 class，支持布局容器 class</li>\n<li>Layout.Sider 的 class，支持侧边栏自定义 class</li>\n<li>Layout.Sider 的 zeroWidthTriggerStyle支持设置侧边栏特殊 trigger 的样式</li>\n</ul>\n</li>\n<li>🐞 新增 PageHeader属性<ul>\n<li>avatar标题栏旁的头像</li>\n<li>backIcon自定义 back icon ，如果为 false 不渲染 back icon</li>\n</ul>\n</li>\n<li>🐞 新增 Anchor属性<ul>\n<li>wrapperClass支持容器类名设置</li>\n<li>wrapperStyle支持容器样式设置</li>\n<li>getCurrentAnchor支持自定义高亮的锚点</li>\n<li>targetOffset支持锚点滚动偏移量的设置</li>\n<li>target支持点击时在何处显示链接的资源</li>\n</ul>\n</li>\n<li>🐞 新增 AutoComplete属性<ul>\n<li>dropdownMenuStyle支持 dropdown 菜单自定义样式</li>\n<li>defaultActiveFirstOption是否默认高亮第一个选项</li>\n<li>blur、focus焦点管理（移除与获取）</li>\n</ul>\n</li>\n<li>🐞 新增 Cascader属性<ul>\n<li>popupClassName自定义浮层类名</li>\n<li>popupStyle自定义浮层样式</li>\n<li>popupPlacement浮层预设位置</li>\n<li>search输入框变化时的回调</li>\n</ul>\n</li>\n<li>🐞 新增 InputNumber支持pressEnter按下回车的回调</li>\n<li>🐞 新增 Slider属性<ul>\n<li>autoFocus自动获取焦点</li>\n<li>reverse反向坐标轴</li>\n<li>tooltipPlacement支持设置 Tooltip 展示位置</li>\n<li>getTooltipPopupContainer设置 Tooltip 渲染到某个 dom 节点</li>\n</ul>\n</li>\n<li>🐞 新增 TimePicker 支持autoFocus自动获取焦点</li>\n<li>🐞 新增 Transfer属性<ul>\n<li>locale支持默认文案</li>\n<li>itemSelectRender Props 支持勾选条目</li>\n<li>itemSelectAll Render Props 勾选一组条目</li>\n</ul>\n</li>\n<li>新增TreeSelect属性<ul>\n<li>treeIcon支持对 TreeNode title 前的图标的展示控制</li>\n<li>treeCheckStrictly 支持checkable 状态下节点选择完全受控</li>\n<li>replaceFields 换 treeNode 中 title,value,key,children,label 字段为 treeData 中对应的字段</li>\n<li>treeNodeLabelProp 作为显示的 prop 设置</li>\n</ul>\n</li>\n</ul>\n<h2 id="_028"><span>0.2.8</span><a href="#_028" class="anchor">#</a></h2><p><code>2020-06-30</code></p><ul>\n<li>🐞 修复 <code>Tree-select</code> 组件中可勾选功能删除无效问题</li>\n</ul>\n<h2 id="_027"><span>0.2.7</span><a href="#_027" class="anchor">#</a></h2><p><code>2020-05-21</code></p><ul>\n<li>🐞 修复 <code>Spin</code> 组件中 spin-text 丢失问题</li>\n</ul>\n<h2 id="_026"><span>0.2.6</span><a href="#_026" class="anchor">#</a></h2><p><code>2020-05-15</code></p><ul>\n<li>🐞 修复 <code>Table</code> 组件中 <code>scopedSlots</code> 在有 <code>render</code> 属性时不生效的问题</li>\n</ul>\n<h2 id="_025"><span>0.2.5</span><a href="#_025" class="anchor">#</a></h2><p><code>2020-04-30</code></p><ul>\n<li>🐞 修复 <code>Pagination</code> 组件中点击样式问题</li>\n<li>🐞 修复 <code>List</code> 组件中slot renderItem没有对外暴露index问题</li>\n</ul>\n<h2 id="_023"><span>0.2.3</span><a href="#_023" class="anchor">#</a></h2><p><code>2020-01-09</code></p><ul>\n<li>🐞 修复 <code>Collapse</code> 组件中on-change没有被触发的问题</li>\n</ul>\n<h2 id="_022"><span>0.2.2</span><a href="#_022" class="anchor">#</a></h2><p><code>2020-01-08</code></p><ul>\n<li>🐞 修复 <code>Table</code> 组件中dropdown位置不正确的问题</li>\n<li>🐞 修复 <code>Icon</code> 组件 <code>@ant-design/icons</code> 升级后无法使用问题</li>\n</ul>\n<h2 id="_021"><span>0.2.1</span><a href="#_021" class="anchor">#</a></h2><p><code>2019-12-20</code></p><ul>\n<li>🐞 修复 <code>Button</code> 组件存在 <code>shape</code> 属性时slot无效问题</li>\n<li>🐞 修复 <code>Button</code> 组件 <code>shape</code> 为 <code>round</code> 时样式无效问题</li>\n<li>🐞 修复 <code>Dropdown</code> 组件中 <code>menu</code> 默认点击不关闭问题</li>\n<li>🐞 修复 <code>Dropdown</code> 组件中 <code>menu</code> 位置不正确问题</li>\n<li>🐞 使用 <code>@ant-design/icons</code> 替换本地 <code>icons</code></li>\n</ul>\n<h2 id="_020"><span>0.2.0</span><a href="#_020" class="anchor">#</a></h2><p><code>2019-12-10</code></p><h4 id="features"><span>Features</span><a href="#features" class="anchor">#</a></h4><p>对外第一个版本，提供 61 个常用<a href="https://github.com/ecomfe/santd/blob/master/src/index.js">组件</a></p>'}}]);