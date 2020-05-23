# 移动端基础概念

## 简单了解

### 2020年作为一个web开发者(web前端开发,后台开发,运维工程师) 必须要了解的一些内容
    git
    最基本的命令行的使用(windows开发 dos命令)
    数据结构 & 算法
    github
    开源协议
    语义化版本号
        x.y.z
            升z位:框架解决了一些现有的bug 框架的使用 框架的api没有产生改变的
            升y位:框架新增了功能 新增了api
            升x位:框架的源码进行了重构,框架的使用习惯都会发生改变
    ssh
    http
    设计模式
    字符编码


### pc端三大操作系统
    windows
    linux
    mac

### 移动端两大操作系统
    安卓
    ios

### web前端工程师
      web前端全栈
           (用vue react写后台管理系统 用node写后台接口)

      移动端全栈
          安卓
          ios
          webapp
          Hybrid app
          微信小程序

      大前端
           用vue react写后台管理系统
           用node写后台接口
           webapp
           Hybrid app
           微信小程序

### 移动端的三个阶段

1. 移动端的第一个阶段(达姆老师) webapp
    自己实现一个滑屏库
    自己封装npm包
2. 移动端的第二个阶段(天禹老师) RN
3. 移动端的第三个阶段(志勇老师) 微信小程序


## 2020-5-12

### b/s架构和c/s架构

1. **b/s架构;(browser/server);**

**`b/s架构 即 浏览器/服务器架构模式.`**

**`b/s架构的优点: 跨平台,一套代码搞定Mac和Windows操作系统。开发成本比较低,维护成本低`**
**`b/s架构的缺点: 高度依赖于网络的.性能低.访问速度慢`**

2. **c/s架构(client/server)**

**`c/s架构 即 客户端/服务器架构模式.`**

在cs架构中如果遇到不同的操作系统，需要为不同的操作系统各开发一套客户端,开发成本高(安卓开发,ios开发),而且由于用户可以不更新不升级操作系统，维护成本也高。
新增功能时;也需要重新发布版本;用户更新之后才能应用. 但cs架构响应速度快，安全性强

**`b/s架构的优点: 但cs架构响应速度快，安全性强`**
**`b/s架构的缺点: 不跨平台,一个操作系统需要一套代码。开发成本高,维护成本也高`**

### Toc & Tob

1. toc应用: 面向大众的项目  ( 电商网站 )

相对于tob来说，需要考虑客户体验。要求较高

2. tob应用: 面向企业的项目 ( 后台管理系统 )

例如：
crm：综合类型的后台管理系统 & 销售系统
erp：销售系统
oa：办公系统
cms:内容分布系统

### 移动端的三种开发模式

#### 1. native app(c/s架构)

Native APP 指的是原生程序，一般依托于操作系统，有很强的交互，是一个完整的App，可拓展性强。需要用户下载安装使用.
web开发接触不到，需要使用java语言或oc语言

#### 2. web app(b/s架构)

Web App 指采用Html5语言写出的App，不需要下载安装。生存在浏览器中的应用，基本上可以说是触屏版的网页应用

#### 3. hybrid app

Hybrid APP指的是半Native半Web的混合类App。需要下载安装，看上去类似Native App，访问的内容是 Web ;  Hybrid app及其变种:
1. H5(HTML5)+ 原生 ( Cordova、 ionic)
这种模式的主要原理就是将APP的一部分需要动态变动的内容通过H5来实现,通过原生的网页加载控件WebView来加载.而混合框架(Cordova,ionic)一般都会在原生代码中预先实现一些访问系统能力的API， 然后暴露给WebView以供JavaScript调用，这样一来，WebView就成为了JavaScript与原生API之间通信的桥梁，主要负责JavaScript与原生之间传递调用消息，而消息的传递必须遵守一个标准的协议，它规定了消息的格式与含义，我们把依赖于WebView的用于在JavaScript与原生之	间通信并实现了某种消息传输协议的工具称之为WebView JavaScript Bridge, 简称 JsBridge，它也是混合开发框架的核心。(WebView :安卓系统和苹果系统中的一个组件,用来渲染html界面的).
2. Javascript 开发 + 原生 ( React Native)
这种模式下,React Native有两个作用:
1.为JavaScript提供运行环境;将react JSX模板 生成的虚拟dom映射为原生控件.(注意当前这种模式下 是没有webview的参与的;性能会比第一种方案好很多)
2.预先实现一些访问系统能力的API， 然后暴露给JavaScript调用
3. 自绘 UI + 原生 ( Flutter)
没有使用原生控件，相反实现了一个自绘引擎，使用自身的布局、绘制系统,当然Flutter也预先实现一些访问系统能力的API,然后暴露给Dart调用(没错! 不是js,换句话说要使用Flutter就得先学习Dart)


### 移动端设备/屏幕

#### 1. 屏幕尺寸

屏幕尺寸指的是屏幕对角线的长度，单位是英寸，1英寸=2.54厘米。常见的屏幕	尺寸有2.4、2.8、3.5、3.7、4.2、5.0、5.5、6.0等

#### 2. 屏幕分辨率

屏幕分辨率指的是屏幕横纵向上物理像素点的个数，一般以横向像素*纵向像素来	表示一个手机的分辨率. 如750*1334.这里我们要强调两种机型: iphone3 & 	iphone4.他们的屏幕尺寸是一样大的,但屏幕分辨率是不一样的.

      型号          屏幕分辨率                                
    iphone3         320 * 480                                  
    iphone4         640 * 960   

#### 3. 屏幕像素密度

也叫:像素密度或屏幕密度
屏幕上每英寸可以显示的像素点的数量，单位是ppi，即“pixels per inch”的缩写。
屏幕像素密度与屏幕尺寸和屏幕分辨率有关.
型号                 ppi                                
    iphone3          	   163                                  
    iphone4        		   326                         
iphone6                 326

#### 4. 普通屏vs高清屏

