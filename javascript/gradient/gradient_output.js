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
	return this._domObj;
};

CSS3.outputBox.prototype._changeGradient = function(gradientObj){
	var obj = gradientObj;
	this._divGradient.style.backgroundImage = "-moz-linear-gradient(" + obj['vPosition'] + "% " + obj['hPosition'] + "% " + obj['angle'] + "deg,#" + obj['startColor'] + ", #" + obj['endColor'] + ", #F0FFFD 100%)";
};
