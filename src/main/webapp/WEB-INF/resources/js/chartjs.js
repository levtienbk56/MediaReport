var default_colors = [ '#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
		'#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E', '#316395',
		'#994499', '#22AA99', '#AAAA11', '#6633CC', '#E67300', '#8B0707',
		'#329262', '#5574A6', '#3B3EAC' ];

//
// =========================================================================
// CHART 1: GROUPED CHART
// =========================================================================
var ctx1 = document.getElementById("chart1");

var data_chart1 = {
	labels : [ "北海道・東北", "関東", "中部", "近畿", "中国", "四国", "九州・沖縄" ],
	datasets : [ {
		label : "男性",
		backgroundColor : '#3366CC',
		data : [ 7981, 109739, 16393, 33421, 3789, 1134, 8702 ],
	}, {
		label : "女性",
		backgroundColor : '#DC3912',
		data : [ 13245, 167245, 23979, 55173, 6341, 1691, 15502 ],
	} ]
};

var options_chart1 = {
	title : {
		display : true,
		text : '地方別応募数', // グラフ名
		fontSize : 25
	},
	barValueSpacing : 20,
	scales : {
		yAxes : [ {
			ticks : {
				min : 0,
			},
			scaleLabel : {
				display : true,
				labelString : '応募数　（人）' // 単位名
			}
		} ]
	},
	legend : {
		display : true
	}
};

var myBarChart = new Chart(ctx1, {
	type : 'bar',
	data : data_chart1,
	options : options_chart1
});

//
// =========================================================================
// CHART 2: COMBINE CHART (BAR & LINE)
// =========================================================================
var ctx2 = document.getElementById("chart2");

var data_chart2 = {
	labels : [ "北海道・東北", "関東", "中部", "近畿", "中国", "四国", "九州・沖縄" ],
	datasets : [ {
		label : "マイナビバイト",
		type : "bar",
		fill : 'false',
		yAxisID : "y-axis-0", // y-axis 左側
		backgroundColor : 'rgba(54, 162, 235, 0.2)',
		borderColor : 'rgba(54, 162, 235, 1)',
		borderWidth : 1,
		data : [ 10417, 134901, 10749, 23105, 4546, 1242, 7015 ],
	}, {
		label : "全媒体",
		type : "line",
		yAxisID : "y-axis-1", // y-axis 右側
		lineTension : 0.1, // ラインの柔らかさ
		fill : 'false',
		borderColor : 'red',
		backgroundColor : 'transparent', // 注意： ラインの以下の面は
		// rgba(0,0,0,0.8)
		// に既定している
		data : [ 37725, 463640, 71124, 155133, 17686, 4925, 42306 ],
	} ]
};

var options_chart2 = {
	title : {
		display : true,
		text : '地方別応募数',
		fontSize : 25
	},
	barValueSpacing : 20,
	scales : {
		yAxes : [ {
			position : "left",
			"id" : "y-axis-0",
			scaleLabel : {
				display : true,
				labelString : '応募数　（人）' // 単位名
			}
		}, {
			position : "right",
			"id" : "y-axis-1",
			scaleLabel : {
				display : true,
				labelString : '応募数　（人）', // 単位名
				gridLines : {
					display : false
				}
			}
		} ]
	}
};

var myBarChart2 = new Chart(ctx2, {
	type : 'bar',
	data : data_chart2,
	options : options_chart2,
});

//
//
// =========================================================================
// CHART 3: STACKED CHART
// =========================================================================
var ctx3 = document.getElementById("chart3");

var data_chart3 = {
	labels : [ "Weban", "おうぼうける君", "バイトル", "マイナビバイト", "ジョブセンス", "リクナビNEXT" ],
	datasets : [ {
		label : "北海道・東北",
		backgroundColor : 'rgba(255, 99, 132, 0.8)',
		borderColor : 'rgba(255, 99, 132, 1)',
		borderWidth : 1,
		data : [ 5.81, 4.24, 3.42, 5.43, 6.68, 7.10 ],
	}, {
		label : "関東",
		backgroundColor : 'rgba(54, 162, 235, 0.8)',
		borderColor : 'rgba(54, 162, 235, 1)',
		borderWidth : 1,
		data : [ 53.77, 54.54, 55.96, 70.27, 65.91, 53.10 ],
	}, {
		label : "中部",
		backgroundColor : 'rgba(255, 206, 86, 0.8)',
		borderColor : 'rgba(255, 206, 86, 1)',
		borderWidth : 1,
		data : [ 10.06, 10.67, 9.16, 5.60, 8.45, 9.08 ],
	}, {
		label : "近畿",
		backgroundColor : 'rgba(75, 192, 192, 0.8)',
		borderColor : 'rgba(75, 192, 192, 1)',
		borderWidth : 1,
		data : [ 21.18, 21.79, 24.38, 12.04, 11.10, 21.09 ],
	}, {
		label : "中国",
		backgroundColor : 'rgba(153, 102, 255, 0.8)',
		borderColor : 'rgba(153, 102, 255, 1)',
		borderWidth : 1,
		data : [ 2.20, 2.72, 0.98, 2.37, 2.70, 2.11 ],
	}, {
		label : "四国",
		backgroundColor : 'rgba(255, 159, 64, 0.8)',
		borderColor : 'rgba(255, 159, 64, 1)',
		borderWidth : 1,
		data : [ 0.97, 0.50, 0.59, 0.65, 0.89, 1.14 ],
	}, {
		label : "九州・沖縄",
		backgroundColor : 'rgba(255, 0, 0, 0.8)',
		borderColor : 'rgba(255, 0, 0, 1)',
		borderWidth : 1,
		data : [ 6.01, 5.53, 5.51, 3.65, 4.26, 6.37 ],
	}, ]
};

var options_chart3 = {
	title : {
		display : true,
		text : '媒体ごと地方別の応募者率化（％）',
		fontSize : 25
	},
	scales : {
		yAxes : [ {
			stacked : true
		// 積み立て棒設定
		} ]
	}
};

var myBarChart3 = new Chart(ctx3, {
	type : 'bar',
	data : data_chart3,
	options : options_chart3,
});
