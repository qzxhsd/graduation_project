var result;
axios.get('http://127.0.0.1/api/get').then(function (res) {
    result = res.data.data;
    console.log(result);
})
var i = 0;
var time = setInterval(() => {
    if (i >= result.length) {
        // 转盘转速
        optionSpeedP.series[0].data[0].value = result[0].panelSpeed;
        // 机械转速
        optionSpeedM.series[0].data[0].value = result[0].machineSpeed;
        i = 1;
    } else {
        // 转盘转速
        optionSpeedP.series[0].data[0].value = result[i].panelSpeed;
        // 机械转速
        optionSpeedM.series[0].data[0].value = result[i].machineSpeed;
        i++;
    }
    // 转盘转速
    speedPChart.setOption(optionSpeedP);
    // 机械转速
    speedMChart.setOption(optionSpeedM);
}, 2000)