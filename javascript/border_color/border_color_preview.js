CSS3.outputBox = function(){
	this._startColor = "40B9FF";
	this._endColor	 = "B8EAFF";
	this._vPosition  = 19;
	this._hPosition	 = 50;
	this._angle	     = 90;
	this._stopColor	 = "F0FFFD";
	this._stopPosition = 100;
	this._container = new YK.Container();
		this._vbox = new YK.VBoxFactory(false);
			this._domObj = new YK.Dom(100, 150);
				this._divTextShadow = YK.domBuilder.create({'tag': 'div'});
				var divTextShadowStyle = this._divTextShadow.style;
				divTextShadowStyle.fontFamily = "Times New Roman, Times, serif";
				divTextShadowStyle.display = "table-cell";
				divTextShadowStyle.textAlign = "center";
				divTextShadowStyle.fontSize = "40px";
				divTextShadowStyle.fontWeight = "bold";
				divTextShadowStyle.verticalAlign = "middle";
				divTextShadowStyle.width = "300px";
				divTextShadowStyle.height = "50px";
			this._domObj.getNode().style.border = "1px solid #D5D5D5";
			this._domObj.appendChild(this._divTextShadow);
		this._vbox.appendChild(this._domObj, {"expand": false, "fill": false});
	this._container.appendChild(this._vbox, {"expand": true, "fill": false}, {"expand": true, "fill": false});
	var self = this;
	YK.Event.addPublicListener(this, "border_color_changed", function(borderColorObj){
		self._changeBorderColor(borderColorObj);
	});
	return this._container;
};

CSS3.outputBox.prototype._changeBorderColor = function(borderColorObj){
	var colorObj, dom = this._domObj.getNode();
	var domStyle = this._domObj.getNode().style;
	domStyle.border =  borderColorObj['width'] + "px solid";

	for( el in borderColorObj )
		if(typeof borderColorObj[el] === "number") 
			continue;
		else
			domStyle["MozBorder" + el.capitalize() + "Colors"] = "#" + borderColorObj[el].join(" #");

	YK.Event.triggerPublicListener("csscodechanged_border_color", borderColorObj);
};
