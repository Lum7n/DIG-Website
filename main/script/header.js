"use strict";
var DIG_main;
(function (DIG_main) {
    let flagDiv;
    function addHeader_Logo() {
        let logoImg = document.createElement("img");
        logoImg.id = "logoSize";
        logoImg.src = "assets/DIG.png";
        let logoA = document.createElement("a");
        logoA.href = "Home.html";
        let logoDiv = document.createElement("div");
        logoDiv.classList.add("item1");
        logoDiv.id = "Logo";
        logoA.appendChild(logoImg);
        logoDiv.appendChild(logoA);
        DIG_main.header.appendChild(logoDiv);
    }
    DIG_main.addHeader_Logo = addHeader_Logo;
    function addHeader_Icons() {
        let iconsSearchA = document.createElement("a");
        iconsSearchA.classList.add("fa-solid");
        iconsSearchA.classList.add("fa-magnifying-glass");
        let iconsSearchSpan = document.createElement("span");
        iconsSearchSpan.id = "search";
        let iconsMenuA = document.createElement("a");
        iconsMenuA.classList.add("fa-solid");
        iconsMenuA.classList.add("fa-bars");
        let iconsMenuSpan = document.createElement("span");
        iconsMenuSpan.id = "menu";
        let iconsDiv = document.createElement("div");
        iconsDiv.classList.add("icons");
        iconsSearchSpan.appendChild(iconsSearchA);
        iconsMenuSpan.appendChild(iconsMenuA);
        iconsDiv.appendChild(iconsSearchSpan);
        iconsDiv.appendChild(iconsMenuSpan);
        DIG_main.header.appendChild(iconsDiv);
    }
    DIG_main.addHeader_Icons = addHeader_Icons;
    function addHeader_Language(_screenTypeShort) {
        DIG_main.deFlag = document.createElement("img");
        DIG_main.deFlag.src = "assets/german.png";
        DIG_main.deFlag.alt = "DE";
        DIG_main.deFlag.classList.add("flag");
        DIG_main.deFlag.id = "DE_" + _screenTypeShort;
        DIG_main.deFlag.addEventListener("click", DIG_main.handleEvent);
        DIG_main.enFlag = document.createElement("img");
        DIG_main.enFlag.src = "assets/english.png";
        DIG_main.enFlag.alt = "EN";
        DIG_main.enFlag.classList.add("flag");
        DIG_main.enFlag.id = "EN_" + _screenTypeShort;
        DIG_main.enFlag.addEventListener("click", DIG_main.handleEvent);
        DIG_main.enFlag.style.filter = "grayscale(100%)";
        DIG_main.enFlag.style.webkitFilter = "grayscale(100%)";
        if (_screenTypeShort == "v") {
            flagDiv = document.createElement("div");
            flagDiv.id = "languageDiv";
            flagDiv.appendChild(DIG_main.deFlag);
            flagDiv.appendChild(DIG_main.enFlag);
        }
        else if (_screenTypeShort == "h") {
            let flagSpan = document.createElement("span");
            flagSpan.id = "language";
            flagDiv = document.createElement("div");
            flagDiv.classList.add("item2");
            flagSpan.appendChild(DIG_main.deFlag);
            flagSpan.appendChild(DIG_main.enFlag);
            flagDiv.appendChild(flagSpan);
            DIG_main.header.appendChild(flagDiv);
        }
    }
    DIG_main.addHeader_Language = addHeader_Language;
    function addHeader_Search() {
        let searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.name = "searchbar";
        searchInput.id = "inputSearch";
        let searchI = document.createElement("i");
        searchI.classList.add("fa-solid");
        searchI.classList.add("fa-magnifying-glass");
        searchI.id = "SearchButton";
        searchI.addEventListener("click", DIG_main.handleEvent);
        let searchSpan = document.createElement("span");
        searchSpan.classList.add("searchBar");
        let searchDiv = document.createElement("div");
        searchDiv.classList.add("item3");
        searchSpan.appendChild(searchInput);
        searchSpan.appendChild(searchI);
        searchDiv.appendChild(searchSpan);
        DIG_main.header.appendChild(searchDiv);
    }
    DIG_main.addHeader_Search = addHeader_Search;
    function addHeader_Navigation(_screenType) {
        DIG_main.generateNav(DIG_main.data);
        //main_NavElement
        let nav = document.createElement("nav");
        nav.id = "mainNav";
        nav.classList.add("item4");
        nav.classList.add("overlay");
        nav.appendChild(DIG_main.mainNavUl);
        if (_screenType == "vertical") {
            let smallStripeDiv = document.createElement("div");
            smallStripeDiv.id = "stripeNav";
            nav.appendChild(smallStripeDiv);
            nav.appendChild(flagDiv);
            DIG_main.header.appendChild(nav);
        }
        DIG_main.header.appendChild(nav);
        //MainStripe
        let stripeDiv = document.createElement("div");
        stripeDiv.id = "stripe";
        stripeDiv.classList.add("item5");
        DIG_main.header.appendChild(stripeDiv);
    }
    DIG_main.addHeader_Navigation = addHeader_Navigation;
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=header.js.map