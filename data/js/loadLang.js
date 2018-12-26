function getLang(){
	var parameters = location.search.substring(1);
	var langValue = parameters.split("=");

	return langValue[1];
}

function loadLanguage(currentPage, subdirectory){
	if(getLang() === "es"){
		setLanguage(1, currentPage, subdirectory);
	} else {
		setLanguage(0, currentPage, subdirectory);
	}
}