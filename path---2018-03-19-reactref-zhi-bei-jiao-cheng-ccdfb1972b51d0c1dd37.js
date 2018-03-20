webpackJsonp([0x7802467faf5f],{591:function(n,s){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-03-19-reactref-zhi-bei-jiao-cheng/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-921377915f3d51f9de090e35979d9750-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBP/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAeFkG0B//8QAGRAAAwEBAQAAAAAAAAAAAAAAAAISARMR/9oACAEBAAEFAobzmxzYrSmK0//EABcRAAMBAAAAAAAAAAAAAAAAAAABERL/2gAIAQMBAT8ByiI//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bp//EABcQAAMBAAAAAAAAAAAAAAAAAAABMTL/2gAIAQEABj8CyzDMlZWVn//EABoQAAICAwAAAAAAAAAAAAAAAADxARAhMUH/2gAIAQEAAT8h1c1BPGQ2GQ2P/9oADAMBAAIAAwAAABDPP//EABYRAAMAAAAAAAAAAAAAAAAAABBxkf/aAAgBAwEBPxB1F//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAgEBPxCl1//EABkQAAMBAQEAAAAAAAAAAAAAAAABIfExEf/aAAgBAQABPxBWrewfdp9G3Gjem3N6f//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="React ref 指北教程"\n        title=""\n        src="/static/header-921377915f3d51f9de090e35979d9750-d6978.jpeg"\n        srcset="/static/header-921377915f3d51f9de090e35979d9750-527f0.jpeg 300w,\n/static/header-921377915f3d51f9de090e35979d9750-9a7cd.jpeg 600w,\n/static/header-921377915f3d51f9de090e35979d9750-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>React，Vue 等前端框架的出现之前 Web 页面交互完全依靠频繁的 Dom 操作实现，在那个刀耕火种的年代 Jquery 作为一个便捷的实现 Dom 操作的库便走上了神坛，成为了 Web 开发工程师必备技能。幸运的是 Web 2.0 时代，React 和 Vue 等前端框架利用组件状态管理避免了频繁的直接的 Dom 操作，增加了代码可读性。但 React 依然为我们提供了便捷的获取 Dom 的方法。在 React 典型的数据流里，props 是父组件控制子组件唯一的方式，要去修改一个子组件，我们通过改变 props 来使子组件重新渲染。但是在有一些场景中我们可以直接更改子组件而不通过常规的数据流，React ref 就是在这种情况下的解决方案。</p>\n<h2>我们什么时候需要使用它？</h2>\n<blockquote>\n<p>根据官方文档的定义有三种情况我们可能使用到它</p>\n</blockquote>\n<ol>\n<li>管理焦点，文本选择，或媒体播放。</li>\n<li>触发命令动画。</li>\n<li>与第三方 DOM 库集成。</li>\n</ol>\n<p>话不多少，我们首先来回顾一下，React 中几种 ref 使用的方式。</p>\n<h2>1. 字符串定义</h2>\n<blockquote>\n<p>这个方案已经不被 react 官方推荐，而且会在未来的版本中移除。</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// 在 render 函数里面</span>\n<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> defaultValue<span class="token operator">=</span><span class="token string">"First"</span> ref<span class="token operator">=</span><span class="token string">"first"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n\n<span class="token comment">// 获取 ref</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>first<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>2. 使用回调函数</h2>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// 在 render 函数里面</span>\n<span class="token operator">&lt;</span>input\n  type<span class="token operator">=</span><span class="token string">"text"</span>\n  defaultValue<span class="token operator">=</span><span class="token string">"Second"</span>\n  ref<span class="token operator">=</span><span class="token punctuation">{</span>input <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>second <span class="token operator">=</span> input<span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n\n<span class="token comment">// 获取 ref</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>second<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>3. 使用 React.createRef()</h2>\n<blockquote>\n<p>在 react 16.3 中，您将能够使用新的 React.createref() 函数使 ref 创建变得更容易。</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// 在 class 中声明</span>\nthird <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 或者在 constructor 中声明</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>third <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 在 render 函数中:</span>\n<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> defaultValue<span class="token operator">=</span><span class="token string">"Third"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>third<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n\n<span class="token comment">// 获取 ref</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>third<span class="token punctuation">.</span>current<span class="token punctuation">;</span>\n\n<span class="token comment">// 获取 input 的 value </span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>third<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>注意：我在 react@16.3.0-alpha.2 中使用 this.third.current 取到了值，但是这个 api 目前还不稳定，有的版本是通过 this.third.value 取到 dom 的引用。</p>\n<h2>如何在 HOC 中传递 ref ？</h2>\n<h3>首先我们先试一下在 HOC 中传递 ref</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">"prop-types"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> logo <span class="token keyword">from</span> <span class="token string">\'./logo.svg\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">FormSection</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fourth<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>HTMLInputElement<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> defaultValue<span class="token operator">=</span><span class="token string">"hoc"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>ref<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// HOC 工厂函数</span>\n<span class="token keyword">function</span> <span class="token function">HOCFactory</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">HOC</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token operator">&lt;</span>WrappedComponent <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>hoc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> HOCInstance <span class="token operator">=</span> <span class="token function">HOCFactory</span><span class="token punctuation">(</span>FormSection<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>HOCInstance ref<span class="token operator">=</span><span class="token string">"hoc"</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>button<span class="token operator">></span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>提交后 ref 并没有绑定到我们想要的组件上，而是被指向了 HOC 这个组件，其实如果我们了解 HOC 的原理的话，这个问题我们应该很清楚就明白了。React ref 是一个特殊的属性，它会在在组件 componentDidMount 和 componentDidUpdate 之前被触发。也就是说 ref 是不能作为 props 传递的，因为它会在组件一加载时就会触发回调函数。</p>\n<h3>解决方案</h3>\n<p>使用 React.createRef() 在 HOC 组件中绕开 ref 属性。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token operator">...</span>\n<span class="token keyword">class</span> <span class="token class-name">FormSection</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> defaultValue<span class="token operator">=</span><span class="token string">"hoc"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>myRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">HOCFactory</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token operator">...</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  hocRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>hocRef<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> HOCInstance <span class="token operator">=</span> <span class="token function">HOCFactory</span><span class="token punctuation">(</span>FormSection<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token comment">/* 通过在父组件中使用自定义的属性，从而使得属性能够传递下去。如果使用 ref 属性，将在父组件加载时就会触发回调，导致 this.hocRef 指向父组件*/</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span>HOCInstance myRef<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>hocRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>button<span class="token operator">></span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>同理我们在现有的 React 版本(@16.2.0以下)里，也可以通过回调函数在父组件中绕开 ref 属性的方式获取子组件的实例。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token operator">...</span>\n<span class="token keyword">class</span> <span class="token class-name">FormSection</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> defaultValue<span class="token operator">=</span><span class="token string">"hoc"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>myRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">HOCFactory</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token operator">...</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> e <span class="token operator">=></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>hocRef<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> HOCInstance <span class="token operator">=</span> <span class="token function">HOCFactory</span><span class="token punctuation">(</span>FormSection<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>HOCInstance myRef<span class="token operator">=</span><span class="token punctuation">{</span>el <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>hocRef <span class="token operator">=</span> el<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>button<span class="token operator">></span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>参考文档</h2>\n<p><a href="https://www.leighhalliday.com/using-refs-in-react">Using Refs in React</a></p>\n<p><a href="https://reactjs.org/docs/refs-and-the-dom.html">React 官方文档</a></p>',fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程",date:"2018-03-19",catalog:"前端",author:"阿鑫"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【翻译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【翻译】让我们从零开始变编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【翻译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"}}}});
//# sourceMappingURL=path---2018-03-19-reactref-zhi-bei-jiao-cheng-ccdfb1972b51d0c1dd37.js.map