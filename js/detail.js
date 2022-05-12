var tbody = document.querySelector('tbody')
var btnadd = document.querySelector('#add')
var addbox = document.querySelector('.addbox')
var x = document.querySelector('.xp')
var inputidid = document.querySelector('#inputidid')
var inputtime = document.querySelector('#inputtime')
var inputms = document.querySelector('#inputms')
var inputps = document.querySelector('#inputps')
var inputgas = document.querySelector('#inputgas')
var inputhp = document.querySelector('#inputhp')
var inputhl = document.querySelector('#inputhl')
var inputtq = document.querySelector('#inputtq')
var inputfoot = document.querySelector('#inputfoot')
var inputwt = document.querySelector('#inputwt')
var inputecd = document.querySelector('#inputecd')
var inputwtd = document.querySelector('#inputwtd')
var inputwd = document.querySelector('#inputwd')
var inputetd = document.querySelector('#inputetd')
var inputed = document.querySelector('#inputed')

var inputwp = document.querySelector('#inputwp')
var inputpp = document.querySelector('#inputpp')
var inputot = document.querySelector('#inputot')
var inputit = document.querySelector('#inputit')
var inputof = document.querySelector('#inputof')
var inputif = document.querySelector('#inputif')
var inputvf = document.querySelector('#inputvf')
var submit = document.querySelector('#submit')
var statue
x.addEventListener('click', () => {
  addbox.style.display = 'none';
  inputidid.disabled = ''
  inputtime.disabled = ''
})

btnadd.addEventListener('click', () => {
  statue = 0
  addbox.style.display = 'block';
  inputidid.value =
    inputtime.value = inputms.value = inputps.value = inputgas.value = inputhp.value = inputhl.value = inputtq.value = inputfoot.value = inputwt.value = inputecd.value = inputwtd.value = inputwd.value = inputetd.value = inputed.value = inputwp.value = inputpp.value = inputot.value = inputit.value = inputof.value = inputif.value = inputvf.value = ''
})

submit.addEventListener('click', () => {
  let params = {
    id: inputidid.value,
    // time: inputtime.value.replace(/T/, ' '),
    time: inputtime.value,
    machineSpeed: inputms.value,
    panelSpeed: inputps.value,
    hposition: inputhp.value,
    gas: inputgas.value,
    hload: inputhl.value,
    torque: inputtq.value,
    footage: inputfoot.value,
    wtime: inputwt.value,
    ecd: inputecd.value,
    wtdeep: inputwtd.value,
    wdeep: inputwd.value,
    etdeep: inputetd.value,
    edeep: inputed.value,
    wildcatpress: inputwp.value,
    pumppress: inputpp.value,
    outtemperature: inputot.value,
    intemperature: inputit.value,
    outflow: inputof.value,
    inflow: inputif.value,
    vflow: inputvf.value
  }
  console.log(params);
  if (statue) {
    axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: "http://127.0.0.1/api/update",
      params: params
    }).then(res => {
      init()
      console.log('修改');
    })
    init()
  } else {
    axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: "http://127.0.0.1/api/add",
      params: params
    }).then(res => {
      init()
    })
    init()
  }
})

init()

function init() {
  var arr = []
  let result;
  axios.get('http://127.0.0.1/api/get').then(function (res) {
    result = res.data.data;
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      arr.push('<tr>')
      var obj = {
        wildcatId: result[i].wildcatId,
        time: countDown(result[i].time)
      }
      for (const key in obj) {
        arr.push(`<td>${obj[key]}</td>`)
      }

      arr.push('<td><button class="btn btn-secondary" id="del">删除</button><button class="btn btn-secondary" id="updata" index="' + i + '">修改</button></td></tr>')
    }
    $('#tb').empty().append(arr.join(''));
  })
}

// 删除
$('#tb').on('click', '#del', function () {
  var id = $(this).parent().parent().children()[0].innerHTML
  var time = $(this).parent().parent().children()[1].innerHTML
  axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: "http://127.0.0.1/api/del",
    params: {
      id: id,
      time: time
    }
  }).then(res => {
    init()
    console.log(res);
  })
  init()
})
// 修改
$('#tb').on('click', '#updata', function () {
  statue = 1
  addbox.style.display = 'block';
  let result;
  let index = $(this).attr("index")
  axios.get('http://127.0.0.1/api/get').then(function (res) {
    result = res.data.data;
    console.log(result);
    inputidid.value = result[index].wildcatId
    inputtime.value = countDown(result[index].time).replace(/ /, 'T').slice(0, 16)
    console.log(countDown(result[index].time).replace(/ /, 'T').slice(0, 16));
    inputms.value = result[index].machineSpeed
    inputps.value = result[index].panelSpeed
    inputgas.value = result[index].gas
    inputhp.value = result[index].hposition
    inputhl.value = result[index].hload
    inputtq.value = result[index].torque
    inputfoot.value = result[index].footage
    inputwt.value = result[index].wtime
    inputecd.value = result[index].ecd
    inputwtd.value = result[index].wtdeep
    inputwd.value = result[index].wdeep
    inputetd.value = result[index].etdeep
    inputed.value = result[index].edeep
    inputwp.value = result[index].wildcatpress
    inputpp.value = result[index].pumppress
    inputot.value = result[index].outtemperature
    inputit.value = result[index].intemperature
    inputof.value = result[index].outflow
    inputif.value = result[index].inflow
    inputvf.value = result[index].vflow
  })
  inputidid.disabled = 'disabled'
  inputtime.disabled = 'disabled'
})
// 时间
function countDown(time) {
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
  return `${y}-${mon}-${d} ${h}:${m}:${s}`
}