//data就是data.json对应的js对象
const {seller,goods,ratings} = require("./data/data.json");
const path = require('path')

// 配置别名所需的函数
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports={
    lintOnSave: false, // 直接关闭eslint检查
    // lintOnSave: 'warning', // 只是输出提示信息, 项目正常运行
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
    },
    configureWebpack:{
        resolve: {
            alias: {
                // 配置别名
                'pages': resolve('src/pages'),
                'components': resolve('src/components'),
            }
        }
    }
}