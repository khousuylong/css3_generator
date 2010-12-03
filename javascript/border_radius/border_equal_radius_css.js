CSS3.cssCode = function(){
	var vBox = new YK.VBoxFactory(false);

	var cssCodeLabelMozilla = new YK.Label("");
	cssCodeLabelMozilla.setSelectable(true);

	var cssCodeLabelWebkit = new YK.Label("");
	cssCodeLabelWebkit.setSelectable(true);

	YK.Event.addPublicListener(this, "csscodechanged_border_radius", function(cssCode){
			cssCodeLabelMozilla.setText("-moz-border-radius: " + cssCode['borderRadius'] + "px");
			cssCodeLabelWebkit.setText("border-radius: " + cssCode['borderRadius'] + "px");
	});
	vBox.appendChild(cssCodeLabelMozilla, {"expand": false, "fill": false});
	vBox.appendChild(cssCodeLabelWebkit, {"expand": false, "fill": false});

	return vBox;
};
