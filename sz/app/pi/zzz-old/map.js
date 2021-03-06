Sz_App_Pi_Map = Sz_Engine_Quark_Static.extend({
	onAdd: function(){
		this.availSectors = []
		this.startSectors = []
		this.endSectors = []
		this.walkable = []
		this.sectors = []
		this.width = 4
		this.height = 1
	},


	addSectors: function(){
		this.availSectors.push(new Sz_App_Pi_Sectors_t0000a())
		this.availSectors.push(new Sz_App_Pi_Sectors_t0104a())
		this.availSectors.push(new Sz_App_Pi_Sectors_t0401a())
	},

	fillFirstColumn: function(){
	//first column is specific. First start point has to be added

	},

	checkArea: function(initx, inity){
		var ret = ['n', 'e', 's', 'w']
		var emptyEdge = 0
		
		//check n
		if (inity === 0) {
			ret[0] = emptyEdge
		) else if(
			this.sectors[inity-1] === undefined ||
			this.sectors[inity-1][initx] === undefined
		) {
			ret[0] = -1
		} else {
			ret[0] = this.sectors[inity-1][initx].calcSExits()
		}
		
		//check e
		if (initx === this.width-1) {
			ret[1] = emptyEdge
		) else if(
			this.sectors[inity] === undefined ||
			this.sectors[inity][initx+1] === undefined
		) {
			ret[1] = -1
		} else {
			ret[1] = this.sectors[inity][initx+1].calcWExits()
		}

		//check s
		if (inity === this.height - 1) {
			ret[2] = emptyEdge
		) else if(
			this.sectors[inity+1] === undefined ||
			this.sectors[inity+1][initx] === undefined
		) {
			ret[2] = -1
		} else {
			ret[2] = this.sectors[inity+1][initx].calcNExits()
		}
		
		//check w
		if (initx === 0) {
			ret[3] = emptyEdge
		) else if(
			this.sectors[inity] === undefined ||
			this.sectors[inity][initx-1] === undefined
		) {
			ret[3] = -1
		} else {
			ret[3] = this.sectors[inity][initx+1].calcEExits()
		}



		
	}

})
