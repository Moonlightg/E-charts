
var winWidth = window.innerWidth;
console.log(winWidth);
if (winWidth < 480) {

}
// 统计量
var chart1 = echarts.init(document.getElementById('echarts01'));
option1 = {
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        },
        formatter: function(params) {
            console.log(params[0].data);
            var str = '<div><p>'+params[0].name.split("[")[0]+'</p></div>';
             // 格式化
            var ten = params[0].data/10000;
            if (ten >= 1) {
                ten = ten.toFixed(2) + '万';
            } else {
                ten = params[0].data;
            }
            str += params[0].marker + " " + params[0].seriesName+' : ' + ten;
            return str;
        }
    },
    legend: {
        data: ['数据量']
    },
    grid: {
        x: 140,
        y: 25,
        x2: 10,
        y2: 25,
    },
    xAxis: [{
        type: 'log',
        min:1,
        logBase:5,
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.06)'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#333',
            },
            // 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
            formatter: function (value, index) {
                // 格式化
                var ten = value/10000;
                if (ten >= 1) {
                    ten = Math.ceil(ten) + '万';
                } else {
                    ten = value;
                }
                return ten;
            }
        },
        //boundaryGap: [0, 0.01]
    }],
    yAxis: [{
        type: 'category',
        //inverse:true,// y轴数据逆向
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)",
             textStyle: {
                fontSize: 12
             }
        },
        data: ['行政许可信息旧','行政处罚信息新','行政处罚信息旧','行政许可信息新','申诉举报信息','食品快检信息','质量信息不合格食品','企业用水信息','智慧食药监平台日常监管信息','工商股东信息','工商开业登记信息','工商注销登记信息','量化等级信息','食品经营许可证信息','企业变更登记信息','企业重要成员信息','双随机检查信息','特种设备重点监管设备','特种设备检验不合格问题汇总','特种设备使用登记信息','商标']
    }],
    series: [{
        name: '数据量',
        type: 'bar',
        barWidth :20,
        //stack: true,
        itemStyle: {
            normal: {
                color: 'rgba(23, 125, 231,1)',
                label: {
                    show: true,      //开启显示
                    position: 'insideLeft', //在左边显示
                    formatter: function(a) {
                        //console.log(a.data);
                        // 格式化
                        var ten = a.data/10000;
                        if (ten >= 1) {
                            ten = ten.toFixed(2) + '万';
                        } else {
                            ten = a.data;
                        }
                        return ten;
                        
                    },
                    textStyle: {     //数值样式
                        color: '#64fff8',
                        fontSize: 13
                    }
                }
            }
        },
        data: [11,15,15,4,15,4,11,2,148,100,101,100,3,101,62300,101,134,192,46,18,59]
    }]
    // },{
    //     name: '最近一个月增加量',
    //     type: 'bar',
    //     barWidth :20,
    //     stack: true,
    //     itemStyle: {
    //         normal: {
    //             color: 'rgba(255, 87, 37,1)',
    //             label: {
    //                 show: true,      //开启显示
    //                 position: 'insideLeft', //在左边显示
    //                 formatter: '增加:{c}',
    //                 textStyle: {     //数值样式
    //                     color: '#ffe70f',
    //                     fontSize: 13
    //                 }
    //             }
    //         }
    //     },
    //     data: [20,6,20,19,10,0,0,0,10,20,40,10,0,15,17,18,19,23,7,2,6]
    // }]
};
chart1.setOption(option1);

// 企业在线状态
var chart2 = echarts.init(document.getElementById('echarts02'));
var data2 = [{value:335, name:'在线企业'},{value:110, name:'已注销企业'}];
var total = 0;
data2.forEach((res) => {
    total += parseFloat(res.value);
});
option2 = {
    color:['#3f51b5','#F44336', '#0088cc', '#5ebbeb', '#d16ad8','#f8e19a',  '#00b7ee', '#81dabe','#5fc5ce'],
    title: {
        zlevel: 0,
        text: [
            '{value|' + total + '}',
            '{name|企业总数}',
        ].join('\n'),
        top: '39%',
        left: '48%',
        textAlign: 'center',
        textStyle: {
            rich: {
                value: {
                    color: '#2b83e9',
                    fontSize: 36,
                    fontWeight: 'bold',
                    lineHeight: 40,
                },
                name: {
                    color: '#909399',
                    lineHeight: 20
                },
            },
        },
    },
    grid: {
        left:20,
        right:20,
        top:0,
        bottom:20
    },
    legend: {
        show: false,
        bottom:15,
        textStyle:{
            fontSize: 13,
            color:'rgba(255,255,255,.7)'
        },
        data:['在线企业','已注销企业'],
        formatter: function(name) {
            var index = 0;
            var clientlabels = ['在线企业','已注销企业'];
            var clientcounts = [335,110];
            clientlabels.forEach(function(value,i){
                if(value == name){
                    index = i;
                }
            });
            return name + "  " + clientcounts[index] + "件";
        }
    },
    series : [
        {
            name: '企业数量',
            type: 'pie',
            radius: ['55%', '40%'],
            center: ['50%', '50%'],
            data: data2,
            labelLine:{  
                normal:{  
                    length:30  
                }  
            },
            itemStyle:{ 
                normal:{ 
                    label:{ 
                        show: true, 
                        formatter: '{b} {c} \n({d}%)' 
                    }, 
                    labelLine :{show:true} 
                }
            } 
        }
    ]
};
chart2.setOption(option2);

