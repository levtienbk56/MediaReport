<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!-- CSS style -->
<link rel="stylesheet" type="text/css"
	href="http://docs.handsontable.com/pro/bower_components/handsontable-pro/dist/handsontable.full.min.css">
<link rel="stylesheet" type="text/css"
	href="http://handsontable.com/static/css/main.css">

<style>
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

.body-container {
	padding-top: 120px;
	background-color: #fff;
}

.chart {
	width: 100%;
	min-height: 650px;
}

div.inline {
	float: left;
}

body {
	background-image:
		url("https://dev5.recop.jp/recruiter/images/recop/bodyBg.gif");
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
			<h4 id="chart1">スタイル ＃１</h4>
		</div>
		<div class="panel-body">
			<div id="chart_div1" class="chart"></div>
		</div>
		<div class="panel-footer">
			<h4>デフォルト設定。カスタマイズがないもの</h4>
		</div>
	</div>

	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 id="chart2">スタイル ＃2</h4>
		</div>
		<div class="panel-body">
			<div id="chart_div2" class="chart"></div>
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
			</ul>
		</div>
	</div>

	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 id="chart3">スタイル ＃3</h4>
		</div>
		<div class="panel-body">
			<div id="chart_div3" class="chart"></div>
		</div>
		<div class="panel-footer">
			<h4>カスタマイズは以下である。</h4>
			<ul>
				<li><b>★スタイル#2を含みます。</b></li>
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
			<div id="chart_div4" class="chart"></div>
		</div>
		<div class="panel-footer">
			<h4>カスタマイズは以下である。</h4>
			<ul>
				<li><b>★スタイル#3を含みます。</b></li>
				<li>★ 線のポイントの形が変更される</li>
				<li>★ 採用予定の線が破線になる</li>
				<li>★ 採用予定の線が破線になる</li>
				<li>★ グラフのバックグラウンドのカラーが暗いカラーにする</li>
			</ul>
		</div>
	</div>

	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 id="chart5">スタイル ＃５</h4>
		</div>
		<div class="panel-body">
			<div id="chart_div5" class="chart"></div>
		</div>
		<div class="panel-footer">
			<h4>カスタマイズは以下である。</h4>
			<ul>
				<li>★ グラフ周りの空白領域を消します</li>
				<li>★ 大きいタイトルになる</li>
				<li>★ 棒のサイズを小さくなる</li>
				<li>★ 面グラフの上部の線を消します</li>
				<li>★ 面グラフのカラーが黄色にする</li>
				<li>★ 採用予定の線が破線になる</li>
				<li>★ 折り線が曲線になる</li>
				<li>★ 線のポイントの形が変更される</li>
				<li>★ グラフのバックグラウンドのカラーが暗いカラーにする</li>
				<li>★ グラフの周り境界が表示される</li>
			</ul>
		</div>
	</div>
	
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 id="chart6">スタイル ＃６</h4>
		</div>
		<div class="panel-body">
			<div id="chart_div6" class="chart"></div>
		</div>
		<div class="panel-footer">
			<h4>カスタマイズは以下である。</h4>
			<ul>
				<li>★ グラフ周りの空白領域を消します</li>
				<li>★ 大きいタイトルになる</li>
				<li>★ 棒のサイズを小さくなる</li>
				<li>★ 面グラフの上部の線を消します</li>
				<li>★ 面グラフのカラーが黄色にする</li>
				<li>★ 採用予定の線が破線になる</li>
				<li>★ 折り線が曲線になる</li>
				<li>★ 線のポイントの形が変更される</li>
				<li>★ グラフのバックグラウンドのカラーが暗いカラーにする</li>
				<li>★ グラフの周り境界が表示される</li>
			</ul>
		</div>
	</div>
</div>

<!-- Google api JavaScript -->
<script src="https://www.google.com/jsapi"></script>

<!-- vendor lib -->
<script
	src="http://docs.handsontable.com/pro/bower_components/handsontable-pro/dist/handsontable.full.min.js"></script>

<!-- Custom javascript -->
<script
	src="${pageContext.servletContext.contextPath}/resources/js/demo_top.js"></script>
<script
	src="${pageContext.servletContext.contextPath}/resources/js/editable_table.js"></script>