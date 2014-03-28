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
	
	placeOnScreen: function(){
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
	
	y: function(position){
		if (position){
			this._y = position
			this._$.css('left', position)
		}
		return this._y
	},
	
	width: function(width){
		if (width){
			this._width = width
			this._$.css('width', width)
		}
		return this._width
	},
	
	y: function(height){
		if (height){
			this._height = height
			this._$.css('height', height)
		}
		return this._height
	},
})