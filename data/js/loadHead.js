function loadHead(subdirectory){
	var cd = "";

	if(subdirectory){
		cd = "../"
	}

	var myHead = document.createElement("link");
	
	var num;
	for(num = 16; num <= 128; num += 16){
		if (!((64 < num) && (num < 128))){
			myHead.setAttribute("href", cd+"data/imgs/logo_ico"+num+".png");
			myHead.setAttribute("sizes", num+"x"+num);

			//Chrome, Safari, IE
			myHead.setAttribute("rel", "shortcut icon");
			document.getElementsByTagName("head")[0].appendChild(myHead);

			//Firefox, Opera
			myHead.setAttribute("rel", "icon");
			document.getElementsByTagName("head")[0].appendChild(myHead);
		}
	}

	myHead = document.createElement("meta");
	myHead.setAttribute("name", "viewport");
	myHead.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1");

	document.getElementsByTagName("head")[0].appendChild(myHead);

	document.title = "INOPGames";
}