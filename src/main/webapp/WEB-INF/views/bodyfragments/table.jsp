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
	margin: 120px 120px 120px 120px ;	
}

.chart {
	width: 100%;
	min-height: 400px;
}

div.inline {
	float: left;
}

</style>

<!-- handsontable vendor lib -->
<script src="https://docs.handsontable.com/0.15.1/bower_components/handsontable/dist/handsontable.full.js"></script>
<link type="text/css" rel="stylesheet" href="https://docs.handsontable.com/0.15.1/bower_components/handsontable/dist/handsontable.full.min.css">


<div class="body-container">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4>（本部）分析TOP</h4>
		</div>
		<div class="panel-body">
			<div id="table_div1"></div>
		</div>
		<div class="panel-footer">
			<p>店舗毎に採用状況を確認できる</p>
			<p>極端に取れていない店舗がないか？を確認し、対策を検討する
			</p>
		</div>
	</div>
	
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4>(店舗）採用状況詳細</h4>
		</div>
		<div class="panel-body">
			<div id="table_div2"></div>
		</div>
		<div class="panel-footer">
			<p>NOTE ※過去３ヶ月＋未来１２ヶ月分を表示</p>
		</div>
	</div>
	
</div>

<!-- Google api JavaScript -->
<script src="https://www.google.com/jsapi"></script>

<!-- custom js -->
<script
	src="${pageContext.servletContext.contextPath}/resources/js/editable_table.js"></script>

