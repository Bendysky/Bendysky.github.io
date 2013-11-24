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
				if(panele[j].type == 'p')
					pan.html(GetString("common",panele[j].name));
				else if(panele[j].type == 'img')
				{
					if(panele[j].source)
						pan.entity.src = panele[j].source;
				}
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
function CreateOneBlog(blogcontent)
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
}
function InitNavTop()
{
    CreateModule(modstruct["navtop"],navtop);
    CreateModule(modstruct["navbar"],navlayer);
    GetByID("homepage").style.color = "black";
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
    }
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
function InitPhoto()
{
	CreateModule(modstruct["photo"], photolayer);
    /*var timeindex = 10;
    var imgindex = 0;
    var img = GetByID("midimg");
    var imglist = Lan.imagelist;
    var flag = 0;
    function LoopImage()
    {
        if(global.CurrentModule != "homepage")
            clearInterval(time);
        if(flag == 1)
            ++timeindex;
        else
            --timeindex;
        if(timeindex <= 0 || timeindex >= 10)
        {
            //timeindex = 10;
            flag++;
            if(flag >= 2)
            {
                if(imgindex >= imglist.length)
                    imgindex = 0;
                img.src = imglist[imgindex];
                flag = 0;
                imgindex++;
            }
        }
        img.style.opacity = timeindex/10;
        if(global.Browser.indexOf("msie"))
            img.style.filter = "alpha(opacity="+timeindex*10+")";       
    }
    var time = setInterval(LoopImage,300);*/
}
function InitBLog()
{
	CreateModule(modstruct["blog"], bloglayer);
	var bloglist = Lan.blog;
	for(var i=0;i<bloglist.length;i++)
	{
		var oneblog = CreateOneBlog(bloglist[i]);
		GetByID("blogcontent").appendChild(oneblog.entity);
	}
}
function InitHappy()
{
	CreateModule(modstruct["happy"],happylayer);
	var happylist = Lan.happy;
	var happy = CreateOneBlog(happylist[0]);
	GetByID("happyleft").appendChild(happy.entity);
	happy = CreateOneBlog(happylist[1]);
	GetByID("happyright").appendChild(happy.entity);
}
function InitBottom()
{
	CreateModule(modstruct["bottom"],bottomlayer);
	
}

function HomePage()
{
    InitPhoto();
    InitBLog();
    InitHappy();
    InitBottom();
    /*if(global.GetBrowserVer() == 6.0)
        GetByTag("body")[0].style.background = "#F0F0F0";
	InitNav();
	InitPhoto();
	InitBLog();
	InitHappy();
	InitBottom();*/
}