// 顺德区企业关联数据统计
var chart3 = echarts.init(document.getElementById('echarts03'));
option3 = {
    
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        x: 55,
        y: 25,
        x2: 8,
        y2: 25,
    },
    xAxis: [{
        type: 'category',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,0)'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#333',
            },
        },
        boundaryGap: [0, 0.01],
        data: ['企业关联数据集', '企业关联文档', '市场线索', '实用工具集', '数据标准']
    }],
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    series: {
        name: '数量',
        type: 'bar',
        barWidth :20,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(134, 212, 255,.7)'},
                        {offset: 1, color: 'rgba(18, 171, 255,.7)'}
                    ]
                ),
                label: {
                    show: true,      //开启显示
                    position: 'top', //在左边显示
                    formatter: '{c}',
                    textStyle: {     //数值样式
                        color: '#333',
                        fontSize: 13
                    }
                }
            }
        },
        data: [9000,1587,2095,359,5300]
    }
};
chart3.setOption(option3);


// 在线主体数据分布
var chart4 = echarts.init(document.getElementById('echarts04'));
var data4 = [
    {value:335, name:'大良街道'},
    {value:110, name:'容桂街道'},
    {value:110, name:'伦教街道'},
    {value:110, name:'勒流街道'},
    {value:110, name:'陈村镇'},
    {value:110, name:'均安镇'},
    {value:110, name:'杏坛镇'},
    {value:110, name:'龙江镇'},
    {value:110, name:'乐从镇'},
    {value:110, name:'北滘镇'}
];
var total = 0;
data4.forEach((res) => {
    total += parseFloat(res.value);
});
option4 = {
    color:['#3f51b5','#F44336', '#0088cc', '#5ebbeb', '#d16ad8','#FF9800', '#00b7ee', '#81dabe','#5fc5ce', '#795548'],
    title: {
        zlevel: 0,
        text: [
            '{value|' + total + '}',
            '{name|在线主体总量}',
        ].join('\n'),
        top: '39%',
        left: '48%',
        textAlign: 'center',
        textStyle: {
            rich: {
                value: {
                    color: '#2b83e9',
                    fontSize: 36,
                    fontWeight: 'bold',
                    lineHeight: 40,
                },
                name: {
                    color: '#909399',
                    lineHeight: 20
                },
            },
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    grid: {
        left:20,
        right:20,
        top:0,
        bottom:20
    },
    legend: {
        show: false,
        bottom:15,
        textStyle:{
            fontSize: 13,
            color:'rgba(255,255,255,.7)'
        },
        data:['大良街道','容桂街道','伦教街道','勒流街道','陈村镇','均安镇','杏坛镇','龙江镇','乐从镇','北滘镇'],
    },
    series : [
        {
            name: '在线主体数',
            type: 'pie',
            radius: ['55%', '40%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            data: data4,
            labelLine:{  
                normal:{  
                    length:30  
                }  
            },
            itemStyle:{ 
                normal:{ 
                    label:{ 
                        show: true, 
                        formatter: '{b} {c} \n({d}%)' 
                    }, 
                    labelLine :{show:true} 
                }
            } 
        }
    ]
};
chart4.setOption(option4);


// 主体数据新增与注销量趋势(过去12个月)
var chart5=echarts.init(document.getElementById("echarts05"));
option5={
    color:['#177de7','#F44336'],
    title:{
        show: false,
        text:'主体数据新增与注销量趋势(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    //图例-每一条数据的名字叫销量
    legend:{
        data:['新增','注销']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'新增',
        type:'line',
        data:[40,20,35,60,55,10,14,15,20,9,9,9],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#177de7',
                        fontSize: 15
                    }
                }
            }
        }
    },{
        name:'注销',
        type:'line',
        data:[4,10,12,20,5,1,4,11,7,3,2,1],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chart5.setOption(option5);

// 食品经营许可证新增与注销量趋势(过去12个月)
var chart6=echarts.init(document.getElementById("echarts06"));
option6={
    color:['#177de7','#F44336'],
    title:{
        show: false,
        text:'食品经营许可证新增与注销量趋势(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    //图例-每一条数据的名字叫销量
    legend:{
        data:['新增','注销']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'新增',
        type:'line',
        data:[10,10,15,20,25,13,14,15,20,9,9,9],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#177de7',
                        fontSize: 15
                    }
                }
            }
        }
    },{
        name:'注销',
        type:'line',
        data:[12,12,12,10,1,1,2,5,6,3,2,9],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chart6.setOption(option6);


// 药品经营许可证信息新增与注销量趋势(过去12个月)
var chart7=echarts.init(document.getElementById("echarts07"));
option7={
    color:['#177de7','#F44336'],
    title:{
        show: false,
        text:'药品经营许可证信息新增与注销量趋势(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    //图例-每一条数据的名字叫销量
    legend:{
        data:['新增','注销']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'新增',
        type:'line',
        data:[120,109,150,45,75,23,14,150,200,90,145,99],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#177de7',
                        fontSize: 15
                    }
                }
            }
        }
    },{
        name:'注销',
        type:'line',
        data:[40,10,56,9,35,18,29,50,61,32,32,49],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chart7.setOption(option7);

// 顺德区各镇街行政处罚信息量统计
var chart8 = echarts.init(document.getElementById('echarts08'));
var data8 = [
    {value:35, name:'大良街道'},
    {value:10, name:'容桂街道'},
    {value:80, name:'伦教街道'},
    {value:30, name:'勒流街道'},
    {value:10, name:'陈村镇'},
    {value:16, name:'均安镇'},
    {value:80, name:'杏坛镇'},
    {value:30, name:'龙江镇'},
    {value:15, name:'乐从镇'},
    {value:30, name:'北滘镇'}
];
var total = 0;
data8.forEach((res) => {
    total += parseFloat(res.value);
});
option8 = {
    color:['#3f51b5','#F44336', '#0088cc', '#5ebbeb', '#d16ad8','#FF9800', '#00b7ee', '#81dabe','#5fc5ce', '#795548'],
    title: {
        zlevel: 0,
        text: [
            '{value|' + total + '}',
            '{name|行政处罚总量}',
        ].join('\n'),
        top: '39%',
        left: '48%',
        textAlign: 'center',
        textStyle: {
            rich: {
                value: {
                    color: '#2b83e9',
                    fontSize: 36,
                    fontWeight: 'bold',
                    lineHeight: 40,
                },
                name: {
                    color: '#909399',
                    lineHeight: 20
                },
            },
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    grid: {
        left:20,
        right:20,
        top:0,
        bottom:20
    },
    legend: {
        show: false,
        bottom:15,
        textStyle:{
            fontSize: 13,
            color:'rgba(255,255,255,.7)'
        },
        data:['大良街道','容桂街道','伦教街道','勒流街道','陈村镇','均安镇','杏坛镇','龙江镇','乐从镇','北滘镇'],
        formatter: function(name) {
            var index = 0;
            var clientlabels = ['大良街道','容桂街道','伦教街道','勒流街道','陈村镇','均安镇','杏坛镇','龙江镇','乐从镇','北滘镇'];
            var clientcounts = [35,10,80,30,10,16,80,30,15,30];
            clientlabels.forEach(function(value,i){
                if(value == name){
                    index = i;
                }
            });
            return name + "  " + clientcounts[index];
        }
    },
    series : [
        {
            name: '行政处罚信息',
            type: 'pie',
            radius: ['55%', '40%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            data: data4,
            labelLine:{  
                normal:{  
                    length:30  
                }  
            },
            itemStyle:{ 
                normal:{ 
                    label:{ 
                        show: true, 
                        formatter: '{b} {c} \n({d}%)' 
                    }, 
                    labelLine :{show:true} 
                }
            } 
        }
    ]
};
chart8.setOption(option8);


// 大良街道行政处罚信息(过去12个月)
var chartb1=echarts.init(document.getElementById("echartsB1"));
optionb1={
    color:['#F44336'],
    title:{
        show: false,
        text:'大良街道行政处罚信息(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'line',
        data:[50,60,70,80,75,23,74,100,120,90,145,33],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartb1.setOption(optionb1);


// 容桂街道行政处罚信息(过去12个月)
var chartb2=echarts.init(document.getElementById("echartsB2"));
optionb2={
    color:['#F44336'],
    title:{
        show: false,
        text:'容桂街道行政处罚信息(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'line',
        data:[10,20,30,40,55,63,64,40,20,10,5,2],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartb2.setOption(optionb2);

// 伦教街道行政处罚信息(过去12个月)
var chartb3=echarts.init(document.getElementById("echartsB3"));
optionb3={
    color:['#F44336'],
    title:{
        show: false,
        text:'伦教街道行政处罚信息(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'line',
        data:[30,30,30,40,55,63,64,40,20,10,5,20],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartb3.setOption(optionb3);


// 勒流街道行政处罚信息(过去12个月)
var chartb4=echarts.init(document.getElementById("echartsB4"));
optionb4={
    color:['#F44336'],
    title:{
        show: false,
        text:'勒流街道行政处罚信息(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'line',
        data:[90,80,70,60,55,43,34,20,10,10,5,2],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartb4.setOption(optionb4);

// 陈村镇行政处罚信息(过去12个月)
var chartb5=echarts.init(document.getElementById("echartsB5"));
optionb5={
    color:['#F44336'],
    title:{
        show: false,
        text:'陈村镇行政处罚信息(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'line',
        data:[3,5,5,10,55,83,164,100,100,105,59,90],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartb5.setOption(optionb5);


// 均安镇行政处罚信息(过去12个月)
var chartb6=echarts.init(document.getElementById("echartsB6"));
optionb6={
    color:['#F44336'],
    title:{
        show: false,
        text:'均安镇行政处罚信息(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'line',
        data:[3,5,5,10,11,12,12,13,14,15,14,15],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartb6.setOption(optionb6);


// 杏坛镇行政处罚信息(过去12个月)
var chartb7=echarts.init(document.getElementById("echartsB7"));
optionb7={
    color:['#F44336'],
    title:{
        show: false,
        text:'杏坛镇行政处罚信息(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'line',
        data:[120,110,110,100,110,120,120,10,110,150,142,90],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartb7.setOption(optionb7);

// 龙江镇行政处罚信息(过去12个月)
var chartb8=echarts.init(document.getElementById("echartsB8"));
optionb8={
    color:['#F44336'],
    title:{
        show: false,
        text:'龙江镇行政处罚信息(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'line',
        data:[100,90,96,93,80,40,43,34,42,14,12,40],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartb8.setOption(optionb8);

// 乐从镇行政处罚信息(过去12个月)
var chartb9=echarts.init(document.getElementById("echartsB9"));
optionb9={
    color:['#F44336'],
    title:{
        show: false,
        text:'乐从镇行政处罚信息(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'line',
        data:[100,90,96,93,80,40,43,54,60,80,90,100],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartb9.setOption(optionb9);


// 北滘镇行政处罚信息(过去12个月)
var chartb10=echarts.init(document.getElementById("echartsB10"));
optionb10={
    color:['#F44336'],
    title:{
        show: false,
        text:'北滘镇行政处罚信息(过去12个月)'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:["19-4","19-5","19-6","19-7","19-8","19-9","19-10","19-11","19-12","20-01","20-02","20-03"]
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'line',
        data:[0,0,0,3,6,8,10,10,10,6,2,0],
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#F44336',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartb10.setOption(optionb10);

// 顺德区各镇街行政处罚信息量
var chartbAll=echarts.init(document.getElementById("echartsBAll"));
var town = ["大良街道","容桂街道","伦教街道","勒流街道","陈村镇","均安镇","杏坛镇","龙江镇","乐从镇","北滘镇"];
var townData = [300,200,456,312,60,80,130,106,160,69];

var max
var newName
for (var i = 0; i < townData.length; i++) {
    for (var j = i; j < townData.length; j++) {
        if (townData[i] < townData[j]) {
            max = townData[j]
            townData[j] = townData[i]
            townData[i] = max

            newName = town[j]
            town[j] = town[i]
            town[i] = newName
        }
    }
}
console.log(town);
console.log(townData);

optionbAll={
    color:['#3f51b5'],
    title:{
        show: false,
        text:'顺德区各镇街行政处罚信息量'
    },
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#F90'
            }
        }
    },
    grid: {
        left:30,
        right:20,
        top:30,
        bottom:20
    },
    legend:{
        show: false,
        data:['行政处罚信息量']
    },
    //x轴
    xAxis:{
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.8)'
            }
        },
        data:town
    },
    //y轴没有显式设置，根据值自动生成y轴
    yAxis: [{
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'rgba(0,0,0,.3)'
            }
        },
        splitLine:{
            lineStyle:{
                color:'rgba(0,0,0,.1)'
            }
        },
        axisLabel:{
             color:"rgba(0,0,0,.8)"
        }
    }],
    //数据-data是最终要显示的数据
    series:[{
        name:'行政处罚信息量',
        type:'bar',
        barWidth :30,
        data:townData,
        itemStyle: {
            normal: {
                label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: '#3f51b5',
                        fontSize: 15
                    }
                }
            }
        }
    }]
};
chartbAll.setOption(optionbAll);




$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    chart6.resize(); 
    chart7.resize();
    chartb1.resize();
    chartb2.resize();
    chartb3.resize();
    chartb4.resize();
    chartb5.resize();
    chartb6.resize();
    chartb7.resize();
    chartb8.resize();
    chartb9.resize();
    chartb10.resize();
});


