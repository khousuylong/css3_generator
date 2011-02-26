CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBoxWrapper = new YK.Container();
		vBoxWrapper.getNode().className += " code_wrapper_dark";
		vBoxWrapper.resetMinWidth(500);
		vBoxWrapper.resetMinHeight(100);
			var vBox = new YK.VBoxFactory(false, 5);

			var cssCodeMoz = new YK.Label("");
			cssCodeMoz.setSelectable(true);
			var cssCodeWebkit = new YK.Label("");
			cssCodeWebkit.setSelectable(true);


			YK.Event.addPublicListener(this, "csscodechanged_border_image", function(cssCode){
				cssCodeMoz.setText("-moz-border-image: " + cssCode);
				cssCodeWebkit.setText("-webkit-border-image: " + cssCode);
				container.refresh();
				vBoxWrapper.refresh();
			});

			vBox.appendChild(cssCodeMoz, {"expand": false, "fill": false});
			vBox.appendChild(cssCodeWebkit, {"expand": false, "fill": false});
		vBoxWrapper.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	container.appendChild(vBoxWrapper, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	return container;
};
