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
// CHART5: GEOCHART - MAP (市区町村へのプロットができるか？)
// =========================================================================
google.setOnLoadCallback(drawChart5);

function drawChart5() {
	var data = google.visualization.arrayToDataTable([ 
	                                                   [ "都道府県", "データ" ],
	                                                   ['北海道', 5],
	                                                   ['青森', 12],
	                                                   ['岩手', 15],
	                                                   ['宮城', 8],
	                                                   ['秋田', 3],
	                                                   ['山形', 18],
	                                                   ['福島', 22],
	                                                   ['茨城', 67],
	                                                   ['栃木', 32],
	                                                   ['群馬', 17],
	                                                   ['埼玉', 67],
	                                                   ['Chiba', 56],
	                                                   ['Tokyo', 50],
	                                                   ['神奈川', 49],
	                                                   ['新潟', 89],
	                                                   ['富山', 92],
	                                                   ['石川', 93],
	                                                   ['福井', 90],
	                                                   ['山梨', 95],
	                                                   ['長野', 70],
	                                                   ['岐阜', 73],
	                                                   ['静岡', 75],
	                                                   ['愛知', 78],
	                                                   ['三重', 74],
	                                                   ['滋賀', 76],
	                                                   ['京都', 59],
	                                                   ['大阪', 60],
	                                                   ['兵庫', 49],
	                                                   ['奈良', 99],
	                                                   ['和歌山', 90],
	                                                   ['鳥取', 63],
	                                                   ['島根', 62],
	                                                   ['岡山', 61],
	                                                   ['広島', 79],
	                                                   ['山口', 60],
	                                                   ['徳島', 64],
	                                                   ['香川', 64],
	                                                   ['愛媛', 64],
	                                                   ['高知', 62],
	                                                   ['福岡', 71],
	                                                   ['佐賀', 63],
	                                                   ['長崎', 63],
	                                                   ['熊本', 53],
	                                                   ['大分', 53],
	                                                   ['宮崎', 53],
	                                                   ['鹿児島', 54],
	                                                   ['沖縄', 53]
	                                                   ]);

	var option = {
		region : 'JP',
		resolution : 'provinces',
		// legend: 'none'
		// colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
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


//========================================================================
//zoom chart data
var data_zoom_chart = [
            ['Year', 'ABC媒体'],
  		  [new Date(2016, 10, 02), 33],
 		  [new Date(2016, 10, 05), 42],
 		  [new Date(2016, 10, 09), 45],
 		  [new Date(2016, 10, 15), 36],
 		  [new Date(2016, 10, 18), 33],
 		  [new Date(2016, 10, 22), 38],
 		  [new Date(2016, 10, 25), 52],
 		  [new Date(2016, 10, 28), 58],
 		  [new Date(2016, 11, 02), 45],
 		  [new Date(2016, 11, 03), 39],
 		  [new Date(2016, 11, 07), 40],
 		  [new Date(2016, 11, 10), 56],
 		  [new Date(2016, 11, 12), 60],
 		  [new Date(2016, 11, 14), 53],
 		  [new Date(2016, 11, 17), 67],
 		  [new Date(2016, 11, 19), 54],
 		  [new Date(2016, 11, 22), 44],
 		  [new Date(2016, 11, 23), 49],
 		  [new Date(2016, 11, 25), 58],
 		  [new Date(2016, 11, 27), 60],
 		  [new Date(2017, 00, 02), 39],   // 2017年2月2日: 30人
		  [new Date(2017, 00, 06), 43],
		  [new Date(2017, 00, 10), 55],
		  [new Date(2017, 00, 18), 45],
		  [new Date(2017, 00, 23), 49],
		  [new Date(2017, 00, 27), 53],
 		  [new Date(2017, 01, 02), 49],   // 2017年2月2日: 30人
 		  [new Date(2017, 01, 03), 47],
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
 		  [new Date(2017, 04, 02), 66],
 		  [new Date(2017, 04, 03), 77],
 		  [new Date(2017, 04, 04), 67],
 		  [new Date(2017, 04, 05), 55],
 		  [new Date(2017, 04, 06), 45],
 		  [new Date(2017, 04, 07), 49],
 		  [new Date(2017, 04, 08), 67],
 		  [new Date(2017, 04, 09), 56],
 		  [new Date(2017, 04, 10), 40],
 		  [new Date(2017, 04, 11), 52],
 		  [new Date(2017, 04, 12), 60],
 		  [new Date(2017, 04, 13), 60],
 		  [new Date(2017, 04, 14), 65],
 		  [new Date(2017, 04, 15), 79],
 		  [new Date(2017, 04, 16), 72],
 		  [new Date(2017, 04, 17), 63],
 		  [new Date(2017, 04, 18), 69],
 		  [new Date(2017, 04, 19), 67],
 		  [new Date(2017, 04, 20), 77],
 		  [new Date(2017, 04, 21), 87],
 		  [new Date(2017, 04, 22), 77],
 		  [new Date(2017, 04, 23), 90],
 		  [new Date(2017, 04, 24), 66],
 		  [new Date(2017, 04, 25), 70],
 		  [new Date(2017, 04, 26), 60],
 		  [new Date(2017, 04, 27), 80],
 		  [new Date(2017, 04, 28), 70],
 		  [new Date(2017, 04, 29), 80],
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
            ];

//=========================================================================
//CHART8:  ZOOM & PAN
//=========================================================================
google.setOnLoadCallback(drawChart8);

function drawChart8() {
	var data = google.visualization.arrayToDataTable(data_zoom_chart);

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
//  colors: ['#D44E41'],
    legend : {
    	position : 'top',
		alignment : 'center'    	
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div8'));
  chart.draw(data, options);
}

//=========================================================================
//CHART9:  ZOOM & PAN
//=========================================================================
google.setOnLoadCallback(drawChart9);

function drawChart9() {
	var data = google.visualization.arrayToDataTable(data_zoom_chart);
	
	var options = {
		  title: 'ABC媒体の応募数',
		  hAxis: {
			    title: '年月日',
			    titleTextStyle: {
			      color: '#333'
			    },
			    gridlines : {
			    	count : -1,
			    	units : {
			    		months : {format : ['yyyy-MM']}
			    	}
			    },
			    minorGridlines: {
		            units: {
			            days: {format: ['dd日']}
		            }
	            }
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
			    maxZoomIn: 12, 		// ズームの限界がない　（既定は4.0です）
			    maxZoomOut: 1
		  },
		  colors: ['#D44E41'],
		  legend : {
			  	position : 'top',
					alignment : 'center'    	
		  },
		  curveType : 'function',    // 曲線スタイル
		  pointSize: 3,
		  
//		  trendlines: {
//		      0: {
//		        type: 'exponential',
//		        color: 'green',
//		      }
//		    }
		  	
	};
	
	var chart = new google.visualization.LineChart(document.getElementById('chart_div9'));
	chart.draw(data, options);
}


//=========================================================================
//CHART10:  ZOOM & PAN
//=========================================================================
google.setOnLoadCallback(drawChart10);

function drawChart10() {
	var data = google.visualization.arrayToDataTable(data_zoom_chart);
	
	var options = {
		  displayAnnotations: true,
		  dateFormat : 'yyyy年MM月dd日',
		  displayAnnotationsFilter : true,
		  min : 0
	};
	
	var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div10'));
	chart.draw(data, options);
}


//=========================================================================
//CHART11:  Timeline chart - Annotation chart (単位を変更)
//=========================================================================
google.setOnLoadCallback(drawChart11);

function drawChart11() {
	var data = google.visualization.arrayToDataTable(big_data); // see google_chart_big_data.js
	
	var options = {
		  displayAnnotations: true,
		  dateFormat : 'yyyy年MM月dd日',
		  displayAnnotationsFilter : true,
		  min : 0
	};
	
	var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div11'));
	chart.draw(data, options);
}


//=========================================================================
//CHART12: 人口ピラミッドのデモ #1　棒グラフの組立
//=========================================================================
google.setOnLoadCallback(drawChart12);

function drawChart12()
{
  //var data = new google.visualization.DataTable();

  var dataArray = [
    ['Age', '男性', '女性', '男性（全国）', '女性（平均）'],
    ['0-4 ',   70,  -60, 50, -88],
    ['5-9 ',   80,  -70, 55, -89],
    ['10-14 ', 85,  -90, 57, -67],
    ['15-19 ', 105, -113,60, -54],
    ['20-24 ', 150, -173,64, -33],
    ['25-29 ', 123, -139,70, -57],
    ['30-34 ', 110, -120,78, -56],
    ['35-39 ', 101, -111,80, -54],
    ['40-44 ', 70,  -89, 85, -43],
    ['45-49 ', 50,  -60, 87, -56],
    ['50-54 ', 33,  -40, 100,-45],
    ['55-59 ', 32,  -23, 115,-34],
    ['60-64 ', 27,  -20, 114,-34],
    ['64-69 ', 19,  -16, 110,-44],
    ['70-74 ', 13,  -12, 100,-44],
    ['75-79 ', 8,   -7,	 90, -33],
    ['80-84 ', 3,   -3,	 60, -33],
    ['85-89 ', 1,   -1,	 30, -33],
    ['90-94 ', 0,   0, 	 20, -33],
    ['95+ ',   0,   0, 	 14, -23]
  ];

  var data = google.visualization.arrayToDataTable(dataArray);

  var chart = new google.visualization.BarChart(document.getElementById('chart_div12'));

  var options = {
    isStacked: true,
    height :  600,
    hAxis: {
      format: ';',
      viewWindowMode: 'pretty'
    },
    vAxis: {
    	title : '年齢',
      direction: -1  // reverse
    },
    series: {
    	2: {
      type: 'area'
      },
      3: {
      type: 'line'
      }
   },
   legend : {
			position : 'bottom',
			alignment : 'center'
		},
  };


  var formatter = new google.visualization.NumberFormat({
    pattern: ';'
  });

  formatter.format(data, 2)

  chart.draw(data, options);
}

//=========================================================================
//CHART13&14: 人口ピラミッドのデモ #2　棒グラフの組立
//=========================================================================
google.setOnLoadCallback(drawChart13);
google.setOnLoadCallback(drawChart14);

//左側
function drawChart13() {

      var data = google.visualization.arrayToDataTable([
                ['年齢', '女性',  '女性（平均）'],
    		    ['0-4 ',    60,  88],
    		    ['5-9 ',    70,  89],
    		    ['10-14 ',  90,  67],
    		    ['15-19 ',  113, 54],
    		    ['20-24 ',  173, 33],
    		    ['25-29 ',  139,  57],
    		    ['30-34 ',  120, 56],
    		    ['35-39 ',  111, 54],
    		    ['40-44 ',  89,  43],
    		    ['45-49 ',  60,  56],
    		    ['50-54 ',  40,  45],
    		    ['55-59 ',  23,  34],
    		    ['60-64 ',  20,  34],
    		    ['64-69 ',  16,  44],
    		    ['70-74 ',  12,  44],
    		    ['75-79 ',  7,   33],
    		    ['80-84 ',  3,	  33],
    		    ['85-89 ',  1,	  33],
    		    ['90-94 ',  0, 	  33],
    		    ['95+ ',    0, 	  23]
      ]);

      var options = {
	        height :  600,
	        width: 400,
	        hAxis: {
	          minValue: 0,
	          direction : -1  // reverse
	        },
	        vAxis: {
	          // title: 'City',
	        	textPosition: 'none',
	        	direction: -1  // reverse
	        },
	        series: {
	        	1: {
	          type: 'line'
	          }
	       },
	        legend : {
				position : 'bottom',
				alignment : 'center'
			},
			chartArea:{
				  left:80,
				  right:0,
				  //top:0,
				  //width:'50%',
				  //height:'75%'
			  },
			  colors : [ 'red', 'green' ],
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div13'));

      chart.draw(data, options);
    }
// 右側
function drawChart14() {
    var data = google.visualization.arrayToDataTable([
        ['年齢', '男性','男性（全国）'],
	    ['0-4 ',   70, 50],
	    ['5-9 ',   80, 55],
	    ['10-14 ', 85, 57],
	    ['15-19 ', 105,60],
	    ['20-24 ', 150,64],
	    ['25-29 ', 123,70],
	    ['30-34 ', 110,78],
	    ['35-39 ', 101,80],
	    ['40-44 ', 70, 85],
	    ['45-49 ', 50, 87],
	    ['50-54 ', 33, 100],
	    ['55-59 ', 32, 115],
	    ['60-64 ', 27, 114],
	    ['64-69 ', 19, 110],
	    ['70-74 ', 13, 100],
	    ['75-79 ', 8,  90],
	    ['80-84 ', 3,  60],
	    ['85-89 ', 1,  30],
	    ['90-94 ', 0,  20],
	    ['95+ ',   0,  14]
    ]);

    var options = {
	      height :  600,
	      width: 400,
	      hAxis: {
	        minValue: 0,
	      },
	      vAxis: {
	        //title: 'City',
	    	  direction: -1  // reverse
	      },
	      series: {
	      	1: {
	        type: 'area'
	        }
	     },
	      legend : {
				position : 'bottom',
				alignment : 'center'
		  },
		  chartArea:{
			  left:40,
			  right:0,
			  //top:0,
			  //width:'50%',
			  //height:'75%'
		  },
		  colors : [ 'blue', 'orange' ],
	
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div14'));

    chart.draw(data, options);
  }