webpackJsonp([89025254229525],{570:function(n,a){n.exports={data:{site:{siteMetadata:{title:"创宇前端 - 最酷开发者的技术分享",author:"KnownsecFED",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-01-05-create-a-redux-middleware/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-183a07e70356cec5d49e60258331449f-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAMAAv/aAAwDAQACEAMQAAABgfIxaoyNr//EABsQAAEEAwAAAAAAAAAAAAAAAAEAAgMRECJB/9oACAEBAAEFAiBTdhS5Hj//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEn/8QAFhEAAwAAAAAAAAAAAAAAAAAAAhAx/9oACAECAQE/AQq//8QAGRAAAgMBAAAAAAAAAAAAAAAAABEBEDGR/9oACAEBAAY/Amp6Nm1Nf//EABoQAQADAAMAAAAAAAAAAAAAAAEAEVEQITH/2gAIAQEAAT8hAQWQzpByUzBaz3x//9oADAMBAAIAAwAAABBkH//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/EGz/xAAXEQADAQAAAAAAAAAAAAAAAAABEBFB/9oACAECAQE/ECkDV//EAB0QAQABAwUAAAAAAAAAAAAAAAEAESFBEDFhkdH/2gAIAQEAAT8QXGt0lo4xC62pQ2Yhl78iBVQLFY2hyaf/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Header"\n        title=""\n        src="/static/header-183a07e70356cec5d49e60258331449f-d6978.jpeg"\n        srcset="/static/header-183a07e70356cec5d49e60258331449f-527f0.jpeg 300w,\n/static/header-183a07e70356cec5d49e60258331449f-9a7cd.jpeg 600w,\n/static/header-183a07e70356cec5d49e60258331449f-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h1>如何编写一个 Redux 中间件</h1>\n<p>要想实现一个 <a href="https://redux.js.org/">Redux</a> 中间件我们必须了解 Redux 的基本实现原理。本文将从 Redux 源码入手，重点讲解 applyMiddleware 如何将中间件串联执行。只有理解了底层原理我们才可以游刃有余的写出一个 Redux 中间件。</p>\n<h2>目录</h2>\n<ul>\n<li><a href="#createstore-%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB">createStore 源码解读</a></li>\n<li><a href="#applymiddleware-%E6%BA%90%E7%A0%81%E8%A7%A3%E8%AF%BB">applyMiddleware 源码解读</a></li>\n<li><a href="#redux-thunk-%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86">redux-thunk 的实现原理</a></li>\n<li><a href="#%E5%A6%82%E4%BD%95%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E4%B8%AD%E9%97%B4%E4%BB%B6">如何编写一个中间件</a></li>\n<li><a href="#%E6%80%BB%E7%BB%93">总结</a></li>\n</ul>\n<h2>createStore 源码解读</h2>\n<blockquote>\n<p><a href="https://redux.js.org/">Redux</a> 通过 createStore 来创建一个 store 对象</p>\n<p>要理解 applyMiddleware 的实现原理，我们要从 createStore 入手</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">,</span> enhancer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> preloadedState <span class="token operator">===</span> <span class="token string">\'function\'</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> enhancer <span class="token operator">===</span> <span class="token string">\'undefined\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    enhancer <span class="token operator">=</span> preloadedState\n    preloadedState <span class="token operator">=</span> undefined\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> enhancer <span class="token operator">!==</span> <span class="token string">\'undefined\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> enhancer <span class="token operator">!==</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Expected the enhancer to be a function.\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token function">enhancer</span><span class="token punctuation">(</span>createStore<span class="token punctuation">)</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> reducer <span class="token operator">!==</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Expected the reducer to be a function.\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// 篇幅有限，后面被我省略了，有兴趣请去看 Redux 源码</span>\n  <span class="token comment">// ......</span>\n</code></pre>\n      </div>\n<p>可以看见 createStore 的三个参数依次为: reducer，preloadedState，enhancer。参见源码，如果传入了 enhance 参数且为函数，则将 createStore 传入 enhance：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token function">enhancer</span><span class="token punctuation">(</span>createStore<span class="token punctuation">)</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>也就是说，现在我们将用 enhance 来创建一个 store 对象。</p>\n<h2>applyMiddleware 源码解读</h2>\n<blockquote>\n<p>一般情况下 createStore 的第三个参数 enhance 就是 applyMiddleware</p>\n<p>applyMiddleware 的代码只有二十多行却是本文的重点</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span><span class="token operator">...</span>middlewares<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>createStore<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">,</span> enhancer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> preloadedState<span class="token punctuation">,</span> enhancer<span class="token punctuation">)</span>\n    <span class="token keyword">var</span> dispatch <span class="token operator">=</span> store<span class="token punctuation">.</span>dispatch\n    <span class="token keyword">var</span> chain <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token keyword">var</span> middlewareAPI <span class="token operator">=</span> <span class="token punctuation">{</span>\n      getState<span class="token punctuation">:</span> store<span class="token punctuation">.</span>getState<span class="token punctuation">,</span>\n      dispatch<span class="token punctuation">:</span> <span class="token punctuation">(</span>action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    chain <span class="token operator">=</span> middlewares<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>middleware <span class="token operator">=></span> <span class="token function">middleware</span><span class="token punctuation">(</span>middlewareAPI<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    dispatch <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token operator">...</span>chain<span class="token punctuation">)</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>dispatch<span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token operator">...</span>store<span class="token punctuation">,</span>\n      dispatch\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>参见 createStore 的源码可以得知：applyMiddleware 依然使用 createStore 创建了store 对象并且返回，只是改写了这个对象的 dispatch 方法。</p>\n<p>下面我们重点来看这个被改写掉的 dispatch 方法，同时理解它和原生 dispatch 方法的区别也是本文的重点。为了更直观的了解这个过程我们先来看一个简单的中间件实现 logger middleware：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> store <span class="token operator">=></span> next <span class="token operator">=></span> action <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> ms <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`dispatch: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>action<span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ms<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>下面分两部详细探讨中间件的运行原理</p>\n<ol>\n<li>\n<p>将原生的 getState 和 dispacth 作为第一个参数传入中间件数组，获得执行完的 chain 数组；</p>\n<p><code>chain = middlewares.map(middleware => middleware(middlewareAPI))</code></p>\n</li>\n<li>\n<p>组合串联 middleware</p>\n<p><code>dispatch = compose(...chain)(store.dispatch)</code></p>\n<p>compose 将所有的中间件串联起来组成新的 dispatch</p>\n<p><strong>compose 源码</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">compose</span><span class="token punctuation">(</span><span class="token operator">...</span>funcs<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> arg <span class="token operator">=></span> funcs<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span>composed<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>composed<span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>参考我们的 logger middleware 这里的 composed 即是我们的 next 参数。</p>\n<p>reduceRight 和 ruduce 一样，不过 reduceRight 是从数组的右端开始执行，arg 将作为 reduceRight 的初始值（这里就是 store.dispatch)。假设我们的 chain 数组为 <code>[f1, f2, f3]</code>执行完毕后 dispatch 为 <code>dispatch = f1(f2(f3(store.dispatch))))</code>，调用这个新的 dispatch 每个中间件就能依次执行了，这里的中间件执行过程也是类似于 Koa 的中间件执行的非常经典的洋葱模型。只有最后一个中间件会触发 <a href="https://redux.js.org/">redux</a> 原生的 dispatch，将这个 action 分发出去。</p>\n<p><strong>Redux middleware 洋葱模型</strong></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/redux-middleware-c82cd7ccb706623938461ff6628eca39-38c0b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 911px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 53.1284302963776%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABB0lEQVQoz32SB6qGQAyEvf/1vIAFxYa9tzy+hcjqr29h2DVlkkx05OOc5yn/nS+/8wxScNZ1lXEcL0zTJHmeS9/3r/EXoW20323bShzH4vu+eJ4nURSJ67qSJIm85RlCu4pdie7meZZt224gBt+yLD/jcztPDY7jMCMpGbeCkRkdMkDcvu+3bh0MACLuYRiuiqobwM63ktMlcfhuGoZhaDQKgsAA0YuikKqqjFZ0QVKapsYGadM0Upal8WVZdpPD0eo4u667xqjr+vqGjMIsBlLsFOWmKEVYIHk/GuJkHCRgNLTSMfWtGj6X87llFV/1o0uFTqN6PvOd59rtbaOLktrAjv/tt/kDnO1cttYyJVEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="redux-middleware"\n        title=""\n        src="/static/redux-middleware-c82cd7ccb706623938461ff6628eca39-38c0b.png"\n        srcset="/static/redux-middleware-c82cd7ccb706623938461ff6628eca39-8d81b.png 300w,\n/static/redux-middleware-c82cd7ccb706623938461ff6628eca39-38503.png 600w,\n/static/redux-middleware-c82cd7ccb706623938461ff6628eca39-38c0b.png 911w"\n        sizes="(max-width: 911px) 100vw, 911px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><strong>只有在最后一个中间件中才调用了 store 原生的 dispatch。</strong></p>\n</li>\n</ol>\n<h2>redux-thunk 的实现原理</h2>\n<blockquote>\n<p>一般而言 dispatch 只能分发一个 action 对象，但是使用了 redux-thunk 中间件我们却可以分发一个异步函数。</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">thunk</span> <span class="token operator">=</span> store <span class="token operator">=></span> next <span class="token operator">=></span> action <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">typeof</span> action <span class="token operator">===</span> <span class="token string">\'function\'</span> <span class="token operator">?</span>\n        <span class="token function">action</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>dispatch<span class="token punctuation">,</span> store<span class="token punctuation">.</span>getState<span class="token punctuation">)</span> <span class="token punctuation">:</span>\n        <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>一个异步的 action 的示例</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function-variable function">getMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span>dispatch<span class="token punctuation">,</span> getState<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    axios<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'xxx/xxx\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            type<span class="token punctuation">:</span> <span class="token string">\'GET_MESSAGE_SUCCESS\'</span><span class="token punctuation">,</span>\n            message<span class="token punctuation">:</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            type<span class="token punctuation">:</span> <span class="token string">\'GET_MESSAGE_ERROR\'</span><span class="token punctuation">,</span>\n            message<span class="token punctuation">:</span> <span class="token string">\'error\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这里的 dispatch 仍然是改造后的 dispatch。因为传入中间件的第一个参数 store（即 middlewareApi）中的 dispatch 是一个闭包，它保存着外层函数作用域中 dispatch 的引用，所以当 diapatch 被修改后，后面调用的 dispatch 都是这个新的 dispatch(即中间件的串联)，所以即使在异步 action 中调用 dispatch，中间件也会从头开始执行。</p>\n<h2>如何编写一个中间件</h2>\n<blockquote>\n<p>所以理解了以上，编写一个中间件将超级简单，只需要按照中间件编写规范</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function-variable function">myMiddleware</span> <span class="token operator">=</span> store <span class="token operator">=></span> next <span class="token operator">=></span> action <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 在这里你可以拿到 store.getState 和 store.dispatch</span>\n    <span class="token comment">// 注意如果你调用 store.dispatch 中间件又从新从最外层开始 如果不加限制条件将陷入死循环</span>\n    <span class="token comment">// do something</span>\n    <span class="token function">next</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>   <span class="token comment">// 进入下一个中间件，最后一个中间件的 next 参数为 redux 原生 dispatch</span>\n    <span class="token comment">// 返回继续执行这个中间件剩余部分</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>总结</h2>\n<p>深入理解 Redux 中间件的实现原理，可以让我们在日常工作中，对 Redux 数据流向更加清晰和对自己的程序更加有把握。本人水平有限，如有错误还请指出。</p>\n<h3>参考资料</h3>\n<ul>\n<li><a href="http://www.ituring.com.cn/book/1898">《深入 Redux 技术栈》</a></li>\n<li><a href="https://redux.js.org/">Redux 官方文档</a></li>\n<li><a href="http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html">阮一峰 Redux 入门教程</a></li>\n</ul>',fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件",date:"2018-01-05",catalog:"开发干货",author:"阿鑫"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/howToWrite/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2018-09-19-yi-ru-he-she-ji-geng-hao-de-shu-ju-biao/"},frontmatter:{title:"【译】如何设计更好的数据表"}}},{node:{fields:{slug:"/2018-09-12-qian-duan-gong-cheng-hua-jiao-shou-jia/"},frontmatter:{title:"前端工程化：脚手架"}}},{node:{fields:{slug:"/2018-09-12-qian-tan-vue-zhong-computed-shi-xian-yuan-li/"},frontmatter:{title:"浅谈 Vue 中 computed 实现原理"}}},{node:{fields:{slug:"/2018-08-31-jian-shu-da-shu-ju-shi-shi-chu-li-kuang-jia/"},frontmatter:{title:"简述大数据实时处理框架"}}},{node:{fields:{slug:"/2018-08-22-shen-ru-promise/"},frontmatter:{title:"深入Promise"}}},{node:{fields:{slug:"/2018-08-13-tcp-lian-jie-ji-chang-jian-gong-ji-shou-fa-fen-xi/"},frontmatter:{title:"要点梳理：TCP连接及常见攻击手法分析"}}},{node:{fields:{slug:"/2018-08-13-ran-bing-luan-bf-ke-pu-bf-jie-shi-qi-de-js-shi-xian/"},frontmatter:{title:"然并卵：BF 科普 & BF 解释器的 JS 实现"}}},{node:{fields:{slug:"/2018-08-10-dapp-kai-fa-jian-jie/"},frontmatter:{title:"DApp 开发简介"}}},{node:{fields:{slug:"/2018-08-09-shi-lian-zhi-shi-performance/"},frontmatter:{title:"试炼之石-Performance"}}},{node:{fields:{slug:"/2018-08-09-prolog/"},frontmatter:{title:"那迷人的被遗忘的语言：Prolog"}}},{node:{fields:{slug:"/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/"},frontmatter:{title:"悄悄掀起 WebAssembly 的神秘面纱"}}},{node:{fields:{slug:"/2018-04-16-fan-yi-2018-nian-12-zhong-yi-dong-duan-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【翻译】2018 年 12 种移动端用户体验设计趋势"}}},{node:{fields:{slug:"/2018-04-08-fan-yi-mei-ge-uiux-she-ji-shi-du-xu-yao-zhi-dao-de-xin-li-xue-yuan-li/"},frontmatter:{title:"【翻译】每个 UI / UX 设计师都需要知道的心理学原理"}}},{node:{fields:{slug:"/2018-04-07-fan-yi-yan-fa-ren-yuan-de-sheng-chan-li-shi-fou-ke-yi-liang-hua/"},frontmatter:{title:"【翻译】研发人员的生产力是否可以量化"}}},{node:{fields:{slug:"/2018-04-01-fan-yi-jie-he-tu-xing-he-yu-yin-jie-mian-ti-gong-geng-hao-de-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】结合图形和语音界面，提供更好的用户体验"}}},{node:{fields:{slug:"/2018-03-31-fan-yi-http1-dao-http2-de-yan-bian-ru-he-gai-bian-liao-web/"},frontmatter:{title:"【译】HTTP1 到 HTTP 2 的演变如何改变了 web"}}},{node:{fields:{slug:"/2018-03-28-shui-dong-liao-wo-de-dom/"},frontmatter:{title:"谁动了我的 DOM？！"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-wei-kai-yuan-ruan-jian-she-ji/"},frontmatter:{title:"【翻译】为开源软件设计"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-nodejstwofactor-shen-fen-ren-zheng/"},frontmatter:{title:"【译】node.js Two-Factor 身份认证"}}},{node:{fields:{slug:"/2018-03-25-react-server-side-render-with-hapi/"},frontmatter:{title:"服务端渲染和静态化"}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/"},frontmatter:{title:"如何写一个高逼格 README"}}},{node:{fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码"}}},{node:{fields:{slug:"/2018-03-22-wu-xian-wang-luo-ling-lei-xiu-tan/"},frontmatter:{title:"无线网络另类嗅探"}}},{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-16-yuan-chuang-ji-yu-babylonjs-shi-xian-3d-da-ji-xiao-guo/"},frontmatter:{title:"基于 Babylon.js 实现 3D 打击效果"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【译】让我们从零开始编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南——用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)——白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-05-create-a-redux-middleware/"}}}});
//# sourceMappingURL=path---2018-01-05-create-a-redux-middleware-6b92ec3c0f5e2bf5c746.js.map