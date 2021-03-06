let color = ['#008dff','#00e281','#db7b49', '#ded54c', '#59c045', '#3e91f7','#9e6228',  '#e6b818', '#108db1','#3f4c50'];
let grid = {
    x: 30,
    y: 25,
    x2: 10,
    y2: 25
}

function Eline1() {
    // 基础折线图
    var chart1 = echarts.init(document.getElementById('e-line01'));
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
            type:'line',
            data:[10,50,85,109,83,93]
        }]
    };
    chart1.setOption(option1);
}

function Eline2() {
    // 基础折线图(X轴为起点)
    var chart2 = echarts.init(document.getElementById('e-line02'));
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
        series: [{
            type:'line',
            data:[10,50,85,109,83,93]
        }]
    };
    chart2.setOption(option2);
}

function Eline3() {
    // 基础折线图(显示数值)
    var chart3 = echarts.init(document.getElementById('e-line03'));
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
            type:'line',
            itemStyle: {
                normal: {
                    label : {
                        show: true // 显示数值
                    }
                }
            },
            data:[10,50,85,109,83,93]
        }]
    };
    chart3.setOption(option3);
}

function Eline4() {
    // 曲线折线图
    var chart4 = echarts.init(document.getElementById('e-line04'));
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
            name:"Tokyo",
            type:'line',
            smooth:true,  // 把线变成曲线
            itemStyle: {
                normal: {
                    label : {
                        show: true
                    }
                }
            },
            data:[30,50,85,109,83,93]
        },{
            name:"London",
            type:'line',
            smooth:true,  // 把线变成曲线
            itemStyle: {
                normal: {
                    label : {
                        show: true
                    }
                }
            },
            data:[5,20,30,80,43,30]
        }]
    };
    chart4.setOption(option4);
}

function Eline5() {
    // 基础面积折线图
    var chart5 = echarts.init(document.getElementById('e-line05'));
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
            name:"Tokyo",
            type:'line',
            smooth:true,  // 把线变成曲线
            itemStyle: {
                normal: {
                    label : {
                        show: true,
                        textStyle: {
                            color:'#fff',
                        }
                    }
                }
            },
            data:[30,50,85,109,83,93],
            areaStyle: {} //面积图样式
        }]
    };
    chart5.setOption(option5);
}

function Eline6() {
    // 渐变色面积图-虚线
    var chart6 = echarts.init(document.getElementById('e-line06'));
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
            name:"Tokyo",
            type:'line',
            smooth:true, // 把线变成曲线
            itemStyle: {
                normal: {
                    // 折线图区域颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                            offset: 0, color: 'rgba(0, 226, 129, 1)' // 0% 处的颜色
                        },{
                            offset: 1, color: 'rgba(0, 226, 129, 0.5)' // 100% 处的颜色
                        }]
                    ),
                    label : {
                        show: true,
                        textStyle: {
                            color:'#fff',
                        }
                    },
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            },
            data:[30,50,85,109,83,93],
            areaStyle: {} //面积图样式
        }]
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

function Eline9() {
    // 双x轴
    var chart9 = echarts.init(document.getElementById('e-line09'));
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
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                data: [26, 59, 90, 264, 287, 707, 1756, 1822, 487, 188, 60, 23]
            },
            {
                name: '2019 访问量',
                type: 'line',
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




