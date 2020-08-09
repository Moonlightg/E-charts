/**
 * 弹出框
 * @param id
 * 
 * id 以后扩展判断类型 根据型号去创建不同的弹出框 
 * mes 弹出框的消息内容
 * color 弹出框的样式主题
 */
function showMes(type,mes,color,callback){
	var box = "";
	if(color==undefined||color==null||color==""){
		color="alert-color";
	}
	if(type =="add"){
		var dailog = '<div class="dailog"></div>';
		var contentAlert = '<div class="alert-kuang"><ul><li class="first-li-head '+color+'"> \
			<span>消息提示框</span><span id="deleteImg" onclick="closeAlert();"></span></li><li class="secend-li-content"> \
			'+mes+'</li><li class="three-li-btn">';
		if(!callback){
			contentAlert+='<span id="sureBtn"  onclick="closeAlert();">确认</span>';
		}
		else{
			contentAlert+='<span id="sureBtn"  onclick="reload();">确认</span>';
		}
		contentAlert+='</li></ul></div>';
		box = $('<div id="alertBox"></div>').append(dailog+contentAlert);
		$('body').append(box);
	}else if(type=="del"){
		var dailog = '<div class="dailog"></div>';
		var contentAlert = '<div class="alert-kuang"><ul><li class="first-li-head '+color+'"> \
			<span>消息提示框</span><span id="deleteImg" onclick="closeAlert();"></span></li><li class="secend-li-content"> \
			'+mes+'</li><li class="three-li-btn"><span id="sureBtn" >确认</span><span id="cancelBtn" onclick="closeAlert();">取消</span></li></ul></div>';
		box = $('<div id="alertBox"></div>').append(dailog+contentAlert);
		$('body').append(box);
		$('#sureBtn').on('click',function(){
			if(callback){
				callback();
				$('#alertBox').remove();
			}
		});
	}
}
function reload(){
	window.location.reload();
}
function closeAlert(){
	$('#alertBox').remove();
}
