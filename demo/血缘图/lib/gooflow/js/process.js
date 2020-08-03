var property={
    initLabelText: "在线流程图",
    width:1200,
    height:600,
    //toolBtns:["start","end","task","node","chat","state","plug","join","fork","complex"],
    toolBtns:[],
    haveHead:false,
    headBtns:[],//如果haveHead=true，则定义HEAD区的按钮
    haveTool:true,
    haveGroup:false,
    useOperStack:true
};
var remark={
    // cursor:"选择指针",
    // direct:"转换连线",
    // start:"开始结点",
    // end:"结束结点",
    // task:"文件",
    // node:"数据库",
    // chat:"服务器",
    // state:"数据表",
    // plug:"链接",
    // join:"联合结点",
    // fork:"分支结点",
    // complex:"复合结点",
    // group:"组织划分框编辑开关"
};
var process;
$(document).ready(function(){
    process=$.createGooFlow($("#process"),property);
    process.setNodeRemarks(remark);
    
    // 模拟默认数据
    jsondata3 = {
        "title":"newFlow_1",
        "nodes":{
            "process_node_9":{"name":"开始","left":219,"top":114,"type":"start","width":86,"height":24,"alt":true},
            "process_node_10":{"name":"node_10","left":224,"top":192,"type":"task","width":86,"height":24,"alt":true},
            "process_node_11":{"name":"结束","left":227,"top":288,"type":"end","width":86,"height":24,"alt":true},
            "process_node_14":{"name":"node_14","left":422,"top":250,"type":"node","width":86,"height":24,"alt":true}
        },
        "lines":{
            "process_line_12":{"type":"sl","from":"process_node_9","to":"process_node_10","name":""},
            "process_line_13":{"type":"sl","from":"process_node_10","to":"process_node_11","name":""},
            "process_line_15":{"type":"sl","from":"process_node_10","to":"process_node_14","name":"","alt":true}
        },
        "areas":{},
        "initNum":16
    },
    process.$max=9;
    process.loadData(jsondata3);

    // 自定义保存点击方法
    process.onBtnSaveClick=function(id,type){
        // 点击保存返回json数据
        console.log(JSON.stringify(process.exportData()));
        return confirm(JSON.stringify(process.exportData()));
    };
    // 开启关闭网格
    $('.grid-btn').on('click',function(){
        $(this).toggleClass('active');
        $(this).parent('#process').toggleClass('no-grid');
    });
    $(".context-menu").click(function(e) {
        e?e.stopPropagation():event.cancelBubble = true;
    });
    $(document).click(function() {
        $(".context-menu").remove();
    });
});
function Export(){
    document.getElementById("draw_process").value=JSON.stringify(process.exportData());
}
function showContextMenu(id,type,e) {
    if (type == 'end' || type == 'start') {
        return false;
    }
    console.log("右击后------");
    console.log("当前节点ID:"+id);
    console.log("当前节点类型:"+type);
    console.log(e);
    var top = e.clientY - e.offsetY;
    var left = e.clientX - e.offsetX;
    var html = "<div class='context-menu' style='top:"+top+"px; left:"+left+"px'>"+
    "<a href='javascript:;' pid='"+id+"' nType='"+type+"' class='context-item copy-btn'>复制节点</a>"+
    "<a href='javascript:;' pid='"+id+"' nType='"+type+"' class='context-item del-btn'>删除节点</a>"+
    "</div>";
    $(".GooFlow_work_inner").append(html);
}