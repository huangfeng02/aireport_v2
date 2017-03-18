/**
 * Created by huangfeng on 2016/4/2.
 */


var utils = {
    addFixedMask:function(filter){
        if($("#mask").length>0){
            return;
        }
        var opacity=filter||0.5;
        console.log(opacity)
        var mask='<div id="mask" style="background-color: rgba(0, 0, 0, '+opacity+'); z-index: 1000; position: absolute;' +
            ' left: 0px; right: 0px; top: 0px; bottom: 0px;"'+'></div>';
        $("body").append(mask);
        this.stopPreventDefault("mask");
    },
    addMask:function(){
        if($("#mask").length>0){
            return;
        }
        var mask='<div id="mask" style="background-color: rgba(0, 0, 0, 0.5); z-index: 1000; position: fixed;' +
            ' left: 0; right: 0; top: 0; bottom: 0;height:100%;"'+'></div>';
        $("body").append(mask);
        this.stopPreventDefault("mask");
    },
    addLoadMask:function(){
        if($("#loadMask").length>0){
            return;
        }
        var height= $(document).height();
        var mask='<div id="loadMask" style="background-color: rgba(0, 0, 0, 0.5); z-index: 100; position: absolute;' +
            ' left: 0px; right: 0px; top: 0px; bottom: 0px; height:100%"><p style="text-align: center; padding-top:150px;"><img src="/console/img/loading.gif"/></p></div>';
        $("body").append(mask);
    },
    addLoading:function(){
        if($(".loading").length>0){
            $(".loading").show();
        }else{
            $("body").append('<div class="loading"></div>');
        }
    },
    removeMask:function(){
        $("#mask").remove();
    },
    removeLoadMask:function(){
        $("#loadMask").remove();
    },
    removeLoading:function(){
        $(".loading").remove();
    },
    alertMsg:function(msg){
        var msgDiv='<div class="confirm" id="confirm"><div class="content">'+msg+'</div>' +
            '<div class="confirm-bottom confirm-bottom-single"><a href="javascript:;" id="btn-confirm">确认</a></div></div>';
        this.addMask()
        $("body").append(msgDiv);
    },
    alertConfirmMsg:function(msg,ok,cancle){
        var msgDiv='<div class="confirm" id="confirm"><div class="content">'+msg+'</div>' +
            '<div class="confirm-bottom"><a href="javascript:;" id="btn-confirm">确认</a><a href="javascript:;" id="btn-cancel-confirm">取消</a></div></div>';
        this.addMask()
        $("body").append(msgDiv);
        if(ok){
            $("#btn-confirm").click(function(){
                ok()
            })
        }
        if(cancle){
            $("#btn-cancel-confirm").click(function(){
                cancle()
            })
        }
    },
    alertConfirmMsgSingle:function(msg,ok){
        var msgDiv='<div class="confirm" id="confirm"><div class="content">'+msg+'</div>' +
            '<div class="confirm-bottom"><a href="javascript:;" id="btn-confirm" style="border: none">确认</a></div></div>';
        this.addMask()
        $("body").append(msgDiv);
        if(ok){
            $("#btn-confirm").click(function(){
                ok()
            })
        }
    },
    alertMsgTip:function(msg){
        if($("#msg-tip").length>0){
            return;
        }
        var msgDiv='<div class="msg-tip" id="msg-tip""><span>'+msg+'</span></div>';
        $("body").append(msgDiv);
        setTimeout(function(){
            $("#msg-tip").remove();
        },1500)
    },
    removeMsg:function(){
        $("#confirm").remove();
        $("#mask").remove();
    },
    getScrollHeight: function () {//取文档内容实际高�?
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    },
    getScrollTop: function () {//取窗口滚动条高度
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        }
        else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    },
    getClientHeight: function () {//取窗口可视范围的高度
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        else {
            var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
    },
    getfiexdTop:function(height){
        var scrollTop=$(window).scrollTop();
        return height+scrollTop;
    },
    stopPreventDefault:function(id){
        document.getElementById(id).addEventListener('touchmove',function(e){
            e.preventDefault();
        },false)
    },
    pageScroll:function(){
        window.scrollBy(0,-80);
        var scrolldelay = setTimeout('juhai.utils.pageScroll()',10);
        var sTop=document.documentElement.scrollTop+document.body.scrollTop;
        if(sTop==0) clearTimeout(scrolldelay);
    },
    whichTransitionEvent: function () {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        }
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    },

    goTop:function(top){
        $(window).on("scroll",function(){
            var st = $(this).scrollTop();
            if (st >top){
                $(".gotop-btn").show();
            } else {
                $(".gotop-btn").hide();
            }
        });
        $(".gotop-btn").on("click",function(e){
            $(window).scrollTop(0)
        })
    },
    containsHtml:function containsHtml(value) {
        return /<.[^<>]*?>/.test(value) || /&[#a-z0-9]+?;/i.test(value) || /[<>]/.test(value);
    }
};

