function loadNewsList(lang_id){
    var num = lang_id;
    
    for(var i=0; i < obj_news.news_list.length; i++){
        var list = document.createElement("li");
        var title = document.createElement("h3");
        var text = document.createElement("div");

        title.innerHTML = obj_news.news_list[i][num].title;
        text.innerHTML = obj_news.news_list[i][num].text;

        list.appendChild(title);
        list.appendChild(text);
        
        document.getElementById("news-list").appendChild(list);
    }
}