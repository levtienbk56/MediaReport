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
	margin-top: 120px;
}

.chart {
	width: 100%;
	min-height: 800px;
}

div.inline {
	float: left;
}
</style>


<!-- Body -->
<div class="container body-container">
	<div class="row">
		<h3><a id="chart_top1">（本部）分析TOP</a></h3>
		<div class="col-md-12">
			<div id="chart_div1" class="chart"></div>
		</div>
	</div>
	
	<hr />
	<div class="row">
		<h3><a id="table_top1">（本部）コスト登録</a></h3><br/>
		<div class="col-md-12">
			<div id="table_div1"></div>
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