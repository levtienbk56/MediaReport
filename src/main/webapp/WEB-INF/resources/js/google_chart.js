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
				targetAxisIndex : 0
			// y-Axis 左側 (id=0)
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

var data_chart3 = [ [ "媒体", "北海道・東北", "関東", "中部", "近畿", "中国", "四国", "九州・沖縄" ],
		[ "Weban", 5.81, 53.77, 10.06, 21.18, 2.20, 0.97, 6.01 ],
		[ "おうぼうける君", 4.24, 54.54, 10.67, 21.79, 2.72, 0.50, 5.53 ],
		[ "バイトル", 3.42, 55.96, 9.16, 24.38, 0.98, 0.59, 5.51 ],
		[ "マイナビバイト", 5.43, 70.27, 5.60, 12.04, 2.37, 0.65, 3.65 ],
		[ "ジョブセンス", 6.68, 65.91, 8.45, 11.10, 2.70, 0.89, 4.26 ],
		[ "リクナビNEXT", 7.10, 53.10, 9.08, 21.09, 2.11, 1.14, 6.37 ] ];
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
		isStacked : 'percent', // 積み立て
		hAxis : {
			title : '媒体',
			titleTextStyle : {
				color : 'black',
				fontSize : 18,
				bold : true
			}
		},
		vAxis : {
			title : '応募数 （人）'
		},
		legend : {
			position : 'top',
			alignment : 'center'
		},
		chartArea : {
			// left : '10%',
			// top : '10%',
			// width : "80%",
			// height : "80%",
			backgroundColor : {
				stroke : '#000',
				strokeWidth : 1
			}
		},
		animation : {
			duration : 1000,
			easing : 'out',
			startup : true
		},
		// colors : [ 'black', 'blue', 'red', 'green', 'yellow', 'gray' ,
		// 'purple']
		colors : chartjs_color
	};

	var chart = new google.visualization.ComboChart(document
			.getElementById('chart_div3'));
	chart.draw(data, options);
}

// =========================================================================
// CHART5: GEOCHART (マップ)
// =========================================================================
google.setOnLoadCallback(drawChart5);

function drawChart5() {
	var data = google.visualization.arrayToDataTable([ [ "都道府県", "データ" ],
			[ "北海道", 20 ], [ "青森", 13 ], [ "東京", 50 ], [ "大阪", 35 ] ]);

	var option = {
		region : 'JP',
		resolution : 'provinces'
	};

	var chart = new google.visualization.GeoChart(document
			.getElementById('chart_div5'));
	chart.draw(data, option);
}

// =========================================================================
// CHART6: DASHED LINE 1　（グラフの一部を「破線」等で表現できるか）
// =========================================================================
google.setOnLoadCallback(drawChart6);

function drawChart6() {
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', '年月');
	data.addColumn('number', 'バイトル');
	data.addColumn('number', 'Weban');
	data.addColumn('number', 'バイトル （予測）');
	data.addColumn('number', 'Weban （予測）');

	data.addRows([ 
	        [ new Date(2017,0), 1203, 0879, null, null ],
			[ new Date(2017,1), 1442, 1123, null, null ], 
			[ new Date(2017,2), 1734, 1000, null, null ],
			[ new Date(2017,3), 1445, 0703, null, null ],
			[ new Date(2017,4), 1600, 1120, 1600, 1120 ],
			[ new Date(2017,5), null, null, 1520, 1389 ], 
			[ new Date(2017,6), null, null, 1899, 1333 ],
			[ new Date(2017,7), null, null, 1930, 1120 ] ]);
	
	
	var option = {
//		height : getChartHeight(),
		animation : {
			duration : 1000,
			easing : 'out',
			startup : true
		},
		legend : {
			position : 'top',
			alignment : 'center'
		},
		series : {
			2 : {
				lineDashStyle : [ 5, 5 ]
			},
			3 : {
				lineDashStyle : [ 5, 5 ]
			}
		},
		colors : [ '#ff6384', '#36a2eb', '#ff6384', '#36a2eb' ],
		hAxis : {
			gridlines : {
				color : 'LightGrey'
			}
		}
	};

	var div = document.getElementById('chart_div6');
	var chart = new google.visualization.LineChart(div);
	chart.draw(data, option);
}


//=========================================================================
//CHART7: DASHED LINE 2　（グラフの一部を「破線」等で表現できるか）
//=========================================================================
google.setOnLoadCallback(drawChart7);

