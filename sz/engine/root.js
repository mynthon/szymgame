Sz_Engine_Root = Sz_Engine_Quark_Dynamic.extend({
	onAdd: function(){
		this.$ = $('<div style="width:200px; height:200px;" />')
		$('body').append(this.$);
	}
})