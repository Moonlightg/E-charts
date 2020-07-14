let color = ['#008dff','#00e281','#db7b49', '#ded54c', '#59c045', '#3e91f7','#9e6228',  '#e6b818', '#108db1','#3f4c50'];
let grid = {
    x: 30,
    y: 25,
    x2: 10,
    y2: 25
}

function Ebar1() {
    // 基础柱状图
    var chart1 = echarts.init(document.getElementById('e-bar01'));
    option1 = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: grid,
        xAxis: [{
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.2)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
        }],
        yAxis: [{
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.5)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.1)'
                }
            },
            axisLabel:{
                 color:"rgba(255,255,255,.5)"
            }
        }],
        series: [{
            type:'bar',
            data:[10,50,85,109,83,93]
        }]
    };
    chart1.setOption(option1);
}

function Ebar2() {
    // 柱状图(显示数值)
    var chart2 = echarts.init(document.getElementById('e-bar02'));
    option2 = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: grid,
        xAxis: [{
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.2)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
        }],
        yAxis: [{
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.5)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.1)'
                }
            },
            axisLabel:{
                 color:"rgba(255,255,255,.5)"
            }
        }],
        series: [{
            type:'bar',
            itemStyle: {
                normal: {
                    label : {
                        show: true, // 显示数值
                        position: "top"
                    }
                }
            },
            data:[10,50,85,109,83,93]
        }]
    };
    chart2.setOption(option2);
}

function Ebar3() {
    // 多组柱状图
    var chart3 = echarts.init(document.getElementById('e-bar03'));
    option3 = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: grid,
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['访问量', '下载量'],
            right: 'center',
            top: '0px',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        xAxis: [{
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.2)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
        }],
        yAxis: [{
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.5)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.1)'
                }
            },
            axisLabel:{
                 color:"rgba(255,255,255,.5)"
            }
        }],
        series: [{
            type:'bar',
            name:'访问量',
            barGap: 0, // 组内柱子间隙为0
            itemStyle: {
                normal: {
                    label : {
                        show: true, // 显示数值
                        position: "top"
                    }
                }
            },
            data:[100,50,85,109,83,93]
        },{
            type:'bar',
            name:'下载量',
            itemStyle: {
                normal: {
                    label : {
                        show: true, // 显示数值
                        position: "top"
                    }
                }
            },
            data:[10,20,15,19,43,33]
        }]
    };
    chart3.setOption(option3);
}

function Ebar4() {
    // 柱状堆叠图
    var chart4 = echarts.init(document.getElementById('e-bar04'));
    option4 = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: grid,
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['访问量', '下载量'],
            right: 'center',
            top: '0px',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        xAxis: [{
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.2)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
        }],
        yAxis: [{
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.5)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.1)'
                }
            },
            axisLabel:{
                 color:"rgba(255,255,255,.5)"
            }
        }],
        series: [{
            name:"下载量",
            type:'bar',
            stack: "1",
            label: {
                show: false,
                position: 'top',
                color: 'black',
                formatter: function(params) {
                    return params.value
                }
            },
            data:[30,50,85,109,83,93]
        },{
            name:"访问量",
            type:'bar',
            stack: "1",
            label: {
                show: true,
                position: 'top',
                color: '#fff',
                formatter: function(params) {
                    return params.value
                }
            },
            data:[5,20,30,80,43,30]
        }]
    };

    // 求和
    var series = option4["series"];
    var fun = function(params) {
        var datavalue = 0;
        for (var i = 0; i < series.length; i++) {
            datavalue += series[i].data[params.dataIndex]
        }
        return datavalue;
    }

    if(series[series.length - 1]){
      series[series.length - 1]["label"]["formatter"] = fun;  
    }

    chart4.setOption(option4);

    // 点击图例求和
    chart4.on("legendselectchanged", function(obj) {
        console.log(obj);
        var b = obj.selected,
            d = [];
        for (var key in b) {
            if (b[key]) {
                for (var i = 0, l = series.length; i < l; i++) {
                    var changename = series[i]["name"];
                    if (changename == key) {
                        d.push(i);
                    }
                }
            }
        }
        var fun = function(params) {
            var datavalue = 0;
            for (var i = 0; i < d.length; i++) {
                for (var j = 0; j < series.length; j++) {
                    if (d[i] == j) {
                        datavalue += series[j].data[params.dataIndex]
                    }
                }
            }
            return datavalue
        }
        for (var i = 0; i < series.length; i++) {
            series[i]["label"]["show"] = false;
        }
        for (var i = series.length - 1; i >= 0; i--) {
            var name = series[i]["name"];
            if (obj["selected"][name]) {
                series[i]["label"]["formatter"] = fun
                series[i]["label"]["show"] = true
                break;
            }
        }
        chart4.setOption(option4);
    })
}

function Ebar5() {
    // 基础面积折线图
    var chart5 = echarts.init(document.getElementById('e-bar05'));
    option5 = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: grid,
        xAxis: [{
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.2)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            data: ['总费用', '房租', '水电费', '交通费', '伙食费', '日用品数']
        }],
        yAxis: [{
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.5)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.1)'
                }
            },
            axisLabel:{
                 color:"rgba(255,255,255,.5)"
            }
        }],
        series: [{
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 1700, 1400, 1200, 300, 0]
        },
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [2900, 1200, 300, 200, 900, 300]
        }]
    };
    chart5.setOption(option5);
}

