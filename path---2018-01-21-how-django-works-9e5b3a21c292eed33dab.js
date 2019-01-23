webpackJsonp([0x74a71fef67f9],{612:function(e,n){e.exports={data:{site:{siteMetadata:{title:"创宇前端 - 最酷开发者的技术分享",author:"KnownsecFED",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-01-21-how-django-works/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-63b7fa87b39277540d34e41be34ff4fb-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAABnyAZsFkf/8QAGBAAAwEBAAAAAAAAAAAAAAAAAQIDABD/2gAIAQEAAQUCWUzMQQ6gCt3/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAeEAAABAcAAAAAAAAAAAAAAAAAAQIhAxESIDEyQf/aAAgBAQAGPwLZ+mGiYEknVZ//xAAaEAACAwEBAAAAAAAAAAAAAAABIQARMRDw/9oACAEBAAE/IRskQjM85Zto6EXireWQgd3n/9oADAMBAAIAAwAAABBHL//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEAAwACAgMAAAAAAAAAAAABESExABBRYXGBof/aAAgBAQABPxBtsUgLxUTuL3jVWiwYgmdz94LHCURT4qvf31sAUA789f/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Header"\n        title=""\n        src="/static/header-63b7fa87b39277540d34e41be34ff4fb-d6978.jpeg"\n        srcset="/static/header-63b7fa87b39277540d34e41be34ff4fb-527f0.jpeg 300w,\n/static/header-63b7fa87b39277540d34e41be34ff4fb-9a7cd.jpeg 600w,\n/static/header-63b7fa87b39277540d34e41be34ff4fb-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>最近面试的时候，被面试官问道一个问题，就是 request.user 里面的 user 是怎样得到的，这个问题当时没有回答上来，可以说是非常的尴尬，所以赶快查了一些资料，看了一些源码，特地来总结一下这个问题。</p>\n<p>要想回答为什么可以直接通过 request.user 得到请求的用户，应该先来看看请求被处理以及如何返回响应的流程。今天先总结一下 django 从请求到响应都进行了哪些过程。</p>\n<h2>WSGI</h2>\n<p>当客户端发送一次请求后，最先处理请求的实际上是 web 服务器就是我们经常说的 nginx、Apache 这类的 web 服务器，而 WSGI 的作用就是把 web 服务器和 web 框架 (Django) 连接起来。WSGI 被分为了两个部分：服务端和应用端。为了处理一个 WSGI 的响应，服务端执行应用程序并向应用端提供一个回调函数，应用端处理请求并使用提供的回调将响应返回给服务端。本质上来讲，我觉得 WSGI 就是 web 服务器和 django 应用之间的一个联系人。</p>\n<h2>数据流</h2>\n<p>当用户向你的应用发送一个请求的时候，一个 WSGI handler 将会被初始化，它会完成以下工作：</p>\n<ol>\n<li>导入 settings.py 和 django 的异常类</li>\n<li>使用 load<em>middleware 方法加载 settings.py 中 MIDDLEWARE</em>CLASSES 或者 MIDDLEWARES 元组中所用的 middleware classes.</li>\n<li>创建四个列表 (<em>request</em>middleware,<em>view</em>middleware, <em>response</em>middleware, <em>exception</em>middleware)，里面分别包含处理 request,view,response 和 exception 的方法。</li>\n<li>WSGI Handler 将实例化一个 django.http.HTTPRequest 对象的子类，django.core.handlers.wsgi.WSGIRequest.</li>\n<li>循环遍历处理 request 的方法 (<em>request</em>middleware 列表），并按照顺序调用他们</li>\n<li>解析请求的 url</li>\n<li>循环遍历每个处理 view 的方法 (<em>view</em>middleware 列表）</li>\n<li>如果找的到的话，就调用视图函数</li>\n<li>处理任何异常的方法 (<em>exception</em>middleware 列表）</li>\n<li>循环遍历每个处理响应的方法 (<em>response</em>middleware 列表），（从内向外，与请求中间件的顺序相反）</li>\n<li>最后得到一个响应，并调用 web server 提供的回调函数</li>\n</ol>\n<h2>中间件</h2>\n<p>中间件被用在了 django 的许多关键功能中：例如，使用 CSRF 中间键来防止跨站请求伪造攻击。它们也被用来处理会话数据，身份认证和授权同样是由中间件来完成的。我们也可以自己编写中间件来调整或者（短路）通过应用程序的数据流。</p>\n<p>django 的中间件至少含有以下四个方法中的一个：process<em>request, process</em>response, process<em>view, process</em>exception。这些方法会被 WSGI handler 收集并按照顺序调用。</p>\n<h3>process_request</h3>\n<p>我们可以先来看看 django.contrib.auth.middleware.AuthenticationMiddleware:</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_user</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> <span class="token operator">not</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">\'_cached_user\'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        request<span class="token punctuation">.</span>_cached_user <span class="token operator">=</span> auth<span class="token punctuation">.</span>get_user<span class="token punctuation">(</span>request<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> request<span class="token punctuation">.</span>_cached_user\n\n<span class="token keyword">class</span> <span class="token class-name">AuthenticationMiddleware</span><span class="token punctuation">(</span>MiddlewareMixin<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">def</span> <span class="token function">process_request</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">assert</span> <span class="token builtin">hasattr</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token string">\'session\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>\n              <span class="token string">"The Django authentication middleware requires session middleware "</span>\n              <span class="token string">"to be installed. Edit your MIDDLEWARE%s setting to insert "</span>\n              <span class="token string">"\'django.contrib.sessions.middleware.SessionMiddleware\' before "</span>\n              <span class="token string">"\'django.contrib.auth.middleware.AuthenticationMiddleware\'."</span>\n        <span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token string">"_CLASSES"</span> <span class="token keyword">if</span> settings<span class="token punctuation">.</span>MIDDLEWARE <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">else</span> <span class="token string">""</span><span class="token punctuation">)</span>\n        request<span class="token punctuation">.</span>user <span class="token operator">=</span> SimpleLazyObject<span class="token punctuation">(</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> get_user<span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>这里我们可以发现 request.user 这个属性是在 AuthenticationMiddleware 中产生的。这个我们稍后再说。</p>\n<p>这里我们可以发现，这个中间件只有 process<em>request，说明它只在 request 这一步处理流入和流出 django 应用的数据流。这个中间件会首先验证会话中间件是否被使用，然后通过调用 get</em>user 函数来设置用户。当 WSGI 处理程序迭代 process<em>request 方法列表的时候，它将会构建这个最终会被传递给视图函数的请求对象，并能够使你引用 request.user。一些中间件没有 process</em>request 方法，在这个阶段，会被跳过。</p>\n<p>process<em>request 应该返回 None 或者 HTTPResponse 对象。当返回 None 时，WSGI handler 会继续加载 process</em>request 里面的方法，但是后一种情况会短路处理过程并进入 process_response 循环。</p>\n<h3>解析 url</h3>\n<p>当所有的 process<em>request 被调用完之后，我们就会得到一个将被传递给视图函数的 request 对象。当这个事件发生之前，django 必须解析 url 并决定调用哪一个视图函数。这个过程非常简单，只需要使用正则匹配即可。settings.py 中有一个 ROOT</em>URLCONF 键来指定根 url.py，在这里会包含你所有 app 的 urls.py 文件。如果没有匹配成功，将会抛出一个异常 django.core.urlresolvers.Resolver404, 这是 django.http.HTTP404 的子类。</p>\n<h3>process_view</h3>\n<p>到这一步之后 WSGI handler 知道了调用哪一个视图函数，以及传递哪些参数。它会再一次调用中间件列表里面的方法，这次是<em>view</em>middleware 列表。所有 Django 中间件的 process_view 方法将会被这样声明：</p>\n<p><code>process_view(request, view_function, view_args, view_kwargs)</code></p>\n<p>和 process<em>request 一样，process</em>view 函数必须返回 None 或者 HTTPResponse 对象，使得 WSGI handler 继续处理视图或者’短路’处理流程并返回一个响应。在 CSRF middleware 中存在一个 process<em>view 的方法。作用是当 CSRF cookies 出现时，process</em>view 方法将会返回 None, 视图函数将会继续的执行。如果不是这样，请求将会被拒绝，处理流程将会被’短路’，会生成一个错误的信息。</p>\n<h3>进入视图函数</h3>\n<p>一个视图函数需要满足三个条件：</p>\n<ul>\n<li>必须是可以调用的。这可以是基于函数的视图或者是 class-based 的视图（继承自 View 并且使用 as_view() 方法来使它成为可调用的。这些方法的调用依赖 HTTP verb(GET, POST, etc))</li>\n<li>必须接受一个 HTTPRequest 对象作为第一个位置参数。这个 HTTPRequest 对象是被所有 process<em>request 和 process</em>view 中间件方法处理的结果。</li>\n<li>必须返回一个 HTTPResponse 对象，或者抛出一个异常。就是用这个 response 对象来开启 WSGI handler 的 process_view 循环。</li>\n</ul>\n<h3>process_exception</h3>\n<p>如果视图函数抛出一个异常，Handler 将会循环遍历<em>exception</em>middleware 列表，这些方法按照相反的顺序执行，从 settings.py 里面列出来的最后一个中间件到第一个。如果一个异常被抛出，处理过程将会被短路，其他的 process_exception 将不会被执行。通常我们依赖 Djnago’s BaseHandler 提供的异常处理程序，但是我们也可以使用自定义的异常处理中间件。</p>\n<h3>process_response</h3>\n<p>在这个阶段，我们得到了一个 HTTPResponse 对象，这个对象可能是 process<em>view 返回的，也可能是视图函数返回的。现在我们将循环访问响应中间件。这是中间件调整数据的最后的机会。执行的顺序是从内向外执行。\n以 cache middleware 的 process</em>response 为例：它依赖于你的 app 里面的不同的状态（缓存是否打开或者关闭，是否在处理一个数据流），来决定是否缓存你的响应。</p>\n<h3>注意</h3>\n<p>django 1.10 和之前版本的区别：\n在旧版本的 MIDDLEWARE<em>CLASSES 中，就算一个中间件”短路”了执行过程，所有的中间件都会调用它们的 process</em>response 方法。而在新的 MIDDLEWARES 版本中，只有这个中间件和在它之前执行的中间件才会调用 process_response 方法。</p>\n<h2>总结</h2>\n<p>以上就是 django 在处理一个请求的基本的过程，最后 django 的 WSGI Handler 会创建一个来自 HTTPResponse 的返回值，而且会调用回调函数把数据传递给 web server, 最后返回给用户。</p>\n<p>以下是两个关键点：</p>\n<ul>\n<li>我们现在知道了视图函数是如何和 url 解析器匹配以及什么在调用它 (WSGI Handler)</li>\n<li>有四个关键的地方可以让你挂钩到请求 / 响应周期：process<em>request, process</em>response, process<em>view, process</em>exception。请求中间件是从外部向内执行，最后抵达到视图函数，然后通过响应中间件从内向外返回。</li>\n</ul>\n<h2>参考资料</h2>\n<ul>\n<li><a href="https://medium.com/zeitcode/django-middlewares-and-the-request-response-cycle-fcbf8efb903f">Django Middlewares and the Request/Response Cycle</a></li>\n<li><a href="http://www.b-list.org/weblog/2006/jun/13/how-django-processes-request/">How Django processes a request</a></li>\n</ul>',fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理",date:"2018-01-21",catalog:"小白秒懂",author:"Vessalius"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in/kaggle数据实验入门之泰坦尼克号/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/howToWrite/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2019-01-23-how-to-implement-masking-danmaku/"},frontmatter:{title:"基于色键技术的纯客户端实时蒙版弹幕"}}},{node:{fields:{slug:"/2019-01-09-elasticsearch-xing-neng-tiao-you/"},frontmatter:{title:"ElasticSearch性能调优"}}},{node:{fields:{slug:"/2019-01-04-heretic-judger-2/"},frontmatter:{title:"异端审判器！一个泛用型文本聚类模型的实现（2）"}}},{node:{fields:{slug:"/2018-12-28-ye-xu-ni-dui-fetch-liao-jie-de-bu-shi-na-mo-duo-er/"},frontmatter:{title:"也许你对Fetch了解得不是那么多（二)"}}},{node:{fields:{slug:"/2018-12-28-ye-xu-ni-dui-fetch-liao-jie-de-bu-shi-na-mo-duo-yi/"},frontmatter:{title:"也许你对Fetch了解得不是那么多(一)"}}},{node:{fields:{slug:"/2018-12-13-css-lie-biao-xiang-bu-ju-ji-qiao/"},frontmatter:{title:"CSS 列表项布局技巧"}}},{node:{fields:{slug:"/2018-12-04-ren-gong-zhi-zhang-ye-shua-ti-kaggle-ru-men-zhi-shi-zhan-tai-tan-ni-ke-hao/"},frontmatter:{title:"人工智障也刷题！Kaggle入门之实战泰坦尼克号"}}},{node:{fields:{slug:"/2018-11-16-yi-5-ge-zui-xin-de-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【译】5 个最新的用户体验设计趋势"}}},{node:{fields:{slug:"/2018-10-23-reactfiber/"},frontmatter:{title:"React Fiber"}}},{node:{fields:{slug:"/2018-10-22-yi-reactnative-yu-ios-jiao-hu/"},frontmatter:{title:"【译】React Native与ios交互"}}},{node:{fields:{slug:"/2018-10-11-yi-ni-er-duo-li-you-tiao-yu/"},frontmatter:{title:"【译】你耳朵里有条鱼"}}},{node:{fields:{slug:"/2018-10-07-dapp-dev-practice/"},frontmatter:{title:"区块链上编程：DApp 开发实践"}}},{node:{fields:{slug:"/2018-10-05-ni-ting-shuo-guo-yuan-sheng-html-zu-jian-ma/"},frontmatter:{title:"你听说过原生 HTML 组件吗？"}}},{node:{fields:{slug:"/2018-09-28-yong-huo-zhuo-de-cnn-jin-hang-yan-zheng-ma-shi-bie/"},frontmatter:{title:"用“活着的”CNN进行验证码识别"}}},{node:{fields:{slug:"/2018-09-27-yi-chao-shi-yong-7-ge-you-xiu-de-ui-jiao-hu-dong-hua-ji-qiao/"},frontmatter:{title:"【译】超实用！7 个优秀的 UI 交互动画技巧"}}},{node:{fields:{slug:"/2018-09-25-guan-yu-http2-de-yan-jiu/"},frontmatter:{title:"关于 HTTP2 的研究"}}},{node:{fields:{slug:"/2018-09-25-yi-android-lu-jing-dong-hua/"},frontmatter:{title:"【译】Android 路径动画"}}},{node:{fields:{slug:"/2018-09-25- heretic-judger-1/"},frontmatter:{title:"异端审判器！一个泛用型文本聚类模型的实现（1）"}}},{node:{fields:{slug:"/2018-09-25-wo-men-ying-gai-zuo-xie-li-suo-neng-ji-de-you-hua/"},frontmatter:{title:"我们应该做些力所能及的优化"}}},{node:{fields:{slug:"/2018-09-25-twenty-to-fifty-years-programming/"},frontmatter:{title:"【译】有哪些事情是编程 20 到 50 多年后才知道的？"}}},{node:{fields:{slug:"/2018-08-24-mongodb-shi-wu/"},frontmatter:{title:"认识 MongoDB 4.0 的新特性——事务（Transactions）"}}},{node:{fields:{slug:"/2018-09-19-yi-yu-yong-hu-lian-xi-zai-wang-ye-she-ji-zhong-rong-ru-you-mo/"},frontmatter:{title:"【译】与用户联系：在网页设计中融入幽默"}}},{node:{fields:{slug:"/2018-09-19-yi-ru-he-she-ji-geng-hao-de-shu-ju-biao/"},frontmatter:{title:"【译】如何设计更好的数据表"}}},{node:{fields:{slug:"/2018-09-13-yi-dao-shi-jian-xun-huan-ti-yin-fa-de-xie-an/"},frontmatter:{title:"一道事件循环题引发的血案"}}},{node:{fields:{slug:"/2018-09-12-qian-duan-gong-cheng-hua-jiao-shou-jia/"},frontmatter:{title:"前端工程化：脚手架"}}},{node:{fields:{slug:"/2018-09-12-qian-tan-vue-zhong-computed-shi-xian-yuan-li/"},frontmatter:{title:"浅谈 Vue 中 computed 实现原理"}}},{node:{fields:{slug:"/2018-09-11-http-de-qian-shi-jin-sheng/"},frontmatter:{title:"HTTP 的前世今生"}}},{node:{fields:{slug:"/2018-08-31-jian-shu-da-shu-ju-shi-shi-chu-li-kuang-jia/"},frontmatter:{title:"简述大数据实时处理框架"}}},{node:{fields:{slug:"/2018-08-22-shen-ru-promise/"},frontmatter:{title:"深入Promise"}}},{node:{fields:{slug:"/2018-08-13-tcp-lian-jie-ji-chang-jian-gong-ji-shou-fa-fen-xi/"},frontmatter:{title:"要点梳理：TCP连接及常见攻击手法分析"}}},{node:{fields:{slug:"/2018-08-13-ran-bing-luan-bf-ke-pu-bf-jie-shi-qi-de-js-shi-xian/"},frontmatter:{title:"然并卵：BF 科普 & BF 解释器的 JS 实现"}}},{node:{fields:{slug:"/2018-08-10-dapp-kai-fa-jian-jie/"},frontmatter:{title:"DApp 开发简介"}}},{node:{fields:{slug:"/2018-08-09-shi-lian-zhi-shi-performance/"},frontmatter:{title:"试炼之石-Performance"}}},{node:{fields:{slug:"/2018-08-09-prolog/"},frontmatter:{title:"那迷人的被遗忘的语言：Prolog"}}},{node:{fields:{slug:"/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/"},frontmatter:{title:"悄悄掀起 WebAssembly 的神秘面纱"}}},{node:{fields:{slug:"/2018-04-16-fan-yi-2018-nian-12-zhong-yi-dong-duan-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【翻译】2018 年 12 种移动端用户体验设计趋势"}}},{node:{fields:{slug:"/2018-04-08-fan-yi-mei-ge-uiux-she-ji-shi-du-xu-yao-zhi-dao-de-xin-li-xue-yuan-li/"},frontmatter:{title:"【翻译】每个 UI / UX 设计师都需要知道的心理学原理"}}},{node:{fields:{slug:"/2018-04-07-fan-yi-yan-fa-ren-yuan-de-sheng-chan-li-shi-fou-ke-yi-liang-hua/"},frontmatter:{title:"【翻译】研发人员的生产力是否可以量化"}}},{node:{fields:{slug:"/2018-04-01-fan-yi-jie-he-tu-xing-he-yu-yin-jie-mian-ti-gong-geng-hao-de-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】结合图形和语音界面，提供更好的用户体验"}}},{node:{fields:{slug:"/2018-03-31-fan-yi-http1-dao-http2-de-yan-bian-ru-he-gai-bian-liao-web/"},frontmatter:{title:"【译】HTTP1 到 HTTP 2 的演变如何改变了 web"}}},{node:{fields:{slug:"/2018-03-28-shui-dong-liao-wo-de-dom/"},frontmatter:{title:"谁动了我的 DOM？！"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-wei-kai-yuan-ruan-jian-she-ji/"},frontmatter:{title:"【翻译】为开源软件设计"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-nodejstwofactor-shen-fen-ren-zheng/"},frontmatter:{title:"【译】node.js Two-Factor 身份认证"}}},{node:{fields:{slug:"/2018-03-25-react-server-side-render-with-hapi/"},frontmatter:{title:"服务端渲染和静态化"}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/"},frontmatter:{title:"如何写一个高逼格 README"}}},{node:{fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码"}}},{node:{fields:{slug:"/2018-03-22-wu-xian-wang-luo-ling-lei-xiu-tan/"},frontmatter:{title:"无线网络另类嗅探"}}},{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-16-yuan-chuang-ji-yu-babylonjs-shi-xian-3d-da-ji-xiao-guo/"},frontmatter:{title:"基于 Babylon.js 实现 3D 打击效果"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【译】让我们从零开始编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南——用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)——白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-21-how-django-works/"}}}});
//# sourceMappingURL=path---2018-01-21-how-django-works-9e5b3a21c292eed33dab.js.map