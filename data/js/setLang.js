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
		document.getElementById("latest-news-title").innerHTML = obj.news[num].title_latest_news;

		var stringLimit = getStringLimit();
		var puntos = "";
		
		for(var i=0; i < 3; i++){
			var id_txt = "post-"+(i+1)+"-title";
			document.getElementById(id_txt).innerHTML = obj_news.news_list[i][num].title;
			id_txt = "post-"+(i+1)+"-txt";

			puntos = "";
			if(obj_news.news_list[i][num].text.length > stringLimit){
				puntos = "...";
			}

			document.getElementById(id_txt).innerHTML = obj_news.news_list[i][num].text.substring(0,stringLimit) + puntos;

			document.getElementsByClassName("read-more-txt")[i].innerHTML = obj.news[num].read_more;
		}
		
		document.getElementById("news-button-id").innerHTML = obj.buttons[num].news_button;
	}

	//Games
	if(currentPage === "games"){
		for(var i=0; i < document.getElementsByClassName("text").length; i++){
			document.getElementsByClassName("text")[i].innerHTML = obj_game.catalog_list[i][num].catalog;
		}
	}

	//News
	if(currentPage === "news"){
		document.getElementById("news-title").innerHTML = obj.news[num].title_news;
	}

	//About
	if(currentPage === "about"){
		document.getElementById("about-title").innerHTML = obj.about[num].title_about;
		document.getElementById("about-txt-header").innerHTML = obj.about[num].ip_txt_header;
		document.getElementById("about-title-perspective").innerHTML = obj.about[num].title_perspective;
		document.getElementById("about-txt-profileA").innerHTML = obj.about[num].ip_txt_profileA;
		document.getElementById("about-txt-profileB").innerHTML = obj.about[num].ip_txt_profileB;
		document.getElementById("about-title-history").innerHTML = obj.about[num].title_history;
		document.getElementById("about-txt-history").innerHTML = obj.about[num].ip_txt_history;
	}

	//Contact
	if(currentPage === "contact"){
		document.getElementById("title-contact").innerHTML = obj.contact[num].title_contact;
		document.getElementById("contact-txt").innerHTML = obj.contact[num].contact_txt;
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