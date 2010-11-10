var model = new YK.TreeStore();
	if( YK.Util.detect.browser === "Firefox" )
		model.append(null, {"display": "Gradient", "generator": "javascript/gradient/gradient_generator_mozilla.js", "output": "javascript/gradient/gradient_output.js", "cssCode": "javascript/gradient/gradient_css.js"});
	else
		model.append(null, {"display": "Gradient", "generator": "javascript/gradient/gradient_generator_webkit.js", "output": "javascript/gradient/gradient_output_webkit.js", "cssCode": "javascript/gradient/gradient_css.js"});
	
	model.append(null, {"display": "Box Shadow", "generator":"javascript/box_shadow/box_shadow_generator_mozilla.js", "output": "javascript/box_shadow/box_shadow_output.js", "cssCode": "javascript/box_shadow/box_shadow_css.js"});
	
