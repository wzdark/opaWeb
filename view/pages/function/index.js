$(function(){
	/*入驻企业图片hover事件函数 */
	$('.image_bar').find('.image_bar_item').hover(function(){
		/*先让所以的提示不可见*/
		$('.case_info_box').css('display','none');
		
		/*再让对应的提示可见*/
		var index = $(".image_bar .image_bar_item").index(this);
		$('.case_info_box').eq(index).css('display','block')
		
	},function(){
		
	});
	
});
