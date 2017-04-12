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
	min-height: 450px;
}

div.inline {
	float: left;
}
</style>



<div class="container body-container">
	<div class="row">
		<div class="col-md-12 text-center">
			<h1>縦棒グラフ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div1" class="chart"></div>
		</div>
	</div>

	<hr />
	<div class="row">
		<div class="col-md-12 text-center">
			<h1>面グラフ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div2" class="chart"></div>
		</div>
	</div>

	<hr />
	<div class="row">
		<div class="col-md-12 text-center">
			<h1>インタラクティブグラフ</h1>
		</div>
		<div id="map-container"></div>
		<div id="chart_div3" class="chart"></div>
	</div>

	<div class="row"></div>
</div>

<script
	src="${pageContext.servletContext.contextPath}/resources/vendor/d3js/d3.min.js"></script>
<script
	src="${pageContext.servletContext.contextPath}/resources/js/d3js.js"></script>