高清屏（Retina）概念的兴起主要是从乔帮主发布高清设备开始,主要功能如下：
      具备足够高的屏幕像素密度而使肉眼无法分辨其中单独像素点的液晶屏。
特点如下：
  1.一种具备超高像素密度的液晶屏；
  2.同样大小屏幕上显示的像素点由一个变为多个
高清屏和普通屏的主要区别：
高清屏和普通屏相比，相同区域的物理像素点数,高清屏是普通屏的4倍
iphone4就是高清屏;iphone3是普通屏.

能不能使用屏幕分辨率数值上的大小来比较两块屏幕的大小? 
不能;屏幕分辨率是抽象单位

#### 5. 物理像素

也叫设备像素,任何设备的物理像素的数量都是固定的，任何一款设备上1物理像素的大小是不会变的不同设备上1物理像素的大小可能是不一样的

#### 6. 设备独立像素

设备独立像素:设备独立像素(也叫密度无关像素)，可以认为是计算机坐标系统中得一个点，这个点代表一个可以由程序使用的虚拟像素(比如: css像素)，然后由相关系统转换为物理像素。

#### 7. 像素比

官方定义：物理像素和独立像素的比例，也就是 devicePixelRatio = 物理像素 /设备独立像素
`精确定义:(像素比是个数比而不是面积比)`
像素比 = 一个方向上占满一块屏幕需要的物理像素的个数 /一个方向上占满一块屏幕需要的设备独立像素的个数

`可以通过window.devicePixelRatio来获取`

## 2020-5-13

### 移动端设备/浏览器

移动端浏览器大概有30多种，其中20多种都处于边缘化状态

#### webview

1. 介绍
webview是独立程序，是留给原生应用的一个操作系统浏览接口，
用了内置浏览器很多底层的组件（例如渲染引擎）

2. 注意：
`ios的操作系统默认不允许在它身上有多余的渲染引擎，因此其他浏览器想在ios上运行就必须使用ios的webview	`

#### 内置浏览器

1. 介绍：

每部手机都有内置浏览器，这个浏览器属于设备的固件，通常由操作系统厂商开发。而且大多数内置浏览器都被紧密的集成到了底层的操作系统中去了，换句话说，我们没有办法单独升级内置浏览器，只能借助于更新操作系统
```
安卓  ==>安卓webkit   
三星 三星webkit  
中兴 中兴webkit	  
华为 华为webkit	  
小米 小米webkit	 
索尼 索尼webkit   
```
```	
ios ==> safari
黑莓 ==>黑莓webkit
塞班 ==>塞班webkit
window phone ==>IE
```
2. 注意：
内置浏览器更新慢  它是移植在操作系统中的

#### 可下载浏览器

1. `特点：`
更新快 独立于操作系统

2. `注意：`
在实践中，只有安卓才有可下载的浏览器
因为在ios上不允许安装其他的渲染引擎,ios系统上的一些浏览器实际上也是调用ios的webview实现的

### 移动端视口

`在桌面浏览器中,最干净的那个视口就是约束你的css布局的视口,它决定了用户能看到什么` 


#### 1. 布局视口

**`1、介绍：`**

**`布局视口`:限制了你的css布局**

**`2、获取布局视口宽度`**
```
document.documentElement.clientWidth;
//布局视口横向的尺寸,没有兼容性问题
```
**`3、注意：`**


#### 2. 视觉视口

**`1、介绍：`**

**视觉视口:决定用户能看到什么**

**`2、获取视觉视口宽度`**

```
window.innerWidth;
//视觉视口横向的尺寸，接近全部支持.
```

**`3、注意：`**
`视口的css像素的数量会随着用户的缩放而改变`

#### 3. 理想视口

**`1、介绍：`**
**理想视口:它是对于特定设备上特定浏览器的布局视口的一个理想尺寸;**

布局视口的默认宽度并不是一个理想的宽度，对于我们移动设备来说，最理想的情况是:用户刚进入页面时不再需要缩放。这就是为什么苹果和其他效仿苹果的浏览厂商会引进理想视口！只有是专门为移动设备开发的网站，他才有理想视口一说。

`注意:`
`只有当你在页面中加入viewport的meta标签，理想视口才会生效`


**`2、获取视觉视口宽度`**
```
screen.width;
//一半代表理想视口的宽度，一半代表设备的分辨率！！有很大的兼容性问题.
```
**`3、案例：`**
简单案例：
这一行代码告诉我们，布局视口的宽度应该与理想视口的宽度一致.理想视口包含的css像素的个数等于独立设备像素的值:

` <meta name="viewport" content="width=device-width" />`

### 屏幕缩放

#### 1. 用户缩放

`放大:` 放大一个CSS像素的面积  视觉视口内包含的css像素的个数变少
`缩小:` 缩小一个CSS像素的面积  视觉视口内包含的css像素的个数变多

#### 2. 系统缩放

**`注意：`**

与用户缩放类似,但改变的不光是视觉视口,布局视口也会改变

#### 3. 禁用系统缩放

`user-scalable 是否允许缩放 （no||yes）,默认允许`
`minimum-scale 允许缩放的最小比例`
`maximum-scale 允许缩放的最大比例 `

### 总结 

#### 四个像素

1. css像素(浏览器中的最小单位)
css像素是一个抽象的层，是web开发中的最小单元

2. 物理像素(设备呈像的最小单元)
屏幕的分辨率

3. 位图像素是图片的最小单元
当一个位图像素与一个物理像素 一一对应时, 图片才能完美清晰的展示


4. 设备独立像素
是一个抽象的层，是设备提供出来的接口

#### 3个视口

`布局视口`:限制了你的css布局
`视觉视口`:决定用户能看到什么
`理想视口`:它是对于特定设备上特定浏览器的布局视口的一个理想尺寸
使用` <meta name="viewport" content="width=device-width" />`来实现理想视口
**此时，布局视口变成设备独立像素所指定的值**

#### 两个操作

