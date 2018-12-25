function loadHead(){
	var myHead = document.createElement("link");
	myHead.setAttribute("href", "../Data/css/base.css");
	myHead.setAttribute("rel", "stylesheet");

	document.getElementsByTagName("head")[0].appendChild(myHead);
}