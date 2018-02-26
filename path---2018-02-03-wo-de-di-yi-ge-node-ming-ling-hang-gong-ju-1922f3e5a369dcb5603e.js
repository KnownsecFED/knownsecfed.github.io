webpackJsonp([78361991370501],{556:function(n,s){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-9df7a29e7903ec88843628107a38d775-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAECAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAcjphkCK/8QAGRABAAIDAAAAAAAAAAAAAAAAAgABEBES/9oACAEBAAEFAjqIjmXn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAQUAAAAAAAAAAAAAAAAAIQABESAy/9oACAEBAAY/Ai8LZr//xAAaEAEAAgMBAAAAAAAAAAAAAAABABARITFh/9oACAEBAAE/IQ1k3APGI9o1/9oADAMBAAIAAwAAABDEH//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAEDAQE/EKf/xAAWEQEBAQAAAAAAAAAAAAAAAAARECH/2gAIAQIBAT8QNZ//xAAcEAEAAQQDAAAAAAAAAAAAAAABEQAQIVExQbH/2gAIAQEAAT8QgbASSLLqhyczgs5APWgCBkO92crf/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="我的第一个 Node 命令行工具"\n        title=""\n        src="/static/header-9df7a29e7903ec88843628107a38d775-d6978.jpeg"\n        srcset="/static/header-9df7a29e7903ec88843628107a38d775-527f0.jpeg 300w,\n/static/header-9df7a29e7903ec88843628107a38d775-9a7cd.jpeg 600w,\n/static/header-9df7a29e7903ec88843628107a38d775-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>作为一个开发者，我们在实际的工作和生活中可能都会遇到一些繁琐的重复的工作，这个时候也许你就需要一个脚本来帮你执行做这些无聊的事情。对于一个新手来说可能不知道怎么入手，我们总是在说的脚本编程貌似都是 bash 语言干的事情。其实不然，理论上只要一门语言提供了解释器都可以用来编写脚本。所以常见的解释型语言如 Perl，Tcl，Python，PHP，Ruby 和 Node 等都可以胜任脚本编程的工作。作为一个前端工程师我们当然可以选我们最熟悉的语言 Node 来编写我们的脚本程序，而且选择Node 还有一个好处就是有大量的 Npm 包可以来简化我们复杂的工作。</p>\n<h2>入门</h2>\n<p>新建一个文件 helloShell 写上如下命令</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>#<span class="token operator">!</span><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>env node\ncosole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Hello Shell\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>保存后记得首先赋予文件执行权限然后再执行文件</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code> <span class="token function">chmod</span> +x helloShell\n ./helloShell\n</code></pre>\n      </div>\n<p> 不出意外的话，你的命令行应该会输出 <code>Hello Shell</code>，其中第一行 <code>#!</code> 后面跟的内容告诉系统需要什么解释器来执行这个脚本。</p>\n<h2>进阶</h2>\n<blockquote>\n<p>　使用参数</p>\n</blockquote>\n<p> 作为一个命令行脚本，有时候我们可能需要自己动手输入一些参数．修改刚才的 helloShell 文件为</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>#<span class="token operator">!</span><span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>env node\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">\'Shell\'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>再次执行 helloShell 文件</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>./helloShell World\n</code></pre>\n      </div>\n<p>得到输出 <code>Hello World</code></p>\n<p>但是如果需要开发一个命令行工具，或许我们还需要更多的参数和帮助信息等等，如果通过 node 的 process.argv 来获取和区分这些参数将是一件非常困难的事情。下面介绍一款 npm 包可以让我们更轻松的完成这个工作．下面来简单介绍一下 commander 功能</p>\n<h3>commander 包介绍</h3>\n<blockquote>\n<p>完整的 node.js 命令行接口解决方案．</p>\n</blockquote>\n<ol>\n<li>\n<p>参数解析</p>\n<p> option 命令用来定义参数。在第一个参数中，接受一个短名字和一个长名字使用＂,＂分隔，在命令行里使用时，这两个是等价的，但是后者可以在程序获取到，第二个参数为描述, 会在 help 信息里展示出来；</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>  <span class="token keyword">var</span> program <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'commander\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  program\n    <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">\'0.1.0\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">\'-p, --peppers\'</span><span class="token punctuation">,</span> <span class="token string">\'Add peppers\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">\'-P, --pineapple\'</span><span class="token punctuation">,</span> <span class="token string">\'Add pineapple\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">\'-b, --bbq-sauce\'</span><span class="token punctuation">,</span> <span class="token string">\'Add bbq sauce\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">\'-c, --cheese [type]\'</span><span class="token punctuation">,</span> <span class="token string">\'Add the specified type of cheese [marble]\'</span><span class="token punctuation">,</span> <span class="token string">\'marble\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'you ordered a pizza with:\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>program<span class="token punctuation">.</span>peppers<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'  - peppers\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>program<span class="token punctuation">.</span>pineapple<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'  - pineapple\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>program<span class="token punctuation">.</span>bbqSauce<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'  - bbq\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'  - %s cheese\'</span><span class="token punctuation">,</span> program<span class="token punctuation">.</span>cheese<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>特定命令的参数验证</p>\n<p>  只有当 command 命令里的命令被使用时才会触发 option。任何未知的参数将被报告为错误。需要注意的是必须要有一个 action，这些参数才会被验证。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> program <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'commander\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nprogram\n  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">\'rm &lt;dir>\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">\'-r, --recursive\'</span><span class="token punctuation">,</span> <span class="token string">\'Remove recursively\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>dir<span class="token punctuation">,</span> cmd<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'remove \'</span> <span class="token operator">+</span> dir <span class="token operator">+</span> <span class="token punctuation">(</span>cmd<span class="token punctuation">.</span>recursive <span class="token operator">?</span> <span class="token string">\' recursively\'</span> <span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nprogram<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>可变参数</p>\n<blockquote>\n<p>只有最后一个参数是可变的。而且你必须在可变参数名称后追加…，这里是一个例子</p>\n<p>有点类似于 ES6 的 rest 参数，多余的参数都会被加入一个参数数组，不过注意”…” 符号在后面。</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> program <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'commander\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nprogram\n  <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">\'0.1.0\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">\'rmdir &lt;dir> [otherDirs...]\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>dir<span class="token punctuation">,</span> otherDirs<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'rmdir %s\'</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>otherDirs<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      otherDirs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>oDir<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'rmdir %s\'</span><span class="token punctuation">,</span> oDir<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nprogram<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>指定参数语法</p>\n<p>尖括号（例如<cmd>）表示必须的输入。方括号（例如[env]）表示可选输入。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> program <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'commander\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nprogram\n  <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">\'0.1.0\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">arguments</span><span class="token punctuation">(</span><span class="token string">\'&lt;cmd> [env]\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    cmdValue <span class="token operator">=</span> cmd<span class="token punctuation">;</span>\n    envValue <span class="token operator">=</span> env<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nprogram<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> cmdValue <span class="token operator">===</span> <span class="token string">\'undefined\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'no command given!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'command:\'</span><span class="token punctuation">,</span> cmdValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'environment:\'</span><span class="token punctuation">,</span> envValue <span class="token operator">||</span> <span class="token string">"no environment given"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>自定义帮助</p>\n<p>commander 会基于你给的参数自动生成一份帮助信息，但是我们也可以自己来定义它。</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> program <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'commander\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nprogram\n  <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">\'0.1.0\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">\'-f, --foo\'</span><span class="token punctuation">,</span> <span class="token string">\'enable some foo\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">\'-b, --bar\'</span><span class="token punctuation">,</span> <span class="token string">\'enable some bar\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">\'-B, --baz\'</span><span class="token punctuation">,</span> <span class="token string">\'enable some baz\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// must be before .parse() since</span>\n<span class="token comment">// node\'s emit() is immediate</span>\n\nprogram<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'--help\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'  Examples:\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'    $ custom-help --help\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'    $ custom-help -h\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nprogram<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'stuff\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n</li>\n</ol>\n<h2>加入环境变量 PATH</h2>\n<p>由于文件没有加入系统环境变量 PATH 我们每次执行它都需要指定文件的路径非常麻烦，我们可以选择将我们的文件放入系统环境变量 PATH 里，一般我们可以将我们的 <code>helloShell</code> 文件放 <code>usr/bin</code> 文件夹下，就可以在系统任何位置执行我们的程序了。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>helloShell World\n</code></pre>\n      </div>\n<p>得到输出 <code>Hello World</code></p>\n<h2>发布</h2>\n<blockquote>\n<p>有时候，我们写了一个很棒的命令行工具，可能别人也想使用它来进行一些工作，这个时候怎么办呢？通过拷贝文件的方法？也许我们有更好的办法－－通过 npm 包进行发布。</p>\n</blockquote>\n<ol>\n<li>\n<p><strong>新建一个 npm 项目</strong></p>\n<p>执行 <code>npm init</code>\n按照提示完成新建后 package.json 大概是这个样子</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"shelltest555"</span><span class="token punctuation">,</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"test npm publish"</span><span class="token punctuation">,</span>\n  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"echo \\"Error: no test specified\\" &amp;&amp; exit 1"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p><strong>增加 <code>bin</code> 命令</strong></p>\n<p>作为一个命令行工具，我们可能不需要 <code>main</code> 命令（<code>main</code> 命令是作为 require 一个 npm 包后，指定这个包的入口文件）修改 <code>main</code> 命令为</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token property">"bin"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"helloShell"</span> <span class="token operator">:</span> <span class="token string">"./helloShell"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>记得将我们刚才的 helloShell 文件放入到这个位置，当用户运行时 <code>npm install --global shelltest555</code>，它就会自动将 <code>bin</code> 命令里的 <code>helloShell</code> 命令添加到系统环境变量 PATH 里面．</p>\n</li>\n<li>\n<p><strong>发布</strong></p>\n<p>确保你已经注册了 npm 账号，然后在我们项目目录下将 npm 源设置为 npm 官方的源，<code>npm login</code> 后，执行 <code>npm publish</code>，这里要注意 package.json 的 name 属性不能和已有的 npm 包重复并且确保项目下有 README.md 文件。</p>\n</li>\n<li>\n<p><strong>安装</strong></p>\n<p>执行　<code>npm install --global shelltest555</code>, 如果一起顺利，现在你就可以在全局执行 <code>helloshell</code> 命令了。</p>\n</li>\n</ol>\n<h2>结语</h2>\n<p>  本文只是列举了一非常简单的 Node 命令行程序创建，发布，安装流程．希望大家举一反三让 Node 脚本更好的服务与我们工作和生活之中。</p>',fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具",date:"2018-02-03",catalog:"NodeJS",author:"阿鑫"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个node应用可能存在的timing-attack安全漏洞"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"}}}});
//# sourceMappingURL=path---2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju-1922f3e5a369dcb5603e.js.map