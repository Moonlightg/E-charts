	
//请求后台获取增加坐标信息
	function getAllPolygon(type){
		
		$.ajax({
			   type: 'POST',
			   url: app+"baiduMapController/listForJsonByC" ,
			   data: {'fileNumber': type },
			   success: function (data) { //返回json结果
			        //console.info(data[0].fileNumber);
			        getData(data.maps);
			    } ,
			   dataType: "json"
			});
	}
	
	function getData(data){debugger
		for (var i = 0; i < data.length; i++) {
			var pointsList=[];
			var dat = data[i];
			//拆分坐标节点
			var points = dat.reservedfieldA.split(",");
			for (var e = 0;e < points.length; e++) {
				var point = points[e];
				//拆分坐标组成经纬度
				var sptp=point.split("|");
				pointsList.push(new BMap.Point(sptp[0],sptp[1]));
			}
			var polygon1 = new BMap.Polygon(pointsList, {strokeColor:"red", strokeWeight:6, strokeOpacity:0.01,fillOpacity:0.01});
			if(dat.fileNumber == '交通基建'){
				polygon1 = new BMap.Polyline(pointsList, {strokeColor:"red", strokeWeight:6, strokeOpacity:0.01,fillOpacity:0.01});
			}
			//添加标签
           	polygon1.label = label(pointsList[0],dat.fileTitle);
           	//title  作为唯一标识
           	polygon1.title=dat.fileTitle+"|"+dat.id;
           	//添加事件
           	polygon1.addEventListener("mouseover", mouseover); 
           	polygon1.addEventListener("mouseout", mouseout); 
           	polygon1.addEventListener("click", click); 
           	 //增加多边形
           	map.addOverlay(polygon1);  
            //overlays.push(polygon1);
		}
	}

	 //清除全部
   function clearAll() {
		for(var i = 0; i < overlays.length; i++){
			var arra = overlays[i].getPath();
				for(var t = 0; t < arra.length; t++){
					var point = arra[t];
					console.info(point.lng+","+point.lat);
				}
            map.removeOverlay(overlays[i]);
        }
        overlays.length = 0   
    }
	 //关闭编辑功能
    function diaableAll() {
		for(var i = 0; i < overlays.length; i++){
			overlays[i].disableEditing(); 
        }
    }
    //获取覆盖物列表
    function  AllList() {
    	var html ="";
		for(var i = 0; i < overlays.length; i++){
			var text="";
			if (overlays[i] instanceof BMap.Polyline){//折线覆盖物对象
				text="折线";
			}else if (overlays[i] instanceof BMap.Polygon){//多边形覆盖物
				text="多边形";
			}else if (overlays[i] instanceof BMap.Circle) {//原型
				text="圆形";
			} else{
				text="其它";
			}
			html+="<button onclick = \"editSingle('"+i+"');\"> "+text+i+"</button>";
			overlays[i].disableEditing(); 
        }
		document.getElementById('control2').innerHTML =html;
    }
    //编辑全部图形
    function editAll() {
		for(var i = 0; i < overlays.length; i++){
			 overlays[i].enableEditing(); 
        }
    }
    //编辑单个图形
    function editSingle(i) {
		overlays[i].enableEditing();
		//隐藏其它图形编辑
		for(var k = 0; k < overlays.length; k++){
			if(k!=i){
				 overlays[k].disableEditing(); 
			}
       }
		var arra = overlays[i].getPath();
		overlays[i].setStrokeColor('#FFFF00');
		overlays[i].setStrokeOpacity(0.9);
		overlays[i].setFillOpacity(0.01);
		overlays[i].setStrokeWeight(2);
		overlays[i].setStrokeStyle("solid");
		console.info("获取覆盖物坐标列表"+i);
		var points="";
		for(var t = 0; t < arra.length; t++){
			var point = arra[t];
			console.info(point.lng+","+point.lat);
			if(arra.length==1){
				points+=point.lng+"|"+point.lat 
			}else if(t==arra.length-1){
				points+=point.lng+"|"+point.lat 
			}else{
				points+=point.lng+"|"+point.lat+","
			}
		}
		console.info("获取覆盖物坐标组合=====" +points);
    }
    //增加标签
    function label(point,text){
				//信息窗口
	        	var opts = {
				//  position : point,    // 指定文本标注所在的地理位置
				  offset   : new BMap.Size(30, -30)    //设置文本偏移量
				}
				var label = new BMap.Label(text, opts);  // 创建文本标注对象
				label.setStyle({
					 color : "red",
					 fontSize : "12px",
					 height : "20px",
					 lineHeight : "20px",
					 fontFamily:"微软雅黑"
				 });
				label.hide();
				map.addOverlay(label); 
				return label;
			}
        	
        		
	/**
	 * 各种鼠标事件绑定
	 */
	function click(e) {
	    //alert(e.target.title);
		console.info(e.target.title)
	    e.target.title.split("|")
	    infoWindoes( e.target.title.split("|")[0],e.point,e.target.title.split("|")[1]);
	}

	function mouseover(e) {
		var p = e.target;
  		console.info(e.target.label);
  		//p.setStrokeColor('#FFFF00');
  		p.setStrokeColor('red');
  		p.setStrokeOpacity(0.9);
  		p.setFillOpacity(0.01);
  		p.setStrokeWeight(6);
  		p.setStrokeStyle("solid");
  		p.getPath();
  		
  		//增添提示标签
  		e.target.label.setZIndex(99);
  	    e.target.label.setPosition(e.point);
  	    e.target.label.show();
	}

	function mousemove(e) {
	    e.target.label.setPosition(e.point);
	}

	function mouseout(e) {
		var p = e.target;
 		 
  		p.setStrokeColor('blue');
  		p.setStrokeOpacity(0.01);
  		p.setFillOpacity(0.01);
  		p.setStrokeWeight(2);
  		//增加提示标签
  		e.target.label.hide();
	}
	
	function deletePoint(lable){
		var allOverlay = map.getOverlays();
		for (var i = 0; i < allOverlay.length -1; i++){
			if(allOverlay[i].getLabel().content == lable){
				map.removeOverlay(allOverlay[i]);
				return false;
			}
		}
	}
	//创建标注提示图标
	function infoWindoes(title,point,id){
		var sContent =
       		"<div style='cursor:pointer' onclick=\"openTabs('"+id+"','"+title+"')\"><h4 style='margin:0 0 5px 0;padding:0.2em 0'  ><a href='javascript:void(0);' style='color: #2c98d6;' ><i class='fa fa-file-o' style='margin-right: 5px;'></i>"+title+"</a></h4>" +
       		//"<img style='float:right;margin:4px' id='imgDemo' src='"+redircetSSo+"/statics/res/map/images/icon_map_meitu_35.png' width='139' height='104' title='"+title+"'/>" +
       		"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em;display: NONE;'>该建筑...</p>" +
			"<div style='background:url("+redircetSSo+"/statics/res/map/imagesView/"+title+".png);background-size: cover;background-repeat: no-repeat;padding-top: 112px;'></div>"+
       		"</div>";
       		var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
       		infoWindow.setWidth(100);
       		map.openInfoWindow(infoWindow, point); // 打开信息窗口  
	}

	function openTabs(id,title){
		var obj;
		$.ajax({
			type: "GET",
			url: app + "dabis/archives/archivesFolder/getObjByTitle?title=" + title,
			async: false,
			dataType: "json",
			success: function (data) {
				if (0 == data.code) {
					obj = data.obj;
				}
			}
		});
		if (undefined == obj) {
			parent.layer.msg("该档案不存在");
		} else {
			var moduleId;
			var urlType;
			var status = obj.status;
			if ("yjs" == status) {
				moduleId = "AS";
			} else if ("yzl" == status) {
				moduleId = "AS";
			} else if ("wgd" == status) {
				moduleId = "SF";
			} else if ("wgd_rec" == status) {
				moduleId = "OR";
			} else {
				moduleId = "AS";
			}
			showArchives(obj.archiveTypeId, obj.id, moduleId, "v", "n");
		}
	}
	
	/* 按回车键实体搜索 */
	function enterKeydown(event) {
		var keyCode = 0;
		if (window.event) {
			keyCode = event.keyCode;
		} else if (event.which) {
			keyCode = event.which;
		}
		if (keyCode == 13) {
			this.entitySearch();
		}
	}
	/* 单位搜索 */
	function entitySearch (){
		var me = this;
		var name = $("#keyword_1").val();
		if(name==""){
			showMes("add","请输入关键字！","font-color","");
			return;
		}
		$.ajax({
			url : app+"baiduMapController/search",
			type: 'POST',/*contentType:'application/x-www-form-urlencoded; charset=UTF-8',*/
			data : {
				areaId:$("#addrFont").attr("class").split("_")[2],
				keyWord : name
			},
			dataType : "json",
			success : function(data) {
				if(data.list.length==0){
					$("#searchContent").empty();
					showMes("add","没有找到相关的单位信息！","font-color","");
					return;
				}
				data = data.list;
				var index=$("#modNav li").last().index();
				if(!false){
					$('#modDetial').animate({
						'left': '0px'
					},200);
					$('#copyRight').animate({
						'left': '381px'
					},200);
					$('#sfBtn').removeClass('rotate');
				}
				$('#modNav .lfnav-item').removeClass('active');
				$('.left_tabs .tabItemB').hide();
				$("#searchContent").show();
				var html="";
				html+='<div class="result-title" id="resultTitle"><span class="searchContent"></span>搜索结果</div>';
				html+='<div class="life-item" id="searchResult" style="overflow-y: auto">'+
				'<ul class="search-item-wrap" >';
				clearAllMark();//清除标注
				for(var i=0;i<data.length;i++){
					var temp=data[i];
					var xyp = temp.fileArchivesCode.split(",");
					html+='<li class="search-item" value="'+temp.id+'" onclick="gotoCenterV21('+xyp[0]+','+xyp[1]+','+parseInt(i+1)+',\''+temp.id+'\',\''+temp.fileTitle+'\',\''+temp.treeCode+'\');">'+
					'<span class="item-name"><b>'+temp.fileTitle+'</b><br/><span>'+temp.organizationUnit+'</span></span>' +
					'<i class="area-text">'+temp.school+'</i>'+
					'<i class="item-map">'+parseInt(i+1)+'</i>'+
					'</li>';
					//创建标注
					if($("#addrFont").attr("class").split("_")[2]==temp.treeCode){
						createMark(xyp[0], xyp[1],temp.fileTitle,parseInt(i+1));
					}
					
				}
				html+='</ul>';
				$("#searchContent").empty();
				$("#searchContent").append(html);
				$("#searchResult").height($(window).height()-$("#hd").height()-$("#resultTitle").height());
			}
		});
	}
	//创建一个标注
	function createMark(x, y,title,index){
		var pt = new BMap.Point(x, y);
		var myIcon = new BMap.Icon(redircetSSo+"/statics/res/map/images/icon_map_meitu_"+index+".png", new BMap.Size(28,37));
		var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
		marker2.setTitle(title);
		map.addOverlay(marker2);              // 将标注添加到地图中
		markers.push(marker2);
	}
	
	//清除全部标注
	function clearAllMark() {
			for(var i = 0; i < markers.length; i++){
	            map.removeOverlay(markers[i]);
	        }
			markers.length = 0   
	    }
	