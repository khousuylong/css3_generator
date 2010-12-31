CSS3.cssCode = function(){
	var container = new YK.Container();
		var vBox = new YK.VBoxFactory(false);

			var webKitTransformationLabel = new YK.Label("-webkit-transform: scale() rotate(deg) translate(px, px) skew(deg, deg)");
			webKitTransformationLabel.setSelectable(true);

			var mozillaTransformationLabel = new YK.Label("-moz-transform: scale() rotate(deg) translate(px, px) skew(deg, deg)");
			mozillaTransformationLabel.setSelectable(true);

			var operaTransformationLabel = new YK.Label("-o-transform: scale() rotate(deg) translate(px, px) skew(deg, deg)");
			operaTransformationLabel.setSelectable(true);

			var msTransformationLabel = new YK.Label("-ms-transform: scale() rotate(deg) translate(px, px) skew(deg, deg)");
			msTransformationLabel.setSelectable(true);

			var transformationLabel = new YK.Label("transform: scale() rotate(deg) translate(px, px) skew(deg, deg)");
			transformationLabel.setSelectable(true);

		vBox.appendChild(webKitTransformationLabel, {"expand": false, "fill": false});
		vBox.appendChild(mozillaTransformationLabel, {"expand": false, "fill": false});
		vBox.appendChild(operaTransformationLabel, {"expand": false, "fill": false});
		vBox.appendChild(msTransformationLabel, {"expand": false, "fill": false});
		vBox.appendChild(transformationLabel, {"expand": false, "fill": false});
	container.appendChild(vBox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	YK.Event.addPublicListener(this, "csscodechanged_transformation", function(transform){
		webKitTransformationLabel.setText("-webkit-transform: " + transform);
		mozillaTransformationLabel.setText("-moz-transform: " + transform);
		operaTransformationLabel.setText("-o-transform: " + transform);
		msTransformationLabel.setText("-ms-transform: " + transform);
		transformationLabel.setText("transform:" + transform);
		container.refresh();
	});

	return container;
};
