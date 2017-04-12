
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

var default_colors = [ '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
		'#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395',
		'#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707',
		'#329262', '#5574A6', '#3B3EAC' ];

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
                 {"id":"","label":"月ごと","type":"string"},
                 {"id":"","label":"応募トレンド","type":"number"},
                 {"id":"","label":"応募-A媒体","type":"number"},
                 {"id":"","label":"応募-B媒体","type":"number"},
                 {"id":"","label":"応募-C媒体","type":"number"},
                 {"id":"","label":"応募-D媒体","type":"number"},
                 {"id":"","label":"応募-採用HP","type":"number"},
                 {"id":"","label":"採用予定","type":"number"},
                 {"id":"","label":"採用数","type":"number"}
               ],
          "rows": [
                 {"c":[{"v":"2016年9月"},{"v":2500},{"v":1581},{"v":123},{"v":706},{"v":118},{"v":220},{"v":2200},{"v":2000}]},
				 {"c":[{"v":"2016年10月"},{"v":3400},{"v":1424},{"v":454},{"v":767},{"v":779},{"v":272},{"v":3000},{"v":2500}]},
				 {"c":[{"v":"2016年11月"},{"v":4200},{"v":1742},{"v":996},{"v":916},{"v":438},{"v":598},{"v":4000},{"v":3000}]},
				 {"c":[{"v":"2016年12月"},{"v":4000},{"v":1643},{"v":827},{"v":560},{"v":204},{"v":237},{"v":3100},{"v":2900}]},
				 {"c":[{"v":"2017年1月"},{"v":3500},{"v":1668},{"v":591},{"v":845},{"v":110},{"v":270},{"v":3000},{"v":2750}]},
				 {"c":[{"v":"2017年2月"},{"v":3200},{"v":1210},{"v":310},{"v":908},{"v":109},{"v":211},{"v":2500},{"v":2200}]},
				 {"c":[{"v":"2017年3月"},{"v":4100},{"v":null},{"v":null},{"v":null},{"v":null},{"v":null},{"v":3000},{"v":null}]},
				 {"c":[{"v":"2017年4月"},{"v":4500},{"v":null},{"v":null},{"v":null},{"v":null},{"v":null},{"v":3200},{"v":null}]}
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
			6:{
				type: 'line',
				lineWidth: 2,
				pointSize : 4
			},
			7:{
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

