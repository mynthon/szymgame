Sz_App_Pi_Boo = Sz_Engine_Quark_Dynamic.extend({
	onAdd: function(){
		this._x = Math.floor(Math.random() * 200)
		this._y = Math.floor(Math.random() * 200)
		this.boo = $('<div style="width:11px; height:10px; position:absolute; top: '+this._x+'px; left:'+this._y+'px; background: url(sz/app/pi/img/boo.png); z-index:520" />')
		$('body').append(this.boo)

		this.nextX = this._x
		this.nextY = this._y
	},
	
	onFrame: function(){
		
		this.timer--;
		//console.log(this.timer)
		var step = 2
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

			
			this.boo.css({top:this._y, left:this._x})
			
	}

})