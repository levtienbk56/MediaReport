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
// === load geochart lib ===
google.load('visualization', '1', {
	packages : [ 'geochart' ],
	language : 'ja'
});
//=== load annotationchart lib ===
google.load('visualization', '1', {
	packages : [ 'annotationchart' ],
	language : 'ja'
});

var default_colors = [ '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
		'#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395',
		'#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707',
		'#329262', '#5574A6', '#3B3EAC' ];
// [ 'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)','rgba(255, 206, 86,
// 0.8)', 'rgba(75, 192, 192, 0.8)','rgba(153, 102, 255, 0.8)', 'rgba(255, 159,
// 64, 0.8)','rgba(255, 0, 0, 0.8)' ];
var chartjs_color = [ '#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff',
		'#ff9f40', '#ff0000' ];

// === responsive graph ===
$(window).resize(function() {
	drawChart1();
	drawChart2();
	drawChart3();
	drawChart5();
	drawChart6();
});

//
//
//
// =========================================================================
// CHART1: GROUPED BAR CHART - 縦棒グラフ
// =========================================================================
//

google.setOnLoadCallback(drawChart1);

var data_chart1 = [ [ '地方', '男性', '女性' ], [ "北海道・東北", 7981, 13245 ],
		[ "関東", 109739, 167245 ], [ "中部", 16393, 23979 ],
		[ "近畿", 33421, 55173 ], [ "中国", 3789, 6341 ], [ "四国", 1134, 1691 ],
		[ "九州・沖縄", 8702, 15502 ] ];
function drawChart1() {
	var data = google.visualization.arrayToDataTable(data_chart1);

	var options = {
		height : getChartHeight(),
		seriesType : 'bars',
		title : '地方別応募数',
		titleTextStyle : {
			color : 'black',
			fontSize : 25,
			bold : true,
			fontName : 'Arial'
		},
		legend : {
			position : 'top',
			alignment : 'center'
		},
		vAxis : {
			title : '応募数'
		},
		hAxis : {
			title : '都道府県',
			titleTextStyle : {
				color : 'black',
				fontSize : 18,
				bold : true
			}
		},
		animation : {
			duration : 1000,
			easing : 'out',
			startup : true
		}
	};

	var chart = new google.visualization.ColumnChart(document
			.getElementById('chart_div1'));
	chart.draw(data, options);
}

//
//
//
// =========================================================================
// CHART2: COMBINE CHART - 組合せフラフ
// =========================================================================
//
google.setOnLoadCallback(drawChart2);

var data_chart2 = [ [ '地方', 'マイナビバイト', '全媒体' ], [ "北海道・東北", 10417, 37725 ],
		[ "関東", 134901, 463640 ], [ "中部", 10749, 71124 ],
		[ "近畿", 23105, 155133 ], [ "中国", 4546, 17686 ], [ "四国", 1242, 4925 ],
		[ "九州・沖縄", 7015, 42306 ] ];
function drawChart2() {
	var data = google.visualization.arrayToDataTable(data_chart2);

	var options = {
		height : getChartHeight(),
		title : '地方別応募数',
		titleTextStyle : {
			color : 'black',
			fontSize : 25,
			bold : true,
			fontName : 'Arial'
		},
		hAxis : {
			title : '都道府県',
			titleTextStyle : {
				color : 'black',
				fontSize : 18,
				bold : true
			}
		},
		vAxes : [
		// y-Axis 左側 (id=0)
		{
			title : '応募数 (1)',
			textStyle : {
				color : 'blue'
			}
		},
		// y-Axis 右側 (id=1)
		{
			title : '応募数 (2)',
			textStyle : {
				color : 'red'
			}
		} ],

		seriesType : 'bars',
		series : {
			// データの最初カラム
			0 : {
				targetAxisIndex : 0// y-Axis 左側 (id=0)
			},
			// データの2目カラム
			1 : {
				targetAxisIndex : 1, // y-Axis 右側 (id=1)
				type : 'line'
			}
		},
		legend : {
			position : 'top',
			alignment : 'center'
		},
		animation : {
			duration : 1000,
			easing : 'out',
			startup : true
		},
		colors : [ '#36a2eb', '#ff0000' ]
	};

	var chart = new google.visualization.ComboChart(document
			.getElementById('chart_div2'));
	chart.draw(data, options);
}


//
//
//
// =========================================================================
// CHART3: STACKED GRAPH - 積み立てグラフ
// =========================================================================
//
google.setOnLoadCallback(drawChart3);

var data_chart3 = [ [ "月", "応募トレンド", "応募―A媒体", "応募―B媒体", "応募―C媒体", "応募―D媒体", "応募―E媒体", "採用予定", "採用数"],
                    [ "2016年9月", 2500, 1581, 123, 706, 118, 220, 2200, 2000],
            		[ "2016年10月", 3400, 1424, 454, 767, 779, 272, 3000, 2500],
            		[ "2016年11月", 4200, 1742, 996, 916, 438, 598, 4000, 3000],
            		[ "2016年12月", 4000, 1643, 827, 560, 204, 237, 3100, 2900],
            		[ "2017年1月", 3500, 1668, 591, 845, 110, 270, 3000, 2750],
            		[ "2017年2月", 3200, 1210, 310, 908, 109, 211, 2500, 2200],
            		[ "2017年3月", 4100, null, null, null, null, null, 3000, null],
            		[ "2017年3月", 4500, null, null, null, null, null, 3500, null]];
function drawChart3() {
	var data = google.visualization.arrayToDataTable(data_chart3);

	var options = {
		height : getChartHeight(),
		title : '地方別応募数',
		titleTextStyle : {
			color : 'black',
			fontSize : 25,
			bold : true,
			fontName : 'Arial'
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
			minValue : 0
		},
		animation : {
			duration : 1000,
			easing : 'out',
			startup : true
		},
		//colors : ['#ccff99', '#DC3912', '#FF9900', '#109618', '#990099','#3B3EAC', '#0099C6', '#DD4477',]
		//colors : default_colors
	};

	var chart = new google.visualization.ComboChart(document
			.getElementById('chart_div3'));
	chart.draw(data, options);
}

