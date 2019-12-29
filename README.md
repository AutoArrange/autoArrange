# AutoArrange快应用

## 组织结构

```
├── script 构建项目脚本文件夹
|   └── windows.bat 在windows平台下构建项目脚本
|  	├── linux.sh 在linux平台下构建项目脚本
├── src 源代码文件夹
|   ├── Auth 存放的是与用户认证相关的局部界面
|   │   ├── login.ux 登陆的局部界面
|   │   └── register.ux 注册的局部界面
|   ├── AutoArrange 存放主界面
|   │   └──index.ux 主界面，程序的入口
|   ├── Common 存放一些通用的界面控件及逻辑模块及图片
|   │   ├── Component 通用的界面控件
|   │   │   ├── CDialog 通用的对话框控件
|   │   │      ├── dialog-list.ux 对话框列表控件
|   │   │      └── dialog.ux 对话框控件
|   │   │   ├── CInput 通用的输入框
|   │   │   ├── CTitle 通用的带图标标题
|   │   │   ├── DropDown 下拉菜单
|   │   │   ├── NavBar 底部导航栏
|   │   │   └── TitleBar 顶部标题栏
|   │   ├── Api 一些必需的逻辑模块
|   │   │   ├── basic.js 一些基本/简单的接口
|   │   │   ├── fetch.js 对于快应用fetch接口的封装
|   │   │   ├── login.js 实现登陆接口
|   │   │   ├── registe.js 实现登陆接口
|   │   │   └── md5.js 对一字符串进行MD5加密接口
|   │   └── Image 图片目录
|   ├── Nearby 对应于页面中“附近”页面
|   ├── User 对应于页面中“用户”页面
|   ├── app.ux 应用级别的配置，供所有页面公用
|   ├── manifest.json 项目配置文件，配置应用图标、页面路由等
|   └── util.js 用来封装快应用提供的接口实现基本的功能
└── package.json 定义项目需要的各种模块及配置信息
```

