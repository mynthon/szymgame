Sz_App_Pi_Npc = Sz_Engine_Quark_Dynamic.extend({
	init: function(name){
		this._super(name)

		this.htmlId = "sz_npc" + Math.round(Math.random() * 999999999)


		$('body').append('<img src="sz/app/pi/img/npc/npc1.png" style="height:24px; width:24px; position:absolute;z-index: 500;" id="' + this.htmlId + '" />')
		this.top = Math.round(Math.random() * 100)
		this.left = Math.round(Math.random() * 100)
		this.obj = $('#' + this.htmlId);
	},
	onFrame: function(){
		this.obj.css({
			top: this.top,
			left: this.left
		})
	},
	onKeyDown: function(code){
		//this.obj.html(this._name + ':' + code)
		if(code===37){
			this.left -= 5
		}else if(code===38){
			this.top -= 5
		}else if(code===39){
			this.left += 5
		}else if(code===40){
			this.top += 5
		}
	}
})