function drawChart7() {
	
	var data = new google.visualization.DataTable();
	data.addColumn('date', '年月');
	data.addColumn('number', 'バイトル');
	data.addColumn({type:'boolean',role:'certainty'});
	data.addColumn('number', 'Weban');
	data.addColumn({type:'boolean',role:'certainty'});
	
	data.addRows([ 
	        [ new Date(2017,0), 1203, true, 0879, true  ],
			[ new Date(2017,1), 1442, true, 1123, true ], 
			[ new Date(2017,2), 1734, true, 1000, true ],
			[ new Date(2017,3), 1445, true, 0703, true  ],
			[ new Date(2017,4), 1600, true, 1120, true ],
			[ new Date(2017,5), 1520, false, 1389, false ], 
			[ new Date(2017,6), 1899, false, 1333, false  ],
			[ new Date(2017,7), 1930, false, 1120, false  ] ]);
	
	
	var option = {
//		height : getChartHeight(),
		animation : {
			duration : 1000,
			easing : 'out',
			startup : true
		},
		legend : {
			position : 'top',
			alignment : 'center'
		},
		series : {
			0 : {
				// 曲線スタイル
				// curveType: 'function'
			},
			1 : {
				// 曲線スタイル
				// curveType: 'function'
			},
			2 : {
				lineDashStyle : [ 5, 5 ],
			},
			3 : {
				lineDashStyle : [ 5, 5 ]
			}
		},
		colors : [ '#ff6384', '#36a2eb', '#ff6384', '#36a2eb' ],
		hAxis : {
			gridlines : {
				color : 'LightGrey'
			}
		}
	};

	var div = document.getElementById('chart_div7');
	var chart = new google.visualization.LineChart(div);
	chart.draw(data, option);
}


//=========================================================================
//CHART8:  ZOOM & PAN
//=========================================================================
google.setOnLoadCallback(drawChart8);

