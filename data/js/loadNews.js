function loadNewsList(lang_id){
    var num = lang_id;
    var stringLimit = getStringLimit();
	var puntos = "";
    
    for(var i=0; i < obj_news.news_list.length; i++){
        var list = document.createElement("li");
        var title = document.createElement("h3");
        var text = document.createElement("div");
        var link = document.createElement("a");

        link.setAttribute("href","javascript:goPageNews("+i+",getLang())");

        puntos = "";
        if(obj_news.news_list[i][num].text.length > stringLimit){
            puntos = "...";
        }

        title.innerHTML = obj_news.news_list[i][num].title;
        text.innerHTML = obj_news.news_list[i][num].text.substring(0,stringLimit) + puntos + "<br /><br />";
        link.innerHTML = obj.news[num].read_more;

        list.appendChild(title);
        list.appendChild(text);
        list.appendChild(link);
        
        document.getElementById("news-list").appendChild(list);
    }
}