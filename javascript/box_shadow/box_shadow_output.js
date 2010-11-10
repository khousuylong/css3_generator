CSS3.outputBox = function(){
	this._startColor = "40B9FF";
	this._endColor	 = "B8EAFF";
	this._vPosition  = 19;
	this._hPosition	 = 50;
	this._angle	     = 90;
	this._stopColor	 = "F0FFFD";
	this._stopPosition = 100;
	
	this._vbox = new YK.VBoxFactory(false);
		this._domObj = new YK.Dom(100, 150);
			this._divBoxShadow = YK.domBuilder.create({'tag': 'div'});
			this._divBoxShadow.style.width = "100px";
			this._divBoxShadow.style.height = "100px";
			this._divBoxShadow.style.WebkitBorderRadius = "6px";
			this._divBoxShadow.style.MozBorderRadius = "6px";
			this._divBoxShadow.style.BorderRadius = "6px";
			this._divBoxShadow.style.border = "1px solid #D5D5D5";
		this._domObj.appendChild(this._divBoxShadow);
	this._vbox.appendChild(this._domObj, {"expand": false, "fill": false});
	var self = this;
	YK.Event.addPublicListener(this, "boxshadowchanged", function(gradientObj){
		self._changeGradient(gradientObj);
	});
	return this._vbox;
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
		this._divBoxShadow.style.MozBoxShadow = boxShadow;
	if( YK.Util.detect.browser === "Chrome" )
		this._divBoxShadow.style.WebkitBoxShadow = boxShadow;
	YK.Event.triggerPublicListener("csscodechanged_boxshadow", boxShadow);
};
