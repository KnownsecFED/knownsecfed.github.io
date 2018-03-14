webpackJsonp([39640496791730],{547:function(n,a){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-7bb518397e954c9cbae89c3a0f56dbb6-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB11tDMY4V/8QAGRABAAIDAAAAAAAAAAAAAAAAAgESABAR/9oACAEBAAEFAlLtZ4eyd//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AYf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGn/8QAGRAAAgMBAAAAAAAAAAAAAAAAACEBIDGh/9oACAEBAAY/AlCM4Paf/8QAGBABAAMBAAAAAAAAAAAAAAAAAQAQEWH/2gAIAQEAAT8hEjicp0BOWZ//2gAMAwEAAgADAAAAEDQP/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERUf/aAAgBAwEBPxC2of/EABURAQEAAAAAAAAAAAAAAAAAABBx/9oACAECAQE/EIP/xAAcEAEAAwACAwAAAAAAAAAAAAABABEhEDFx0fD/2gAIAQEAAT8QtRANLeeZ9l7gjENK62HRwaZ//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="translate-Crooked-Style-Sheets"\n        title=""\n        src="/static/header-7bb518397e954c9cbae89c3a0f56dbb6-d6978.jpeg"\n        srcset="/static/header-7bb518397e954c9cbae89c3a0f56dbb6-527f0.jpeg 300w,\n/static/header-7bb518397e954c9cbae89c3a0f56dbb6-9a7cd.jpeg 600w,\n/static/header-7bb518397e954c9cbae89c3a0f56dbb6-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>原文地址：<a href="https://github.com/jbtronics/CrookedStyleSheets">Crooked Style Sheets</a></p>\n<p>作者：jbtronics</p>\n<blockquote>\n<p>除了使用 JS 追踪用户，现在有人提出了还可以使用 <code>CSS 进行网页追踪和分析</code>，译者认为，这种方式更为 <code>优雅</code>，更为 <code>简洁</code>，且 <code>不好屏蔽</code>，值得尝试一波，了解更多，可查看 <a href="https://github.com/jbtronics/CrookedStyleSheets">仓库地址</a> 和 <a href="http://crookedss.bplaced.net/">demo</a>。</p>\n</blockquote>\n<h2>我们可以用它来做什么</h2>\n<p>我们可以收集关于用户的一些基本信息，例如 <code>屏幕分辨率</code>（当浏览器最大化时）以及用户使用的什么<code>浏览器</code>（引擎）。</p>\n<p>此外，我们可以监测用户是否点击某个链接或鼠标悬停在某个元素上，用来 <code>追踪用户悬停的链接</code>，甚至可以 <code>追踪用户如何移动鼠标</code>（在页面使用不可见的字段），然而，使用目前我的方法只能追踪用户的第一次点击或悬停，我相信，修改我的方法最终可以实现追踪用户的每次点击。</p>\n<p>最后，我们还可以监测用户是否安装了某个特殊的字体，基于这个信息，我们可以追踪用户使用的 <code>操作系统</code>，因为不同操作系统使用的字体也稍有不同，例如 <code>Windows</code> 的 <code>Calibri</code>。</p>\n<h2>这又是如何实现的</h2>\n<h3>普通的做法</h3>\n<p>用 <code>CSS</code> 你可以使用 <code>url("foo.bar")</code> 属性引用外部资源添加图像，有趣的是，这个资源只在需要的时候被加载（例如，当链接被点击时）。</p>\n<p>所以，我们可以用 <code>CSS</code> 创建一个选择器，当用户点击某个链接时调用某个特定的 <code>UPL</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#link2:active::after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?action=link2_clicked\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>服务端，<code>php</code> 脚本会在调用 <code>URL</code> 时保存时间戳。</p>\n<h3>浏览器监测</h3>\n<p><code>浏览器监</code> 测是基于 <code>@supports Media-Query</code> 的，我们可以监测浏览器的一些特殊的属性，例如 <code>-webkit-appearance</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token atrule"><span class="token rule">@supports</span> <span class="token punctuation">(</span><span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">#chrome_detect::after</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?action=browser_chrome\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>字体监测</h3>\n<p>对于 <code>字体监测</code>，需要定义一个新的字体，如果一个字体存在，文本会尝试使用该字体进行样式设置，然而，当用户在系统上找不到该字体时，定义的字体会作为备用，在这种情况下，浏览器会尝试去加载定义的字体并在服务器上调用追踪脚本。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/** Font detection **/</span>\n<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> Font1<span class="token punctuation">;</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?action=font1\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">#font_detection1</span> <span class="token punctuation">{</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> Calibri, Font1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>悬停监测</h3>\n<p>对于 <code>悬停监测</code>（基于 <a href="https://github.com/jeyroik">jeyroik</a> 的想法），我们需定义一个关键帧，每次使用这个关键帧都要去请求一个 URL。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> pulsate</span> <span class="token punctuation">{</span>\n  <span class="token selector">0%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=00\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">20%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=20\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">40%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=40\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">60%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=60\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">80%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=80\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">100%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=100\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>然后，我们使用定义的关键帧创建动画，我们可以定义动画持续的时间，这也是我们测量的最大时间。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#duration:hover::after</span> <span class="token punctuation">{</span>\n  <span class="token property">-moz-animation</span><span class="token punctuation">:</span> pulsate 5s infinite<span class="token punctuation">;</span>\n  <span class="token property">-webkit-animation</span><span class="token punctuation">:</span> pulsate 5s infinite<span class="token punctuation">;</span>\n  <span class="token comment">/*animation: pulsate 5s infinite;*/</span>\n  <span class="token property">animation-name</span><span class="token punctuation">:</span> pulsate<span class="token punctuation">;</span>\n  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 10s<span class="token punctuation">;</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=-1\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>我们可以通过补充关键帧的设置，来优化分辨率的监测。</p>\n<h3>输入监测</h3>\n<p>监测用户选中了某个复选框，我们可以使用 <code>CSS</code> 提供的 <code>:selected</code> 选择器。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#checkbox:checked</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?action=checkbox\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>为了监测字符串，我们结合了 HTML <code>pattern</code> 属性，它可以帮助我们解决一些基本的输入验证，再结合 <code>:valid</code> 选择器，浏览器当输入匹配成功时会去请求我们的追踪站点。</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text_input<span class="token punctuation">"</span></span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>^test$<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#text_input:valid</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?action=text_input\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Demo</h2>\n<p>点击 <a href="http://crookedss.bplaced.net/">这里</a> 你可以查看该仓库的一个 demo。<code>index.html</code> 实践了的上述的方法，访问 <code>results.php</code> 可以查看结果。</p>\n<p>如果属性后面没有任何 <code>content</code> 或有 <code>php 警告</code> 出现，这就意味着这个属性的值为 <code>false</code> 或用户还没访问页面或链接（这个，确实很烦，但你可以知道这些方法的原理）。</p>\n<p>此外，分辨率监测还不是特别的准确，因为目前只能监测最常用的屏幕宽度。最后还想说的是，监测用户实际屏幕的宽度并没有想象中的那么简单，因为 <code>CSS</code> 监测的高度为浏览器窗口的高度，而通常由于系统面板 / 任务栏的原因，使得浏览器窗口要小于显示器。</p>\n<h2>有什么办法可以防止使用上面的方法进行追踪</h2>\n<p>目前我知道的唯一办法就是 <code>完全禁用 CSS</code>（你可以使用像 <a href="https://github.com/gorhill/uMatrix">uMatrix</a> 的插件来实现），但它的代价也是十分巨大的，没有 CSS，网页就没有之前那么赏心悦目了，甚至导致无法正常使用，所以，<code>禁用 CSS 算不上一个真正的选择</code>，除非，你实在担心你的隐私（例如，当你在使用 Tor 浏览器，也许你应该禁用 CSS）。</p>\n<p>一个更好的解决方案是，<code>在网页加载时，浏览器不会去加载需要的外部资源</code>，这样，就不可能监测到用户的个人行为，这种对内容加载的修改可以通过浏览器来实现，也可以通过插件来实现（类似 <a href="https://noscript.net/">NoScript</a> 或 uMatrix）。</p>\n<p>上述方法也存在一个明显的问题，那就是 <code>对性能会造成一定的影响，</code>因为浏览器会在初始化页面时加载大量的内容（有些内容是页面根本不需要的）。</p>',fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户",date:"2018-01-19",catalog:"前端",author:"枫上雾棋"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"}}}});
//# sourceMappingURL=path---2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu-88244ffdd9b06f1248d0.js.map