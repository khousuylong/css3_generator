CSS3.generatorBox = function(){
	this._columns = {};
	var self = this;
	var mainVBox = new YK.VBoxFactory(false, 5);
	
		//Different Size Rounded Corner
		var multipleColumnsFrame = new YK.Frame("Multiple Columns Text");
		multipleColumnsFrame.setLabelAlign(0.02, 0.02);

			var multipleColumnsTableWidget = new YK.TableFactory(2,3,false, false, 6);
				
				//Number of columns
				var numberOfColumnLabel = new YK.Label("Number Of Columns: ");
				numberOfColumnLabel.setJustify(YK.JUSTIFY_RIGHT);
				numberOfColumnLabel.resetMinWidth(130);
			multipleColumnsTableWidget.attach(numberOfColumnLabel, 0, 1, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
				var numberOfColumnEntry = new YK.Entry();
				numberOfColumnEntry.resetMinWidth(40);
				numberOfColumnEntry.connect("changed", function(value){
					self._columns["columns"] = value;
					YK.Event.triggerPublicListener("columns_changed", self._columns);
				});
				self._columns["columns"] = 0;
			multipleColumnsTableWidget.attach(numberOfColumnEntry, 1, 2, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			multipleColumnsTableWidget.attach(new YK.Label("px"), 2, 3, 0, 1, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
				//Space
				var spaceLabel = new YK.Label("Space Between: ");
				spaceLabel.setJustify(YK.JUSTIFY_RIGHT);
			multipleColumnsTableWidget.attach(spaceLabel, 0, 1, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			
			var spaceEntry = new YK.Entry();
				spaceEntry.resetMinWidth(40);
				spaceEntry.resetMinHeight(8);
				spaceEntry.connect("changed", function(value){
					self._columns["space"] = value;	
					YK.Event.triggerPublicListener("columns_changed", self._columns);
				});
				self._columns["space"] = 0;
			multipleColumnsTableWidget.attach(spaceEntry, 1, 2, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);
			multipleColumnsTableWidget.attach(new YK.Label("px"), 2, 3, 1, 2, {align: YK.JUSTIFY_LEFT, fill: true}, {align: YK.JUSTIFY_TOP, fill: true}, 1, 1);				

	multipleColumnsFrame.appendChild(multipleColumnsTableWidget)

	mainVBox.appendChild(multipleColumnsFrame, {"expand": false, "fill": false, "padding": 10});
	YK.Event.triggerPublicListener("columns_changed", this._columns);

	return mainVBox;
};

