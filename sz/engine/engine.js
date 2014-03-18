
var Sz_Engine_Engine = function(name, options){
	this.fps = 100;
	this.timer = null;
	this.keystack = []; // temp, should be replaced with queue object
	this.currentKey = 0;
	this.objectsByName = {};
	this.locked = false;
	this.paused = false;

	this._root = null;
	window[name] = this;
	options;

	this._initRoot();

}

Sz_Engine_Engine.prototype = {

	start: function(){
		var that = this

		document.onkeydown = function(evt){
			var chCode = evt.charCode || evt.keyCode;
			that.keystack.push(chCode)
		}

		this.timer = setInterval(function(){that.frame()}, 1000/this.fps)
	},

	_initRoot: function(){
		var name = '_root'
		var root = new Sz_Engine_Quark_Dynamic(name)

		root._engine = this
		root._parent = root
		root._root = root

		this.objectsByName[name] = root;
		this.objectsByName[name].onAdd();
		this._root = this.objectsByName[name]
	},

	frame: function(){
		if (this.locked || this.paused){return}
		this.locked = true

		this.currentKey = this.keystack.length ? this.keystack.shift() : 0
		this._root.__frame()

		this.locked = false
	},

	pause: function(){
		this.paused = true
	},

	unpause: function(){
		this.paused = false
	}
}

