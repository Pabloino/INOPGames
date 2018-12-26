function setLanguage(lang_id, currentPage, subdirectory){
	var cd = "";

	if(subdirectory){
		cd = "../"
	}

	cd += currentPage;

	var num = lang_id;

	//Header
	document.getElementById("home_menu").innerHTML = obj.header[num].home;
	document.getElementById("games_menu").innerHTML = obj.header[num].games;
	document.getElementById("news_menu").innerHTML = obj.header[num].news;
	document.getElementById("about_menu").innerHTML = obj.header[num].about;
	document.getElementById("lang").innerHTML = obj.header[num].lang;
	document.getElementById("lang_mobile").innerHTML = obj.header[num].langMobile;
	document.getElementById("lang").title = obj.header[num].langTitle;

	//Slider
	if(currentPage === "home"){
		document.getElementById("slide1").innerHTML = obj.slideshow[num].descriptionA;
		document.getElementById("slide2").innerHTML = obj.slideshow[num].descriptionB;
		document.getElementById("slide3").innerHTML = obj.slideshow[num].descriptionC;
		document.getElementById("button-slide1").innerHTML = obj.buttons[num].read_button;
		document.getElementById("button-slide2").innerHTML = obj.buttons[num].read_button;
		document.getElementById("button-slide3").innerHTML = obj.buttons[num].read_button;
	}

	if(num == 0){
		document.getElementById("lang").setAttribute('href',"javascript:goPage('"+cd+".html','es')");
		document.getElementById("lang_mobile").setAttribute('href',"javascript:goPage('"+cd+".html','es')");
	} else {
		document.getElementById("lang").setAttribute('href',"javascript:goPage('"+cd+".html','en')");
		document.getElementById("lang_mobile").setAttribute('href',"javascript:goPage('"+cd+".html','en')");
	}
}