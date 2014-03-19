Sz_Engine_Quark_Dynamic = Sz_Engine_Quark_Abstract.extend({
	__frame: function(){
		for (var i = 0; i < this._children.length; i++){
			this._children[i].__frame()
		}

		this.onFrame()
	},

	addChild: function(stackableChild){
		var n = stackableChild._name

		if (this._engine.objectsByName[n]){
			console.log('Object with name "' + n + '" already exists!')
			return this
		}

		if (n.charAt(0) === '_') {
			console.log('Object\'s name cannot start with underscore!')
			return this
		}

		if (stackableChild._engine !== null) {
			console.log('Object is attached to other engine!')
			return this
		}


		stackableChild._engine = this._engine
		stackableChild._parent = this
		stackableChild._root = this._engine._root


		this._engine.objectsByName[n] = stackableChild;
		this._children.push(this._engine.objectsByName[n]);
		this._engine.objectsByName[n].onAdd();
		this[n] = this._engine.objectsByName[n]

		return this;
	},
})