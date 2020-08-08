$(function(){
    // 民事主题
    /* 信宜市地图 */
    var maps = echarts.init(document.getElementById('mapadd'));
    optionMap = {
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
            zoom:1.1,
            x:'25%',
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
                {
                    name:'贵子镇',
                    value: 10,
                    itemStyle: {
                        normal: {
                            areaColor: '#0e79d4',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'池洞镇',
                    value: 200,
                    itemStyle: {
                        normal: {
                            areaColor: '#fd2e42',
                            borderColor: '#dadfde',
                        }
                    }
                }, 
                {
                    name:'镇隆镇',
                    value: 300,
                    itemStyle: {
                        normal: {
                            areaColor: '#700897',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'丁堡镇',
                    value: 400,
                    itemStyle: {
                        normal: {
                            areaColor: '#a1bbfb',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'钱排镇',
                    value: 1500,
                    itemStyle: {
                        normal: {
                            areaColor: '#ffa800',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'新宝镇',
                    value: 600,
                    itemStyle: {
                        normal: {
                            areaColor: '#a1bbfb',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'朱砂镇',
                    value: 100,
                    itemStyle: {
                        normal: {
                            areaColor: '#a1bbfb',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'东镇街道',
                    value: 800,
                    itemStyle: {
                        normal: {
                            areaColor: '#a1bbfb',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'平塘镇',
                    value: 1250,
                    itemStyle: {
                        normal: {
                            areaColor: '#a1bbfb',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'思贺镇',
                    value: 1000,
                    itemStyle: {
                        normal: {
                            areaColor: '#7bd842',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'茶山镇',
                    value: 1800,
                    itemStyle: {
                        normal: {
                            areaColor: '#a1bbfb',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'金垌镇',
                    value: 100,
                    itemStyle: {
                        normal: {
                            areaColor: '#a1bbfb',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'水口镇',
                    value: 300,
                    itemStyle: {
                        normal: {
                            areaColor: '#a1bbfb',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'合水镇',
                    value: 1300,
                    itemStyle: {
                        normal: {
                            areaColor: '#a1bbfb',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'怀乡镇',
                    value: 1500,
                    itemStyle: {
                        normal: {
                            areaColor: '#6f0796',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'北界镇',
                    value: 500,
                    itemStyle: {
                        normal: {
                            areaColor: '#a1bbfb',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'大成镇',
                    value: 1700,
                    itemStyle: {
                        normal: {
                            areaColor: '#ffa800',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'白石镇',
                    value: 1800,
                    itemStyle: {
                        normal: {
                            areaColor: '#0e79d4',
                            borderColor: '#dadfde',
                        }
                    }
                },
                {
                    name:'洪冠镇',
                    value: 1900,
                    itemStyle: {
                        normal: {
                            areaColor: '#fd2e42',
                            borderColor: '#dadfde',
                        }
                    }
                }
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
            show: false,
            bottom:15,
            textStyle:{
                fontSize: 13,
                color:'rgba(255,255,255,.7)'
            },
            data:['判决','调解','撤诉'],
            formatter: function(name) {
                var index = 0;
                var clientlabels = ['判决','调解','撤诉'];
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
                radius: ['70%', '52%'],
                center: ['30%', '50%'],
                data:[
                    {value:335, name:'判决'},
                    {value:110, name:'调解'},
                    {value:154, name:'撤诉'}
                ]
            }
        ]
    };
    chart1.setOption(option1);

    // top 10 案件
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
            x: 80,
            y: 25,
            x2: 8,
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
            data: ['借款纠纷','离婚家庭纠纷','买卖纠纷','交通事故纠纷','劳动争议','财产保全','人格权纠纷','建筑工程纠纷','农业承包纠纷','物权保护纠纷']
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
            data: [90,85,65,59,53,50,49,45,42,38]
        }
    };
    chart4.setOption(option4);

    //点击事件
    chart4.on('click', function(param) {
        //console.log(param.name); 
        if ( param.name == '交通事故纠纷') {
            console.log('点击了交通事故纠纷');
            window.location.href="civil-jt.html";
        } else {
            return false;
        }
    });

    // 结案标的
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
            data: ['1000', '1000-1万', '1万-10万', '10万-100万', '100万以上']
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
                        position: 'top', //在左边显示
                        formatter: '{c}件',
                        textStyle: {     //数值样式
                            color: '#fff',
                            fontSize: 13
                        }
                    }
                }
            },
            data: [90,85,65,59,53]
        }
    };
    chart5.setOption(option5);
})