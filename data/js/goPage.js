function goPage(page, language){
	page += "?locale=" + language;
	location.href = page;
}

function goPageNews(language, news_id){
	page = "item.html";
	page += "?locale=" + language + "&news=" + news_id;
	location.href = page;
}