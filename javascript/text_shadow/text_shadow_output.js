CSS3.outputBox = function(){
	this._startColor = "40B9FF";
	this._endColor	 = "B8EAFF";
	this._vPosition  = 19;
	this._hPosition	 = 50;
	this._angle	     = 90;
	this._stopColor	 = "F0FFFD";
	this._stopPosition = 100;
	
	this._domWidget = new YK.Dom(100, 150);
		this._divTextShadow = YK.domBuilder.create({'tag': 'div', "text": "Text Shadow"});
		var divTextShadowStyle = this._divTextShadow.style;
		divTextShadowStyle.fontFamily = "Times New Roman, Times, serif";
		divTextShadowStyle.fontSize = "40px";
		divTextShadowStyle.fontWeight = "bold";
		divTextShadowStyle.width = "400px";
		divTextShadowStyle.height = "100px";
 		divTextShadowStyle.textAlign = "center";
	this._domWidget.appendChild(this._divTextShadow);

	var self = this;
	YK.Event.addPublicListener(this, "textshadowchanged", function(gradientObj){
		self._changeGradient(gradientObj);
	});
	return this._domWidget;
};

CSS3.outputBox.prototype._changeGradient = function(gradientObj){
	var obj = gradientObj;

	var boxShadow = 
		" " + 
		Math.floor( gradientObj["hScale"] ) + "px " + 
		Math.floor( gradientObj["vScale"] ) + "px " + 
		Math.floor( gradientObj["blurScale"] ) + "px #" +
		gradientObj["boxShadowColor"];

	this._divTextShadow.style.textShadow = boxShadow;
	YK.Event.triggerPublicListener("csscodechanged_textshadow", boxShadow);
};