function drawChart8() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'ABC媒体'],
    [new Date(2017, 01, 02), 30],   // 2017年2月2日: 30人
    [new Date(2017, 01, 03), 33],
    [new Date(2017, 01, 06), 43],
    [new Date(2017, 01, 10), 30],
    [new Date(2017, 01, 12), 70],
    [new Date(2017, 01, 15), 45],
    [new Date(2017, 01, 19), 99],
    [new Date(2017, 01, 22), 72],
    [new Date(2017, 01, 24), null],
    [new Date(2017, 01, 25), 89],
    [new Date(2017, 01, 29), 60],
    [new Date(2017, 02, 02), 43],
    [new Date(2017, 02, 04), 50],
    [new Date(2017, 02, 06), 52],
    [new Date(2017, 02, 10), 40],
    [new Date(2017, 02, 12), 70],
    [new Date(2017, 02, 15), 45],
    [new Date(2017, 02, 19), 79],
    [new Date(2017, 02, 20), 82],
    [new Date(2017, 02, 24), 63],
    [new Date(2017, 02, 25), 89],
    [new Date(2017, 02, 29), 70],
    [new Date(2017, 03, 01), 63],
    [new Date(2017, 03, 03), 60],
    [new Date(2017, 03, 06), 62],
    [new Date(2017, 03, 09), 50],
    [new Date(2017, 03, 13), 50],
    [new Date(2017, 03, 15), 55],
    [new Date(2017, 03, 19), 69],
    [new Date(2017, 03, 20), 62],
    [new Date(2017, 03, 24), 63],
    [new Date(2017, 03, 25), 59],
    [new Date(2017, 03, 28), 50],
    [new Date(2017, 04, 01), 63],
    [new Date(2017, 04, 03), 40],
    [new Date(2017, 04, 06), 52],
    [new Date(2017, 04, 09), 60],
    [new Date(2017, 04, 12), 60],
    [new Date(2017, 04, 14), 65],
    [new Date(2017, 04, 17), 79],
    [new Date(2017, 04, 20), 72],
    [new Date(2017, 04, 24), 63],
    [new Date(2017, 04, 25), 69],
    [new Date(2017, 04, 29), 50],
    [new Date(2017, 05, 02), 83],
    [new Date(2017, 05, 03), 60],
    [new Date(2017, 05, 06), 52],
    [new Date(2017, 05, 10), 50],
    [new Date(2017, 05, 12), 50],
    [new Date(2017, 05, 15), 45],
    [new Date(2017, 05, 19), 79],
    [new Date(2017, 05, 20), 76],
    [new Date(2017, 05, 24), 93],
    [new Date(2017, 05, 25), 90],
    [new Date(2017, 05, 29), 78],
    [new Date(2017, 06, 02), 43],
    [new Date(2017, 06, 03), 60],
    [new Date(2017, 06, 06), 52],
    [new Date(2017, 06, 10), 50],
    [new Date(2017, 06, 12), 70],
    [new Date(2017, 06, 15), 65],
    [new Date(2017, 06, 16), 99],
    [new Date(2017, 06, 20), 81],
    [new Date(2017, 06, 22), 93],
    [new Date(2017, 06, 25), 80],
    [new Date(2017, 06, 27), 98],
  ]);

  var options = {
    title: 'ABC媒体の応募数',
    hAxis: {
      title: '年月日',
      titleTextStyle: {
        color: '#333'
      },
      format: 'yyyy年MM月'
    },
    vAxis: {
      title : '人', 
      minValue: 0
    },
    // 既定はスクロールでズームできる
    explorer: {
      axis: 'horizontal', 	
      keepInBounds: true,
      maxZoomIn: 5.0,
      maxZoomOut: 1		// ズームの限度
    },
    colors: ['#D44E41'],
    legend : {
    	position : 'top',
		alignment : 'center'    	
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div8'));
  chart.draw(data, options);
}



//=========================================================================
//CHART8:  ZOOM & PAN
//=========================================================================
google.setOnLoadCallback(drawChart9);

function drawChart9() {
	var data = google.visualization.arrayToDataTable([
		  ['Year', 'ABC媒体'],
		  [new Date(2017, 01, 02), 30],   // 2017年2月2日: 30人
		  [new Date(2017, 01, 03), 33],
		  [new Date(2017, 01, 06), 43],
		  [new Date(2017, 01, 10), 30],
		  [new Date(2017, 01, 12), 70],
		  [new Date(2017, 01, 15), 45],
		  [new Date(2017, 01, 19), 99],
		  [new Date(2017, 01, 22), 72],
		  [new Date(2017, 01, 24), null],
		  [new Date(2017, 01, 25), 89],
		  [new Date(2017, 01, 29), 60],
		  [new Date(2017, 02, 02), 43],
		  [new Date(2017, 02, 04), 50],
		  [new Date(2017, 02, 06), 52],
		  [new Date(2017, 02, 10), 40],
		  [new Date(2017, 02, 12), 70],
		  [new Date(2017, 02, 15), 45],
		  [new Date(2017, 02, 19), 79],
		  [new Date(2017, 02, 20), 82],
		  [new Date(2017, 02, 24), 63],
		  [new Date(2017, 02, 25), 89],
		  [new Date(2017, 02, 29), 70],
		  [new Date(2017, 03, 01), 63],
		  [new Date(2017, 03, 03), 60],
		  [new Date(2017, 03, 06), 62],
		  [new Date(2017, 03, 09), 50],
		  [new Date(2017, 03, 13), 50],
		  [new Date(2017, 03, 15), 55],
		  [new Date(2017, 03, 19), 69],
		  [new Date(2017, 03, 20), 62],
		  [new Date(2017, 03, 24), 63],
		  [new Date(2017, 03, 25), 59],
		  [new Date(2017, 03, 28), 50],
		  [new Date(2017, 04, 01), 63],
		  [new Date(2017, 04, 03), 40],
		  [new Date(2017, 04, 06), 52],
		  [new Date(2017, 04, 09), 60],
		  [new Date(2017, 04, 12), 60],
		  [new Date(2017, 04, 14), 65],
		  [new Date(2017, 04, 17), 79],
		  [new Date(2017, 04, 20), 72],
		  [new Date(2017, 04, 24), 63],
		  [new Date(2017, 04, 25), 69],
		  [new Date(2017, 04, 29), 50],
		  [new Date(2017, 05, 02), 83],
		  [new Date(2017, 05, 03), 60],
		  [new Date(2017, 05, 06), 52],
		  [new Date(2017, 05, 10), 50],
		  [new Date(2017, 05, 12), 50],
		  [new Date(2017, 05, 15), 45],
		  [new Date(2017, 05, 19), 79],
		  [new Date(2017, 05, 20), 76],
		  [new Date(2017, 05, 24), 93],
		  [new Date(2017, 05, 25), 90],
		  [new Date(2017, 05, 29), 78],
		  [new Date(2017, 06, 02), 43],
		  [new Date(2017, 06, 03), 60],
		  [new Date(2017, 06, 06), 52],
		  [new Date(2017, 06, 10), 50],
		  [new Date(2017, 06, 12), 70],
		  [new Date(2017, 06, 15), 65],
		  [new Date(2017, 06, 16), 99],
		  [new Date(2017, 06, 20), 81],
		  [new Date(2017, 06, 22), 93],
		  [new Date(2017, 06, 25), 80],
		  [new Date(2017, 06, 27), 98],
	]);
	
	var options = {
		  title: 'ABC媒体の応募数',
		  hAxis: {
			    title: '年月日',
			    titleTextStyle: {
			      color: '#333'
			    },
			    format: 'yyyy年MM月'
		  },
		  vAxis: {
			    title : '人', 
			    minValue: 0
		  },
		  explorer: {
			    axis: 'horizontal', 	
			    // 選定でズームできる
			    actions: ['dragToZoom', 'rightClickToReset'] , 
			    keepInBounds: true,
			    maxZoomIn: 5.0,
			    maxZoomOut: 1		// ズームの限度
		  },
		  colors: ['#D44E41'],
		  legend : {
			  	position : 'top',
					alignment : 'center'    	
		  },
		  curveType : 'function',    // 曲線スタイル
		  pointSize: 5
		  	
	};
	
	var chart = new google.visualization.LineChart(document.getElementById('chart_div9'));
	chart.draw(data, options);
}
