
Sz_Engine_StackableAbstract = Class.extend({
	init: function(name){
		if (name.match(/^[a-zA-Z0-9_]+$/)) {
			this._name = name;
			this._engine = $SZ_ENGINE;
		} else {
			throw new Error('Object\'s name must match "^[a-zA-Z0-9_]{1,30}$". It can contain from 1 to 30 letters, numbers or "._" characters ')
		}
	},
	onEnterFrame: function(){},
	onLoad: function(){},
	onUnload: function(){},
	onKeyDown:function(){}
})