webpackJsonp([53100542264026],{597:function(n,a){n.exports={data:{site:{siteMetadata:{title:"创宇前端 - 最酷开发者的技术分享",author:"KnownsecFED",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-9c6194cbb37b426d029505dd82111151-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB10vGYLA//8QAGhAAAgIDAAAAAAAAAAAAAAAAAAECEBESIf/aAAgBAQABBQKTwbEXy//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAABISD/2gAIAQEABj8CIVXH/8QAHBABAAICAwEAAAAAAAAAAAAAAREhABAxQVGB/9oACAEBAAE/ISEs/Mb818nEjR20hBWv/9oADAMBAAIAAwAAABB03//EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAgBAwEBPxBFdi//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QEyf/xAAaEAEBAQADAQAAAAAAAAAAAAABEQAhMUFh/9oACAEBAAE/ECaRZ4y0CeiEX7nvYKL1kEaXlxoA5PMhet//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="【Web前端简单订阅的实现】"\n        title=""\n        src="/static/header-9c6194cbb37b426d029505dd82111151-d6978.jpeg"\n        srcset="/static/header-9c6194cbb37b426d029505dd82111151-527f0.jpeg 300w,\n/static/header-9c6194cbb37b426d029505dd82111151-9a7cd.jpeg 600w,\n/static/header-9c6194cbb37b426d029505dd82111151-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>理解队列</h2>\n<p>队列是一种特殊的线性表，特殊之处在于它只允许在表的前端(front）进行删除操作，而在表的后端（rear）进行插入操作，和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头。通俗了讲队列的概念就是我们平时排队，按次序来，你排在第一个，那你就第一个轮到，就是先进先出，先到先来。\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/queue-f0706f5dca8ef90c91af104298fef78e-0d4ac.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 555px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 36.57657657657658%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAd2AsD//xAAWEAADAAAAAAAAAAAAAAAAAAAAARD/2gAIAQEAAQUCiP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABcQAAMBAAAAAAAAAAAAAAAAAAARMSH/2gAIAQEAAT8hewcIP//aAAwDAQACAAMAAAAQ88//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAADAQEBAAAAAAAAAAAAAAAAAREhUYH/2gAIAQEAAT8Qb3qwT96h77Z//9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="队列"\n        title=""\n        src="/static/queue-f0706f5dca8ef90c91af104298fef78e-0d4ac.jpg"\n        srcset="/static/queue-f0706f5dca8ef90c91af104298fef78e-d53e6.jpg 300w,\n/static/queue-f0706f5dca8ef90c91af104298fef78e-0d4ac.jpg 555w"\n        sizes="(max-width: 555px) 100vw, 555px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>实现订阅</h2>\n<p>订阅的实现很简单也有很多方式实现，现在我们就用队列的方式实现。<br>\n首先我们来创建订阅函数：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token function-variable function">createSubscript</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span>  \n</code></pre>\n      </div>\n<p>创建订阅函数功能基本的需要三点：</p>\n<ul>\n<li>订阅。</li>\n<li>推送订阅。</li>\n<li>取消订阅。</li>\n</ul>\n<p>下面我们就来依次实现他们，先创建一个数组用来存放需要执行的任务，我这里的名称叫做taskStack：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token function-variable function">createSubscript</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> taskStack<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>接下来我们来实现一下订阅功能</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token function-variable function">subscript</span> <span class="token operator">=</span> task <span class="token operator">=></span> <span class="token punctuation">{</span>\n    taskStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>是不是非常简单，这就是加入队列，当然订阅方法是要被createSubscript()方法返回的，不然创建了订阅没有方法订阅了。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token function-variable function">createSubscript</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> taskStack<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">//订阅方法</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">subscript</span> <span class="token operator">=</span> task <span class="token operator">=></span> <span class="token punctuation">{</span>\n        taskStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">return</span> <span class="token punctuation">{</span> subscript <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>我们接下来编写一个触发推送队列的方法</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token function-variable function">trigger</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    taskStack<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> task <span class="token operator">=></span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>同样我们也需要在创建订阅函数中返回出去，让订阅可以在你想需要推动的时候推送，下面是完整代码：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token function-variable function">createSubscript</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> taskStack<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// 发出推送</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">trigger</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        taskStack<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> task <span class="token operator">=></span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token comment">// 订阅方法</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">subscript</span> <span class="token operator">=</span> <span class="token punctuation">(</span>task<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        taskStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">return</span> <span class="token punctuation">{</span> trigger<span class="token punctuation">,</span> subscript <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这样订阅就基本实现了，就剩下一个功能：取消订阅，取消订阅是必须在你订阅的时候才提供，所以我们就在订阅方法里做做手脚，如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token function-variable function">subscript</span> <span class="token operator">=</span> task <span class="token operator">=></span> <span class="token punctuation">{</span>\n    taskStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// 提供取消订阅功能</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        taskStack <span class="token operator">=</span> taskStack<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span> t <span class="token operator">=></span> t <span class="token operator">!==</span> task <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这样我们的订阅就取消了，也是在订阅的前提下提供取消订阅的方法。<br>\n下面是完整代码：</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token function-variable function">createSubscript</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> taskStack<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n \n    <span class="token comment">// 发出推送</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">trigger</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      taskStack<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> task <span class="token operator">=></span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n \n    <span class="token comment">// 订阅方法</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">subscript</span> <span class="token operator">=</span> <span class="token punctuation">(</span>task<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      taskStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>\n     \n      <span class="token comment">// 提供取消订阅功能</span>\n      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        taskStack <span class="token operator">=</span> taskStack<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span> t <span class="token operator">=></span> t <span class="token operator">!==</span> task <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n \n    <span class="token keyword">return</span> <span class="token punctuation">{</span> trigger<span class="token punctuation">,</span> subscript <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>好了简单的订阅就实现了，在我们平时用的Redux中creatStore也是运用到这种订阅方式。</p>',fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现",date:"2018-01-22",catalog:"前端",author:"Pudge"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/howToWrite/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2018-10-11-yi-ni-er-duo-li-you-tiao-yu/"},frontmatter:{title:"【译】你耳朵里有条鱼"}}},{node:{fields:{slug:"/2018-10-07-dapp-dev-practice/"},frontmatter:{title:"区块链上编程：DApp 开发实践"}}},{node:{fields:{slug:"/2018-10-05-ni-ting-shuo-guo-yuan-sheng-html-zu-jian-ma/"},frontmatter:{title:"你听说过原生 HTML 组件吗？"}}},{node:{fields:{slug:"/2018-09-27-yi-chao-shi-yong-7-ge-you-xiu-de-ui-jiao-hu-dong-hua-ji-qiao/"},frontmatter:{title:"【译】超实用！7 个优秀的 UI 交互动画技巧"}}},{node:{fields:{slug:"/2018-09-25-guan-yu-http2-de-yan-jiu/"},frontmatter:{title:"关于 HTTP2 的研究"}}},{node:{fields:{slug:"/2018-09-25- heretic-judger-1/"},frontmatter:{title:"异端审判器！一个泛用型文本聚类模型的实现（1）"}}},{node:{fields:{slug:"/2018-09-25-wo-men-ying-gai-zuo-xie-li-suo-neng-ji-de-you-hua/"},frontmatter:{title:"我们应该做些力所能及的优化"}}},{node:{fields:{slug:"/2018-09-25-twenty-to-fifty-years-programming/"},frontmatter:{title:"【译】有哪些事情是编程 20 到 50 多年后才知道的？"}}},{node:{fields:{slug:"/2018-09-19-yi-yu-yong-hu-lian-xi-zai-wang-ye-she-ji-zhong-rong-ru-you-mo/"},frontmatter:{title:"【译】与用户联系：在网页设计中融入幽默"}}},{node:{fields:{slug:"/2018-09-19-yi-ru-he-she-ji-geng-hao-de-shu-ju-biao/"},frontmatter:{title:"【译】如何设计更好的数据表"}}},{node:{fields:{slug:"/2018-09-13-yi-dao-shi-jian-xun-huan-ti-yin-fa-de-xie-an/"},frontmatter:{title:"一道事件循环题引发的血案"}}},{node:{fields:{slug:"/2018-09-12-qian-duan-gong-cheng-hua-jiao-shou-jia/"},frontmatter:{title:"前端工程化：脚手架"}}},{node:{fields:{slug:"/2018-09-12-qian-tan-vue-zhong-computed-shi-xian-yuan-li/"},frontmatter:{title:"浅谈 Vue 中 computed 实现原理"}}},{node:{fields:{slug:"/2018-08-31-jian-shu-da-shu-ju-shi-shi-chu-li-kuang-jia/"},frontmatter:{title:"简述大数据实时处理框架"}}},{node:{fields:{slug:"/2018-08-22-shen-ru-promise/"},frontmatter:{title:"深入Promise"}}},{node:{fields:{slug:"/2018-08-13-tcp-lian-jie-ji-chang-jian-gong-ji-shou-fa-fen-xi/"},frontmatter:{title:"要点梳理：TCP连接及常见攻击手法分析"}}},{node:{fields:{slug:"/2018-08-13-ran-bing-luan-bf-ke-pu-bf-jie-shi-qi-de-js-shi-xian/"},frontmatter:{title:"然并卵：BF 科普 & BF 解释器的 JS 实现"}}},{node:{fields:{slug:"/2018-08-10-dapp-kai-fa-jian-jie/"},frontmatter:{title:"DApp 开发简介"}}},{node:{fields:{slug:"/2018-08-09-shi-lian-zhi-shi-performance/"},frontmatter:{title:"试炼之石-Performance"}}},{node:{fields:{slug:"/2018-08-09-prolog/"},frontmatter:{title:"那迷人的被遗忘的语言：Prolog"}}},{node:{fields:{slug:"/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/"},frontmatter:{title:"悄悄掀起 WebAssembly 的神秘面纱"}}},{node:{fields:{slug:"/2018-04-16-fan-yi-2018-nian-12-zhong-yi-dong-duan-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【翻译】2018 年 12 种移动端用户体验设计趋势"}}},{node:{fields:{slug:"/2018-04-08-fan-yi-mei-ge-uiux-she-ji-shi-du-xu-yao-zhi-dao-de-xin-li-xue-yuan-li/"},frontmatter:{title:"【翻译】每个 UI / UX 设计师都需要知道的心理学原理"}}},{node:{fields:{slug:"/2018-04-07-fan-yi-yan-fa-ren-yuan-de-sheng-chan-li-shi-fou-ke-yi-liang-hua/"},frontmatter:{title:"【翻译】研发人员的生产力是否可以量化"}}},{node:{fields:{slug:"/2018-04-01-fan-yi-jie-he-tu-xing-he-yu-yin-jie-mian-ti-gong-geng-hao-de-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】结合图形和语音界面，提供更好的用户体验"}}},{node:{fields:{slug:"/2018-03-31-fan-yi-http1-dao-http2-de-yan-bian-ru-he-gai-bian-liao-web/"},frontmatter:{title:"【译】HTTP1 到 HTTP 2 的演变如何改变了 web"}}},{node:{fields:{slug:"/2018-03-28-shui-dong-liao-wo-de-dom/"},frontmatter:{title:"谁动了我的 DOM？！"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-wei-kai-yuan-ruan-jian-she-ji/"},frontmatter:{title:"【翻译】为开源软件设计"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-nodejstwofactor-shen-fen-ren-zheng/"},frontmatter:{title:"【译】node.js Two-Factor 身份认证"}}},{node:{fields:{slug:"/2018-03-25-react-server-side-render-with-hapi/"},frontmatter:{title:"服务端渲染和静态化"}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/"},frontmatter:{title:"如何写一个高逼格 README"}}},{node:{fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码"}}},{node:{fields:{slug:"/2018-03-22-wu-xian-wang-luo-ling-lei-xiu-tan/"},frontmatter:{title:"无线网络另类嗅探"}}},{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-16-yuan-chuang-ji-yu-babylonjs-shi-xian-3d-da-ji-xiao-guo/"},frontmatter:{title:"基于 Babylon.js 实现 3D 打击效果"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【译】让我们从零开始编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南——用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)——白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"}}}});
//# sourceMappingURL=path---2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian-01dfe31b866976387b9a.js.map