CSS3.cssCode = function(){
	var vBox = new YK.VBoxFactory(false);

	var cssCodeLabelMozilla = new YK.Label("");
	cssCodeLabelMozilla.setSelectable(true);

	var cssCodeLabelWebkit = new YK.Label("");
	cssCodeLabelWebkit.setSelectable(true);


	YK.Event.addPublicListener(this, "csscodechanged_border_radius", function(cssCode){
		if( cssCode.hasOwnProperty("borderRadiusTopLeft") ){
			var cssCodeLabelTopLeftMozilla = new YK.Label("-moz-border-radius-topleft: " + cssCode['borderRadiusTopLeft'] + "px");
			var cssCodeLabelTopRightMozilla = new YK.Label("-moz-border-radius-topright: " + cssCode['borderRadiusTopRight'] + "px");
			var cssCodeLabelBottomLeftMozilla = new YK.Label("-moz-border-radius-bottomleft: " + cssCode['borderRadiusBottomLeft'] + "px");
			var cssCodeLabelBottomRightMozilla = new YK.Label("-moz-border-radius-bottomright: " + cssCode['borderRadiusBottomRight'] + "px");

			var cssCodeLabelTopLeft = new YK.Label("border-top-left-radius: " + cssCode['borderRadiusTopLeft'] + "px");
			var cssCodeLabelTopRight = new YK.Label("border-top-right-radius: " + cssCode['borderRadiusTopRight'] + "px");
			var cssCodeLabelBottomLeft = new YK.Label("border-bottom-right-radius: " + cssCode['borderRadiusBottomLeft'] + "px");
			var cssCodeLabelBottomRight = new YK.Label("border-bottom-left-radius: " + cssCode['borderRadiusBottomRight'] + "px");
			
			vBox.appendChild(cssCodeLabelTopLeftMozilla, {"expand": false, "fill": false});
			vBox.appendChild(cssCodeLabelTopRightMozilla, {"expand": false, "fill": false});
			vBox.appendChild(cssCodeLabelBottomLeftMozilla, {"expand": false, "fill": false});
			vBox.appendChild(cssCodeLabelBottomRightMozilla, {"expand": false, "fill": false});

			vBox.appendChild(cssCodeLabelTopLeft, {"expand": false, "fill": false});
			vBox.appendChild(cssCodeLabelTopRight, {"expand": false, "fill": false});
			vBox.appendChild(cssCodeLabelBottomLeft, {"expand": false, "fill": false});
			vBox.appendChild(cssCodeLabelBottomRight, {"expand": false, "fill": false});

		}else{
			cssCodeLabelMozilla.setText("-moz-border-radius: " + cssCode['borderRadius'] + "px");
			cssCodeLabelWebkit.setText("border-radius: " + cssCode['borderRadius'] + "px");

		}
	});
	vBox.appendChild(cssCodeLabelMozilla, {"expand": false, "fill": false});
	vBox.appendChild(cssCodeLabelWebkit, {"expand": false, "fill": false});

	return vBox;
};
