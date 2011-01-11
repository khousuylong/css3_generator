CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);

			var cssCodeTransitionLabel = new YK.Label("");
			cssCodeTransitionLabel.setSelectable(true);

		vBox.appendChild(cssCodeTransitionLabel, {"expand": false, "fill": false});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	YK.Event.addPublicListener(this, "csscodechanged_transition", function(transitionProperties){
		cssCodeTransitionLabel.setText("-webkit-transition: " + transitionProperties + ";");
		container.refresh();
	});

	return container;
};
