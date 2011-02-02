CSS3.generatorBox = function(){
	this._borderRadius = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	
		//Different Size Rounded Corner
		var equalSizeFrame = new YK.Frame("Rounded Corner");
		equalSizeFrame.setLabelAlign(0.02, 0.02);

			var equalSizeTableWidget = new YK.TableFactory(4,3,false, false, 6);
				
				//Top Left
				var topLeftRadiusLabel = new YK.Label("Top Left Radius: ");
				topLeftRadiusLabel.setJustify(YK.JUSTIFY_RIGHT);
				topLeftRadiusLabel.resetMinWidth(130);
			equalSizeTableWidget.attach(topLeftRadiusLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
				var borderSizeEntry = new YK.Entry();
				borderSizeEntry.resetMinWidth(40);
				borderSizeEntry.connect("changed", function(value){
					self._borderRadius["borderRadius"] = value;	
					YK.Event.triggerPublicListener("border_radius_changed", self._borderRadius);
				});
				this._borderRadius["borderRadius"] = 0;
			equalSizeTableWidget.attach(borderSizeEntry, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			equalSizeTableWidget.attach(new YK.Label("px"), 2, 3, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
	equalSizeFrame.appendChild(equalSizeTableWidget)

	mainVBox.appendChild(equalSizeFrame, {"expand": false, "fill": false, "padding": 10});
	YK.Event.triggerPublicListener("border_radius_changed", this._borderRadius);

	return mainVBox;
};

