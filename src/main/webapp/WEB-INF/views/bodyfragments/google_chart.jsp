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
		<div class="col-md-12">
			<h3><a name="column-chart">縦棒グラフのデモ</a></h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div1" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />

	<div class="row">
		<div class="col-md-12">
			<h3><a name="combo-chart">組合せのデモ</a></h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div2" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />

	<div class="row">
		<div class="col-md-12">
			<h3><a name="stacked-chart">積み立てグラフのデモ</a></h3>
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
		<div class="col-md-12">
			<h3>マップのデモ</h3>
		</div>
		<div id="map-container"></div>
		<div id="chart_div4" class="chart"></div>
	</div>
	<div class="row"></div>
	<hr/>
	-->
	<div class="row">
		<div class="col-md-12">
			<h3><a name="map">マップのデモ</a></h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div5"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
	
	<div class="row">
		<div class="col-md-12">
			<h3><a name="dashed-line">グラフの一部を「破線」等で表現できるか　＃１？</a></h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div6" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
	
	<div class="row">
		<div class="col-md-12">
			<h3>グラフの一部を「破線」等で表現できるか　＃２？</h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div7" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
	
	<div class="row">
		<div class="col-md-12">
			<h3><a name="zoom-and-pan">ズーム可能性のデモ　＃１：スクロール</a></h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div8" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
	
	<div class="row">
		<div class="col-md-12">
			<h3>ズーム可能性のデモ　＃２：ドラッグ　（カスタムスタイル有り）</h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div9" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
	
	<div class="row">
		<div class="col-md-12">
			<h3>ズーム可能性のデモ　＃３：　Annotation Chart</h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div10" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	
	
	<div class="row">
		<div class="col-md-12">
			<h3>ズーム可能性のデモ　＃３：　Annotation Chart (6000 point)</h3>
		</div>
		<div class="clearfix"></div>
		<div class="col-md-12">
			<div id="chart_div11" class="chart"></div>
		</div>
	</div>
	<div class="row"></div>
	<hr />
	<hr />
</div>

<!-- Google api JavaScript -->
<script src="https://www.google.com/jsapi"></script>

<!-- Jquery Japan Map -->
<script
	src="${pageContext.servletContext.contextPath}/resources/vendor/jquery-japan-map/jquery-japan-map.min.js"></script>

<!--  Custom google js -->
<script
	src="${pageContext.servletContext.contextPath}/resources/js/google_chart_big_data.js"></script>
<script
	src="${pageContext.servletContext.contextPath}/resources/js/google_chart.js"></script>
