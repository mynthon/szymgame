function tdcolor(x,y,color){
    $('#td' + x + '_'+ y).css('background', color)
}

function tdcursor(x,y){
    $('#td' + x + '_'+ y).append($('#cursor'))
}



randomMap = function(width, height, waypointsNum){
	
	
	this.math = {
		sign: function(n){return n && n / Math.abs(n);}
	}
	

	this.init(width, height, waypointsNum)
}

randomMap.prototype = {

	init: function(width, height, waypointsNum){
	
		$('#movetable').remove()
		$('#cursor').remove()
		$('body').append($('<table id="movetable"></table>'))
		this.table = $('#movetable')
		$('body').append($('<div id="cursor" style="width:5px; height:5px; background:red;"></div>'))
		this.cursor =$('#cursor')
		
		this.w = width
		this.h = height
		this.wpnum = waypointsNum
		this.m = []
		this.wps = [] //waypoints
		this.startY = 0
	},

	fillEmpty: function(){
		 for (var i = 0; i < this.h; i++){
			var tr = $('<tr />')
			this.m[i] = []
			for (var j = 0; j < this.w; j++){
				this.m[i][j] = 0;
				var td = $('<td id="td' + j + '_' + i + '"/>')    
				td.css('background', '#eeeeee')
				td.css('width', '5px')
				td.css('height', '5px')
				tr.append(td)
			}
			this.table.append(tr)
		}
	},
	
	generate: function(){
		this.fillEmpty()
		this.setStartY()
console.log(this.wps)
		this.generateWaypoints()
		console.log(this.wps)
		this.goTo(this.wps.shift(), this.wps.shift())

		
		for (var z = 0; z < this.h; z++){
			console.log(m[z])
		}
		
		
	},
	
	setStartY: function(){
		var sp = (Math.round(Math.random() * ((this.h-4)/2)) + 1) * 2
		this.m[sp][0] = 1
		this.m[sp][1] = 1
		this.startY = sp
		this.wps.push([1,sp])
		tdcolor(0, sp, 'yellow')
	},
	
	generateWaypoints: function(){
		//place random points
		
		var rndX = this.w/2 - 2
		var rndY = this.h/2 - 1
		var rx, ry, lastrnd, r   = 0
		var wps = this.wps

		while (r < this.wpnum) {
			rx = Math.round(Math.random()*rndX)*2 + 2
			ry = Math.round(Math.random()*rndY)*2
			
			if (wps.length > 0){
				lastrnd = wps[wps.length-1]
			}

			if (lastrnd){
				if (Math.abs(rx - lastrnd[0]) < 8 || Math.abs(ry - lastrnd[1]) < 8) {
					continue
				}
			}

			wps.push([rx,ry])
			this.m[ry][rx] = 1
			r++
			
			tdcolor(rx, ry, 'yellow')
		}


		for (var z = 0; z < this.h; z++){
			console.log(this.m[z])
		}
	},
	
	
	goTo: function(current, target){
		var m = this.m
		var wps = this.wps
                var that = this
	
		if (!target){
			return
		}
		
		m[current[1]][current[0]] = 1
		
		tdcolor(current[0], current[1], 'green')
		tdcursor(current[0], current[1])


		if(current[0] === target[0] && current[1] === target[1]){
			// well, we have reached destination, so go to next one.
			setTimeout(function(){
				that.goTo(current, wps.shift());
			}, 50)
		}else{

			var dx = target[0] - current[0]
			var dy =  target[1] - current[1]
			var c = [current[0], current[1]]
			
			if (current[0]%2 === 0 && current[1] % 2 ===0){

				var prefferx = 0
				var preffery = 0

				if (m[current[1]][current[0] + this.math.sign(dx)] === 0){
					prefferx = 1
				}

				if (m[current[1] + this.math.sign(dy)][current[0]] === 0){
					preffery = 1
				}

				//wybieraj raczej sciezke gdzie jeszcze nic nie ma
				//wiecej korytarzy i nie bedzie wracania po wlasnych sladach
				if (prefferx && !preffery){
					dy = 0
				}else if(!prefferx && preffery){
					dx = 0
				}else if(prefferx && preffery){
					if (Math.random() < 0.5){
							dx = 0;
					} else {
							dy = 0
					}
				}else{

					if(dx !== 0 && dy !== 0){
						if (Math.random() < 0.5){
							dx = 0;
						} else {
							dy = 0
						}
					}
				}


			} else {
				//jesli nieparzysty  nieparzysty x to musi x, jesli nieparzysty y to musi y
				//zmiana kierunku dozwolona tylko na przystych
				if (current[0]%2 === 0){
					dx = 0
				}
				 if (current[1]%2 === 0){
					dy = 0
				}
				
	
	}
			c[0] = current[0] + this.math.sign(dx)
			c[1] = current[1] + this.math.sign(dy)

			setTimeout(function(){
				that.goTo(c, target);
			}, 50);

		}
	}

}


var m = new randomMap(20,20,12)
m.generate()







