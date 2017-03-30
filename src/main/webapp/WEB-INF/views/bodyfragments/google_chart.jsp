<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

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
	margin-top: 120px;
}

.chart {
	width: 100%;
	min-height: 400px;
}

div.inline {
	float: left;
}
</style>



<div class="container body-container">
	<div class="row">
		<div class="col-md-12 text-center">
			<h1>縦棒グラフのデモ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div1" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />

	<div class="row">
		<div class="col-md-12 text-center">
			<h1>組合せのデモ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div2" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />

	<div class="row">
		<div class="col-md-12 text-center">
			<h1>積み立てグラフのデモ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div3" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
	<!--  
	<div class="row">
		<div class="col-md-12 text-center">
			<h1>マップのデモ</h1>
		</div>
		<div id="map-container"></div>
		<div id="chart_div4" class="chart"></div>
	</div>
	<div class="row"></div>
	<hr/>
	-->
	<div class="row">
		<div class="col-md-12 text-center">
			<h1>マップのデモ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div5"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
	
	<div class="row">
		<div class="col-md-12 text-center">
			<h1>グラフの一部を「破線」等で表現できるか？</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div6" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
	
	<div class="row">
		<div class="col-md-12 text-center">
			<h1>コントロールとダッシュボードのデモ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div7" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
	
	<div class="row">
		<div class="col-md-12 text-center">
			<h1>コントロールとダッシュボードのデモ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div8" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
</div>

<!-- Google api JavaScript -->
<script src="https://www.google.com/jsapi"></script>

<!-- Jquery Japan Map -->
<script
	src="${pageContext.servletContext.contextPath}/resources/vendor/jquery-japan-map/jquery-japan-map.min.js"></script>

<!--  Custom google js -->
<script
	src="${pageContext.servletContext.contextPath}/resources/js/google_chart.js"></script>