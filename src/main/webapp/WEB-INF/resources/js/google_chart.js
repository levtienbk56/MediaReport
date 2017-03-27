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
	packages : [ "corechart" ]
});
// === load geochart lib ===
google.load('visualization', '1', {
	packages : [ 'geochart' ]
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

//
//
//
// =========================================================================
// CHART4: GOOGLE CHART & JAPAN-MAP
// =========================================================================
//
/*
 * var hokkaido = [ [ '月', '人' ], [ '16年02月', 2 ], [ '3月', 36 ], [ '4月', 123 ], [
 * '5月', 142 ], [ '6月', 253 ], [ '7月', 703 ], [ '8月', 2244 ], [ '9月', 2730 ], [
 * '10月', 4534 ], [ '11月', 6058 ], [ '12月', 5490 ], [ '17年01月', 8363 ] ]; var
 * kanto = [ [ '月', '人' ], [ '16年02月', 310 ], [ '3月', 433 ], [ '4月', 1420 ], [
 * '5月', 1409 ], [ '6月', 2848 ], [ '7月', 8041 ], [ '8月', 27701 ], [ '9月', 33507 ], [
 * '10月', 57746 ], [ '11月', 86176 ], [ '12月', 68921 ], [ '17年01月', 89654 ] ];
 * var chubu = [ [ '月', '人' ], [ '16年02月', 13 ], [ '3月', 65 ], [ '4月', 199 ], [
 * '5月', 216 ], [ '6月', 487 ], [ '7月', 1093 ], [ '8月', 3651 ], [ '9月', 4204 ], [
 * '10月', 8139 ], [ '11月', 12641 ], [ '12月', 10958 ], [ '17年01月', 15271 ] ];
 * 
 * var kinki = [ [ '月', '人' ], [ '16年02月', 22 ], [ '3月', 218 ], [ '4月', 662 ], [
 * '5月', 648 ], [ '6月', 1125 ], [ '7月', 2594 ], [ '8月', 7993 ], [ '9月', 9640 ], [
 * '10月', 17793 ], [ '11月', 26564 ], [ '12月', 24083 ], [ '17年01月', 34399 ] ];
 * 
 * var chukoku = [ [ '月', '人' ], [ '16年02月', 1 ], [ '3月', 11 ], [ '4月', 69 ], [
 * '5月', 44 ], [ '6月', 100 ], [ '7月', 312 ], [ '8月', 1135 ], [ '9月', 1186 ], [
 * '10月', 2028 ], [ '11月', 2881 ], [ '12月', 2686 ], [ '17年01月', 3649 ] ];
 * 
 * var shikoku = [ [ '月', '人' ], [ '16年02月', 1 ], [ '3月', 4 ], [ '4月', 8 ], [
 * '5月', 19 ], [ '6月', 33 ], [ '7月', 114 ], [ '8月', 343 ], [ '9月', 440 ], [
 * '10月', 694 ], [ '11月', 741 ], [ '12月', 549 ], [ '17年01月', 1047 ] ];
 * 
 * var okinawa = [ [ '月', '人' ], [ '16年02月', 0 ], [ '3月', 28 ], [ '4月', 134 ], [
 * '5月', 165 ], [ '6月', 253 ], [ '7月', 634 ], [ '8月', 2321 ], [ '9月', 2844 ], [
 * '10月', 4881 ], [ '11月', 7307 ], [ '12月', 6431 ], [ '17年01月', 9244 ] ]; //
 * draw chart function drawChart4(area, chartData) { var data =
 * google.visualization.arrayToDataTable(chartData);
 * 
 * var options = { title : area, hAxis : { title : '年月', titleTextStyle : {
 * color : 'black' } }, seriesType : 'bars', };
 * 
 * var chart = new google.visualization.ColumnChart(document
 * .getElementById('chart_div4')); chart.draw(data, options); } // === DRAW
 * CHART WITH JAPAN-MAPS === $(function() { var areas = [ { code : 1, name :
 * "北海道・東北地方", color : "#759ef4", hoverColor : "#98b9ff", prefectures : [ 1, 2,
 * 3, 4, 5, 6, 7 ] }, { code : 2, name : "関東地方", color : "#7ecfea", hoverColor :
 * "#b7e5f4", prefectures : [ 8, 9, 10, 11, 12, 13, 14 ] }, { code : 3, name :
 * "中部地方", color : "#7cdc92", hoverColor : "#aceebb", prefectures : [ 15, 16,
 * 17, 18, 19, 20, 21, 22, 23 ] }, { code : 4, name : "近畿地方", color : "#ffe966",
 * hoverColor : "#fff19c", prefectures : [ 24, 25, 26, 27, 28, 29, 30 ] }, {
 * code : 5, name : "中国地方", color : "#ffcc66", hoverColor : "#ffe0a3",
 * prefectures : [ 31, 32, 33, 34, 35 ] }, { code : 6, name : "四国地方", color :
 * "#fb9466", hoverColor : "#ffbb9c", prefectures : [ 36, 37, 38, 39 ] }, { code :
 * 7, name : "九州・沖縄地方", color : "#ff9999", hoverColor : "#ffbdbd", prefectures : [
 * 40, 41, 42, 43, 44, 45, 46, 47 ] } ];
 * 
 * $("#map-container").japanMap({ width : 500, selection : "area", areas :
 * areas, backgroundColor : "#f2fcff", borderLineColor : "#f2fcff",
 * borderLineWidth : 0.25, lineColor : "#a0a0a0", lineWidth : 1, drawsBoxLine :
 * true, showsPrefectureName : true, prefectureNameType : "short", movesIslands :
 * true, fontSize : 9, // 地方をクリックする反応 onSelect : function(data) { if (data.code ==
 * 1) { drawChart4('北海道・東北', hokkaido); } else if (data.code == 2) {
 * drawChart4('関東', kanto); } else if (data.code == 3) { drawChart4('中部',
 * chubu); } else if (data.code == 4) { drawChart4('近畿', kinki); } else if
 * (data.code == 5) { drawChart4('中国', chukoku); } else if (data.code == 6) {
 * drawChart4('四国', shikoku); } else if (data.code == 7) { drawChart4('沖縄・九州',
 * okinawa); } } }); });
 * 
 */

// =========================================================================
// GEOCHART
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