1. 用户缩放
`放大:` 放大一个CSS像素的面积  视觉视口内包含的css像素的个数变少
`缩小:` 缩小一个CSS像素的面积  视觉视口内包含的css像素的个数变多

2. 系统缩放
`放大:` 放大一个CSS像素的面积 同时改变布局视口 ,视觉视口内包含的css像素的个数变少
`缩小:` 缩小一个CSS像素的面积 同时改变布局视口 ,视觉视口内包含的css像素的个数变多

#### 一个比例

像素比： 物理像素 /设备独立像素
一个方向上占据一块屏幕所需要的物理像素的个数 / 一个方向上占据一块屏幕所需要的设备独立像素的个数
由于物理像素，设备独立像素，像素比都是设备中的概念与浏览器没有一点关系，在设备出厂时这些参数就定了。所以在默认情况下,像素比在web开发中毫无意义! 只有当设置了 viewport标签后
`<meta name="viewport" content="width=device-width" />`
当css像素 与 设备独立像素挂上钩,像素比才有意义

### viewport标签的完整写法

`<meta name="viewport" content="" />`

width [pixel_value | device-width] width 

直接去设置具体数值大部分的安卓手机是不支持的 但是IOS支持

initial-scale 初始缩放比例
user-scalable 是否允许缩放 （no||yes）,默认允许
minimum-scale 允许缩放的最小比例
maximum-scale 允许缩放的最大比例 
height

```
<meta name="viewport" content="width=device-width,height=device-height,user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" /> 
```
加上viewport标签后,1css像素在不同设备上占据的实际的尺寸是一样的


### viewport 方式适配

`利用initial-scale缩放会改变布局视口的原理，将所有设备的布局视口 调整为设计图的尺寸`

```
//目的: 将所有设备的布局视口 调整为设计图的尺寸
    // 利用initial-scale缩放会改变布局视口的原理，将所有设备的布局视口 调整为设计图的尺寸
    (function(){
        //设计图的尺寸
        var targetW = 750;
        //拿到（当前布局视口）理想视口的尺寸
        var layoutW = document.documentElement.clientWidth;
        //缩放的比例
        var scale = layoutW/targetW;
        //拿到viewport标签
        var metaNode = document.querySelector("meta[name=viewport]");
        //破坏了完美视口
        metaNode.content = `initial-scale=${scale},user-scalable=no,minimum-scale=${scale},maximum-scale=${scale}`
    })()
```

### rem 方式适配

`通过设置页面的rem来保证不同设备的适配`

```
//目的: 将所有设备的布局视口 调整为16rem
    //包括设计图 也以16rem来衡量
    (function(){

        var styleNode = document.createElement("style");
        //拿到（当前布局视口）理想视口的尺寸并除以16,获得
        var w = document.documentElement.clientWidth/16;
        // 设置页面的rem为w
        styleNode.innerHTML = `html{font-size:${w}px!important}`;
        document.head.appendChild(styleNode)
    })()
```

### 偏方方式适配

`强制width=750，不推荐使用`

```
<meta name="viewport" content="width=750">
```

## 2020-5-15

### 移动端的事件基础

 1. pc端的鼠标事件           移动端的触屏事件
 mousedown 鼠标按下      touchstart 触摸按下
 mousemove 鼠标移动      touchmove  触摸移动
 mouseup   鼠标抬起      touchend  触摸抬起

 2. 取消事件默认行为
```
var app = document.querySelector("#app");
app.addEventListener("touchstart",(ev)=>{
    ev = ev || event;
    console.log(ev.cancelable)
    ev.preventDefault()
})
```

3. 阻止事件的冒泡
在需要的事件中添加该行代码
`event.stopPropagation()`

4. 使用使用location解决取消事件默认行为后，a标签不能跳转的问题
```
// 因为禁止了事件的默认行为，使得a标签不能跳转。
// 所以给a标签添加touchend事件，使用location来进行跳转
aNodes.forEach((a)=>{
    a.addEventListener('touchend',()=>{
        location.href = a.href;
    })
})
```

5. 解决添加touchend后，在a标签上滑动时触发a标签的问题
```
a.addEventListener("touchstart",()=>{
    a.isMoved = false;
})

a.addEventListener("touchmove",()=>{
    a.isMoved = true;
})

a.addEventListener("touchend",()=>{
    if(!a.isMoved){
        location.href = a.href;
    }
})
```

### 一些问题

####  直接在doucument上添加事件监听时，不支持取消事件的默认行为

```
document.addEventListener("touchstart",(ev)=>{
    ev = ev || event;
    console.log(ev.cancelable)//输出为true代表支持取消默认行为，false为不支持
    ev.stopPropagation();
    //这一行代码在chrome的模拟器中是没有作用的!! 在真机上也不可以的!
})
```
//这一行代码在chrome的模拟器中是没有作用的!! 在真机上也不可以的!

#### 事件点透

pc端的事件在移动端会有300毫秒延迟

```
在移动端中，如果一个遮罩层下方有个a标签。
点击a标签所在的遮罩层，会在执行遮罩层的touchstart和touchend事件
但是，在300毫秒后，会再次执行一个onclick事件
此时，若该遮罩层的touchstart事件使遮罩层消失
则，会触发a标签的点击事件
这就是事件点透
```

`注意,需要遮罩层的touchstart事件使遮罩层消失才会触发a标签的点击.不然触发的还是遮罩层的点击事件`


#### querySelector和getxxx

##### querySelector拿到的是静态列表
`liNodes = document.querySelectorAll("li");`
querySelectorAll拿到的是静态列表,
动态的加了一个li,dom树的结构会产生改变 dom树会重新绘制 内存地址也会产生改变
此时`liNodes`指向为原来的li列表,即:指向空

##### getxxx系列拿到的是一个动态列表

`var liNodes = document.getElementsByTagName("li");`
getxxx系列拿到的是一个动态列表,
动态的加了一个li,dom树的结构会产生改变 dom树会重新绘制 内存地址也会产生改变
此时`liNodes`指向的是更新后的列表

