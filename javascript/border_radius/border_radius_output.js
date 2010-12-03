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
			this._divTextShadow = YK.domBuilder.create({'tag': 'div', "text": "Preview Box"});
			var divTextShadowStyle = this._divTextShadow.style;
			divTextShadowStyle.fontFamily = "Times New Roman, Times, serif";
			divTextShadowStyle.display = "table-cell";
			divTextShadowStyle.textAlign = "center";
			divTextShadowStyle.fontSize = "40px";
			divTextShadowStyle.fontWeight = "bold";
			divTextShadowStyle.verticalAlign = "middle";
			divTextShadowStyle.width = "400px";
			divTextShadowStyle.height = "100px";
			divTextShadowStyle.border = "1px solid #D5D5D5";
		this._domObj.appendChild(this._divTextShadow);
	this._vbox.appendChild(this._domObj, {"expand": false, "fill": false});
	var self = this;
	YK.Event.addPublicListener(this, "border_radius_changed", function(borderRadiusObj){
		self._changeGradient(borderRadiusObj);
	});
	return this._vbox;
};

CSS3.outputBox.prototype._changeGradient = function(borderRadiusObj){
	
	if( borderRadiusObj.hasOwnProperty("borderRadiusTopLeft") )
		this._makeDifRadius(borderRadiusObj);	
	else 
		this._makeEqualRadius(borderRadiusObj);

	YK.Event.triggerPublicListener("csscodechanged_border_radius", borderRadiusObj);
};

CSS3.outputBox.prototype._makeDifRadius = function(obj){
	var divTextShadowStyle = this._divTextShadow.style;
	divTextShadowStyle.MozBorderRadiusTopleft = Math.floor( obj['borderRadiusTopLeft'] ) + 'px';
	divTextShadowStyle.MozBorderRadiusTopright = Math.floor( obj['borderRadiusTopRight'] ) + 'px';
	divTextShadowStyle.MozBorderRadiusBottomleft = Math.floor( obj['borderRadiusBottomLeft'] ) + 'px';
	divTextShadowStyle.MozBorderRadiusBottomright = Math.floor( obj['borderRadiusBottomRight'] ) + 'px';

	divTextShadowStyle.borderTopLeftRadius = Math.floor( obj['borderRadiusTopLeft'] ) + 'px';
	divTextShadowStyle.borderTopRightRadius = Math.floor( obj['borderRadiusTopRight'] ) + 'px';
	divTextShadowStyle.borderBottomLeftRadius = Math.floor( obj['borderRadiusBottomLeft'] ) + 'px';
	divTextShadowStyle.borderBottomRightRadius = Math.floor( obj['borderRadiusBottomRight'] ) + 'px';
};
CSS3.outputBox.prototype._makeEqualRadius = function(obj){
	var divTextShadowStyle = this._divTextShadow.style;
	var borderRadius = Math.floor( obj["borderRadius"] ) + "px ";
	divTextShadowStyle.WebkitBorderRadius = borderRadius;
	divTextShadowStyle.MozBorderRadius = borderRadius;
	divTextShadowStyle.BorderRadius = borderRadius;
};
