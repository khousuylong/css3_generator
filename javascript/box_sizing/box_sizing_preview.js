CSS3.outputBox = function(){
	this._container = new YK.Container();
		this._domWidget = new YK.Dom(280, 280);
			var boxContainer = YK.domBuilder.create({'tag': 'div'});
			var boxContainerStyle = boxContainer.style;
			this._domWidgetNodeStyle = this._domWidget.getNode().style;
			boxContainerStyle.WebkitBorderRadius = "6px";
			boxContainerStyle.MozBorderRadius = "6px";
			boxContainerStyle.BorderRadius = "6px";
			boxContainerStyle.border = "1px solid #D5D5D5";
			boxContainerStyle.width = "200px"
			boxContainerStyle.height = "250px";

				this._boxDiv1 = YK.domBuilder.create({'append': boxContainer,'tag': 'div', 'class': 'box_sizing_div1'});
				this._boxDiv1.innerHTML = "Box 1";
				var boxDiv1Style = this._boxDiv1.style;
				boxDiv1Style.float = "left";
				boxDiv1Style.position = "relative";
				boxDiv1Style.border = "2px dashed blue";
				boxDiv1Style.width = "100px";
				boxDiv1Style.height = "100px";
				boxDiv1Style.MozBoxSizing = "border-box";
				boxDiv1Style.WebkitBoxSizing = "border-box"
				boxDiv1Style.boxSizing = "border-box";

				this._boxDiv2 = YK.domBuilder.create({'append': boxContainer,'tag': 'div', 'class': 'box_sizing_div2'});
				this._boxDiv2.innerHTML = "Box 2";
				var boxDiv2Style = this._boxDiv2.style;
				boxDiv2Style.float = "left";
				boxDiv2Style.position = "relative";
				boxDiv2Style.border = "2px dashed red";
				boxDiv2Style.width = "100px";
				boxDiv2Style.height = "100px";
				boxDiv2Style.MozBoxSizing = "border-box";
				boxDiv2Style.WebkitBoxSizing = "border-box"
				boxDiv2Style.boxSizing = "border-box";

		this._domWidget.appendChild(boxContainer);
	this._container.appendChild(this._domWidget, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	var self = this;
	YK.Event.addPublicListener(this, "box_sizing_changed", function(obj){
		self._changeBoxSizing(obj);
	});
	return this._container;
};

CSS3.outputBox.prototype._changeBoxSizing = function(obj){
	this._boxDiv1.style.MozBoxSizing = obj['boxOption'];
	this._boxDiv1.style.WebkitBoxSizing = obj['boxOption'];
	this._boxDiv1.style.boxSizing = obj['boxOption'];

	this._boxDiv2.style.MozBoxSizing = obj['boxOption'];
	this._boxDiv2.style.WebkitBoxSizing = obj['boxOption'];
	this._boxDiv2.style.boxSizing = obj['boxOption'];

	YK.Event.triggerPublicListener("csscodechanged_box_sizing", obj['boxOption']);
};
