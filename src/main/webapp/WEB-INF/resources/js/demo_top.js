function getChartHeight() {
	var ww = $(window).width();
	var wh = $(window).height();
	var dw = $(document).width();
	var dh = $(document).height();

	if (ww > 1600)
		return 500;
}

// === load chart library ===
google.load("visualization", "1", {
	packages : [ "corechart" ],
	language : 'ja'
});

var default_colors = [ '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
		'#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a',
		'#ffc107', '#ff9800', '#ff5722', '#795548' ];

var default_colors2 = ['#00BCD4', '#FFF59D', '#FDD835', '#BCAAA4', '#795548', '#AEEA00', '#FFAB00', '#E91E63', '#880E4F', '#E1BEE7', '#BA68C8', '#9C27B0', '#6A1B9A', '#00838F', '#80CBC4', '#009688', '#00695C', '#A5D6A7', '#4CAF50'];

// === responsive graph ===
$(window).resize(function() {
	drawChart();
	drawPieChart();
	drawLineChart();
	drawChart1();
	drawChart3();
	drawChart4();
	drawChart5();
});

// draw chart when resource is loaded
google.setOnLoadCallback(drawChart);
google.setOnLoadCallback(drawPieChart);
google.setOnLoadCallback(drawLineChart);
google.setOnLoadCallback(drawChart1);
google.setOnLoadCallback(drawChart3);
google.setOnLoadCallback(drawChart4);
google.setOnLoadCallback(drawChart5);

// same CSV file
var jsonData = {
        "cols": [
			{label:"月ごと", type:"string"},
			{label:"応募トレン", type:"number"},
			{label:"採用予定", type:"number"},
			{label:"採用数", type:"number"},
			{label:"おうぼうける君", type:"number"},
			{label:"バイトル", type:"number"},
			{label:"マイナビバイト", type:"number"},
			{label:"ジョブセンス", type:"number"},
			{label:"Weban", type:"number"},
			{label:"イーアイデム", type:"number"},
			{label:"フロム・エーキャリア", type:"number"},
			{label:"Workin", type:"number"},
			{label:"Girls&Co.", type:"number"},
			{label:"DOMO!NET", type:"number"},
			{label:"採用HP", type:"number"}
             ],
        "rows": [
			{"c":[{"v":"2016年11月"},{"v":1400},{"v":1300},{"v":1100},{"v":732},{"v":464},{"v":349},{"v":87},{"v":41},{"v":29},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0}]},
			{"c":[{"v":"12月"},{"v":1200},{"v":800},{"v":700},{"v":437},{"v":156},{"v":169},{"v":50},{"v":37},{"v":21},{"v":0},{"v":2},{"v":0},{"v":0},{"v":0}]},
			{"c":[{"v":"2017年01月"},{"v":1300},{"v":1000},{"v":850},{"v":473},{"v":222},{"v":234},{"v":61},{"v":80},{"v":19},{"v":0},{"v":0},{"v":0},{"v":1},{"v":0}]},
			{"c":[{"v":"2月"},{"v":1500},{"v":1200},{"v":1190},{"v":442},{"v":387},{"v":446},{"v":59},{"v":95},{"v":30},{"v":26},{"v":2},{"v":0},{"v":0},{"v":0}]},
			{"c":[{"v":"3月"},{"v":1700},{"v":1600},{"v":1400},{"v":894},{"v":420},{"v":480},{"v":52},{"v":84},{"v":45},{"v":65},{"v":0},{"v":0},{"v":0},{"v":0}]},
			{"c":[{"v":"4月"},{"v":1600},{"v":1400},{"v":1290},{"v":878},{"v":310},{"v":387},{"v":77},{"v":58},{"v":48},{"v":26},{"v":0},{"v":0},{"v":2},{"v":0}]},
			{"c":[{"v":"5月"},{"v":1300},{"v":1000},{"v":null},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0}]},
			{"c":[{"v":"6月"},{"v":900},{"v":820},{"v":null},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0}]},
			{"c":[{"v":"7月"},{"v":1100},{"v":980},{"v":null},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0},{"v":0}]}
             ]
       };

