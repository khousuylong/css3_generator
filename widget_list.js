var model = new YK.TreeStore();
	if( YK.Util.detect.browser === "Firefox" )
		model.append(null, {"display": "Gradient", "generator": "javascript/gradient/gradient_generator_mozilla.js", "output": "javascript/gradient/gradient_output.js", "cssCode": "javascript/gradient/gradient_css.js"});
	else
		model.append(null, {"display": "Gradient", "generator": "javascript/gradient/gradient_generator_webkit.js", "output": "javascript/gradient/gradient_output_webkit.js", "cssCode": "javascript/gradient/gradient_css.js"});
	
	model.append(null, {"display": "Box Shadow", "generator":"javascript/box_shadow/box_shadow_generator_mozilla.js", "output": "javascript/box_shadow/box_shadow_output.js", "cssCode": "javascript/box_shadow/box_shadow_css.js"});

	model.append(null, {"display": "Text Shadow", "generator":"javascript/text_shadow/text_shadow_generator_mozilla.js", "output": "javascript/text_shadow/text_shadow_output.js", "cssCode": "javascript/text_shadow/text_shadow_css.js"});

	var BorderRadiuEqual = model.append(null, {"display": "Border Radius"});
		model.append(BorderRadiuEqual, {"display": "Equal Radius", "generator":"javascript/border_radius/border_radius_equal_generator.js", "output": "javascript/border_radius/border_radius_output.js", "cssCode": "javascript/border_radius/border_equal_radius_css.js"});
		model.append(BorderRadiuEqual, {"display": "Different Radius ", "generator":"javascript/border_radius/border_radius_dif_generator.js", "output": "javascript/border_radius/border_radius_output.js", "cssCode": "javascript/border_radius/border_dif_radius_css.js"});

	model.append(null, {"display": "Multiple Columns", "generator":"javascript/multiple_columns/multiple_columns_generator.js", "output": "javascript/multiple_columns/multiple_columns_preview.js", "cssCode": "javascript/multiple_columns/multiple_columns_css.js"});

	model.append(null, {
		"display": "Box Sizing", 
		"generator":"javascript/box_sizing/box_sizing_generator.js", 
		"output": "javascript/box_sizing/box_sizing_preview.js", 
		"cssCode": "javascript/box_sizing/box_sizing_code.js"
	});

	model.append(null, {
		"display": "Outline", 
		"generator":"javascript/outline/outline_generator.js", 
		"output": "javascript/outline/outline_preview.js", 
		"cssCode": "javascript/outline/outline_css.js"
	});
