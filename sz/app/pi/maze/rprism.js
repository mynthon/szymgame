
var Sz_App_Pi_Maze_Rprism = function(){

}



Sz_App_Pi_Maze_Rprism.prototype = {
	init: function(width, height) {
		this.w = width;
		this.h = height;
		this.map = [];
		this.walls = []
		
		this.clearMap()
		var starty = (Math.round(Math.random()*(this.h-2)/2))*2+1
		this.generateMaze(0, starty)
		
		
	},
	
	clearMap: function(){
		var map = this.map
	
		for (var i = 0; i<this.h; i++){
			map[i] = []
			for (var j = 0; j< this.w; j++){
				map[i][j] = 0
			}
		} 
	},
	
	
	generateMaze: function(x,y){
		var map = this.map

		map[y][x] = 1
		map[y][x+1] = 1
		
		// [y-passage, x-passage, y-opositecell, x-opositecell]
		this.walls.push([y, x+2, y, x+3])
		this.walls.push([y+1, x+1, y+2, x+1])
		this.walls.push([y-1, x+1, y-2, x+1])
		
		while (this.walls.length > 0){
		
		
			var pass = this.walls.splice(Math.round(Math.random() * (this.walls.length-1)), 1)
			var wally = pass[0][0]
			var wallx = pass[0][1]
			var nexty = pass[0][2]
			var nextx = pass[0][3]
			
			if(map[nexty] !== undefined && map[nexty][nextx] !== undefined && map[nexty][nextx] === 0){
			
				
				map[wally][wallx] = 1
				map[nexty][nextx] = 1
				
				this.walls.push([nexty, nextx+1, nexty, nextx+2])
				this.walls.push([nexty-1, nextx, nexty-2, nextx])
				this.walls.push([nexty+1, nextx, nexty+2, nextx])
			}
		}
		
		


	},
	
	draw: function(){
		var table = $('<table cellspacing="0" />')
		for (var z=0; z<this.h; z++){
			var tr = $('<tr>');
			for (var f  = 0; f < this.w; f++){
				var td = $('<td />')
				td.css({width:5, height:5})
				if (this.map[z][f] === 1){
					td.css('background', 'yellow')
				}else{
					td.css('background', 'orange')
				}
				tr.append(td)
			}
			table.append(tr)
		}
		$('body').append(table)
	}
	
	
}





