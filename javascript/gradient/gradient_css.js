CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);
			var cssCodeLabel = new YK.Label("");
			cssCodeLabel.setSelectable(true);
		vBox.appendChild(cssCodeLabel, {"expand": true, "fill": true});

		YK.Event.addPublicListener(this, "csscodechanged", function(cssCode){
			cssCodeLabel.setText("background-image: " + cssCode + ";");
			container.refresh();
		});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	return container;
};
