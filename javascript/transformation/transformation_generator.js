CSS3.generatorBox = function(){
	this._transformation = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	var transformationFrame = new YK.Frame("TRANSFORMATION");
	transformationFrame.setLabelAlign(0.02, 0.02);

			var transformationTableWidget = new YK.TableFactory(4,5,false, false, 6);
				
				//Property
				var scaleLabel = new YK.Label("Scale:");
				scaleLabel.resetMinWidth(120);
				scaleLabel.setJustify(YK.JUSTIFY_RIGHT);
			
				var scaleEntry = new YK.Entry();
				scaleEntry.setText(0);
				scaleEntry.resetMinWidth(40);
				scaleEntry.connect("changed", function(value){
					self._transformation["scale"] = value;	
					YK.Event.triggerPublicListener("transformation_changed", self._transformation);
				});
				this._transformation["scale"] = 1;
			transformationTableWidget.attach(scaleLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(scaleEntry, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(new YK.Label("%"), 2, 3, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//Rotate
				var rotateLabel = new YK.Label("Rotate:");
				rotateLabel.resetMinWidth(120);
				rotateLabel.setJustify(YK.JUSTIFY_RIGHT);

				var rotateEntry = new YK.Entry();
				rotateEntry.setText(0);
				rotateEntry.resetMinWidth(40);
				rotateEntry.connect("changed", function(value){
					self._transformation["rotate"] = value;	
					YK.Event.triggerPublicListener("transformation_changed", self._transformation);
				});
				this._transformation["rotate"] = 0;
				
			transformationTableWidget.attach(rotateLabel, 0, 1, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(rotateEntry, 1, 2, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(new YK.Label("deg"), 2, 3, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//Translate
				var translateLabel = new YK.Label("Translate: ");
				translateLabel.resetMinWidth(120);
				translateLabel.setJustify(YK.JUSTIFY_RIGHT);
			
				var translateXEntry = new YK.Entry();
				translateXEntry.setText(0);
				translateXEntry.resetMinWidth(40);
				translateXEntry.connect("changed", function(value){
						self._transformation["translateX"] = value;	
						YK.Event.triggerPublicListener("transformation_changed", self._transformation);
				});
					this._transformation["translateX"] = 0;

				var translateYEntry = new YK.Entry();
				translateYEntry.setText(0);
				translateYEntry.resetMinWidth(40);
				translateYEntry.connect("changed", function(value){
						self._transformation["translateY"] = value;	
						YK.Event.triggerPublicListener("transformation_changed", self._transformation);
				});
					this._transformation["translateY"] = 0;
			

			transformationTableWidget.attach(translateLabel, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(translateXEntry, 1, 2, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(new YK.Label("px"), 2, 3, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(translateYEntry, 3, 4, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(new YK.Label("px"), 4, 5, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				
				//skew
				var skewLabel = new YK.Label("Skew: ");
				skewLabel.resetMinWidth(120);
				skewLabel.setJustify(YK.JUSTIFY_RIGHT);
			
				var skewXEntry = new YK.Entry();
				skewXEntry.setText(0);
				skewXEntry.resetMinWidth(40);
				skewXEntry.connect("changed", function(value){
					self._transformation["skewX"] = value;	
					YK.Event.triggerPublicListener("transformation_changed", self._transformation);
				});
					this._transformation["skewX"] = 0;

				var skewYEntry = new YK.Entry();
				skewYEntry.setText(0);
				skewYEntry.resetMinWidth(40);
				skewYEntry.connect("changed", function(value){
						self._transformation["skewY"] = value;	
						YK.Event.triggerPublicListener("transformation_changed", self._transformation);
				});
					this._transformation["skewY"] = 0;

			transformationTableWidget.attach(skewLabel, 0, 1, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(skewXEntry, 1, 2, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(new YK.Label("deg"), 2, 3, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(skewYEntry, 3, 4, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			transformationTableWidget.attach(new YK.Label("deg"), 4, 5, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);				

	transformationFrame.appendChild(transformationTableWidget);
	
	mainVBox.appendChild(transformationFrame, {"expand": false, "fill": false});
	YK.Event.triggerPublicListener("transformation_changed", this._transformation);

	return mainVBox;
};
