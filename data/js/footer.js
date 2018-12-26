function setMobile(mobile){
	if(mobile){
		return "mob-";
	} else {
		return "";
	}
}

function setSubdirectory(subdirectory){
	if(subdirectory){
		return "../";
	} else {
		return "";
	}
}

function createFooterFace(subdirectory, isIndex, mobile){
	var mob = setMobile(mobile);

	var footerFace = document.createElement("a");
	footerFace.setAttribute("class","face-txt");
	footerFace.setAttribute("href","https://www.facebook.com/INOPGames-215488275151843/");
	footerFace.setAttribute("target","_blank");

	var footerDivLinkFb = document.createElement("div");
	footerDivLinkFb.setAttribute("class",mob+"link-fb");
	footerFace.appendChild(footerDivLinkFb);

	return footerFace;
}

function createFooterYt(subdirectory, isIndex, mobile){
	var mob = setMobile(mobile);

	var footerYt = document.createElement("a");
	footerYt.setAttribute("class","yt-txt");
	footerYt.setAttribute("href","https://www.youtube.com/channel/UCBTZnYbJ7q9hWRyvfWAAKog");
	footerYt.setAttribute("target","_blank");

	var footerDivLinkYt = document.createElement("div");
	footerDivLinkYt.setAttribute("class",mob+"link-yt");
	footerYt.appendChild(footerDivLinkYt);

	return footerYt;
}

function createFooterContact(subdirectory, isIndex, mobile){
	var cd = setSubdirectory(subdirectory);
	var mob = setMobile(mobile);

	var lang;
	if(isIndex){
		lang = "en";
	} else {
		lang = getLang();
	}

	var footerContact = document.createElement("a");
	footerContact.setAttribute("class","contact-txt");
	footerContact.setAttribute("href","javascript:goPage('"+cd+"contact.html','"+lang+"')");

	var footerDivLinkContact = document.createElement("div");
	footerDivLinkContact.setAttribute("class",mob+"link-em");
	footerContact.appendChild(footerDivLinkContact);

	return footerContact;
}

function footerMobile(parentNode, subdirectory, isIndex){
	var footerFace = createFooterFace(subdirectory, isIndex, true);
	var footerYt = createFooterYt(subdirectory, isIndex, true);
	var footerContact = createFooterContact(subdirectory, isIndex, true);

	var footerDivBackMobile = document.createElement("div");
	footerDivBackMobile.setAttribute("class","background-mobile");

	var footerDivCopyrightMobile = document.createElement("div");
	footerDivCopyrightMobile.setAttribute("class","copyright-mobile");

	var footerDivCopyrightTxtMobile = document.createElement("div");
	footerDivCopyrightTxtMobile.setAttribute("id","copyright-txt-mob");
	footerDivCopyrightMobile.appendChild(footerDivCopyrightTxtMobile);

	var footerDivLinks = document.createElement("div");
	footerDivLinks.setAttribute("class","links");

	footerDivLinks.appendChild(footerFace);
	footerDivLinks.appendChild(footerYt);
	footerDivLinks.appendChild(footerContact);

	footerDivCopyrightMobile.appendChild(footerDivLinks);

	footerDivBackMobile.appendChild(footerDivCopyrightMobile);

	document.getElementsByClassName(parentNode)[0].appendChild(footerDivBackMobile);
}

function footer(parentNode, subdirectory, isIndex){
	var footerFace = createFooterFace(subdirectory, isIndex, false);
	var footerYt = createFooterYt(subdirectory, isIndex, false);
	var footerContact = createFooterContact(subdirectory, isIndex, false);
	
	var footerDiv = document.createElement("div");
	footerDiv.setAttribute("class","footer");

	var footerDivCopyright = document.createElement("div");
	footerDivCopyright.setAttribute("class","copyright");
	footerDivCopyright.setAttribute("id","copyright-txt");
	footerDiv.appendChild(footerDivCopyright);

	footerDiv.appendChild(footerContact);
	footerDiv.appendChild(footerYt);
	footerDiv.appendChild(footerFace);

	if(isIndex){
		document.getElementsByTagName(parentNode)[0].appendChild(footerDiv);
	} else {
		document.getElementsByClassName(parentNode)[0].appendChild(footerDiv);
	}
}