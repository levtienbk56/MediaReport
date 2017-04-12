var dataObject = [ {
	costName : '2016 通年施策（初回キャンペーン適用）',
	editType : '一括',
	dateFrom : '2016/7/1',
	dateTo : '2016/12/23',
	amount : 11000000
}, {
	costName : '年末採用強化施策 2016 3Q',
	editType : '一括',
	dateFrom : '2016/10/1',
	dateTo : '2016/12/13',
	amount : 600000
}, {
	costName : '2017 GW施策',
	editType : '一括',
	dateFrom : '2016/7/23',
	dateTo : '2016/7/24',
	amount : 0
}, ];

var hotElement = document.querySelector('#table_div1');
var hotElementContainer = hotElement.parentNode;
var hotSettings = {
	data : dataObject,
	columns : [{
		data : 'costName',
		type : 'text',
		editor: false
	}, {
		data : 'editType',
		type: 'dropdown',
        source: ['一括', '月別に登録'],
        callback: function() {
            console.log(arguments);
        }
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
	stretchH : 'all',
	width : 806,
	autoWrapRow : true,
	height : 441,
	maxRows : 22,
	rowHeaders : true,
	colHeaders : ['コスト名', 'コストタイプ', '開始年月', '終了年月', '金額' ]
};

var hot = new Handsontable(hotElement, hotSettings);