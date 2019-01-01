function setNewsItem(lang_id, news_id){
    var num = lang_id;

    document.getElementById("news-item-title").innerHTML = obj_news.news_list[news_id][num].title;
    document.getElementById("news-item-txt").innerHTML = obj_news.news_list[news_id][num].text;
}

function loadNewsItem(news_id){
    if(getLang() === "es"){
		setNewsItem(1, news_id);
	} else {
		setNewsItem(0, news_id);
	}
}

function getNews(){
    var parameters = location.search.substring(1);
    var newsValue = parameters.split("&");
    newsValue = newsValue[1].split("=");

	return newsValue[1];
}