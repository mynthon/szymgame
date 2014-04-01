Sz_Engine_Root = Sz_Engine_Quark_Dynamic.extend({
	onAdd: function(){
		this._$ = $('<div style="width:200px; height:200px;" id="root_randomid"/>')
		$('body').append(this._$);
	},
	placeOnScreen: function(){}
})