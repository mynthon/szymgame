Sz_Engine_Quark_Abstract = Class.extend({
	init: function(name){
		if ((!name.match(/^[a-zA-Z0-9_]+$/) || name.charAt(0) === '_') && name !== '_root') {
			throw new Error('Object\'s name "' + name + '" doesn\'t match "^[a-zA-Z0-9_]{1,30}$". \nIt can contain from 1 to 30 letters, numbers or "._" characters but cannot start with underscore "_".')
		}
	
		this.__placed = false
		this._name = name;
		this._engine = null;
		this._root = null
		this._children = []
		this._parent = null;
		this._$ = $('<div style="position:absolute;" />')
		this._x = 0;
		this._y = 0;
		this._width = 0;
		this._height = 0;
		
		this._$.css({
			top: this._y,
			left: this._x,
			width: this._width,
			height: this._height
		});
		
		this.onCreate();

	},

	__frame: function(){},
	addChild: function(stackableChild){return this;},
	onCreate: function(){return this;},
	onFrame: function(){return this;},
	onAdd: function(){return this;},
	onRemove: function(){return this;},
	
	placeOnScreen: function(){/*this is wrong because it allows place element only in parent?*/
		if (!this.__placed){
			this.__placed = true
			this._parent._$.append(this._$)
		}
	},
	
	_refresh: function(){
		this.x(this._x);
		this.y(this._y);
		this.width(this._width);
		this.height(this._height);
	},
	
	x: function(position){
		if (position){
			this._x = position
			this._$.css('left', position)
		}
		return this._x
	},
	
	/*
	 * Sets/gets x relative to root. Returns x relative to root
	 */
	X: function(position){
		var of = this._$.offset()
		var l = of['left']
		var rof = this._root._$.offset()
		var rl = rof ['left']
		var absx = l - rl
		
		if (position){
			var delta = position - absx
			this.x(this.x + delta)
		}
		
		return absx;	
	},
	
	y: function(position){
		if (position){
			this._y = position
			this._$.css('top', position)
		}
		return this._y
	},
	
	/*
	 * Sets/gets y relative to root
	 */
	Y: function(position){
		var of = this._$.offset()
		var t = of['top']
		var rof = this._root._$.offset()
		var rt = rof ['top']
		var absy = t - rt
		
		if (position){
			var delta = position - absy
			this.y(this.y + delta)
		}
		
		return absy;
	},
	
	width: function(width){
		if (width){
			this._width = width
			this._$.css('width', width)
		}
		return this._width
	},
	
	height: function(height){
		if (height){
			this._height = height
			this._$.css('height', height)
		}
		return this._height
	},
	
	overlap: function(targetName){
		var t = this._engine.objectsByName[targetName]
		
		var a = [this.X(), this.Y(), this.width(), this.height()]
		var b = [t.X(), t.Y(), t.width(), t.height()]
		
		var s1 = a[0] < 0 ? -1 : 1
		var s2 = a[1] < 0 ? -1 : 1
		var s3 = b[0] < 0 ? -1 : 1
		var s4 = b[1] < 0 ? -1 : 1

		var aw5 = a[2] / 2
		var ah5 = a[3] / 2
		var bw5 = b[2] / 2
		var bh5 = b[3] / 2

		var sw = aw5 + bw5
		var sh = ah5 + bh5

		var acw = a[0] + s1*aw5
		var ach = a[1] + s2*ah5
		var bcw = b[0] + s3*bw5
		var bch = b[1] + s4*bh5

		if (Math.abs (acw - bcw) <= sw && Math.abs(ach - bch) <= sh){
			return true;
		}else{
			return false;
		}
	}
})