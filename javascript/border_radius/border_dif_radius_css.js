CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);

		var cssCodeLabelTopLeftMozilla = new YK.Label("");
		cssCodeLabelTopLeftMozilla.setSelectable(true);
		var cssCodeLabelTopRightMozilla = new YK.Label("");
		cssCodeLabelTopRightMozilla.setSelectable(true);
		var cssCodeLabelBottomLeftMozilla = new YK.Label("");
		cssCodeLabelBottomLeftMozilla.setSelectable(true);
		var cssCodeLabelBottomRightMozilla = new YK.Label("");
		cssCodeLabelBottomRightMozilla.setSelectable(true);

		var cssCodeLabelTopLeft = new YK.Label("");
		cssCodeLabelTopLeft.setSelectable(true);
		var cssCodeLabelTopRight = new YK.Label("");
		cssCodeLabelTopRight.setSelectable(true);
		var cssCodeLabelBottomLeft = new YK.Label("");
		cssCodeLabelBottomLeft.setSelectable(true);
		var cssCodeLabelBottomRight = new YK.Label("");
		cssCodeLabelBottomRight.setSelectable(true);

		YK.Event.addPublicListener(this, "csscodechanged_border_radius", function(cssCode){
			cssCodeLabelTopLeftMozilla.setText("-moz-border-radius-topleft: " + cssCode['borderRadiusTopLeft'] + "px;");
			cssCodeLabelTopRightMozilla.setText("-moz-border-radius-topright: " + cssCode['borderRadiusTopRight'] + "px;");
			cssCodeLabelBottomLeftMozilla.setText("-moz-border-radius-bottomleft: " + cssCode['borderRadiusBottomLeft'] + "px;");
			cssCodeLabelBottomRightMozilla.setText("-moz-border-radius-bottomright: " + cssCode['borderRadiusBottomRight'] + "px;");

			cssCodeLabelTopLeft.setText("border-top-left-radius: " + cssCode['borderRadiusTopLeft'] + "px;");
			cssCodeLabelTopRight.setText("border-top-right-radius: " + cssCode['borderRadiusTopRight'] + "px;");
			cssCodeLabelBottomLeft.setText("border-bottom-right-radius: " + cssCode['borderRadiusBottomLeft'] + "px;");
			cssCodeLabelBottomRight.setText("border-bottom-left-radius: " + cssCode['borderRadiusBottomRight'] + "px;");
			container.refresh();
		});

		vBox.appendChild(cssCodeLabelTopLeftMozilla, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeLabelTopRightMozilla, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeLabelBottomLeftMozilla, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeLabelBottomRightMozilla, {"expand": false, "fill": false});

		vBox.appendChild(cssCodeLabelTopLeft, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeLabelTopRight, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeLabelBottomLeft, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeLabelBottomRight, {"expand": false, "fill": false});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	return container;
};
