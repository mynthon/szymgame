Sz_App_Pi_Map = Sz_Engine_Quark_Dynamic.extend({
	onAdd: function(){
		this._$ = $('<div style="width:200px; height:200px; border:1px solid #eee; position:relative;" />')
		this._root._$.append(this._$)
		this.generator = new Sz_App_Pi_Maze_Rprismmod()
		this.generator.create(41, 15)
		
		
		
		this.wallWidth = 32
		this.wallHeight = 32
		
	},
	
	onFrame: function(){
	
	},
	
	drawMaze: function(){
		var map = this.generator.map
		var w = this.wallWidth
		var h = this.wallHeight
		
		for (var i = 0; i < map.length; i++){
			for (var j = 0; j < map[i].length; j++){
				if (map[i][j] === 0){
					var left = j*w
					var top = i*h
					
					var div = $('<div />')
					div.css({
						'top': top,
						'left': left,
						'position': 'absolute',
						'width': w,
						'height': h,
						'background':'#fde8a0'
					})
					
					this._$.append(div)
					
				}
			}
		}
	},
	
	isWalkable: function(x, y){
		var dx = Math.floor(x/this.wallWidth)
		var dy = Math.floor(y/this.wallHeight)
		
		if (!this.generator.map[dy] || !this.generator.map[dy][dx]){
			return false
		}
		
		if (this.generator.map[dy][dx] === 1){
			return true;
		} else {
			return false;
		}
	}

	

})
