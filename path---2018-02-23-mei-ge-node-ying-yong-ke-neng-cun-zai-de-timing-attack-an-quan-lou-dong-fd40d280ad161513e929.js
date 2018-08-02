webpackJsonp([0xa2972b0e2d78],{589:function(n,a){n.exports={data:{site:{siteMetadata:{title:"创宇前端 | 最酷开发者的技术分享",author:"KnownsecFED",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-b6620fa1c67ec6dc84e727023c85be4d-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAHcQUVZJrH/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIQIf/aAAgBAQABBQLhJUKdZ//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/AUf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwFK/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERIP/aAAgBAQAGPwIdhFj/xAAcEAEBAAEFAQAAAAAAAAAAAAABEQAQITFBUZH/2gAIAQEAAT8hkFn3EME+YgUk731bec//2gAMAwEAAgADAAAAEDzP/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxBOyNv/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QVx//xAAbEAEBAAMAAwAAAAAAAAAAAAABEQAhMUFRkf/aAAgBAQABPxBHRMOxkUAYht+5WAKqrr5xV6uGnWsQanXvP//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="每个 node 应用可能存在的 timing-attack 安全漏洞"\n        title=""\n        src="/static/header-b6620fa1c67ec6dc84e727023c85be4d-d6978.jpeg"\n        srcset="/static/header-b6620fa1c67ec6dc84e727023c85be4d-527f0.jpeg 300w,\n/static/header-b6620fa1c67ec6dc84e727023c85be4d-9a7cd.jpeg 600w,\n/static/header-b6620fa1c67ec6dc84e727023c85be4d-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>前言</h2>\n<p>假如你在项目中遇到过 eslint 报错 <span style="color: red;">Potential timing attack</span> ，不可忽视！这是一个涉及到安全的问题：时序攻击。</p>\n<h2>eslint 报错原因</h2>\n<ul>\n<li>首先<code>eslint</code>引入了一个叫做<code>eslint-plugin-security</code>的插件，这个插件有助于识别出潜在的安全问题，但同时也会产生误报的问题，附上插件 <a href="https://github.com/nodesecurity/eslint-plugin-security/blob/master/rules/detect-possible-timing-attacks.js">源码地址</a>。</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token keyword">var</span> keywords <span class="token operator">=</span> <span class="token string">\'((\'</span> <span class="token operator">+</span> <span class="token punctuation">[</span>\n    <span class="token string">\'password\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'secret\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'api\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'apiKey\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'token\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'auth\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'pass\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'hash\'</span>\n  <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\')|(\'</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'))\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">var</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">\'^\'</span> <span class="token operator">+</span> keywords <span class="token operator">+</span> <span class="token string">\'$\'</span><span class="token punctuation">,</span> <span class="token string">\'im\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">containsKeyword</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">\'Identifier\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span>\n  <span class="token punctuation">}</span>\n\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>test<span class="token punctuation">.</span>operator <span class="token operator">===</span> <span class="token string">\'==\'</span> <span class="token operator">||</span> node<span class="token punctuation">.</span>test<span class="token punctuation">.</span>operator <span class="token operator">===</span> <span class="token string">\'===\'</span> <span class="token operator">||</span> node<span class="token punctuation">.</span>test<span class="token punctuation">.</span>operator <span class="token operator">===</span> <span class="token string">\'!=\'</span> <span class="token operator">||</span> node<span class="token punctuation">.</span>test<span class="token punctuation">.</span>operator <span class="token operator">===</span> <span class="token string">\'!==\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 在这里 console 出错误</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>首先这个插件会判断本次的运算符是否为 <code>==、===、！=、！==</code>其中一种，其次检查标识符（字段名）是否包含特殊字符串<code>password、secret、api、apiKey、token、auth、pass、hash</code>，如果同时满足二者情况，eslint 就会编译报错 <span style="color: red;">Potential timing attack</span>。</p>\n<h2>攻击定义</h2>\n<p><code>timing attack</code>：时序攻击，属于侧信道攻击 / 旁路攻击，侧信道攻击指的是利用信道外的信息，比如加解密的数据、数据比较时间、密文传输的流量和途径进行攻击的方式，相当于是“旁敲侧击”。</p>\n<h3>攻击点</h3>\n<ul>\n<li>\n<p>首先讲讲<code>js</code>比较两个字符串大小的原理：</p>\n<ul>\n<li>判断字符串长度是否为<code>0</code>，如果为<code>0</code>，就可以直接比较出结果；反之，进入到第二步。</li>\n<li>字符串是由一个个字符组成，通过每个字符的<code>charCode</code>进行比较。</li>\n<li>在第二步中，只要出现一个字符不同，就 <code>return false</code>，剩余的字符不再做比较。</li>\n</ul>\n</li>\n<li>\n<p>单个字符的比较是很快的，攻击者可以细化测量时间精度到微秒，通过响应时间的差异推算出是从哪一个字符开始不用的，这样一次次实验或者用 Python 写个脚本去跑，就可以试出正确的密码，密码破解的难度也降低了不少。</p>\n</li>\n</ul>\n<h4>容易受攻击的写法</h4>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>password <span class="token operator">===</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> state<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 登录成功</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>防御措施</h3>\n<p>每次不同的输入会造成处理时间的不同。为了防止它，我们需要使字符串比较花费相同的时间量，无论输入的密码是什么。</p>\n<h4>不容易受攻击的写法</h4>\n<p>系统中每一个密码的长度是固定的，每次比较密码是否相同时，使用正确密码的长度作为比较次数，使用异或比较每一个字符的 Unicode 编码是否相等，并且把每一次的比较结果存放到一个数组中，最后再判断数组的每一个元素是否为<code>0（为 0 表示两个字符相同）</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token comment">// psdReceived 为用户输入密码；</span>\n  <span class="token comment">// psdDb 为系统中存储的正确用户密码</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">correctUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span>psdDb<span class="token punctuation">,</span> psdReceived<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> psdDb<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>psdReceived<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        state<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        state<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>psdReceived<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">^</span> psdDb<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> state<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> state<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token operator">!</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>三方包推荐</h4>\n<p>也可以使用 <a href="https://github.com/hapijs/cryptiles">cryptiles</a> 这个 npm 模块来解决这个问题</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> cryptiles <span class="token keyword">from</span> <span class="token string">\'cryptiles\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span><span class="token operator">...</span>\n<span class="token keyword">return</span> cryptiles<span class="token punctuation">.</span><span class="token function">fixedTimeCimparison</span><span class="token punctuation">(</span>passwordFromDb<span class="token punctuation">,</span> passwordReceived<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>',fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞",date:"2018-02-23",catalog:"前端",author:"cuitfanshide"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/howToWrite/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2018-04-16-fan-yi-2018-nian-12-zhong-yi-dong-duan-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【翻译】2018 年 12 种移动端用户体验设计趋势"}}},{node:{fields:{slug:"/2018-04-08-fan-yi-mei-ge-uiux-she-ji-shi-du-xu-yao-zhi-dao-de-xin-li-xue-yuan-li/"},frontmatter:{title:"【翻译】每个 UI / UX 设计师都需要知道的心理学原理"}}},{node:{fields:{slug:"/2018-04-07-fan-yi-yan-fa-ren-yuan-de-sheng-chan-li-shi-fou-ke-yi-liang-hua/"},frontmatter:{title:"【翻译】研发人员的生产力是否可以量化"}}},{node:{fields:{slug:"/2018-04-01-fan-yi-jie-he-tu-xing-he-yu-yin-jie-mian-ti-gong-geng-hao-de-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】结合图形和语音界面，提供更好的用户体验"}}},{node:{fields:{slug:"/2018-03-31-fan-yi-http1-dao-http2-de-yan-bian-ru-he-gai-bian-liao-web/"},frontmatter:{title:"【翻译】HTTP1 到 HTTP 2 的演变如何改变了 web"}}},{node:{fields:{slug:"/2018-03-28-shui-dong-liao-wo-de-dom/"},frontmatter:{title:"谁动了我的 DOM??!"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-wei-kai-yuan-ruan-jian-she-ji/"},frontmatter:{title:"【翻译】为开源软件设计"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-nodejstwofactor-shen-fen-ren-zheng/"},frontmatter:{title:"【翻译】node.js Two-Factor 身份认证"}}},{node:{fields:{slug:"/2018-03-25-react-server-side-render-with-hapi/"},frontmatter:{title:"服务端渲染和静态化"}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/"},frontmatter:{title:"如何写一个高逼格 README"}}},{node:{fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码"}}},{node:{fields:{slug:"/2018-03-22-wu-xian-wang-luo-ling-lei-xiu-tan/"},frontmatter:{title:"无线网络另类嗅探"}}},{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【翻译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【翻译】让我们从零开始变编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【翻译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"}}}});
//# sourceMappingURL=path---2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong-fd40d280ad161513e929.js.map