##### 案例

```
//拿到的是静态列表
var ulNode = document.querySelector("ul");
var liNodes = document.querySelectorAll("li");

//getxxx系列拿到的是一个动态列表
// var liNodes = document.getElementsByTagName("li");

//动态的加了一个li
//dom树的结构会产生改变 dom树会重新绘制 内存地址也会产生改变
ulNode.innerHTML+="<li></li>";

liNodes = document.querySelectorAll("li");
Array.from(liNodes).forEach((li)=>{
    li.style.background = "pink";
})
```



### 动态化设计轮播图

`设计理念：`根据传入的图片地址，动态的设计一个移动端轮播图

`实现：`

#### 1. 编写一个js文件,在其中添加3个方法到Window上
分别为：
##### 1. 适配布局并清除事件默认行为
init(wrap)

```
function init(wrap) {
    //挑选一个适配方案
    var styleNode = document.createElement("style");
    var w = document.documentElement.clientWidth/16;
    styleNode.innerHTML = `html{font-size:${w}px!important}`;
    document.head.appendChild(styleNode)
    //禁止移动端事件的默认行为
    wrap.addEventListener("touchstart",(ev)=>{
        ev = ev || event;
        ev.preventDefault();
    })
};
```
##### 2. 为页面添加滑屏区域
slide(arr)

```
function slide(arr){
    var swiperWrap = document.querySelector(".swiper-wrap");//滑屏区域
    var ulNode = document.createElement("ul");//滑屏元素
    var ponitWrap = document.querySelector(".swiper-wrap > .point-wrap");//小圆点
    var liNode = document.querySelector(".swiper-wrap .list li");
    var styleNode = document.createElement("style");//创建一个style标签
    if(!swiperWrap){
        throw new Error("页面上缺少swiper-wrap这个滑屏区域")
        return ;
    }

    //根据arr动态的去创建滑屏元素
    ulNode.classList.add("list"); // 给ulNode加class的
    for(var i=0;i<arr.length;i++){
        ulNode.innerHTML+="<li><img src="+(arr[i])+"></li>";
    }
    swiperWrap.appendChild(ulNode);
    styleNode.innerHTML=".swiper-wrap .list{width:"+(arr.length)+"00%}";
    styleNode.innerHTML+=".swiper-wrap .list li{width:"+(1/arr.length)*100+"%}";
    document.head.appendChild(styleNode);

    //小圆点相关的逻辑
    if(ponitWrap){
        for(var i=0;i<arr.length;i++){
            if (i==0){
                ponitWrap.innerHTML+="<span class='active'></span>"
            }else{
                ponitWrap.innerHTML+="<span></span>"
            }
        }
    }

    //重新渲染滑屏区域的高度
    liNode = document.querySelector(".swiper-wrap .list li");
    //代码执行到第55行时 界面可能还没有渲染成功
    setTimeout(()=>{
        swiperWrap.style.height = liNode.offsetHeight + "px";
    },200)

    //开始滑屏
    move(swiperWrap,ulNode,arr)
}
```

##### 3. 页面滑屏的实现
move(wrap,node,arr)

```
function move(wrap,node,arr){
    /*
        基本逻辑
            1. 拿到滑屏元素一开始的位置
            2. 计算出手指滑动的距离
            3. 将手指滑动的距离给滑屏元素加上
    */
    var eleStartX = 0;
    var touchStartX = 0;
    var touchDisX = 0;
    var index = 0; // 图片的下标
    wrap.addEventListener("touchstart",function (ev) {
        ev = ev || event;
        node.style.transition = "";

        var touchC = ev.changedTouches[0];
        touchStartX = touchC.clientX;//手指一开始的位置
        eleStartX = node.offsetLeft;//滑屏元素一开始的位置
    })
    wrap.addEventListener("touchmove",function (ev) {
        ev = ev || event;
        var touchC = ev.changedTouches[0];
        var touchNowX = touchC.clientX;//手指的实时位置
        touchDisX = touchNowX - touchStartX;//手指滑动的距离

        node.style.left = eleStartX + touchDisX +"px";
    })
    wrap.addEventListener("touchend",function () {
        //判断一下是往左滑还是往右滑的
        if(touchDisX > 0){
            //往右滑 正值   图片下标 --
            index--;
        }else if(touchDisX<0){
            //往左滑 负值   图片下标 ++
            index++;
        }

        //判断一下边界情况
        if(index < 0){
            index =0 ;
        }else if(index > (arr.length-1)){
            index = arr.length-1
        }

        node.style.transition = ".5s left";
        node.style.left = -index*document.documentElement.clientWidth+"px";
    })
}
```

#### 2. 调用Window.swiper上的`init(wrap)`方法,实现适配布局并清除事件默认行为

`var wrap = document.querySelector("#wrap");`
`swiper.init(wrap); //移动端基础框架的搭建`

#### 3. 把轮播需要的图片地址整合成一个数组,以该数组作为参数调用Window.swiper上的`slide(arr)`方法
`var arr = ["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg","./img/5.jpg"]`
`swiper.slide(arr); //移动端无缝滑屏的组件`

## 2020-5-16

### 手机如何访问自己写的webapp
    1. 电脑防火墙要关
    2. 电脑要和手机处于同一个网段(电脑开一个共享wifi 让手机连接)
    3. 通过fis3启动服务
            fis3 server open : 打开fis3的静态资源服务器的根目录
            将自己的页面放进去 index.html
            fis3 server start : 启动fis3的静态资源服务器
    4. 打开cmd窗口 输入ipconfig命令 查看自己的ip

### 无缝轮播的实现

实现无缝:
  1. 先复制一组图片

  2. 当点到第一组的第一张时 `立马` 跳到第二组的第一张

  3. 当点到第二组的最后一张时  `立马` 跳到第一组的最后一张