//=========================================================================
//CHART: MAIN CHART
//=========================================================================
function drawChart() {
	var data = new google.visualization.DataTable(jsonData);

	var options = {
		height : 300,
		width : 750,
		title : '応募～採用状態',
		titleTextStyle : {
			color : 'black',
			fontSize : 20,
			bold : true,
			fontName : 'Arial'
		},
		chartArea : {
			left : '10%',
			right : '20%',
			top : '15%',
			bottom : '15%'
		},
		backgroundColor: {
         fill: '#FDEADA',
         stroke:'blue',
       	strokeWidth:0
		},
		/*
		 * データ行にとって、スタイルを定義できる。
		 * もともと棒グラフですが、以下は｛0,1,2｝の行（または応募トレンド、採用予定、採用数）を別なグラフ種類に設定できる。
		 * 応募トレンドは面に設定し、採用予定と採用数は折り線に設定してあります。
		 */
		seriesType : 'bars',
		series : {
			0 : {
				// 面グラフなら、カラーと面の上部の線を変更できる
				type : 'area',
				// color : '#ccff33',
				lineWidth : 0, // 「0」になるなら、面の上部の線を表示しない。
				pointSize : 0,
			},
			1 : {
				// 折り線グラフなら、カラーや線の広さやポイントのサイズや破線やポイント形やラベルを変更できる。
				type : 'line',
				lineWidth : 2, // 線の広さ
				pointSize : 5, // ポイントのサイズ
				pointShape : 'circle', // 各スタイルは｛〇、□、☆、◇、△｝
				lineDashStyle : [ 1, 0 ], // 破線スタイル。例：[5,3]
				curveType : 'none', // "function"に設定すると曲線スタイルになる
			},
			2 : {
				type : 'line',
				lineWidth : 2,
				pointSize : 5,
				pointShape : 'circle',
				lineDashStyle : [ 1, 0 ],
				curveType : 'none',
			}
		},
		isStacked : true, // 積み立て
		bar : {
			groupWidth : '30%' // 棒の広さ
		},
		hAxis : {
			titleTextStyle : {
				color : '#757575',
				fontSize : 12,
				bold : true
			}
		},
		vAxis : {
			title : '人数 （人）',
			titleTextStyle : {
				color : '#757575',
				fontSize : 12,
				bold : true
			}
		},
		legend : {
			textStyle: {
				color: '#757575',
//				fontName: ,
				fontSize: 10,
				bold : false,
				italic : false
			}
		},
		animation : {
			duration : 1000,
			easing : 'out',
			startup : true
		},
		// colors : default_colors,

		/**
		 * これは折り線のスタイルなんですが、この範囲に入れると、全ての折り線が更新される。
		 */
		curveType : 'function',
		pointSize : 3,
		pointShape : "circle"
	};

	var chart = new google.visualization.ComboChart(document
			.getElementById('chart_div'));
	chart.draw(data, options);
}

//
//=========================================================================
//CHART: Pie CHART
//=========================================================================
function drawPieChart() {

    var data = google.visualization.arrayToDataTable([
      ['媒体', '応募者'],
      ['A媒体', 11],
      ['B媒体', 7],
      ['C媒体', 4],
      ['D媒体', 2],
      ['E媒体', 1]
    ]);

    var options = {
      title: '媒体別シェア',
      titleTextStyle : {
			color : 'black',
			fontSize : 15,
			bold : true,
			fontName : 'Arial'
      },
      height : 300,
      width : 450,
      chartArea:{
      	left : '20%',
        right : '0%',
        top : '10%',
        bottom : '0%'
      },
      backgroundColor: {
     		fill: '#FDEADA',
       },
       pieHole: 0.4,
	  };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div_pie'));

    chart.draw(data, options);
  }
function drawLineChart() {
	var data={
	 cols :[
	      {label:"月", type:"string"},
	      {label:"A媒体", type:"number"},
	      {label:"B媒体", type:"number"},
	      {label:"C媒体", type:"number"},
	      {label:"D媒体", type:"number"}
	  ],
	  rows:[
	      {c:[{v:"2016年10月"},{v: 107},{v: 96},{v: 18},{v: 11}]},
	      {c:[{v:"11月"},{v: 113},{v: 98},{v: 28},{v: 6}]},
	      {c:[{v:"12月"},{v: 115},{v: 83},{v: 31},{v: 8}]},
	      {c:[{v:"2017年01月"},{v: 100},{v: 80},{v: 33},{v: 14}]},
	      {c:[{v:"02月"},{v: 117},{v: 87},{v: 34},{v: 5}]},
	      {c:[{v:"03月"},{v: 110},{v: 93},{v: 19},{v: 17}]}
	  ]
	};
	var data = new google.visualization.DataTable(data);
	
	var options = {
		title: '応募者数比較',
		titleTextStyle : {
			color : 'black',
			fontSize : 15,
			bold : true,
			fontName : 'Arial'
		},
	    height: 300,
	    width: 450,
	    chartArea: {
	    	left: '10%',
		    right: '5%',
		    top: '15%',
		    bottom: '25%'
	    },
	    backgroundColor: {
	    	fill: '#FDEADA',
	    },
	    vAxis: {
	    	title: '人数（人）'
	    },
	    legend: {
	    	position: 'bottom'
	    },
	    pointSize: 5,
	
	};
	
	var chart = new google.visualization.LineChart(document.getElementById('chart_div_line'));
	chart.draw(data, options);
}

