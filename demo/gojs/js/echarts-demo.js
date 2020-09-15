$(function(){

    // 本月累计收案
    var chart1 = echarts.init(document.getElementById('echarts01'));
    const { random, PI, cos, sin } = Math;

    // 随机生成占比数据
        const val = 50;


    // 圆心角的一半
        const angle = PI * val / 50 / 2;
    // 渐变起点
        const pointStart = [
            0.5 - 0.5 * cos(angle) * sin(angle),
            0.5 + 0.5 * cos(angle) * cos(angle)
        ];
    // 渐变终点
        const pointEnd = [
            0.5 - 0.5 * sin(angle),
            0.5 + 0.5 * cos(angle)
        ];

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
        },
        series: [{
            name: '占比',
            type: 'pie',
            startAngle: 270, // 环图起始位置：正下发
            radius: ['60%', '75%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: ({ data }) => `280KW\n`
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                name: '满足率',
                value: val,
                label: {
                    normal: {
                        fontSize: 13,
                        color: '#00b1bf',
                        fontWeight: 'bolder'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: pointStart[0],
                            y: pointStart[1],
                            x2: pointEnd[0],
                            y2: pointEnd[1],
                            colorStops: [
                                // !! 在此添加渐变过程色 !!
                                { offset: 0, color: '#00b1bf' },
                                { offset: 1, color: '#00fdf9' }
                            ]
                        },
                        shadowColor: 'rgba(34,192,245,0.8)',
                        shadowBlur: 10
                    }
                }
            }, {
                name: '未满足率',
                value: 100 - val,
                label: {
                    normal: {
                        show: false,
                        fontSize: 0
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#b2cbcd'
                    },
                    emphasis: {
                        color: '#f0f0f0'
                    }
                },
                hoverAnimation: false
            }]
        }]
    };
    chart1.setOption(option1);

    var chart2 = echarts.init(document.getElementById('echarts02'));
    option2 = {

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
        },
        series: [{
            name: '占比',
            type: 'pie',
            startAngle: 270, // 环图起始位置：正下发
            radius: ['60%', '75%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: ({ data }) => `150t\n`
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                name: '总耗煤量',
                value: val,
                label: {
                    normal: {
                        fontSize: 13,
                        color: '#fb8838',
                        fontWeight: 'bolder'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: pointStart[0],
                            y: pointStart[1],
                            x2: pointEnd[0],
                            y2: pointEnd[1],
                            colorStops: [
                                // !! 在此添加渐变过程色 !!
                                { offset: 0, color: '#f94304' },
                                { offset: 1, color: '#fbb55f' }
                            ]
                        },
                        shadowColor: 'rgba(250, 122, 47, 0.4)',
                        shadowBlur: 10
                    }
                }
            }, {
                name: '未满足率',
                value: 100 - val,
                label: {
                    normal: {
                        show: false,
                        fontSize: 0
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fde9da'
                    },
                    emphasis: {
                        color: '#f0f0f0'
                    }
                },
                hoverAnimation: false
            }]
        }]
    };
    chart2.setOption(option2);


    var chart3 = echarts.init(document.getElementById('echarts03'));
    option3 = {

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
        },
        series: [{
            name: '占比',
            type: 'pie',
            startAngle: 270, // 环图起始位置：正下发
            radius: ['60%', '75%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: ({ data }) => `650m³\n`
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                name: '总耗煤量',
                value: val,
                label: {
                    normal: {
                        fontSize: 13,
                        color: '#02abfe',
                        fontWeight: 'bolder'
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: pointStart[0],
                            y: pointStart[1],
                            x2: pointEnd[0],
                            y2: pointEnd[1],
                            colorStops: [
                                // !! 在此添加渐变过程色 !!
                                { offset: 0, color: '#116bff' },
                                { offset: 1, color: '#02abfe' }
                            ]
                        },
                        shadowColor: 'rgba(34,192,245,0.8)',
                        shadowBlur: 10
                    }
                }
            }, {
                name: '未满足率',
                value: 100 - val,
                label: {
                    normal: {
                        show: false,
                        fontSize: 0
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#bae8ff'
                    },
                    emphasis: {
                        color: '#f0f0f0'
                    }
                },
                hoverAnimation: false
            }]
        }]
    };
    chart3.setOption(option3);

    var chart4 = echarts.init(document.getElementById('echarts04'));
    option4 = {

        tooltip: {//鼠标指上时的标线
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            x: 60,
            y: 20,
            x2: 25,
            y2: 30,
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
                    color:'rgba(255,255,255,.2)'
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
                    color:'rgba(255,255,255,.2)'
                }
            },
            axisLabel:{
                color:"rgba(255,255,255,.5)"
            },
            data: ['1号窖炉','2号窖炉','3号窖炉','4号窖炉']
        }],
        series: {
            name: '温度',
            type: 'bar',
            barWidth :18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1, 0, 0, 1,
                        [
                            {offset: 0, color: '#23c0f9'},
                            {offset: 1, color: '#01b0ef'}
                        ]
                    ),
                    label: {
                        show: true,      //开启显示
                        position: 'insideLeft', //在左边显示
                        formatter: '{c}℃ ',
                        textStyle: {     //数值样式
                            color: '#fff',
                            fontSize: 13
                        }
                    }
                }
            },
            data: [620,800,1000,900]
        }
    };
    chart4.setOption(option4);

    var chart5 = echarts.init(document.getElementById('echarts05'));
    option5 = {
        color:['#62b62f','#fbcb00', '#0088cc', '#5ebbeb', '#d16ad8','#f8e19a',  '#00b7ee', '#81dabe','#5fc5ce'],
        grid: {
            x: 10,
            y: 20,
            x2: 25,
            y2: 30,
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            show: true,
            bottom:15,
            textStyle:{
                fontSize: 13,
                color:'rgba(255,255,255,.7)'
            },
            itemWidth:15,
            itemHeight:8,
            data:['抛光砖','抛釉砖','通体砖', '复古砖', '瓷片', '马赛克'],
            formatter: function(name) {
                var index = 0;
                var clientlabels = ['抛光砖','抛釉砖','通体砖', '复古砖', '瓷片', '马赛克'];
                var clientcounts = [100,100,100,100,100,100];
                clientlabels.forEach(function(value,i){
                    if(value == name){
                        index = i;
                    }
                });
                return name;
            }
        },
        series: [
            {
                name: '余热利用',
                type: 'pie',
                radius: ['35%', '50%'],
                center: ['50%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    formatter: '{d}%'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: [
                    {value: 100, name: '抛光砖'},
                    {value: 100, name: '抛釉砖'},
                    {value: 100, name: '通体砖'},
                    {value: 100, name: '复古砖'},
                    {value: 100, name: '瓷片'},
                    {value: 100, name: '马赛克'}
                ]
            }
        ]
    };
    chart5.setOption(option5);

    var chart6 = echarts.init(document.getElementById('echarts06'));
    option6 = {
        title: {
            show: true,
            text: 'm³/min',
            x:'0px',
            y:'0px',
            textStyle: {
                fontSize: 12,
                fontStyle: 'normal',
                fontWeight: 'normal',
                color: "#fff"
            }
        },
        tooltip: {//鼠标指上时的标线
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
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
            data: ['压缩机1', '压缩机2', '压缩机3']
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
            name: '产气量',
            type: 'bar',
            barWidth :20,
            itemStyle: {
                normal: {
                    label: {
                        show: true,      //开启显示
                        position: 'top', //在左边显示
                        formatter: '{c}',
                        textStyle: {     //数值样式
                            color: '#fff',
                            fontSize: 13
                        }
                    },
                    color: function(params) {
                        var colorList = ['#04c8fa','#fcba63','#00ffef','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#4A235A','#3498DB' ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data: [90,85,65],
        }
    };
    chart6.setOption(option6);

    var Chart7 = echarts.init(document.getElementById('echarts07'));
    var date = [];
    var randomData = [];
    var randomData2 = [];
    var dt = ""
    for(var i = 0; i<24; i++){
        if (i < 10) {
            dt = "0"+i+":00"
        } else {
            dt = i+":00"
        }
        date.push(dt);
        randomData.push(Math.floor(Math.random()*100));
        randomData2.push(Math.floor(Math.random()*100));
    }
    // 指定图表的配置项和数据
    var option7 = {
        tooltip: {//鼠标指上时的标线
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
            x: 50,
            y: 20,
            x2: 25,
            y2: 35,
        },
        legend: {
            icon: 'rect',
            itemWidth: 15,
            itemHeight: 8,
            itemGap: 26,
            data: ['损害率', '运行效率'],
            right: 10,
            top: 0,
            textStyle: {
                fontSize:14,
                color: '#fff'
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            offset:10,
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
                    fontSize: 13,
                },
            },
            data: date
        },
        yAxis: {
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
                    fontSize:14
                },
                textStyle: {
                    color:'#fff',
                    fontSize: 14
                },
            },
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
        },
        series: [{
            name: '损害率',
            data: randomData,
            type: 'line',
            smooth: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(173, 63, 36, 0.86)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(173, 63, 36, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#ad3f24'
                }
            }
        },{
            name: '运行效率',
            data: randomData2,
            type: 'line',
            smooth: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(44, 162, 190, 0.8)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(44, 162, 190, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#2ca2be'
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    Chart7.setOption(option7);

    var len = date.length;

    setInterval(function(){
        if ( len == 24 ) {
            len = 0;
        }
        randomData.push(Math.floor(Math.random()*100));
        randomData.shift();
        randomData2.push(Math.floor(Math.random()*100));
        randomData2.shift();
        date.push(dt);
        date.shift();
        Chart7.setOption({
            xAxis: {
                data: date
            },
            series: [{
                data: randomData
            }, {
                data: randomData2
            }]
        });
    }, 2000);


    var chart8 = echarts.init(document.getElementById('echarts08'));
    option8 = {
        color:['#04c8fa','#fcba63','#00ffef', '#5ebbeb', '#d16ad8','#f8e19a',  '#00b7ee', '#81dabe','#5fc5ce'],
        grid: {
            x: 10,
            y: 20,
            x2: 25,
            y2: 30,
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            show: false,
            bottom:15,
            textStyle:{
                fontSize: 13,
                color:'rgba(255,255,255,.7)'
            },
            itemWidth:15,
            itemHeight:8,
            data:['压缩机1','压缩机2','压缩机3'],
            formatter: function(name) {
                var index = 0;
                var clientlabels = ['压缩机1','压缩机2','压缩机3'];
                var clientcounts = [100,100,100];
                clientlabels.forEach(function(value,i){
                    if(value == name){
                        index = i;
                    }
                });
                return name;
            }
        },
        series: [
            {
                name: '耗电量',
                type: 'pie',
                radius: ['45%', '60%'],
                center: ['50%', '35%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    formatter: '{d}%'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 100, name: '压缩机1'},
                    {value: 100, name: '压缩机2'},
                    {value: 100, name: '压缩机3'}
                ]
            }
        ]
    };
    chart8.setOption(option8);

    var chart9 = echarts.init(document.getElementById('echarts09'));
    option9 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + ': ' + params[0].value;
            }
        },
        grid: {
            x: 50,
            y: 30,
            x2: 25,
            y2: 50,
        },
        xAxis: {
            data: ['球磨机1', '球磨机2', '球磨机3', '球磨机4'],
            axisTick: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#57617B',
                    fontSize: 14,
                }
            },
            axisLabel: {
                textStyle: {
                    color:'#fff',
                    fontSize: 14,
                },
            }
        },
        yAxis: {
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
        },
        color: ['#12c3c9'],
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '40%',
            symbol: 'triangle',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(16, 195, 201, 0.9)'},
                            {offset: 1, color: 'rgba(16, 195, 201, 0.2)'}
                        ]
                    ),
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [123, 60, 125, 128],
            z: 10
        }, {
            name: 'glyph',
            type: 'pictorialBar',
            barGap: '-100%',
            symbolPosition: 'end',
            symbolSize: 50,
            symbolOffset: [0, '-120%'],

        }]
    };
    chart9.setOption(option9);

    var chart10 = echarts.init(document.getElementById('echarts10'));
    option10 = {
        tooltip: {//鼠标指上时的标线
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        legend: {
            data: ['利用', '负载'],
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
            data: ['09-07', '09-08', '09-09', '09-10', '09-11']
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
                name:'利用',
                type:'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 1,
                            [
                                {offset: 0, color: '#03feef'},
                                {offset: 1, color: '#03feef'}
                            ]
                        )
                    }
                },
                data:[20,83,35,49,53]
            },
            {
                name:'负载',
                type:'bar',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            1, 0, 0, 1,
                            [
                                {offset: 0, color: '#fdba63'},
                                {offset: 1, color: '#fdba63'}
                            ]
                        )
                    }
                },
                data:[60,30,15,29,43]
            }
        ]
    };
    chart10.setOption(option10);

})
