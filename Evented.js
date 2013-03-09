define(['dojo/_base/declare', 'dojo/aspect', 'dojo/on', './lang'], function(declare, aspect, on, lang){

 	var after = aspect.after;
	
	return declare(null, {
		
		declaredClass: 'Evented',
		
		on: function( type, listener, context ){
			this._eventedHandles = this._eventedHandles || [];
			if( context ){
				if(typeof content === 'string' || typeof context === 'function'){
					throw new Error('Evented.on error - arguments order. context should be last.');
				}
				listener = lang.bind( context, listener );
			}
			var handle = on.parse( this, type, listener, function( target, type ){
				return after( target, 'on' + type, listener, true );
			});
			this._eventedHandles.push(handle);
			return handle;
		},
		
		emit: function( type, event ){
			var args = [this];
			args.push.apply( args, arguments );
			return on.emit.apply( on, args );
		},
		
		own: function( handle ){
			this._eventedHandles = this._eventedHandles || [];
			this._eventedHandles.push( handle );
			return handle;
		},
		
		removeEvents: function(){
			if(!this._eventedHandles){ return; }
			this._eventedHandles.forEach(function( handle ){
				handle.remove();	
			});
			this._eventedHandles = [];
		},
		
		destroy: function(){
			this.removeEvents();
			this.inherited( arguments );
		}
	});
});
