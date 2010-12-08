CSS3.cssCode = function(){
	var vBox = new YK.VBoxFactory(false);

		var cssCodeOutlineLabel = new YK.Label("Code Here");
		cssCodeOutlineLabel.setSelectable(true);

		var cssCodeOffsetLabel = new YK.Label("");
		cssCodeOffsetLabel.setSelectable(true);

	vBox.appendChild(cssCodeOutlineLabel, {"expand": false, "fill": false});
	vBox.appendChild(cssCodeOffsetLabel, {"expand": false, "fill": false});

	YK.Event.addPublicListener(this, "csscodechanged_outline", function(outline, outlineOffset){
		cssCodeOutlineLabel.setText(outline);
		cssCodeOffsetLabel.setText(outlineOffset);
	});

	return vBox;
};
