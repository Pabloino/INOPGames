function loadGamePageTitle(){
    var gameDescription = document.createElement("div");
    gameDescription.setAttribute("id","game-description-txt");
    
    var galleryImgs = document.createElement("h3");
    galleryImgs.setAttribute("id","gallery-imgs-txt");
    
    document.getElementsByClassName("description-text")[0].appendChild(gameDescription);
    document.getElementsByClassName("description-text")[0].appendChild(galleryImgs);
}

function loadGamePageDescription(downloadLink){
    var productInfo = document.createElement("h3");
    productInfo.setAttribute("id","product-info-txt");
    
    var description = document.createElement("div");
    description.setAttribute("class","description");

    var ids = ["size-txt","version-txt","release-txt","genre-txt","lang-txt","platform-txt"];

    for(var i=0; i < ids.length; i++){
        var columns = document.createElement("div");
        columns.setAttribute("class","column");
        columns.setAttribute("id",ids[i]);
        description.appendChild(columns);
    }

    var downloadContainer = document.createElement("div");
    downloadContainer.setAttribute("class","download-container");

    var downloadA = document.createElement("a");
    downloadA.setAttribute("href",downloadLink);
    downloadA.setAttribute("id","download");

    var downloadButton = document.createElement("div");
    downloadButton.setAttribute("class","download-button");
    downloadButton.setAttribute("id","download-txt");

    downloadA.appendChild(downloadButton);
    downloadContainer.appendChild(downloadA);
    
    document.getElementsByClassName("description-text")[0].appendChild(productInfo);
    document.getElementsByClassName("description-text")[0].appendChild(description);
    document.getElementsByClassName("description-text")[0].appendChild(downloadContainer);
}

function loadModal(){
    //The Modal
    var myModal = document.createElement("div");
    myModal.setAttribute("id","myModal");
    myModal.setAttribute("class","modal");

    //The Close Button
    var close = document.createElement("span");
    close.setAttribute("class","close");
    close.setAttribute("onclick","document.getElementById('myModal').style.display='none'");
    close.innerHTML = "&times";
    myModal.appendChild(close);

    //Modal Content (The Image)
    var content = document.createElement("img");
    content.setAttribute("class","modal-content");
    content.setAttribute("id","img01");
    myModal.appendChild(content);

    //Modal Caption (Image Text)
    var caption = document.createElement("div");
    caption.setAttribute("id","caption");
    myModal.appendChild(caption);

    document.getElementsByClassName("description-text")[0].appendChild(myModal);
}