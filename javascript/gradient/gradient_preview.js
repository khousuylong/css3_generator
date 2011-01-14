CSS3.outputBox = function(){
	this._startColor = "40B9FF";
	this._endColor	 = "B8EAFF";
	this._vPosition  = 19;
	this._hPosition	 = 50;
	this._angle	     = 90;
	this._stopColor	 = "F0FFFD";
	this._stopPosition = 100;
	
	this._container = new YK.Container();
		this._domWidget = new YK.Dom(300, 150);
		this._domWidgetNodeStyle = this._domWidget.getNode().style;
		this._domWidgetNodeStyle.WebkitBorderRadius = "6px";
		this._domWidgetNodeStyle.MozBorderRadius = "6px";
		this._domWidgetNodeStyle.BorderRadius = "6px";
		this._domWidgetNodeStyle.border = "1px solid #D5D5D5";
		this._domWidget.appendChild(YK.domBuilder.create({'tag': 'div'}));
	
	this._container.appendChild(this._domWidget, {"expand": true, "fill": false}, {"expand": true, "fill": false});

	var self = this;
	YK.Event.addPublicListener(this, "gradientchanged", function(gradientObj){
		self._changeGradient(gradientObj);
	});
	YK.Event.addPublicListener(this, "stopadded", function(heightToAdd){
		var height = self._domWidget.getHeight() + heightToAdd;
		self._domWidget.resizeHeight(height);
	});
	YK.Event.addPublicListener(this, "stopremoved", function(heightToRemove){
		var height = self._domWidget.getHeight() - heightToRemove;
		self._domWidget.resizeHeight(height);
	});
	return this._container;
};

CSS3.outputBox.prototype._changeGradient = function(gradientObj){
	var obj = gradientObj;
	var backgroundImage = 
		"-moz-linear-gradient(" + 
		Math.floor( obj['vPosition'] ) + "% " + 
		Math.floor( obj['hPosition'] ) + "% " + 
		Math.floor( obj['angle'] ) + "deg,#" + 
		obj['startColor'] + ", #" + 
		obj['endColor'] + ", ";
		
	var stopProperties = gradientObj['stopProperties'];
	for(var i = 0, len = stopProperties.length; i < len; i++){
		backgroundImage += "#" + stopProperties[i]['stopColor'] + " " + Math.floor( stopProperties[i]['stopScale'] ) + "%,";
	}
	backgroundImage = backgroundImage.substring(0, backgroundImage.length - 1) + ")";
	this._domWidgetNodeStyle.backgroundImage = backgroundImage 
	YK.Event.triggerPublicListener("csscodechanged_gradient", backgroundImage);
};
