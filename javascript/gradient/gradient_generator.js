CSS3.generatorBox = function(){
	this._linearGradient = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	var startFrame = new YK.Frame("START");
	startFrame.setLabelAlign(0.02, 0.02);

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
			})
			var inputDomStartColorEntry = startColorEntry.getNode().firstChild.firstChild;
			var myPicker = new jscolor.color(inputDomStartColorEntry, {});
			myPicker.fromString('40B9FF');
			this._linearGradient["startColor"] = "40B9FF"

		startTableWidget.attach(startColorEntry, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

			var endColorLabel = new YK.Label("End Color:");
			endColorLabel.setJustify(YK.JUSTIFY_RIGHT);
		startTableWidget.attach(endColorLabel, 0, 1, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var endColorEntry = new YK.Entry();
			endColorEntry.resetMinWidth(70);
			endColorEntry.connect("focused", function(colorCode){
				self._linearGradient["endColor"] = colorCode;
				YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
			});

			var inputDomEndColorEntry = endColorEntry.getNode().firstChild.firstChild;
			var myPicker = new jscolor.color(inputDomEndColorEntry, {});
			myPicker.fromString('B8EAFF');
			this._linearGradient["endColor"] = "B8EAFF";

		startTableWidget.attach(endColorEntry, 1, 2, 1, 2, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				
			var hPositionLabel = new YK.Label("Horizontal Position:");
			hPositionLabel.setJustify(YK.JUSTIFY_RIGHT);
		startTableWidget.attach(hPositionLabel, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var hPositionScale = new YK.Scale(0, 100);
			hPositionScale.resetMinWidth(200);
			hPositionScale.connect("changed", function(currentScale){
				self._linearGradient["hPosition"] = currentScale;
				YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
			});
			hPositionScale.setScale(50);
			this._linearGradient["hPosition"] = 50;

		startTableWidget.attach(hPositionScale, 1, 2, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var hPositionEntry = new YK.Entry();
			hPositionEntry.resetMinWidth(40);
		startTableWidget.attach(hPositionEntry, 2, 3, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
		startTableWidget.attach(new YK.Label("%"), 3, 4, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

			var vPositionLabel = new YK.Label("Vertical Position:");
			vPositionLabel.setJustify(YK.JUSTIFY_RIGHT);
		startTableWidget.attach(vPositionLabel, 0, 1, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

			var vPositionScale = new YK.Scale(0, 100);
			vPositionScale.resetMinWidth(200);
			vPositionScale.connect("changed", function(currentScale){
				self._linearGradient["vPosition"] = currentScale;
				YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
			});
			vPositionScale.setScale(19);
			this._linearGradient["vPosition"] = 19;

		startTableWidget.attach(vPositionScale, 1, 2, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var vPositionEntry = new YK.Entry();
			vPositionEntry.resetMinWidth(40);
		startTableWidget.attach(vPositionEntry, 2, 3, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
		startTableWidget.attach(new YK.Label("%"), 3, 4, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);


			var angleLabel = new YK.Label("Angle:");
			angleLabel.setJustify(YK.JUSTIFY_RIGHT);
		startTableWidget.attach(angleLabel, 0, 1, 4, 5, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var angleScale = new YK.Scale(0, 100);
			angleScale.resetMinWidth(200);
			angleScale.connect("changed", function(currentScale){
				self._linearGradient["angle"] = currentScale;
				YK.Event.triggerPublicListener("gradientchanged", self._linearGradient);
			});
			angleScale.setScale(80);
			this._linearGradient["angle"] = 90;

		startTableWidget.attach(angleScale, 1, 2, 4, 5, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var angle = new YK.Entry();
			angle.resetMinWidth(40);
		startTableWidget.attach(angle, 2, 3, 4, 5, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
		startTableWidget.attach(new YK.Label("o"), 3, 4, 4, 5, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

		startFrame.appendChild(startTableWidget)

	this._stopFrame = new YK.Frame("STOP");
	this._stopFrame.lockWidth();
	this._stopFrame.setLabelAlign(0.02, 0.02);

		this._stopVbox = new YK.VBoxFactory(false, 10);

		this._stopVbox.appendChild(this._createStopElement(), {"expand": false, "fill": false});
		this._stopVbox.appendChild(this._createAddStopButton(), {"expand": false, "fill": false});
	this._stopFrame.appendChild(this._stopVbox);

	mainVBox.appendChild(startFrame, {"expand": false, "fill": true});
	mainVBox.appendChild(this._stopFrame, {"expand": true, "fill": true});

	YK.Event.triggerPublicListener("gradientchanged", this._linearGradient);

	return mainVBox;
}

CSS3.generatorBox.prototype._createStopElement = function(){
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
			myPicker.fromString('F0FFFD');

		hboxColor.appendChild(stopColorEntry, {"expand": false, "fill": false});

		var hbox = new YK.HBoxFactory(false, 5);
		hbox.lockWidth();
			var stopPositionLabel = new YK.Label("Position:");
			stopPositionLabel.resetMinWidth(120);
			stopPositionLabel.setJustify(YK.JUSTIFY_RIGHT);
		hbox.appendChild(stopPositionLabel, {"expand": false, "fill": false});

			var positionScale = new YK.Scale(0, 100);
			positionScale.resetMinWidth(200);
		hbox.appendChild(positionScale, {"expand": false, "fill": false});

			var positionEntry = new YK.Entry();
			positionEntry.resetMinWidth(40);
		hbox.appendChild(positionEntry, {"expand": false, "fill": false});
		hbox.appendChild(new YK.Label("%"), {"expand": false, "fill": false});

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
	});

	deleteStop.connect("clicked", function(){
		var childToRemove = self._stopVbox.getPreviousSibling(self._stopVbox.getLastChild());
		self._stopVbox.removeChild(childToRemove);
		self._stopFrame.refresh();
	});

	return hbox;
};

