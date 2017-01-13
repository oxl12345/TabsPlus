;
(function(method) {
	method(window, document, jQuery)
}(function(w, d, $) {
	$.fn.oTabs = function(options) {
		var settings={
			styleCate:"tab-active",
			Initevent:"click"
		};
		$.extend(settings,options);		
		var tabs = $(".base-tab li a");
		var content = $(".contain .tabs-content>div");
		//设置默认选选项卡
		$(".base-tab li a:first").addClass(settings.styleCate);
		//绑定事件
		return tabs.on(settings.Initevent, function(e) {
			e.preventDefault(); //阻止默认事件
			//移除样式
			content.removeClass("tab-content-active");
			var index = $(this).data("index"); //获取下标
			content.eq(index-1).addClass("tab-content-active");		
			
			tabs.removeClass(settings.styleCate);	//移除样式
			$(this).addClass(settings.styleCate);	//添加样式			
		});
	};
}));