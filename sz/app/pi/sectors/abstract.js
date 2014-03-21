Sz_App_Pi_Sectors_Abstract = Sz_Engine_Quark_Static.extend({
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
		var r = 0;
		
		if (mx[0][1] > 0) {r+=1}
		if (mx[0][3] > 0) {r+=2}
		if (mx[0][5] > 0) {r+=4}		

		return r
	},

	calcSExits: function(){
		var mx = this._mx
		var r = 0;
		
		if (mx[6][1] > 0) {r+=1}
		if (mx[6][3] > 0) {r+=2}
		if (mx[6][5] > 0) {r+=4}		

		return r 
	},

	calcWExits: function(){
		var mx = this._mx
		var r = 0;
		
		if (mx[1][0] > 0) {r+=1}
		if (mx[3][0] > 0) {r+=2}
		if (mx[5][0] > 0) {r+=4}		

		return r
	},

	calcEExits: function(){
		var mx = this._mx
		var r = 0;
		
		if (mx[1][6] > 0) {r+=1}
		if (mx[3][6] > 0) {r+=2}
		if (mx[5][6] > 0) {r+=4}		

		return r
	}
})
