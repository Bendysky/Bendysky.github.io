function UpdateTime()
{
	function getTime()
	{
		if(global.CurrentModule != "blogpage")
		{clearInterval(time);return 0;}
		var cdate = new Date();
		GetByID("yeardata").innerHTML = cdate.getFullYear();
		GetByID("monthdata").innerHTML = cdate.getMonth()+1;
		GetByID("daydata").innerHTML = cdate.getDate();
		GetByID("weekdata").innerHTML = Lan["week"][cdate.getDay()];
		GetByID("hourdata").innerHTML = cdate.getHours();
		GetByID("minutedata").innerHTML = parseInt(cdate.getMinutes())<10?"0"+cdate.getMinutes():cdate.getMinutes();
	}
	getTime();
	var time = setInterval(getTime,10000);
}
function CreateBlogTable()
{
	var ele = Lan["blog"];
	var num = ele.length;
	var parent = GetByID("bloglist");
	parent.innerHTML = "";
	GetByID("nowtagname").innerHTML = Lan.common[this.childNodes[0].id];
	for(var i=0;i<num;i++)
	{
		if(ele[i].tagtype == this.childNodes[0].id)
		{
			var list = new CreateElement("DIV:bloglistname");
			list.html(ele[i].title);
			list.SetID("blog_"+i);
			parent.appendChild(list.entity);
			list.entity.onmouseover = function(){
				this.style.color = "black";
			}
			list.entity.onmouseout = function(){
				this.style.color = "#399AB2";
			}
			list.entity.onclick = function(){
				var index = parseInt(this.id.split("_")[1]);
				var blog = new CreateOneBlog(Lan.blog[index]);
				var parent = GetByID("bloglist");
				parent.innerHTML = "";
				parent.appendChild(blog.entity);
				
			}
		}
	}
}
function CreateBlogList()
{
	var taglist = GetByID("tagdiv").childNodes;
	for(var i=1;i<taglist.length;i++)
	{
		taglist[i].onmouseover = function(){
			this.style.color = "blue";
		}
		taglist[i].onmouseout = function(){
			this.style.color = "black";
		}
		taglist[i].onclick = CreateBlogTable;
	}
	taglist[1].onclick();
}
function CreateBlogTag()
{
	CreateModule(modstruct["blogtag"],GetByID("blogtag"));
	CreateModule(modstruct["blogtable"],GetByID("bloglistdiv"))
	UpdateTime();
	CreateBlogList();
	for(var i=0;i<Lan["blog"].length;i++)
	{
		switch(Lan["blog"][i].tagtype)
		{
			case "gossip":
				global.gossipnum++;
				break;
			case "embeddedsoft":
				global.embeddedsoftnum++;
				break;
			case "webdesign":
				global.webdesignnum++;
				break;
			case "Linuxdesign":
				global.Linuxdesignnum++;
				break;
			case "driverdesign":
				global.driverdesignnum++;
				break;
			default:
				break;
		}
	}
	GetByID("gossipnum").innerHTML = "("+global.gossipnum+")";
	GetByID("embeddedsoftnum").innerHTML = "("+global.embeddedsoftnum+")";
	GetByID("webdesignnum").innerHTML = "("+global.webdesignnum+")";
	GetByID("Linuxdesignnum").innerHTML = "("+global.Linuxdesignnum+")";
	GetByID("driverdesignnum").innerHTML = "("+global.driverdesignnum+")";
}
function BlogPage()
{
	CreateBlogTag();
}
$(function(){
	Lan = language[global.lan];
	modstruct = Module;
	global.CurrentModule = "blogpage";
	InitNavTop();
	BlogPage();
});
