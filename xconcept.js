
Sz_StackableAbstract = Class.extend({
	init: function(name){
		if (name.match(/^[a-zA-Z0-9_]+$/)) {
			this._name = name;
		} else {
			throw new Error('Object\'s name must match "^[a-zA-Z0-9_]{1,30}$". It can contain from 1 to 30 letters, numbers or "_" characters ')
		}
	},
	onEnterFrame: function(){},
	onLoad: function(){},
	onUnload: function(){},
	onKeyDown:function(){}
})



Sz_SectorAbstract = Sz_StackableAbstract.extend({
	init: function(name){
		this._super(name);
		this._mx = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0]
		]
	},

	calcNExits: function(){
		var mx = this._mx
		return 1000 + mx[0][1]*100 + mx[0][3]*10 + mx[0][5]
	},

	calcSExits: function(){
		var mx = this._mx
		return 1000 + mx[6][1]*100 + mx[6][3]*10 + mx[6][5]
	},

	calcWExits: function(){
		var mx = this._mx
		return 1000 + mx[1][0]*100 + mx[3][0]*10 + mx[5][0]
	},

	calcEExits: function(){
		var mx = this._mx
		return 1000 + mx[1][6]*100 + mx[3][6]*10 + mx[5][6]
	}
})


var SectorAAA = Sz_SectorAbstract.extend({
	init: function(){
		this._mx = [
			[1,1,1,1,1,1,1],
			[1,1,1,1,0,0,0],
			[1,1,1,1,0,1,1],
			[1,0,0,0,0,1,1],
			[1,0,1,1,1,1,1],
			[0,0,1,1,1,1,1],
			[1,1,1,1,1,1,1]
		]
	}
})


Sz_Npc = Sz_StackableAbstract.extend({
	init: function(name){
		this._super(name)

		this.htmlId = "sz_npc" + Math.round(Math.random() * 999999999)


		$('body').append('<div style="height:10px; width:10px; outline:1px solid yellow; position:absolute;" id="' + this.htmlId + '">i</div>')
		this.top = Math.round(Math.random() * 100)
		this.left = Math.round(Math.random() * 100)
		this.obj = $('#' + this.htmlId);
	},
	onEnterFrame: function(){
		this.obj.css({
			top: this.top,
			left: this.left
		})
	},
	onKeyDown: function(code){
		this.obj.html(this._name + ':' + code)
		if(code===37){
			this.left -= 5
		}else if(code===38){
			this.top -= 5
		}else if(code===39){
			this.left += 5
		}else if(code===40){
			this.top += 5
		}
	}
})


var Sz_Engine = function(){
	this.fps = 40
	this.timer = null
	this.keystack = [] // temp, should be replaced with queue object
	this.objects = []
	this.objectsByName = {}
	this.locked = false
	this.paused = false
}

Sz_Engine.prototype = {

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