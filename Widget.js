define([
	'dojo/_base/declare',
	'dijit/registry',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'./dom',
	'./string',
	//'./on',
	'dojo/on',
	'./lang'
],function(declare, registry, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, dom, string, /*on, */dojoOn, lang){
	//	summary:
	//		Widget is not very complicated, it's a shortcut for the most common
	//		Dijit creation modules, _WidgetBase, and _TemplatedMixin.
	//		Widget also mixes in some useful methods, like show and hide.
	//
	//console.log('W', !!_WidgetBase, !!_TemplatedMixin, !!_WidgetsInTemplateMixin);
	//return [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin];
	
	return declare('dx-alias/Widget', [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
		templateString:'<div></div>', //to be overwritten

		showing: true,

		//postCreate: function(){
		//	console.log('ALIAS POST');
		//	setTimeout(lang.hitch(this, function(){
		//		if(!this._started){
		//			console.warn('widget not started:', this.getName());
		//		}
		//	}), 500);
		//	this.inherited(arguments);
		//},
		//
		//startup: function(){
		//	//console.log('start me up', this.getName(), this._started);
		//	console.log('ALIAS STARTUP');
		//	if(this._started){
		//		return;
		//	}
		//	this._started = 1;
		//	this.inherited(arguments);
		//},
		//
		//show: function(){
		//	if(this.showing) { return; }
		//	this.showing = true;
		//	dom.show(this.domNode);
		//},
		//
		//hide: function(){
		//	if(!this.showing) { return; }
		//	this.showing = false;
		//	dom.hide(this.domNode);
		//},

		//getName: function(){
		//	return string.last(this.declaredClass, '.');
		//},
		//
		//getParent: function(){
		//	// summary:
		//	//		Returns the parent widget of this widget
		//	if(!this.domNode.parentNode){
		//		// FIXIT: triggered by common.resizeAll
		//		//console.warn('NO PARENT');
		//		return null;
		//	}
		//	return this._parent || registry.getEnclosingWidget(this.domNode.parentNode) || registry.getEnclosingWidget(this.domNode.parentNode.parentNode);
		//},
		//
		//// TODO: Should children methods move to another class?
		//// TODO: Doc why these are different
		//addChildren: function(widgets, node){
		//	//console.log('addChildren', widgets)
		//	widgets.forEach(function(w){
		//		//console.log('addChild', w);
		//		this.addChild(w, node);
		//	}, this);
		//},
		//
		//addChild: function(widget, node){
		//	//console.log('addChild')
		//	widget._parent = this;
		//	node = node || this.containerNode || this.domNode;
		//	node.appendChild(widget.domNode);
		//	if(this._started && !widget._started) { widget.startup(); }
		//	return widget;
		//},
		//
		//removeChild: function(widget){
		//	if(widget){
		//		var node = widget.domNode;
		//		if(node && node.parentNode){
		//			node.parentNode.removeChild(node); // detach but don't destroy
		//		}
		//	}
		//	return widget;
		//},
		//
		//connectEvents: function(){
		//	this._connections.forEach(function(handle){ handle.resume(); }, this);
		//},
		//
		//disconnectEvents: function(){
		//	this._connections.forEach(function(handle){ handle.pause(); }, this);
		//},
		//
		//getObject: function(obj){
		//	//	summary
		//	//		Gets an object via this.obj, this[obj] or registry[obj]
		//	return typeof obj === 'string' ? typeof this[obj] === 'object' ? this[obj] : registry.byId(obj) : obj;
		//},
		//
		//on: function(event, ctx, method){
		//	//if(this.id == 'video') console.info('     on', event, this.domNode);
		//	if(typeof event === 'object'){
		//		console.trace();
		//	}
		//	method = !!method ? lang.bind(ctx, method) : ctx;
		//	var signal = this.own(dojoOn(this.domNode, event, method));
		//	this._connections = this._connections || [];
		//	this._connections.push(signal);
		//	return signal;
		//},
		//
		//// add sub() ?
		//destroy: function(){
		//	if(this._connections){
		//		this._connections.forEach(function(h){
		//			h.remove();
		//		});
		//	}
		//	this.inherited(arguments);
		//}

	});
});
