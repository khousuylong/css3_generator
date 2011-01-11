CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);
			var cssCodeLabel = new YK.Label("");
			cssCodeLabel.setSelectable(true);

		vBox.appendChild(cssCodeLabel, {"expand": false, "fill": false});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	YK.Event.addPublicListener(this, "csscodechanged_textshadow", function(cssCode){
		cssCodeLabel.setText("text-shadow: " + cssCode + ";");
		container.refresh();
	});

	return container;
};
