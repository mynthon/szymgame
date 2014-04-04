Sz_App_Pi_Npc = Sz_Engine_Quark_Dynamic.extend({
	
	onAdd: function(){
		this.map = this._engine.objectsByName['mainmap']
		this._x = 0
		this._y = this.map.generator.startPoint[1] * this.map.wallHeight
		this._width = 24
		this._height = 24
		
		this._$.css({
			background: 'url(sz/app/pi/img/minsc.png)', 
			zIndex:520
		});
		
		this._$.attr('id', 'boo')

		this.placeOnScreen()
		this._refresh()
		
	},
	
	
	
	onFrame: function(){
		var map = this.map
		var keys = this._engine.keys
		
		if (this.overlap('Boo')){
			console.log('catched!')
		}
	
		if(keys[37]){
			var d = this.x() - 3
			
			if (map.isWalkable(d, this.y()) && map.isWalkable(d, this.y() + this.height())){
				this.x(this.x() - 3)
			}
		}
		if(keys[38]){
			var d = this.y() - 3
			
			if (map.isWalkable(this.x(), d) && map.isWalkable(this.x() + this.width(), d)){
				this.y(this.y() - 3)
			}
		}
		if(keys[39]){
			var d = this.x() + 3 + this.width()
			
			if (map.isWalkable(d, this.y()) && map.isWalkable(d, this.y() + this.height())){
				this.x(this.x() +3)
			}
		}
		if(keys[40]){
			var d = this.y() + 3 + this.height()
			
			if (map.isWalkable(this.x(), d) && map.isWalkable(this.x() + this.width(), d)){
				this.y(this.y() + 3)
			}
		}
	

	}
})