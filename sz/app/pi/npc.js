Sz_App_Pi_Npc = Sz_Engine_Quark_Dynamic.extend({
	init: function(name){
		this._super(name)

		this.htmlId = "sz_npc" + Math.round(Math.random() * 999999999)


		$('body').append('<img src="sz/app/pi/img/minsc.png" style="height:24px; width:24px; position:absolute;z-index: 500;" id="' + this.htmlId + '" />')
		this.top = Math.round(Math.random() * 100)
		this.left = Math.round(Math.random() * 100)
		this.obj = $('#' + this.htmlId);
	},
	onFrame: function(){
		var keys = this._engine.keys
	
		if(keys[37]){
			this.left -= 3
		}
		if(keys[38]){
			this.top -= 3
		}
		if(keys[39]){
			this.left += 3
		}
		if(keys[40]){
			this.top += 3
		}
	
		this.obj.css({
			top: this.top,
			left: this.left
		})
	}
})