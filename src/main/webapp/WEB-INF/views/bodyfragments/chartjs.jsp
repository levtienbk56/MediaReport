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
	min-height: 600px;
}

div.inline {
	float: left;
}
</style>



<div class="container body-container">
	<div class="row">
		<div class="col-md-12">
			<h1>縦棒グラフのデモ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-10 text-center">
			<canvas id="chart1" width="600" height="400"></canvas>
		</div>
	</div>
	<div class="row"></div>
	<hr />

	<div class="row">
		<div class="col-md-12">
			<h1>組合せのデモ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-10 text-center">
			<canvas id="chart2" width="600" height="400"></canvas>
		</div>
	</div>
	<div class="row"></div>
	<hr />

	<div class="row">
		<div class="col-md-12 ">
			<h1>積み立てグラフ</h1>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-10 text-center">
			<canvas id="chart3" width="600" height="400"></canvas>
		</div>
	</div>
	<div class="row"></div>
	<hr />

</div>

<script
	src="${pageContext.servletContext.contextPath}/resources/vendor/chartjs/Chart.min.js"></script>
<script
	src="${pageContext.servletContext.contextPath}/resources/js/chartjs.js"></script>