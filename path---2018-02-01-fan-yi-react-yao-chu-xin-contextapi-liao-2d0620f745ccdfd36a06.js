webpackJsonp([0xb6d54ca9d8e5],{543:function(n,a){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-02-01-fan-yi-react-yao-chu-xin-contextapi-liao/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-a4908b5063444d152daca7add9455a1e-45309.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1069px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.12722170252572%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAdwsRR//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAXEAADAQAAAAAAAAAAAAAAAAAAARAh/9oACAEBAAE/IWbHf//aAAwDAQACAAMAAAAQCy//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAcEAEAAgEFAAAAAAAAAAAAAAABABFBECExUWH/2gAIAQEAAT8QW8sDmuswbLSvGAS8zjT/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="React 要出新 Context API 了"\n        title=""\n        src="/static/header-a4908b5063444d152daca7add9455a1e-45309.jpeg"\n        srcset="/static/header-a4908b5063444d152daca7add9455a1e-7c815.jpeg 300w,\n/static/header-a4908b5063444d152daca7add9455a1e-f1c7c.jpeg 600w,\n/static/header-a4908b5063444d152daca7add9455a1e-45309.jpeg 1069w"\n        sizes="(max-width: 1069px) 100vw, 1069px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>原文地址：<a href="https://tinyletter.com/kentcdodds/letters/react-s-new-context-api">React’s new Context API</a></p>\n<p>作者：<a href="https://twitter.com/kentcdodds">kentcdodds</a></p>\n<p><code>React</code> 中的 <code>context API</code> 相信大家都知道吧，可能跟大伙一样，当看到 <code>React</code> 的官方文档是这样时，都不敢直接使用它。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/context-f28060c2ee8e3505bff6f5b584f4891f-7df05.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 748px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 80.6149732620321%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAADfElEQVQ4y6WSS2wbVRSGTQUbJIoAUYkWQSO7fjQZPzppTEBBUMECwQaB2RIDSfpQEWvYsGEDbBxKaUFIiAg2KBQatYQkxk2cpiGNEH7kYdeGxFE84xnbY4/Hju1rz8+dcWJHoqw40q8zd+bOd/97zjEYaMxemXg0cG3MeeXXcWbylylmfi7I3AjMMr/5A0wwGGQCgRvM9PQ0MzPjp5rRs9/vZ6amppiJqxPM5PXrzp9+vnrIsBfRxaWPZCGBlWS0GoqsEEHgSWorRTY2NwnHcYTnObJJn3me19d779LpbbIei1UTySSWl5c/aQN/GP/RF4slcDN4szG/sID5pVtYXF7CwtIi5oLzmJ0NIhSKIBpdxcqKpjVEaV5bW8et3283g4u3QZ1eagOPdFl95r7nYXKfqneZHeoxi0PtMvWopt1s7Wb1bLQ41WO2XpXtG1DZkwOq2eZULTYXofvx2OPGL9rAo6Zun83uhrnnJBkaOa++/8GHGDnzLt4eOovBt0bwpncYg97T8Hq98A6+gaHhMxg+fR7vDJ/D2XPvkRdfehWHnzB3HFInPhvjBuPqJ3+GwmqtVoUoisjn8xAEAbR+4HgR6a0IuL/GocgZVKt1KIoCGuTjz77EwUeOdIBGs70FdPYTWidV25XL5SBJEvJUgphDht9A+u9JlEuc9hmq2kSj0dCBvs8p8OHD+4CWXaDraRKL3dGBxWIR5XJZh/K8QIGb4DeuISes08OK+oFpToeTi5e+xgMP/QdQc9hsNkFHQ7/yzs4OBVdQVgpQpDAq1KGiVFAqleh36e5ArYbH7U/BfuIZQkeCOlRRKBRQqVRaDjMihMwWctt+FHIJiFkJUkGiOQt6OLlw8Ss8uL+GTxq7fSbbCVhpl9fW4/qVU6mU3hjtWtrMJZMJyFISSklEoSi3HEoth6MXLuP+g4c6QNY94Hv21Mt47oVX6vE7CQ2oZjIZldZJf26poWrRWbdFvvn2exw1dnfmMBQOj7YaITe1zlWrVdTrdWj/y7KM7XQGma055LkA9keD4mp1WnAa4Ujkchu4urr6qQagM1ehtatRSI12+V+S5b0s17LZbC2eEmt/RDcqZaWMeDw+use7x2q1HmdZ9jWXy+Wx2+0ehmHuIvuuWmuHw+HpY52efjfr6e1lX7dYLD0ayxCJRDToAap7qe77HzowNvad4R9vjA4Xe719BAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="context api"\n        title=""\n        src="/static/context-f28060c2ee8e3505bff6f5b584f4891f-7df05.png"\n        srcset="/static/context-f28060c2ee8e3505bff6f5b584f4891f-147c7.png 300w,\n/static/context-f28060c2ee8e3505bff6f5b584f4891f-2f268.png 600w,\n/static/context-f28060c2ee8e3505bff6f5b584f4891f-7df05.png 748w"\n        sizes="(max-width: 748px) 100vw, 748px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>第一条搜索结果显示的就是 <a href="https://reactjs.org/docs/context.html#why-not-to-use-context">为什么不建议使用 context</a>，让大家瞬间产生忧虑，该章节是这么描述 <code>context</code> 的：</p>\n<blockquote>\n<p>如果你想让你的应用更加稳定，就别使用 <code>context</code>，因为这是一个实验性的 <code>API</code>，在未来的 <code>React</code> 版本中可能会发生改变。</p>\n</blockquote>\n<p>⚠️ 注意，这里的改变包括 <code>中断</code>，<code>终止</code>，<code>不再使用</code> 的含义。</p>\n<h2>那么，为什么还要使用 context 呢</h2>\n<p>你曾经历过尝试在一个 <code>层级很深的组件</code> 中获取 <code>最外层组件</code> 的 <code>state</code> 的痛苦么，这种痛苦叫 <code>prop drilling</code>，可谓让人接近崩溃的。当遇到这种情形时，你肯定不会喜欢用 <code>props</code> 来传递数据，因为如果中间有个组件发生改变，这个代价将是几何 😂。</p>\n<p>实际上，你可以通过使用常规的 <code>JavaScript module</code> 来规避以上的问题，将数据存放在某个 <code>module</code> 中，就可以实现在任何地方 <code>访问/导入</code>，但这么做想要 <code>更新</code> 却很麻烦（你必须实现一个 <code>event</code> 在数据更新时触发，通知用户数据发生改变），并且，<code>服务端渲染</code> 对 <code>module</code> 也会有影响。</p>\n<p>因此，像 <a href="https://redux.js.org/">redux</a> 这样的负责 <code>状态管理</code> 的第三方库进入了大家的视野。它允许你在任何地方从 <code>store</code> 获取数据，你需要做的只是使用 <code>&#x3C;Provider /></code> 包装一下，然后就可以神奇地在 <code>connected</code> 的组件中轻松地获取想要的数据了。</p>\n<p>然而，如果我告诉你 <code>&#x3C;Provider /></code> 就是在使用 <code>context</code> 这个 <code>实验性 API</code> 呢？事实上也是这样的！<code>provider</code> 组件将数据存进 <code>context</code> 中，<code>connect</code> 高阶组件从 <code>context</code> 获取数据，所以，<code>redux</code> 并不允许你的数据可以在任何地方访问，<code>context</code> 就是这样。</p>\n<p>所以，为什么还要使用 <code>context</code> 呢？可能是大家已经深深地爱上它了吧！即使你没有直接使用 <code>context</code>，你的应用程序也会通过引用像 <a href="https://github.com/reactjs/react-redux/blob/76dd7faa90981dd2f9efa76f3e2f26ecf2c12cf7/src/components/connectAdvanced.js#L136-L143">react-redux</a>， <a href="https://github.com/mobxjs/mobx-react/blob/dc249910c74c1b2e988a879be07f10aeaea90936/src/Provider.js#L19-L34">MobX-react</a>， <a href="https://github.com/ReactTraining/react-router/blob/e6f9017c947b3ae49affa24cc320d0a86f765b55/packages/react-router/modules/Router.js#L23-L34">react-router</a>， <a href="https://github.com/paypal/glamorous/blob/7468bfc76f46783cac841e20973ed119c771f3b7/src/theme-provider.js#L33-L37">glamorous</a> 这样的第三方库间接用到它。</p>\n<h2>Context 重生啦</h2>\n<p>现在清楚了，我们是如此地热爱 <code>context</code>，但官方文档的警告依然还在：<code>在 React 的未来版本中，可能不再使用它</code>，好消息是，<code>context</code> 要正式跟大家打招呼了，大家极有可能比之前更爱它。</p>\n<p>一个月前，<code>React 团队</code> 从 <a href="https://github.com/yarnpkg/rfcs">yarn</a>，<a href="https://github.com/rust-lang/rfcs">rust</a> 和 <a href="https://github.com/emberjs/rfcs">Ember</a> 的 <code>rfcs 仓库</code> 受到启发，建立了一个自己的 <a href="https://github.com/reactjs/rfcs">rfcs</a> 仓库。仓库第一个 <code>PR</code> 来自 <a href="https://twitter.com/acdlite">Andrew Clark</a>（React 团队核心成员），<code>PR</code> 标题为 <a href="https://github.com/reactjs/rfcs/pull/2">New version of context</a>，其中 <code>Andrew Clark</code> 概述了未来新版本的 <code>context</code> 是怎样的，之后还存在一些有趣的讨论，几天后，<code>Andrew Clark</code> 就向 <code>React</code> 仓库提了一个 <a href="https://github.com/facebook/react/pull/11818">New context API</a> 的 <code>PR</code>。</p>\n<p>那么，到底有什么改变呢？肉眼估计新的 <code>API</code> 与之前的 <code>API</code> 存在百万级别的差异，下面是我找到的最简单的示例:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">\'light\'</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">ThemeProvider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>theme<span class="token punctuation">:</span> <span class="token string">\'light\'</span><span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> ThemeContext<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>theme<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">ThemeConsumer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> ThemeContext<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">&lt;</span>ThemeProvider<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ThemeConsumer<span class="token operator">></span><span class="token punctuation">{</span>val <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>val<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>ThemeConsumer<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote>\n<p>你可能注意到示例中使用到一个 <code>render prop</code>，但实际上并没有任何关于需要使用 <code>render prop</code> 的 <code>context API</code>，你可以使用 <code>context API</code> 轻松实现 <code>高阶组件</code> 或其他功能。</p>\n</blockquote>\n<p>新的 <code>context API</code> 主要由以下三部分组成</p>\n<ul>\n<li><code>React.createContext</code> 用于传递 <code>初始值</code>（可选择 <a href="https://twitter.com/acdlite/status/957446433656864768">使用 bitmask 的一个奇妙的选择性退出函数</a>），返回一个包含 <code>provider</code> 和 <code>consumer</code> 的对象</li>\n<li><code>provide</code> 函数使用 <code>higher</code>，并可以接收任何值</li>\n<li><code>consume</code> 函数在 <code>provider</code> 之后任何地方使用，并传递一个返回 <code>JSX</code> 的函数（这有点像 <code>render prop</code> 组件，但 <code>consume</code> 不是组件）。</li>\n</ul>\n<p>我对这个 <code>API</code> 充满了期待，<code>React 团队</code> 也将会移除 <code>context 是实验性 API</code> 的警告，因为它现在是框架 <a href="https://twitter.com/acdlite/status/957445801302618112">一级棒的特性</a>。这也意味着大家将不再那么担心使用 <code>context</code> 来解决应用中 <code>prop-drilling</code> 的问题了，对 <code>Redux</code> 也将不再那么依赖，对 <code>React</code> 将更加喜欢。</p>\n<p><a href="https://twitter.com/kentcdodds/status/911276059051438082">我最近看到的</a>，大概意思是：</p>\n<blockquote>\n<p>大家不是很愿意保持使用提倡的 <code>render</code> 方法，加重了 <code>prop drilling</code> 问题，所以，最终想通过 <code>redux</code> 来缓解</p>\n</blockquote>\n<p>所以，我认为如果我们不过早或武断地去破坏 <code>render</code> 方法，我们可能就不会那么痛苦，即便最终我们实在没有办法避免，我们也可以通过核心的 <code>React API</code> 来解决。</p>\n<h2>Context 实践</h2>\n<p>我看到了一个关于 <code>context API</code>（或普通的 <code>render prop pattern</code>）的问题很多次，就是如何组合 <code>providers</code> 和 <code>consumers</code>，当在一个 <code>render</code> 方法中把一堆 <code>render prop</code> 组件放在一起时，就会像这样 <a href="https://twitter.com/acdlite/status/955955121979969537">嵌套</a></p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/Practical-03b38ee4f8b65109c111595cf8272b1c-1355e.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 554px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 216.60649819494586%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAArABQDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAIBAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB+6QW0bHSCmCoec7uY//EABoQAAIDAQEAAAAAAAAAAAAAAAABAhAxESH/2gAIAQEAAQUCy2K3tM9pnSWKTb6f/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwFf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwFf/8QAFBABAAAAAAAAAAAAAAAAAAAAQP/aAAgBAQAGPwIX/8QAHhAAAgICAgMAAAAAAAAAAAAAAAERIRBRMWGBkeH/2gAIAQEAAT8hditijYsqjse8URnjEpqydMbieOBodojjY2n4f//aAAwDAQACAAMAAAAQcwwAMM//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EF//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EF//xAAeEAEAAgEFAQEAAAAAAAAAAAABABFBECExYZFRcf/aAAgBAQABPxCiXdOd2DTjAbrLLcUHkRC8r6i9+dCGZdyK/T5oN8H6xOj7oA288M+1/IjykLIBtjiiEw8T/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Practical"\n        title=""\n        src="/static/Practical-03b38ee4f8b65109c111595cf8272b1c-1355e.jpg"\n        srcset="/static/Practical-03b38ee4f8b65109c111595cf8272b1c-f76df.jpg 300w,\n/static/Practical-03b38ee4f8b65109c111595cf8272b1c-1355e.jpg 554w"\n        sizes="(max-width: 554px) 100vw, 554px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>那么，我们可以做点什么来避免呢？其实，个人觉得没有那么糟糕，如果你觉得这样并不好，那么可以使用常规的方法来解决它：<code>utility</code> 函数/组件，下面是一个示例：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">\'light\'</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">ThemeProvider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token comment">/* code */</span><span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token function-variable function">ThemeConsumer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> ThemeContext<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n<span class="token keyword">const</span> LanguageContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">\'en\'</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">LanguageProvider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token comment">/* code */</span><span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token function-variable function">LanguageConsumer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> LanguageContext<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">AppProviders</span><span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>LanguageProvider<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ThemeProvider<span class="token operator">></span>\n        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>LanguageProvider<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">ThemeAndLanguageConsumer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>LanguageConsumer<span class="token operator">></span>\n      <span class="token punctuation">{</span>language <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>ThemeConsumer<span class="token operator">></span>\n          <span class="token punctuation">{</span>theme <span class="token operator">=></span> <span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">{</span>language<span class="token punctuation">,</span> theme<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeConsumer<span class="token operator">></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>LanguageConsumer<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">&lt;</span>AppProviders<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ThemeAndLanguageConsumer<span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span>theme<span class="token punctuation">,</span> language<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span> and <span class="token punctuation">{</span>language<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeAndLanguageConsumer<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>AppProviders<span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这里的目标是使用常见的案例，结合特殊功能的函数/组件，使案例更加 <code>工程化</code>。</p>\n<h2>总结</h2>\n<p>正如上面所说的，我对这个 <code>API</code> 充满了期待。目前暂未发布，但应该会包含在下一个 <code>minor</code> 版本中。不同担心，之前的 <code>API</code> 会继续正常工作，直到下一个 <code>major</code> 版本发布，所以，每个人都有时间迁移。还有不要忘了，<code>React</code> 团队在 <code>Facebook</code> 有超过 <code>50,000</code> 个 <code>React components</code> 需要维护，所以，将来很有可能会发布一个 <code>codemod</code> 去自动更新大多数人的代码（就像以往一样）。</p>',fields:{slug:"/2018-02-01-fan-yi-react-yao-chu-xin-contextapi-liao/"},frontmatter:{title:"【翻译】React 要出新 Context API 了",date:"2018-02-01",catalog:"前端",author:"枫上雾棋"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-02-01-fan-yi-react-yao-chu-xin-contextapi-liao/"},frontmatter:{title:"【翻译】React 要出新 Context API 了"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-02-01-fan-yi-react-yao-chu-xin-contextapi-liao/"}}}});
//# sourceMappingURL=path---2018-02-01-fan-yi-react-yao-chu-xin-contextapi-liao-2d0620f745ccdfd36a06.js.map