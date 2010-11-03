CSS3.outputBox = function(){
	this._startColor = "40B9FF";
	this._endColor	 = "B8EAFF";
	this._vPosition  = 19;
	this._hPosition	 = 50;
	this._angle	     = 90;
	this._stopColor	 = "F0FFFD";
	this._stopPosition = 100;

	this._domObj = new YK.Dom(100, 150);
		this._divGradient = YK.domBuilder.create({'tag': 'div'});
		this._divGradient.style.width = "100px";
		this._divGradient.style.height = "100px";
		this._divGradient.style.WebkitBorderRadius = "6px";
		this._divGradient.style.MozBorderRadius = "6px";
		this._divGradient.style.BorderRadius = "6px";
		this._divGradient.style.border = "1px solid #D5D5D5";
	this._domObj.appendChild(this._divGradient);
	
	var self = this;
	YK.Event.addPublicListener(this, "gradientchanged", function(gradientObj){
		self._changeGradient(gradientObj);
	});
	YK.Event.addPublicListener(this, "stopadded", function(heightToAdd){
		var height = self._domObj.getHeight();
		self._domObj.resizeHeight(height + heightToAdd);
	});
	YK.Event.addPublicListener(this, "stopremoved", function(heightToRemove){
		var height = self._domObj.getHeight();
		self._domObj.resizeHeight(height - heightToRemove);
	});
	return this._domObj;
};

CSS3.outputBox.prototype._changeGradient = function(gradientObj){
	var obj = gradientObj;
	var backgroundImage = 
		"-webkit-gradient(linear, " + 
		Math.floor( obj['hPositionStart'] ) + "% " +
		Math.floor( obj['vPositionStart'] ) + "%, " +
		Math.floor( obj['hPositionEnd'] ) + "% " +
		Math.floor( obj['vPositionEnd'] ) + "%, " +
		"from(#" + obj['startColor'] + "), " +
		"to(#" + obj['endColor'] + "), ";
		
	var stopProperties = gradientObj['stopProperties'];
	for(var i = 0, len = stopProperties.length; i < len; i++){
		backgroundImage += "color-stop(."+ Math.floor( stopProperties[i]['stopScale'] * 10 ) +", #" + stopProperties[i]['stopColor'] + "),";	
	}
	backgroundImage = backgroundImage.substring(0, backgroundImage.length - 1) + ")";
	
	this._divGradient.style.backgroundImage = backgroundImage ;
	YK.Event.triggerPublicListener("csscodechanged", backgroundImage);
};