### 在工作区中改错了文件 不小心改了同事的文件 将你在工作区中的修改回退回去:

`git checkout -- 回退的文件名`



### 防抖动的逻辑

`判断用户上来的首次滑屏方向 如果是y轴方向 那以后不管怎么滑动都不会触发滑屏逻辑`

`判断用户上来的首次滑屏方向 如果是x轴方向 那以后不管怎么滑动都会触发滑屏逻辑`

### 自定义transform方法

```
function css(node,type,val) {
    if(arguments.length>=3){
        var text = "";
        if (!node.transform){
            node.transform={}
        }
        node.transform[type] = val;
        for(var key in node.transform){
            switch (key){
                case "translateX":
                case "translateY":
                case "translateZ":
                    text+= key + "("+(node.transform[key])+"px)";
                    break;

                case "rotate":
                case "rotateX":
                case "rotateY":
                case "rotateZ":
                    text+= key + "("+(node.transform[key])+"deg)";
                    break;

                case "scale":
                case "scaleX":
                case "scaleY":
                    text+= key + "("+(node.transform[key])+")";
                    break;
            }
        }

        node.style.transform = text;
    }else if(arguments.length === 2){
        val = node.transform && node.transform[type];
        if(val === undefined){
            if(type === "scale" || type === "scaleX" || type === "scaleY"){
                val =1;
            }else if(type === "translateX" || type === "translateY" || type === "translateZ"){
                val = 0;
            }else if(type === "rotate" || type === "rotateX" || type === "rotateY" || type === "rotateZ"){
                val = 0;
            }
        }
        return val;
    }else{
        throw new Error("css函数的参数至少要包含两个")
    }
}
w.css = css;
```

## 2020-5-18

### 橡皮筋效果

1. 逻辑
我们让滑屏元素在滑动过程中(touchmove)的手指滑动的有效距离慢慢变小，即：手指移动转化为滑屏元素的移动效率降低

2. 实现

```
//要实现橡皮筋效果 就是让pointDisX的有效距离 越来越小

//这个比例在每一次touchmove触发时应该要越来越小 (0,0.5]
scale = document.documentElement.clientWidth / ((document.documentElement.clientWidth + traslateX)*2);
traslateX = transform.css(list,"translateX")+(pointDisX*scale);

transform.css(list,"translateX",traslateX)
```

### 3D硬件加速

1. 使用translateZ()来开启3D硬件加速


2. 案例：
该appNode
`appNode.style.transform = "translateX("+(flag)+"px) translateZ(0px)";`

3. 注意：
`进行3d运动 浏览器会触发gpu渲染   特别烧显卡的`

`元素在做大量动画时 最好不要使用定位实现移动 使用2d变换;`

`开启3d硬件加速; 让动画元素的定位层级高一点 不要影响到同级元素`

## 2020-5-19

### this的指向

ES5 this的指向: (this是函数内部的特征)
    this指向于谁;得看函数调用位置上的调用形式

    *独立调用(函数中)  test()      this --> window
    *隐式调用(方法中)  obj.test()  this --> obj
    *显示调用()  test.call(obj,msg)  test.apply(obj,[msg])  this --> obj
    *构造调用(构造函数中)  new test()  this --> 构造出来的实例对象

ES6 箭头函数
    箭头函数的this指向 是跟作用域挂钩的  this指向它的上一层函数的this

所有框架的回调函数的this指向 不能瞎猜 得看api!!!

### this的隐式丢失

浏览器的内部write方法中的this指向的是document
document.write("123")
var write = document.write;
此时write("123") 中的this指向的是Window。所以会报错

`例:`
```
var obj ={
    name:"obj",
    fn:function(){
        console.log(this.name)
    }
}
obj.fn()//输出"obj"
function init(fn) {
    fn()
}
init(obj.fn) //输出的是window的name" "
```

### this的硬绑定

bind()返回的是一个函数，而不是对函数进行调用
`函数.bind(obj)`
`将函数内的this绑定为obj, 并将函数返回`
是对this的隐式丢失的补救方法


### Tween 对象

t: 当前是哪一次,
b: 动画一开始的位置,
c: 与一开始位置之间的差值,
d: 动画的总次数
s: 回弹距离

Tween中的函数返回的都是坐标

### 即点即停效果
1. 原理 
`注意：`
`transition动画只认起始位置与最终位置拿不到动画中的每一帧`


要实现即点即停功能我们是需要拿到动画中的每一帧的,
`即：使用循环定时器，设置点击时清除循环定时器即可`

2. 实现：
`使用Tween来设置每次循环时移动的值`
`所以，清除定时器时会立即停在当前移动的点`

```
var Tween ={
    Linear: function(t,b,c,d){ return c*t/d + b; },
    Back: function(t,b,c,d,s){
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    }
}
function tweenMove(type,translateY,time) {
    clearInterval(clearTimer);
    var t = 0; //代表的是当前是哪一次
    var b = appNode.getBoundingClientRect().top //快速滑屏的初始位置
    var c = translateY - b;
    var d = (time * 1000) / (1000 / 60) //总次数
    console.log(speed,b,c,translateY);
    
    clearTimer = setInterval(()=>{
        t++;
        if(t>d){
            clearInterval(clearTimer)
        }
        appNode.style.transform = 'translateY(' + Tween[type](t, b, c, d) + 'px)'
    },1000/60)
}

```

### flex布局

`弹性布局：`也可称之为弹性盒子 ,flex布局 ,伸缩盒子 ,伸缩布局 
`弹性布局是父元素和子元素之间的关系`
`主轴：`默认是水平方向，从左至右，左侧开始，右侧结束
`交叉轴（垂轴，侧轴）`：默认垂直方向，从上至下，上开始，下结束
`父元素：`弹性空间
`子元素：`弹性项，弹性元素
`若想使元素变为弹性元素，则需要给父元素开启弹性空间，且各种属性也是写在父元素中`

