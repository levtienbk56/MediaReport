
function getChartHeight() {
	var ww = $(window).width();
	var wh = $(window).height();
	var dw = $(document).width();
	var dh = $(document).height();
	console.log(ww + "-" + wh + ",  " + dw + "-" + dh);

	if (ww > 1600)
		return 800;
}

// === load chart library ===
google.load("visualization", "1", {
	packages : [ "corechart" ],
	language : 'ja'
});

//var default_colors = [ '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
//		'#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395',
//		'#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707',
//		'#329262', '#5574A6', '#3B3EAC' ];

var default_colors = ['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5','#2196f3','#03a9f4','#00bcd4','#009688','#4caf50','#8bc34a','#ffc107','#ff9800','#ff5722','#795548'];

// === responsive graph ===
$(window).resize(function() {
	drawChart1();
});
google.setOnLoadCallback(drawChart1);

// ========================== JSON DATA DEMO ================================
//{
//	  cols: [{id: 'A', label: 'NEW A', type: 'string'},
//	         {id: 'B', label: 'B-label', type: 'number'},
//	         {id: 'C', label: 'C-label', type: 'date'}
//	  ],
//	  rows: [{c:[{v: 'a'},
//	             {v: 1.0, f: 'One'},
//	             {v: new Date(2008, 1, 28, 0, 31, 26), f: '2/28/08 12:31 AM'}
//	        ]},
//	         {c:[{v: 'b'},
//	             {v: 2.0, f: 'Two'},
//	             {v: new Date(2008, 2, 30, 0, 31, 26), f: '3/30/08 12:31 AM'}
//	        ]},
//	         {c:[{v: 'c'},
//	             {v: 3.0, f: 'Three'},
//	             {v: new Date(2008, 3, 30, 0, 31, 26), f: '4/30/08 12:31 AM'}
//	        ]}
//	  ],
//	  p: {foo: 'hello', bar: 'world!'}
//	}
//
// =========================================================================
// CHART3: COMBO CHART
// =========================================================================
// same CSV file
var jsonData1 = {
        "cols": [
               {"label":"月ごと","type":"string"},
               {"label":"応募トレンド","type":"number"},
               {"label":"採用予定","type":"number"},
               {"label":"採用数","type":"number"},
               {"label":"DOMO!NET","type":"number"},
               {"label":"バイトル","type":"number"},
               {"label":"マイナビバイト","type":"number"},
               {"label":"フロム・エーキャリア","type":"number"},
				 {"label":"Workin","type":"number"},
				 {"label":"ジョブセンス","type":"number"},
				 {"label":"Weban","type":"number"},
				 {"label":"Girls&Co.","type":"number"},
				 {"label":"おうぼうける君","type":"number"},
				 {"label":"イーアイデム","type":"number"},
               {"label":"応募-採用HP","type":"number"}
             ],
        "rows": [
				{"c":[{"v":"2016年06月"},{"v":1000},{"v":50},{"v":40},{"v":0},{"v":77},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":1},{"v":0},{"v":0},{"v":null}]},
				{"c":[{"v":"2016年07月"},{"v":1800},{"v":200},{"v":150},{"v":0},{"v":223},{"v":34},{"v":0},{"v":0},{"v":20},{"v":11},{"v":4},{"v":0},{"v":3},{"v":null}]},
				{"c":[{"v":"2016年08月"},{"v":2000},{"v":1000},{"v":800},{"v":0},{"v":253},{"v":276},{"v":0},{"v":1},{"v":112},{"v":71},{"v":0},{"v":363},{"v":33},{"v":null}]},
				{"c":[{"v":"2016年09月"},{"v":2400},{"v":2000},{"v":1700},{"v":0},{"v":466},{"v":510},{"v":0},{"v":1},{"v":99},{"v":70},{"v":0},{"v":1421},{"v":43},{"v":null}]},
				{"c":[{"v":"2016年10月"},{"v":3000},{"v":1500},{"v":1400},{"v":1},{"v":687},{"v":620},{"v":0},{"v":1},{"v":142},{"v":151},{"v":0},{"v":1851},{"v":63},{"v":null}]},
				{"c":[{"v":"2016年11月"},{"v":2000},{"v":600},{"v":550},{"v":0},{"v":464},{"v":349},{"v":0},{"v":0},{"v":87},{"v":41},{"v":0},{"v":732},{"v":29},{"v":null}]},
				{"c":[{"v":"2016年12月"},{"v":1500},{"v":500},{"v":350},{"v":0},{"v":156},{"v":169},{"v":0},{"v":2},{"v":50},{"v":37},{"v":0},{"v":437},{"v":21},{"v":null}]},
				{"c":[{"v":"2017年01月"},{"v":1600},{"v":700},{"v":600},{"v":1},{"v":222},{"v":234},{"v":0},{"v":0},{"v":61},{"v":80},{"v":0},{"v":473},{"v":19},{"v":null}]},
				{"c":[{"v":"2017年02月"},{"v":1600},{"v":1000},{"v":890},{"v":0},{"v":387},{"v":446},{"v":26},{"v":2},{"v":59},{"v":95},{"v":0},{"v":442},{"v":30},{"v":null}]},
				{"c":[{"v":"2017年03月"},{"v":1900},{"v":1200},{"v":1100},{"v":0},{"v":420},{"v":480},{"v":65},{"v":0},{"v":52},{"v":84},{"v":0},{"v":894},{"v":45},{"v":null}]},
				{"c":[{"v":"2017年04月"},{"v":2000},{"v":1100},{"v":980},{"v":2},{"v":310},{"v":387},{"v":26},{"v":0},{"v":77},{"v":58},{"v":0},{"v":878},{"v":48},{"v":null}]},
				{"c":[{"v":"2017年05月"},{"v":1800},{"v":1300},{"v":null},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":null}]},

             ]
       };

function drawChart1() {
	var data = new google.visualization.DataTable(jsonData1);

	var options = {
		height : getChartHeight(),
		title : '地方別応募数',
		titleTextStyle : {
			color : 'black',
			fontSize : 25,
			bold : true,
			fontName : 'Arial'
		},
		chartArea : {
			left : '15%',
		},
		seriesType : 'bars',
		series: {
			0: {
				type: 'area',
				color : '#ccff33',
				lineWidth: 0
			},
			1:{
				type: 'line',
				lineWidth: 2,
				pointSize : 4
			},
			2:{
				type: 'line',
				lineWidth: 2,
				pointSize : 4
			}
		},
		isStacked : true, // 積み立て
		bar: { 
			groupWidth: '40%' //棒の広さ
		}, 
		hAxis : {
			//title : '月ごと',
			slantedText: true,
			titleTextStyle : {
				color : 'black',
				fontSize : 18,
				bold : true
			}
		},
		vAxis : {
			title : '人数 （人）',
		},
		animation : {
			duration : 1000,
			easing : 'out',
			startup : true
		},
		//colors : ['#ccff99', '#DC3912', '#FF9900', '#109618', '#990099','#3B3EAC', '#0099C6', '#DD4477',]
		colors : default_colors
	};

	var chart = new google.visualization.ComboChart(document
			.getElementById('chart_div1'));
	chart.draw(data, options);
}

