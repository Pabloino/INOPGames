function getLang(){
	var parameters = location.search.substring(1);
	var langValue = parameters.split("&");
	langValue = langValue[0].split("=");

	if(typeof langValue[1] === "undefined"){
		langValue[1] = "en";
	}

	return langValue[1];
}

function loadLanguage(currentPage){
	if(getLang() === "es"){
		setLanguage(1, currentPage);
	} else {
		setLanguage(0, currentPage);
	}
}

function loadLanguageGame(currentPage){
	if(getLang() === "es"){
		setLanguageGame(1, currentPage);
	} else {
		setLanguageGame(0, currentPage);
	}
}

function loadLanguageNews(){
	if(getLang() === "es"){
		loadNewsList(1);
	} else {
		loadNewsList(0);
	}
}

function getStringLimit(){
	return 300;
}