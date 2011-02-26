CSS3.outputBox = function(){
	var scroller = new YK.VScroller();
	scroller.resetMinSize(300, 300);
		this._domWidget = new YK.Dom(280, 280);
			this._boxContainer = YK.domBuilder.create({'tag': 'p', 'class': 'word_wrap_preview'});
			this._boxContainer.innerHTML = "This paragraph has long words thisisaveryverylongwordthatisntreallyoneword and again a longwordwithnospacesinit"

		this._domWidget.appendChild(this._boxContainer, {'expand': true, 'fill': false}, {'expand': true, 'fill': false});
	scroller.appendChild(this._domWidget, true);
	var self = this;
	YK.Event.addPublicListener(this, "word_wrap_property_changed", function(obj){
		self._changeWordWrapProperty(obj);
	});
	return scroller;
};

CSS3.outputBox.prototype._changeWordWrapProperty = function(obj){
	var wordWrapProperty = obj["property"]

	var boxStyle = this._boxContainer.style;
	boxStyle.wordWrap = wordWrapProperty;

	YK.Event.triggerPublicListener("csscodechanged_word_wrap", wordWrapProperty);
};
