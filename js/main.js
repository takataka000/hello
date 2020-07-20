//chart.js
//myChart0 インターネット普及率
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart0").getContext("2d");
ctx.canvas.height = 280;
var myChart0 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["平成28年","平成29年","平成30年","令和元年","令和2年"],
    datasets: [
      {
        data: [83.5, 80.9, 79.8, 89.8, 97.2],
        backgroundColor: ["#02CDFF", "#039EFF", "#0058FF", "#5902FF", "#8103FF"],
        borderWidth: 1,
      },
      ],
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data.labels[tooltipItem.index]
            + ": "
            + data.datasets[0].data[tooltipItem.index]
            + " %";
        },
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10
      },
    },
    legend: {
      display: false,
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});

//myChart1 年齢層別インターネット普及率
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart1").getContext("2d");
ctx.canvas.height = 280;
var myChart1 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["全体", "6~12歳", "13~19", "20~29", "30~39", "40~49","50~59", "60~69", "70~79", "80歳以上"],
    datasets: [
      {
        label: "平成28年",
        data: [83.5, 82.6, 98.4, 99.2, 97.5, 96.7, 93.0, 75.7, 53.6, 23.4,],
        backgroundColor: ["#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF"],
        borderWidth: 1,
      },
      {
        label: "平成29年",
        data: [
          80.9,
          73.6,
          96.9,
          98.7,
          97.8,
          96.8,
          92.4,
          73.9,
          46.7,
          20.1],
        backgroundColor: ["#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF"],
        borderWidth: 1,
      },
      {
        label: "平成30年",
        data: [
          79.8,
          67.1,
          96.6,
          98.7,
          97.9,
          96.7,
          93.0,
          76.6,
          51.0,
          21.5],
        backgroundColor: ["#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF"],
        borderWidth: 1,
      },
      {
        label: "令和元年",
        data: [89.8, 80.2, 98.4, 99.1, 99.0, 98.3, 97.7, 90.5, 74.2, 57.5],
        backgroundColor: ["#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF"],
        borderWidth: 1,
      },
      {
        label: "令和2年４月",
        data: [
          85.5,
          85.6,
          98.4,
          99.2,
          99.5,
          98.7,
          95.0,
          80.7,
          60.6,
          50.4,
          ],
        backgroundColor: ["#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});

//chart.js
//myChart2　所得層別インターネット普及率
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart2").getContext("2d");
ctx.canvas.height = 280;
var myChart2 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["~200万円", "200~400", "400~600", "600~800", "800~1000", "1000万円~"],
    datasets: [
      {
        label: "平成28年",
        data: [],
        backgroundColor: ["#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF"],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "平成29年",
        data: [
          54.2,
          74.1,
          85.5,
          89.1,
          90.5,
          91.9,
        ],
        backgroundColor: ["#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF"],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "平成30年",
        data: [
          54.4,
          70.6,
          83.9,
          87.8,
          89.7,
          90.3,],
        backgroundColor: ["#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF"],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "令和元年",
        data: [
          80.7,
          86.5,
          90.8,
          92.7,
          93.4,
          94.5],
        backgroundColor: ["#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF"],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "令和2年",
        data: [
          85.7,
          89.5,
          95.8,
          95.7,
          95.4,
          96.5
        ],
        backgroundColor: ["#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF"],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});


//chart.js
//myChart3
////////////////////////////////////////////////////////////////////////////
//////////////        //////////////////////////////////////////////////////
var ctx = document.getElementById("myChart3").getContext("2d");
ctx.canvas.height = 280;
var myChart3 = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["スマートフォン", "パソコン", "タブレット型端末", "携帯電話・PHS"],
    datasets: [
      {
        label: "平成28年",
        data: [
          57.9,
          58.6,
          23.6,
          13.3],
        backgroundColor: ["#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF"],
        borderWidth: 1,
      },
      {
        label: "平成29年",
        data: [
          59.7,
          52.5,
          20.9,
          9.9],
        backgroundColor: ["#039EFF", "#039EFF", "#039EFF", "#039EFF"],
        borderWidth: 1,
      },
      {
        label: "平成30年",
        data: [
          59.5,
          48.2,
          20.8,
          8.8],
        backgroundColor: ["#0058FF", "#0058FF", "#0058FF", "#0058FF"],
        borderWidth: 1,
      },
      {
        label: "令和元年",
        data: [
          63.3,
          50.4,
          23.2,
          10.5],
        backgroundColor: ["#5902FF", "#5902FF", "#5902FF", "#5902FF"],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
      },
      {
        label: "令和2年",
        data: [
          70.3,
          60.4,
          33.2,
          15.5],
        backgroundColor: ["#8103FF", "#8103FF", "#8103FF", "#8103FF"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 30
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 5
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            display: false,
            // borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            display: true,
            borderDash: [6, 4],
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});

//chart.js
//myChart4 通信機器の世帯保有状況
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart4").getContext("2d");
ctx.canvas.height = 280;
var myChart4 = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["平成23年", "平成24年", "平成25年", "平成26年", "平成27年","平成28年", "平成29年", "平成30年", "令和元年", "令和2年"],
    datasets: [
      {
        label: "固定電話",
        data: [83.8, 79.3, 79.1,	75.7,	75.6,	72.2,	70.6,	64.5,	69.0, 71.5],
        backgroundColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        borderColor: [
          "#A7D895",
        ],
        borderWidth: 1,
      },
      {
        label: "パソコン",
        data: [77.4,	75.8,	81.7,	78.0,	76.8, 73.0,	72.5,	74.0,	69.1, 79.3],
        backgroundColor: [
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
          "#72C5D9",
        ],
        borderColor: [
          "#72C5D9",
        ],
        borderWidth: 1,
      },
      {
        label: "スマートフォン",
        data: [29.3,	49.5,	62.6,	64.2,	72.0,	71.8,	75.1,	79.2,	83.4, 86.1],
        backgroundColor: [
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
        ],
        borderColor: [
          "#33A9F2",
        ],
        borderWidth: 1,
      },
      {
        label: "モバイル端末",
        data: [94.5,	94.5,	94.8,	94.6,	95.8,	94.7,	94.8,	95.7,	96.1, 97.7],
        backgroundColor: [
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
          "#3B7ABA",
        ],
        borderColor: [
          "#3B7ABA",
        ],
        borderWidth: 1,
      },
      {
        label: "タブレット端末",
        data: [8.5,	8.5,	21.9,	26.3,	33.3,	34.4,	36.4,	40.1,	37.4, 41.2],
        backgroundColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        borderColor: [
          "#5852E5",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    elements: {
      line: {
          tension: 0, // ベジェ曲線を無効にする
          fill: false,
          "stack": 1,
        // "fill": "-1"
      },
  },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});

//chart.js
//myChart5
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart5").getContext("2d");
ctx.canvas.height = 280;
var myChart5 = new Chart(ctx, {
  type: "horizontalBar",
  data: {
    labels: ["ブロードバンド回線", "光回線", "携帯電話回線", "ケーブルテレビ回線", "DSL回線", "固定電話回線"],
    datasets: [
      {
        label: "平成28年",
        data: [
          97.4,
          60.0,
          51.0,
          17.0,
          9.6,
          1.4],
        backgroundColor: ["#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF"],
        borderWidth: 1,
      },
      {
        label: "平成29年",
        data: [
          96.9,
          61.1,
          49.2,
          16.9,
          6.0,
          1.5],
        backgroundColor: ["#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF", "#039EFF"],
        borderWidth: 1,
      },
      {
        label: "平成30年",
        data: [
          97.4,
          63.4,
          51.3,
          17.3,
          4.6,
          1.7],
        backgroundColor: ["#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF", "#0058FF"],
        borderWidth: 1,
      },
      {
        label: "令和元年",
        data: [
          89.0,
          54.5,
          50.8,
          16.4,
          3.2,
          1.9],
        backgroundColor: ["#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF", "#5902FF"],
        borderWidth: 1,
      },
      {
        label: "令和2年",
        data: [
          88.0,
          58.5,
          53.8,
          14.4,
          2.5,
          1.3],
        backgroundColor: ["#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF", "#8103FF"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    elements: {
      line: {
          tension: 0, // ベジェ曲線を無効にする
          fill: false
      },
  },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 30
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            borderDash: [6, 4],
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});


//chart.js
//myChart6 マーケット
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart6").getContext("2d");
ctx.canvas.height = 280;
var myChart6 = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2019年11月", "2019年12月", "2020年1月", "2020年2月", "2020年3月", "2020年4月", "2020年5月", "2020年6月"],
    datasets: [
      {
        label: "楽天",
        data: [1620000,	1530000, 1640000,	1520000, 1540000,	1570000, 1800000, 2760000],
        backgroundColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        borderColor: [
          "#A7D895",
        ],
        borderWidth: 1,
      },
      {
        label: "イオン",
        data: [810000,	800000, 850000,	830000, 840000,	970000, 1300000, 1980000],
        backgroundColor: [
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
        ],
        borderColor: [
          "#33A9F2",
        ],
        borderWidth: 1,
      },
      {
        label: "イトーヨーカ堂",
        data: [770000,	760000, 850000,	880000, 890000,	900000, 740000, 1440000],
        backgroundColor: [
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
        ],
        borderColor: [
          "#FF597A",
        ],
        borderWidth: 1,
      },
      {
        label: "コストコ",
        data: [1000000,	2600000, 1200000,	1400000, 1500000,	2100000, 2400000, 3020000],
        backgroundColor: [
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
          "#5852E5",
        ],
        borderColor: [
          "#5852E5",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data.labels[tooltipItem.index]
            + ": "
            + data.datasets[0].data[tooltipItem.index]
            + " 人";
        },
      },
    },
    elements: {
      line: {
          tension: 0, // ベジェ曲線を無効にする
          fill: false,
          "stack": 1,
        // "fill": "-1"
      },
  },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 30
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#000',
            min: 600000,
            max: 3300000,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
          stacked: false,
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    "plugins": {
      "filler": {
        "propagate": true
      },
    },
    animation: {
      duration: 2000
    },
  },
});


//chart.js
//myChart6
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// $(function(){
//   $("#map-container").japanMap({
//       onSelect : function(data){
//           alert(data.name);
//       }
//   });
// });


// $(function(){

//   var areas = [
//       // {"code": 1 , "name":"北海道地方", "color":"#ca93ea", "hoverColor":"#e0b1fb", "prefectures":[1]},
//       // {"code": 2 , "name":"東北地方",   "color":"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[2,3,4,5,6,7]},
//       // {"code": 3 , "name":"関東地方",   "color":"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[8,9,10,11,12,13,14]},
//       // {"code": 4 , "name":"北陸・甲信越地方",   "color":"#52d49c", "hoverColor":"#93ecc5", "prefectures":[15,16,17,18,19,20]},
//       // {"code": 4 , "name":"東海地方",   "color":"#77e18e", "hoverColor":"#aff9bf", "prefectures":[21,22,23,24]},
//       // {"code": 6 , "name":"近畿地方",   "color":"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[25,26,27,28,29,30]},
//       // {"code": 7 , "name":"中国地方",   "color":"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[31,32,33,34,35]},
//       // {"code": 8 , "name":"四国地方",   "color":"#fbad8b", "hoverColor":"#ffd7c5", "prefectures":[36,37,38,39]},
//       // {"code": 9 , "name":"九州地方",   "color":"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[40,41,42,43,44,45,46]},
//       // {"code":10 , "name":"沖縄地方",   "color":"#ea89c4", "hoverColor":"#fdcae9", "prefectures":[47]}
//       {"code": 1 , "name":"北海道地方", "color":"#3B7ABA", "hoverColor":"#e0b1fb", "prefectures":[1]},
//       {"code": 2 , "name":"東北地方",   "color":"#3BBA93", "hoverColor":"#d6d4fd", "prefectures":[2,3,4,5,6,7]},
//       {"code": 3 , "name":"関東地方",   "color":"#3BABBA", "hoverColor":"#c1d8fd", "prefectures":[8,9,10,11,12,13,14]},
//       {"code": 4 , "name":"北陸・甲信越地方",   "color":"#3B93BA", "hoverColor":"#93ecc5", "prefectures":[15,16,17,18,19,20]},
//       {"code": 4 , "name":"東海地方",   "color":"#3B7ABA", "hoverColor":"#aff9bf", "prefectures":[21,22,23,24]},
//       {"code": 6 , "name":"近畿地方",   "color":"#3BBA93", "hoverColor":"#f6e8ac", "prefectures":[25,26,27,28,29,30]},
//       {"code": 7 , "name":"中国地方",   "color":"#3BABBA", "hoverColor":"#ffe5b0", "prefectures":[31,32,33,34,35]},
//       {"code": 8 , "name":"四国地方",   "color":"#3B93BA", "hoverColor":"#ffd7c5", "prefectures":[36,37,38,39]},
//       {"code": 9 , "name":"九州地方",   "color":"#3BABBA", "hoverColor":"#ffcece", "prefectures":[40,41,42,43,44,45,46]},
//       {"code":10 , "name":"沖縄地方",   "color":"#3B93BA", "hoverColor":"#fdcae9", "prefectures":[47]}
//   ];

//   $("#map").japanMap(
//       {
//           areas  : areas,
//           selection : "prefecture",
//           borderLineWidth: 0.25,
//           drawsBoxLine : false,
//           movesIslands : true,
//           showsAreaName : false,
//           width: 280,
//           font : "MS Mincho",
//           fontSize : 10,
//           fontColor : "areaColor",
//           fontShadowColor : "black",
//           // onSelect:function(data){
//           //     alert(data.name);
//           // },
//           onSelect:function(data){ //選択範囲をクリックしたときに実行
//             location.href = areaLinks[data.area.name]; //data.area.nameは選択したエリアの名前
//           },
//       }
//   );
// });


//chart.js
//myChart7 ECサイト
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart7").getContext("2d");
ctx.canvas.height = 280;
var myChart7 = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2020年1月", "2020年2月", "2020年3月", "2020年4月"],
    datasets: [
      {
        label: "Amazon",
        data: [77800000,	76300000, 79700000,	80900000],
        backgroundColor: [
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
          "#A7D895",
        ],
        borderColor: [
          "#A7D895",
        ],
        borderWidth: 1,
      },
      {
        label: "楽天市場",
        data: [73700000,	70800000, 75000000,	78200000],
        backgroundColor: [
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
          "#33A9F2",
        ],
        borderColor: [
          "#33A9F2",
        ],
        borderWidth: 1,
      },
      {
        label: "Yahoo!ショッピング",
        data: [36900000, 37500000, 40200000,	42800000],
        backgroundColor: [
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
          "#FF597A",
        ],
        borderColor: [
          "#FF597A",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data.labels[tooltipItem.index]
            + ": "
            + data.datasets[0].data[tooltipItem.index]
            + " 人";
        },
      },
    },
    elements: {
      line: {
          tension: 0, // ベジェ曲線を無効にする
          fill: false,
          "stack": 1,
        // "fill": "-1"
      },
  },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 30
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#000',
            min: 35000000,
            max: 82000000,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
          stacked: false,
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    "plugins": {
      "filler": {
        "propagate": true
      },
    },
    animation: {
      duration: 2000
    },
  },
});

//myChart9 テレワーク実施状況
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart9").getContext("2d");
ctx.canvas.height = 280;
var myChart9 = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["平成29年","平成30年","令和元年","令和2年"],
    datasets: [
      {
        data: [13.9, 19.1, 20.2, 43.3],
        backgroundColor: ["#039EFF", "#0058FF", "#5902FF", "#8103FF"],
        borderWidth: 1,
      },
      ],
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data.labels[tooltipItem.index]
            + ": "
            + data.datasets[0].data[tooltipItem.index]
            + " %";
        },
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 10
      },
    },
    legend: {
      display: false,
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 10
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    animation: {
      duration: 2000
    },
  },
});

