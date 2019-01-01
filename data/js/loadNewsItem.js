function setNewsItem(news_id, lang_id){
    var num = lang_id;

    document.getElementById("news-item-title").innerHTML = obj_news.news_list[news_id][num].title;
    document.getElementById("news-item-txt").innerHTML = obj_news.news_list[news_id][num].text;
}

function loadNewsItem(news_id){
    if(getLang() === "es"){
		setNewsItem(news_id, 1);
	} else {
		setNewsItem(news_id, 0);
	}
}

function getNews(){
    var parameters = location.search.substring(1);
    var newsValue = parameters.split("&");
    newsValue = newsValue[1].split("=");

	return newsValue[1];
}