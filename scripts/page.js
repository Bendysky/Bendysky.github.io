
//$ = global;
function GetString(module,str)
{
	return Lan[module][str];
}
function CreateByTag(tag)
{
	return document.createElement(tag);
}
function GetByID(idval)
{
	return document.getElementById(idval);
}
function GetByTag(tag)
{
    return document.getElementsByTagName(tag);
}
function CreateElement(tag)
{
	var tagparm = tag.split(":");
	var _this = this;
	this.entity =  (tagparm.length>1)?CreateByTag(tagparm[0]):CreateByTag(tag);
	this.SetID = function(id){
		_this.entity.setAttribute("id",id); 
	}
	this.SetClass = function(classname){
		//_this.entity.setAttribute("class",classname); 
		_this.entity.className = classname;
	}
	this.SetName = function(name){
		_this.entity.setAttribute("name",name);
	}
	this.SetValue = function(value){
		_this.entity.setAttribute("value",value);
	}
	this.append = function(child){
		_this.entity.appendChild(child.entity);
	}
	this.html = function(html){
		_this.entity.innerHTML = html;
	}
	this.show = function(){
		_this.entity.display = "block";
	}
	this.hide = function(){
		_this.entity.display = "none";
	}
	if(tagparm[1])
		_this.SetClass(tagparm[1]);
}
