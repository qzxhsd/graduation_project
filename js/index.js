(function () {
    var pressChasrt = echarts.init(document.querySelector('.press'));
    var gasChasrt = echarts.init(document.querySelector('.gas'));
    var flowChasrt = echarts.init(document.querySelector('.flow'));
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
    pressChasrt.setOption(optionPress);




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
    gasChasrt.setOption(optionGas)


    // 流量
    var optionFlow = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
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
                            color: 'rgb(0, 221, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(77, 119, 255)'
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
                            color: 'rgb(55, 162, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(116, 21, 219)'
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
    flowChasrt.setOption(optionFlow);

})();