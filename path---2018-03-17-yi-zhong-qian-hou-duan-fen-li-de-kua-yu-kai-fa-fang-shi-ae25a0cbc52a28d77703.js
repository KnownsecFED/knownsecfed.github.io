webpackJsonp([85861506740977],{588:function(e,a){e.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-509052d3640b64511a13f356d08df049-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHttSyon//EABgQAQEAAwAAAAAAAAAAAAAAAAEAEBEx/9oACAEBAAEFAlbbHM//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAEBAQAAAAAAAAAAAAAAAAAxACD/2gAIAQEABj8CIz//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEhIHH/2gAIAQEAAT8hCtRv6iXRTx//2gAMAwEAAgADAAAAEMsP/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARUf/aAAgBAwEBPxCjF//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/EKf/xAAbEAEBAAEFAAAAAAAAAAAAAAABEQAgITFBUf/aAAgBAQABPxCMCDDBAcGFjsYQbHXmj//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="深入研究一种方便的跨域开发解决方案"\n        title=""\n        src="/static/header-509052d3640b64511a13f356d08df049-d6978.jpeg"\n        srcset="/static/header-509052d3640b64511a13f356d08df049-527f0.jpeg 300w,\n/static/header-509052d3640b64511a13f356d08df049-9a7cd.jpeg 600w,\n/static/header-509052d3640b64511a13f356d08df049-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>现在越来越多的 Web 项目都采取前后端分离的开发方式，也就是在开发过程中前端工程运行在一个 node server 上，同时提供 REST API 的后端工程作为独立的服务运行在另一个 server 上，这样前后端通过 HTTP 请求进行通信的时候就会遇到跨域的问题，跨域是怎么一回事大家应该都了解，这里就不再赘述。以往解决跨域问题比较常用的方法就是给服务端配置 CORS，但是这种方式会带来一些不便：</p>\n<ol>\n<li>要修改后端代码，如果后端项目运行在自己机器上还好，如果是运行在别的服务器上，甚至是其他团队在维护，那么修改一段代码就会比较麻烦，并且还要确保这些代码不会被发布到生产环境中去。</li>\n<li>每次启动浏览器的时候要输入一长串代码来关闭浏览器的安全策略，比如 Chrome 浏览器的命令如下：\n<code>open -a /Applications/Google\\ Chrome.app --args --disable-web-security --user-data-dir</code>\n不仅麻烦，万一一不小心在这种模式下访问了一些敏感的数据，还会带来安全隐患。</li>\n<li>开发模式下前端调接口要带上测试后端服务器的 URL，因此发布到生产环境之前还要把它去掉。</li>\n</ol>\n<p>总之就是比较麻烦，体会不到那种脱了裤子就上，完事提上裤子就走的爽快感，我说的是上厕所。所以今天就是要介绍一种更加简单安全的解决方案，同时我们会深入去了解其中的原理是什么。</p>\n<p>首先，用 <a href="https://github.com/facebook/create-react-app">create-react-app</a> 创建一个前端项目，假如你的前端项目运行的地址是 <code>http://localhost:3000</code>，与此同时提供 API 的后端项目运行的地址是 <code>http://localhost:4000</code>，你要做的只是在前端工程的 package.json 文件中添加这样一行配置：</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token property">"proxy"</span><span class="token operator">:</span> <span class="token string">"http://localhost:4000"</span>\n</code></pre>\n      </div>\n<p>然后你就会神奇地发现，从前端页面发出的 HTTP 请求，虽然访问的依然是 3000 端口，但是会被自动转发到 4000 端口的后端服务器并得到正确的响应，于此同时访问页面的请求却不会被转发，依然能够被前端路由捕获，这样我们就完全不需要再考虑如何处理跨域的问题了。问题是解决了，但是又出现了 2 个问题萦绕在我的心中：</p>\n<ol>\n<li>package.json 中的 <code>proxy</code> 参数是作用在什么地方的？</li>\n<li>是怎么样做到把访问页面的请求和访问 REST API 的请求区分开的？</li>\n</ol>\n<p>带着这样的疑问我们一起去看看 <strong>create-react-app</strong> 的源码是怎样写的，首先在前端项目中的 package.json 里我们能看到，项目启动执行的脚本是 <code>react-script start</code>，所以我们打开文件 <a href="https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/scripts/start.js?1521341168780">create-react-app/packages/react-scripts/scripts/start.js</a>（为何直接能定位到这个文件，以及 react-script 这个命令是如何注册的，属于其他知识点，本文不展开说明，有疑问的童鞋可以去<a href="https://docs.npmjs.com/files/package.json#bin">这里</a> 学习一个），我们看到有以下代码：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// Load proxy config</span>\n<span class="token keyword">const</span> proxySetting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>paths<span class="token punctuation">.</span>appPackageJson<span class="token punctuation">)</span><span class="token punctuation">.</span>proxy<span class="token punctuation">;</span>\n<span class="token keyword">const</span> proxyConfig <span class="token operator">=</span> <span class="token function">prepareProxy</span><span class="token punctuation">(</span>proxySetting<span class="token punctuation">,</span> paths<span class="token punctuation">.</span>appPublic<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Serve webpack assets generated by the compiler over a web sever.</span>\n<span class="token keyword">const</span> serverConfig <span class="token operator">=</span> <span class="token function">createDevServerConfig</span><span class="token punctuation">(</span>\n    proxyConfig<span class="token punctuation">,</span>\n    urls<span class="token punctuation">.</span>lanUrlForConfig\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> devServer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebpackDevServer</span><span class="token punctuation">(</span>compiler<span class="token punctuation">,</span> serverConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>此处的 <code>paths.appPackageJson</code> 的声明在 <a href="https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/config/paths.js?1521342791455">create-react-app/packages/react-scripts/config/paths.js</a> 中：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  appPackageJson<span class="token punctuation">:</span> <span class="token function">resolveApp</span><span class="token punctuation">(</span><span class="token string">\'package.json\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>因此我们就知道，这里的 <code>proxySetting</code> 就是我们之前在前端工程的 package.json 中定义的 <code>proxy</code> 的值，然后我们看到，<code>proxySetting</code> 被用来生成了 <code>serverConfig</code>，最终 <code>serverConfig</code> 作为配置参数创建了 <code>WebpackDevServer</code> 实例。<a href="https://github.com/webpack/webpack-dev-server">webpack-dev-server</a> 是一个用于启动 webpack 的测试服务器，并且提供了诸如 HMR 等方便开发的功能，因此我们就得出第一个结论：<strong>前端工程的 package.json 中定义的 <code>proxy</code> 值，是作用于 WebpackDevServer，最终通过 WebpackDevServer 进行的转发</strong>。</p>\n<p>让我们继续试图解答第二个问题——是怎么样做到把访问页面的请求和访问 REST API 的请求区分开的？我们看到 <code>proxySetting</code> 首先是被传入 <code>prepareProxy</code> 方法得到 <code>proxyConfig</code>，然后在 <code>createDevServerConfig</code> 方法中返回了一个对象，并且对象的 <code>proxy</code> 字段的值为 <code>proxyConfig</code>，最终该对象就是 webpack-dev-server 的配置项，在 <a href="https://webpack.js.org/configuration/dev-server/#devserver-proxy">webpack-dev-server 文档</a> 中可以看到 proxy 的作用就是做一层代理，把从页面来的请求转发到另一个地址，因此关键就在于 <code>proxyConfig</code> 的配置是怎么样的，于是目光转移到 <code>prepareProxy</code> 方法，<code>prepareProxy</code> 方法的定义在 <a href="https://github.com/facebook/create-react-app/blob/next/packages/react-dev-utils/WebpackDevServerUtils.js?1521357351270#L266">create-react-app/packages/react-dev-utils/WebpackDevServerUtils.js</a> 中，在这里我们可以看到首先是对 <code>proxy</code> 进行了类型和格式的检测，然后如果 <code>proxy</code> 是一个格式正确的字符串，就返回一个只有一个对象元素的数组，在这个对象中的 <code>context</code> 字段中出现了如下的判断：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>context<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>pathname<span class="token punctuation">,</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        req<span class="token punctuation">.</span>method <span class="token operator">!==</span> <span class="token string">\'GET\'</span> <span class="token operator">||</span>\n        <span class="token punctuation">(</span><span class="token function">mayProxy</span><span class="token punctuation">(</span>pathname<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n         req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>accept <span class="token operator">&amp;&amp;</span>\n         req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>accept<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'text/html\'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>在这里我们看到有对 <code>req.headers.accept</code> 进行判断，<code>req.headers.accept</code> 用于表示浏览器通过这次 HTTP 请求希望获取到的内容类型，因此如果 accept 中带有 <code>text/html</code> 则说明本次请求获取的是一个 document，因此就不应该被转发到后端，这一堆判断逻辑用一幅图表示出来如下：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/liucheng-162f7b94cff68caa9890b178993c8ba8-84186.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1065px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 33.990610328638496%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB3oAH/8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABBQJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAQABPyHYj//aAAwDAQACAAMAAAAQg8//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAACAgMAAAAAAAAAAAAAAAABEQAxQVFh/9oACAEBAAE/EE2IyLIb7GIN3uf/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="52137908279"\n        title=""\n        src="/static/liucheng-162f7b94cff68caa9890b178993c8ba8-84186.jpeg"\n        srcset="/static/liucheng-162f7b94cff68caa9890b178993c8ba8-c4f59.jpeg 300w,\n/static/liucheng-162f7b94cff68caa9890b178993c8ba8-2a931.jpeg 600w,\n/static/liucheng-162f7b94cff68caa9890b178993c8ba8-84186.jpeg 1065w"\n        sizes="(max-width: 1065px) 100vw, 1065px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>在这里 context 的含义在 webpack-dev-server 文档中是找不到的，它的说明出现在 <a href=""><strong>http-proxy-middleware</strong></a> 中，context 支持传入一个 function 用于自定义转发的逻辑，只在返回值为 true 时才转发请求，<strong>因此该代理将只会转发 ajax 或者 fetch 发出的 HTTP 请求 。</strong></p>\n<p>除了文中提到的这种最简单的配置，webpack-dev-server 的 proxy 还支持多种配置方式以同时满足多种代理规则，感兴趣的同学可以去文档里面了解更多细节。</p>',fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案",date:"2018-03-17",catalog:"前端",author:"Tony段"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【翻译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【翻译】让我们从零开始变编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【翻译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"}}}});
//# sourceMappingURL=path---2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi-ae25a0cbc52a28d77703.js.map