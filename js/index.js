(function () {
    var pressChart = echarts.init(document.querySelector('.press'), 'dark');
    var gasChart = echarts.init(document.querySelector('.gas'), 'dark');
    var flowChart = echarts.init(document.querySelector('.flow'), 'dark');
    var deepChart = echarts.init(document.querySelector('.deep'));
    var densityChart = echarts.init(document.querySelector('.density'), 'dark');
    var temperatureChart = echarts.init(document.querySelector('.temperature'), 'dark');
    var speedMChart = echarts.init(document.querySelector('.speedM'), 'dark');
    var speedPChart = echarts.init(document.querySelector('.speedP'), 'dark');
    var radarChart = echarts.init(document.querySelector('.radar'), 'dark');



    // 时间模块
    var year = document.querySelector('.y');
    var month = document.querySelector('.mon');
    var day = document.querySelector('.d');
    var hour = document.querySelector('.h');
    var minute = document.querySelector('.m');
    var second = document.querySelector('.s');
    countDown(); //先调用一次函数防止第一次刷新页面有空白
    setInterval(function () {
        countDown();
    }, 1000);


    function countDown() {
        var nowTime = new Date(); // 括号为空返回的是当前时间总的毫秒数
        var y = nowTime.getFullYear()
        var mon = nowTime.getMonth() + 1
        var d = nowTime.getDate()
        var h = nowTime.getHours()
        var m = nowTime.getMinutes()
        var s = nowTime.getSeconds()

        mon = mon < 10 ? '0' + mon : mon;
        day = day < 10 ? '0' + day : day;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        year.innerHTML = y + '年';
        month.innerHTML = mon + '月';
        day.innerHTML = d + '日';
        hour.innerHTML = h + ':';
        minute.innerHTML = m + ':';
        second.innerHTML = s;
    }




    // 钻压泵压区块
    var optionPress = {
        title: {
            text: '深度钻压与泵压'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['钻压', '泵压']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['100', '200', '500', '600', '700', '800', '900']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
                name: '钻压',
                type: 'line',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '泵压',
                type: 'line',
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
    };
    pressChart.setOption(optionPress);




    // 气体含量分析
    var optionGas = {
        title: {
            text: '气体含量'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
            name: '气体含量',
            type: 'pie',
            radius: [25, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [{
                    value: 40,
                    name: '氧气'
                },
                {
                    value: 38,
                    name: '氮气'
                },
                {
                    value: 32,
                    name: '氦气'
                },
                {
                    value: 30,
                    name: '氢气'
                },
                {
                    value: 28,
                    name: '氯气'
                }
            ]
        }]
    };
    gasChart.setOption(optionGas)


    // 流量
    var optionFlow = {
        color: ['#80FFA5', '#FF0087', '#FFBF00'],
        title: {
            text: '出入口流量',
            textStyle: {
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['出口流量', '入口流量', '出口体积流量']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '出口流量',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.3,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [140, 232, 101, 264, 90, 340, 250]
            },
            {
                name: '入口流量',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.3,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 0, 135)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(135, 0, 157)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 282, 111, 234, 220, 340, 310]
            },
            {
                name: '出口体积流量',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.3,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 191, 0)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(224, 62, 76)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 132, 201, 334, 190, 130, 220]
            },

        ]
    };
    flowChart.setOption(optionFlow);




    // 深度
    var optionDeep = {
        polar: {
            radius: [10, '90%']
        },
        radiusAxis: {
            max: 400
        },
        angleAxis: {
            type: 'category',
            data: ['钻头测深', '钻头垂深', '井眼测深', '井眼垂深'],
            startAngle: 75
        },
        tooltip: {},
        series: {
            type: 'bar',
            data: [255, 142, 234, 316],
            coordinateSystem: 'polar',
            label: {
                show: true,
                position: 'middle',
                formatter: '{c}'
            }
        },
        // backgroundColor: '#fff',
        animation: false
    };

    deepChart.setOption(optionDeep);



    // 出入口数据轮播图
    var optionDensity = {
        title: {
            text: '出入口密度'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['出口密度', '入口密度']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [

            {
                name: '出口密度',
                type: 'line',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '入口密度',
                type: 'line',
                data: [320, 332, 301, 334, 390, 330, 320]
            }
        ]
    };
    densityChart.setOption(optionDensity);


    var optionTemperature = {
        title: {
            text: '出入口温度'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [{
                name: '出口温度',
                type: 'line',
                data: [10, 11, 13, 11, 12, 12, 9],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: 'Max'
                        },
                        {
                            type: 'min',
                            name: 'Min'
                        }
                    ]
                },
                markLine: {
                    data: [{
                            type: 'average',
                            name: 'Avg'
                        },
                        [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            },
                            {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: 'Max'
                                },
                                type: 'max',
                                name: '最高点'
                            }
                        ],
                        [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'min'
                            },
                            {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: 'Min'
                                },
                                type: 'min',
                                name: '最低点'
                            }
                        ]
                    ]
                }
            },
            {
                name: '入口温度',
                type: 'line',
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [{
                        name: '周最低',
                        value: -2,
                        xAxis: 1,
                        yAxis: -1.5
                    }]
                },
                markLine: {
                    data: [{
                            type: 'average',
                            name: 'Avg'
                        },
                        [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            },
                            {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: 'Max'
                                },
                                type: 'max',
                                name: '最高点'
                            }
                        ],
                        [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'min'
                            },
                            {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: 'Min'
                                },
                                type: 'min',
                                name: '最低点'
                            }
                        ]
                    ]
                }
            }
        ]
    };
    temperatureChart.setOption(optionTemperature);



    // 机械转速
    var optionSpeedM = {
        title: {
            text: '机械转速'
        },
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [{
            center: ["50%", "55%"],
            radius: "90%",
            name: '机械转速',
            type: 'gauge',
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}'
            },
            data: [{
                value: 50,
            }]
        }]
    };
    speedMChart.setOption(optionSpeedM);


    // 转盘转速
    var optionSpeedP = {
        title: {
            text: '转盘转速'
        },
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [{
            center: ["50%", "55%"],
            radius: "90%",
            name: '转盘转速',
            type: 'gauge',
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}'
            },
            data: [{
                value: 50,
            }]
        }]
    };
    speedPChart.setOption(optionSpeedP);


    // 雷达
    const dataBJ = [
        [155, 29, 156, 0.46, 99, 62]
    ];
    const lineStyle = {
        width: 1,
        opacity: 0.5
    };
    var optionRadar = {
        tooltip: {},
        backgroundColor: '#161627',
        title: {
            left: 'center',
            textStyle: {
                color: '#eee'
            }
        },
        legend: {
            bottom: 5,
            data: ['钻井'],
            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            selectedMode: 'single'
        },
        radar: {
            indicator: [{
                    name: '大钩位置',
                    max: 300
                },
                {
                    name: '大钩载荷',
                    max: 250
                },
                {
                    name: '扭矩',
                    max: 300
                },
                {
                    name: '钻进进尺',
                    max: 5
                },
                {
                    name: '钻头时间',
                    max: 200
                },
                {
                    name: '井底ECD',
                    max: 100
                }
            ],
            shape: 'circle',
            splitNumber: 5,
            axisName: {
                color: 'rgb(238, 197, 102)'
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)',
                        'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)',
                        'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)',
                        'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [{
            name: '钻井',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'none',
            itemStyle: {
                color: '#F9713C'
            },
            areaStyle: {
                opacity: 0.1
            }
        }]
    };
    radarChart.setOption(optionRadar);
})();