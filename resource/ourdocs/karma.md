# Karma：Google开源的JavaScript测试执行过程管理工具  

Karma 是Google 开源的一个基于Node.js 的 JavaScript 测试执行过程管理工具（Test Runner）。该工具可用于测试所有主流Web浏览器，也可集成到 CI （Continuous integration）工具，也可和其他代码编辑器一起使用。

Karma 可以在不同的桌面或移动设备浏览器上，或在持续集成的服务器上测试 JavaScript 代码。Karma 支持 Chrome、ChromeCanary、 Safari、Firefox、 IE、Opera、 PhantomJS，知道如何捕获浏览器正使用的默认路径，这些路径可能在启动器配置文件被忽视（overridden）。Karma 就是一个可以和多重测试框架协作的测试执行过程管理工具，它有针对Jasmine、 Mocha 和AngularJS 的适配器，它也可以与 Jenkins 或 Travis 整合，用于执行持续集成测试。


这个测试工具的一个强大特性就是，它可以监控一套文件的变换，并立即开始测试已保存的文件，用户无需离开文本编辑器。测试结果通常显示在命令行中，而非代码编辑器。这也就让 Karma 基本可以和任何 JS 编辑器一起使用。为更好结果，它可以整合到 WebStorm 中，而 WebStorm 支持错误栈追踪和单元测试调试。

为更好运行，Karma 需要 Node.js 和一个配置文件，该配置文件包括：待测试的文件、需忽略的文件、基本路径、web服务器端口、日子等级等。（配置文件样例）

说到Karma的性能，Google 工程师 Vojta Jína 在 Chrome Canary 和 Chrome 做了一个演示，用 WebStorm 大约执行了 1500 个AngularJS 测试，在 5 秒之内完成。

Jína 也说到 Karma 是受 JS Test Driver （JSTD）的启发，但他们决定写一个完全不同的测试执行过程管理工具，因为JSTD有很多问题，他们想要一个能稳定并快速执行 Javascript 测试的工具。所以他们用了 Socket.io 库和 Node.js。

 

Karma 项目主页：[http://karma-runner.github.io/0.10/index.html](http://karma-runner.github.io/0.10/index.html)

Karma 原名 Testacular ，今年 3 月改名。