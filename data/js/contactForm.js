function contactForm(lang){
    var form = document.createElement("script defer");
    form.setAttribute("type","text/javascript");
    form.setAttribute("data-role","form");
    form.setAttribute("data-default-width","650px");

    if(lang === "es"){
        form.setAttribute("src","//www.123formbuilder.com/embed/4519187.js");
    } else {
        form.setAttribute("src","//www.123formbuilder.com/embed/3651655.js");
    }

    document.getElementsByClassName("contact-text")[0].appendChild(form);
}