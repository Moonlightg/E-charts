$(function(){     
    if($("#todayDate").length > 0) {//元素存在时执行
        showTime();//动态显示日期
    }
});
//日期格式化
function timeStamp2String(time){
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    var week = ' 星期'+'日一二三四五六'.charAt (datetime.getDay());
    // return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
    return "<div class='time-box'><div class='time-l'><p>" + year + "年" + month + "月" + date + "日</p>" + "<p>" + week + "</p></div>" + "<div class='hms'>" + hour+":"+minute+":"+second + "</div></div>";
}

//动态显示日期
var curTime = null;
function showTime() {
    curTime = new Date();
    $("#todayDate").html(timeStamp2String(curTime));
    setTimeout("showTime()", 1000);
}