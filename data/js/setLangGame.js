function setLanguageGame(lang_id, currentPage){
    var num = lang_id;

    document.getElementById("download-txt").innerHTML = obj.buttons[num].download_button;

    document.getElementById("gallery-imgs-txt").innerHTML = obj_game.titles[num].gallery;
    document.getElementById("product-info-txt").innerHTML = obj_game.titles[num].product_info;
    
    document.getElementById("game-description-txt").innerHTML = obj_game[currentPage][num].info;
    document.getElementById("size-txt").innerHTML = obj_game[currentPage][num].size;
    document.getElementById("version-txt").innerHTML = obj_game[currentPage][num].version;
    document.getElementById("release-txt").innerHTML = obj_game[currentPage][num].release;
    document.getElementById("genre-txt").innerHTML = obj_game[currentPage][num].genre;
    document.getElementById("lang-txt").innerHTML = obj_game[currentPage][num].language;
    document.getElementById("platform-txt").innerHTML = obj_game[currentPage][num].platform;
}