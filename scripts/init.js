var Lan = {};
var modstruct = {};
var navtop = GetByID("navtop");
var navlayer = GetByID("navlayer");
var photolayer = GetByID("photolayer");
var bloglayer = GetByID("bloglayer");
var happylayer = GetByID("happylayer");
var bottomlayer = GetByID("bottomlayer");
var global ={
	lan:"CH",
    CurrentModule:"homepage",
    Browser:navigator.userAgent.toLowerCase(),
    GetBrowserVer:function(){
        if(global.Browser.indexOf("msie") != -1)
        {
            var pos = global.Browser.indexOf("msie");
           return global.Browser.substring(pos+5,pos+8); 
        }
        return 0;
    }
};

function initpage()
{
	alert(GetString("common", "name"));
}
$(function(){
	Lan = language[global.lan];
	//initpage();
	modstruct = Module;
	InitNavTop();
	HomePage();
});
