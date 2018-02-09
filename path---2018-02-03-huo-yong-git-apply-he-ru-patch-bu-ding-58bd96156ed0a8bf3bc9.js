webpackJsonp([0x9f0c33220010],{550:function(e,t){e.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-b95af72434ea8bb9dc3d5d86aa1f3ff9-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIDBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHWjugoOJ//xAAZEAEAAgMAAAAAAAAAAAAAAAACAQMQERL/2gAIAQEAAQUCsahK19jcnP8A/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bp//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAQADAQEAAAAAAAAAAAAAAAEAAjERIP/aAAgBAQAGPwIAjWpkO74//8QAGxAAAQQDAAAAAAAAAAAAAAAAAQARIVEgMUH/2gAIAQEAAT8hgwXZpblWFET5TDYf/9oADAMBAAIAAwAAABC3z//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxBCBk//xAAXEQADAQAAAAAAAAAAAAAAAAABEBEx/9oACAECAQE/EIbq/8QAHBABAQACAgMAAAAAAAAAAAAAAREh8AAQMUFh/9oACAEBAAE/EMzKUi7NxxAyUgVbL8hc7BKjKfA+8dQt6//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="活用 git apply 合入 patch 补丁"\n        title=""\n        src="/static/header-b95af72434ea8bb9dc3d5d86aa1f3ff9-d6978.jpeg"\n        srcset="/static/header-b95af72434ea8bb9dc3d5d86aa1f3ff9-527f0.jpeg 300w,\n/static/header-b95af72434ea8bb9dc3d5d86aa1f3ff9-9a7cd.jpeg 600w,\n/static/header-b95af72434ea8bb9dc3d5d86aa1f3ff9-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>前言</h2>\n<p>在还是 git 新手时，经常会遇到一个比较尴尬的处境，git 仓库经常会被自己给玩坏了，虽然没到山穷水尽的地步，但也恨不得反手给自己一巴掌</p>\n<p>冲动是魔鬼，我们还是要解决问题是吧~ 当然重置方法有很多了，而本文也将为你提供一个新的解题思路。</p>\n<h2>使用方法</h2>\n<h3>认识 GIT DIFF</h3>\n<p><code>git diff</code> 命令我们用得太多了，默认返回工作区和暂存区的文件详细差异。</p>\n<p>什么叫详细差异?</p>\n<p>工作区与暂存区的每一行数据变更都能够在这个命令中看到，多用于提交代码前的再次审阅，避免出错。</p>\n<p>当然，<code>git diff</code> 不仅能提供工作区和暂存区的文件对比，可以说能提供任意文件差异，如下:</p>\n<ol>\n<li>git diff  filepath 工作区与暂存区某文件对比</li>\n<li>git diff HEAD filepath 工作区与 HEAD(当前工作分支) 比较，HEAD 也可替换为任意一次 commitID</li>\n<li>git diff —staged 或 —cached  filepath 暂存区与 HEAD 比较</li>\n<li>git diff branchName filepath  当前分支的文件与 branchName 分支的文件进行比较</li>\n<li>git diff commitId filepath 与某一次提交进行比较</li>\n<li>git diff commitID1 commitID2 两次 commit 提交间文件对比</li>\n</ol>\n<p>然后就在想，若能根据这些信息恢复文件，岂不妙哉? 当然，我肯定不是第一个这么聪明的人，git 早就提供了相应的命令，且向下看。</p>\n<h3>生成 PATCH 补丁</h3>\n<p>patch 补丁即为根据 <code>git diff</code> 生成的文本内容文件，最简单的生成方法为 <code>git diff > test.patch</code>。</p>\n<p>其中 test。patch 文件记录了你本次的所有修改，若由于你忘记 <code>git stash</code>，或者强行 <code>git reset --hard HEAD</code>，这个文件将是最后的救命稻草。</p>\n<h3>GIT APPLY</h3>\n<p>基本使用方法为 <code>git apply patch</code>，根据 patch 文件内的信息，在现有文件中添加或删除内容。</p>\n<p>这里添加或删除的操作，和手动修改并无多大区别，即修改内容还是在工作区，不会提交到暂存区。之后的操作，就任君发挥了。</p>\n<h3>示例</h3>\n<p>我们预先生成一个文本文件 text，其内容如下并提交 commit，工作区，暂存区皆无内容:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>origin context line1\norigin context line2</code></pre>\n      </div>\n<p>将其修改为:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>origin context line1\norigin context\nadd line</code></pre>\n      </div>\n<p>使用 <code>git diff > test.patch</code> 生成 patch 补丁，当然你可以把这个文件放至任何目录下，打开其内容如下:</p>\n<div class="gatsby-highlight">\n      <pre class="language-git"><code>diff --git a/test b/test\nindex ce2f4b3..ae27ef5 100644\n<span class="token deleted">--- a/test</span>\n<span class="token inserted">+++ b/test</span>\n<span class="token coord">@@ -1,2 +1,3 @@</span>\n origin context line1\n<span class="token deleted">-origin context line2</span>\n<span class="token inserted">+origin context</span>\n<span class="token inserted">+add line</span>\n</code></pre>\n      </div>\n<p>然后我们使用 <code>git checkout .</code> 将文件重置为最初状态，text 文件恢复为</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>origin context line1\norigin context line2</code></pre>\n      </div>\n<p>使用 <code>git apply test.patch</code>，将变更内容再次写入，查看 text 文件，又变回了</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>origin context line1\norigin context\nadd line</code></pre>\n      </div>\n<p>示例为求简洁特别简单，也可以使用上文 <code>git diff</code> 保存各种对比内容，从而恢复不同的文件内容。</p>\n<p>另外需要多说一句的是，git apply 是一个事务性操作的命令，若有冲突修改会被全部放弃，加参数 —reject 即可。</p>\n<h2>应用</h2>\n<p>前面说了那么多，会有人反驳了，这里我用其它命令诸如 <code>git stash</code>，<code>git rebase</code> 比你这个强大多了，这条命令很鸡肋没什么用啊~</p>\n<p>下面，用两个鲜明的实例，证明这一命令的方便之处</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1-ba31e783d889c6df82fedde0b56e056d-6e2c4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 832px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 83.89423076923076%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAEpElEQVQ4y0WUeVDUZRzGt9GUYxcRD24sCTWvLFGZ0nRSuZbd5Vq5kkNABRXlXLnk0HABQRTkFFR0hAWVEY90VBS8IcWULGrCvEhTxtRJw+vTu0xTf3zn/ef3fn7P832eeSX0XeOn9sNUlhagCIxB8r4Lk5yCad5bxZPuUxyrK0dXXkxDRTEthw5w+eRhSktKmDE7ErX/WnzETJ8ZjptHHCMsVUj0wFudxynbugnv4DW8N8SVsVMC0O3cxtOfWzjRWCFgJeyrLOFS6wmuXzrD7tpdzBTAtWsLiU3IY+78aFTeGoabKwXwcScPf2ylcmseX0fGM8jADSt7X2rKN/Py9jkuHNnN/upSDu6oEGc5LfVV5GStH1AzfkIQFjZeWNqoMTVTYWQsF8BHV3nWc54aYTlyVRJDTNwZYetFeXEhPWf3U6vNoDw1kf35mTSLb07qtpOWnI7ZSCXDTOQMHrqAoUKEoZEcY6kHknd/XOXFnUtUlRayOikdYzM5pubeREasJEwRQIzKn9yIUHbFLuNQViytZVo08WkMlbkyykyJobH7gDL96KGStw+v8O7Bd2Tn5jA7MApDGxUOk9S4zgtg3ngFGicvav0DObgynDbNSrpzE2gvzEb9ZQgyqStSmV6duwALqNQdyRsB41EnTXvLSExOJjoukaVRscya7ssXDgriHL3QBQZxRrOC27VF9NYV8bI2jzt1ldhYeTLEwAVjvTqZB0YmA8AO6LtOW3MthRvWkaJJIjAoGtsPVZhbyHEbp6TUw4+m6Ah+KNdyJSeFHm0K96q2YG/jyaDBLhjpFYoxlgrLr34XwD+7OLC3EidFMNZTF2Fp78XIMeLvwtIYc3eiJirJn+NDjacf9SFB/JqdzI38jVhaKDEwdBuwLZXJkQ73+Bf4rIvG+hrMZ/lh5uCL0WgPFM5hTPvYh6EC+rmdgiWTPUmd680WZx/urkvnXOFGZKPlA2mbiiBNTOXI/gM+7eL00QasZi7CxN4bx88COZKqoSM3g+CvQrEb4cZ8sc/l07z4ZoKKm0tjedlcjdp9KYOMnTGzViETpZbqi/1aD3xynRvnD2PnqEb6gYr0kBjaEhN4WJzDg11bWTMngIjJvmiFg+0z1HQsjuLtvgq6myoZP06sx0KBha2SUWJNktf6lPu+525XC+af+LBwQSi6uATaRNr3N22gv66ECkUEy4XtLU5qDrmEcDUkmns5WdBeT35iMkamztgI2Ghr5f+1efzLWQL8IimLiaV+xWoupqaJS5m82FlE7tzFZMzypkkVSm9GBk/rS+nJSOZNcxnHi7XYiuCsrBXY2SiQ9N+/jP6B6Lt5itqUeOpWRHEsKY7OzHT6irTc2lbAsqnelCgDOBoUxp3sFF6d3k3vjk381VDAcVElCxGinY0cBztRm7/vXqC741v2aNezLWwJrZlJ3MxP51b+OvobK7korEV9qkLj6MPmhf50JSfypKaI/vYG6NhDdVYaJsNcmDhWIXYpgMHh8Uxx8ifeNwRdTBTXBKy3Ko/Hewp43lhGc/Qqir2C0Dr7EfyRAl1AOL9lp/P8aDXc0BGmjBB9XSjq446B1I1/AFUaI2lHjyqWAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="举个栗子"\n        title=""\n        src="/static/1-ba31e783d889c6df82fedde0b56e056d-6e2c4.png"\n        srcset="/static/1-ba31e783d889c6df82fedde0b56e056d-5e258.png 300w,\n/static/1-ba31e783d889c6df82fedde0b56e056d-e6536.png 600w,\n/static/1-ba31e783d889c6df82fedde0b56e056d-6e2c4.png 832w"\n        sizes="(max-width: 832px) 100vw, 832px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>使用 patch 补丁下载 MR 内容</h3>\n<p>这个方法来源于部门同事，这是个有趣的人，经常会给我带来各种奇思妙想，这里我也就借花献佛了。(为了获取这个 idea 能够撰文，偷偷塞给他 10 块钱获取了授权)</p>\n<p>经常使用 gitlab 的同学大家都知道，当他人提交 MR 到主库时，你只能做代码审阅，无法在 MR 未合并前直接下载更改后的文件内容验证代码是否正确。</p>\n<p>当文件更改内容过多，或者是前端项目你特别想看看代码运行起来的页面效果时，备感无力。</p>\n<p>当然，若是仅凭代码就能脑补其在浏览器中的显示效果的人，当我没说……</p>\n<p>这里关键的地方在于，如何获取这个 MR 与主库现有文件的对比 patch 补丁，然而 gitlab 早已看透了你的一切小心思~</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/2-6919c9fb01d612b03a2806e33a391f76-dfbef.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 15.729166666666666%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAl0lEQVQI103OQQ/CIAwF4P3/3+VZr56Nxm2FAmUDhW3PjiXq4QuvSfNo54wFDQRDhIEnGHnBsEc/jDrPqHXBsvzUWr/mlGAtI4QAkYikc3furzjdLrBabLWIDCuLcaSWg/fwyjkHZkaMsRXs7/3xRK97+V1URdFPOp8jSI7FSYlIy4cJ5GY4SSilNP8X5pyxriu2bWv2/AG+Z+Y8tdmdoAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="生成 patch"\n        title=""\n        src="/static/2-6919c9fb01d612b03a2806e33a391f76-abe1c.png"\n        srcset="/static/2-6919c9fb01d612b03a2806e33a391f76-10046.png 300w,\n/static/2-6919c9fb01d612b03a2806e33a391f76-3c4a3.png 600w,\n/static/2-6919c9fb01d612b03a2806e33a391f76-abe1c.png 1200w,\n/static/2-6919c9fb01d612b03a2806e33a391f76-1c9b7.png 1800w,\n/static/2-6919c9fb01d612b03a2806e33a391f76-dfbef.png 1920w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>点击 Email Patches，就可以直接下载 patch 文件，然后通过上文的 <code>git apply</code> 直接将修改内容下载至本地，然后愉快的 <code>yarn start</code> 或者其它命令跑起你的项目查看效果啦，so good!</p>\n<h3>多人协作</h3>\n<p>程序员的工作大家都是知道的，周末也会偶尔加个班修个紧急 bug 啥的，若你正放假坐着火车上，吃着火锅唱着歌，一个电话打过来，紧急 bug，速度修复，真是要了个命呐~</p>\n<p>而这时候屋漏偏逢连阴雨，VPN 也连不上公司内网，啥倒霉事全让你占尽了，这可咋整?!</p>\n<p>要么打电话请同事帮你改，二十八个文件都需要改两三句代码，一个一个说吧…… 半天过去了</p>\n<p>或者整个修改的文件全发过去，信号差传得又慢，还不如打电话说，可急死我了……</p>\n<p>这时候，废什么话，git diff 打个 patch 补丁传过去呗，一个 bug 修改的内容通常极少，不到 1KB……</p>\n<p>到这里也看出来了，patch 补丁最大的优势在于内容小，能够只记录你的修改内容而非全文件，通过 <code>git apply</code> 简直不能更好用~</p>\n<h2>补充</h2>\n<p>这里还有两个类似命令:<code>git format-patch commitA commitB</code> 和 <code>git am</code>。</p>\n<p>前者会将一次 commit 的所有信息也带上，如作者，时间，节点描述等，再配合后者将 patch 内容应用到当前分支。\n与 <code>git apply</code> 的不同点是，这里补丁不再只在工作区，你会发现当前分支多 commitA 和 commitB 之间的提交记录。具体细节，就还请大家自行去探索吧~</p>',fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁",date:"2018-02-03",catalog:"前端",author:"景小隐"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"}}}});
//# sourceMappingURL=path---2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding-58bd96156ed0a8bf3bc9.js.map