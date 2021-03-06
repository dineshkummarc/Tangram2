///import baidu.createChain;

/// Tangram 1.x Code Start
/**
 * @author wangxiao
 * @email  1988wangxiao@gmail.com
 */
/**
 * @description 对异步调用的封装
 * @name baidu.async
 * @namespace
 * @grammar baidu.async(url)
 * @param   {String} 一个目标的url字符串
 * @return  {tangramAsync} 返回一个TangramAsync对象
 */

baidu.createChain("async",

// 执行方法
function(url){
    return typeof url === 'string'? new baidu.async.$Async(url):new baidu.async.$Async();
},

// constructor
function(url){
    this.url = url;
});

/// Tangram 1.x Code End
