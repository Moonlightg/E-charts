//计算模块高宽
function reloadWindow(){
	var windowHeight=document.documentElement.clientHeight;
	var windowWidth=document.documentElement.clientWidth;
	$('.main').css("height",windowHeight-175);
	$('.bform-detail-wrap').css("height",windowHeight-145);
}
	
window.setInterval('reloadWindow();',300);

//点击清空
	function clearDefaultText (el,message){
		var obj = el;
		if(typeof(el) == "string")
		obj = document.getElementByIdx_x(id);
		if(obj.value == message){
				obj.value = "";
			}
				obj.onblur = function()
			{
				if(obj.value == "")
			{
			   obj.value = message;
			}
		}
	}




