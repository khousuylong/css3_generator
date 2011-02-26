CSS3.generatorBox = function(){
	this._borderImage = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	
		//Different Size Rounded Corner
		var equalSizeFrame = new YK.Frame("Border Image");
		equalSizeFrame.setLabelAlign(0.02, 0.02);

			var equalSizeTableWidget = new YK.TableFactory(6,3,false, false, 5);
				
				//From Top
				var fromTop  = new YK.Label("Position From Top: ");
				fromTop.setJustify(YK.JUSTIFY_RIGHT);
				fromTop.resetMinWidth(130);
			equalSizeTableWidget.attach(fromTop, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var topEntry = new YK.Entry();
				topEntry.setText(27);
				topEntry.resetMinWidth(40);
				topEntry.resetMinHeight(26);
				topEntry.connect("changed", function(value){
					self._borderImage["top"] = parseInt(value);
					YK.Event.triggerPublicListener("border_image_changed", self._borderImage);
				});
				this._borderImage["top"] = 27;
			equalSizeTableWidget.attach(topEntry, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//From Right
				var fromRight  = new YK.Label("Position From Right: ");
				fromRight.setJustify(YK.JUSTIFY_RIGHT);
				fromRight.resetMinWidth(130);
			equalSizeTableWidget.attach(fromRight, 0, 1, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var rightEntry = new YK.Entry();
				rightEntry.resetMinWidth(40);
				rightEntry.resetMinHeight(26);
				rightEntry.setText(27);
				rightEntry.connect("changed", function(value){
					self._borderImage["right"] = parseInt(value);
					YK.Event.triggerPublicListener("border_image_changed", self._borderImage);
				});
				this._borderImage["right"] = 27;
			equalSizeTableWidget.attach(rightEntry, 1, 2, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//From Bottom
				var fromBottom  = new YK.Label("Position From Bottom: ");
				fromBottom.setJustify(YK.JUSTIFY_RIGHT);
				fromBottom.resetMinWidth(130);
			equalSizeTableWidget.attach(fromBottom, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var bottomEntry = new YK.Entry();
				bottomEntry.resetMinWidth(40);
				bottomEntry.resetMinHeight(26);
				bottomEntry.setText(27);
				bottomEntry.connect("changed", function(value){
					self._borderImage["bottom"] = parseInt(value);
					YK.Event.triggerPublicListener("border_image_changed", self._borderImage);
				});
				this._borderImage["bottom"] = 27;
			equalSizeTableWidget.attach(bottomEntry, 1, 2, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//From Left
				var fromLeft = new YK.Label("Position From Left: ");
				fromLeft.setJustify(YK.JUSTIFY_RIGHT);
				fromLeft.resetMinWidth(130);
			equalSizeTableWidget.attach(fromLeft, 0, 1, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var leftEntry = new YK.Entry();
				leftEntry.resetMinWidth(40);
				leftEntry.resetMinHeight(26);
				leftEntry.setText(27);
				leftEntry.connect("changed", function(value){
					self._borderImage["left"] = parseInt(value);
					YK.Event.triggerPublicListener("border_image_changed", self._borderImage);
				});
				this._borderImage["left"] = 27;
			equalSizeTableWidget.attach(leftEntry, 1, 2, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//Horizontal Style
				var horizontalStyleLable = new YK.Label("Horizontal Style: ");
				horizontalStyleLable.setJustify(YK.JUSTIFY_RIGHT);
			equalSizeTableWidget.attach(horizontalStyleLable, 0, 1, 4, 5, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var hStyleModel = new YK.TreeStore();
				hStyleModel.append(null, {"display": "Round", 'value': 'round'});
				hStyleModel.append(null, {"display": "Repeat", 'value': 'repeat'});
				hStyleModel.append(null, {"display": "Stretch", 'value': 'stretch'});

				var hStyleCombobox = new YK.ComboBox();
				hStyleCombobox.resetMinHeight(27);
				hStyleCombobox.setModel(hStyleModel);
				hStyleCombobox.setSelectedItemBy("display", "Repeat");
				hStyleCombobox.connect("changed", function(value){
					self._borderImage["hStyle"] = value['value'];
					YK.Event.triggerPublicListener("border_image_changed", self._borderImage);
				});
				this._borderImage["hStyle"] = "repeat";
			equalSizeTableWidget.attach(hStyleCombobox, 1, 2, 4, 5, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//Vertical Style
				var verticalStyleLable = new YK.Label("Vertical Style: ");
				verticalStyleLable.setJustify(YK.JUSTIFY_RIGHT);
			equalSizeTableWidget.attach(verticalStyleLable, 0, 1, 5, 6, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				var vStyleModel = new YK.TreeStore();
				vStyleModel.append(null, {"display": "Round", 'value': 'round'});
				vStyleModel.append(null, {"display": "Repeat", 'value': 'repeat'});
				vStyleModel.append(null, {"display": "Stretch", 'value': 'stretch'});

				var vStyleCombobox = new YK.ComboBox();
				vStyleCombobox.resetMinHeight(23);
				vStyleCombobox.setModel(vStyleModel);
				vStyleCombobox.setSelectedItemBy("display", "Repeat");
				vStyleCombobox.connect("changed", function(value){
					self._borderImage["vStyle"] = value['value'];
					YK.Event.triggerPublicListener("border_image_changed", self._borderImage);
				});
				this._borderImage["vStyle"] = "repeat";
			equalSizeTableWidget.attach(vStyleCombobox, 1, 2, 5, 6, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);


	equalSizeFrame.appendChild(equalSizeTableWidget)

	mainVBox.appendChild(equalSizeFrame, {"expand": false, "fill": false, "padding": 10});
	YK.Event.triggerPublicListener("border_image_changed", this._borderImage);

	return mainVBox;
};