```
写在父元素中
开启弹性空间 
display: flex;

1.设置弹性元素在主轴方向的排列方式（主轴方向）
flex-direction: 排列方式;  

row 行    水平排列（相当于左浮动） (默认值)                         row-reserve   行翻转水平逆序排列（相当于右浮动）
column：列  垂直排列，主轴是垂直方向，上是开始，下是结束。            column-reverse:列-翻转    垂直逆序，主轴是垂直方向，下是开始，上是结束。

2.弹性元素在主轴方向的位置分布
justify-content: 位置; 

flex-start: 居开始(默认值)                                        flex-end:居结束
center:居中                                                      space-around:空间包含元素
space-between: 元素包含空间                                       space-evenly: 空间(相等空间)包含元素
 
3.弹性元素是否换行 
flex-wrap:是否换行;

wrap:换行(默认值)         nowrap:不换行        wrap-reverse：翻转换行，反向换行

4主轴方向和换行的复合元素
flex-flow:主轴方向  是否换行 ；   

5.弹性元素在交叉轴方向的位置分布
align-items:位置;

6. 弹性元素在当前轴方向上的位置分布
align-self 会对齐当前 flex 行中的 flex 元素，
并覆盖 align-items 的值. 如果任何 flex 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self。
默认值：auto    
可选值：
auto | flex-start | flex-end | center | baseline | stretch


不换行：
flex-start: 居开始                                               flex-end:居结束
center:居中                                                      stretch(默认值):

换行：
flex-start: 居开始                                                flex-end:居结束
center:居中                                                       stretch(默认值):
space-around:空间包含元素                                          space-between: 元素包含空间                                       
space-evenly: 空间(相等空间)包含元素



弹性元素的排序: 
order:1；  设置在弹性元素中

份数：
flex-grow: 1; 设置在弹性元素中
若元素未设置宽度，则该份数为元素占盒子宽度的份数
若元素设置了宽度，但未填满盒子，
则元素增加的宽度为份数除以总份数再乘以剩余宽度的值

flex-basis: 0%; 设置在弹性元素中
如果没有指定flex则 使用width/height代替
可用空间 = (容器大小 - 所有相邻项目flex-basis的总和)
100   =    400 - (50*6)
400   =    400 - 0
可扩展空间 = (可用空间/所有相邻项目flex-grow的总和)
16.666 =  100 / 6
66.666 =  400 / 6
每项伸缩大小 = (flex-basis + (可扩展空间 x flex-grow值))
50 + 16.666
0  + 66.666

flex:1;相当于flex-grow: 1 flex-basis: 0%


压缩率(收缩因子):
flex-shrink: 1;
设置在弹性元素中，为具体的数值，默认为1
若其他元素设置的总和为5,5+1为6.且盒子需要收缩200px时
则： 200/6 = 33.33px该元素收缩33.33px
```

## 2020-5-20

### vue复习

### 过渡动画
利用vue去操控css的transition/animation动画

模板: 使用`<transition name='xxx'>`包含带动画的标签

css样式

 ` .fade-enter-active: 进入过程, 指定进入的transition`
`  .fade-leave-active: 离开过程, 指定离开的transition`
 ` .xxx-enter, .xxx-leave-to: 指定隐藏的样式`

`编码例子:`
```
    .xxx-enter-active, .xxx-leave-active {
      transition: opacity .5s
    }
    .xxx-enter, .xxx-leave-to {
      opacity: 0
    }
    
    <transition name="xxx">
      <p v-if="show">hello</p>
    </transition>
```

1. 在vue中如何使用过渡动画:
Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。
vue过渡动画会和 v-show , v-if 相结合使用
`必须使用 transition 组件将需要过渡动画的元素包裹起来`

例如:
```
<transition name="damu">
    <div id="test" v-show="flag">
        {{msg}}
    </div>
</transition>
```

2. 当元素从显示状态 --> 隐藏状态  我们称为leave状态 vue会给目标元素加上3个class
v-leave: 当前这个class vue本身是没有使用的!

v-leave-active : 他在整个vue过渡的生命周期中都会有效

v-leave-to     : 他只有在vue过渡动画的最后一帧才会起作用


3. 当元素从隐藏状态--> 显示状态   我们称为enter状态 vue会给目标元素加上3个class
v-enter: 当前这个class会在vue过渡动画的第一帧起作用

v-enter-active : 他在整个vue过渡的生命周期中都会有效

v-enter-to     : 他只有在vue过渡动画的最后一帧才会起作用


### vue模板解析

#### 解析过程

`有template时`
1. 判断有没有el选项 有
2. 判断有没有template选项 有
3. 将template作为模板进行解析
4. 将解析完的节点 覆盖掉整个el


`没有有template时`

1. 判断有没有el选项 有
2. 判断有没有template选项 没有
3. 将el的outerhtml 作为模板进行解析
4. 将解析完的节点 覆盖掉整个el

### 版本

`完整版：同时包含编译器和运行时的版本 (vue.js)`

`编译器：用来将模板字符串编译成为 JavaScript 渲染函数的代码。`

`运行时：用来创建 Vue 实例、渲染并处理虚拟 DOM 等的代码。基本上就是除去编译器的其它一切(vue.runtime.js)`

**`运行时版本需要渲染函数：render`**

### 组件 

1. 在components中定义组件

```
components:{
    damu:{
        name:"damu",
        template:"<span>damu</span>"
    }
}
```
 
2. 在当前组件中使用

  1.直接在HTML文档中添加`<damu></damu>`

  2.在当前vue的template中添加`<damu></damu>`

  3.解析流程

    `1.在HTML文档中发现damu组件，则去寻找组件的components中的name为damu的组件`
    
    `2.在app组件的template中发现damu组件，则去寻找组件的components中的name为damu的组件`

案例：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="app">
        <damu></damu>
    </div>
</body>
<script src="./js/vue.js"></script>
<script>
    Vue.config.productionTip = false;
    var vm = new Vue({
        el:"#app",
        //template:"<damu></damu>"
        components:{
           damu:{
               name:"damu",
               template:"<span>damu</span>"
           }
        }
    })
