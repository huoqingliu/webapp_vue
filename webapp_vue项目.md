## 2020-5-22

`练习vue-cli 4.0的使用和配置`

## vue-cli脚手架 4.0环境搭建

### 哈士奇(husky)

1. 安装哈士奇(husky)
初始化仓库: git init
安装哈士奇:npm install husky --save-dev

2. 设置package.json
添加配置到package.json中，使git提交的时候会先调用husky中的hooks,即调用`npm run 'lint:f'`
```
"husky": {
  "hooks": {
    "pre-commit": "npm run 'lint:f'"
  }
}
```

3. 提交git时会自动验证是否符合Eslint的代码规则

git 最基本的操作
```
git status
git add ./
git commit -m "xx"
git push
```

### mock

#### 静态mock

const {seller,goods,ratings} = require("./data/data.json")
module.exports={
    lintOnSave:false,
    devServer:{
        open:true,
        before: function(app) {
            //app 就是我们express的核心对象  可以用来注册一个后台路由
            app.get('/api/seller', function(req, res) {
                res.json({seller});
            });
            app.get('/api/goods', function(req, res) {
                res.json({goods});
            });
            app.get('/api/ratings', function(req, res) {
                res.json({ratings});
            });
        }
    }
}

#### 动态mock
使用mockjs生成动态mock数据


### axios

1. 安装
npm i axios -s

2. 使用

```
在组件中引入
import axios from "axios"

async mounted(){
    const seller = await axios.get("/api/seller");
    console.log(seller)
}
```


### vue-router

#### 安装 
`npm i vue-router -s`

#### 使用

1. 定义路由(routes.js)
```
export default [
  {
    path: "/goods",
    component:goods
  },
  {
    path: "/ratings",
    component:ratings
  },
  {
    path: "/seller",
    component:seller
  },
  {
    path: "/",
    redirect: "/goods"
  }
]
```

2. 定义路由器(router.js)
3. 把路由给路由器
`router.js`
```
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'


// 声明使用vue的插件
Vue.use(VueRouter)

// 向外暴露一个路由器对象
const router = new VueRouter({
  // mode: 'hash', // 路由路径带#号
  mode: 'history', // 路由路径不带#号

  // 配置应用中的所有路由
  routes,//把路由给路由器
  linkActiveClass:"active"
})

export default router
```
4. 把路由器给vue集中管理
`main.js中`
```
new Vue({
  render: h => h(App),
  router,//把路由器给vue集中管理
  store
}).$mount('#app')
```
5. 把vue-router注册为vue插件
`可在main.js中进行`
`也可在router.js中进行`
`一般在router.js中进行`

`router.js中`
```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

```

### vuex

#### 安装 

`npm i vuex -s`

#### 使用

1. 将vuex注册为vue的插件(必须在仓库创建之前)
`store中`
```
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);//把Vuex注册为vue的插件
```
2. 定义(创建)仓库
`store中`
```
export default new Vuex.Store({
    state,//存放数据
    getters,//操作数据的工具
    mutations,//用来同步修改仓库数据的
    actions//用来异步调用mutatuin
})
```

3. 将仓库交给vue管理
`main.js中`
```
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
```



### 配置别名

#### 为pages,components配别名

`vue.config.js中`
```
// 配置别名所需的函数
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports={
  configureWebpack:{
      resolve: {
          alias: {
              'pages': resolve('src/pages'),
              'components': resolve('src/components'),
          }
      }
  }
}
```



### 移动端的准备工作

#### 1. 引入reset.css
`<link rel="stylesheet" href="<%= BASE_URL %>css/reset.css">`

`<%= BASE_URL %>`是脚手架提供的js变量,代表public的绝对路径

在HTML中使用js代码需要用`<% %>`包裹

#### 2. 加入viewport标签(创建理想视口)
```
<meta name="viewport"
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```

#### 3. 解决click在移动端300ms的延迟
```
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
```

#### 4. 禁止事件的默认行为

```
var app = document.querySelector("#app");
app.addEventListener("touchstart",(ev)=>{
    ev = ev || event;
    ev.preventDefault();
})
```

#### 5. 选择一个css预处理器
  less
  sass
  stylus(√)
`  安装：npm i stylus stylus-loader -s`

`使用`

```
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
```

#### 6. 引入字体图标

`UI制作符合自己公司风格的矢量图;去iconfont站点借阿里的矢量图`

`前端工程师拿到矢量图 使用iconmoon站点 将矢量图与对应的字符进行一一绑定`

`生成一套字体;再结合自定义字体技术@font-face 在项目中使用`

`自定义字体：`
```
<style>
/*如果你想百分比保证所有的用户使用的字体都是统一的,那就要使用自定义字体*/
/*定义字体*/
/*业务驱动*/
@font-face{
    font-family: "damu";//定义一个字体名称
    src: url("./font/AGENCYR.TTF"),
          url("./font/AGENCYB.TTF");
}
#app{
    font-size: 30px;
    font-family: "damu";
}
</style>
```


#### 7. 挑选一个适配方案
  viewport
  rem
  不适配(√)

#### 8. 让包裹区域充当视口

### 粘连布局

1. 作用：使页面的footer盒子在页面内容高度小于页面高度时处于页面底部，超过页面高度时可以把footer盒子顶出视口

2. 案例：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
    <title>Title</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        html,body{
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        #app{
            width: 100%;
            height: 100%;
            overflow: auto;
            background: pink;
        }
        .mainWrap{
            min-height: 100%;
        }
        .main{
            text-align: center;
            padding-bottom: 50px;
            /*overflow: hidden;*/
            zoom: 1;
        }
        .main:after{
            display: block;
            content: "";
            clear: both;
        }
        .footer{
            margin-top: -50px;

            height: 50px;
            line-height: 50px;
            text-align: center;
            background: gray;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="mainWrap">
            <!--main的高度必须要撑开mainWrap的高度 main一定要清除浮动-->
            <div class="main">
                <span style="float: left;width: 100%">
                    戏子入画 一生天涯 <br> 戏子入画 一生天涯 <br> 戏子入画 一生天涯 <br> 戏子入画 一生天涯 <br>
                    戏子入画 一生天涯 <br> 戏子入画 一生天涯 <br> 戏子入画 一生天涯 <br> 戏子入画 一生天涯 <br>
                    戏子入画 一生天涯 <br> 戏子入画 一生天涯 <br> 戏子入画 一生天涯 <br> 戏子入画 一生天涯 <br>
                    
                </span>
            </div>
        </div>
        <div class="footer">
            footer
        </div>
    </div>
</body>
</html>
```

3. 注意：
`要使用粘连布局，main的高度必须要撑开mainWrap的高度，且main一定要清除浮动`

### 预处理的继承和混合的区别

`当公共样式都是一些静态样式不需要传参的  使用继承`
`当公共样式中有一部分需要变化的样式     使用混合`

## 2020-5-23

