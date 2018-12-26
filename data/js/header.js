function header(currentMenu, subdirectory){
	var logo = document.createElement("div");
	logo.setAttribute("class","inop-logo");

	document.getElementsByTagName("body")[0].appendChild(logo);

	var cd = "";

	if(subdirectory){
		cd = "../"
	}

	var lang = getLang();

	var headerDiv = document.createElement("div");
	headerDiv.setAttribute("class","topnav");
	headerDiv.setAttribute("id","myTopnav");

	//home
	var headerA = document.createElement("a");
	headerA.setAttribute("id","home_menu");
	if(currentMenu === "home"){
		headerA.setAttribute("class","actived");
	} else {
		headerA.setAttribute("href","javascript:goPage('"+cd+"home.html','"+lang+"')");
	}
	headerDiv.appendChild(headerA);

	//games
	var headerA = document.createElement("a");
	headerA.setAttribute("id","games_menu");
	if(currentMenu === "games"){
		headerA.setAttribute("class","actived");
	} else {
		headerA.setAttribute("href","javascript:goPage('"+cd+"games.html','"+lang+"')");
	}
	headerDiv.appendChild(headerA);

	//news
	var headerA = document.createElement("a");
	headerA.setAttribute("id","news_menu");
	if(currentMenu === "news"){
		headerA.setAttribute("class","actived");
	} else {
		headerA.setAttribute("href","javascript:goPage('"+cd+"news.html','"+lang+"')");
	}
	headerDiv.appendChild(headerA);

	//about
	var headerA = document.createElement("a");
	headerA.setAttribute("id","about_menu");
	if(currentMenu === "about"){
		headerA.setAttribute("class","actived");
	} else {
		headerA.setAttribute("href","javascript:goPage('"+cd+"about.html','"+lang+"')");
	}
	headerDiv.appendChild(headerA);

	var headerA = document.createElement("a");
	headerA.setAttribute("id","lang");
	headerA.setAttribute("style","padding: 4px 0px 0px 0px;");
	headerDiv.appendChild(headerA);

	var headerA = document.createElement("a");
	headerA.setAttribute("id","lang_mobile");
	headerA.setAttribute("class","langmob");
	headerDiv.appendChild(headerA);

	var headerA = document.createElement("a");
	headerA.setAttribute("href","javascript:void(0);");
	headerA.setAttribute("style","font-size:24px;");
	headerA.setAttribute("class","icon");
	headerA.setAttribute("onclick","myFunction()");
	headerDiv.appendChild(headerA);

	document.getElementsByTagName("body")[0].appendChild(headerDiv);
}