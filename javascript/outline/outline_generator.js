CSS3.generatorBox = function(){
	this._outline = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	var outlineFrame = new YK.Frame("OUTLINE");
	outlineFrame.setLabelAlign(0.02, 0.02);

			var outlineTableWidget = new YK.TableFactory(4,3,false, false, 6);
				
				//outline thickness
				var thicknessLabel = new YK.Label("Outline Thickness:");
				thicknessLabel.resetMinWidth(120);
				thicknessLabel.resetMinHeight(23);
				thicknessLabel.setJustify(YK.JUSTIFY_RIGHT);

				
			outlineTableWidget.attach(thicknessLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				var thicknessEntry = new YK.Entry();
				thicknessEntry.resetMinWidth(40);
				thicknessEntry.connect("changed", function(value){
					self._outline["thickness"] = value;	
					YK.Event.triggerPublicListener("outline_changed", self._outline);
				});
				this._outline["thickness"] = 0;
			outlineTableWidget.attach(thicknessEntry, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			outlineTableWidget.attach(new YK.Label("px"), 2, 3, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//outline style
				var styleLabel = new YK.Label("Outline Style:");
				styleLabel.resetMinWidth(120);
				styleLabel.setJustify(YK.JUSTIFY_RIGHT);
				
			outlineTableWidget.attach(styleLabel, 0, 1, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				var styleModel = new YK.TreeStore();
				styleModel.append(null, {"display": "Dotted", 'value': 'dotted'});
				styleModel.append(null, {"display": "Dashed", 'value': 'dashed'});
				styleModel.append(null, {"display": "Double", 'value': 'double'});
				styleModel.append(null, {"display": "Groove", 'value': 'groove'});
				styleModel.append(null, {"display": "Inherit", 'value': 'inherit'});
				styleModel.append(null, {"display": "Inset", 'value': 'inset'});
				styleModel.append(null, {"display": "Outset", 'value': 'outset'});
				styleModel.append(null, {"display": "Ridge", 'value': 'ridge'});
				styleModel.append(null, {"display": "Solid", 'value': 'solid'});

				var styleCombobox = new YK.ComboBox();
				styleCombobox.resetMinHeight(30);
				styleCombobox.setModel(styleModel);
				self._outline["style"] = "dotted";
				styleCombobox.connect("changed", function(value){
					self._outline["style"] = value["value"];;
					YK.Event.triggerPublicListener("outline_changed", self._outline);
				});
			outlineTableWidget.attach(styleCombobox, 1, 2, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//Outline color			
				var colorLabel = new YK.Label("Outline Color:");
				colorLabel.resetMinWidth(120);
				colorLabel.setJustify(YK.JUSTIFY_RIGHT);

			outlineTableWidget.attach(colorLabel, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				var colorEntry = new YK.Entry();
				colorEntry.resetMinWidth(70);
				colorEntry.resetMinHeight(23);
				colorEntry.connect("focused", function(value){
					self._outline["color"] = value;	
					YK.Event.triggerPublicListener("outline_changed", self._outline);
				});
				var inputDomcolorEntry = colorEntry.getNode().firstChild.firstChild;
				var myPicker = new jscolor.color(inputDomcolorEntry, {});
				myPicker.fromString('C9C9C9');
				this._outline["color"] = "C9C9C9"

			outlineTableWidget.attach(colorEntry, 1, 2, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
	
				//outline offset
				var offsetLabel = new YK.Label("Outline Offset:");
				offsetLabel.resetMinWidth(120);
				offsetLabel.resetMinHeight(23);
				offsetLabel.setJustify(YK.JUSTIFY_RIGHT);

				
			outlineTableWidget.attach(offsetLabel, 0, 1, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				var offsetEntry = new YK.Entry();
				offsetEntry.resetMinWidth(40);
				offsetEntry.resetMinHeight(23);
				offsetEntry.connect("changed", function(value){
					self._outline["offset"] = value;	
					YK.Event.triggerPublicListener("outline_changed", self._outline);
				});
				this._outline["offset"] = 0;
			outlineTableWidget.attach(offsetEntry, 1, 2, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: false}, 1, 1);
			outlineTableWidget.attach(new YK.Label("px"), 2, 3, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);


	outlineFrame.appendChild(outlineTableWidget);

	mainVBox.appendChild(outlineFrame, {"expand": false, "fill": false});
	YK.Event.triggerPublicListener("outline_changed", this._outline);

	return mainVBox;
};

