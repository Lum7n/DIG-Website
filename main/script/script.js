"use strict";
var DIG_main;
(function (DIG_main) {
    window.addEventListener("load", handleLoad);
    DIG_main.srcAdd = "";
    DIG_main.srcAddNav = "";
    let screenType;
    let screenWidth = screen.width;
    let openMenu = false;
    let overlay;
    let underlay;
    let openSearch = false;
    let search;
    let searchBar;
    // let logo: HTMLElement;
    // let infos: HTMLElement;
    // let blog: HTMLElement;
    // let awards: HTMLElement;
    // let contests: HTMLElement;
    // let members: HTMLElement;
    // let downloads: HTMLElement;
    // let contentSection: HTMLElement;
    async function handleLoad() {
        getLayer();
        let responseNav = await fetch(DIG_main.srcAdd + "script/navigation.json");
        let offerNav = await responseNav.text();
        DIG_main.data = JSON.parse(offerNav);
        let responseLanguage = await fetch(DIG_main.srcAdd + "script/nav_language.json");
        let offerLanguage = await responseLanguage.text();
        DIG_main.languageData = JSON.parse(offerLanguage);
        getScreenOrientation();
        getBrowserInfos();
        addNavListeners();
        addContactInfo();
        addAndchangeLinks();
    }
    function getLayer() {
        let body = document.querySelector("body");
        let layerString = body.getAttribute("data-layer");
        DIG_main.layer = parseFloat(layerString);
        switch (DIG_main.layer) {
            // von 1/2/3 auf 0 geht noch nicht
            // von 0 auf 0 geht nicht
            case 0:
                DIG_main.srcAdd = "";
                DIG_main.srcAddNav = "html/";
                break;
            case 1:
                DIG_main.srcAdd = "../"; //Elemente die von der aktuellen Seite aus, auf Ebene 0 liegen - scripts, json, Home.html, etc.
                DIG_main.srcAddNav = ""; //Elemente die von der aktuellen Seite aus, auf Ebene 1 liegen - alle 1. Unterseiten - Infos, Blog, Diplome, etc.
                break;
            case 2:
                DIG_main.srcAdd = "../../";
                DIG_main.srcAddNav = "../";
                break;
            case 3:
                DIG_main.srcAdd = "../../../";
                DIG_main.srcAddNav = "../../";
                break;
            case 4:
                DIG_main.srcAdd = "../../../../";
                DIG_main.srcAddNav = "../../../";
                break;
            default:
                break;
        }
        console.log(DIG_main.layer + DIG_main.srcAdd);
        console.log(DIG_main.srcAddNav);
    }
    function getScreenOrientation() {
        screenWidth = screen.width;
        let screenHeight = screen.height;
        // console.log("Width: ", screenWidth);
        // console.log("Height: ", screenHeight);
        if (screenWidth < screenHeight) {
            screenType = "vertical";
            addStylesheet(DIG_main.srcAdd + "style/style_vertical.css");
            addContentToHeader(screenType);
            matchWidth(screenWidth);
            addListenerForBurgerMenu();
        }
        else if (screenWidth > screenHeight) {
            screenType = "horizontal";
            addStylesheet(DIG_main.srcAdd + "style/style_horizontal.css");
            addContentToHeader(screenType);
        }
        else {
            console.log("error");
        }
    }
    function addStylesheet(fileName) {
        let head = document.head;
        let link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = fileName;
        head.appendChild(link);
    }
    function addContentToHeader(_screenType) {
        DIG_main.header = document.querySelector("header");
        let screenTypeShort = _screenType.slice(0, 1);
        //Logo
        DIG_main.addHeader_Logo();
        //Language
        DIG_main.addHeader_Language(screenTypeShort);
        //Search
        DIG_main.addHeader_Search();
        if (_screenType == "vertical") {
            //Icons
            DIG_main.addHeader_Icons();
            //underlay for navigation
            let underlayDiv = document.createElement("div");
            underlayDiv.classList.add("underlay");
            DIG_main.header.appendChild(underlayDiv);
        }
        else {
            console.log("horizontal");
        }
        //Navigation + main_NavElement + Stripe
        DIG_main.addHeader_Navigation(_screenType);
    }
    function matchWidth(screenWidth) {
        if (screenWidth < 400) {
            let bodyWidth = screenWidth - 20;
            // console.log("body: ", bodyWidth);
            let body = document.querySelector("body");
            body.style.width = bodyWidth + "px";
        }
        else {
            let wholeMarginWidth = screenWidth * 0.1;
            let bodyWidth = screenWidth - wholeMarginWidth;
            // console.log("body: ", bodyWidth);
            let body = document.querySelector("body");
            body.style.width = bodyWidth + "px";
            body.style.marginLeft = (wholeMarginWidth / 2) + "px";
            let marginLogo = document.getElementById("logoSize");
            marginLogo.style.marginLeft = (wholeMarginWidth / 4) + "px";
            let marginStripe = document.getElementById("stripe");
            marginStripe.style.marginRight = "-" + (wholeMarginWidth / 2 - 1) + "px";
            let inputSearch = document.getElementsByClassName("inputSearch");
            inputSearch[0].style.width = screenWidth * 0.6 + "px";
        }
    }
    function addListenerForBurgerMenu() {
        let burgerMenuBtn = document.getElementById("menu");
        burgerMenuBtn.addEventListener("click", openBurgerMenu);
        overlay = document.querySelector(".overlay");
        overlay.addEventListener("click", closeBurgerMenu);
        underlay = document.querySelector(".underlay");
        underlay.addEventListener("click", closeBurgerMenu);
        search = document.getElementById("search");
        search.addEventListener("click", openSearchBar);
        underlay.addEventListener("click", closeSearchBar);
        searchBar = document.getElementById("searchDiv");
    }
    function openBurgerMenu() {
        if (openMenu == false) {
            overlay.style.width = "320px";
            underlay.style.width = "100%";
            openMenu = true;
        }
        else {
            console.log("error");
        }
    }
    function closeBurgerMenu() {
        if (openMenu == true) {
            overlay.style.width = "0%";
            underlay.style.width = "0%";
            openMenu = false;
        }
        else {
            console.log("error");
        }
    }
    function openSearchBar() {
        if (openSearch == false) {
            searchBar.style.height = "146px";
            underlay.style.width = "100%";
            openSearch = true;
        }
        else {
            console.log("error");
        }
    }
    function closeSearchBar() {
        if (openSearch == true) {
            searchBar.style.height = "0px";
            underlay.style.width = "0%";
            openSearch = false;
        }
        else {
            console.log("error");
        }
    }
    function getBrowserInfos() {
        if ((navigator.userAgent.indexOf("Firefox")) != -1) {
            console.log("der aktuelle Browser ist Firefox");
        }
        else {
            console.log("der aktuelle Browser ist nicht Firefox");
        }
    }
    function addNavListeners() {
        let content = document.querySelector("#content");
        let subsiteName = content.classList[1];
        if (subsiteName == "home") {
            console.log(subsiteName);
        }
        else if (subsiteName == "infos") {
            console.log(subsiteName);
        }
        else if (subsiteName == "blog") {
            console.log(subsiteName);
        }
        else if (subsiteName == "awards") {
            console.log(subsiteName);
        }
        else if (subsiteName == "contests") {
            console.log(subsiteName);
        }
        else if (subsiteName == "members") {
            console.log(subsiteName);
        }
        else if (subsiteName == "downloads") {
            console.log(subsiteName);
        }
        else {
            console.log("error");
        }
    }
    function addContactInfo() {
        let contactFooter = document.querySelector("footer");
        let contactDiv = document.createElement("div");
        contactDiv.id = "contact";
        contactDiv.innerHTML = "Die <b>DIG - Diplom Interessen Gruppe -</b> ist ein Zusammenschluß von lizensierten Funkamateuren und SWLs die an Amateurfunk - Diplomen interessiert sind. Die DIG informiert über Diplome und die Bedingungen, die zur Verleihung erfüllt werden müssen. <br> Jeder, der die Aufnahmebedingungen erfüllt hat, kann Mitglied in dieser Gruppe werden. ";
        let contactButton = document.createElement("span");
        contactButton.classList.add("btn");
        let contactButtonLink = document.createElement("a");
        contactButtonLink.href = "../../assets/Missing.pdf",
            contactButtonLink.innerText = "Mitglied werden?";
        let contactLine = document.createElement("hr");
        contactLine.classList.add("line");
        let contactB = document.createElement("b");
        contactB.innerText = "Kontakt: DIG - Sekretär, DL0DIG";
        let contactParagraph = document.createElement("p");
        contactParagraph.innerHTML = "Werner Theis, DH1PAL <br> Luxemburger Straße 59 <br> D-53881 Euskirchen <br> E-Mail: <a href='mailto:dh1pal@darc.de' target='_blank'>dh1pal@darc.de</a> <br> Tel.: 02251 / 71666 (kein Fax)";
        contactButton.appendChild(contactButtonLink);
        contactDiv.appendChild(contactButton);
        contactDiv.appendChild(contactLine);
        contactDiv.appendChild(contactB);
        contactDiv.appendChild(contactParagraph);
        contactFooter.appendChild(contactDiv);
    }
    function addAndchangeLinks() {
        let latestProgram = document.getElementById("latestProgram");
        latestProgram.href = "../../assets/Awards/Dokuments/DIG-Diplomprogramm_2022_DE.pdf";
        let linkGCR = document.getElementById("linkGCR");
        linkGCR.href = "../../assets/Awards/Dokuments/GCR-List.pdf";
    }
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=script.js.map