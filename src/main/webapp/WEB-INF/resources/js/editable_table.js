document.addEventListener("DOMContentLoaded", function() {
	// =================== input (data) =======================
	var dataObject = [ {
			shop : 'A店舗',
			type : '予定',
			month1 : 3,
			month2 : 3,
			month3 : 1,
			rate : 1,  
			lack : 0
		}, {
			shop : 'A店舗',
			type : '実績',
			month1 : 2,
			month2 : 0,
			month3 : 0,
			editType : '一括',
			rate : 1,  
			lack : 0
		}, {
			shop : 'B店舗',
			type : '予定',
			month1 : 1,
			month2 : 1,
			month3 : 0,
			editType : '一括',
			rate : 0.7,  
			lack : 2
		}, {
			shop : 'B店舗',
			type : '実績',
			month1 : 1,
			month2 : 0,
			month3 : 0,
			editType : '一括',
			rate : 0.7,  
			lack : 2
		}, {
			shop : 'C店舗',
			type : '予定',
			month1 : 3,
			month2 : 1,
			month3 : 2,
			editType : '一括',
			rate : 0.5,  
			lack : 8
		}, {
			shop : 'C店舗',
			type : '実績',
			month1 : 2,
			month2 : 0,
			month3 : 1,
			editType : '一括',
			rate : 0.5,  
			lack : 8
		}
	];
	
	// input (header)
	var colHeaders = [ '店舗名','', '2017/1','2017/2','2017/3','成功率', '不足数' ];
	
	// ========== define function (for formating) ==============================
	function actualColorRenderer(instance, td, row, col, prop, value, cellProperties) {
		Handsontable.renderers.TextRenderer.apply(this, arguments);
		td.style.background = '#D8E4BC';
	};
	
	function lackColorRenderer(instance, td, row, col, prop, value,	cellProperties) {
		console.log("call lackColorRenderer()");
		Handsontable.renderers.TextRenderer.apply(this, arguments);
		if (!value || value !== '') {
			if (parseInt(value, 10) === 1) {
				td.style.background = '#C4D79B';
			}else if (parseInt(value, 10) === 2) {
				td.style.background = '#EBF1DE';
			}else if (parseInt(value, 10) === 3) {
				td.style.background = '#FCD5B4';
			}else if (parseInt(value, 10) === 4) {
				td.style.background = '#E6B8B7';
			}else if (parseInt(value, 10) >= 5) {
				td.style.background = '#DA9694';
			}
		} 
	};
	
	function getMergeArray(){
		console.log("call getMergeArray()");
		var colz = colHeaders.length;
		var arr = [];
		for (var i=0; i< dataObject.length ; i++){
			if(i %2 === 0){
				arr.push({row: i, col: 0, rowspan: 2, colspan: 1});
				arr.push({row: i, col: colz-1, rowspan: 2, colspan: 1});
				arr.push({row: i, col: colz-2, rowspan: 2, colspan: 1});
			}
		};
		return arr;
	};
	
	function getAlignArray(){
		console.log("call getAlignArray()");
		var arr =[], i, j;
		var colz = colHeaders.length;
		var rowz = dataObject.length;
		for (i=0; i< rowz; i++){
			arr.push({row: i, col: colz-1, className: "htCenter htMiddle"});
			arr.push({row: i, col: colz-2, className: "htCenter htMiddle"});
			arr.push({row: i, col: 0, className: "htLeft htMiddle"});
		}
		return arr;
	};
	
	// =================== define setting (option) =================
	var setting = {
		data : dataObject,
		columns : [ {
			data : 'shop',
			type : 'text',
			editor : false  // still can copy & paste
		},{
			data : 'type',
			type : 'text',
			editor : false
		}, {
			data : 'month1',
			type : 'text',
			editor : false
		}, {
			data : 'month2',
			type : 'text',
			editor : false
		}, {
			data : 'month3',
			type : 'text',
			editor : false
		}, 
		{
			data : 'rate',
			type : 'numeric',
			format : '%',
			editor : false
		},
		{
			data : 'lack',
			type : 'numeric',
		} ],
		colHeaders: true,
		colHeaders : colHeaders,
		// contextMenu: true,
		
		cells : function(row, col, prop) {
			var colz = colHeaders.length;
			var cellProperties = {};
			// All row is readOnly. Difference with editor: false
			// cellProperties.readOnly = true;  
			
			if((row +1) %2 == 0 && col >=2 && col <=colz-3){
				cellProperties.renderer = actualColorRenderer;  // call everytime you interactive
			}
			if (col === colz-1){
				cellProperties.renderer = lackColorRenderer; 
			}
			return cellProperties;
		},
		// Merge cell
		mergeCells: getMergeArray(),	// call 1 time when ready
		
		// align cell
		cell: getAlignArray(),
	};

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// create table
	var container = document.getElementById('table_div1');
	var hot = new Handsontable(container, setting);

	//========== DUMMY FUNCTION ========
	function bindDumpButton() {
		if (typeof Handsontable === "undefined") {
			return;
		}

		Handsontable.Dom.addEvent(document.body, 'click', function(e) {

			var element = e.target || e.srcElement;

			if (element.nodeName == "BUTTON" && element.name == 'dump') {
				var name = element.getAttribute('data-dump');
				var instance = element.getAttribute('data-instance');
				var hot = window[instance];
				console.log('data of ' + name, hot.getData());
			}
		});
	}
	bindDumpButton();
});
