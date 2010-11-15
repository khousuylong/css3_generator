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
			this._divTextShadow = YK.domBuilder.create({'tag': 'div', "text": "Text Shadow"});
			var divTextShadowStyle = this._divTextShadow.style;
			divTextShadowStyle.fontFamily = "Times New Roman, Times, serif";
			divTextShadowStyle.display = "table-cell";
			divTextShadowStyle.textAlign = "center";
			divTextShadowStyle.fontSize = "40px";
			divTextShadowStyle.fontWeight = "bold";
			divTextShadowStyle.verticalAlign = "middle";
			divTextShadowStyle.width = "100px";
			divTextShadowStyle.height = "200px";
			divTextShadowStyle.WebkitBorderRadius = "6px";
			divTextShadowStyle.MozBorderRadius = "6px";
			divTextShadowStyle.BorderRadius = "6px";
			divTextShadowStyle.border = "1px solid #D5D5D5";
		this._domObj.appendChild(this._divTextShadow);
	this._vbox.appendChild(this._domObj, {"expand": false, "fill": false});
	var self = this;
	YK.Event.addPublicListener(this, "textshadowchanged", function(gradientObj){
		self._changeGradient(gradientObj);
	});
	return this._vbox;
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
