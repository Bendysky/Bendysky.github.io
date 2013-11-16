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
				if(mod[i].tags[j].type == 'p')
					tag.html(GetString("common",mod[i].tags[j].name));
				ele.append(tag);
			}
		}
		moddiv.appendChild(ele.entity);
	}
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