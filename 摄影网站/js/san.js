/*
* @Author: shuangshuang
* @Date:   2017-10-16 19:37:59
* @Last Modified by:   shuangshuang
* @Last Modified time: 2017-10-17 11:56:51
*/
let inde = 0;
$('.pho').click(function(){
    $('.big').css('transform','scale(1,1)');
    let s = $(this).children('img')[0].src;
    $('.big').children('img').attr('src',s);
    inde = $(this).index();
    console.log(inde)
})
$('.cuo').click(function(){
   $('.big').css('transform','scale(0,0)');
})
$('.zuo').click(function(){
    if(inde==0){
    	alert('已经是第一张图片啦~');
    	return;
    }
	inde--;
    let s = $('.pho').eq(inde).children('img')[0].src;
	$('.big').children('img').attr('src',s);
})
$('.you').click(function(){
	if(inde==$('.pho').length-1){
    	alert('已经是最后一张图片啦~');
    	return;
    }
    inde++;
    let s = $('.pho').eq(inde).children('img')[0].src;
	$('.big').children('img').attr('src',s);
})
   $('.big > img').on('click',function(e){
       let l = e.clientX;
       if(l<innerWidth/2){
       	$('.zuo').trigger('click');
       }
   })
   $('.big > img').on('click',function(e){
       let l = e.clientX;
       if(l>innerWidth/2){
       	$('.you').trigger('click');
       }
   })
   $(document).on('click',function(){
   	    return false;  //110-64=46
   })
