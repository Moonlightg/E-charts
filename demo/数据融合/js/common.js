$('#screen-collapse').on('click',function(){
    // is-open 重置移动端搜索条件栏目样式
    var obj = $(this).parents('.screen-wrap');
    if (obj.hasClass('is-open')) {
        obj.removeClass('is-open');
        $('body').removeClass('is-overflow');
    } else {
        obj.addClass('is-open');
        $('body').addClass('is-overflow');
    }
    $(this).toggleClass('on');
    $('.collapse').collapse('toggle');
    
})

$('.lp-head .login-tab').on('click',function(){
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.lp-body .lp-item').eq(index).addClass('active').siblings().removeClass('active');
});

$('.search-nav .search-nav-item').on('click',function(){
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
});

$('.component-slide .slide-item').on('click',function(){
	var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('.group-wrap .group-item').eq(index).addClass('active').siblings().removeClass('active');
});

$('.sd-section').scroll(function(){
    var h = $(".group-tabs").offset().top;
    if($(this).scrollTop()>h){
        $(".group-tabs").addClass('fixed');
    } else {
        $(".group-tabs").removeClass('fixed');
    }
});

$('.follow-btn').on('click', function(){
	var html = '<i class="fa fa-plus"></i>关注'
	if($(this).hasClass('on')){
		$(this).removeClass('on').html(html);
	} else {
		$(this).addClass('on').html('取消关注');
	}
});

$('.app-nav-icon').on('click', function(){
    $('.app-nav').toggleClass('active');
});

$('.app-nav .app-drop').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
});


$('.standard-nav .sn-item a').on('click',function(){
    var isTwo = $(this).hasClass('nav-two');
    var isActive = $(this).parent().hasClass('active');
    if (isTwo) {
        if (isActive) {
            $(this).next("ul").slideUp(250);
        } else {
            $(this).next("ul").slideDown(250);
        }
        console.log('存在二级菜单');
        $(this).parent().toggleClass('active');
    } else {
        console.log('没有二级菜单,直接跳转');
    }
});

$('.standard-m').on('click',function(){
    var obj = $('.standard-wrap');
    if (obj.hasClass('active')) {
        obj.removeClass('active');
        $(this).text('目录');
    } else {
        obj.addClass('active');
        $(this).text('关闭');
    }
});

$('.close-nav').on('click',function(){
    $('.standard-wrap').removeClass('active');
    $('.standard-m').text('目录');
});