//myChart10 テレワーク
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var ctx = document.getElementById("myChart10").getContext("2d");
ctx.canvas.height = 280;
var myChart10 = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["平成29年","平成30年","令和元年","令和2年"],
    datasets: [
      {
        label: "建設業",
        data: [12.2, 18.8, 22.5, 37.9],
        backgroundColor: ["#A7D895", "#A7D895", "#A7D895", "#A7D895"],
        borderColor: ["#A7D895"],
        borderWidth: 1,
      },
      {
        label: "製造業",
        data: [13.0, 20.8, 21.1, 44.0],
        backgroundColor: ["#02CDFF", "#02CDFF", "#02CDFF", "#02CDFF"],
        borderColor: ["#02CDFF"],
        borderWidth: 1,
      },
      {
        label: "運輸・郵便業",
        data: [7.7, 8.7, 11.7, 20.3],
        backgroundColor: ["#FF597A", "#FF597A", "#FF597A", "#FF597A"],
        borderColor: ["#FF597A"],
        borderWidth: 1,
      },
      {
        label: "卸売・小売業",
        data: [13.3, 13.4, 20.1, 20.1, 32.5],
        backgroundColor: ["#33A9F2", "#33A9F2", "#33A9F2", "#33A9F2"],
        borderColor: ["#33A9F2"],
        borderWidth: 1,
      },
      {
        label: "金融・保険業",
        data: [29.8, 37.9, 40.7, 51.3],
        backgroundColor: ["#039EFF", "#039EFF", "#039EFF", "#039EFF"],
        borderColor: ["#039EFF"],
        borderWidth: 1,
      },
      {
        label: "不動産業",
        data: [9.6, 16.9, 25.4, 51.7],
        backgroundColor: ["#0058FF", "#0058FF", "#0058FF", "#0058FF"],
        borderColor: ["#0058FF"],
        borderWidth: 1,
      },
      {
        label: "情報通信業",
        data: [31.1, 39.9, 46.5, 73.5],
        backgroundColor: ["#8103FF", "#8103FF", "#8103FF", "#8103FF"],
        borderColor: ["#8103FF"],
        borderWidth: 1,
      },
      ],
  },
  options: {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data.labels[tooltipItem.index]
            + ": "
            + data.datasets[0].data[tooltipItem.index]
            + " %";
        },
      },
    },
    elements: {
      line: {
          tension: 0, // ベジェ曲線を無効にする
          fill: false,
          "stack": 1,
        // "fill": "-1"
      },
  },
    layout: {
      padding: {
        top: 20,
        left: 10,
        bottom: 0,
        right: 30
      },
    },
    legend: {
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        fontSize: 10,
        fontColor: '#000',
        padding: 5
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#000',
            min: 0,
            max: 100,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.05)',
            borderDash: [6, 4],
          },
          stacked: false,
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: '#000',
            fontSize: 10,
          },
          gridLines: {
            display: false,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
    },
    "plugins": {
      "filler": {
        "propagate": true
      },
    },
    animation: {
      duration: 2000
    },
    // tooltips: {
    //   callbacks: {
    //     label: function (tooltipItem, data) {
    //       return data.labels[tooltipItem.index]
    //         + ": "
    //         + data.datasets[0].data[tooltipItem.index]
    //         + " %";
    //     },
    //   },
    // },
    // layout: {
    //   padding: {
    //     top: 20,
    //     left: 10,
    //     bottom: 0,
    //     right: 10
    //   },
    // },
    // elements: {
    //   line: {
    //       tension: 0, // ベジェ曲線を無効にする
    //       fill: false,
    //       "stack": 1,
    //     // "fill": "-1"
    //   },
    // },
    // legend: {
    //   display: false,
    //   position: 'bottom',
    //   fullWidth: true,
    //   labels: {
    //     boxWidth: 10,
    //     fontSize: 10,
    //     fontColor: '#000',
    //     padding: 10
    //   },
    // },
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //         fontColor: '#000',
    //         fontSize: 10,
    //         min: 0,
    //         max: 50,
    //       },
    //       gridLines: {
    //         color: 'rgba(0, 0, 0, 0.05)',
    //         borderDash: [6, 4],
    //       },
    //     },
    //   ],
    //   xAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //         fontColor: '#000',
    //         fontSize: 10,
    //       },
    //       gridLines: {
    //         display: false,
    //         color: 'rgba(0, 0, 0, 0.05)'
    //       },
    //     },
    //   ],
    // },
    // animation: {
    //   duration: 2000
    // },
  },
});