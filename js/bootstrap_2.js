$(function(){
    'use strict'
    var winh   =$(window).height(),
        upperH =$('.upper-bar').innerHeight(),
        navH =$('.navbar').innerHeight();
    $('.slider , .carousel-item').height(winh - (upperH + navH));
    $('.features-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.features-work .shuffle .col-sm-3').fadeIn(1000);
        }
        else{
            $('.features-work .shuffle .col-sm-3').fadeOut(1000);
            $($(this).data('class')).parent().fadeIn(500) ;
        }
    })
});