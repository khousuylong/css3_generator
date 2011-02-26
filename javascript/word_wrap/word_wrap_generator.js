CSS3.generatorBox = function(){
	this._wordWrapProperty = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	var wordWrapFrame = new YK.Frame("WORD-WRAP");
	wordWrapFrame.setLabelAlign(0.02, 0.02);

			var wordWrapTableWidget = new YK.TableFactory(1,3,false, false, 6);
				
				//Property
				var propertyLabel = new YK.Label("Property:");
				propertyLabel.setJustify(YK.JUSTIFY_RIGHT);
				
			wordWrapTableWidget.attach(propertyLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				var propertyModel = new YK.TreeStore();
				propertyModel.append(null, {"display": "break-word", 'value': 'break-word'});
				propertyModel.append(null, {"display": "normal", 'value': 'normal'});

				var propertyCombobox = new YK.ComboBox();
				propertyCombobox.resetMinHeight(30);
				propertyCombobox.setModel(propertyModel);
				self._wordWrapProperty["property"] = "normal";
				propertyCombobox.connect("changed", function(value){
					self._wordWrapProperty["property"] = value["value"];
					YK.Event.triggerPublicListener("word_wrap_property_changed", self._wordWrapProperty);
				});

				wordWrapTableWidget.attach(propertyCombobox, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);			

	wordWrapFrame.appendChild(wordWrapTableWidget);

	mainVBox.appendChild(wordWrapFrame, {"expand": false, "fill": false});
	YK.Event.triggerPublicListener("word_wrap_property_changed", this._wordWrapProperty);

	return mainVBox;
};