//
// =========================================================================
// CHART１: DEFAULT CHART
// =========================================================================
function drawChart1() {
	var data = new google.visualization.DataTable(jsonData);

	var options = {
		title : '応募～採用状態',
		seriesType : 'bars',
		series : {
			0 : {
				type : 'area',
			},
			1 : {
				type : 'line',
			},
			2 : {
				type : 'line',
			}
		},
		isStacked : true, // 積み立て
	};

	var chart = new google.visualization.ComboChart(document
			.getElementById('chart_div1'));
	chart.draw(data, options);
}

// =========================================================================
// CHART3: STYLE #3 CHART
// =========================================================================
function drawChart3() {
	var data = new google.visualization.DataTable(jsonData);

	var options = {
		height : getChartHeight(),
		title : '応募～採用状態',
		titleTextStyle : {
			color : 'black',
			fontSize : 25,
			bold : true,
			fontName : 'Arial'
		},
		chartArea : {
			left : '15%',
			top : '10%',
			bottom : '15%'
		},

		/*
		 * データ行にとって、スタイルを定義できる。
		 * もともと棒グラフですが、以下は｛0,1,2｝の行（または応募トレンド、採用予定、採用数）を別なグラフ種類に設定できる。
		 * 応募トレンドは面に設定し、採用予定と採用数は折り線に設定してあります。
		 */
		seriesType : 'bars',
		series : {
			0 : {
				// 面グラフなら、カラーと面の上部の線を変更できる
				type : 'area',
				color : '#9E9E9E',
				lineWidth : 0, // 「0」になるなら、面の上部の線を表示しない。
				pointSize : 0,
			},
			1 : {
				// 折り線グラフなら、カラーや線の広さやポイントのサイズや破線やポイント形やラベルを変更できる。
				type : 'line',
				lineWidth : 2, // 線の広さ
				pointSize : 5, // ポイントのサイズ
				curveType : 'function', // 曲線スタイル
			},
			2 : {
				type : 'line',
				lineWidth : 2,
				pointSize : 5,
				curveType : 'function',
			}
		},
		isStacked : true, // 積み立て
		bar : {
			groupWidth : '70%' // 棒の広さ
		},
		hAxis : {
			// title : '月ごと',
			slantedText : true,
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

		/**
		 * これは折り線のスタイルなんですが、この範囲に入れると、全ての折り線が更新される。
		 */
		curveType : 'function',
		pointSize : 3,
		pointShape : "circle"
	};

	var chart = new google.visualization.ComboChart(document
			.getElementById('chart_div3'));
	chart.draw(data, options);
	
}

// =========================================================================
// CHART4:  STYLE  4 CHART
// =========================================================================
function drawChart4() {
	var data = new google.visualization.DataTable(jsonData);

	var options = {
		height : getChartHeight(),
		title : '応募～採用状態',
		titleTextStyle : {
			color : 'black',
			fontSize : 25,
			bold : true,
			fontName : 'Arial'
		},
		chartArea : {
			left : '15%',
			top : '10%',
			bottom : '15%',
			 backgroundColor: {
	              fill: '#EEEEEE',
	              stroke:'blue',
	            	strokeWidth:1
            },
		},

		/*
		 * データ行にとって、スタイルを定義できる。
		 * もともと棒グラフですが、以下は｛0,1,2｝の行（または応募トレンド、採用予定、採用数）を別なグラフ種類に設定できる。
		 * 応募トレンドは面に設定し、採用予定と採用数は折り線に設定してあります。
		 */
		seriesType : 'bars',
		series : {
			0 : {
				// 面グラフなら、カラーと面の上部の線を変更できる
				type : 'area',
				color : '#3385ff',
				lineWidth : 0, // 「0」になるなら、面の上部の線を表示しない。
				pointSize : 0,
				curveType : 'function',
			},
			1 : {
				// 折り線グラフなら、カラーや線の広さやポイントのサイズや破線やポイント形やラベルを変更できる。
				type : 'line',
				lineWidth : 2, // 線の広さ
				pointSize : 8, // ポイントのサイズ
				pointShape : 'triangle', // 各スタイルは｛〇、□、☆、◇、△｝
				lineDashStyle : [ 5, 3 ], // 破線スタイル。例：[5,3]
				curveType : 'function', // 曲線スタイル
			},
			2 : {
				type : 'line',
				lineWidth : 2,
				pointSize : 6,
				curveType : 'function',
			}
		},
		isStacked : true, // 積み立て
		bar : {
			groupWidth : '50%' // 棒の広さ
		},
		hAxis : {
			// title : '月ごと',
			slantedText : true,
			titleTextStyle : {
				color : 'black',
				fontSize : 18,
				bold : true
			}
		},
		vAxis : {
			title : '人数 （人）',
			gridlines :{
				color : '#ddd',
				count : 10
			}
		},
		animation : {
			duration : 1000,
			easing : 'out',
			startup : true
		},
		colors : default_colors2,

		/**
		 * これは折り線のスタイルなんですが、この範囲に入れると、全ての折り線が更新される。
		 */
		curveType : 'function',
		pointSize : 3,
		pointShape : "circle"
	};

	var chart = new google.visualization.ComboChart(document
			.getElementById('chart_div4'));
	chart.draw(data, options);
}


//=========================================================================
//CHART5:  STYLE #5 CHART
//=========================================================================
function drawChart5() {
	var data = new google.visualization.DataTable(jsonData);

	var options = {
		height : getChartHeight(),
		title : '応募～採用状態',
		titleTextStyle : {
			color : '#fff',
			fontSize : 25,
			bold : true,
			fontName : 'Arial'
		},
		chartArea : {
			left : '15%',
			top : '10%',
			bottom : '15%',
		},
		backgroundColor: {
            fill: '#424242',
            stroke:'blue',
          	strokeWidth:1
		},

		/*
		 * データ行にとって、スタイルを定義できる。
		 * もともと棒グラフですが、以下は｛0,1,2｝の行（または応募トレンド、採用予定、採用数）を別なグラフ種類に設定できる。
		 * 応募トレンドは面に設定し、採用予定と採用数は折り線に設定してあります。
		 */
		seriesType : 'bars',
		series : {
			0 : {
				// 面グラフなら、カラーと面の上部の線を変更できる
				type : 'area',
				color : '#FFFDE7',
				lineWidth : 0, // 「0」になるなら、面の上部の線を表示しない。
				pointSize : 0,
			},
			1 : {
				// 折り線グラフなら、カラーや線の広さやポイントのサイズや破線やポイント形やラベルを変更できる。
				type : 'line',
				lineWidth : 2, // 線の広さ
				pointSize : 5, // ポイントのサイズ
				curveType : 'function', // 曲線スタイル
			},
			2 : {
				type : 'line',
				lineWidth : 2,
				pointSize : 5,
				curveType : 'function',
			}
		},
		isStacked : true, // 積み立て
		bar : {
			groupWidth : '70%' // 棒の広さ
		},
		hAxis : {
			// title : '月ごと',
			slantedText : true,
			textStyle :{
				color : '#fff',
			}
		},
		vAxis : {
			title : '人数 （人）',
			titleTextStyle : {
				color : '#fff',
				fontSize : 18,
				bold : true
			},
			textStyle :{
				color : '#fff',
			}
		},
		animation : {
			duration : 1000,
			easing : 'out',
			startup : true
		},

		/**
		 * これは折り線のスタイルなんですが、この範囲に入れると、全ての折り線が更新される。
		 */
		curveType : 'function',
		pointSize : 3,
		pointShape : "circle",
		legend :{
			textStyle :{
				color : '#fff',
			}
		},
		colors : default_colors
	};

	var chart5 = new google.visualization.ComboChart(document
			.getElementById('chart_div5'));
	
	// add listener before drawing chart
	google.visualization.events.addListener(chart5, 'ready', myReadyHandler);
	//google.visualization.events.addListener(chart5, 'select', mySelectHandler);
	
	// draw chart
	chart5.draw(data, options);
	
	function myReadyHandler(e){
	}
}

