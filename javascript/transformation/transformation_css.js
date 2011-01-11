CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);

			var webKitTransformationLabel = new YK.Label("");
			webKitTransformationLabel.setSelectable(true);

			var mozillaTransformationLabel = new YK.Label("");
			mozillaTransformationLabel.setSelectable(true);

			var operaTransformationLabel = new YK.Label("");
			operaTransformationLabel.setSelectable(true);

			var msTransformationLabel = new YK.Label("");
			msTransformationLabel.setSelectable(true);

			var transformationLabel = new YK.Label("");
			transformationLabel.setSelectable(true);

		vBox.appendChild(webKitTransformationLabel, {"expand": false, "fill": false});
		vBox.appendChild(mozillaTransformationLabel, {"expand": false, "fill": false});
		vBox.appendChild(operaTransformationLabel, {"expand": false, "fill": false});
		vBox.appendChild(msTransformationLabel, {"expand": false, "fill": false});
		vBox.appendChild(transformationLabel, {"expand": false, "fill": false});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	YK.Event.addPublicListener(this, "csscodechanged_transformation", function(transform){
		webKitTransformationLabel.setText("-webkit-transform: " + transform + ";");
		mozillaTransformationLabel.setText("-moz-transform: " + transform + ";");
		operaTransformationLabel.setText("-o-transform: " + transform + ";");
		msTransformationLabel.setText("-ms-transform: " + transform + ";");
		transformationLabel.setText("transform: " + transform + ";");
		container.refresh();
	});

	return container;
};
