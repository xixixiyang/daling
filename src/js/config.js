// 配置文件
requirejs.config({
	// baseUrl:'js',

	// 设置别名
	// 格式：别名:真实路径
	paths:{
		'jquery':'../lib/jquery-3.1.1',
		'gdszoom':'../lib/jquery.gdszoom/jquery.gdszoom'
		
	},

	shim:{
		
		'gdszoom':["jquery"]
		
			 
			
		
	}
});

// 引入其他模块
// 在requireJS中，一个模块就是一个js文件
// 引入模块的路径：
// requirejs(['jquery','common','home',,'jquery.gdszoom'],function($,common,home,,gdszoom){
// 	home();
// 	common.animate();
// 	console.log($);

// 	$('#box');

// 	console.log(gdszoom)
// });