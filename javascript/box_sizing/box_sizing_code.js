CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);
			var cssCodeLabel = new YK.Label("");
			cssCodeLabel.setSelectable(true);

			var cssCodeLabelMozilla = new YK.Label("");
			cssCodeLabelMozilla.setSelectable(true);

			var cssCodeLabelWebkit = new YK.Label("");
			cssCodeLabelWebkit.setSelectable(true);

		vBox.appendChild(cssCodeLabel, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeLabelMozilla, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeLabelWebkit, {"expand": false, "fill": false});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	YK.Event.addPublicListener(this, "csscodechanged_box_sizing", function(cssCode){
		cssCodeLabel.setText("box-sizing: " + cssCode + ";");
		cssCodeLabelMozilla.setText("-moz-box-sizing: " + cssCode + ";");
		cssCodeLabelWebkit.setText("-webkit-box-sizing: " + cssCode + ";");
		container.refresh();
	});

	return container;
};
