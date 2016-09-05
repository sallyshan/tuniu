require.config({
    paths:{
        'jquery':'lib/jquery',
        'swiper':'lib/swiper.min'
    }
});
require(["swiper",'js/index'],function(swiper,index){
    var swiper = new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 12
    });
});
