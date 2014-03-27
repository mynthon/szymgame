
var Sz_App_Pi_Maze_Rprismmod = function(){

}



Sz_App_Pi_Maze_Rprismmod.prototype = {
	init: function(width, height) {
		this.w = width;
		this.h = height;
		this.map = [];
		this.cells = []
		
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
		
		// [next-y, next-x]
		this.cells.push([y, x+3])
		if (map[y+2]!==undefined){this.cells.push([y+2, x+1])}
		if (map[y-2]!== undefined){this.cells.push([y-2, x+1])}
		
		
		
		while (this.cells.length > 0){
			var cell = this.cells.splice(Math.round(Math.random() * (this.cells.length-1)), 1)
			var cellx = cell[0][1]
			var celly = cell[0][0]
			
			if (map[celly][cellx] === 1) {
				continue
			} 
			
			map[celly][cellx] = 1
			
			var nbrs = []
			
			if (map[celly-2] !== undefined){
				if(map[celly-2][cellx] === 1){
					nbrs.push([celly-2, cellx, celly-1, cellx])
				}else{
					this.cells.push([celly-2, cellx])
				}
			}
			
			if (map[celly+2] !== undefined){
				if(map[celly+2][cellx] === 1){
					nbrs.push([celly+2, cellx, celly+1, cellx])
				}else{
					this.cells.push([celly+2, cellx])
				}
			}
			
			if (map[celly][cellx+2] !== undefined){
				if(map[celly][cellx+2] === 1){
					nbrs.push([celly, cellx+2, celly, cellx+1])
				}else{
					this.cells.push([celly, cellx+2])
				}
			}
			
			if (map[celly][cellx-2] !== undefined){
				if(map[celly][cellx-2] === 1){
					nbrs.push([celly, cellx-2, celly, cellx-1])
				}else{
					this.cells.push([celly, cellx-2])
				}
			}
			
			
			var conn = nbrs.splice(Math.round(Math.random() * (nbrs.length-1)), 1)[0]
			
			map[conn[0]][conn[1]] = 1
			map[conn[2]][conn[3]] = 1
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





