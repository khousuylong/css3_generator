CSS3.generatorBox = function(){
	this._borderRadius = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	
		//Different Size Rounded Corner
		var diffSizeFrame = new YK.Frame("Differently Rounded Corner");
		diffSizeFrame.setLabelAlign(0.02, 0.02);

			var diffSizeTableWidget = new YK.TableFactory(4,3,false, false, 6);
				
				//Top Left
				var topLeftRadiusLabel = new YK.Label("Top Left Radius: ");
				topLeftRadiusLabel.setJustify(YK.JUSTIFY_RIGHT);
				topLeftRadiusLabel.resetMinWidth(130);
			diffSizeTableWidget.attach(topLeftRadiusLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
				var topLeftEntry = new YK.Entry();
				topLeftEntry.resetMinWidth(40);
				topLeftEntry.connect("changed", function(value){
					self._borderRadius["borderRadiusTopLeft"] = value;
					YK.Event.triggerPublicListener("border_radius_changed", self._borderRadius);
				});
				self._borderRadius["borderRadiusTopLeft"] = 0;
			diffSizeTableWidget.attach(topLeftEntry, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			diffSizeTableWidget.attach(new YK.Label("px"), 2, 3, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
				//Top Right
				var topRightRadiusLabel = new YK.Label("Top Right Radius: ");
				topRightRadiusLabel.setJustify(YK.JUSTIFY_RIGHT);
			diffSizeTableWidget.attach(topRightRadiusLabel, 0, 1, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
			var topRightEntry = new YK.Entry();
				topRightEntry.resetMinWidth(40);
				topRightEntry.connect("changed", function(value){
					self._borderRadius["borderRadiusTopRight"] = value;	
					YK.Event.triggerPublicListener("border_radius_changed", self._borderRadius);
				});
				self._borderRadius["borderRadiusTopRight"] = 0;
			diffSizeTableWidget.attach(topRightEntry, 1, 2, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			diffSizeTableWidget.attach(new YK.Label("px"), 2, 3, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);				

				//Bottom Left
				var bottomLeftRadiusLabel = new YK.Label("Bottom Left Radius: ");
				bottomLeftRadiusLabel.setJustify(YK.JUSTIFY_RIGHT);
			diffSizeTableWidget.attach(bottomLeftRadiusLabel, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
			var bottomLeftEntry = new YK.Entry();
				bottomLeftEntry.resetMinWidth(40);
				bottomLeftEntry.connect("changed", function(value){
					self._borderRadius["borderRadiusBottomLeft"] = value;	
					YK.Event.triggerPublicListener("border_radius_changed", self._borderRadius);
				});
				self._borderRadius["borderRadiusBottomLeft"] = 0;
			diffSizeTableWidget.attach(bottomLeftEntry, 1, 2, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			diffSizeTableWidget.attach(new YK.Label("px"), 2, 3, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);				

				//Bottom Right
				var bottomRightRadiusLabel = new YK.Label("Bottom Right Radius: ");
				bottomRightRadiusLabel.setJustify(YK.JUSTIFY_RIGHT);
			diffSizeTableWidget.attach(bottomRightRadiusLabel, 0, 1, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
			var bottomRightEntry = new YK.Entry();
				bottomRightEntry.resetMinWidth(40);
				bottomRightEntry.resetMinHeight(13);
				bottomRightEntry.connect("changed", function(value){
					self._borderRadius["borderRadiusBottomRight"] = value;	
					YK.Event.triggerPublicListener("border_radius_changed", self._borderRadius);
				});
				self._borderRadius["borderRadiusBottomRight"] = 0;
			diffSizeTableWidget.attach(bottomRightEntry, 1, 2, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			diffSizeTableWidget.attach(new YK.Label("px"), 2, 3, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);				

	diffSizeFrame.appendChild(diffSizeTableWidget)

	mainVBox.appendChild(diffSizeFrame, {"expand": false, "fill": false, "padding": 10});
	YK.Event.triggerPublicListener("border_radius_changed", this._borderRadius);

	return mainVBox;
};

