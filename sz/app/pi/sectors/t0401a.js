var Sz_App_Pi_Sectors_t0401a = Sz_App_Pi_Sectors_Abstract.extend({
	init: function(name){
		this._super(name)
		this._mx = [
			[1,1,1,1,1,1,1],
			[1,1,1,1,0,0,0],
			[1,1,1,1,0,1,1],
			[1,0,0,0,0,1,1],
			[1,0,1,1,1,1,1],
			[0,0,1,1,1,1,1],
			[1,1,1,1,1,1,1]
		]

		this.sector = $('<div style="width:224px; height:224px; position:absolute; top: 0px; left:0; background: url(sz/app/pi/img/sectors/sector.png); z-index:1" />')
		$('body').append(this.sector)
	}
})

