CSS3.generatorBox = function(){
	this._boxShadow = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	var startFrame = new YK.Frame("BOX SHADOW");
	startFrame.setLabelAlign(0.02, 0.02);

			var startTableWidget = new YK.TableFactory(5,4,false, false, 6);
				
				//showdow type
				var insetLabel = new YK.Label("Inset:");
				insetLabel.resetMinWidth(120);
				insetLabel.setJustify(YK.JUSTIFY_RIGHT);

				var showDowTypeModel = new YK.TreeStore();
				showDowTypeModel.append(null, {"display": "OutSet"});
				showDowTypeModel.append(null, {"display": "Inset"});
			
				var shadowTypeCombobox = new YK.ComboBox();
				shadowTypeCombobox.setModel(showDowTypeModel);
				self._boxShadow["shawdowType"] = "";
				shadowTypeCombobox.connect("changed", function(value){
					self._boxShadow["shawdowType"] = value["display"] === "Inset" ? "inset" : "";
					YK.Event.triggerPublicListener("boxshadowchanged", self._boxShadow);
				});
			startTableWidget.attach(insetLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			startTableWidget.attach(shadowTypeCombobox, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);

				//Horizontal length
				var horizonyalLengthLabel = new YK.Label("Horizontal Length:");
				horizonyalLengthLabel.setJustify(YK.JUSTIFY_RIGHT);

				var hScale = new YK.Scale(-100, 100);
				hScale.resetMinWidth(200);
				hScale.connect("changed", function(currentScale){
					self._boxShadow["hScale"] = currentScale;
					YK.Event.triggerPublicListener("boxshadowchanged", self._boxShadow);
				});
				hScale.setScale(5);
				this._boxShadow["hScale"] = 5;
			startTableWidget.attach(horizonyalLengthLabel, 0, 1, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			startTableWidget.attach(hScale, 1, 2, 1, 2, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			startTableWidget.attach(new YK.Label("px"), 2, 3, 1, 2, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);			
			
				//Vertical length
				var VerticalLengthLabel = new YK.Label("Vertical Length:");
				VerticalLengthLabel.setJustify(YK.JUSTIFY_RIGHT);

				var vScale = new YK.Scale(-100, 100);
				vScale.resetMinWidth(200);
				vScale.connect("changed", function(currentScale){
					self._boxShadow["vScale"] = currentScale;
					YK.Event.triggerPublicListener("boxshadowchanged", self._boxShadow);
				});
				vScale.setScale(5);
				this._boxShadow["vScale"] = 5;
			startTableWidget.attach(VerticalLengthLabel, 0, 1, 2, 3, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			startTableWidget.attach(vScale, 1, 2, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			startTableWidget.attach(new YK.Label("px"), 2, 3, 2, 3, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);			
			
				//Blur radius
				var blurRadiusLabel = new YK.Label("Blur Radius:");
				blurRadiusLabel.setJustify(YK.JUSTIFY_RIGHT);

				var blurRadiusScale = new YK.Scale(0, 100);
				blurRadiusScale.resetMinWidth(200);
				blurRadiusScale.connect("changed", function(currentScale){
					self._boxShadow["blurScale"] = currentScale;
					YK.Event.triggerPublicListener("boxshadowchanged", self._boxShadow);
				});
				blurRadiusScale.setScale(10);
				this._boxShadow["blurScale"] = 10;

			startTableWidget.attach(blurRadiusLabel, 0, 1, 3, 4, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			startTableWidget.attach(blurRadiusScale, 1, 2, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			startTableWidget.attach(new YK.Label("px"), 2, 3, 3, 4, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);			
			
				//Shadow color
				var shadowColorLabel = new YK.Label("Box Shadow Color:");
				shadowColorLabel.setJustify(YK.JUSTIFY_RIGHT);

				var shadowColorEntry = new YK.Entry();
				shadowColorEntry.resetMinWidth(70);
				shadowColorEntry.connect("focused", function(value){
					self._boxShadow["boxShadowColor"] = value;	
					YK.Event.triggerPublicListener("boxshadowchanged", self._boxShadow);
				});
				var inputDomshadowColorEntry = shadowColorEntry.getNode().firstChild.firstChild;
				var myPicker = new jscolor.color(inputDomshadowColorEntry, {});
				myPicker.fromString('40B9FF');
				this._boxShadow["boxShadowColor"] = "40B9FF";
			startTableWidget.attach(shadowColorLabel, 0, 1, 4, 5, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			startTableWidget.attach(shadowColorEntry, 1, 2, 4, 5, {align: YK.JUSTIFY_LEFT, fill: false}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);	
	startFrame.appendChild(startTableWidget)

	mainVBox.appendChild(startFrame, {"expand": false, "fill": false});
	YK.Event.triggerPublicListener("boxshadowchanged", this._boxShadow);

	return mainVBox;
};

