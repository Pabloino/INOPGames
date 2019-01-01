function goPage(page, language){
	var pageDestination = page + "?locale=" + language;

	if(page === "item.html"){
		pageDestination += "&news=" + getNews();
	}

	location.href = pageDestination;
}

function goPageNews(news_id, language){
	page = "item.html";
	page += "?locale=" + language + "&news=" + news_id;
	location.href = page;
}