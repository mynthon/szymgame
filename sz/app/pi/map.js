Sz_App_Pi_Map = Sz_Engine_Quark_Dynamic.extend({
	onAdd: function(){
		this.$ = $('<div style="width:200px; height:200px; border:1px solid #eee; position:relative;" />')
		this._root.$.append(this.$)
		this.generator = new Sz_App_Pi_Maze_Classic()
		this.generator.init(21, 21)
	},
	
	onFrame: function(){
	
	},
	
	drawMaze: function(){
		var map = this.generator.map
		var w = 32
		var h = 32
		
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
						'background': 'purple'
					})
					
					this.$.append(div)
					
				}
			}
		}
	},
	
	isWalkable: function(x, y){
	
	}

	

})
