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
	//for(var i=0;i<bloglist.length;i++)
	//{
		var oneblog = CreateOneBlog(bloglist[0]);
		GetByID("blogcontent").appendChild(oneblog.entity);
	//}
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
	/*var ele = GetByID("wholecontent");
	var layer;
	ele.innerHTML = "";
	layer = new CreateElement("DIV");
	layer.SetID("photolayer");
	ele.appendChild(layer.entity);
	
	layer = new CreateElement("DIV");
	layer.SetID("bloglayer");
	ele.appendChild(layer.entity);

	layer = new CreateElement("DIV");
	layer.SetID("happylayer");
	ele.appendChild(layer.entity);

	layer = new CreateElement("DIV");
	layer.SetID("bottomlayer");
	ele.appendChild(layer.entity);
	
	photolayer = GetByID("photolayer");
	bloglayer = GetByID("bloglayer");
	happylayer = GetByID("happylayer");
	bottomlayer = GetByID("bottomlayer");*/

    InitPhoto();
    InitBLog();
    InitHappy();
    InitBottom();
}

$(function(){
	global.CurrentModule = "homepage";
	Lan = language[global.lan];
	modstruct = Module;
	InitNavTop();
	HomePage();
});

