CSS3.outputBox = function(){
	var scroller = new YK.VScroller();
	scroller.resetMinSize(300, 300);
		this._domWidget = new YK.Dom(280, 280);
			this._boxContainer = YK.domBuilder.create({'tag': 'div', 'text': 'Preview Area'});
			var boxContainerStyle = this._boxContainer.style;
			this._domWidgetNodeStyle = this._domWidget.getNode().style;
			boxContainerStyle.WebkitBorderRadius = "6px";
			boxContainerStyle.MozBorderRadius = "6px";
			boxContainerStyle.BorderRadius = "6px";
			boxContainerStyle.border = "2px solid #616161";
			boxContainerStyle.background = "#D6D6D6";
			boxContainerStyle.width = "200px"
			boxContainerStyle.height = "100px";
			boxContainerStyle.color = "#22C944";
			boxContainerStyle.outline = "3px dotted #5D4CC9"
			boxContainerStyle.outlineOffset = "5px";

		this._domWidget.appendChild(this._boxContainer, {'expand': true, 'fill': false}, {'expand': true, 'fill': false});
	scroller.appendChild(this._domWidget, true);
	var self = this;
	YK.Event.addPublicListener(this, "transition_changed", function(obj){
		self._changeTransition(obj);
	});
	return scroller;
};

CSS3.outputBox.prototype._changeTransition = function(obj){
	var transitionProperties = obj['property'] + " " + obj['duration'] + obj['timing'] + " " + obj['function'];

	var boxStyle = this._boxContainer.style;
	boxStyle.WebkitTransition = transitionProperties;

	YK.Event.addDomListener(this._boxContainer, "mouseover", function(){
		boxStyle.outline = "15px dashed #C93524"
		boxStyle.background = "#0C5EC9";
		boxStyle.color = "#C9B81C";
		boxStyle.height = "160px";
	});

	YK.Event.addDomListener(this._boxContainer, "mouseout", function(){
		boxStyle.outline = "3px dotted #5D4CC9";
		boxStyle.background = "#D6D6D6";
		boxStyle.color = "#22C944";
		boxStyle.height = "100px";
	});

	YK.Event.triggerPublicListener("csscodechanged_transition", transitionProperties);
};
