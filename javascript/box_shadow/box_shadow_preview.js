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
	YK.Event.addPublicListener(this, "boxshadowchanged", function(gradientObj){
		self._changeGradient(gradientObj);
	});
	return this._container;
};

CSS3.outputBox.prototype._changeGradient = function(gradientObj){
	var obj = gradientObj;

	var boxShadow = 
		gradientObj["shawdowType"] + " " + 
		Math.floor( gradientObj["hScale"] ) + "px " + 
		Math.floor( gradientObj["vScale"] ) + "px " + 
		Math.floor( gradientObj["blurScale"] ) + "px #" +
		gradientObj["boxShadowColor"];
	if( YK.Util.detect.browser === "Firefox" )
		this._domWidgetNodeStyle.MozBoxShadow = boxShadow;
	if( YK.Util.detect.browser === "Chrome" )
		this._domWidgetNodeStyle.WebkitBoxShadow = boxShadow;
	YK.Event.triggerPublicListener("csscodechanged_boxshadow", boxShadow);
};
