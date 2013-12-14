function CreateModule(modname,moddiv)
{
	var mod = modname;
	var i=0;
	for(i=0;i<mod.length;i++)
	{
		var ele = new CreateElement(mod[i].type);
		if(mod[i].classinfo)
			ele.SetClass(mod[i].classinfo);
		if(mod[i].name)
		{
			ele.SetName(mod[i].name);
			ele.SetID(mod[i].name);
		}
		if(mod[i].pans)
		{
			var panele = mod[i].pans;
			for(var j=0;j<panele.length;j++)
			{
				//create pans module
				var pan = new CreateElement(panele[j].type);
				if(panele[j].classinfo)
					pan.SetClass(panele[j].classinfo);
				if(panele[j].name)
				{
					pan.SetName(panele[j].name);
					pan.SetID(panele[j].name);
				}
				if(GetString("common",panele[j].name))
				{
					pan.html(GetString("common",panele[j].name));
				}				
				if((panele[j].type == 'p'))
					pan.html(GetString("common",panele[j].name));
				else if(panele[j].type == 'img')
				{
					if(panele[j].source)
						pan.entity.src = panele[j].source;
				}
				else if((panele[j].type == "a") && (panele[j].link))
					pan.entity.href = panele[j].link;
				//create tags module
				if(panele[j].tags)
				{
					for(var m=0;m<panele[j].tags.length;m++)
					{
						var tag = new CreateElement(panele[j].tags[m].type);
						if(panele[j].tags[m].classinfo)
							tag.SetClass(panele[j].tags[m].classinfo);
						if(panele[j].tags[m].name)
						{
							tag.SetName(panele[j].tags[m].name);
							tag.SetID(panele[j].tags[m].name);
						}
						if(GetString("common",panele[j].tags[m].name)!=undefined)
							tag.html(GetString("common",panele[j].tags[m].name));
						if(panele[j].tags[m].type == "p")
							tag.html(GetString("common",panele[j].tags[m].name));
						else if(panele[j].tags[m].type == "img")
						{
							if(panele[j].tags[m].source)
								tag.entity.src = panele[j].tags[m].source;
						}
						pan.append(tag);
					}
				}
				ele.append(pan);
			}
		}
		moddiv.appendChild(ele.entity);
	}
}
/*function CreateOneBlog(blogcontent)
{
	var title = blogcontent.title;
	var content = blogcontent.content;
	var type = blogcontent.type;
	var blogdiv = new CreateElement("div:oneblog");
	if(title)
	{
		var tit = new CreateElement("div:blogtitle");
		var p = new CreateElement("p:titlecontent");
		p.html(title);
		tit.append(p);
		blogdiv.append(tit);
	}
	if(type == "text")
	{
		if(content)
		{
			for(var i=0;i<content.length;i++)
			{
				var lindiv = new CreateElement("div:blogline");
				var line = new CreateElement("p:linecontent");
				line.html(content[i]);
				lindiv.append(line);
				blogdiv.append(lindiv);
			}
		}
	}
	else if(type == "img")
	{
		if(blogcontent.src)
		{
			var img = new CreateElement("img");
			if(blogcontent.name)
			{
				img.SetName(blogcontent.name);
				img.SetID(blogcontent.name);
			}
			img.entity.src = blogcontent.src;
			blogdiv.append(img);
		}
	}
	return blogdiv;
}*/
function CreateOneBlog(blogcontent)
{
	var title = blogcontent.title;
	var titlestyle =blogcontent.titlecss;
	var list = blogcontent.contentlist;
	
	var blogdiv = new CreateElement("div:oneblog");
	if(title)
	{
		var tit = new CreateElement("div:"+titlestyle);
		//var p = new CreateElement("p:titlecontent");
		tit.html(title);
		//tit.append(p);
		blogdiv.append(tit);
	}
	for(var i=0;i<list.length;i++)

	{
		var ele = list[i];
		if(ele.type == "text")
		{
			var content = new CreateElement("div:"+ele.classinfo);
			content.html(ele.content);
		}
		/*else if(ele.type == "img")
		{
			
		}*/
		blogdiv.append(content);
	}
	return blogdiv;
}
//hide to show
function HideToShow(id)
{
	var ele = GetByID(id);
	var opt = 0;
	function event()
	{
		
		opt += 2;
		ele.style.opacity = opt/100;
		ele.style.filter = "alpha(opacity="+opt+")";
		if(opt>100)
			clearInterval(time);
	}
	var time = setInterval(event,15);
}
function ShowToHide(id)
{
	var ele = GetByID(id);
	var opt = 100;
	function event()
	{
		
		opt -= 2;
		ele.style.opacity = opt/100;
		ele.style.filter = "alpha(opacity="+opt+")";
		if(opt<=0)
			clearInterval(time);
	}
	var time = setInterval(event,20);
}

