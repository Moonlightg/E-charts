$(function(){

    /* 信宜市地图 */
    var maps = echarts.init(document.getElementById('mapadd'));
    optionMap = {
        visualMap: {
            show: false,
            min: 0, //最小值
            max: 2000, //最大值
            calculable: false, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
            inRange: {
                color: ['#b6c7ff', '#2a78e3', '#a042c3', '#700897'] //颜色
            },
            textStyle: {
                color: '#fff'
            },
        },
        // 提示框，鼠标移入
        tooltip:{
            show:true, //鼠标移入是否触发数据
            trigger: 'item', //出发方式
            formatter:'{b}-案件量：{c}件'
        },
        series : [{
            name: '信宜市',
            type: 'map',
            mapType: '信宜市',
            roam: false,
            top:'18%',
            zoom:1,
            x:'8%',
            selectedMode : 'single',//multiple多选
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#ffffff"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'贵子镇',value: 10},
                {name:'池洞镇',value: 200}, 
                {name:'镇隆镇',value: 300},
                {name:'丁堡镇',value: 400},
                {name:'钱排镇',value: 1500},
                {name:'新宝镇',value: 600},
                {name:'朱砂镇',value: 100},
                {name:'东镇街道',value: 800},
                {name:'平塘镇',value: 1250},
                {name:'思贺镇',value: 1000},
                {name:'茶山镇',value: 1800},
                {name:'金垌镇',value: 100},
                {name:'水口镇',value: 300},
                {name:'合水镇',value: 1300},
                {name:'怀乡镇',value: 1500},
                {name:'北界镇',value: 500},
                {name:'大成镇',value: 1700},
                {name:'白石镇',value: 1800},
                {name:'洪冠镇',value: 1900}
            ]
        }]
    };
    maps.setOption(optionMap);

    // 本月累计收案
    var chart1 = echarts.init(document.getElementById('echarts01'));
    option1 = {
        color:['#62b62f','#fbcb00', '#0088cc', '#5ebbeb', '#d16ad8','#f8e19a',  '#00b7ee', '#81dabe','#5fc5ce'],
        backgroundColor: 'rgba(1,202,217, 0)',
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
            data:['民事','刑事','执行'],
            formatter: function(name) {
                var index = 0;
                var clientlabels = ['民事','刑事','执行'];
                var clientcounts = [335,110,154];
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
                name: '累计收案',
                type: 'pie',
                radius : '50%',
                center: ['50%', '35%'],
                data:[
                    {value:335, name:'民事'},
                    {value:110, name:'刑事'},
                    {value:154, name:'执行'}
                ]
            }
        ]
    };
    chart1.setOption(option1);

    // 月度案件量走势
    var chart2 = echarts.init(document.getElementById('echarts02'));
    option2 = {
        
        tooltip: {//鼠标指上时的标线
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            x: 80,
            y: 25,
            x2: 15,
            y2: 25,
        },
        xAxis: [{
            type: 'value',
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
            boundaryGap: [0, 0.01]
        }],
        yAxis: [{
            type: 'category',
            inverse:true,// y轴数据逆向
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
            },
            data: ['借款纠纷','离婚家庭纠纷','买卖纠纷','交通事故纠纷','劳动争议','财产保全','盗窃罪','人格权纠纷','贩毒品罪','合伙协议纠纷']
        }],
        series: {
            name: '案件量',
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
                        position: 'insideLeft', //在左边显示
                        formatter: '{c}件',
                        textStyle: {     //数值样式
                            color: '#fff',
                            fontSize: 13
                        }
                    }
                }
            },
            data: [190,85,65,59,53,50,49,45,42,22]
        }
    };
    chart2.setOption(option2);


    // 月度各类型案件走势
    var chart3 = echarts.init(document.getElementById('echarts03'));
    option3 = {
        
        tooltip: {//鼠标指上时的标线
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['民事', '刑事', '执行'],
            right: '10px',
            top: '0px',
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
        grid: {
            x: 35,
            y: 25,
            x2: 8,
            y2: 25,
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                },
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
			name:'%',
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                },
                textStyle: {
                    color:'#fff',
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: '民事',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)'
                }
            },
            data: [66,75,65,75,76,58,49,64,84,52.4,61,65]
        }, {
            name: '刑事',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(251, 203, 0, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(251, 203, 0, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(251, 203, 0)'
                }
            },
            data: [77.3,79.2,69.3,88.0,78.6,80.6,80.0,85.5,69.8,67.5,86.4,84.9]
        }, {
            name: '执行',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)'
                }
            },
            data: [84.2,81.0,67.5,62.1,43.7,68.5,51.9,71.8,76.7,67.6,62.9,70.2]
        }, ]
    };
    chart3.setOption(option3);
})