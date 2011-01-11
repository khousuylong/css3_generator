CSS3.cssCode = function(){
	var container = new YK.Container();	
		var vBox = new YK.VBoxFactory(false);
			var mozColLabel = new YK.Label("");
			mozColLabel.setSelectable(true);

			var mozSpaceLabel = new YK.Label("");
			mozSpaceLabel.setSelectable(true);

			var webkitColLabel = new YK.Label("");
			webkitColLabel.setSelectable(true);

			var webkitSpaceLabel = new YK.Label("");
			webkitSpaceLabel.setSelectable(true);

			var colLabel = new YK.Label("");
			colLabel.setSelectable(true);

			var spaceLabel = new YK.Label("");
			spaceLabel.setSelectable(true);

		vBox.appendChild(mozColLabel, {"expand": false, "fill": false});
		vBox.appendChild(mozSpaceLabel, {"expand": false, "fill": false});
		vBox.appendChild(webkitColLabel, {"expand": false, "fill": false});
		vBox.appendChild(webkitSpaceLabel, {"expand": false, "fill": false});
		vBox.appendChild(colLabel, {"expand": false, "fill": false});
		vBox.appendChild(spaceLabel, {"expand": false, "fill": false});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	
	YK.Event.addPublicListener(this, "csscodechanged_multiple_columns", function(cssCode){
		mozColLabel.setText("-moz-column-count: " + cssCode['columns'] + ";");
		mozSpaceLabel.setText("-moz-column-gap: " + cssCode['space'] + "px;");

		webkitColLabel.setText("-webkit-column-count: " + cssCode['columns'] + ";");
		webkitSpaceLabel.setText("-webkit-column-gap: " + cssCode['space'] + "px;");

		colLabel.setText("column-count: " + cssCode['columns'] + ";");
		spaceLabel.setText("column-gap: " + cssCode['space'] + "px;");
		container.refresh();
	});

	return container;
};
