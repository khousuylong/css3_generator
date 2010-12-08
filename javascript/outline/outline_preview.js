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
			boxContainerStyle.border = "4px solid #D5D5D5";
			boxContainerStyle.width = "200px"
			boxContainerStyle.height = "100px";
	
		
		this._domWidget.appendChild(this._boxContainer, {'expand': true, 'fill': false}, {'expand': true, 'fill': false});
	scroller.appendChild(this._domWidget, true);
	var self = this;
	YK.Event.addPublicListener(this, "outline_changed", function(obj){
		self._changeOutline(obj);
	});
	return scroller;
};

CSS3.outputBox.prototype._changeOutline = function(obj){
	var outline = " " + obj['thickness'] +"px "+ obj['style'] +" #"+ obj['color'];
	var outlineOffset = obj['offset'] + "px";
	this._boxContainer.style.outline = outline;
	this._boxContainer.style.outlineOffset = outlineOffset;
	YK.Event.triggerPublicListener("csscodechanged_outline", outline, outlineOffset);
};