function TimeList()
{
	var ele = GetByID("timecontent");
	var list = Lan.blog[1].contentlist;

	var cnt = new CreateElement("div");
	cnt.SetID("timecntlist");
	ele.appendChild(cnt.entity);
	cnt.html(list[0].content);
	global.timeindex++;
	function event()
	{
		var pos = 80;
		global.timeindex++;
		if(global.timeindex >= list.length)
			global.timeindex = 0;
		//ele.style.opacity = 0;
		//ele.style.filter = "alpha(opacity=0)";
		GetByID("timecntlist").style.position = "absolute";
		GetByID("timecntlist").style.top = pos +"px";
		cnt.html(list[global.timeindex].content);
		function position()
		{
			pos -=2;
			if(pos<=0)
			{pos=0;clearInterval(time);}
			GetByID("timecntlist").style.top = pos +"px";	
		}
		var time = setInterval(position,50);
		//HideToShow("timecntlist");
	}
	setInterval(event,30000);
}
function InitNavTop()
{
    CreateModule(modstruct["navtop"],navtop);
    CreateModule(modstruct["navbar"],navlayer);
    GetByID(global.CurrentModule).style.color = "black";
    var menu = GetByID("menudiv").childNodes;
    for(var i=1;i<menu.length;i=i+2)
    {
		menu[i].onmouseover = function(){
			this.childNodes[0].style.color = "black";		
		};
		menu[i].onmouseout = function(){
			if(global.CurrentModule != this.childNodes[0].id)
				this.childNodes[0].style.color = "white";
		};
		menu[i].onclick = function(){
			var list = GetByID("menudiv").childNodes;
			for(var j=1;j<list.length;j=j+2)
				list[j].childNodes[0].style.color = "white";
			switch(this.childNodes[0].id)
			{
				case "homepage":
					this.childNodes[0].style.color = "black";
					//HomePage();
					break;
				case "blogpage":
					this.childNodes[0].style.color = "black";
					//BlogPage();
					break;
				case "happypage":
					this.childNodes[0].style.color = "black";
					break;
				case "photopage":
					this.childNodes[0].style.color = "black";
					break;
				default:
					break;
			}
		};
    }
    TimeList();
}
/*function InitNav()
{
	CreateModule(modstruct["nav"],navlayer);
    var nav = GetByID("navbardiv").childNodes;
    for(var i=0;i<nav.length;i++)
    {
        nav[i].onmouseup = nav[i].onmouseover =  function(){
            this.style.opacity = "0.6";
            if(global.Browser.indexOf("msie 6.0"))
                this.style.filter = "alpha(opacity=60)";
            //this.style.cursor = "pointer";
        }
        nav[i].onmouseout = function(){
            this.style.opacity = "1";
            if(global.Browser.indexOf("msie 6.0"))
                this.style.filter = "alpha(opacity=100)";
        }
       nav[i].onmousedown = function(){
            this.style.opacity = "0.3";
            if(global.Browser.indexOf("msie 6.0"))
                this.style.filter = "alpha(opacity=30)";
            //this.style.cursor = "pointer";
        }
    }
}*/

