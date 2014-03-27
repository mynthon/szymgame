Sz_App_Pi_Map = Sz_Engine_Quark_Dynamic.extend({
	onAdd: function(){
		this.maze = new Sz_App_Pi_Maze_Classic()
		this.maze.init(41,41)
		this.$ = $('<div style="width:200px; height:200px; border:1px solid #eee; position:relative;" />')
		this._root.$.append(this.$)
		this.generator = new Sz_App_Pi_Maze_Classic()
		this.generator.init(41, 41)
	},
	
	onFrame: function(){
	
	},
	
	drawMaze: function(){
		var map = this.generator.map
		var w = 2
		var h = 2
		
		for (var i = 0; i < map.length; i++){
			for (var j = 0; j < map[i].lenght; j++){
				if (map[i][j] === 0){
					var left = j*w
					var top = i*h
					
					var div = $('<div />')
					div.css({
						'top': top,
						'left': left,
						'position': absolute,
						'width': w,
						'height': h
					})
					
					$this.$.append(div)
					
				}
			}
		}
	},
	
	isWalkable: function(x, y){
	
	}

	

})
