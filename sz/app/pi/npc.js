Sz_App_Pi_Npc = Sz_Engine_StackableAbstract.extend({
	init: function(name){
		this._super(name)

		this.htmlId = "sz_npc" + Math.round(Math.random() * 999999999)


		$('body').append('<div style="height:10px; width:10px; outline:1px solid yellow; position:absolute;" id="' + this.htmlId + '">i</div>')
		this.top = Math.round(Math.random() * 100)
		this.left = Math.round(Math.random() * 100)
		this.obj = $('#' + this.htmlId);
	},
	onEnterFrame: function(){
		this.obj.css({
			top: this.top,
			left: this.left
		})
	},
	onKeyDown: function(code){
		this.obj.html(this._name + ':' + code)
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