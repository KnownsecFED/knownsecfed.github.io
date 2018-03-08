webpackJsonp([0x74a71fef67f9],{551:function(e,n){e.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-01-21-how-django-works/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-63b7fa87b39277540d34e41be34ff4fb-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAABnyAZsFkf/8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIDABD/2gAIAQEAAQUCWUzMQQ6gCt3/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAeEAAABAcAAAAAAAAAAAAAAAAAAQIhAxESIDEyQf/aAAgBAQAGPwLZ+mGiYEknVZ//xAAaEAACAwEBAAAAAAAAAAAAAAABIQARMRDw/9oACAEBAAE/IRskQjM85Zto6EXireWQgd3n/9oADAMBAAIAAwAAABBHL//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEAAwACAgMAAAAAAAAAAAABESExABBRYXGBof/aAAgBAQABPxBtsUgLxUTuL3jVWiwYgmdz94LHCURT4qvf31sAUA789f/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Header"\n        title=""\n        src="/static/header-63b7fa87b39277540d34e41be34ff4fb-d6978.jpeg"\n        srcset="/static/header-63b7fa87b39277540d34e41be34ff4fb-527f0.jpeg 300w,\n/static/header-63b7fa87b39277540d34e41be34ff4fb-9a7cd.jpeg 600w,\n/static/header-63b7fa87b39277540d34e41be34ff4fb-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>最近面试的时候，被面试官问道一个问题，就是 request.user 里面的 user 是怎样得到的，这个问题当时没有回答上来，可以说是非常的尴尬，所以赶快查了一些资料，看了一些源码，特地来总结一下这个问题。</p>\n<p>要想回答为什么可以直接通过 request.user 得到请求的用户，应该先来看看请求被处理以及如何返回响应的流程。今天先总结一下 django 从请求到响应都进行了哪些过程。</p>\n<h2>WSGI</h2>\n<p>当客户端发送一次请求后，最先处理请求的实际上是 web 服务器就是我们经常说的 nginx、Apache 这类的 web 服务器，而 WSGI 的作用就是把 web 服务器和 web 框架 (Django) 连接起来。WSGI 被分为了两个部分：服务端和应用端。为了处理一个 WSGI 的响应，服务端执行应用程序并向应用端提供一个回调函数，应用端处理请求并使用提供的回调将响应返回给服务端。本质上来讲，我觉得 WSGI 就是 web 服务器和 django 应用之间的一个联系人。</p>\n<h2>数据流</h2>\n<p>当用户向你的应用发送一个请求的时候，一个 WSGI handler 将会被初始化，它会完成以下工作：</p>\n<ol>\n<li>导入 settings.py 和 django 的异常类</li>\n<li>使用 load<em>middleware 方法加载 settings.py 中 MIDDLEWARE</em>CLASSES 或者 MIDDLEWARES 元组中所用的 middleware classes.</li>\n<li>创建四个列表 (<em>request</em>middleware,<em>view</em>middleware, <em>response</em>middleware, <em>exception</em>middleware)，里面分别包含处理 request,view,response 和 exception 的方法。</li>\n<li>WSGI Handler 将实例化一个 django.http.HTTPRequest 对象的子类，django.core.handlers.wsgi.WSGIRequest.</li>\n<li>循环遍历处理 request 的方法 (<em>request</em>middleware 列表），并按照顺序调用他们</li>\n<li>解析请求的 url</li>\n<li>循环遍历每个处理 view 的方法 (<em>view</em>middleware 列表）</li>\n<li>如果找的到的话，就调用视图函数</li>\n<li>处理任何异常的方法 (<em>exception</em>middleware 列表）</li>\n<li>循环遍历每个处理响应的方法 (<em>response</em>middleware 列表），（从内向外，与请求中间件的顺序相反）</li>\n<li>最后得到一个响应，并调用 web server 提供的回调函数</li>\n</ol>\n<h2>中间件</h2>\n<p>中间件被用在了 django 的许多关键功能中：例如，使用 CSRF 中间键来防止跨站请求伪造攻击。它们也被用来处理会话数据，身份认证和授权同样是由中间件来完成的。我们也可以自己编写中间件来调整或者（短路）通过应用程序的数据流。</p>\n<p>django 的中间件至少含有以下四个方法中的一个：process<em>request, process</em>response, process<em>view, process</em>exception。这些方法会被 WSGI handler 收集并按照顺序调用。</p>\n<h3>process_request</h3>\n<p>我们可以先来看看 django.contrib.auth.middleware.AuthenticationMiddleware:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_user</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> <span class="token operator">not</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">\'_cached_user\'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        request<span class="token punctuation">.</span>_cached_user <span class="token operator">=</span> auth<span class="token punctuation">.</span>get_user<span class="token punctuation">(</span>request<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> request<span class="token punctuation">.</span>_cached_user\n\n<span class="token keyword">class</span> <span class="token class-name">AuthenticationMiddleware</span><span class="token punctuation">(</span>MiddlewareMixin<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">def</span> <span class="token function">process_request</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">assert</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">\'session\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>\n              <span class="token string">"The Django authentication middleware requires session middleware "</span>\n              <span class="token string">"to be installed. Edit your MIDDLEWARE%s setting to insert "</span>\n              <span class="token string">"\'django.contrib.sessions.middleware.SessionMiddleware\' before "</span>\n              <span class="token string">"\'django.contrib.auth.middleware.AuthenticationMiddleware\'."</span>\n        <span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">"_CLASSES"</span> <span class="token keyword">if</span> settings<span class="token punctuation">.</span>MIDDLEWARE <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">else</span> <span class="token string">""</span><span class="token punctuation">)</span>\n        request<span class="token punctuation">.</span>user <span class="token operator">=</span> SimpleLazyObject<span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> get_user<span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>这里我们可以发现 request.user 这个属性是在 AuthenticationMiddleware 中产生的。这个我们稍后再说。</p>\n<p>这里我们可以发现，这个中间件只有 process<em>request，说明它只在 request 这一步处理流入和流出 django 应用的数据流。这个中间件会首先验证会话中间件是否被使用，然后通过调用 get</em>user 函数来设置用户。当 WSGI 处理程序迭代 process<em>request 方法列表的时候，它将会构建这个最终会被传递给视图函数的请求对象，并能够使你引用 request.user。一些中间件没有 process</em>request 方法，在这个阶段，会被跳过。</p>\n<p>process<em>request 应该返回 None 或者 HTTPResponse 对象。当返回 None 时，WSGI handler 会继续加载 process</em>request 里面的方法，但是后一种情况会短路处理过程并进入 process_response 循环。</p>\n<h3>解析 url</h3>\n<p>当所有的 process<em>request 被调用完之后，我们就会得到一个将被传递给视图函数的 request 对象。当这个事件发生之前，django 必须解析 url 并决定调用哪一个视图函数。这个过程非常简单，只需要使用正则匹配即可。settings.py 中有一个 ROOT</em>URLCONF 键来指定根 url.py，在这里会包含你所有 app 的 urls.py 文件。如果没有匹配成功，将会抛出一个异常 django.core.urlresolvers.Resolver404, 这是 django.http.HTTP404 的子类。</p>\n<h3>process_view</h3>\n<p>到这一步之后 WSGI handler 知道了调用哪一个视图函数，以及传递哪些参数。它会再一次调用中间件列表里面的方法，这次是<em>view</em>middleware 列表。所有 Django 中间件的 process_view 方法将会被这样声明：</p>\n<p><code>process_view(request, view_function, view_args, view_kwargs)</code></p>\n<p>和 process<em>request 一样，process</em>view 函数必须返回 None 或者 HTTPResponse 对象，使得 WSGI handler 继续处理视图或者’短路’处理流程并返回一个响应。在 CSRF middleware 中存在一个 process<em>view 的方法。作用是当 CSRF cookies 出现时，process</em>view 方法将会返回 None, 视图函数将会继续的执行。如果不是这样，请求将会被拒绝，处理流程将会被’短路’，会生成一个错误的信息。</p>\n<h3>进入视图函数</h3>\n<p>一个视图函数需要满足三个条件：</p>\n<ul>\n<li>必须是可以调用的。这可以是基于函数的视图或者是 class-based 的视图（继承自 View 并且使用 as_view() 方法来使它成为可调用的。这些方法的调用依赖 HTTP verb(GET, POST, etc))</li>\n<li>必须接受一个 HTTPRequest 对象作为第一个位置参数。这个 HTTPRequest 对象是被所有 process<em>request 和 process</em>view 中间件方法处理的结果。</li>\n<li>必须返回一个 HTTPResponse 对象，或者抛出一个异常。就是用这个 response 对象来开启 WSGI handler 的 process_view 循环。</li>\n</ul>\n<h3>process_exception</h3>\n<p>如果视图函数抛出一个异常，Handler 将会循环遍历<em>exception</em>middleware 列表，这些方法按照相反的顺序执行，从 settings.py 里面列出来的最后一个中间件到第一个。如果一个异常被抛出，处理过程将会被短路，其他的 process_exception 将不会被执行。通常我们依赖 Djnago’s BaseHandler 提供的异常处理程序，但是我们也可以使用自定义的异常处理中间件。</p>\n<h3>process_response</h3>\n<p>在这个阶段，我们得到了一个 HTTPResponse 对象，这个对象可能是 process<em>view 返回的，也可能是视图函数返回的。现在我们将循环访问响应中间件。这是中间件调整数据的最后的机会。执行的顺序是从内向外执行。\n以 cache middleware 的 process</em>response 为例：它依赖于你的 app 里面的不同的状态（缓存是否打开或者关闭，是否在处理一个数据流），来决定是否缓存你的响应。</p>\n<h3>注意</h3>\n<p>django 1.10 和之前版本的区别：\n在旧版本的 MIDDLEWARE<em>CLASSES 中，就算一个中间件”短路”了执行过程，所有的中间件都会调用它们的 process</em>response 方法。而在新的 MIDDLEWARES 版本中，只有这个中间件和在它之前执行的中间件才会调用 process_response 方法。</p>\n<h2>总结</h2>\n<p>以上就是 django 在处理一个请求的基本的过程，最后 django 的 WSGI Handler 会创建一个来自 HTTPResponse 的返回值，而且会调用回调函数把数据传递给 web server, 最后返回给用户。</p>\n<p>以下是两个关键点：</p>\n<ul>\n<li>我们现在知道了视图函数是如何和 url 解析器匹配以及什么在调用它 (WSGI Handler)</li>\n<li>有四个关键的地方可以让你挂钩到请求 / 响应周期：process<em>request, process</em>response, process<em>view, process</em>exception。请求中间件是从外部向内执行，最后抵达到视图函数，然后通过响应中间件从内向外返回。</li>\n</ul>\n<h2>参考资料</h2>\n<ul>\n<li><a href="https://medium.com/zeitcode/django-middlewares-and-the-request-response-cycle-fcbf8efb903f">Django Middlewares and the Request/Response Cycle</a></li>\n<li><a href="http://www.b-list.org/weblog/2006/jun/13/how-django-processes-request/">How Django processes a request</a></li>\n</ul>',fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理",date:"2018-01-21",catalog:"科普",author:"Vessalius"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-21-how-django-works/"}}}});
//# sourceMappingURL=path---2018-01-21-how-django-works-b34f30fb93e4ab33de88.js.map