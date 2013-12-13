function PhotoWall()
{
	var timeindex = 10;
    var imgindex = 0;
    var img = GetByID("showphoto");
    var imglist = Lan.photobook[0].list;
    var flag = 0;
    function LoopImage()
    {
        if(global.CurrentModule != "photopage")
            clearInterval(time);
        if(flag == 1)
            timeindex +=2;
        else
            timeindex -=2;
        if(timeindex <= 0 || timeindex >= 100)
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
        img.style.opacity = timeindex/100;
        if(global.Browser.indexOf("msie"))
            img.style.filter = "alpha(opacity="+timeindex+")";       
    }
    var time = setInterval(LoopImage,50);
}
function PhotoShowList()
{
	var parent = GetByID("showsecond");
	var left = new CreateElement("div:photopre");
	var mid = new CreateElement("div:photoshowmiddle");
	var right = new CreateElement("div:photonext");
	var img = new CreateElement("img");
	img.SetID("photolistmid");
	mid.append(img);
	parent.appendChild(left.entity);
	parent.appendChild(mid.entity);
	parent.appendChild(right.entity);
	left.entity.onclick = function(){
		var book = Lan.photobook[global.bookindex].list;
		var img = GetByID("photolistmid");
		if(global.photoindex <= 0)
			global.photoindex = book.length-1;
		img.style.opacity = 0;
		img.src = book[global.photoindex];
		HideToShow("photolistmid");
		global.photoindex--;
	}
	right.entity.onclick = function(){
		var book = Lan.photobook[global.bookindex].list;
		var img = GetByID("photolistmid");
		if(global.photoindex >= book.length)
			global.photoindex = 0;
		img.style.opacity = 0;
		img.src = book[global.photoindex];
		HideToShow("photolistmid");
		global.photoindex++;
	}	
}
function ShowWindow()
{
	var webx = document.body.scrollWidth;
	var weby = document.body.scrollHeight;
	var parent = GetByTag("body");
	var whole = GetByID("wholeshow");
	
	var first = new CreateElement("div:firstlayer");
	first.entity.style.width = webx+"px";
	first.entity.style.height = weby+"px";
	var second = new CreateElement("div:secondlayer");
	second.SetID("showsecond");
	//var scdheight = parseInt(second.entity.style.height);
	var topval = weby<=500?0:(weby-500)/2;
	var leftval = webx<600?0:(webx-600)/2;
	second.entity.style.top = topval+"px";
	second.entity.style.left = leftval+"px";
	var close = new CreateElement("div:closebtn");
	second.append(close);
	whole.appendChild(first.entity);
	whole.appendChild(second.entity);
	HideToShow("showsecond");
	close.entity.onclick = function(){
		//ShowToHide("showsecond");
		global.photoindex = 0;
		GetByID("wholeshow").innerHTML = "";
	}
	PhotoShowList();
	GetByID("photolistmid").src = Lan.photobook[global.bookindex].list[0];
	global.photoindex++;
}
function BookEvent()
{
	var index = parseInt(this.id);
	global.bookindex = index;
	ShowWindow();
}
function CreatePhotoBook()
{
	var book = Lan.photobook;
	for(var i=0;i<book.length;i++)
	{
		var parent = GetByID("photobook");
		var onebook = new CreateElement("div:onebook");
		var onebookimg = new CreateElement("img:onebookimg");
		onebookimg.SetSource(book[i].list[0]);
		onebookimg.SetID(i+"onebook");
		var title = new CreateElement("div:booktitle");
		title.html(book[i].title);
		onebook.append(onebookimg);
		onebook.append(title);
		parent.appendChild(onebook.entity);
		onebookimg.entity.onclick = BookEvent;
	}
}
function PhotoPage()
{
	PhotoWall();
	CreatePhotoBook();
}
$(function(){
	Lan = language[global.lan];
	modstruct = Module;
	global.CurrentModule = "photopage";
	InitNavTop();
	PhotoPage();
});
