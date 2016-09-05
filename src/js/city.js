define(['jquery','js/plugin','data/citydata'],function($,plugin,cities){
    var City = function(){
        plugin.apply(this,[{showClass:null}]);
        this.tpl =
            '<div class="city">'+
            '<div class="header"><em class="back" ng-click="delate()">X</em><span>城市选择</span></div>'+
            '<div class="city-content">'+
            '<div class="search-area">'+
            '<section><i></i><input class="search-msg" type="text" placeholder="nanjing/nj/南京"></section>'+
            '</div>'+
                '<div class="gding">'+
            '<p class="cont-title clear">根据您的定位推荐</p>'+
            '<span>北京</span>'+
                '</div>'+
                '<div class="history">'+
            '<p class="cont-title clear">历史记录</p>'+
            '<span>北京</span>'+
                '</div>'+
            '<div class="hot-city">'+
            '<p class="cont-title clear">热门城市</p>'+
            '<div class="hc"></div>'+
            '</div>'+
            '<div class="alphabet">'+
            '<ol></ol>'+
            '</div>'+
            '<div class="city-detail clear"></div>'+
            '</div>'+
            '</div>'+
            '<div class="search-result"></div>';
        var allCity = this.allCity = cities.cityList;
        var obj = {};
        var alphabet = [];
        var tmp =null;
        allCity.forEach(function(v,i){
            tmp = v[1].charAt(0).toUpperCase();
            if(!obj[tmp]){
                obj[tmp] = [];
                alphabet.push(tmp);
            }
            obj[tmp].push(v);

        });
        this.obj = obj;
        this.alphabet = alphabet.sort();
    };
    City.prototype = new plugin();
    City.prototype.init = function(){
        this.pluginDom.innerHTML = this.tpl;
        this.render();
        this.bindEvt();
        //默认展示A开头的城市
        $('.alphabet').find('li[data=A]').click();
    };
    City.prototype.render=function(){
        var str ='';
        this.alphabet.forEach(function(v,i){
            str += '<li data="'+v+'">'+v+'</li>';
        });
        $('.alphabet').find('ol').html(str);

        str='';
        cities.hotList.forEach(function(v,i){
            str += '<span>'+v[0]+'</span>';
        });
        $('.hot-city div').html(str);
    };
    City.prototype.bindEvt=function(){
        var that = this;
        this.wrapper = $('.city');
        $('.alphabet').on('click','li',function(){
            var tag = $(this).attr('data');
            var str = '<p class="cont-title cont-title1">'+tag+'</p>';
            that.obj[tag].forEach(function(v,i){
                str+='<span>'+v[0]+'</span>'
            });
            $('.city-detail').html(str);
        });
        $(this.pluginDom).on('click','span',function(){
            var name = $(this).text();
             // console.log(name)
            // that.targetEle.text(name);
           // that.hide();
           //这是改了之后，为了没问题，原内容应该是上面的。
           $(".local-city").text(name);
           $(".local-city").val(name);
           $(".hotelcity").hide();
        });

        this.wrapper.find('.search-msg').on('input propertychange',function(){
            that.match($(this).val());
        })
    };
    City.prototype.match = function(_key){
        var len = _key.length;
        var domWrap = $(this.pluginDom);
        if(len>0){
            domWrap.find('.search-result').show();
        }else{
            domWrap.find('.search-result').hide();
        }
        var arr = [];
        this.allCity.forEach(function(v,i){
            if(v[0].substr(0,len) == _key || v[1].substr(0,len) == _key ||v[2].substr(0,len) == _key){
                arr.push(v);
            }
        });

        var str = '';
        arr.forEach(function(v,i){
            str+='<span>'+v[0]+'</span>';
        });
        $('.search-result').html(str);
    };
    City.prototype.show = function(targetEle){
        this.init();
        this._show_();
        this.targetEle = targetEle;
    };
    City.prototype.hide = function(){
        this._hide_();
    };
    City.prototype.afterShow = function(){
        this.wrapper.scrollTop(0);
    };
    City.prototype.afterHide = function(){
        $(this.pluginDom).find('.search-result').hide();
        $(this.pluginDom).find('.search-msg').val('');
    };
    return new City();

});