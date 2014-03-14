
var Sz_Engine_Engine = function(){
	this.fps = 40
	this.timer = null
	this.keystack = [] // temp, should be replaced with queue object
	this.objects = []
	this.objectsByName = {}
	this.locked = false
	this.paused = false
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

	frame: function(){
		if (this.locked || this.paused){return}
		this.locked = true

		var keydown = this.keystack.length ? this.keystack.shift() : 0
		for (var i = 0; i < this.objects.length; i++){
			if(keydown){this.objects[i].onKeyDown(keydown)}
			this.objects[i].onEnterFrame()
		}

		this.locked = false
	},

	pause: function(){
		this.paused = true
	},

	unpause: function(){
		this.paused = false
	},

	addObject: function(stackable){
		var n = stackable._name

		if (this.objectsByName[n]){
			console.log('Object with name "' + n + '" already exists!')
		} else {
			this.objectsByName[n] = stackable;
			this.objects.push(this.objectsByName[n]);
			this.objectsByName[n].onLoad();
		}
	}
}

$SZ_ENGINE = new Sz_Engine_Engine()