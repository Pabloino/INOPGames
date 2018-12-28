function setLanguage(lang_id, currentPage){
	var num = lang_id;

	//Header
	if(!(currentPage === "index")){
		document.getElementById("home_menu").innerHTML = obj.header[num].home;
		document.getElementById("games_menu").innerHTML = obj.header[num].games;
		document.getElementById("news_menu").innerHTML = obj.header[num].news;
		document.getElementById("about_menu").innerHTML = obj.header[num].about;
		document.getElementById("lang").innerHTML = obj.header[num].lang;
		document.getElementById("lang_mobile").innerHTML = obj.header[num].langMobile;
		document.getElementById("lang").title = obj.header[num].langTitle;

		if(num == 0){
			document.getElementById("lang").setAttribute('href',"javascript:goPage('"+currentPage+".html','es')");
			document.getElementById("lang_mobile").setAttribute('href',"javascript:goPage('"+currentPage+".html','es')");
		} else {
			document.getElementById("lang").setAttribute('href',"javascript:goPage('"+currentPage+".html','en')");
			document.getElementById("lang_mobile").setAttribute('href',"javascript:goPage('"+currentPage+".html','en')");
		}
	}

	//Slider
	if(currentPage === "home"){
		document.getElementById("slide1").innerHTML = obj.slideshow[num].descriptionA;
		document.getElementById("slide2").innerHTML = obj.slideshow[num].descriptionB;
		document.getElementById("slide3").innerHTML = obj.slideshow[num].descriptionC;
		document.getElementById("button-slide1").innerHTML = obj.buttons[num].read_button;
		document.getElementById("button-slide2").innerHTML = obj.buttons[num].read_button;
		document.getElementById("button-slide3").innerHTML = obj.buttons[num].read_button;
	}

	//Games
	if(currentPage === "games"){
		for(var i=0; i < document.getElementsByClassName("text").length; i++){
			document.getElementsByClassName("text")[i].innerHTML = obj_game.catalog_list[i][num].catalog;
		}
	}

	//Footer
	document.getElementById("copyright-txt").innerHTML = obj.footer[num].copyright;
	document.getElementById("copyright-txt-mob").innerHTML = obj.footer[num].copyright_mobile;
	for(var i = 0; i < document.getElementsByClassName("face-txt").length; i++){
		document.getElementsByClassName("face-txt")[i].title = obj.footer[num].facebookTitle;
		document.getElementsByClassName("yt-txt")[i].title = obj.footer[num].youtubeTitle;
		document.getElementsByClassName("contact-txt")[i].title = obj.footer[num].contactTitle;
	}
}