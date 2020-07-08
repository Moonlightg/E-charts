function chart5() {
    // 辖区法院三年庭审情况
    var chart5 = echarts.init(document.getElementById('echarts05'));
    option5 = {
        tooltip: {//鼠标指上时的标线
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        legend: {
            data: ['2017', '2018', '2019'],
            textStyle:{
                color:'#ffffff',
            }
        },
        grid: {
            x: 30,
            y: 25,
            x2: 8,
            y2: 25,
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
            boundaryGap: [0, 0.01],
            data: ['中院', '茂南', '信宜', '高州', '电白', '化州']
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
                name:'2017',
                type:'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgb(76, 199, 255)'},
                                {offset: 1, color: 'rgb(0, 175, 255)'}
                            ]
                        )
                    }
                },
                data:[20,83,35,49,53,13]
            },
            {
                name:'2018',
                type:'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgb(255, 238, 81)'},
                                {offset: 1, color: 'rgb(255, 229, 0)'}
                            ]
                        )
                    }
                },
                data:[60,30,15,29,43,50]
            },
            {
                name:'2019',
                type:'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgb(192, 255, 119)'},
                                {offset: 1, color: 'rgb(137, 255, 0)'}
                            ]
                        )
                    }
                },
                data:[30,35,15,29,13,23]
            }
        ]
    };
    chart5.setOption(option5);
}
function chart6() {
    // 辖区各法院庭审直播情况
    var chart6 = echarts.init(document.getElementById('echarts06'));
    option6 = {
        tooltip: {//鼠标指上时的标线
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            x: 30,
            y: 25,
            x2: 8,
            y2: 25,
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
            boundaryGap: [0, 0.01],
            data: ['中院', '茂南', '信宜', '高州', '电白', '化州']
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
        series: {
            name:'直播量',
            type:'bar',
            barWidth :15,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgb(76, 199, 255)'},
                            {offset: 1, color: 'rgb(0, 175, 255)'}
                        ]
                    )
                }
            },
            data:[200,183,75,149,53,113]
        }
    };
    chart6.setOption(option6);
}

