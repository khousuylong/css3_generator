CSS3.cssCode = function(){
	var vBox = new YK.VBoxFactory(false);
		var cssCodeLabel = new YK.Label("CSS Code Here");
		cssCodeLabel.setSelectable(true);

	vBox.appendChild(cssCodeLabel, {"expand": false, "fill": false});

	YK.Event.addPublicListener(this, "csscodechanged_textshadow", function(cssCode){
		cssCodeLabel.setText("text-shadow:" + cssCode);
	});

	return vBox;
};
