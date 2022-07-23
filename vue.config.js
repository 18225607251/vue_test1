module.exports = {
    pages: {
     index: {
      entry:'src/main.js'
      },
    },
    lintOnSave:false,//关闭语法检查
    //开启代理服务器，代理服务器是8080端口，代理服务器面向5000端口服务器开启的
    //单个服务器
    // devServer:{
    //   proxy:'http://localhost:5000'
    // }

    //多个代理服务器
    devServer:{
      proxy:{
        '/stu':{
          target:'http://localhost:5000',
          pathRewrite:{'^/stu':''},//将代理服务器转发给服务器时省略请求前缀
          ws:true,//支持websocket
          changeOrgin:true//面向服务器端口声称相同
        },
        '/car':{
          target:'http://localhost:5001',
          pathRewrite:{'^/car':''},//将代理服务器转发给服务器时省略请求前缀
          ws:true,//支持websocket
          changeOrgin:true//面向服务器端口声称相同
        }
      }
    }
  }