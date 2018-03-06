webpackJsonp([0x6aaaa334ca96],{533:function(e,A){e.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-fd5b12d1c4ba0dec60d4819f25a4fc0e-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGvQkvgg5b/xAAbEAEAAQUBAAAAAAAAAAAAAAABEQACAwQQMv/aAAgBAQABBQLEQqwXFavnn//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwHVBZ//xAAXEQEAAwAAAAAAAAAAAAAAAAABAhAR/9oACAECAQE/AYurX//EABYQAAMAAAAAAAAAAAAAAAAAAAERIP/aAAgBAQAGPwJiv//EABwQAQACAQUAAAAAAAAAAAAAAAEAMRBBUXGRsf/aAAgBAQABPyG9hHe4RpfEQa9Qes//2gAMAwEAAgADAAAAENfP/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEQ/9oACAEDAQE/EGw0z//EABgRAAIDAAAAAAAAAAAAAAAAAAERECEx/9oACAECAQE/EGAUHkf/xAAaEAEAAwADAAAAAAAAAAAAAAABABFhECEx/9oACAEBAAE/EOhTABcOwYAGoIVDqgUaLtebz//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="下一代通信协议：QUIC"\n        title=""\n        src="/static/header-fd5b12d1c4ba0dec60d4819f25a4fc0e-d6978.jpeg"\n        srcset="/static/header-fd5b12d1c4ba0dec60d4819f25a4fc0e-527f0.jpeg 300w,\n/static/header-fd5b12d1c4ba0dec60d4819f25a4fc0e-9a7cd.jpeg 600w,\n/static/header-fd5b12d1c4ba0dec60d4819f25a4fc0e-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>在 HTTP 协议已经占据互联网大半江山的今天，尽管网速越来越快，但是人类还是致力于将网络传输速率提升到极致。</p>\n<p>从 HTTP/1.x 到 HTTP/2，TCP 已经不能满足人类贪婪的欲望了，他们开始向常年被忽视的 UDP 进军。</p>\n</blockquote>\n<h1>QUIC 是什么？</h1>\n<p>QUIC（Quick UDP Internet Connections），直译过来就是“快速的 UDP 互联网连接”，是 Google 基于 UDP 提出的一种改进的通信协议，作为传统 HTTP over TCP 的替代品，开源于 Chromium 项目中。</p>\n<p>为了加快 TCP 的传输效率，Google 提出了 BBR 拥塞控制算法，将 TCP 的性能发挥到了极致。由于 TCP 和 UDP 协议是系统内核实现的，要提出新的协议不是不行，只是普及起来会非常困难，就连 BBR 算法，都需要更新系统内核才能支持。那么，TCP 的性能已经到了极致，还能更快吗？</p>\n<p>UDP 相比于 TCP，没有那么多的要求，只要将数据发出去就行了，不需要考虑数据是否送达了、不需要考虑数据的到达顺序、不需要考虑数据的正确性和完整性，所以效率比 TCP 要高出几个档次。</p>\n<p>UDP 协议曾经被普遍用于视频直播、网络游戏之类实时性要求较高的应用，即使少数几个包没有送达对应用整体的影响也不大。可是，对于 HTTP 之类的协议，是需要保证数据的正确性、完整性的，所以 UDP 本身并不适合作为 TCP 的替代品。</p>\n<p>UDP 不适合替代 TCP 是因为它本身不对数据进行校验，那么如果将数据校验放到其他地方去实现，是不是就可以使用 UDP 了呢？</p>\n<p>于是，QUIC 就诞生了，它汇集了 TCP 和 UDP 的优点，使用 UDP 来传输数据以加快网络速度，降低延迟，由 QUIC 来保证数据的顺序、完整性和正确性，即使发生了丢包，也由 QUIC 来负责数据的 <strong><em>纠错</em></strong>。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/quic-layers-7165fa0549eda29019818e2a83d915e7-d48b2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 526px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 47.71863117870723%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABrElEQVQoz6WQ70/aQBjH+7+bmKmZMqCtRNDNrSZiNrLo9mKZEpUINk5+nQJFaZE6oTAmlN5de9zdTirG93vyzeX7PM997nlyEmOMTokQ50925qf8VVAqqiz0jD2lIsJUQoMivttCd5pdTjjXKXKvedYn4o/C9pT4bjvjtnYqJ3LpON7Qk6itTbr58CUJ9nLEfItN+f5i0SkvM1uBtzGChiEcBPi0un0MkoeljWwldVROZivrV2Z2xlLJ656hmzXvRrH05T6I+JbqNuVgDuMAH4D0t0b68+X2Vlb93tjLgI+6mXuGxQ6T5qp3qw5AZFh7h0xlZChzmOEA7lfT+7XdTFnb+/Xh4Dr9pfoKRs7Z1Irwbup3cWVsRPnDBjbVl7UJ8YtAK9U39UryZz5eqr+/AImWdfoMu92C21iDrcSoLo8NBbZUMdnt6XAI4J+q17+cNNeJpY5rUavwxjcTuBlx7R+ztcTk3gk1l7gd53aMd6JzrUJj8REsCEM7USEmug8y7cRoe8Wzv9IZLWG3g3o53D9H/YIQDjU4f1FYFCd08uIadnLorxH+iMT/I/4BQG0OXPd4iIcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="QUIC 的位置"\n        title=""\n        src="/static/quic-layers-7165fa0549eda29019818e2a83d915e7-d48b2.png"\n        srcset="/static/quic-layers-7165fa0549eda29019818e2a83d915e7-68a47.png 300w,\n/static/quic-layers-7165fa0549eda29019818e2a83d915e7-d48b2.png 526w"\n        sizes="(max-width: 526px) 100vw, 526px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>现在，Google 旗下的部分服务（比如 GMail）以及许多接口已经开始使用 QUIC 协议了。如果你使用的是 Chrome 浏览器，可以在浏览器的这个地址：<a href="chrome://net-internals/#quic">chrome://net-internals/#quic</a> 看到 QUIC 的连接情况。 </p>\n<h1>QUIC 的优点</h1>\n<p>由于 TCP、UDP 协议是系统内核实现的，更新修改起来并不很方便，而 QUIC 是软件层面实现的，更新迭代起来非常方便。</p>\n<p>UDP 本身是无序传输的，这在单个连接上并行传输多个数据有天生的优势：多个数据直接发送即可，由 QUIC 对收到的数据进行重新组合排序，然后送往上层应用。这中间不用等待各种数据确认包，效率非常高。</p>\n<p>在建立 TCP 连接时，需要进行至少三次握手，如果要开启 TLS 加密，则还需要进行 TLS 握手。而 QUIC 采用了类似于 TCP Fast Open 的技术，如果之前连接过，那么之后可以不用重复握手而直接开始传送数据，以实现 0-RTT 往返时延。即便之前没有连接过，也可以在 1-RTT 内完成连接并开始传送数据。并且自身就拥有与 TLS 等效的加密措施。</p>\n<p>在发生丢包时，TCP 会重传丢失的包。而 QUIC，则使用了一种非常神奇的前向纠错算法，通过连续的几个数据包的校验和，可以直接恢复出丢失的包内容，而不需要重传。</p>\n<p>在移动端表现更好：用户的网络环境并不稳定，Wi-Fi、4G、3G、2G 之间来回变化，IP 一旦发生变化，TCP 的连接是不可能保持的。而 QUIC 就不存在这样的问题，通过 ID 来标识用户（而不是 IP + 端口），在连接切换后直接恢复之前的连接会话。</p>\n<p>配合 HTTP/2 API 食用更佳：由于 HTTP/2 采用二进制帧传输机制，QUIC 直接使用这样的机制进行数据传输，效率更高！</p>\n<h1>QUIC 的缺点</h1>\n<p>现在很多网络运营商会降低 UDP 包的优先级，使得 UDP 丢包率特别高。（QUIC 不可用时，浏览器一般会 Fallback 到 TCP）</p>\n<p>目前只有 Chrome、Opera 浏览器支持。</p>\n<h1>什么时候更适合使用 QUIC？</h1>\n<ul>\n<li>移动端\n由于 QUIC 并不使用 IP + 端口来标识客户身份，而是使用 ID，这使得在网络环境切换后还可以保持连接，非常适合用在移动网站上面，在手机信号不稳定的情况下，TCP + TLS 的开销是非常大的！QUIC 的 0-RTT 可以极大限度地提升访问速度。</li>\n</ul>\n<h1>总结</h1>\n<p>QUIC 实现的目标，就是利用 UDP 实现一个 TCP，支持 TCP 的所有特性，并且比 TCP 更快更好用。</p>\n<p>QUIC 是从 2012 年开始的项目，到目前也还只是草案阶段，并且同样处于草案阶段的 TLS1.3 也同样拥有了 QUIC 中的很多优点（比如 0-RTT）。对于访问速度的优化方式越来越多，适当的选择可以为网站增色许多。</p>',fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC",date:"2018-01-19",catalog:"科普",author:"jinliming2"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-02-01-fan-yi-react-yao-chu-xin-contextapi-liao/"},frontmatter:{title:"【翻译】React 要出新 Context API 了"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"}}}});
//# sourceMappingURL=path---2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic-5fae451034ff0299756a.js.map