webpackJsonp([8268344425282],{554:function(n,a){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-01-27-javascript-mo-huan-dai-li/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-64b1abe2f7b3ae19fe2e743acfefe4e7-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB5NMiZskP/8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAECEi/9oACAEBAAEFAuUchTv/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAEBAQEAAAAAAAAAAAAAAAABACEg/9oACAEBAAY/AgjCzj//xAAaEAADAQADAAAAAAAAAAAAAAAAAREhMUGR/9oACAEBAAE/IcKK9tsdeALxMKUrP//aAAwDAQACAAMAAAAQjB//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAcEAACAgMBAQAAAAAAAAAAAAABEQAhMVFxQZH/2gAIAQEAAT8QKQk0FvXJcbQCgBcPMr69hK7MZ5ONwoFn7P/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="JavsScript 魔幻代理"\n        title=""\n        src="/static/header-64b1abe2f7b3ae19fe2e743acfefe4e7-d6978.jpeg"\n        srcset="/static/header-64b1abe2f7b3ae19fe2e743acfefe4e7-527f0.jpeg 300w,\n/static/header-64b1abe2f7b3ae19fe2e743acfefe4e7-9a7cd.jpeg 600w,\n/static/header-64b1abe2f7b3ae19fe2e743acfefe4e7-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>前言</h2>\n<h3>什么是代理？</h3>\n<p>让我们看三个案例：</p>\n<p>A: 上小学的时候，李小红来你家叫你出去玩，第一个回应的不是你自己，是你妈：“王小明在家写作业，今天不出去！”</p>\n<p>B: 上中学的时候，赵二虎带着小弟们放学在校门口等着揍你，走在前面的不是你自己，是二虎他爸：“考试没及格还学会装黑社会了！”拎起二虎就是一顿胖揍。</p>\n<p>C: 上了大学，躺在宿舍里的床上，好饿。出门买饭并交代好不要葱蒜多放辣最后还直接端到床上的不是你自己，是快递小哥。</p>\n<p>这些都是代理。</p>\n<h3>什么是 JavaScript 代理？</h3>\n<p>用官方的洋文来说，是 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy">Proxy</a>：</p>\n<blockquote>\n<p>The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).</p>\n</blockquote>\n<p>通过 Proxy 我们可以拦截并改变一个对象的几乎所有的根本操作，包括但不限于属性查找、赋值、枚举、函数调用等等。</p>\n<p>在生活中，通过代理我们可以自动屏蔽小红的邀请、自动赶走二虎的威胁、自动买好干净的饭端到床上。在 JavaScript 世界里，代理也可以帮你做类似的事情，接下来让我们一起琢磨一番。</p>\n<h2>初识代理：Hello World</h2>\n<p>以小学经历为例子，心里是喜欢小红的，于是我们定义：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'小明\'</span><span class="token punctuation">,</span> like<span class="token punctuation">:</span> <span class="token string">\'小红\'</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这个时候如果调用 <code>console.log(me.like)</code>，结果必然是 <code>小红</code>。然而生活并不是这样，作为一个未成年人，总是有各种的代理人围绕在你身边，比如这样：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> meWithProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>me<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token keyword">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token operator">===</span> <span class="token string">\'like\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token string">\'学习\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>这个时候如果调用 <code>console.log(me.like)</code> 依然是 <code>小红</code> ，因为真心不会说谎。但当我们调用 <code>console.log(meWithProxy.like)</code> 的时候，就会可耻的输出 <code>学习</code> ，告诉大家说我们喜欢的是 <code>学习</code> 。</p>\n<h2>小试牛刀：不要停止我的音乐</h2>\n<p>刚才我们简单了解了代理能够拦截对象属性的获取，可以隐藏真实的属性值而返回代理想要返回的结果，那么对于对象属性的赋值呢？让我们一起来看看。</p>\n<p>假设你正在听音乐：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'小明\'</span><span class="token punctuation">,</span> musicPlaying<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>此时如果我们执行 <code>me.musicPlaying = false</code> 这样就轻而易举地停止了你的音乐，那么如果我们挂上代理人：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> meWithProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>me<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token keyword">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>prop <span class="token operator">===</span> <span class="token string">\'musicPlaying\'</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">\'任何妄图停止音乐的行为都是耍流氓！\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    target<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>这时候如果我们执行 <code>me.musicPlaying = false</code>，就会被毫不留情地掀了桌子：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">></span> meWithProxy<span class="token punctuation">.</span>musicPlaying <span class="token operator">=</span> <span class="token boolean">false</span>\nError<span class="token punctuation">:</span> 任何妄图停止音乐的行为都是耍流氓！\n    at Object<span class="token punctuation">.</span><span class="token keyword">set</span> <span class="token punctuation">(</span>repl<span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token number">13</span><span class="token punctuation">)</span>\n<span class="token operator">></span>\n</code></pre>\n      </div>\n<h2>释放魔法：封装全宇宙所有 RESTful API</h2>\n<p>现在我们已经知道通过 Proxy 可以拦截属性的读写操作，那然后呢？没什么用？</p>\n<p>仅仅是拦截属性的读写操作，的确没有太大的发挥空间，或许可以方便的做一些属性赋值校验工作等等。但是，或许你还没有意识到一个惊人的秘密：<strong>Proxy 在拦截属性读写操作时，并不在乎属性是否真的存在！</strong></p>\n<p>那么，也就是说：利用 Proxy，我们可以拦截并不存在的属性的读取。</p>\n<p>再进一步思考：利用 Proxy，我们可以在属性读取的那一瞬间，动态构造返回结果。</p>\n<p>然而，属性并不局限于字符串、布尔值，属性可以是对象、函数、任何东西。</p>\n<p>至此，你想到了什么？</p>\n<p>没想到？不要紧！根据刚才的分析，让我们一起通过下面 17 行代码，来封装全宇宙所有的 RESTful API ！</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">\'axios\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token keyword">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> method <span class="token operator">=</span> <span class="token regex">/^[a-z]+/</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token string">\'/\'</span> <span class="token operator">+</span> prop\n          <span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span>length<span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/([a-z])([A-Z])/g</span><span class="token punctuation">,</span> <span class="token string">\'$1/$2\'</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\$/g</span><span class="token punctuation">,</span> <span class="token string">\'/$/\'</span><span class="token punctuation">)</span>\n          <span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// &lt;------ 返回动态构造的函数！</span>\n      <span class="token keyword">const</span> url <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\$/g</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> args<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> options <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Requesting: \'</span><span class="token punctuation">,</span> method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span> method<span class="token punctuation">,</span> url<span class="token punctuation">,</span>  <span class="token operator">...</span>options <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>定义了 api 这个代理之后，我们就可以像下面这样调用：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>api<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// GET /</span>\n\napi<span class="token punctuation">.</span><span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// 获取所有用户</span>\n<span class="token comment">// GET /users</span>\n\napi<span class="token punctuation">.</span><span class="token function">getUsers$Books</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span>\n<span class="token comment">// 获取 ID 为 42 的用户的所有书籍</span>\n<span class="token comment">// GET /users/42/books</span>\n\napi<span class="token punctuation">.</span><span class="token function">getUsers$Books</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> params<span class="token punctuation">:</span> <span class="token punctuation">{</span> page<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// 获取 ID 为 42 的用户的所有书籍的第二页</span>\n<span class="token comment">// GET /users/42/books?page=2</span>\n\napi<span class="token punctuation">.</span><span class="token function">postUsers</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data<span class="token punctuation">:</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'小明\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// 创建名字为 小明 的用户</span>\n<span class="token comment">// POST /users Payload { name: \'小明\' }</span>\n</code></pre>\n      </div>\n<p>以上所有的函数都在你调用的那一瞬间，通过代理人的魔法之手动态生成，供我们随意取用。</p>\n<p>简洁、优雅，哇~ 真是太棒啦！</p>\n<h2>终极魔幻：通读代理人的魔法秘笈</h2>\n<p>到此，我们仅仅使用 Proxy 改造了对象的属性获取、赋值操作，而对于 Proxy 来说，只是冰山一角。</p>\n<p>Proxy 的基本语法如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>其中 <code>target</code> 是即将被代理的对象（比如：想要出门找小红玩耍的 <code>me</code>），<code>handler</code> 就是代理的魔法之手，用来拦截、改造 <code>target</code> 的行为。</p>\n<p>对于 <code>handler</code> 对象，我们刚才仅仅用到了 <code>get</code>、<code>set</code> 函数，而实际上一共有 13 种可代理的操作：</p>\n<ul>\n<li>\n<p>handler.getPrototypeOf()</p>\n<p>在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。</p>\n</li>\n<li>\n<p>handler.setPrototypeOf()</p>\n<p>在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。</p>\n</li>\n<li>\n<p>handler.isExtensible()</p>\n<p>在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。</p>\n</li>\n<li>\n<p>handler.preventExtensions()</p>\n<p>在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。</p>\n</li>\n<li>\n<p>handler.getOwnPropertyDescriptor()</p>\n<p>在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, “foo”) 时。</p>\n</li>\n<li>\n<p>handler.defineProperty()</p>\n<p>在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, “foo”, {}) 时。</p>\n</li>\n<li>\n<p>handler.has()</p>\n<p>在判断代理对象是否拥有某个属性时触发该操作，比如在执行 “foo” in proxy 时。</p>\n</li>\n<li>\n<p>handler.get()</p>\n<p>在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。</p>\n</li>\n<li>\n<p>handler.set()</p>\n<p>在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。</p>\n</li>\n<li>\n<p>handler.deleteProperty()</p>\n<p>在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。</p>\n</li>\n<li>\n<p>handler.ownKeys()</p>\n<p>在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。</p>\n</li>\n<li>\n<p>handler.apply()</p>\n<p>在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。</p>\n</li>\n<li>\n<p>handler.construct()</p>\n<p>在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。</p>\n</li>\n</ul>\n<p>对于以上 13 种可代理的操作，还需要读者自行研究并实践方可踏上终极魔幻之旅。</p>\n<p>同学，我看好你。</p>\n<hr>\n<p>参考链接：</p>\n<ul>\n<li>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy">Proxy - JavaScript | MDN</a></p>\n</li>\n<li>\n<p><a href="https://medium.com/dailyjs/how-to-use-javascript-proxies-for-fun-and-profit-365579d4a9f8">How to use JavaScript Proxies for Fun and Profit – DailyJS – Medium</a></p>\n</li>\n</ul>',fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理",date:"2018-01-27",catalog:"NodeJS",author:"王小明"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【翻译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"}}}});
//# sourceMappingURL=path---2018-01-27-javascript-mo-huan-dai-li-d2a25863a715ecd2329f.js.map