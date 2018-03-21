webpackJsonp([0xe3c02b63e7eb],{589:function(n,a){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-cb4c748214e2be4c15303f5123db0749-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABxRVcICv/xAAZEAADAAMAAAAAAAAAAAAAAAAAAQIQESH/2gAIAQEAAQUC4Up0PP8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEhIP/aAAgBAQAGPwKkef/EABoQAQABBQAAAAAAAAAAAAAAAAEhABEgMXH/2gAIAQEAAT8hJSsVsleYv//aAAwDAQACAAMAAAAQS8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAWEQEBAQAAAAAAAAAAAAAAAAARECH/2gAIAQIBAT8QNZ//xAAcEAACAQUBAAAAAAAAAAAAAAABERAAMUFRkfD/2gAIAQEAAT8QYptoDoQDlot6/OZj/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="如何使你的 Node 应用免于崩溃"\n        title=""\n        src="/static/header-cb4c748214e2be4c15303f5123db0749-d6978.jpeg"\n        srcset="/static/header-cb4c748214e2be4c15303f5123db0749-527f0.jpeg 300w,\n/static/header-cb4c748214e2be4c15303f5123db0749-9a7cd.jpeg 600w,\n/static/header-cb4c748214e2be4c15303f5123db0749-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>原文地址：<a href="https://medium.com/dailyjs/how-to-prevent-your-node-js-process-from-crashing-5d40247b8ab2">How to prevent your Node.js process from crashing</a></li>\n<li>原文作者：Alberto Gimeno</li>\n</ul>\n<p>通过对一些 Node.js 开发者的采访，我发现没有人能够正确的回答出这两个问题：</p>\n<ul>\n<li>在 Node.js 中，不处理 rejected promise 会发生什么?</li>\n<li>不处理  stream 中的错误会发生什么?</li>\n</ul>\n<h3>在 Node.js 中，不处理 rejected promise 会发生什么 ?</h3>\n<p>在最新版本的 Node.js（8.x，9.x以及可能更早的版本）中，您会得到这样的一些警告：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token punctuation">(</span>node<span class="token punctuation">:</span><span class="token number">48446</span><span class="token punctuation">)</span> UnhandledPromiseRejectionWarning<span class="token punctuation">:</span> This is <span class="token function">fine</span>\n<span class="token punctuation">(</span>node<span class="token punctuation">:</span><span class="token number">48446</span><span class="token punctuation">)</span> UnhandledPromiseRejectionWarning<span class="token punctuation">:</span> Unhandled promise rejection<span class="token punctuation">.</span> This error originated either by throwing inside <span class="token keyword">of</span> an <span class="token keyword">async</span> <span class="token keyword">function</span> without a <span class="token keyword">catch</span> block<span class="token punctuation">,</span> or by rejecting a promise which was not handled <span class="token keyword">with</span> <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token punctuation">(</span>rejection id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token punctuation">(</span>node<span class="token punctuation">:</span><span class="token number">48446</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>DEP0018<span class="token punctuation">]</span> DeprecationWarning<span class="token punctuation">:</span> Unhandled promise rejections are deprecated<span class="token punctuation">.</span> In the future<span class="token punctuation">,</span> promise rejections that are not handled will terminate the Node<span class="token punctuation">.</span>js process <span class="token keyword">with</span> a non<span class="token operator">-</span>zero exit code<span class="token punctuation">.</span>\n</code></pre>\n      </div>\n<p>该进程不会崩溃，但在未来的 Node.js 版本中，可能会发生崩溃。应该如何处理 rejected promise 呢?可以监听进程的 unhandledRejection 事件。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'unhandledRejection\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>reason<span class="token punctuation">,</span> promise<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Unhandled Rejection at:\'</span><span class="token punctuation">,</span> reason<span class="token punctuation">.</span>stack <span class="token operator">||</span> reason<span class="token punctuation">)</span>\n  <span class="token comment">// Recommended: send the information to sentry.io</span>\n  <span class="token comment">// or whatever crash reporting service you use</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>对于 rejected 状态的错误，例如：<code>Promise.reject(new Error(\'This is fine\'))</code> ，将会打印出堆栈信息，同时也可以监听进程的警告事件，获取到更多的错误相关信息。</p>\n<h3>不处理  stream 中的错误会发生什么?</h3>\n<p>创建应用程序：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> stream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">\'does-not-exist.txt\'</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>以上代码将会异常退出并打印出：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>events<span class="token punctuation">.</span>js<span class="token punctuation">:</span><span class="token number">137</span>\n      <span class="token keyword">throw</span> er<span class="token punctuation">;</span> <span class="token comment">// Unhandled \'error\' event</span>\n      <span class="token operator">^</span>\nError<span class="token punctuation">:</span> ENOENT<span class="token punctuation">:</span> no such file or directory<span class="token punctuation">,</span> open <span class="token string">\'do-not-exists.txt\'</span>\n</code></pre>\n      </div>\n<p>用户正在上传文件，服务器端应用程序使用 stream 处理文件，用户上传的文件可能非常大，因为某些原因用户中止上传，stream 被意外关闭，服务器端 Node.js 进程会立即崩溃，同时会影响到其它用户使用。所以，不要忘记处理所有 stream 中的错误事件！</p>\n<h3>补充：JSON.parse()</h3>\n<p>JSON.parse() 中，如果传入的字符串不是有效的JSON，将会抛出一个错误。可以使用 try-catch 把它包裹起来。这同样适用于 Node.js API 中的任何 * Sync() 方法。否则下面的代码会让你的进程崩溃：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>app<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'/foo\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> foo <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>jsonString<span class="token punctuation">)</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h3>总结</h3>\n<ul>\n<li>监听未处理的 rejected 事件，获取堆栈信息，可以有效防止 Node.js 进程退出；</li>\n<li>始终捕获并处理 stream 的异常错误；</li>\n<li>将 JSON.parse()和任何 * Sync() 函数包装在 try-catch 块中。</li>\n</ul>',fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃",date:"2018-03-17",catalog:"NodeJS",author:"ielapp"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【翻译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【翻译】让我们从零开始变编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【翻译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"}}}});
//# sourceMappingURL=path---2018-03-18-fan-yi-how-to-prevent-your-node-js-process-from-crashing-4df30f398c164cdb2e32.js.map