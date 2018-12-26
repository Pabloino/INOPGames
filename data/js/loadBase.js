function loadBase(subdirectory){
	var cd = "";

	if(subdirectory){
		cd = "../"
	}

	var myHead = document.createElement("link");
	myHead.setAttribute("href", cd+"data/css/base.css");
	myHead.setAttribute("rel", "stylesheet");

	document.getElementsByTagName("head")[0].appendChild(myHead);
}