//锚点定位
//32237384@qq.com
/*
 * event传入CLASS或ID
 * time 滚动时间 默认1秒
 */
var AnchorLocation = function(event,time) {	
	var _top = arc_anchor(),//定义变量，并执行函数
		 _sel = $(event),//定义变量
		 _time = time;//定义变量
	_sel.find('a').on('click', function() {//导航点击事件
		var _this = $(this),
			  val = _this.attr('href').split('#')[1];//定义变量获取参数
		_this.addClass('active').siblings('a').removeClass('active');//添加CLASS，并移除同胞CLASS
		if(val) {//值不为空
			anchor(val);//执行滚动函数	
		}
	});
	_sel.find('a').each(function(){//遍历a
		var _this = $(this),
			  val = _this.attr('href').split('#')[1];//定义变量获取参数
		if(val==_top){//判断两个参数是否相同
			_this.addClass('active').siblings('a').removeClass('active');//添加CLASS，并移除同胞CLASS
		}
	});

	function arc_anchor() {
		var url = window.location.toString(),//获取地址栏地址
			 id = url.split("#")[1];//获取参数
		if(id) {
			setTimeout(function(){				
				anchor(id);//执行函数
			},300);
		}
		return id;//返回id
	}

	function anchor(id) {
		if(_time=='' || _time==undefined){//判断变量是否为空或未定义
			_time = 1;//条件成立重新赋值
		}
		var t = ($('#' + id).offset().top)-80;//获取元素绝对位置，并减去80		
		$('html,body').animate({//文档滚动
			scrollTop: t
		}, _time*1000);
	}

}