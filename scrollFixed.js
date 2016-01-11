/**
*Copyright (c) 2016 Cynthia
*Date:2016-01-11
*使用CSS样式position:fixed后，使其水平滚动的方法
*$("#fixed").scrollFixed({fixed:left});
*/

;(function($){
	$.extend($.fn, {
		scrollFixed:function(settings){
			settings = $.extend({
				fixed:"left"
			},settings);
			settings.originLeft = parseInt(this.css("left"));
			settings.originRight = parseInt(this.css("right"));
			var target = this;

			//$(window).resize(this.fixPosition(settings));

			function fixPosition(){
				if(settings.fixed == "left"){
					target.css("left",settings.originLeft-$(window).scrollLeft());
				}else if(settings.fixed == "right"){
					target.css("right",$(window).scrollLeft() + $(window).width() - $(document).width() + settings.originRight);
				}
			}
			$(window).scroll(function(){
				fixPosition();
			});
		}

	});
})(jQuery);

$(function(){
	$(".header").scrollFixed({fixed:"left"});
});