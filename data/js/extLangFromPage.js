function extractLangFromPage(){
	var parameters = location.search.substring(1);
	var langValue = parameters.split("=");

	if(langValue[1] === "en"){
		setLanguage(0);
	} else {
		setLanguage(1);
	}
}