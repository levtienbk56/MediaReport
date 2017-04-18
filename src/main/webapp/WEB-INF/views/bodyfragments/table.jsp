<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<style>
body {
	background-image:
		url("https://dev5.recop.jp/recruiter/images/recop/bodyBg.gif");
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

.body-container {
	width: 968px;
	margin: auto ;	
	margin-top : 120px;
	display: block;
    clear: both;
}

.chart {
	width: 100%;
	min-height: 400px;
}

div.inline {
	float: left;
}

div.table-note {
	border-radius: 25px;
    border: 2px dashed #0000cc;
    margin-top: 15px;
    padding: 10px;
}

.note-sign{
	color:#FFFF00;
	font-size: 2em;
	float:left;
}

</style>

<!-- handsontable vendor lib -->
<script src="https://docs.handsontable.com/0.31.2/bower_components/handsontable/dist/handsontable.full.js"></script>
<link type="text/css" rel="stylesheet" href="https://docs.handsontable.com/0.31.2/bower_components/handsontable/dist/handsontable.full.min.css">

<div class="body-container">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4>（本部）分析TOP</h4>
		</div>
		<div class="panel-body">
			<div id="table_div1"></div>
			<div class="table-note" id="table_note1">
				<span class="glyphicon glyphicon-exclamation-sign note-sign" ></span>
				<span>「０９時～１２時」の時間帯の採用改善が必要です。 この時間帯に強い媒体は、△△△△です</span>					
			</div>
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
			<div class="table-note" id="table_note2">
				<span class="glyphicon glyphicon-exclamation-sign note-sign" ></span>
				<span>「０９時～１２時」の時間帯の採用改善が必要です。 この時間帯に強い媒体は、△△△△です</span>	
			</div>
		</div>
		<div class="panel-footer">
			<p>NOTE ※過去３ヶ月＋未来１２ヶ月分を表示</p>
		</div>
	</div>
	
	<!-- nav-tab -->
	<!-- 
	<div class="panel panel-primary">
		<div class="panel-heading">
			<ul class="nav nav-tabs nav-tabs-table" >
			    <li class="active"><a data-toggle="tab" href="#home" style="color:black;">採用予実表</a></li>
			    <li><a data-toggle="tab" href="#menu1" style="color:black;">店舗別　採用予実</a></li>
			    <li><a data-toggle="tab" href="#menu2" style="color:black;">職種別　採用予実</a></li>
			    <li><a data-toggle="tab" href="#menu3" style="color:black;">シフト別　採用予実</a></li>
			</ul>
		</div>
		<div class="panel-body">
			<div class="tab-content">
				<div id="home" class="tab-pane fade in active">
			      <div id="table_div1"></div>
			    </div>
			    <div id="menu1" class="tab-pane fade">
			      
			    </div>
			    <div id="menu2" class="tab-pane fade">
			      <div id="table_div2"></div>
			    </div>
			    <div id="menu3" class="tab-pane fade">
			      <h3>Menu 3</h3>
			      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
			    </div>
			</div>
		</div>
		<div class="panel-footer">
			<p>店舗毎に採用状況を確認できる</p>
			<p>極端に取れていない店舗がないか？を確認し、対策を検討する
			</p>
		</div>
	</div>
	 -->
</div>

<!-- Google api JavaScript -->
<script src="https://www.google.com/jsapi"></script>

<!-- custom js -->
<script
	src="${pageContext.servletContext.contextPath}/resources/js/editable_table.js"></script>

