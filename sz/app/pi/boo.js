Sz_App_Pi_Boo = Sz_Engine_Quark_Static.extend({
	onAdd: function(){
		var x = Math.random() * 200
		var y = Math.random() * 200
		this.boo = $('<div style="width:11px; height:10px; position:absolute; top: '+x+'px; left:'+y+'px; background: url(sz/app/pi/img/boo.png); z-index:520" />')
		$('body').append(this.boo)
	}

})