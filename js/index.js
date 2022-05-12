var pressChart = echarts.init(document.querySelector('.press'), 'dark');
var gasChart = echarts.init(document.querySelector('.gas'), 'dark');
var flowChart = echarts.init(document.querySelector('.flow'), 'dark');
var deepChart = echarts.init(document.querySelector('.deep'));
var outtemperatureChart = echarts.init(document.querySelector('.out'), 'dark');
var intemperatureChart = echarts.init(document.querySelector('.in'), 'dark');
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
    d = d < 10 ? '0' + d : d;
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
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['钻压', '泵压'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52]
    }]
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
            },
            {
                value: 28,
                name: '其他'
            }
        ]
    }]
};
gasChart.setOption(optionGas)


// 流量
var optionFlow = {
    title: {
        text: '出入口流量'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['出口流量', '入口流量', '出入口体积流量'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        type: 'bar',
        barWidth: '40%',
        data: [10, 52, 200],
        colorBy: "data"
    }]
};
flowChart.setOption(optionFlow);




// 深度
var optionDeep = {
    polar: {
        radius: [10, '90%']
    },
    radiusAxis: {
        max: 10000
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




// 温度
var optionOut = {
    title: {
        text: '出口温度'
    },
    series: [{
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 1800,
            splitNumber: 12,
            itemStyle: {
                color: '#FFAB91'
            },
            progress: {
                show: true,
                width: 30
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    width: 10
                }
            },
            axisTick: {
                distance: -20,
                splitNumber: 5,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {
                distance: -30,
                length: 14,
                lineStyle: {
                    width: 3,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: -20,
                color: '#999',
                fontSize: 10
            },
            anchor: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 20,
                fontWeight: 'bolder',
                formatter: '{value} °C',
                color: 'auto'
            },
            data: [{
                value: 20
            }]
        },
        {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 1800,
            itemStyle: {
                color: '#FD7347'
            },
            progress: {
                show: true,
                width: 8
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 20
            }]
        }
    ]
};
outtemperatureChart.setOption(optionOut);

var optionIn = {
    title: {
        text: '入口温度'
    },
    series: [{
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 1800,
            splitNumber: 12,
            itemStyle: {
                color: '#FFAB91'
            },
            progress: {
                show: true,
                width: 30
            },
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    width: 10
                }
            },
            axisTick: {
                distance: -20,
                splitNumber: 5,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {
                distance: -30,
                length: 14,
                lineStyle: {
                    width: 3,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: -20,
                color: '#999',
                fontSize: 10
            },
            anchor: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 20,
                fontWeight: 'bolder',
                formatter: '{value} °C',
                color: 'auto'
            },
            data: [{
                value: 20
            }]
        },
        {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 1800,
            itemStyle: {
                color: '#FD7347'
            },
            progress: {
                show: true,
                width: 8
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 20
            }]
        }
    ]
};
intemperatureChart.setOption(optionIn);

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
var dataBJ = [
    [155, 239, 156, 124, 99, 62]
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
                max: 10000
            },
            {
                name: '大钩载荷',
                max: 4500
            },
            {
                name: '扭矩',
                max: 100
            },
            {
                name: '钻进进尺',
                max: 10000
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
            opacity: 0.3
        }
    }]
};
radarChart.setOption(optionRadar);