CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);
			var cssCodeLabel = new YK.Label("CSS Code Here");
			cssCodeLabel.setSelectable(true);
		vBox.appendChild(cssCodeLabel, {"expand": true, "fill": true});

		YK.Event.addPublicListener(this, "csscodechanged", function(cssCode){
			cssCodeLabel.setText(cssCode);
			container.refresh();
		});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	return container;
};
