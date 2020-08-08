$(function(){
    // 民事主题
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
            x:'20%',
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

    // 结案方式
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
            show: true,
            top: '15%',
            left: '70%',
            bottom:15,
            textStyle:{
                fontSize: 13,
                color:'rgba(255,255,255,.7)'
            },
            data:['酒后驾驶','无证驾驶','超速行驶','逆向行驶','未按规定让行','其他'],
            formatter: function(name) {
                var index = 0;
                var clientlabels = ['酒后驾驶','无证驾驶','超速行驶','逆向行驶','未按规定让行','其他'];
                var clientcounts = [235,110,154,60,100,54];
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
                radius: '60%',
                center: ['35%', '50%'],
                data:[
                    {value:235, name:'酒后驾驶'},
                    {value:110, name:'无证驾驶'},
                    {value:154, name:'超速行驶'},
                    {value:60, name:'逆向行驶'},
                    {value:100, name:'未按规定让行'},
                    {value:54, name:'其他'}
                ]
            }
        ]
    };
    chart1.setOption(option1);

    // 肇事车辆类型及伤亡情况分析
    var chart4 = echarts.init(document.getElementById('echarts04'));
    option4 = {
        color:[
            '#284297',
            '#422a66', 
            '#966334', 
            '#e0b944', 
            '#408aad',
            '#414c4e',  
            '#60a6ec', 
            '#45a7f2',
            '#9129b3', 
            '#f44938', 
            '#45a7f2',
            '#9129b3', 
            '#f44938', 
            '#45a7f2',
            '#9129b3', 
            '#f44938', 
            '#45a7f2',
            '#9129b3', 
            '#f44938', 
            '#45a7f2',
            '#9129b3', 
            '#f44938', 
            '#45a7f2',
            '#9129b3', 
            '#f44938', 
            '#45a7f2',
            '#9129b3', 
            '#f44938'
        ],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
            data:['小汽车','大货车','面包车','公交车','摩托车','三轮车','自行车','小汽车死亡','小汽车轻伤','小汽车重伤','大货车死亡','大货车轻伤','大货车重伤','面包车死亡','面包车轻伤','面包车重伤','公交车死亡','公交车轻伤','公交车重伤','摩托车死亡','摩托车轻伤','摩托车重伤','三轮车死亡','三轮车轻伤','三轮车重伤','自行车死亡','自行车轻伤','自行车重伤']
        },
        series: [
            {
                name:'事故情况',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '70%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:679, name:'小汽车'},
                    {value:679, name:'大货车'},
                    {value:679, name:'面包车'},
                    {value:679, name:'公交车'},
                    {value:679, name:'摩托车'},
                    {value:679, name:'三轮车'},
                    {value:679, name:'自行车'}
                ]
            },
            {
                name:'事故情况',
                type:'pie',
                radius: ['75%', '90%'],
                label: {
                    show: false,
                    normal: {
                        show: false,
                        formatter: '{b|{b}：}{c}  ',
                        //formatter: '{b|{b}：}{c}  {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 20,
                                align: 'center'
                            },
                            // abg: {
                            //     backgroundColor: '#333',
                            //     width: '100%',
                            //     align: 'right',
                            //     height: 22,
                            //     borderRadius: [4, 4, 0, 0]
                            // },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 12,
                                lineHeight: 24
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                data:[
                    {value:310, name:'小汽车轻伤'},
                    {value:234, name:'小汽车重伤'},
                    {value:135, name:'小汽车死亡'},
                    {value:310, name:'大货车轻伤'},
                    {value:234, name:'大货车重伤'},
                    {value:135, name:'大货车死亡'},
                    {value:310, name:'面包车轻伤'},
                    {value:234, name:'面包车重伤'},
                    {value:135, name:'面包车死亡'},
                    {value:310, name:'公交车轻伤'},
                    {value:234, name:'公交车重伤'},
                    {value:135, name:'公交车死亡'},
                    {value:310, name:'摩托车轻伤'},
                    {value:234, name:'摩托车重伤'},
                    {value:135, name:'摩托车死亡'},
                    {value:310, name:'三轮车轻伤'},
                    {value:234, name:'三轮车重伤'},
                    {value:135, name:'三轮车死亡'},
                    {value:310, name:'自行车轻伤'},
                    {value:234, name:'自行车重伤'},
                    {value:135, name:'自行车死亡'},
                ]
            }
        ]
    };
    chart4.setOption(option4);

    // 月份交通事故量以及伤亡情况
    var chart5 = echarts.init(document.getElementById('echarts05'));
    option5 = {
        color:['#fff43f','#45a7f2','#9129b3', '#f44938', '#21419e', '#47276b','#9e6228',  '#e6b818', '#108db1','#3f4c50'],
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
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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
            name: '交通事故量',
            type: 'bar',
            barWidth :15,
            data: [90,76,88,45,66,52,55,75,45,66,98,43],
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
                    }
                }
            }
        },{
            name: '轻伤量',
            type: 'bar',
            barWidth :15,
            stack:'堆叠',
            data: [14,12,15,22,24,29,24,31,13,35,18,20]
        },{
            name: '重伤量',
            type: 'bar',
            barWidth :15,
            stack:'堆叠',
            data: [14,12,15,12,14,19,14,11,13,15,18,20]
        },{
            name: '死亡量',
            type: 'bar',
            barWidth :15,
            stack:'堆叠',
            data: [4,2,5,6,4,9,2,1,3,5,8,2]
        }]
    };
    chart5.setOption(option5);
})