CSS3.cssCode = function(){
	var vBox = new YK.VBoxFactory(false);
		var cssCodeLabel = new YK.Label("CSS Code Here");
		cssCodeLabel.setSelectable(true);
	vBox.appendChild(cssCodeLabel, {"expand": true, "fill": true});

	YK.Event.addPublicListener(this, "csscodechanged", function(cssCode){
		cssCodeLabel.setText(cssCode);
	});

	return vBox;
};
