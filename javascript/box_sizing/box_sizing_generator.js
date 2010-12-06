CSS3.generatorBox = function(){
	this._boxSizing = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	var boxSizingFrame = new YK.Frame("BOX SIZING");
	boxSizingFrame.setLabelAlign(0.02, 0.02);

			var boxSizingTableWidget = new YK.TableFactory(1,4,false, false, 6);
				
				//box type
				var boxOptionLabel = new YK.Label("Box Sizing Option:");
				boxOptionLabel.resetMinWidth(120);
				boxOptionLabel.setJustify(YK.JUSTIFY_RIGHT);

				var boxOptionModel = new YK.TreeStore();
				boxOptionModel.append(null, {"display": "Border Box"});
				boxOptionModel.append(null, {"display": "Content Box"});
			
				var boxOptionCombobox = new YK.ComboBox();
				boxOptionCombobox.resetMinHeight(24);
				boxOptionCombobox.setModel(boxOptionModel);
				self._boxSizing["boxOption"] = "border-box";
				boxOptionCombobox.connect("changed", function(value){
					self._boxSizing["boxOption"] = value["display"] === "Content Box" ? "content-box" : "border-box";
					YK.Event.triggerPublicListener("box_sizing_changed", self._boxSizing);
				});
			boxSizingTableWidget.attach(boxOptionLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			boxSizingTableWidget.attach(boxOptionCombobox, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
				
	boxSizingFrame.appendChild(boxSizingTableWidget)

	mainVBox.appendChild(boxSizingFrame, {"expand": false, "fill": false});
	YK.Event.triggerPublicListener("box_sizing_changed", this._boxSizing);

	return mainVBox;
};

