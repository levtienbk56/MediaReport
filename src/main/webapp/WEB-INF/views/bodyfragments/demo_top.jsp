<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!-- CSS style -->
<!-- 
<link rel="stylesheet" type="text/css"
	href="http://docs.handsontable.com/pro/bower_components/handsontable-pro/dist/handsontable.full.min.css">
<link rel="stylesheet" type="text/css"
	href="http://handsontable.com/static/css/main.css">
 -->
<style>
body {
	background-image:
		url("https://dev5.recop.jp/recruiter/images/recop/bodyBg.gif");
}
.body-container {
	width: 968px;
	margin: auto ;	
	margin-top : 120px;
	display: block;
    clear: both;
    background-color: #fff;
}

footer {
	position: relative;
	right: 0;
	bottom: 0;
	left: 0;
	padding: 1rem;
	background-color: #efefef;
	text-align: center;
}

#mainNav {
	background-color: black;
}

div.inline {
	float: left;
}
.center{
	margin: 0 auto;
	text-align:center;
}
div.chart {
	width: 750px;
	position: relative;
}
div.sumary {
	width: 185px;
	height: 300px;
}
div.sumary > .info {
	height : 240px;
	width : 150px;
	background-color: #FDEADA;
	border: 1px dashed blue;
    border-radius: 20px;
}

button.shop-detail {
    position: absolute;
    right: 10px;
    border: 3px solid #F87347;
    background-color: #fff;
    bottom: 10px;
}
div.panel-body{
	padding: 0;
}
</style>


<!-- Body -->
<div class="container body-container">
	<div class="row">
		<div>
			<h2 style="text-align: center">（本部）分析TOP</h2>
		</div>
	</div>
	<hr />
	<br />

	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 id="chart">メンインブラック</h4>
		</div>
		<div class="panel-body">
			<div class="sumary inline">
				<p class="center">媒体応募状況</p>
				<div class="info center">
				</div>
			</div>
			<div class="chart inline">
				<div id="chart_div"></div>
				<button class="shop-detail">詳細確認</button>
			</div>
		</div>
	</div>
	<hr />
	<br />
	
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 id="chart1">デフォルト設定</h4>
		</div>
		<div class="panel-body">
			<div id="chart_div1"></div>
		</div>
		<div class="panel-footer">
			<h4>デフォルト設定。カスタマイズがないもの</h4>
		</div>
	</div>

	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 id="chart3">スタイル ＃3</h4>
		</div>
		<div class="panel-body">
			<div id="chart_div3"></div>
		</div>
		<div class="panel-footer">
			<h4>カスタマイズは以下である。</h4>
			<ul>
				<li>★ アニメーションがある</li>
				<li>★ グラフ周りの空白領域を消します</li>
				<li>★ 大きいタイトルになる</li>
				<li>★ 棒のサイズを小さくなる</li>
				<li>★ 面グラフの上部の線を消します</li>
				<li>★ 線のポイントが表示される</li>
				<li>★ 面グラフのカラーが黄色にする</li>
				<li>★ 折り線が曲線になる</li>
			</ul>
		</div>
	</div>
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 id="chart4">スタイル ＃４</h4>
		</div>
		<div class="panel-body">
			<div id="chart_div4"></div>
		</div>
		<div class="panel-footer">
			<h4>カスタマイズは以下である。</h4>
			<ul>
				<li><b>★スタイル#3を含みます。</b></li>
				<li>★ 線のポイントの形が変更される</li>
				<li>★ 採用予定の線が破線になる</li>
				<li>★ 採用予定の線が破線になる</li>
				<li>★ チャットのバックグラウンドのカラーが暗いカラーにする</li>
				<li>★ チャットの境界線が表示される</li>
				<li>★ グリッド線が増える</li>
			</ul>
		</div>
	</div>

	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 id="chart5">スタイル ＃５</h4>
		</div>
		<div class="panel-body">
			<div id="chart_div5"></div>
		</div>
		<div class="panel-footer">
			<h4>カスタマイズは以下である。</h4>
			<ul>
				<li><b>★スタイル#3を含みます。</b></li>
				<li>★ グラフのバックグラウンドのカラーが暗いカラーにする</li>
				<li>★ 棒の色が変更させる</li>
			</ul>
		</div>
	</div>
</div>

<!-- Google api JavaScript -->
<script src="https://www.google.com/jsapi"></script>

<!-- vendor lib -->
<!-- 
<script
	src="http://docs.handsontable.com/pro/bower_components/handsontable-pro/dist/handsontable.full.min.js"></script>
 -->
 
<!-- Custom javascript -->
<script
	src="${pageContext.servletContext.contextPath}/resources/js/demo_top.js"></script>
<!-- <script
	src="${pageContext.servletContext.contextPath}/resources/js/editable_table.js"></script>
	 -->