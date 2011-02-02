var model = new YK.TreeStore();
	//Border
	var border = model.append(null, {"display": "Borders" });
		model.append(border, {
			"display": "Equal Border Radius", 
			"generator":"javascript/border_radius/border_radius_equal_generator.js", 
			"output": "javascript/border_radius/border_radius_preview.js", 
			"cssCode": "javascript/border_radius/border_equal_radius_css.js"
		});
		model.append(border, {
			"display": "Different Border Radius ", 
			"generator":"javascript/border_radius/border_radius_dif_generator.js", 
			"output": "javascript/border_radius/border_radius_preview.js", 
			"cssCode": "javascript/border_radius/border_dif_radius_css.js"
		});
		model.append(border, {
			"display": "Border Color", 
			"generator":"javascript/border_color/border_color_generator.js", 
			"output": "javascript/border_color/border_color_preview.js", 
			"cssCode": "javascript/border_radius/border_dif_radius_css.js"
		});
		model.append(border, {
			"display": "Border Image ", 
		});

	//Background
	var background = model.append(null, {"display": "Background"});
		model.append(background, {
			"display": "background-origin", 
		});
		model.append(background, {
			"display": "background-clip", 
		});
		model.append(background, {
			"display": "background-size", 
		});
		model.append(background, {
			"display": "multiple backgrounds", 
		});
	
	//color
	var color = model.append(null, {"display": "Color"});
		model.append(color, {
			"display": "HSL colors", 
		});
		model.append(color, {
			"display": "HSLA colors", 
		});
		model.append(color, {
			"display": "opacity", 
		});
		model.append(color, {
			"display": "RGBA colors", 
		});

	//text effects
	var textEffect = model.append(null, {"display": "Text Effect"});
		model.append(textEffect, {
			"display": "Text Shadow", 
			"generator":"javascript/text_shadow/text_shadow_generator_mozilla.js", 
			"output": "javascript/text_shadow/text_shadow_preview.js", 
			"cssCode": "javascript/text_shadow/text_shadow_css.js"
		});
		model.append(textEffect, {
			"display": "text-overflow", 
		});
		model.append(textEffect, {
			"display": "word-wrap", 
		});

	//box 
	var box = model.append(null, {"display": "Box"});
		model.append(box, {
			"display": "Box Shadow", 
			"generator":"javascript/box_shadow/box_shadow_generator_mozilla.js", 
			"output": "javascript/box_shadow/box_shadow_preview.js", 
			"cssCode": "javascript/box_shadow/box_shadow_css.js"
		});
		model.append(box, {
			"display": "Box Sizing", 
			"generator":"javascript/box_sizing/box_sizing_generator.js", 
			"output": "javascript/box_sizing/box_sizing_preview.js", 
			"cssCode": "javascript/box_sizing/box_sizing_code.js"
		});
		model.append( box, {
			"display": "resize", 
		});
		model.append( box, {
			"display": "Outline", 
			"generator":"javascript/outline/outline_generator.js", 
			"output": "javascript/outline/outline_preview.js", 
			"cssCode": "javascript/outline/outline_css.js"
		});

	if( YK.Util.detect.browser === "Firefox" )
		model.append(null, {
			"display": "Gradient", 
			"generator": "javascript/gradient/gradient_generator_mozilla.js", 
			"output": "javascript/gradient/gradient_preview.js", 
			"cssCode": "javascript/gradient/gradient_css.js"
		});
	else
		model.append(null, {
			"display": "Gradient", 
			"generator": "javascript/gradient/gradient_generator_webkit.js", 
			"output": "javascript/gradient/gradient_preview_webkit.js", 
		"cssCode": "javascript/gradient/gradient_css.js"
	});

	model.append(null, {
		"display": "Multiple Columns", 
		"generator":"javascript/multiple_columns/multiple_columns_generator.js", 
		"output": "javascript/multiple_columns/multiple_columns_preview.js", 
		"cssCode": "javascript/multiple_columns/multiple_columns_css.js"
	});

	model.append(null, {
		"display": "Transitions", 
		"generator":"javascript/transition/transition_generator.js", 
		"output": "javascript/transition/transition_preview.js", 
		"cssCode": "javascript/transition/transition_css.js"
	});

	model.append(null, {
		"display": "Transformation", 
		"generator":"javascript/transformation/transformation_generator.js", 
		"output": "javascript/transformation/transformation_preview.js", 
		"cssCode": "javascript/transformation/transformation_css.js"
	});