function Ebar6() {
    // 渐变色面积图-虚线
    var chart6 = echarts.init(document.getElementById('e-bar06'));
    option6 = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            x: 50,
            y: 25,
            x2: 10,
            y2: 25
        },
        xAxis: [{
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.2)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            data: function () {
                var list = [];
                for (var i = 1; i <= 6; i++) {
                    list.push('7月' + i + '日');
                }
                return list;
            }()
        }],
        yAxis: [{
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.5)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.1)'
                }
            },
            axisLabel:{
                 color:"rgba(255,255,255,.5)"
            }
        }],
        series: [
            {
                name: '辅助',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    itemStyle: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [0, 900, 1245, 1530, 1376, 1376]
            },
            {
                name: '收入',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [900, 345, 393, '-', '-', 135]
            },
            {
                name: '支出',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'bottom'
                },
                data: ['-', '-', '-', 108, 154, '-']
            }
        ]
    };
    chart6.setOption(option6);
}

function Eline7() {
    // 堆积面积图
    var chart7 = echarts.init(document.getElementById('e-line07'));
    option7 = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: grid,
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['Berlin', 'Asia', 'Europe'],
            right: 'center',
            top: '0px',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false, // 从x轴起点开始
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.2)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
        }],
        yAxis: [{
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.5)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.1)'
                }
            },
            axisLabel:{
                 color:"rgba(255,255,255,.5)"
            }
        }],
        series: [
            {
                name: 'Berlin',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [15, 23, 20, 15, 19, 33]
            },
            {
                name: 'Asia',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [32, 33, 30, 33, 39, 33]
            },
            {
                name: 'Europe',
                type: 'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {},
                data: [82, 93, 90, 93, 129, 133]
            }
        ]
    };
    chart7.setOption(option7);
}

function Eline8() {
    // 阶梯图
    var chart8 = echarts.init(document.getElementById('e-line08'));
    option8 = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: grid,
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['Berlin', 'Asia', 'Europe'],
            right: 'center',
            top: '0px',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        xAxis: [{
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.2)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,0)'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
        }],
        yAxis: [{
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.5)'
                }
            },
            splitLine:{
                lineStyle:{
                    color:'rgba(255,255,255,.1)'
                }
            },
            axisLabel:{
                 color:"rgba(255,255,255,.5)"
            }
        }],
        series: [
            {
                name: 'Start',
                type: 'line',
                step: 'start',
                data: [20, 252, 101, 134, 90, 230]
            }
        ]
    };
    chart8.setOption(option8);
}

function Ebar9() {
    // 双x轴
    var chart9 = echarts.init(document.getElementById('e-bar09'));
    option9 = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            x: 50,
            y: 50,
            x2: 10,
            y2: 25
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data:['2018 访问量', '2019 访问量'],
            right: 'center',
            top: '0px',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: color[1]
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '访问量  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ['2019-1', '2019-2', '2019-3', '2019-4', '2019-5', '2019-6', '2019-7', '2019-8', '2019-9', '2019-10', '2019-11', '2019-12']
            },
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: color[0]
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return '降水量  ' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ['2018-1', '2018-2', '2018-3', '2018-4', '2018-5', '2018-6', '2018-7', '2018-8', '2018-9', '2018-10', '2018-11', '2018-12']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.5)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:{
                     color:"rgba(255,255,255,.5)"
                }
            }
        ],
        series: [
            {
                name: '2018 访问量',
                type: 'bar',
                xAxisIndex: 1,
                smooth: true,
                data: [26, 59, 90, 264, 287, 707, 1756, 1822, 487, 188, 60, 23]
            },
            {
                name: '2019 访问量',
                type: 'bar',
                smooth: true,
                data: [39, 58, 111, 187, 483, 692, 2316, 466, 554, 184, 103, 7]
            }
        ]
    };
    chart9.setOption(option9);
}

function Eline10() {
    // 双x轴
    var chart10 = echarts.init(document.getElementById('e-line10'));
    option10 = {
        color: color,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            x: 70,
            y: 50,
            x2: 70,
            y2: 25
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data:['访问量', '下载量'],
            right: 'center',
            top: '0px',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        xAxis: [
            {
                type: 'category',
                axisLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.2)'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,0)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color:'#fff',
                    },
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: "访\n问\n量",
                nameLocation:"center",
                nameGap:50,
                nameRotate:0,
                nameTextStyle:{
                    fontSize: 13,
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: color[1]
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                }
            },
            {
                type: 'value',
                name: "下\n载\n量",
                nameLocation:"center",
                nameGap:50,
                nameRotate:0,
                nameTextStyle:{
                    fontSize: 13,
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: color[0]
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                }
            }
        ],
        series: [
            {
                name: '访问量',
                type: 'line',
                yAxisIndex: 0,
                smooth: true,
                data: [26, 59, 90, 264, 287, 707]
            },
            {
                name: '下载量',
                type: 'line',
                yAxisIndex: 1,
                smooth: true,
                data: [39, 58, 111, 187, 483, 692]
            }
        ]
    };
    chart10.setOption(option10);
}

//1.树结构列表样式优化
//2.四星检测配置-小分辨率屏幕适配
//3.切换系统 - 电子凭证系统菜单样式设置




