webpackJsonp([23749255731929],{681:function(e,t){e.exports={data:{site:{siteMetadata:{title:"创宇前端 - 最酷开发者的技术分享",author:"KnownsecFED",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-10-22-yi-reactnative-yu-ios-jiao-hu/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-3e0feaadc47f7d20114110e4586e985a-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EABYBAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAAB5Mrs6oP/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAEFAl//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAEBAQAAAAAAAAAAAAAAAAAxACD/2gAIAQEABj8CZz//xAAZEAADAAMAAAAAAAAAAAAAAAAAAREgUZH/2gAIAQEAAT8hiEWg+4f/2gAMAwEAAgADAAAAEDTv/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Qp//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/EIf/xAAbEAEAAgIDAAAAAAAAAAAAAAABABEgIVFh4f/aAAgBAQABPxASrBrhh5zADpOxh//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="[译]React Native与ios交互"\n        title=""\n        src="/static/header-3e0feaadc47f7d20114110e4586e985a-d6978.jpeg"\n        srcset="/static/header-3e0feaadc47f7d20114110e4586e985a-527f0.jpeg 300w,\n/static/header-3e0feaadc47f7d20114110e4586e985a-9a7cd.jpeg 600w,\n/static/header-3e0feaadc47f7d20114110e4586e985a-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h1>原生和RN混合开发中的交互</h1>\n<h2>原生加载RN</h2>\n<ol>\n<li>\n<p>RN 端\n创建好React Native 项目后，项目中创建了 index.ios.js 的js文件，这是RN中iOS的js端入口文件，我们可以在里边添加代码如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>import React, { Component } from \'react\';\nimport { AppRegistry, View, Text} from \'react-native\';\nclass HelloWorldCp extends Component {\n    render() {\n       return (\n        <View style={{flex:1 , justifyContent: \'center\', alignItems: \'center\'}}>\n          <Text>Hello world!</Text>\n        </View>\n     );\n  }\n}\nAppRegistry.registerComponent(\'HelloWorldCp\', () => HelloWorldCp);</code></pre>\n      </div>\n</li>\n</ol>\n<p>在这里，我们创建了一个 HelloWorldCp 的React组件，并用 AppRegistry.registerComponent注册了该组件，这样原生系统才可以使用该组件。在组件里，我们在默认的 render() 方法中输出了默认的view，view下包含了一个 “Hello World!” 的标签。对于view，设置了一个style，大意是将view下的 标签置于View的中央。</p>\n<ol start="2">\n<li>\n<p>ios 端\n接下来的事情便是在原生UI中将这个组件显示出来，我们需要用到React容器类RCTRootView。加载代码如下:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];\nRCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation\n                                                moduleName:@"HelloWorldCp"\n                                         initialProperties:nil\n                                             launchOptions:nil];\nUIViewController *vc = [[UIViewController alloc] init];\nvc.view = rootView;\n[self.navigationController pushViewController:vc animated:YES];</code></pre>\n      </div>\n</li>\n</ol>\n<p>看代码可知，首先我们初始化了一个 NSURL 对象，它指向本地 JS 的调试服务地址，以供 RCTRootView 初始化时使用。RCTRootView 用来承载 JS 特定的组件，在原生下可\n以当做普通的 UIView 来进行处理，如添加到 superview，设置frame等操作。初始化时第一个参数为 JS 文件的服务器地址，moduleName 是 React 中注册好的组件，\ninitialProperties 接收一个字典，用来 传递参数给 JS，最后一个则是启动项参数。在这里，我们加载了上面创建的 HelloWorldCp 组件。最后将初始化的 RCTRootView 设\n置成新页面的根view并展示。</p>\n<ol start="3">\n<li>初始化RCTRootView数据传递</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>      NSDictionary *param = @{@"scores" :@[\n                                     @{@"name" : @"Alex",@"value": @"42"},\n                                     @{@"name" : @"Joel",@"value": @"10"},\n                                     @{@"name" : @"Zona",@"value": @"20"}\n                                    ]\n                        };\n\n      NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];\n      RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation\n                                                    moduleName:@"ParamPassCp"\n                                             initialProperties:param\n                                                 launchOptions:nil];\n\n      UIViewController *vc = [[UIViewController alloc] init];\n      vc.view = rootView;\n      [self.navigationController pushViewController:vc animated:YES];</code></pre>\n      </div>\n<p>相比于上面 Hello World的例子，这里初始化了一个字典，存储了一些名字及对应的分数,并在 RCTRootView 初始化的时候作为 initialProperties 的参数进行传递。\nRN 接收参数代码如下:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>        class ParamPassCp extends React.Component {\n         render() {\n             var contents = this.props["scores"].map(\n             score => <Text key={score.name}>{score.name}:{score.value}{"\\n"}</Text>\n          );\n            return (\n             <View style={styles.container}>\n                <Text style={styles.highScoresTitle}>\n                    {contents}\n                </Text>\n             </View>\n            );\n           }\n        }</code></pre>\n      </div>\n<h2>RN调用原生</h2>\n<p>要想让iOS类内的方法能够被RN调用，类比RN端的组件注册，iOS端同样需要注册该类。首先便需要原生类实现协议：RCTBridgeModule，实现该协议的类，会自动注册到Object-C对应的Bridge中。所以定义可以让RN调用的类可以这样写：\n​      </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>         #import "RCTBridgeModule.h"\n         @interface RNIOSLog : NSObject<RCTBridgeModule>\n         @end</code></pre>\n      </div>\n<p>所有实现 RCTBridgeModule 的类都必须显示的使用宏命令:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>         @implementation RNIOSLog\n         RCT_EXPORT_MODULE();\n         @end</code></pre>\n      </div>\n<p>该宏的作用是:自动为该类注册为JS端的模块,当Object-c Bridge加载的时候。这个类注册的模块可以被JavaScript Bridge调用。当然该宏可以接受一个参数作为注册的模块名，默认值是该类的名称。注册完模块之后，还需要注册模块下需要暴露给JS的方法。此外，暴露出的方法返回值必须为void。\n​      </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>        RCT_EXPORT_METHOD(show:(NSString *)msg){\n          NSLog(@"msg:%@",msg);\n        }</code></pre>\n      </div>\n<p>原生的模块方法注册好之后，JS端代码如下:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>      import {NativeModules} from "react-native";\n      var RNIOSLog = NativeModules.RNIOSLog;\n\n      class RNLogCp extends Component {\n           render() {\n              return (\n                  <View style={styles.container}>\n            \n                      <TouchableHighlight onPress={()=>RNIOSLog.show(\'from react native\')}\n                                    style={styles.btn}>\n                        <Text>showLog</Text>\n                        \n                  </TouchableHighlight>\n                \n                  </View>\n                );\n            }\n        }</code></pre>\n      </div>\n<h2>原生调用RN</h2>\n<p>   该类需要继承自 RCTEventEmitter，如下:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>       #import "RCTEventEmitter.h"  \n       @interface CallRNTest : RCTEventEmitter<RCTBridgeModule>\n       @end</code></pre>\n      </div>\n<p>然后在 .m 文件中，在子类中为父类 RCTEventEmitter 的 bridge 生成 set/get方法，并使用用于导出模块的宏。</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>    @implementation CallRNTest\n      @synthesize bridge = _bridge;\n       RCT_EXPORT_MODULE();\n    @end\n    -(NSArray<NSString *> *)supportedEvents{\n        return @[@"callRn"];\n     }\n     -(void)nativeCallRn:(NSString*)code result:(NSString*) result\n         {\n            [self sendEventWithName:@"callRn"\n                 body:@{\n                        @"code": code,\n                        @"result": result,\n                        }];\n      }</code></pre>\n      </div>\n<p>js端代码</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>    import { ...  NativeModules,  NativeEventEmitter} from \'react-native\';  \n    var CallRNTest = NativeModules.CallRNTest;\n    const myNativeEvt = new NativeEventEmitter(CallRNTest);\n    componentWillMount() {\n        this.listener = myNativeEvt.addListener(\'callRn\', this.callRn.bind(this));  \n    }\n     componentWillUnmount() {\n     this.listener && this.listener.remove(); \n     this.listener = null;\n    }\n    callRn(data) {\n      console.warn(data.code, data.result);\n    }</code></pre>\n      </div>',fields:{slug:"/2018-10-22-yi-reactnative-yu-ios-jiao-hu/"},frontmatter:{title:"【译】React Native与ios交互",date:"2018-10-22",catalog:"开发干货",author:"滴答答"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in/kaggle数据实验入门之泰坦尼克号/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/howToWrite/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2019-01-04-heretic-judger-2/"},frontmatter:{title:"异端审判器！一个泛用型文本聚类模型的实现（2）"}}},{node:{fields:{slug:"/2018-12-28-ye-xu-ni-dui-fetch-liao-jie-de-bu-shi-na-mo-duo-er/"},frontmatter:{title:"也许你对Fetch了解得不是那么多（二)"}}},{node:{fields:{slug:"/2018-12-28-ye-xu-ni-dui-fetch-liao-jie-de-bu-shi-na-mo-duo-yi/"},frontmatter:{title:"也许你对Fetch了解得不是那么多(一)"}}},{node:{fields:{slug:"/2018-12-13-css-lie-biao-xiang-bu-ju-ji-qiao/"},frontmatter:{title:"CSS 列表项布局技巧"}}},{node:{fields:{slug:"/2018-12-04-ren-gong-zhi-zhang-ye-shua-ti-kaggle-ru-men-zhi-shi-zhan-tai-tan-ni-ke-hao/"},frontmatter:{title:"人工智障也刷题！Kaggle入门之实战泰坦尼克号"}}},{node:{fields:{slug:"/2018-11-16-yi-5-ge-zui-xin-de-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【译】5 个最新的用户体验设计趋势"}}},{node:{fields:{slug:"/2018-10-23-reactfiber/"},frontmatter:{title:"React Fiber"}}},{node:{fields:{slug:"/2018-10-22-yi-reactnative-yu-ios-jiao-hu/"},frontmatter:{title:"【译】React Native与ios交互"}}},{node:{fields:{slug:"/2018-10-11-yi-ni-er-duo-li-you-tiao-yu/"},frontmatter:{title:"【译】你耳朵里有条鱼"}}},{node:{fields:{slug:"/2018-10-07-dapp-dev-practice/"},frontmatter:{title:"区块链上编程：DApp 开发实践"}}},{node:{fields:{slug:"/2018-10-05-ni-ting-shuo-guo-yuan-sheng-html-zu-jian-ma/"},frontmatter:{title:"你听说过原生 HTML 组件吗？"}}},{node:{fields:{slug:"/2018-09-28-yong-huo-zhuo-de-cnn-jin-hang-yan-zheng-ma-shi-bie/"},frontmatter:{title:"用“活着的”CNN进行验证码识别"}}},{node:{fields:{slug:"/2018-09-27-yi-chao-shi-yong-7-ge-you-xiu-de-ui-jiao-hu-dong-hua-ji-qiao/"},frontmatter:{title:"【译】超实用！7 个优秀的 UI 交互动画技巧"}}},{node:{fields:{slug:"/2018-09-25-guan-yu-http2-de-yan-jiu/"},frontmatter:{title:"关于 HTTP2 的研究"}}},{node:{fields:{slug:"/2018-09-25-yi-android-lu-jing-dong-hua/"},frontmatter:{title:"【译】Android 路径动画"}}},{node:{fields:{slug:"/2018-09-25- heretic-judger-1/"},frontmatter:{title:"异端审判器！一个泛用型文本聚类模型的实现（1）"}}},{node:{fields:{slug:"/2018-09-25-wo-men-ying-gai-zuo-xie-li-suo-neng-ji-de-you-hua/"},frontmatter:{title:"我们应该做些力所能及的优化"}}},{node:{fields:{slug:"/2018-09-25-twenty-to-fifty-years-programming/"},frontmatter:{title:"【译】有哪些事情是编程 20 到 50 多年后才知道的？"}}},{node:{fields:{slug:"/2018-08-24-mongodb-shi-wu/"},frontmatter:{title:"认识 MongoDB 4.0 的新特性——事务（Transactions）"}}},{node:{fields:{slug:"/2018-09-19-yi-yu-yong-hu-lian-xi-zai-wang-ye-she-ji-zhong-rong-ru-you-mo/"},frontmatter:{title:"【译】与用户联系：在网页设计中融入幽默"}}},{node:{fields:{slug:"/2018-09-19-yi-ru-he-she-ji-geng-hao-de-shu-ju-biao/"},frontmatter:{title:"【译】如何设计更好的数据表"}}},{node:{fields:{slug:"/2018-09-13-yi-dao-shi-jian-xun-huan-ti-yin-fa-de-xie-an/"},frontmatter:{title:"一道事件循环题引发的血案"}}},{node:{fields:{slug:"/2018-09-12-qian-duan-gong-cheng-hua-jiao-shou-jia/"},frontmatter:{title:"前端工程化：脚手架"}}},{node:{fields:{slug:"/2018-09-12-qian-tan-vue-zhong-computed-shi-xian-yuan-li/"},frontmatter:{title:"浅谈 Vue 中 computed 实现原理"}}},{node:{fields:{slug:"/2018-09-11-http-de-qian-shi-jin-sheng/"},frontmatter:{title:"HTTP 的前世今生"}}},{node:{fields:{slug:"/2018-08-31-jian-shu-da-shu-ju-shi-shi-chu-li-kuang-jia/"},frontmatter:{title:"简述大数据实时处理框架"}}},{node:{fields:{slug:"/2018-08-22-shen-ru-promise/"},frontmatter:{title:"深入Promise"}}},{node:{fields:{slug:"/2018-08-13-tcp-lian-jie-ji-chang-jian-gong-ji-shou-fa-fen-xi/"},frontmatter:{title:"要点梳理：TCP连接及常见攻击手法分析"}}},{node:{fields:{slug:"/2018-08-13-ran-bing-luan-bf-ke-pu-bf-jie-shi-qi-de-js-shi-xian/"},frontmatter:{title:"然并卵：BF 科普 & BF 解释器的 JS 实现"}}},{node:{fields:{slug:"/2018-08-10-dapp-kai-fa-jian-jie/"},frontmatter:{title:"DApp 开发简介"}}},{node:{fields:{slug:"/2018-08-09-shi-lian-zhi-shi-performance/"},frontmatter:{title:"试炼之石-Performance"}}},{node:{fields:{slug:"/2018-08-09-prolog/"},frontmatter:{title:"那迷人的被遗忘的语言：Prolog"}}},{node:{fields:{slug:"/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/"},frontmatter:{title:"悄悄掀起 WebAssembly 的神秘面纱"}}},{node:{fields:{slug:"/2018-04-16-fan-yi-2018-nian-12-zhong-yi-dong-duan-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【翻译】2018 年 12 种移动端用户体验设计趋势"}}},{node:{fields:{slug:"/2018-04-08-fan-yi-mei-ge-uiux-she-ji-shi-du-xu-yao-zhi-dao-de-xin-li-xue-yuan-li/"},frontmatter:{title:"【翻译】每个 UI / UX 设计师都需要知道的心理学原理"}}},{node:{fields:{slug:"/2018-04-07-fan-yi-yan-fa-ren-yuan-de-sheng-chan-li-shi-fou-ke-yi-liang-hua/"},frontmatter:{title:"【翻译】研发人员的生产力是否可以量化"}}},{node:{fields:{slug:"/2018-04-01-fan-yi-jie-he-tu-xing-he-yu-yin-jie-mian-ti-gong-geng-hao-de-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】结合图形和语音界面，提供更好的用户体验"}}},{node:{fields:{slug:"/2018-03-31-fan-yi-http1-dao-http2-de-yan-bian-ru-he-gai-bian-liao-web/"},frontmatter:{title:"【译】HTTP1 到 HTTP 2 的演变如何改变了 web"}}},{node:{fields:{slug:"/2018-03-28-shui-dong-liao-wo-de-dom/"},frontmatter:{title:"谁动了我的 DOM？！"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-wei-kai-yuan-ruan-jian-she-ji/"},frontmatter:{title:"【翻译】为开源软件设计"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-nodejstwofactor-shen-fen-ren-zheng/"},frontmatter:{title:"【译】node.js Two-Factor 身份认证"}}},{node:{fields:{slug:"/2018-03-25-react-server-side-render-with-hapi/"},frontmatter:{title:"服务端渲染和静态化"}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/"},frontmatter:{title:"如何写一个高逼格 README"}}},{node:{fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码"}}},{node:{fields:{slug:"/2018-03-22-wu-xian-wang-luo-ling-lei-xiu-tan/"},frontmatter:{title:"无线网络另类嗅探"}}},{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-16-yuan-chuang-ji-yu-babylonjs-shi-xian-3d-da-ji-xiao-guo/"},frontmatter:{title:"基于 Babylon.js 实现 3D 打击效果"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【译】让我们从零开始编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南——用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)——白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-10-22-yi-reactnative-yu-ios-jiao-hu/"}}}});
//# sourceMappingURL=path---2018-10-22-yi-reactnative-yu-ios-jiao-hu-f0ae97cffaac192bb949.js.map