function chart7() {
    // 年度刑事、民事top5案由情况
    var chart7 = echarts.init(document.getElementById('echarts07'));
    option7 = {
        color:['#4699f6','#e7e55a','#8ce78a', '#ee9968', '#6ddff7'],
        tooltip: {//鼠标指上时的标线
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            x: 30,
            y: 25,
            x2: 8,
            y2: 25,
        },
        series: [
            {
                name: '案件量',
                type: 'pie',
                radius: ['15%', '40%'],
                center: ['30%', '53%'],
                roseType: 'radius',
                label: {
                    normal: {
                      formatter(v) {
                        let text = v.name;
                        if (text.length <= 4) {
                          return `${text}`;
                        } else if (text.length > 4 && text.length <= 12) {
                          return text = `${text.slice(0, 4)}\n${text.slice(4)}`
                        }
                      },
                      textStyle: {
                        fontSize: 12
                      }
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    {value: 70, name: '民间借贷纠纷'},
                    {value: 40, name: '离婚纠纷'},
                    {value: 30, name: '车交通事故责任纠纷'},
                    {value: 20, name: '金融借款合同纠纷'},
                    {value: 15, name: '买卖合同纠纷'},
                ]
            },
            {
                name: '案件量',
                type: 'pie',
                radius: ['15%', '40%'],
                center: ['70%', '53%'],
                roseType: 'area',
                label: {
                    normal: {
                      formatter(v) {
                        let text = v.name;
                        if (text.length <= 4) {
                          return `${text}`;
                        } else if (text.length > 4 && text.length <= 12) {
                          return text = `${text.slice(0, 4)}\n${text.slice(4)}`
                        }
                      },
                      textStyle: {
                        fontSize: 12
                      }
                    }
                },
                data: [
                    {value: 25, name: '危险驾驶罪'},
                    {value: 22, name: '故意伤害罪'},
                    {value: 20, name: '寻衅滋事罪'},
                    {value: 18, name: '盗窃罪'},
                    {value: 10, name: '交通肇事罪'}
                ]
            }
        ]
    };
    chart7.setOption(option7);
}

function chart8() {
    // 年度各案件类型开庭情况
    var chart8 = echarts.init(document.getElementById('echarts08'));
    option8 = {
        color:['#4699f6','#e7e55a','#8ce78a', '#ee9968', '#6ddff7'],
        tooltip: {//鼠标指上时的标线
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        legend: {
            orient: 'vertical', // 'vertical'
            x: 'left', // 'center' | 'left' | {number},
            y: 'center', // 'center' | 'bottom' | {number}
            data: ['民事', '刑事', '行政', '执行'],
            textStyle:{
                color:'#ffffff',
            }
        },
        grid: {
            x: 30,
            y: 25,
            x2: 8,
            y2: 25,
        },
        series: {
            name: '案件量',
            type: 'pie',
            center: ['70%', '55%'],
            label: {
                normal: {
                  formatter(v) {
                    let text = v.name;
                    if (text.length <= 4) {
                      return `${text}`;
                    } else if (text.length > 4 && text.length <= 12) {
                      return text = `${text.slice(0, 4)}\n${text.slice(4)}`
                    }
                  },
                  textStyle: {
                    fontSize: 12
                  }
                }
            },
            data: [
                {value: 70, name: '民事'},
                {value: 20, name: '刑事'},
                {value: 6, name: '行政'},
                {value: 4, name: '执行'},
            ]
        }
        
    };
    chart8.setOption(option8);
}

function chartMap1() {
    /* 信宜市地图 */
    var maps = echarts.init(document.getElementById('mapadd'));
    // var coldCar = [
    //     {
    //         "name": "法院1",
    //         "value": [110.838899, 22.276922, 2]
    //     },
    //     {
    //         "name": "法院2",
    //         "value": [111.242146, 22.527415, 2]
    //     }
    // ]
    var sanData = [ // 散点数据
        {name: '法院1', value: 19,LngAndLat:[110.838899, 22.276922]},
        {name: '法院2', value: 14,LngAndLat:[111.242146, 22.527415]},
    ];
    var convertData = function (data) { // 处理数据函数
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = data[i].LngAndLat;
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    visualMap: false
                });
            }
        }
        return res;
    };
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
            formatter:'{b}-庭审量：{c}件'
        },
        // 地图配置
        geo: {
            show: true,
            map: "信宜市",
            roam: true,
            scaleLimit: {
                min: 1,
                max: 10
            },
            zoom: 1,
            aspectScale: 1,
            top:'18%',
            zoom:1.2,
            x:'8%',
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#ffffff"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#52a8fd',
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
            label: {
                normal: {
                    show: true,
                    fontSize: "10",
                    color: "#fff"

                },
                emphasis: {
                    show: false
                }
            }
        },
        series : [{ // 散点配置
                name: '法院',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(sanData),
                symbolSize: [18,18],
                showEffectOn: 'emphasis',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                tooltip:{
                    show:true,
                    // 自定义鼠标悬浮法院标记点显示自定义信息
                    formatter: function(params) {
                        let html = '<div class="info"><p>'+params.name+'</p><p><span>X坐标</span>：'+params.value[0]+'</p><p><span>Y坐标</span>：'+params.value[1]+'</p><p><span>数值</span>：'+params.value[2]+'</p></div>'
                        return html;
                    }
                },
                label: {
                    normal:{
                       show:false,
                       // formatter:function(params){ //标签内容,可自定义显示法院名称,但无法识别html标签
                       //      return  params.name;
                       // },
                       lineHeight: 20,
                       backgroundColor:'rgba(255,255,255,.9)',
                       borderColor:'#80cffd',
                       borderWidth:'1',
                       padding:[5,15,4],
                       color:'#000000',
                       fontSize: 0,
                       fontWeight:'normal',
                    },   
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F90'
                    }
                }
            }, { // 地图配置
            name: '信宜市',
            type: 'map',
            mapType: '信宜市', // 自定义扩展图表类型
            geoIndex: 0,
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
    //单击事件
    maps.on('click', function (params) {
        console.log(params);
        if (params.seriesName == '法院') {
            console.log("当前点击了:"+params.name);
            alert("当前点击了:"+params.name);
        }
    });
}

function chart2() {
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
}

function chart3() {
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
}