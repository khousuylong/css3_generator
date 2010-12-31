CSS3.outputBox = function(){
	var scroller = new YK.VScroller();
	scroller.resetMinSize(300, 300);
		this._domWidget = new YK.Dom(280, 280);
			this._boxContainer = YK.domBuilder.create({'tag': 'div'});
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


		this._domWidget.appendChild(this._boxContainer, {'expand': true, 'fill': false}, {'expand': true, 'fill': false});
	scroller.appendChild(this._domWidget, true);
	var self = this;
	YK.Event.addPublicListener(this, "transformation_changed", function(obj){
		self._changeTransformation(obj);
	});
	return scroller;
};

CSS3.outputBox.prototype._changeTransformation = function(obj){
	var boxStyle = this._boxContainer.style;
	var transform = "scale(" + obj['scale'] + ") rotate(" + obj['rotate'] + "deg) translate(" + obj['translateX'] + "px, " + obj['translateY'] +"px) skew("+ obj['skewX'] + "deg, " + obj['skewY'] +"deg)";
	boxStyle.MozTransform = transform;
	boxStyle.WebkitTransform = transform;
	boxStyle.OTransform = transform;
	boxStyle.MsTransform = transform;
	boxStyle.transform = transform;
	YK.Event.triggerPublicListener("csscodechanged_transformation", transform);
};
