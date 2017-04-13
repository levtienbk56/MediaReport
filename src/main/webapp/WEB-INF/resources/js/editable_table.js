document.addEventListener("DOMContentLoaded", function() {
	var dataObject = [ {
		costName : '2016 通年施策（初回キャンペーン適用）',
		editType : '一括',
		dateFrom : '2016/07/01',
		dateTo : '2016/12/23',
		amount : 11000000
	}, {
		costName : '年末採用強化施策 2016 3Q',
		editType : '一括',
		dateFrom : '2016/10/01',
		dateTo : '2016/12/13',
		amount : 600000
	}, {
		costName : '2017 GW施策',
		editType : '一括',
		dateFrom : '2016/07/23',
		dateTo : '2016/07/24',
		amount : 0
	}, ];

	var container = document.getElementById('table_div1');
	var setting = {
		data : dataObject,
		columns : [ {
			data : 'costName',
			type : 'text',
			editor : false
		}, {
			data : 'editType',
			type : 'dropdown',
			source : [ '一括', '月別に登録' ]
		}, {
			data : 'dateFrom',
			type : 'date',
			dateFormat : 'YYYY/MM/DD',
		}, {
			data : 'dateTo',
			type : 'date',
			dateFormat : 'YYYY/MM/DD'
		}, {
			data : 'amount',
			type : 'numeric'
		} ],
		colHeaders : [ 'コスト名', 'コストタイプ', '開始年月', '終了年月', '金額' ]
	};

	var hot = new Handsontable(container, setting);

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
