CSS3.generatorBox = function(){	
	var self = this;
	var borderColorFrame = new YK.Frame("Border Color");
	borderColorFrame.setLabelAlign(0.02, 0.02);
		var scroller = new YK.Scroller();
			this._mainVbox = new YK.VBoxFactory(false, 5);

				//Border Width
				var hboxBorderWidth = new YK.HBoxFactory(false, 5);
					this._entryBorderWidth = new YK.Entry()
					this._entryBorderWidth.resetMinWidth(65);

					var borderLabel = new YK.Label("Border: ");
					borderLabel.resetMinWidth(130);
				hboxBorderWidth.appendChild(borderLabel, {"expand": false, "fill": false});
				hboxBorderWidth.appendChild(this._entryBorderWidth, {"expand": false, "fill": false, "padding": 3});
				hboxBorderWidth.appendChild(new YK.Label("px"), {"expand": false, "fill": false});

				//Border Left Colore
				this._hboxBorderLeftColor = new YK.HBoxFactory(false, 5);
					var borderLeftLabel = new YK.Label("Border Left Color: ");
					borderLeftLabel.resetMinWidth(130);
				this._hboxBorderLeftColor.appendChild(borderLeftLabel, {"expand": false, "fill": false});

				//Border Right Colore
				this._hboxBorderRightColor = new YK.HBoxFactory(false, 5);
					var borderRightLabel = new YK.Label("Border Right Color: ");
					borderRightLabel.resetMinWidth(130);
				this._hboxBorderRightColor.appendChild(borderRightLabel, {"expand": false, "fill": false});

				//Border Top Colore
				this._hboxBorderTopColor = new YK.HBoxFactory(false, 5);
					var borderTopLabel = new YK.Label("Border Top Color: ");
					borderTopLabel.resetMinWidth(130);
				this._hboxBorderTopColor.appendChild(borderTopLabel, {"expand": false, "fill": false});

				//Border Bottom Colore
				this._hboxBorderBottomColor = new YK.HBoxFactory(false, 5);
					var borderBottomLabel = new YK.Label("Border Bottom Color: ");
					borderBottomLabel.resetMinWidth(130);
				this._hboxBorderBottomColor.appendChild(borderBottomLabel, {"expand": false, "fill": false});

			this._mainVbox.appendChild(hboxBorderWidth, {"expand": false, "fill": false});
			this._mainVbox.appendChild(this._hboxBorderLeftColor, {"expand": false, "fill": false});
			this._mainVbox.appendChild(this._hboxBorderRightColor, {"expand": false, "fill": false});
			this._mainVbox.appendChild(this._hboxBorderTopColor, {"expand": false, "fill": false});
			this._mainVbox.appendChild(this._hboxBorderBottomColor, {"expand": false, "fill": false});
		scroller.appendChild(this._mainVbox, true)
	borderColorFrame.appendChild(scroller);
	
	this._entryBorderWidth.connect("changed", function(value){
		self._clearColorEntry(value);
		self._addColorEntry(value);
		self._generateColorObj();
	});
	this._entryBorderWidth.setText(2);

	return borderColorFrame;
};
CSS3.generatorBox.prototype = {
	_addColorEntry: function(column){
		var offset = column - this._hboxBorderLeftColor.getChildren().length;
		if(offset <= 0) return;

		for(var i = 0; i <= offset; i++){
			this._hboxBorderLeftColor.appendChild(this._buildColorEntry(), {"expand": false, "fill": false, "padding": 3});
			this._hboxBorderRightColor.appendChild(this._buildColorEntry(), {"expand": false, "fill": false, "padding": 3});
			this._hboxBorderTopColor.appendChild(this._buildColorEntry(), {"expand": false, "fill": false, "padding": 3});
			this._hboxBorderBottomColor.appendChild(this._buildColorEntry(), {"expand": false, "fill": false, "padding": 3});
		}
		this._generateColorObj();
	},
	_generateColorObj: function(){
		var colorObj = {'width': parseInt( this._entryBorderWidth.getText() ), 'left': [], 'right': [], 'top': [], 'bottom': []};
		var entriesLeft = this._hboxBorderLeftColor.getChildren();
		var entriesRight = this._hboxBorderRightColor.getChildren();
		var entriesTop = this._hboxBorderTopColor.getChildren();
		var entriesBottom = this._hboxBorderBottomColor.getChildren();
		for(var i = 1, len = entriesLeft.length; i < len; i++){
			colorObj['left'].push(entriesLeft[i].getText());
			colorObj['right'].push(entriesRight[i].getText());
			colorObj['top'].push(entriesTop[i].getText());
			colorObj['bottom'].push(entriesBottom[i].getText());
		}
		YK.Event.triggerPublicListener("border_color_changed", colorObj);
	},
	_buildColorEntry: function(){
		var colorEntry = new YK.Entry(), self = this;
		colorEntry.resetMinWidth(65);

		var inputDomColorEntry = colorEntry.getNode().firstChild.firstChild;
		var myPicker = new jscolor.color(inputDomColorEntry, {});
		myPicker.fromString('ADAAAA');

		var self = this;
		colorEntry.connect("focused", function(){
			self._generateColorObj();
		});

		return colorEntry;
	},
	_clearColorEntry: function(column){
		var offset = this._hboxBorderLeftColor.getChildren().length - 1 - column;
		if( offset <= 0 ) return;

		for(var i = this._hboxBorderLeftColor.getChildren().length - 1; i > column; i--){
			this._hboxBorderLeftColor.removeChildByIndex(i);
			this._hboxBorderRightColor.removeChildByIndex(i);
			this._hboxBorderTopColor.removeChildByIndex(i);
			this._hboxBorderBottomColor.removeChildByIndex(i);
		}
	}
};
