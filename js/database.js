var wildcat = document.querySelector('.wildcat')
var timeChoosed = document.querySelector('.timeChoosed')
var wid = document.querySelector('.wid')
var wtime = document.querySelector('.wtime')
var submit = document.querySelector('#submit')
var reset = document.querySelector('#reset')
var result;
axios.get('http://127.0.0.1/api/get').then(function (res) {
    result = res.data.data;
})
var i = 0;
var time = setInterval(firstSet, 2000)
submit.addEventListener('click', () => {
    clearInterval(time)

    var paramsObj = {
        id: wid.value,
        time: wtime.value
    }
    var url = 'http://127.0.0.1/api/getone'
    axios.get(url, {
        params: paramsObj
    }).then((res) => {
        let gasarr = [];
        let deeparr = [];
        let re = res.data.data
        console.log(re);
        wildcat.innerHTML = re[0].wildcatId
        timeChoosed.innerHTML = countDown1(countDown2(re[0].time))
        optionSpeedP.series[0].data[0].value = re[0].panelSpeed
        optionSpeedM.series[0].data[0].value = re[0].machineSpeed
        // 气体 雷达 s深度=re[0].
        gasarr = re[0].gas.split(',')
        for (let i = 0; i < gasarr.length; i++) {
            optionGas.series[0].data[i].value = gasarr[i]
        }
        dataBJ[0] = [re[0].hposition, re[0].hload, re[0].torque, re[0].footage, re[0].wtime, re[0].ecd]
        deeparr = [re[0].wtdeep, re[0].wdeep, re[0].etdeep, re[0].edeep]
        optionDeep.series.data = deeparr

        optionPress.series[0].data[0] = re[0].wildcatpress
        optionPress.series[0].data[1] = re[0].pumppress
        optionFlow.series[0].data[0] = re[0].outflow
        optionFlow.series[0].data[1] = re[0].inflow
        optionFlow.series[0].data[2] = re[0].vflow
        optionOut.series[0].data[0].value = re[0].outtemperature
        optionOut.series[1].data[0].value = re[0].outtemperature
        optionIn.series[0].data[0].value = re[0].intemperature
        optionIn.series[1].data[0].value = re[0].intemperature

    })

    speedPChart.setOption(optionSpeedP);
    speedMChart.setOption(optionSpeedM);
    gasChart.setOption(optionGas)
    radarChart.setOption(optionRadar)
    deepChart.setOption(optionDeep);
    pressChart.setOption(optionPress);
    flowChart.setOption(optionFlow);
    outtemperatureChart.setOption(optionOut);
    intemperatureChart.setOption(optionIn);
})

reset.addEventListener('click', () => {
    wid.value = ''
    wtime.value = ''
    clearInterval(time)
    time = setInterval(firstSet, 2000)
})



function firstSet() {
    let gasarr = [];
    let deeparr = [];
    if (i >= result.length) {
        wildcat.innerHTML = result[0].wildcatId;
        timeChoosed.innerHTML = countDown1(result[0].time);
        // 转盘转速
        optionSpeedP.series[0].data[0].value = result[0].panelSpeed;
        // 机械转速
        optionSpeedM.series[0].data[0].value = result[0].machineSpeed;
        // 气体含量
        gasarr = result[0].gas.split(',')
        for (let i = 0; i < gasarr.length; i++) {
            optionGas.series[0].data[i].value = gasarr[i]
        }
        // 雷达
        dataBJ[0] = [result[0].hposition, result[0].hload, result[0].torque, result[0].footage, result[0].wtime, result[0].ecd]
        // 深度
        deeparr = [result[0].wtdeep, result[0].wdeep, result[0].etdeep, result[0].edeep]
        optionDeep.series.data = deeparr
        // 压
        optionPress.series[0].data[0] = result[0].wildcatpress
        optionPress.series[0].data[1] = result[0].pumppress
        // 流量
        optionFlow.series[0].data[0] = result[0].outflow
        optionFlow.series[0].data[1] = result[0].inflow
        optionFlow.series[0].data[2] = result[0].vflow
        // 温度
        optionOut.series[0].data[0].value = result[0].outtemperature
        optionOut.series[1].data[0].value = result[0].outtemperature

        optionIn.series[0].data[0].value = result[0].intemperature
        optionIn.series[1].data[0].value = result[0].intemperature

        i = 1;
    } else {
        wildcat.innerHTML = result[i].wildcatId;
        timeChoosed.innerHTML = countDown1(result[i].time);
        // 转盘转速
        optionSpeedP.series[0].data[0].value = result[i].panelSpeed;
        // 机械转速
        optionSpeedM.series[0].data[0].value = result[i].machineSpeed;
        // 气体含量
        gasarr = result[i].gas.split(',')
        for (let i = 0; i < gasarr.length; i++) {
            optionGas.series[0].data[i].value = gasarr[i]
        }
        // 雷达
        dataBJ[0] = [result[i].hposition, result[i].hload, result[i].torque, result[i].footage, result[i].wtime, result[i].ecd]
        // 深度
        deeparr = [result[i].wtdeep, result[i].wdeep, result[i].etdeep, result[i].edeep]
        optionDeep.series.data = deeparr
        // 压
        optionPress.series[0].data[0] = result[i].wildcatpress
        optionPress.series[0].data[1] = result[i].pumppress
        // 流量
        optionFlow.series[0].data[0] = result[i].outflow
        optionFlow.series[0].data[1] = result[i].inflow
        optionFlow.series[0].data[2] = result[i].vflow
        // 温度
        optionOut.series[0].data[0].value = result[i].outtemperature
        optionOut.series[1].data[0].value = result[i].outtemperature

        optionIn.series[0].data[0].value = result[i].intemperature
        optionIn.series[1].data[0].value = result[i].intemperature

        i++;
    }
    // 转盘转速
    speedPChart.setOption(optionSpeedP);
    // 机械转速
    speedMChart.setOption(optionSpeedM);
    // 气体含量
    gasChart.setOption(optionGas)
    // 雷达
    radarChart.setOption(optionRadar)
    // 深度
    deepChart.setOption(optionDeep);
    // 压
    pressChart.setOption(optionPress);
    // 流量
    flowChart.setOption(optionFlow);
    //温度
    outtemperatureChart.setOption(optionOut);
    intemperatureChart.setOption(optionIn);

}

function countDown1(time) {
    var nowTime = new Date(time); // 括号为空返回的是当前时间总的毫秒数
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
    return `${y}年${mon}月${d}日${h}时${m}分${s}秒`
}

function countDown2(time) {
    var nowTime = new Date(time); // 括号为空返回的是当前时间总的毫秒数
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
    return `${y}-${mon}-${d}T${h}:${m}:${s}`
}