</script>
</html>
```



### windows中快捷键 & dos命令
cmd文件:windows环境下的可执行文件
windows + R 调出运行模板 ; 输入 cmd 调出dos窗口
windows + E 调出资源管理器

cls : 清屏操作
set : 查看当前windows操作系统的环境变量
set name : 查看指定的环境变量
set name=val : 设置环境变量(一次性的设置 关掉命令行窗口后 设置就会失效)
set name= : 删除环境变量

### npm相关的命令
npm root -g : 查看电脑上全局安装的包
npm init -y : 生成项目的描述文件(package.json)
npm 脚本:
    npm run 脚本的名字(如果说脚本的名字叫start 则run可以省略)
    npm脚本执行windows命令 它会自动在项目的node_modules中.bin中去寻找对应的命令

### vue2.0 脚手架
安装2.0的脚手架 : npm i vue-cli -g
查看脚手架的版本 : vue -V
查看脚手架可选的模板: vue list
初始化项目 : vue init webpack projectname
启动项目 : npm start

### 解读vue项目启动的流程

1. 安装2.0的脚手架 npm i vue-cli -g
    C:\Users\alienware\AppData\Roaming\npm\node_modules\vue-cli\bin 存放脚手架相关的命令
    C:\Users\alienware\AppData\Roaming\npm  也会存放一份脚手架相关的命令 并且 有其对应的cmd文件
    C:\Users\alienware\AppData\Roaming\npm  在windows的环境变量中有配置

2. 执行vue -V命令
    执行vue list
    执行vue init webpack demo2
    C:\Users\alienware>vue -V :
        去 C:\Users\alienware目录中找vue.cmd命令 发现没有这个命令
        去 系统环境变量的每一个文件夹中找 vue.cmd命令 发现没有这个命令
        去 用户环境变量的每一个文件夹中找 vue.cmd命令  发现有这个命令 则执行
        如果都没找到 则报错!

3. 创建出一个vue项目 并启动: demo2
    进入到项目目录下: 执行 npm start
                        执行 npm run dev
                        执行 webpack-dev-server --inline --progress --config build/webpack.dev.conf.js


4. webpack-dev-server webpack-dev-server --inline --progress  --config build/webpack.dev.conf.js
    webpack-dev-server 是webpack的内置服务器
        他不光可以启动一个服务器;而且可以进行webpack打包

    --inline --progress : 打印服务器启动的进度

    --config build/webpack.dev.conf.js: 指定webapck的配置文件

5. 分析webpack.dev.conf.js webpack.base.conf.js
    发现在webpack.dev.conf.js中合并了baseWebpackConfig;开发环境的配置需要去去读两个文件的
        : webpack.dev.conf.js  webpack.base.conf.js

        打包的入口:'./src/main.js'
        打包成功之后会生成一个 app.js文件
        HtmlWebpackPlugin 会将生成的app.js文件注入到index.html中

6. 访问localhost:8080
        访问到  index.html

7. 脚手架与windows环境变量的结合


### 打包时的一些细节 (包的查找机制)
    main.js --> app.js
    
1. vue中的import
当前这个import是webpack的语法!!!  只不过当前这个import兼容es6的语法规范
`在webpack中 天生只认识js文件`
`import obj from js文件`
`在webpck中 如果需要引入其他类型的文件 是需要对应的loader的支持的`
`import App from "./App.vue"  需要vue-loader的支持`
`vue-loader 会解析App.vue文件`

2. node 的包查找机制:
`1. 循环module.paths列出来所有路径! 查看这些路径中是否包含对应的包`
`2. 找到第一步中对应的包 去查看包的描述文件(package.json.main字段)`
    `如果存在main字段;并且main字段是一个js文件 那就使用该js文件`
    `如果不存在main字段;或者说main字段指向的不是一个js文件则走第三步`
`3. 如果不存在main字段;或者说main字段指向的不是一个js文件`
    `node会把当前包底下的index.js文件作为模块`
`4. 如果当前包底下 没有对应的index.js文件`
    `那么node会选择报错`

3. webpack的包查找机制
import xxx from "相对路径的文件"

import xxx from "绝对路径的文件"

import xxx from "包名"

`webpack的包查找机制 和 node的包查找机制很像` 
`本质上是在node包查找机制的基础上建立的`

`1.循环resolve.modules列出来所有路径! 查看这些路径中是否包含对应的包`
  `  resolve.modules默认值./node_modules  ../node_modules  .......`

`2.找到第一步中对应的包 去查看包的描述文件(package.json)`
`找对应的字段(这个字段由resolve.mainFields配置来指定要寻找的字段名)`
    `resolve.mainFields默认值 : ['browser', 'module', 'main']`
    `如果存在resolve.mainFields指定的字段;并且字段指向是一个js文件 那就使用该js文件`
    `如果不存在resolve.mainFields指定的字段;或者说resolve.mainFields指定的字段指向的`
    `不是一个js文件则走第三步`
`3.node会把当前包底下的[resolve.mainFiles].js文件作为模块`
    `resolve.mainFiles 默认值:index`

`4.如果当前包底下 没有对应的[resolve.mainFiles].js文件`
    `那么node会选择报错`

3. 包的别名
如果webpack为对应的包配置了别名了 那不会走以上的规则 而是直接找到别名所对应的js文件

```
alias: {
'vue$': 'vue/dist/vue.esm.js',
'@': resolve('src'),
}
```






## 2020-5-21
### 使用Eslint
#### 1. 创建项目
`npm init`
#### 2. 全局安裝&本地安装 / npx / npm脚本
   `npm i eslint -g`
   `npm i eslint -D`
#### 3. 设置package.json 文件
```
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"lint:c": "eslint --init",
"lint": "eslint src",
"lint:f": "eslint src --fix"
},
```
#### 4. 生成检测规则
`eslint  --init`
生成 `.eslintrc.js` 文件。提供编码规范

#### 5. 校验 src 下的代码
`eslint src`
校验代码的程序，自动检验 src 目录下所有的 .js 文件

#### 6. 自动修复
"lint": "eslint src --fix", 加上 --fix 参数，是 Eslint 提供的`自动修复基础错误`的功能。

`--fix 只能修复基础的不影响代码逻辑的错误，no-unused-vars 这种错误只能手动修改`

### 如何校验vue文件 

`eslint --ext .js,.vue src`
`--ext: 指定eslint要检验的文件后缀名(默认只有js文件)`

### 跳过 lint 校验(魔法注释)
 

例子：
```
const apple = "apple";  // eslint-disable-line
const balana = "balana";  // eslint-disable-line
  
