$(function(){
    $(window).scroll(function(){
        let scroll = $(this).scrollTop();
        console.log(scroll);
        $('section').css('left',-scroll);
    });
    let numAc = $('article').length;
    let widSec= 200*numAc;
    let widTotal = widSec+600;
    $('section').width(widTotal);
    $('body').height(widSec);
    $('html,body').animate({'scrollTop':widSec},2000);
    
    $('article h2').click(function(e){
        e.preventDefault();
        let index = $(this).parent().index();
        let src = $(this).find('a').attr('href');
        let posAc = 200*index;

        $('article').removeClass('on');
        $(this).parent().addClass('on');
        $(this).siblings('p').find('img').attr('src',src);
        $('html,body').animate({'scrollTop':posAc},500);
    });
    $('span').click(function(){
        $('article').removeClass('on');
    });
    $('#navi>li').click(function(){
        let i = $(this).index();
        let posNavi = 1000*i;
        $('#navi>li,article').removeClass('on');
        $(this).addClass('on');
        $('html,body').stop().animate({'scrollTop':posNavi},300);
    });
});
