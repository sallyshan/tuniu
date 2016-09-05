define([],function(){
    return {
        // 显示遮罩层
        showMark: function () {
            if ($('#ui-id-mark').length == 0) {
                $('<div id="ui-id-mark" class="mask-layer"></div>').appendTo($("body"));
            }
        },
        // 删除遮罩层
        hideMark: function () {
            $('#ui-id-mark').remove();
        },
    // 检测手机号码
    checkPhone: function (phone) {
        var reg = /^1[3578]\d{9}$/;
        if (reg.test(phone)) {
            return true;
        }
        return false;
    },
    // 检测密码
    checkPwd: function (pwd) {
        var reg = /^\w{5,20}$/;
        if (reg.test(pwd)) {
            return true;
        }
        return false;
     }
    }
});