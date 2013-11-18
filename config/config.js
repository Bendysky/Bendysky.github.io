var Module = {
	"nav":[{type:"div",name:"photodiv",classinfo:"prsphoto"},
			{type:"div",name:"userdiv",classinfo:"usernamediv",tags:[
				{type:"img",name:"username",classinfo:"username",src:"./images/name.png"}
			]},
			{type:"div",name:"navbardiv",classinfo:"navbar",tags:[
				{type:"div",name:"homebtn",classinfo:"homebtn"},
				{type:"div",name:"blogbtn",classinfo:"blogbtn"},
				{type:"div",name:"happybtn",classinfo:"happybtn"},
				{type:"div",name:"photobtn",classinfo:"photobtn"}
			]},
			{type:"div",name:"navbottomdiv",classinfo:"navbottom"}
	],
		
	"photo":[{type:"div",name:"photoleft",classinfo:"photoleft"},
			{type:"div",name:"photomid",classinfo:"photomid"},
			{type:"div",name:"photoright",classinfo:"photoright"}],
				
	"blog":[{type:"div",name:"bloglist",classinfo:"bloglist",tags:[
				{type:"p",name:"listname",classinfo:"listname"}
			]},
			{type:"div",name:"blogcontent",classinfo:"blogcontent"}
	],
	"happy":[{type:"div",name:"happylist",classinfo:"happylist",tags:[
			{type:"p",name:"happyname",classinfo:"happyname"}
			]},
			{type:"div",name:"happycontent",classinfo:"happycontent",tags:[
			{type:"div",name:"happytext",classinfo:"happytext"},
			{type:"div",name:"happyimg",classinfo:"happyimg"}
			]}
	],
	"bottom":[{type:"div",name:"bottominfo",classinfo:"bottominfo",tags:[
			{type:"p",name:"email",classinfo:"email"}
			]}
	]
};
