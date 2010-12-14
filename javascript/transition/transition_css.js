CSS3.cssCode = function(){
	var vBox = new YK.VBoxFactory(false);

		var cssCodeTransitionLabel = new YK.Label("Code Here");
		cssCodeTransitionLabel.setSelectable(true);

	vBox.appendChild(cssCodeTransitionLabel, {"expand": false, "fill": false});

	YK.Event.addPublicListener(this, "csscodechanged_transition", function(transitionProperties){
		cssCodeTransitionLabel.setText(transitionProperties);
	});

	return vBox;
};
