
var Sz_Engine_Engine = function(name, options){
	this.name = name
	this.fps = 30;
	this.timer = null;
	this.keys = []
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

		document.body.addEventListener("keydown", function (e) {
			that.keys[e.keyCode] = true;
		});
		
		document.body.addEventListener("keyup", function (e) {
			that.keys[e.keyCode] = false;
		});
		

		this.timer = setInterval(function(){that.frame()}, 1000/this.fps)
	},

	_initRoot: function(){
		var name = '_root'
		var root = new Sz_Engine_Root(name)

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

