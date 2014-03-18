Sz_App_Pi_SectorAbstract = Sz_Engine_Quark_Static.extend({
	init: function(name){
		this._super(name);
		this._mx = [
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0]
		]
	},

	calcNExits: function(){
		var mx = this._mx
		return 1000 + mx[0][1]*100 + mx[0][3]*10 + mx[0][5]
	},

	calcSExits: function(){
		var mx = this._mx
		return 1000 + mx[6][1]*100 + mx[6][3]*10 + mx[6][5]
	},

	calcWExits: function(){
		var mx = this._mx
		return 1000 + mx[1][0]*100 + mx[3][0]*10 + mx[5][0]
	},

	calcEExits: function(){
		var mx = this._mx
		return 1000 + mx[1][6]*100 + mx[3][6]*10 + mx[5][6]
	}
})