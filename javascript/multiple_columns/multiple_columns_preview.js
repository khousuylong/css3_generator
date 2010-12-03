CSS3.outputBox = function(){
	
	this._domWidget = new YK.Dom(400, 200);
	this._domWidgetNodeStyle = this._domWidget.getNode().style;
	this._domWidgetNodeStyle.WebkitBorderRadius = "6px";
	this._domWidgetNodeStyle.MozBorderRadius = "6px";
	this._domWidgetNodeStyle.BorderRadius = "6px";
	this._domWidgetNodeStyle.border = "1px solid #D5D5D5";
		this._textDom = YK.domBuilder.create({'tag': 'p'});
		this._textDom.innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
								"Sed metus nibh, sodales a, porta at," +
								"vulputate eget, dui. Pellentesque ut nisl." +
								"Maecenas tortor turpis, interdum non," +
								"sodales non, iaculis ac, lacus." +
								"auctor, tortor quis iaculis malesuada," +
								"libero lectus bibendum purus, sit amet" +
								"tincidunt quam turpis vel lacus." +
								"In pellentesque nisl non sem. Suspendisse" +
								"nunc sem, pretium eget, cursus a," +
								"fringilla vel, urna." + 
								"Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
								"Sed metus nibh, sodales a, porta at," +
								"vulputate eget, dui. Pellentesque ut nisl." +
								"Maecenas tortor turpis, interdum non," +
								"sodales non, iaculis ac, lacus." +
								"auctor, tortor quis iaculis malesuada," +
								"libero lectus bibendum purus, sit amet" +
								"tincidunt quam turpis vel lacus.";

		this._textDom.style.height = "200px";
		this._textDom.style.width  = "400px"

	this._domWidget.appendChild(this._textDom, {"expand": true, "fill": true}, {"expand": true, "fill": true});
	
	var self = this;
	YK.Event.addPublicListener(this, "columns_changed", function(Obj){
		self._changePreview(Obj);
	});
	return this._domWidget;
};

CSS3.outputBox.prototype._changePreview = function(obj){
	this._textDom.style.MozColumnCount = obj['columns'];
	this._textDom.style.MozColumnGap = obj['space'] + "px";
	this._textDom.style.WebkitColumnCount = obj['columns'];
	this._textDom.style.WebkitColumnGap = obj['space'] + "px";

	YK.Event.triggerPublicListener("csscodechanged_multiple_columns", obj);
};
