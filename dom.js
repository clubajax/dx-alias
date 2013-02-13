define([
	'dojo/dom',
	'dojo/dom-construct',
	'dojo/dom-geometry',
	'dojo/dom-class',
	'dojo/dom-style',
	'dojo/dom-prop',
], function(domDom, domCon, domGeom, domClass, domStyle, domProp){
	
	//	summary:
	//		The export of this module is a collection of the most common Dojo DOM
	//		methods, making it less of a chore to look up wich AMD module needs
	//		to be pulled in to do a task, and also makes the AMD define more
	//		manageable. It shorter, finger-friendly names, and modified attributes
	//		to make things more versatile and easier to write.
	
	var dom = {};
	var mixes = [domDom, domCon, domGeom];
	
	
	for(var i=0; i<mixes.length; i++){
		var a = mixes[i];
		for(var key in a){
			dom[key] = a[key];
		}
	}
	
	dom.css = domClass;
	dom.style = domStyle;
	dom.prop = domProp;
	if(!dom.prop.remove){
		dom.prop.remove = function(node, name){
			domDom.byId(node).removeAttribute(name);
		}
	}
	return dom;
});
