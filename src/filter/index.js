/**
 * Created by huangfeng on 2016/9/6.
 */

function pluralize(time, label) {
    if (time === 1) {
        return time + label
    }
    return time + label + 's';
}

var filter={
    reverse:function(time,type){
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
    },
    fromNow:function(time){
        const between = Date.now() / 1000 - Number(time)
        if (between < 3600) {
            return pluralize(~~(between / 60), ' minute')
        } else if (between < 86400) {
            return pluralize(~~(between / 3600), ' hour')
        } else {
            return pluralize(~~(between / 86400), ' day')
        }
    }

}

module.exports=filter;



