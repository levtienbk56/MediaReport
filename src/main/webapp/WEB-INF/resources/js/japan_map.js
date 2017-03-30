
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