CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);

			var cssCodeOutlineLabel = new YK.Label("");
			cssCodeOutlineLabel.setSelectable(true);

			var cssCodeOffsetLabel = new YK.Label("");
			cssCodeOffsetLabel.setSelectable(true);

		vBox.appendChild(cssCodeOutlineLabel, {"expand": false, "fill": false});
		vBox.appendChild(cssCodeOffsetLabel, {"expand": false, "fill": false});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	YK.Event.addPublicListener(this, "csscodechanged_outline", function(outline, outlineOffset){
		cssCodeOutlineLabel.setText("outline: " + outline + ";");
		cssCodeOffsetLabel.setText("outlineOffset: " + outlineOffset + ";");
		container.refresh();
	});

	return container;
};
