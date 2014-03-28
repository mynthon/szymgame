Sz_App_Pi_Boo = Sz_Engine_Quark_Dynamic.extend({
	onAdd: function(){
		this._x = Math.floor(Math.random() * 200)
		this._y = Math.floor(Math.random() * 200)
		this._width = 11
		this._height = 10
		
		this._$.css({
			background: 'url(sz/app/pi/img/boo.png)', 
			zIndex:520
		});

		this._parent._$.append(this._$);

		
		this.nextX = this._x
		this.nextY = this._y
		this.placeOnScreen()
		this._refresh()
		

	},
	
	onFrame: function(){
		
		this.timer--;
		//console.log(this.timer)
		var step = 1
		if (this._x < this.nextX-step){
			this._x += step
		} else if (this._x > this.nextX+step){
			this._x -= step
		} else if (this._y < this.nextY-step){
			this._y += step
		} else if (this._y > this.nextY+step){
			this._y -= step
		} else {
			this.nextX = Math.floor(Math.random()*500) + 50
			this.nextY = Math.floor(Math.random()*500) + 50
		}

			
			this._refresh()
			
	}

})