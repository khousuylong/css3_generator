CSS3.outputBox = function(){
	var scroller = new YK.VScroller();
	scroller.resetMinSize(300, 300);
		this._domWidget = new YK.Dom(280, 280);
			this._boxContainer = YK.domBuilder.create({'tag': 'div', 'class': 'transition_preview'});
			this._boxContainer.innerHTML = "Preview Area";
			var boxContainerStyle = this._boxContainer.style;
			this._domWidgetNodeStyle = this._domWidget.getNode().style;
			boxContainerStyle.width = "200px"
			boxContainerStyle.height = "60px";

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
		boxStyle.color = "#C93524";
		boxStyle.height = "160px";
		boxStyle.weight = "normal";
	});

	YK.Event.addDomListener(this._boxContainer, "mouseout", function(){
		boxStyle.outline = "3px dotted #5D4CC9";
		boxStyle.background = "#D6D6D6";
		boxStyle.color = "#22C944";
		boxStyle.height = "60px";
		boxStyle.weight = "bold";
	});

	YK.Event.triggerPublicListener("csscodechanged_transition", transitionProperties);
};
