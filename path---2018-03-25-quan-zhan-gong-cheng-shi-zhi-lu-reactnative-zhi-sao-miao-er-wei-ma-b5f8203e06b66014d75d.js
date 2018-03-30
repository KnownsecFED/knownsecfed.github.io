webpackJsonp([0x81f372f6baf1],{599:function(n,a){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-9112b6e6ba9dc923931642aa14149b01-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABg0lEQVQoz3WSy0rDQBSG8xzmniZpbk1iQo1gbWhLFYrBlUXEpQuxG3HrbSU+QB/4d/7RCbXQxeHM5cw3/7log8EASZLA931YlgXHcaSPoghBEGA4HMr7OI6lua4LW8Q4wjuOWNu2fKNMy7JMBvKCPs9zCeLDNE2lSYhtIQhDJIw1DVj6ESzD6EEKrBVFAc/zQKVlWYJ7Qhmg1HFNqKnrSI5rlPMV4rM5omYC+y+rXiEfh+JnbkajkYQSxLSVQq5NYbah46RbY7p5x/T5C+P1A7wwElCzV6mxdlTxm5aNtm0xm82kp3Vdh+XyAs14jLw5w+ndIxZvWyxet5g8fSBrL3ugVMi6sY5UwtoRTtV1XUvFVVXJdSpi+Gl5dYvzzSfal2809xsERS1qugNU9SOIAEL5AT3vCFElYCOCokK+vEa5ukEi6sisVENkyrsHHBUqZk13z/txUSMiPqIq1w9k9/91WT2kEcguq5k8BDzkJZCBTI0pMzXu1ZoBqmn7A7w/f8p+AI+0J3jTOiJNAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="全栈工程师之路-React Native之扫描二维码"\n        title=""\n        src="/static/header-9112b6e6ba9dc923931642aa14149b01-d6978.jpeg"\n        srcset="/static/header-9112b6e6ba9dc923931642aa14149b01-527f0.jpeg 300w,\n/static/header-9112b6e6ba9dc923931642aa14149b01-9a7cd.jpeg 600w,\n/static/header-9112b6e6ba9dc923931642aa14149b01-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>前言</h2>\n<p>以前开发移动端页面，总会被原生开发各种嫌弃，H5性能太低，动画不流畅，身为一名小前端我能怎么办呢？总是在无人的夜里，心里默默地流泪~</p>\n<p>后来 React Native 出来以后，终于可以翻身农奴把歌唱：哈哈哈，原生的小X人们，等待我 RN 的小皮鞭吧，pia~</p>\n<p>但是那时候若是不懂点 Android 或者 iOS，完全用 RN 开发一个 App，是非常痛苦的。</p>\n<p>在尝试一段时间以后，由于实在难以忍受调教各种莫明其妙的报错，让我一度对这项新技能又爱又恨，望而生畏~</p>\n<p>但是最近由于项目上的需求又捡了起来，猛然发现，原来不知不觉间，RN 这迷人的小妖精已经成长得越发成熟了~</p>\n<p>好了废话不多说，把口水擦干净后，我们先来讲讲本次主题：如何破解一张有码的图片~</p>\n<h2>项目构建</h2>\n<h3>准备</h3>\n<p>如何读懂这张有码的图片就是我们要攻克的最大难题了，但是如果单凭我自身大脑的人工智能，我想这问题是无解了。</p>\n<p>没错，我们需要用到照相机，随手一搜<code>react-native-camera</code>。。。</p>\n<p>咦我是乱搜的，还真有这个库啊。。。再搭配<code>react-native-qrcode-scanner</code>，嗯，就是你了，和我一起拯救银河系吧~</p>\n<h3>开始工作</h3>\n<p>首先项目根目录安装三方库，通过<code>yarn add</code>命令安装相应包文件</p>\n<p>由于会用到 native 的功能，<code>react link</code>会自动向 native 模块中添加各种依赖和导包的操作。</p>\n<div class="gatsby-highlight">\n      <pre class="language-sh"><code>$ yarn add react-native-camera\n$ react-native link react-native-camera\n$ yarn add react-native-qrcode-scanner\n$ react-native link react-native-qrcode-scanner</code></pre>\n      </div>\n<p>这里我们假设点击一个小按钮，然后进入相册，扫描出这张有码的二维图后，回到小按钮页面，并弹出扫描内容。</p>\n<p>需要注意的一点是：按钮页和相册扫描是两个页面，这里我们用<code>react-navigation</code>管理路由，具体使用详见<a href="https://reactnavigation.org/">这里</a>。</p>\n<p>先看看App.js：</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> StackNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-navigation\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">\'./Home\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Scanner <span class="token keyword">from</span> <span class="token string">\'./Scanner\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Home 和 Scanner 是两个页面，点开应用后首先进入 Home</span>\n<span class="token keyword">const</span> Stack <span class="token operator">=</span> <span class="token function">StackNavigator</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  Home<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    screen<span class="token punctuation">:</span> Home<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  Scanner<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    screen<span class="token punctuation">:</span> Scanner<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Stack<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>这里的Home，<code>react-navigation</code>自动会往props上加个<code>navigation</code>属性，类似 web 开发时的 history，有 push, pop，replace等多个方法。</p>\n<p>Home.js只需要一个按钮，点击跳转至 Scanner 页即可</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\n  <span class="token comment">// react-navigation 的 StackNavigator 会自动在添加组件的 props 上添加 navigation 属性</span>\n  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    navigation<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>object<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 点击按钮时触发</span>\n  <span class="token function-variable function">scan</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">\'Scanner\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      onRead<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onRead\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 传递给下一个页面的回调函数，显示传入内容</span>\n  <span class="token function-variable function">onRead</span> <span class="token operator">=</span> <span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Toast<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>scan<span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>屠龙宝刀，点击就送<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Scanner.js 就是本次的重点了</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> QRCodeScanner <span class="token keyword">from</span> <span class="token string">\'react-native-qrcode-scanner\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Scanner</span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> goBack <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">.</span>navigation<span class="token punctuation">;</span>\n\n  <span class="token comment">// onRead 是相机扫描二维码后自动调用，首先返回上一页，然后再调用传入的回调函数，显示扫描内容</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QRCodeScanner</span>\n      <span class="token attr-name">onRead</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>e <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        state<span class="token punctuation">.</span>params<span class="token punctuation">.</span><span class="token function">onRead</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> Scanner<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>至此，所有的工作结束。</p>\n<h3>探索</h3>\n<p>依然很麻烦不是么？毕竟需要引入两个三方包呢，未来 RN 升级会不会不兼容？</p>\n<p>所以即使已给了我莫大的好处，我正义凛然的内心依然是拒绝的。</p>\n<p>等等，大侠您等一等！！！先把我脖子上的刀放下来好好说，我不是故意逗你玩的。</p>\n<p>不行，我陈D秀这次一定要站着把话说完！</p>\n<p>这里不得不说下<a href="https://expo.io/">Expo</a>，一款 RN 开发的工具链，集成并提供了 RN 开发过程中各种问题的解决方案，也是官网目前推荐方式。</p>\n<p>于是第二个文件 Scanner.js 修改一下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BarCodeScanner<span class="token punctuation">,</span> Permissions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'expo\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Scanner</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    hasCameraPermission<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    navigation<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>object<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 这里首先判定是否拥有相机权限，有我们才能正大光明的调用</span>\n  <span class="token keyword">async</span> <span class="token function">componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> status <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> Permissions<span class="token punctuation">.</span><span class="token function">askAsync</span><span class="token punctuation">(</span>Permissions<span class="token punctuation">.</span>CAMERA<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hasCameraPermission<span class="token punctuation">:</span> status <span class="token operator">===</span> <span class="token string">\'granted\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// 扫描成功自动调用，这里先返回上一页，再调用回调函数，显示扫描内容</span>\n  <span class="token function-variable function">handleBarCodeRead</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> goBack<span class="token punctuation">,</span> state <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">;</span>\n    <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    state<span class="token punctuation">.</span>params<span class="token punctuation">.</span><span class="token function">onRead</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> hasCameraPermission <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token comment">// 若无权限，提示用户</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasCameraPermission <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Requesting <span class="token keyword">for</span> camera permission<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>hasCameraPermission <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>No access to camera<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> flex<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BarCodeScanner</span>\n          <span class="token attr-name">onBarCodeRead</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleBarCodeRead<span class="token punctuation">}</span></span>\n          <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>StyleSheet<span class="token punctuation">.</span>absoluteFill<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Scanner<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>好了，圆满了。对于这智慧的结晶，我还是比较满意的，谢谢大家赞许的目光。</p>\n<h2>总结</h2>\n<p>现在使用 RN 最大的感受是，各种开发装备越发全面，当然也或许是之前并未深入学习，对这块的技术链了解太少。</p>\n<p>整个开发体验提升不止一个档次，让我再次燃起了内心征服的欲望。</p>\n<p>哈哈哈，原生的小X人们，等待着我 RN 的小皮鞭吧，pia~</p>',fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码",date:"2018-03-24",catalog:"前端",author:"景小隐"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/howToWrite/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2018-03-27-fan-yi-wei-kai-yuan-ruan-jian-she-ji/"},frontmatter:{title:"【翻译】为开源软件设计"}}},{node:{fields:{slug:"/2018-03-25-react-server-side-render-with-hapi/"},frontmatter:{title:"服务端渲染和静态化"}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/"},frontmatter:{title:"如何写一个高逼格 README"}}},{node:{fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码"}}},{node:{fields:{slug:"/2018-03-22-wu-xian-wang-luo-ling-lei-xiu-tan/"},frontmatter:{title:"无线网络另类嗅探"}}},{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【翻译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【翻译】让我们从零开始变编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【翻译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"}}}});
//# sourceMappingURL=path---2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma-b5f8203e06b66014d75d.js.map