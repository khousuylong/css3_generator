var generatorBox = new YK.VBoxFactory(false, 5);
	var startFrame = new YK.Frame("START");
	startFrame.setLabelAlign(0.02, 0.02);

		var startTableWidget = new YK.TableFactory(5,4,false, false, 5);
			var startColorLabel = new YK.Label("Start Color:");
			startColorLabel.resetMinWidth(120);
			startColorLabel.setJustify(YK.JUSTIFY_RIGHT);

		startTableWidget.attach(startColorLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var startColorEntry = new YK.Entry();
			startColorEntry.resetMinWidth(70);
			startColorEntry.connect("focused", function(){
				console.log('changed value')
			})
			var inputDomStartColorEntry = startColorEntry.getNode().firstChild.firstChild;
			var myPicker = new jscolor.color(inputDomStartColorEntry, {});
			myPicker.fromString('40B9FF');

		startTableWidget.attach(startColorEntry, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

			var endColorLabel = new YK.Label("End Color:");
			endColorLabel.setJustify(YK.JUSTIFY_RIGHT);
		startTableWidget.attach(endColorLabel, 0, 1, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var endColorEntry = new YK.Entry();
			endColorEntry.resetMinWidth(70);

			var inputDomEndColorEntry = endColorEntry.getNode().firstChild.firstChild;
			var myPicker = new jscolor.color(inputDomEndColorEntry, {});
			myPicker.fromString('40B9FF');

		startTableWidget.attach(endColorEntry, 1, 2, 1, 2, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				
			var hPositionLabel = new YK.Label("Horizontal Position:");
			hPositionLabel.setJustify(YK.JUSTIFY_RIGHT);
		startTableWidget.attach(hPositionLabel, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var hPositionScale = new YK.Scale(0, 100);
			hPositionScale.resetMinWidth(200);
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
		startTableWidget.attach(angleScale, 1, 2, 4, 5, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var angle = new YK.Entry();
			angle.resetMinWidth(40);
		startTableWidget.attach(angle, 2, 3, 4, 5, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
		startTableWidget.attach(new YK.Label("o"), 3, 4, 4, 5, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);


		startFrame.appendChild(startTableWidget)

	var stopFrame = new YK.Frame("STOP");
	stopFrame.setLabelAlign(0.02, 0.02);

		var stopTableWidget = new YK.TableFactory(15,4,false, false, 2);

			var stopColorLabel = new YK.Label("Color:");
			stopColorLabel.resetMinWidth(120);
			stopColorLabel.setJustify(YK.JUSTIFY_RIGHT);
		stopTableWidget.attach(stopColorLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

			var stopColorEntry = new YK.Entry();
			stopColorEntry.resetMinWidth(70);
		stopTableWidget.attach(stopColorEntry, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

			var stopPositionLabel = new YK.Label("Position:");
			stopPositionLabel.setJustify(YK.JUSTIFY_RIGHT);
		stopTableWidget.attach(stopPositionLabel, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var stopPositionScale = new YK.Scale(0, 100);
			stopPositionScale.resetMinWidth(200);
		stopTableWidget.attach(stopPositionScale, 1, 2, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			var stopPositionEntry = new YK.Entry();
			stopPositionEntry.resetMinWidth(40);
		stopTableWidget.attach(stopPositionEntry, 2, 3, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
		stopTableWidget.attach(new YK.Label("%"), 3, 4, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

		var addStop = new YK.Button("Add Stop");
		stopTableWidget.attach(addStop, 0, 1, 14, 15, {align: YK.JUSTIFY_RIGHT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

		var deleteStop = new YK.Button("Delete Stop");
		stopTableWidget.attach(deleteStop, 1, 2, 14, 15, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

	stopFrame.appendChild(stopTableWidget);

generatorBox.appendChild(startFrame, {"expand": false, "fill": true});
generatorBox.appendChild(stopFrame, {"expand": true, "fill": true});

var outputBox = new YK.Label("Output Box");