/* eslint-disable */
alert('foo');
/* eslint-enable */
```

### 在git中设置提交前的校验

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



### vue-cli 2.0 

#### 如何修改windows的环境变量
    set : 查看当前windows操作系统所有的环境变量
    set name : 查看指定的环境变量的值
    set name=val : 设置环境变量(一次性的 关闭命令行窗口后 当前的设置就会失效)
    set name= : 删除环境变量

#### vue脚手架2.0
    安装脚手架:
        npm install -g vue-cli
            npm 帮你生成了脚手架对应的命令
                vue,vue-init,vue-list
            命令存放的目录 被配置在了环境变量的path中

    查阅一下脚手架可支持的模板
        vue list
        可以查到 template-name

    使用脚手架生成项目(以下命令得运行在项目的包裹目录下)
         vue init <template-name> <project-name>

    启动项目
        npm run dev
        npm start

#### webpack找包的机制
    https://webpack.docschina.org/concepts/module-resolution
    import App from "./App";
        经过vue-loader的处理 我们拿到的就是app组件的配置对象
    import Vue from "vue";
        webpack找到的到底是一个什么样的文件?
            webpack import的规则?
                import Vue from "vue";

                配别名的情况: "vue"是一个别名!!
                    直接找别名指定的文件

                沒有配别名的情况: "vue"是一个包!!
                    1. 根据resolve.modules这个配置去指定的目录中查找vue这个包
                    2. 找包的描述文件package.json
                    3. 根据resolve.mainFields 去package.json找对应的字段
                    4. 如果以上步骤没有找到对应的js文件 则按照resolve.mainFiles字段指定的文件名 去找对应的文件
                    5. 文件的扩展名 由resolve.extensions来决定
                    6. 如果以上步骤都没有成功  那么webpack就找不到对应的包!



### vue2.0脚手架目录分析
#### 目录分析
   build  : webpack的相关配置
   config : webpack的相关配置
   node_modules : 项目所有依赖的包
   src   : 源码目录
   static : 静态资源(项目的所有静态资源 图片 css文件 字体文件只能放在当前文件夹)
  .babelrc : babel的配置文件
  .editorconfig : 统一编辑器编码风格
  .eslintignore : 代码检验的忽略文件
  .eslintrc.js  : 代码检验的规则文件
  .gitignore    : git忽略文件
  .postcssrc.js : css后置处理器的配置文件
   index.html    : 项目的首页
   package.json  : 项目的描述文件
   package-lock.json : 项目中用到的所有依赖 及其 依赖的依赖
   README.md    : 项目的介绍文件

#### 为什么大多数的命令行工具需要全局安装 & 局部安装

    不同版本的webpack打包出来的js文件是不一样的!
        A电脑 装的是 webpack1.0
        B电脑 装的是 webpack2.0
        C电脑 装的是 webpack3.0
        D电脑 装的是 webpack4.0
        项目需要的webpack的版本 webpack3.0

    项目目录: D:/crm/sznsyh
        执行webpack命令进行打包  在D:/crm/sznsyh下寻找webpack.cmd
        几乎所有的命令行工具 都会去检查一下执行命令的目录下 有没有一个叫node_modules的目录
        如果有这个目录 .会去检查node_modules一个叫.bin的有没有同名的命令 如果有就执行

#### npx
    在命令行调用前 加上npx是为去本地找对应的命令;如果没有去全局找;如果全局也没有直接下载安装!

#### npm脚本
    直接去本地找对应的命令!! 有调用 没有报错(用户自己去装)

### vue-cli 4.0
#### @
    早期npm的生态特别的乱!
        vue-router
        vue-resource
        vue-cli
        vue-damu(这个包跟vue没有半毛钱关系 只是为了蹭一下vue的热度)
    npm团队为了解决这种乱像;退出了一个叫npm域的概念
        @vue 只能由vue的官方认证团队使用



#### 基本使用
##### 安装
    npm install -g @vue/cli      npm i -g vue-cli
##### 创建项目    
    vue create my-project        vue init webpack my-project
##### 开发环境启动
    npm run serve                npm start / npm run dev
##### 生产环境启动
    npm run build                npm run build
    
#### 配置  
    创建vue.config.js文件 该文件是一个可选的配置文件，
        如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli自动加载.
        这个文件应该导出一个包含了选项的对象：
            // vue.config.js
            module.exports = {
              // 选项...
            }

##### 选项 - @vue/cli自定义配置
    outputDir 
        Type: string
        Default: 'dist'
        当使用build进行生产环境构建时。生成的构建目录
    lintOnSave
        Type: boolean | 'error'
        Default: true
        @vue/cli4.0 的脚手架 默认选用的eslint的配置是recommended级别的
        是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。
        这个值会在 @vue/cli-plugin-eslint 被安装之后生效。

        设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
        设置为 false 时，关闭eslint校验
        设置为 "error" 时: 这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。

    devServer
        Type: Object
        所有 webpack-dev-server 的选项都支持

##### 选项 - webpack原生配置
    configureWebpack
        Type: Object 
        configureWebpack的属性值会通过 webpack-merge 合并到最终的配置中。
    
    
