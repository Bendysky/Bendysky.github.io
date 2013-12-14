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
    gossipnum:0,
    embeddedsoftnum:0,
    webdesignnum:0,
    Linuxdesignnum:0,
    driverdesignnum:0,
    photoindex:0,
    bookindex:0,
    timeindex:0,
	tagindex:1,
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
