webpackJsonp([0xfc59508203a4],{554:function(n,s){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-01-14-learn-koa-intro/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-31fad4487f570cd901c0147626041e16-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAd+LAD//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAYEAEAAwEAAAAAAAAAAAAAAAABABEgMf/aAAgBAQABPyGCvSs//9oADAMBAAIAAwAAABDAD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABYQAAMAAAAAAAAAAAAAAAAAAAAgwf/aAAgBAQABPxAsJf/Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Header"\n        title=""\n        src="/static/header-31fad4487f570cd901c0147626041e16-d6978.jpeg"\n        srcset="/static/header-31fad4487f570cd901c0147626041e16-527f0.jpeg 300w,\n/static/header-31fad4487f570cd901c0147626041e16-9a7cd.jpeg 600w,\n/static/header-31fad4487f570cd901c0147626041e16-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>学习 koa 的必要性</h2>\n<p>koa 是由 express 原班人马打造的，小巧的，健壮的 web 开发框架，也正因为它这些的优点，eggjs 等很多 web 框架的核心也是由 koa 驱动的，熟悉 koa 代码，不仅对于使用 koa 进行开发有很大帮助，也有助于深入理解像 eggjs 等这样的，功能更加强大的框架。</p>\n<ul>\n<li><a href="#%E7%9F%A5%E8%AF%86%E5%A4%8D%E4%B9%A0">知识复习</a></li>\n<li><a href="#%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84">代码结构</a></li>\n</ul>\n<h3>知识复习</h3>\n<p>prototype 可以说是整个 javascript 的核心，是深入理解 javascript 关键知识点之一。<br>\ndelegate 是一种编程方式，可以简化我们的操作。</p>\n<p>1.1 首先声明“父类”(或子类的原型)</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> Car <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>engine<span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  start<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>engine<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> start`</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>1.2 使用用父类创建子类(父类在子类的原型链上)</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> BMW <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Car<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>1.3 动态的给子类添加属性</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>BMW<span class="token punctuation">.</span>engine <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'v8\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>1.5 调用子类的方法</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>BMW<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// \'v8\'</span>\nBMW<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \'v8 start\'</span>\n</code></pre>\n      </div>\n<p>1.6 定义代理对象</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> BMWPHONE <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>1.7 定义代理方法</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Delegate</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>source <span class="token operator">=</span> source<span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nDelegate<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">method</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>source<span class="token punctuation">;</span>\n  source<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>1.8 在代理对象上执行目标方法</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> delegate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Delegate</span><span class="token punctuation">(</span>BMWPHONE<span class="token punctuation">,</span> <span class="token string">\'BMW\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndelegate<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token string">\'start\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nBMWPHONE<span class="token punctuation">.</span>BMW <span class="token operator">=</span> BMW<span class="token punctuation">;</span>\nBMWPHONE<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>定义了 Car 父类，BMW 继承了 Car 方法，并给 BMW 安装了牛逼的引擎，现在可以通过 BMW 手动启动了；<br>\n现在 BMW 开发一款手机，用手机操作代理手动启动。</p>\n<p>之所以举上面的例子（这里你会体会到 js 和静态语言的巨大差异），是因为 koa 中 4 个文件中，有 3 个都是与原型和代理相关。</p>\n<h3>代码结构</h3>\n<p>koa 非常小巧，总共就 4 个文件，每个文件的功能也十分单一，文件名也清楚的反应了文件功能。</p>\n<p>koa 的文件结构</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>├── application.js\n├── context.js\n├── request.js\n└── response.js</code></pre>\n      </div>\n<ul>\n<li>\n<p>request.js</p>\n<p>主要针对 http 的 request 对象提供了改对象的大量的 get 方法，文件主要是用来<strong>获取</strong> request 对象属性，参考 1.1。</p>\n</li>\n<li>\n<p>response.js</p>\n<p>主要针对 http 的 response 对象提供了该对象的大量 set 方法；该文件主要是用来<strong>设置</strong> response 对象属性，参考 1.1。</p>\n</li>\n<li>\n<p>context.js</p>\n<p>koa 引入了上下文对象的概念，即 ctx，这里所谓的上下文对象实际上是 request 和 response 两个对象的并集，request 和 response 分别通过<strong>代理</strong>的形式，参考 1.8，将自己的方法委托给 ctx。那样我们就可以用 ctx 同时操作两个对象，来简化操作。</p>\n</li>\n<li>\n<p>application.js</p>\n<p>该文件是整个 koa 的核心，简单来说主要有两大功能: <strong>挂载真实请求到 ctx 下，封装中间件的执行顺序</strong></p>\n</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">createContext</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> context <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> request <span class="token operator">=</span> context<span class="token punctuation">.</span>request <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> response <span class="token operator">=</span> context<span class="token punctuation">.</span>response <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span>app <span class="token operator">=</span> request<span class="token punctuation">.</span>app <span class="token operator">=</span> response<span class="token punctuation">.</span>app <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span>req <span class="token operator">=</span> request<span class="token punctuation">.</span>req <span class="token operator">=</span> response<span class="token punctuation">.</span>req <span class="token operator">=</span> req<span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span>res <span class="token operator">=</span> request<span class="token punctuation">.</span>res <span class="token operator">=</span> response<span class="token punctuation">.</span>res <span class="token operator">=</span> res<span class="token punctuation">;</span>\n  request<span class="token punctuation">.</span>ctx <span class="token operator">=</span> response<span class="token punctuation">.</span>ctx <span class="token operator">=</span> context<span class="token punctuation">;</span>\n  request<span class="token punctuation">.</span>response <span class="token operator">=</span> response<span class="token punctuation">;</span>\n  response<span class="token punctuation">.</span>request <span class="token operator">=</span> request<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这里 createContext 就是上小节 1.3 中的操作—继承原型链上的方法，给原型链上的方法准备数据。<br>\n这里做了很多冗余的挂载(冗余是为了兼容 express 部分写法)，如果你只需要用 ctx，那么其中部分挂载可以省略。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> compose<span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span>middleware<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">function</span> <span class="token function">dispatch</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> index<span class="token punctuation">)</span>\n        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'next() called multiple times\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      index <span class="token operator">=</span> i<span class="token punctuation">;</span>\n      <span class="token keyword">let</span> fn <span class="token operator">=</span> middleware<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> middleware<span class="token punctuation">.</span>length<span class="token punctuation">)</span> fn <span class="token operator">=</span> next<span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fn<span class="token punctuation">)</span> <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>\n          <span class="token function">fn</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>koa 中间件的特点是逆序执行，或者说是洋葱模型。以上 compose 方法就是实现洋葱模型的代码，上面方法简单来说就是: <strong>将下个中间件的方法体，替换上个中间件的 next 参数</strong>。 compose 方法应该算是 koa 中最难理解的部分了。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token function">function1</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token function">function2</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>经过 compose 函数处理后，实际执行代码可以看做:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token function">function1</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// next 部分</span>\n    <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token function">function2</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token operator">...</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2.2</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>\n  conosle<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>那么可以看出洋葱模型的特点: <strong>先注册的中间件，位于模型的最外侧</strong>。<br>\n实际上 koa 主要做了两件事情：</p>\n<ol>\n<li><strong><em>封装 ctx</em></strong></li>\n<li><strong><em>组装中间件，实现逆序执行的洋葱模型</em></strong>。</li>\n</ol>\n<h2>总结</h2>\n<p>与 hapi，eggjs 比起来，koa 真的十分小巧，以至于不能称作一种框架，可以看做一种库，但这并不妨碍 koa 生态的发展。</p>\n<p>express 当初也是大而全的框架，慢慢的把各种功能已中间件的形式抽离出来，koa 可以看做这种思想的一种实现。大而全的框架主要存在起初的学习成本高，功能冗余等问题，使用 koa 对于初次使用 nodejs 开发 web 的人员非常友好，但也存在一定问题，过于灵活编程，导致编程方式千差万别，没有一个统一的标准，不同工程代码之间学习成本高。</p>\n<p>对于初学者来说，建议从 koa 入手，使用不同的中间件来实现不同的功能，对于了解 web 开发有很大帮助。当有一定积累和经验后，可以自己约定 koa 编程规则，当自己编程规则无法满足需求时，就可以入手真正的框架了。</p>',fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa",date:"2018-01-14",catalog:"NodeJS",author:"SUNTOPO"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【翻译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【翻译】让我们从零开始变编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【翻译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-14-learn-koa-intro/"}}}});
//# sourceMappingURL=path---2018-01-14-learn-koa-intro-dd70e3ca9d66d94299d6.js.map