utils.getCurentTime=function(){
    var now = new Date();
    var year = now.getFullYear();       //�?
    var month = now.getMonth() + 1;     //�?
    var day = now.getDate();            //�?
    var hh = now.getHours();            //�?
    var mm = now.getMinutes();          //�?
    var clock = year + "-";
    if(month < 10)
        clock += "0";
    clock += month + "-";
    if(day < 10)
        clock += "0";
    clock += day + " ";
    if(hh < 10)
        clock += "0";
    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm;
    return(clock);
}

utils.getRequest =function() {
    var url = decodeURIComponent(location.search);
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

utils.fommatDate=function(time,type){
    var d = new Date(time),month,date,hours,minutes,second;
    if(parseInt(d.getSeconds())<10){
        second="0"+d.getSeconds();
    }else{
        second=d.getSeconds();
    }
    if(parseInt(d.getMinutes())<10){
        minutes="0"+d.getMinutes();
    }else{
        minutes=d.getMinutes();
    }
    if(parseInt(d.getHours())<10){
        hours="0"+d.getHours();
    }else{
        hours=d.getHours();
    }
    if(parseInt(d.getDate())<10){
        date="0"+d.getDate();
    }else{
        date=d.getDate();
    }
    if((d.getMonth()+1)<10){
        month="0"+(d.getMonth()+1);
    }else{
        month=d.getMonth()+1;
    }
    if(type==4){
        return d.getFullYear()+"-"+month+"-"+date+" "+hours+":"+minutes;
    }
    if(type==3){
        return d.getFullYear()+"-"+month+"-"+date;
    }
    if(type==2){
        return month+"-"+date+" "+hours+":"+minutes;
    }
    if(type==1){
        return hours+":"+minutes;
    }
    return d.getFullYear()+"-"+month+"-"+date+" "+hours+":"+minutes+":"+second;
}

utils.getDateDiff=function(dateTimeStamp){
    //JavaScript函数�?
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    if(diffValue < 0){
        //若日期不符则弹出窗口告之
        //alert("结束日期不能小于�?始日期！");
    }
    var monthC =diffValue/month;
    var yearC =monthC/12;
    var weekC =diffValue/(7*day);
    var dayC =diffValue/day;
    var hourC =diffValue/hour;
    var minC =diffValue/minute;
    var result;
    if(yearC>=1){
        result=parseInt(yearC) + "年前";
    }
    else if(monthC>=1){
        result=parseInt(monthC) + "个月�?";
    }
    else if(weekC>=1){
        result=parseInt(weekC) + "周前";
    }
    else if(dayC>=1){
        result=parseInt(dayC) +"天前";
    }
    else if(hourC>=1){
        result=parseInt(hourC) +"个小时前";
    }
    else if(minC>=1){
        result=parseInt(minC) +"分钟�?";
    }else
        result="刚刚发表";
    return result;
}

utils.browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内�?
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终�?
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览�?
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或�?�QQHD浏览�?
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }()
};


utils.validate={
    isEmail:function(str){
        var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(!reg.test(str)){
            return false
        }
        return true;
    },
    isMobile:function(str){
        var reg=/^1\d{10}$/;
        if(!reg.test(str)){
            return false
        }
        return true;
    }
}

utils.formatDate=function(){
    var t = new Date(time);
    var tf = function(i){return (i < 10 ? '0' : '') + i};
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
        switch(a){
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}

utils.getCookie=function(name){
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

utils.isEmpty = function (str) {
    if (str === null || str === undefined || str === '') {
        return true;
    } else {
        return false;
    }
}

module.exports=utils;
