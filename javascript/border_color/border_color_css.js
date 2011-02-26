CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);

		var cssCodeWidth = new YK.Label("");
		cssCodeWidth.setSelectable(true);
		var cssCodeLeft = new YK.Label("");
		cssCodeLeft.setSelectable(true);
		var cssCodeRight = new YK.Label("");
		cssCodeRight.setSelectable(true);
		var cssCodeTop = new YK.Label("");
		cssCodeTop.setSelectable(true);
		var cssCodeBottom = new YK.Label("");
		cssCodeBottom.setSelectable(true);


		YK.Event.addPublicListener(this, "csscodechanged_border_color", function(cssCode){
			cssCodeWidth.setText("border: " + cssCode["width"] + "px solid #" + cssCode["left"][0]);
			cssCodeLeft.setText("-moz-border-left-colors: #" + cssCode["left"].join("  #"));
			cssCodeRight.setText("-moz-border-right-colors: #" + cssCode["right"].join("  #"));
			cssCodeTop.setText("-moz-border-top-colors: #" + cssCode["top"].join("  #"));
			cssCodeBottom.setText("-moz-border-bottom-colors: #" + cssCode["bottom"].join("  #"));
			container.refresh();
		});

		vBox.appendChild(cssCodeWidth, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeLeft, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeRight, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeTop, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeBottom, {"expand": false, "fill": false});

	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	return container;
};
