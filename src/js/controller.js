  //定义一个名为myApp的模块
        var myApp=angular.module('myApp',['ui.router']);
        myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
            $stateProvider
                    .state('index',{
                        url:'/home',
                        templateUrl:"home.html",
                        controller:function($scope,$state) {
                            $("#place").on("focus",function(){
                                $(".plugin").show();
                            })
                            $(".local-city").on("click",function(){
                                  $(".hotelcity").show().css({"position":"absolute","top":"0"});
                              })
                          } 
                    })
                    .state('bourn',{
                        url:'/bourn',
                        templateUrl:"bourn.html",
                        controller:function($state,$scope) {
                         $("#place").on("focus",function(){
                               $(".plugin").show();
                          })
                          $(".local-city").on("click",function(){
                                  $(".hotelcity").show().css({"position":"absolute","top":"0"});
                          })
                          $(".aside").on("click","a",function(e){
                            e.preventDefault();
                             $(this).addClass("hbg").siblings().removeClass("hbg");
                            var ID=$(this).attr("href");
                             $(ID).css({"display":"block"}).siblings("div").css({"display":"none"});
                          })
                          
                        }
                    })
                    .state('find',{
                        url:'/find',
                        templateUrl:"find.html",
                        controller:function($state) {
                        }
                    })
                    .state('journey',{
                        url:'/journey',
                        templateUrl:"journey.html",
                        controller:function(){
                         function bindEvent(){
                            // 加
                           $(".jia").on("click",function(){
                              if($(this).hasClass("no")){
                                  return;
                              }
                              $(".jia").removeClass("no");
                              var count=parseInt($("#vv").val());
                              count++;
                              if(count>=10){
                                    count=10;
                                    $(this).addClass("no");
                                    $(".jian").removeClass("no");
                                }
                                $("#vv").val(count);
                            });
                            // 减
                            $(".jian").on("click",function(){
                                if($(this).hasClass("no")){
                                    return;
                                }
                                $(".jian").removeClass("no");
                                var count=parseInt($("#vv").val());
                                count--;
                                if(count<=1){
                                    count=1;
                                    $(this).addClass("no");
                                     $(".jia").removeClass("no");
                                }
                                $("#vv").val(count);
                            });
                           }
                          bindEvent();
                          $(".local-city").on("click",function(){
                                  $(".hotelcity").show().css({"position":"absolute","top":"0"});
                          })
                        }
                    })
                    .state('my',{
                        url:'/my',
                        templateUrl:"my.html",
                        controller:function($scope) {
                        }
                    })
                    .state('my.login',{
                         url:'/login',
                         templateUrl:"login.html",
                         controller:function($scope) {
                         $(".tit").on("click","a",function(e){
                         e.preventDefault();
                          var PID=$(this).attr("data");
                         $(PID).css({"display":"block"}).siblings("ul").css({"display":"none"});
                         $(this).addClass("hb").siblings().removeClass("hb");
                         })
                         //全局的验证码
                         var textCode = "";
                          function bindEvent() {
                           $("#phone").on("input propertychange", function () {
                                var reg = /\D+/g;
                                var phone = $(this).val();
                                $(this).val(phone.replace(reg, ""));
                            })
                            //点击获取验证码
                            $("#code").on("click", getTestCode);
                            $("#log").on("click",function(){
                              var nc=$("#nc").val(),
                                  yzz=$("#yzz").val(),
                                  pas=$("#pas").val();
                                 if(nc && yzz && pas){
                                  alert("信息已完善，请展示");
                                  }else{
                                    alert("请把信息填写完整");
                                  }
                            })
                            }
                            //验证手机号码：
                            function checkPhone(phone) {
                             var reg = /^1[34578]\d{9}$/;
                                if (reg.test(phone)) {
                                     return true;
                                }
                                 return false;
                            }
                            //输入的验证码
                            function getTestCode() {
                        var phone = $.trim($("#phone").val()), //去空格
                        times = 10,
                        timer = null,
                        $btn = $(this),
                        timerFn = null;
                        if ($btn.data("clicked")) return;
                        if (!checkPhone(phone)) {
                            alert("请输入有效的手机号码");
                            return;
                         }
                        //设置一个定时器
                        timerFn = function () {
                        console.log($btn)
                        timer = setInterval(function () {
                         times--;
                        if (times <= 0) {
                         clearInterval(timer);
                        $btn.text("获取验证码").data("clicked", false);
                        } else {
                        $btn.text(times + '秒后重试').data("clicked", true);
                        }
                        }, 1000)
                        }
                             timerFn();
                            }
                            bindEvent();
                          }
                      })
              $urlRouterProvider.otherwise('/home');
        }]);
        //定义控制器
        myApp.controller('ctrl',['$scope',function($scope) {
             $scope.change = function(){
                  history.back();
             };
             $scope.dia=function(){
              if ($('#ui-id-mark').length == 0) {
                $('<div id="ui-id-mark" class="mask-layer"></div>').appendTo($("body"));
              }
             $(".tkd").css({"display":"block"});
             }
             $scope.delate=function(){
              $('.plugin').hide();
             }
        }]);