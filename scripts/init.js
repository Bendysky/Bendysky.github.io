var Lan = {};
var modstruct = {};
var navlayer = GetByID("navlayer");
var photolayer = GetByID("photolayer");
var bloglayer = GetByID("bloglayer");
var happylayer = GetByID("happylayer");
var bottomlayer = GetByID("bottomlayer");
function initpage()
{
	alert(GetString("common", "name"));
}
$(function(){
	Lan = language[global.lan];
	//initpage();
	modstruct = Module;
	HomePage();
});
