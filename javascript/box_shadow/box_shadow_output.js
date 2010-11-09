CSS3.outputBox = function(){
	this._startColor = "40B9FF";
	this._endColor	 = "B8EAFF";
	this._vPosition  = 19;
	this._hPosition	 = 50;
	this._angle	     = 90;
	this._stopColor	 = "F0FFFD";
	this._stopPosition = 100;

	this._domObj = new YK.Dom(100, 150);
		this._divBoxShadow = YK.domBuilder.create({'tag': 'div'});
		this._divBoxShadow.style.width = "100px";
		this._divBoxShadow.style.height = "100px";
		this._divBoxShadow.style.WebkitBorderRadius = "6px";
		this._divBoxShadow.style.MozBorderRadius = "6px";
		this._divBoxShadow.style.BorderRadius = "6px";
		this._divBoxShadow.style.border = "1px solid #D5D5D5";
	this._domObj.appendChild(this._divBoxShadow);
	
	var self = this;
	YK.Event.addPublicListener(this, "boxshadowchanged", function(gradientObj){
		self._changeGradient(gradientObj);
	});
	return this._domObj;
};

CSS3.outputBox.prototype._changeGradient = function(gradientObj){
	var obj = gradientObj;

	var boxShadow = 
		gradientObj["shawdowType"] + " " + 
		gradientObj["hScale"] + "px " + 
		gradientObj["vScale"] + "px " + 
		gradientObj["blurScale"] + "px #" +
		gradientObj["boxShadowColor"];
		
	this._divBoxShadow.style.MozBoxShadow = boxShadow;
	console.log(this._divBoxShadow)
//	YK.Event.triggerPublicListener("csscodechanged", backgroundImage);
};
