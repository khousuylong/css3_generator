CSS3.generatorBox = function(){
	this._transition = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	var transitionFrame = new YK.Frame("TRANSTIONS");
	transitionFrame.setLabelAlign(0.02, 0.02);

			var transitionTableWidget = new YK.TableFactory(3,3,false, false, 6);
				
				//Property
				var propertyLabel = new YK.Label("Property:");
				propertyLabel.resetMinWidth(120);
				propertyLabel.setJustify(YK.JUSTIFY_RIGHT);
				
			transitionTableWidget.attach(propertyLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				var transitionModel = new YK.TreeStore();
				transitionModel.append(null, {"display": "All", 'value': 'all'});
				transitionModel.append(null, {"display": "Background", 'value': 'background'});
				transitionModel.append(null, {"display": "Color", 'value': 'color'});
				transitionModel.append(null, {"display": "Height", 'value': 'height'});
				transitionModel.append(null, {"display": "Outline", 'value': 'outline'});

				var transitionCombobox = new YK.ComboBox();
				transitionCombobox.resetMinHeight(30);
				transitionCombobox.setModel(transitionModel);
				self._transition["property"] = "all";
				transitionCombobox.connect("changed", function(value){
					self._transition["property"] = value["value"];
					YK.Event.triggerPublicListener("transition_changed", self._transition);
				});

				transitionTableWidget.attach(transitionCombobox, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);			

				//Duration
				var durationLabel = new YK.Label("Duration:");
				durationLabel.setJustify(YK.JUSTIFY_RIGHT);
			transitionTableWidget.attach(durationLabel, 0, 1, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);			

				var durationEntry = new YK.Entry();
				durationEntry.resetMinWidth(40);
				durationEntry.connect("changed", function(value){
					self._transition["duration"] = value;	
					YK.Event.triggerPublicListener("transition_changed", self._transition);
				});
				this._transition["duration"] = 0;
			transitionTableWidget.attach(durationEntry, 1, 2, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);			
				var durationModel = new YK.TreeStore();
				durationModel.append(null, {"display": "Second", 'value': 's'});
				durationModel.append(null, {"display": "Milisecond", 'value': 'ms'});
				
				var durationCombobox = new YK.ComboBox();
				durationCombobox.resetMinHeight(30);
				durationCombobox.setModel(durationModel);
				self._transition["timing"] = "ms";
				durationCombobox.connect("changed", function(value){
					self._transition["timing"] = value["value"];
					YK.Event.triggerPublicListener("transition_changed", self._transition);
				});
			transitionTableWidget.attach(durationCombobox, 2, 3, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);			
			
				//Function
				var functionLabel = new YK.Label("Function:");
				functionLabel.setJustify(YK.JUSTIFY_RIGHT);
			transitionTableWidget.attach(functionLabel, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);			

				var functionModel = new YK.TreeStore();
				functionModel.append(null, {"display": "Ease", 'value': 'ease'});
				functionModel.append(null, {"display": "Linear", 'value': 'linear'});
				functionModel.append(null, {"display": "Ease-In", 'value': 'ease-in'});
				functionModel.append(null, {"display": "Ease-Out", 'value': 'ease-out'});
				functionModel.append(null, {"display": "Ease-In-Out", 'value': 'ease-in-out'});
			

				var functionCombobox = new YK.ComboBox();
				functionCombobox.resetMinHeight(30);
				functionCombobox.setModel(functionModel);
				self._transition["function"] = "ease";
				functionCombobox.connect("changed", function(value){
					self._transition["function"] = value["value"];;
					YK.Event.triggerPublicListener("transition_changed", self._transition);
				});
			
			transitionTableWidget.attach(functionCombobox, 1, 2, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);			
	transitionFrame.appendChild(transitionTableWidget);

	mainVBox.appendChild(transitionFrame, {"expand": false, "fill": false});
	YK.Event.triggerPublicListener("transition_changed", this._transition);

	return mainVBox;
};
