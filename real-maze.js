
var ClassicMazeGenerator = function(width, height){
	this.init()
}



ClassicMaze.prototype = function(){
	init: function(width, height) {
		this.w = width;
		this.h = height;
		this.map = [];
		this.checkpoints = [];
		
		this.clearMap()
		var starty = (Math.round(Math.random()*(h-2)/2))*2+1
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

		if (y%2 !== 0 && x%2 !== 0){
			// we are on odd point and here we can  change direction.
			// check all available movements
			var moves = []

			if (map[y+2] && map[y+2][x] === 0){
				moves.push('s')
			}
			
			if (map[y-2] && map[y-2][x] === 0){
				moves.push('n')    
			}

			if (map[y][x+2]!==undefined && map[y][x+2] === 0){
				moves.push('e')
			}
			
			if (map[y][x-2]!=undefined && map[y][x-2] === 0){
				moves.push('w')
			}

			if (moves.length === 0) {
				// no more moves available. return to last checkpoint
				var p = this.checkpoints.pop()
				if (p){this.generateMaze(p[0], p[1])}
			}else{
				// moves are available
				
				// add this point to checkpoints list
				this.checkpoints.push([x,y])
				
				//change direction randomly
				var m = moves[Math.round(Math.random() * moves.length)]
				
				if (m === 's'){
					y = y+1
				}else if (m === 'n'){
					y = y-1
				}else if (m === 'e'){
				moves.push('e')
					x = x+1
				}else if (m === 'w'){
					x = x-1
				}

				this.generateMaze(x,y)
			}
		


		}else{

			if (this.checkpoints.length === 0){
				//path length is 0, so no checkpoints were found before this move.
				// this is only possible when it is first move (x = 0) so we chave to increase x
				dy = 0;
				dx = 1;
			}else{
			   var diff = this.checkpoints[this.checkpoints.length-1]
				dx = x - diff[0]
				dy = y - diff[1]
			}

			this.generateMaze(x+dx, y+dy)
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





