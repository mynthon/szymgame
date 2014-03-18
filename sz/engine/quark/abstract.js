Sz_Engine_Quark_Abstract = Class.extend({
	init: function(name){
		if ((!name.match(/^[a-zA-Z0-9_]+$/) || name.charAt(0) === '_') && name !== '_root') {
			throw new Error('Object\'s name "' + name + '" doesn\'t match "^[a-zA-Z0-9_]{1,30}$". \nIt can contain from 1 to 30 letters, numbers or "._" characters but cannot start with underscore "_".')
		}

		this._name = name;
		this._engine = null;
		this._root = null
		this._children = []
		this._parent = null;
		this.onCreate();

	},

	__frame: function(){},

	addChild: function(stackableChild){return this;},
	onCreate: function(){return this;},
	onFrame: function(){return this;},
	onAdd: function(){return this;},
	onRemove: function(){return this;},
	onKeyDown:function(){return this;}
})