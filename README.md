# 浪漫大学

## 项目初始化

项目使用 react-create-app 构建

### redux

react 项目中状态管理必备

#### redux-thunk

让 store 有能力接收函数，用来做异步数据获取与复杂逻辑

#### react-redux

方便使用 redux

#### react-router-dom

路由处理

#### axios

项目使用 axios 发送 Ajax 请求

##### 配置代理

连接本地 mongodb 数据库，为了避免跨越问题，在 package.json 中加入 proxy 代理,将请求转发到 9093 端口

##### 配置拦截器

#### react-fastclick

解决移动端 300ms 延迟问题

#### antd-moble

使用 antd 的 UI 库，快速开发，专注业务

配置按需加载 [在 create-react-app 中使用 antd-mobile](https://mobile.ant.design/docs/react/use-with-create-react-app-cn)

#### 手机显示配适

阻止用户手滑放大或缩小页面，需要在 public/index.html 中添加修改 meta 元素。

```HTML
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

```

#### CSS 的处理

```
npm install --save-dev babel-plugin-import less less-loader style-loader css-loader
```

## 项目后台

项目后台使用 express + mongodb 搭建，代码存放在 server 目录下
