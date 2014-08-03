define(function(){
	//	summary:
	//		A shim to make older browsers behave more like modern browsers.
	//		While this obviously means IE, it also means not-so-old Webkit
	//		browsers that did not yet have Function.bind.
	//	returns: null
	//		This is not a module. It adds functionality to native JavaScript
	//		objects.
	//
	if(!Function.prototype.bind){
		Function.prototype.bind = function (oThis) {
			// from Mozilla
			if (typeof this !== "function") {
				// closest thing possible to the ECMAScript 5 internal IsCallable function
				throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
			}

			var fSlice = Array.prototype.slice,
				aArgs = fSlice.call(arguments, 1),
				fToBind = this,
				NOOP = function () {},
				Bound = function () {
					return fToBind.apply(this instanceof NOOP
						? this
						: oThis || window,
						aArgs.concat(fSlice.call(arguments)));
					};

			NOOP.prototype = this.prototype;
			Bound.prototype = new NOOP();

			return Bound;
		};
	}
	
	if(!('').trim){
		String.prototype.trim = function(str){
			return !str ?
				str :
				str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
		};
	}
	
	if(!Array.isArray){
		Array.isArray = function(item){
			return ({}).toString.call(item).indexOf('Array') > -1;
		};
	}
	
	if(!Object.keys){
		Object.keys = function(o){
			var key, keys = [];
			for(key in o){
				if(o.hasOwnProperty(key)){
					keys.push(key);
				}
			}
			return keys;
		};
	}

	if(!([]).forEach){
		// TODO
		// reduce
		// reduceRight

		Array.prototype.forEach = function(fn, ctx){
			var i, f = fn, len = this.length;
			if(ctx){ f = fn.bind(ctx)}
			for(i=0;i<len;i++){
				f(this[i], i, this);
			}
		};

		Array.prototype.some = function(fn, ctx){
			var i, f = fn, len = this.length;
			if(ctx){ f = fn.bind(ctx)}
			for(i=0;i<len;i++){
				if(f(this[i], i, this)){ return true; }
			}
			return false;
		};
		
		Array.prototype.every = function(fn, ctx){
			var i, f = fn, len = this.length;
			if(ctx){ f = fn.bind(ctx)}
			for(i=0;i<len;i++){
				if(!f(this[i], i, this)){ return false; }
			}
			return true;
		};
		
		Array.prototype.filter = function(fn, ctx){
			var a = [], r, i, f = fn, len = this.length;
			if(ctx){ f = fn.bind(ctx)}
			for(i=0;i<len;i++){
				r = f(this[i], i, this);
				if(r){ a.push(r); }
			}
			return r;
		};
		
		Array.prototype.map = function(fn, ctx){
			var a = [], i, f = fn, len = this.length;
			if(ctx){ f = fn.bind(ctx)}
			for(i=0;i<len;i++){
				a.push(f(this[i], i, this));
			}
			return a;
		};

		Array.prototype.indexOf = function(elem){
			var i, len = this.length;
			for(i=0;i<len;i++){
				if(this[i] === elem){ return i; }
			}
			return -1;
		};
		
		Array.prototype.lastIndexOf = function(elem){
			var i, len = this.length;
			for(i=len-1;i>0;i--){
				if(this[i] === elem){ return i; }
			}
			return -1;
		};

		//	HTML5 SHIV
		//	Important note:
		//		This doesn't load in time for the DOM when using the async loader.
		//		During devm use dx-alias/html5.js loaded in a script tag.
		//		For prod, the built JS will load sync, and the following code
		//		will work in time.
		//
		var
			n, i,
			supportsHtml5Styles,
			a = document.createElement('a');
			
		a.innerHTML = '<xyz></xyz>';
		//if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
		supportsHtml5Styles = ('hidden' in a);
		if(!supportsHtml5Styles){
			try{
				n = ("abbr,article,aside,audio,canvas,datalist,details," +
				"figure,footer,header,hgroup,mark,menu,meter,nav,output," +
				"progress,section,time,video").split(',');
				for (i = 0; i < n.length; i++) {
					document.createElement(n[i]);
				}
			}catch(e){
				console.error("ERROR:", e);
			}
		}
	}

	

	require.argsToObject = function(mid){
		// A Dojo require thing
		var
			module = require.modules[mid],
			name,
			i, m,
			args = {};
		//console.dir(module.deps);
		for(i=0; i<module.deps.length; i++){
			m = module.deps[i].mid;
			name = m.substring(m.lastIndexOf('/')+1, m.length);
			args[name] = module.deps[i].result;
		}
		return args;
	};

	return null; // sets environmental helpers, does not return anything
});
