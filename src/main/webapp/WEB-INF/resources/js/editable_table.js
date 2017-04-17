document.addEventListener("DOMContentLoaded", function() {
	// =================== input (data) =======================
	var dataObject = [ {shop : 'A店舗', type : '予定', month01 : 3, month02 : 3, month03 : 1, month04 : 1, month05 : 0, month06 : 0, month07 : 0, month08 : 2, month09 : 0, month10 : 0, month11 : 0, month12 : 0, sumary : 10, rate : 0.2, lack : 8},
	                   {shop : 'A店舗', type : '実績', month01 : 2, month02 : 0, month03 : 0, month04 : 0, month05 : 0, month06 : 0, month07 : 0, month08 : 0, month09 : 0, month10 : 0, month11 : 0, month12 : 0, sumary : 2, rate : 0.2, lack : 8},
	                   {shop : 'B店舗', type : '予定', month01 : 1, month02 : 0, month03 : 0, month04 : 0, month05 : 0, month06 : 0, month07 : 0, month08 : 0, month09 : 0, month10 : 0, month11 : 0, month12 : 0, sumary : 1, rate : 1.0, lack : 0},
	                   {shop : 'B店舗', type : '実績', month01 : 1, month02 : 0, month03 : 0, month04 : 0, month05 : 0, month06 : 0, month07 : 0, month08 : 0, month09 : 0, month10 : 0, month11 : 0, month12 : 0, sumary : 1, rate : 1.0, lack : 0},
	                   {shop : 'D店舗', type : '予定', month01 : 3, month02 : 0, month03 : 0, month04 : 0, month05 : 0, month06 : 0, month07 : 0, month08 : 0, month09 : 0, month10 : 0, month11 : 0, month12 : 0, sumary : 3, rate : 1.33, lack : 0},
	                   {shop : 'D店舗', type : '実績', month01 : 4, month02 : 0, month03 : 0, month04 : 0, month05 : 0, month06 : 0, month07 : 0, month08 : 0, month09 : 0, month10 : 0, month11 : 0, month12 : 0, sumary : 4, rate : 1.33, lack : 0},
	                   {shop : 'E店舗', type : '予定', month01 : 2, month02 : 0, month03 : 0, month04 : 0, month05 : 0, month06 : 0, month07 : 0, month08 : 0, month09 : 0, month10 : 0, month11 : 0, month12 : 0, sumary : 2, rate : 0.5, lack : 1},
	                   {shop : 'E店舗', type : '実績', month01 : 0, month02 : 0, month03 : 0, month04 : 0, month05 : 0, month06 : 0, month07 : 0, month08 : 0, month09 : 0, month10 : 0, month11 : 0, month12 : 0, sumary : 1, rate : 0.5, lack : 1
	                  	}];
	// input (header)
	var colHeaders = [ '店舗名', '', '2016年4月', '2016年5月', '2016年6月', '2016年7月', '2016年8月', '2016年9月', '2016年10月', '2016年11月', '2016年12月', '2017年1月', '2016年2月',
			'2016年3月', 'サマリ', '成功率', '不足数' ];

	/* ========== define function (for formating) ============================== */

	// set color base on lack number
	function styleRenderer(instance, td, row, col, prop, value, cellProperties) {
		Handsontable.renderers.NumericRenderer.apply(this, arguments);

		console.log("call lackColorRenderer()");
		console.log(instance.getDataAtCell(row, col));
		var colz = colHeaders.length;
		
		// set color base on lack's level
		if (col === colz - 1) {
			if (!value || value !== '') {
				if (parseInt(value, 10) === 1) {
					td.style.background = '#C4D79B';
				} else if (parseInt(value, 10) === 2) {
					td.style.background = '#EBF1DE';
				} else if (parseInt(value, 10) === 3) {
					td.style.background = '#FCD5B4';
				} else if (parseInt(value, 10) === 4) {
					td.style.background = '#E6B8B7';
				} else if (parseInt(value, 10) >= 5) {
					td.style.background = '#DA9694';
				}
			}
			;
		}
		
		// set solid color, only actual row
		if ((row + 1) % 2 === 0 && col >= 1 && col <= (colz - 3)) {
			console.log(row + ", " + col + ": " + colz);
			td.style.background = '#D8E4BC';
		}
		
		// set bold style
		if (col === colz - 1 || col === colz - 2) {
			td.style.fontWeight = 'bold';
			td.style.textAlign = "center";
		}
	}

	function textStyle(instance, td, row, col, prop, value, cellProperties) {
		Handsontable.renderers.TextRenderer.apply(this, arguments);
		// td.style.textAlign="left"
		// td.style.paddingLeft="1%";
		// td.style.fontWeight = 'bold';
		// td.style.fontSize="10px";
		// td.style.fontFamily= 'verdana';
		// td.style.background = '#FCFFFA';
		// td.style.color = '#0B610B';

	}

	// define merge cell
	function getMergeArray() {
		console.log("call getMergeArray()");
		var colz = colHeaders.length;
		var arr = [];
		for (var i = 0; i < dataObject.length; i++) {
			if (i % 2 === 0) {
				arr.push({
					row : i,
					col : 0,
					rowspan : 2,
					colspan : 1
				});
				arr.push({
					row : i,
					col : colz - 1,
					rowspan : 2,
					colspan : 1
				});
				arr.push({
					row : i,
					col : colz - 2,
					rowspan : 2,
					colspan : 1
				});
			}
		}
		;
		return arr;
	}

	// define alignment cell
	function getAlignArray() {
		console.log("call getAlignArray()");
		var arr = [], i, j;
		var colz = colHeaders.length;
		var rowz = dataObject.length;
		for (i = 0; i < rowz; i++) {
			arr.push({
				row : i,
				col : colz - 1,
				className : "htCenter htMiddle"
			});
			arr.push({
				row : i,
				col : colz - 2,
				className : "htCenter htMiddle"
			});
			arr.push({
				row : i,
				col : 0,
				className : "htLeft htMiddle"
			});
		}
		return arr;
	}

	// =================== define setting (option) =================
	var setting = {
		data : dataObject,
		columns : [ {
			data : 'shop',
			type : 'text',
			editor : false
		// still can copy & paste
		}, {
			data : 'type',
			type : 'text',
		}, {
			data : 'month01',
			type : 'numeric',
		}, {
			data : 'month02',
			type : 'numeric',
		}, {
			data : 'month03',
			type : 'numeric',
		}, {
			data : 'month04',
			type : 'numeric',
		}, {
			data : 'month05',
			type : 'numeric',
		}, {
			data : 'month06',
			type : 'numeric',
		}, {
			data : 'month07',
			type : 'numeric',
		}, {
			data : 'month08',
			type : 'numeric',
		}, {
			data : 'month09',
			type : 'numeric',
		}, {
			data : 'month10',
			type : 'numeric',
		}, {
			data : 'month11',
			type : 'numeric',
		}, {
			data : 'month12',
			type : 'numeric',
		}, {
			data : 'sumary',
			type : 'numeric',
		}, {
			data : 'rate',
			type : 'numeric',
			format : '%',
			editor : false
		}, {
			data : 'lack',
			type : 'numeric',
		} ],
		colHeaders : true,
		colHeaders : colHeaders,
		// contextMenu: true,

		cells : function(row, col, prop) {
			var colz = colHeaders.length;
			var cellProperties = {};
			// All row is readOnly. Difference with editor: false
			cellProperties.readOnly = true;
			if(col > 1){
				cellProperties.renderer = styleRenderer;
			}
			return cellProperties;
		},
		// Merge cell
		mergeCells : getMergeArray(), // call 1 time when ready
		// align cell
		cell : getAlignArray(), // call 1 time when ready
	};

	// create table
	var container = document.getElementById('table_div1');
	var hot = new Handsontable(container, setting);





	// ========== DUMMY FUNCTION ========
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
