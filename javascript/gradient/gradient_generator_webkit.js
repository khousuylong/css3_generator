CSS3.generatorBox = function(){
	this._linearGradient = {"stopProperties": []};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);

		//Start Frame
		var startFrame = new YK.Frame("START");
		startFrame.setLabelAlign(0.02, 0.02);

			//Start Color
			var startTableWidget = new YK.TableFactory(5,4,false, false, 6);
			var startColorLabel = new YK.Label("Start Color:");
			startColorLabel.resetMinWidth(120);
			startColorLabel.setJustify(YK.JUSTIFY_RIGHT);

			startTableWidget.attach(startColorLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var startColorEntry = new YK.Entry();
				startColorEntry.resetMinWidth(70);
				startColorEntry.connect("focused", function(value){
					self._linearGradient["startColor"] = value;	
					YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
				});
				var inputDomStartColorEntry = startColorEntry.getNode().firstChild.firstChild;
				var myPicker = new jscolor.color(inputDomStartColorEntry, {});
				myPicker.fromString('ADAAAA');
				this._linearGradient["startColor"] = "ADAAAA"

			startTableWidget.attach(startColorEntry, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//Horizontal Position		
				var hPositionLabel = new YK.Label("Horizontal Position:");
				hPositionLabel.setJustify(YK.JUSTIFY_RIGHT);
			startTableWidget.attach(hPositionLabel, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var hPositionScale = new YK.Scale(0, 100);
				hPositionScale.resetMinWidth(200);
				hPositionScale.connect("changed", function(currentScale){
					self._linearGradient["hPositionStart"] = currentScale;
					YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
					hPositionEntry.setText( Math.floor( currentScale ) );
				});
				hPositionScale.setScale(19);
				this._linearGradient["hPositionStart"] = 19;

			startTableWidget.attach(hPositionScale, 1, 2, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				var hPositionEntry = new YK.Entry();
				hPositionEntry.setText(19);
				hPositionEntry.resetMinWidth(40);
			startTableWidget.attach(hPositionEntry, 2, 3, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			startTableWidget.attach(new YK.Label("%"), 3, 4, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
				//Vertical Position
				var vPositionLabel = new YK.Label("Vertical Position:");
				vPositionLabel.setJustify(YK.JUSTIFY_RIGHT);
			startTableWidget.attach(vPositionLabel, 0, 1, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				var vPositionScale = new YK.Scale(0, 100);
				vPositionScale.resetMinWidth(200);
				vPositionScale.connect("changed", function(currentScale){
					self._linearGradient["vPositionStart"] = currentScale;
					YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
					vPositionEntry.setText( Math.floor(currentScale) );
				});
				vPositionScale.setScale(84);
				this._linearGradient["vPositionStart"] = 84;

			startTableWidget.attach(vPositionScale, 1, 2, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var vPositionEntry = new YK.Entry();
				vPositionEntry.setText(84);
				vPositionEntry.resetMinWidth(40);
			startTableWidget.attach(vPositionEntry, 2, 3, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			startTableWidget.attach(new YK.Label("%"), 3, 4, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

		startFrame.appendChild(startTableWidget);

		//End frame
		var endFrame = new YK.Frame("END");
		endFrame.lockSize();
		endFrame.setLabelAlign(0.02, 0.02);
			var endTableWidget = new YK.TableFactory(5,4,false, false, 6);

				//End color
				var endColorLabel = new YK.Label("End Color:");
				endColorLabel.setJustify(YK.JUSTIFY_RIGHT);
			endTableWidget.attach(endColorLabel, 0, 1, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var endColorEntry = new YK.Entry();
				endColorEntry.resetMinWidth(70);
				endColorEntry.connect("focused", function(colorCode){
					self._linearGradient["endColor"] = colorCode;
					YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
				});

				var inputDomEndColorEntry = endColorEntry.getNode().firstChild.firstChild;
				var myPicker = new jscolor.color(inputDomEndColorEntry, {});
				myPicker.fromString('7D7D7D');
				this._linearGradient["endColor"] = "7D7D7D";

			endTableWidget.attach(endColorEntry, 1, 2, 1, 2, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
				//Horizontal
				var hPositionLabelEnd = new YK.Label("Horizontal Position:");
				hPositionLabelEnd.setJustify(YK.JUSTIFY_RIGHT);
			endTableWidget.attach(hPositionLabelEnd, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
				var hPositionScaleEnd = new YK.Scale(0, 100);
				hPositionScaleEnd.resetMinWidth(200);
				hPositionScaleEnd.connect("changed", function(currentScale){
					self._linearGradient["hPositionEnd"] = currentScale;
					YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
					hPositionEntryEnd.setText( Math.floor( currentScale ) );
				});
				hPositionScaleEnd.setScale(19);
				this._linearGradient["hPositionEnd"] = 19;

			endTableWidget.attach(hPositionScaleEnd, 1, 2, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var hPositionEntryEnd = new YK.Entry();
				hPositionEntryEnd.setText(19);
				hPositionEntryEnd.resetMinWidth(40);
			endTableWidget.attach(hPositionEntryEnd, 2, 3, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			endTableWidget.attach(new YK.Label("%"), 3, 4, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//Vertical position
				var vPositionLabelEnd = new YK.Label("Vertical Position:");
				vPositionLabelEnd.setJustify(YK.JUSTIFY_RIGHT);
			endTableWidget.attach(vPositionLabelEnd, 0, 1, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				var vPositionScaleEnd = new YK.Scale(0, 100);
				vPositionScaleEnd.resetMinWidth(200);
				vPositionScaleEnd.connect("changed", function(currentScale){
					self._linearGradient["vPositionEnd"] = currentScale;
					YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
					vPositionEndEntry.setText( Math.floor(currentScale) );
				});
				vPositionScaleEnd.setScale(0);
				this._linearGradient["vPositionEnd"] = 0;

			endTableWidget.attach(vPositionScaleEnd, 1, 2, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var vPositionEndEntry = new YK.Entry();
				vPositionEndEntry.setText(0);
				vPositionEndEntry.resetMinWidth(40);
			endTableWidget.attach(vPositionEndEntry, 2, 3, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			endTableWidget.attach(new YK.Label("%"), 3, 4, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

		endFrame.appendChild(endTableWidget)

		this._stopFrame = new YK.Frame("STOP");
		this._stopFrame.lockWidth();
		this._stopFrame.setLabelAlign(0.02, 0.02);

		this._stopVbox = new YK.VBoxFactory(false, 10);

		this._stopVbox.appendChild(this._createStopElement(), {"expand": false, "fill": false});
		this._stopVbox.appendChild(this._createAddStopButton(), {"expand": false, "fill": false});
	this._stopFrame.appendChild(this._stopVbox);

	mainVBox.appendChild(startFrame, {"expand": false, "fill": false});
	mainVBox.appendChild(endFrame, {"expand": false, "fill": false});
	mainVBox.appendChild(this._stopFrame, {"expand": false, "fill": false});

	YK.Event.triggerPublicListener("gradientchanged", this._linearGradient);

	return mainVBox;
}

CSS3.generatorBox.prototype._createStopElement = function(){
	var stopObj = {}, self = this;
	this._linearGradient["stopProperties"].push(stopObj);
	var vbox = new YK.VBoxFactory(false, 7);
		var hboxColor = new YK.HBoxFactory(false, 5);
		hboxColor.lockWidth();

			var stopColorLabel = new YK.Label("Color:");
			stopColorLabel.resetMinWidth(120);
			stopColorLabel.setJustify(YK.JUSTIFY_RIGHT);
		hboxColor.appendChild(stopColorLabel, {"expand": false, "fill": false});

			var stopColorEntry = new YK.Entry();
			stopColorEntry.resetMinWidth(70);
			var inputDomStopColorEntry = stopColorEntry.getNode().firstChild.firstChild;
			var myPicker = new jscolor.color(inputDomStopColorEntry, {});
			myPicker.fromString("696969");
			stopObj["stopColor"] = "696969";
			stopColorEntry.connect("focused", function(value){
				stopObj["stopColor"] = value;
				YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
			});

		hboxColor.appendChild(stopColorEntry, {"expand": false, "fill": false});

		var hbox = new YK.HBoxFactory(false, 5);
		hbox.lockWidth();
			var stopPositionLabel = new YK.Label("Position:");
			stopPositionLabel.resetMinWidth(120);
			stopPositionLabel.setJustify(YK.JUSTIFY_RIGHT);
		hbox.appendChild(stopPositionLabel, {"expand": false, "fill": false});

			var positionScale = new YK.Scale(0, 1);
			stopObj["stopScale"] = 0.5;
			positionScale.resetMinWidth(200);
			positionScale.connect("changed", function(currentScale){
				stopObj["stopScale"] = currentScale;
				YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
			});
		hbox.appendChild(positionScale, {"expand": false, "fill": false});

	vbox.appendChild(hboxColor, {"expand": false, "fill": false});
	vbox.appendChild(hbox, {"expand": false, "fill": false});
	return vbox;
};

CSS3.generatorBox.prototype._createAddStopButton = function(){
		var addButton = new YK.Button("Add Stop");
		addButton.resetMinWidth(100);
		addButton.resetMinHeight(35);

		var deleteStop = new YK.Button("Delete Stop");
		deleteStop.resetMinWidth(100);
		deleteStop.resetMinHeight(35);

	var hbox = new YK.HBoxFactory(false, 10);
	hbox.lockWidth();
	hbox.appendChild(addButton, {"expand": false, "fill": false});
	hbox.appendChild(deleteStop, {"expand": false, "fill": false});
	
	var self = this;
	addButton.connect("clicked", function(){
		self._stopVbox.insertBefore(self._createStopElement(), hbox, {"expand": false, "fill": false});
		self._stopFrame.refresh();
		YK.Event.triggerPublicListener("stopadded", 20);
	});

	deleteStop.connect("clicked", function(){
		var childToRemove = self._stopVbox.getPreviousSibling(self._stopVbox.getLastChild());
		self._stopVbox.removeChild(childToRemove);
		self._stopFrame.refresh();
		self._linearGradient["stopProperties"].pop();
		YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
		YK.Event.triggerPublicListener("stopremoved", 20);
	});

	return hbox;
};

