CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);

			var cssCodeTransitionLabel = new YK.Label("");
			cssCodeTransitionLabel.setSelectable(true);

		vBox.appendChild(cssCodeTransitionLabel, {"expand": false, "fill": false});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	YK.Event.addPublicListener(this, "csscodechanged_word_wrap", function(wordWrapProperty){
		cssCodeTransitionLabel.setText("word-wrap: " + wordWrapProperty );
		container.refresh();
	});

	return container;
};
