//依赖js/city这个文件
define(['jquery','js/city','js/common'],function($,city,common){
    $(".delate").on("click",function(){
        common.hideMark();
        $(".tkd").css({"display":"none"});
    });
    $(".local-city").on("click",function(){
           city.show($(this));
    })  
    $(".hotelcity").on("click","em",function(){
        $(".hotelcity").hide();
    })
});
