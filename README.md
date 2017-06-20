## 说明  
目前这个项目定为新版B/S产品的前端框架项目。这个项目遵循目前流行的互联网前端开发风格进行。  

This project aims to bootstrap the development of your product and provide an ecosystem for building production-ready application or prototypes.

Frameworks like Bootstrap provide a number of components, but usually it’s not enough to build a real-world app. This template comes with lots of popular UI components with a unified color scheme, plus it is based on a modern Angular framework and has a flexible component based structure.  

## 内部网站  
* RAP:api文档和mock [http://vosung.bgenius.cn:8081](http://vosung.bgenius.cn:8081)  
* vosung技术社区 [http://vosung.bgenius.cn:8082/](http://vosung.bgenius.cn:8082/)


## 目录  
* 开发框架说明[本页]  
* [API说明](ourdocs/design/api.md)    
* [前端处理逻辑说明](ourdocs/design/logic.md)  
* [组织管理菜单结构设计](ourdocs/design/Menus/组织管理菜单结构设计.jpg)
* [组织管理原型设计](ourdocs/design/PrototypeProject/Net4FrmPrototype.rar)
* [团队协作Bug榜](ourdocs/mgmtdaily.md)
* [框架开发流程(黄亮)](ourdocs/design/DevelopmentFlow(HL).md)
* [表格组件需求](http://vosung.bgenius.cn/framework-group/ng2-admin/wikis/home)


## List of features
* Angular 2+
* Angular CLI
* Bootstrap 4 CSS Framework
* SASS
* Smart Table
* Forms
* Editors
* Charts (amChart, Chartist, Chart.js, Morris)
* Maps (Google, Leaflet, amMap)
* Responsive layout
* High resolution
* and many more!
* 企业组织管理  

## 先决条件  
* [下载安装git](https://git-for-windows.github.io/)  
* [下载安装nodejs(v6.10.2)](https://nodejs.org)  
* npm install webpack-merge -g  
* npm install webpack -g  
* npm install rimraf -g  

## 运行环境  
框架作者要求：  
Make sure you have Node version >= 6.0 and NPM >= 3  
我们统一支持：  
node v6.10.2  
npm 4.1.2    

## 运行项目  
#### 克隆仓库并且安装依赖  
你可以使用git命令行克隆仓库：  
```
git clone https://github.com/akveo/ng2-admin.git  
```
克隆好仓库之后，进入项目目录，并安装依赖：  
```
cd ng2-admin
npm install
```
or  
```
cd ng2-admin
yarn
```
注意：如果安装依赖失败，可以删除node-modules目录然后重试，如果多次失败则向同事请求协助。  

#### 运行本地副本  
在development mode运行本地副本：  
```
npm start
```  
Go to http://0.0.0.0:4200 or http://localhost:4200 in your browser.  

To run the local copy in production mode and build the sources, execute:  
```
npm run start:prod
```
or in [AOT mode](ourdocs/ngaot.md)    
```
npm run start:prod:aot
```
To create a bundle in production mode, execute:  
```
npm run build:prod
```
or  
```
npm run build:prod:aot
```
This will clear up your dist folder (where release files are located), generate a release build and start the built-in server. Now you can copy the sources from the dist folder and use it with any backend framework or simply put it under a web server.

## 自动部署（ci）  
本项目采用gitlab-ci实现编码到测试部署的持续集成。   
自动部署的地址是： [http://vosung.bgenius.cn:4200](http://vosung.bgenius.cn:4200)  

RestAPI的内网测试地址：[http://192.168.2.238:8000/metadata](http://192.168.2.238:8000/metadata)   

## Electron Hybird架构  
使用Electron Hybird架构嵌入本Web App的时候，需要对项目下/src/index.html文件进行少许改进。要在页面head节内增加：  
```
<!--这里用来适配Electron : begin  -->
    <script>
        window.nodeRequire = require;
        delete window.require;
        delete window.exports;
        delete window.module;
    </script>
<!--这里用来适配Electron : end  -->
```
相关文章：  
[Electron基础 - 解决无法使用jQuery/RequireJS/Meteor/AngularJS 的问题](https://zhuanlan.zhihu.com/p/21440362)    
Electron Hybird项目地址：http://ascode@vosung.bgenius.cn/framework-group/Net4Frm-Hybird.git   


## 组件/模块/工具说明
* webpack-merge  
* rimraf  
* [Karma](ourdocs/karma.md)  
Karma 是Google 开源的一个基于Node.js 的 JavaScript 测试执行过程管理工具（Test Runner）。该工具可用于测试所有主流Web浏览器，也可集成到 CI （Continuous integration）工具，也可和其他代码编辑器一起使用。  
* mockjs  
[https://github.com/nuysoft/Mock/wiki](https://github.com/nuysoft/Mock/wiki)  
* express路由 
[http://www.expressjs.com.cn/guide/routing.html](http://www.expressjs.com.cn/guide/routing.html)    
* Postman  
api测试工具  


## 帮助
* [Angularjs2 在线教程](http://www.hubwiz.com/course/5599d367a164dd0d75929c76/)  
  
* [bootstrap 4 官方网站](https://v4-alpha.getbootstrap.com/)  

* [奚琛发起的《开发人员帮助手册》(目前唯一的内部开发人员帮助手册，包括前后端开发流程指导，git源码使用指导等等)](http://vosung.bgenius.cn/xic/Devlopment-Helper)  

* [通知公告](http://vosung.bgenius.cn/ascode/notice)  
  
* [前端界面开发框架admui](http://www.admui.com/)  

* [前端界面开发框架H+](http://www.zi-han.net/theme/hplus/index.html)  

* 关于ng serve  
ng serve/ng serve --prod --aot启动项目出现的问题.  
参见 https://github.com/angular/angular-cli/issues/4895 解决。具体原因，其实那该黄色到警告已经说明，angular-cli 已经被抛弃，转到 @angular/cli。所以当我卸载 angular-cli  ，运行npm install -g @angular/cli，成功后就可以用 cli 的命令了。


## 知识储备  

这里将用到的前端知识：  

程序员必须运用的前端知识：  




---
# 如下是作者的源码首页  

[![Build Status](https://travis-ci.org/akveo/ng2-admin.svg?branch=master)](https://travis-ci.org/akveo/ng2-admin)
[![Join the chat at https://gitter.im/ng2-admin/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ng2-admin/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/akveo/ng2-admin/status.svg)](https://david-dm.org/akveo/ng2-admin)

# Admin panel framework based on Angular, Bootstrap 4 and Angular CLI

Admin template made with :heart:  by [Akveo team](http://akveo.com/). Follow us on [Twitter](https://twitter.com/akveo_inc) to get the latest news about this template first!

### Demo

<a target="_blank" href="http://akveo.com/ng2-admin/"><img src="http://i.imgur.com/QK9AzHj.jpg" width="600" alt="Sky Blue"/></a>

<a target="_blank" href="http://akveo.com/ng2-admin/">Live Demo</a>

## Angular 1.x version
Here you can find Angular 1.x based version: [Blur Admin](http://akveo.github.io/blur-admin/)
 
## Documentation
Installation, customization and other useful articles: https://akveo.github.io/ng2-admin/

## Based on
Angular 2+, Angular CLI, Bootstrap 4, and lots of awesome modules and plugins

## BrowserStack
This project runs its tests on multiple desktop and mobile browsers using [BrowserStack](http://www.browserstack.com).

<img src="https://cloud.githubusercontent.com/assets/131406/22254249/534d889e-e254-11e6-8427-a759fb23b7bd.png" height="40" />

## How can I support developers?
- Star our GitHub repo :star:
- Create pull requests, submit bugs, suggest new features or documentation updates :wrench:
- Follow us on [Twitter](https://twitter.com/akveo_inc) :feet:
- Like our page on [Facebook](https://www.facebook.com/akveo/) :thumbsup:

## Can I hire you guys?
Yes!  Visit [our homepage](http://akveo.com/) or simply leave us a message to [contact@akveo.com](mailto:contact@akveo.com). We will be happy to work with you!

## Features
* TypeScript
* Webpack
* Responsive layout
* High resolution
* Bootstrap 4 CSS Framework
* Sass
* Angular
* jQuery
* Charts (Chartist, Chart.js)
* Maps (Google, Leaflet, amMap)
* and many more!

## License
[MIT](LICENSE.txt) license.

### From akveo

Enjoy :metal:
We're always happy to receive your feedback!
