document.addEventListener("DOMContentLoaded", function() {

	var data = [ [ '', 'Kia', 'Nissan', 'Toyota', 'Honda' ],
			[ '2014', -5, '', 12, 13 ], 
			[ '2015', '', -11, 14, 13 ],
			[ '2016', '', 15, -12, 'readOnly' ] ];
	var container, hot1;

	function firstRowRenderer(instance, td, row, col, prop, value,
			cellProperties) {
		Handsontable.renderers.TextRenderer.apply(this, arguments);
		td.style.fontWeight = 'bold';
		td.style.color = 'green';
		td.style.background = '#CEC';
	}

	function negativeValueRenderer(instance, td, row, col, prop, value,
			cellProperties) {
		Handsontable.renderers.TextRenderer.apply(this, arguments);

		// if row contains negative number
		if (parseInt(value, 10) < 0) {
			// add class "negative"
			td.style.color = '#f00';
		}

		if (!value || value === '') {
			td.style.background = '#EEE';
		} else {
			if (value === 'Nissan') {
				td.style.fontStyle = 'italic';
			}
			td.style.background = '';
		}
	}
	// maps function to lookup string
	Handsontable.renderers.registerRenderer('negativeValueRenderer',
			negativeValueRenderer);

	container = document.getElementById('table_div1');
	hot1 = new Handsontable(container, {
		data : data,
		afterSelection : function(row, col, row2, col2) {
			var meta = this.getCellMeta(row2, col2);

			if (meta.readOnly) {
				this.updateSettings({
					fillHandle : false
				});
			} else {
				this.updateSettings({
					fillHandle : true
				});
			}
		},
		cells : function(row, col, prop) {
			var cellProperties = {};

			if (row === 0 || this.instance.getData()[row][col] === 'readOnly') {
				cellProperties.readOnly = true; // make cell read-only if it is first row or the text reads 'readOnly'
			}
			if (row === 0) {
				cellProperties.renderer = firstRowRenderer; // uses function directly
			} else {
				cellProperties.renderer = "negativeValueRenderer"; // uses lookup map
			}

			return cellProperties;
		}
	});

	
	//========== DUMMY ====================================================
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