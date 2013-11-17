function CreateModule(modname,moddiv)
{
	var mod = modname;
	var i=0;
	for(i=0;i<mod.length;i++)
	{
		var ele = new CreateElement(mod[i].type);
		if(mod[i].class)
			ele.SetClass(mod[i].class);
		if(mod[i].name)
		{
			ele.SetName(mod[i].name);
			ele.SetID(mod[i].name);
		}
		if(mod[i].tags)
		{
			for(var j=0;j<mod[i].tags.length;j++)
			{
				var tag = new CreateElement(mod[i].tags[j].type);
				if(mod[i].tags[j].class)
					tag.SetClass(mod[i].tags[j].class);
				if(mod[i].tags[j].name)
				{
					tag.SetName(mod[i].tags[j].name);
					tag.SetID(mod[i].tags[j].name);
				}
				if(mod[i].tags[j].type == 'p')
					tag.html(GetString("common",mod[i].tags[j].name));
				ele.append(tag);
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
	blogcontent.content = blogdiv;
}
function InitNav()
{
	/*var image = new CreateElement("DIV:prsphoto");
	//var test = document.createElement("div")
	navlayer.appendChild(image.entity);
	var namediv = new CreateElement("DIV:usernamediv");
	var name = new CreateElement("p:username");
	name.html(GetString("common", "name"));
	namediv.append(name);
	navlayer.appendChild(namediv.entity);*/
	CreateModule(modstruct["nav"],navlayer);
}
function InitPhoto()
{
	CreateModule(modstruct["photo"], photolayer);
}
function InitBLog()
{
	CreateModule(modstruct["blog"], bloglayer);
	var bloglist = Lan.blog;
	for(var i=0;i<bloglist.length;i++)
	{
		CreateOneBlog(bloglist[i]);
		GetByID("blogcontent").appendChild(bloglist[i].content.entity);
	}
}
function InitHappy()
{
	CreateModule(modstruct["happy"],happylayer);
	var happylist = Lan.happy;
	CreateOneBlog(happylist[0]);
	GetByID("happytext").appendChild(happylist[0].content.entity);
	CreateOneBlog(happylist[1]);
	GetByID("happyimg").appendChild(happylist[1].content.entity);
	GetByID("happyimg1").setAttribute("class","imgtitle");
}
function InitBottom()
{
	CreateModule(modstruct["bottom"],bottomlayer);
	
}
function HomePage()
{
	InitNav();
	InitPhoto();
	InitBLog();
	InitHappy();
	InitBottom();
}
