"use strict";
var DIG_main;
(function (DIG_main) {
    window.addEventListener("load", handleLoad);
    let openMenu = false;
    let overlay;
    let underlay;
    let openSearch = false;
    let search;
    let searchBar;
    let screenType;
    let germanFlag;
    let englishFlag;
    let language = true;
    //true  = initial   = german
    //false             = english
    // let logo: HTMLElement;
    // let infos: HTMLElement;
    // let blog: HTMLElement;
    // let certificates: HTMLElement;
    // let contests: HTMLElement;
    // let members: HTMLElement;
    // let downloads: HTMLElement;
    let contentSection;
    function handleLoad() {
        sizeTest();
        addContentToHeader();
        let burgerMenuBtn = document.getElementById("menu");
        burgerMenuBtn.addEventListener("click", openBurgerMenu);
        overlay = document.querySelector(".overlay");
        overlay.addEventListener("click", closeBurgerMenu);
        underlay = document.querySelector(".underlay");
        underlay.addEventListener("click", closeBurgerMenu);
        flagSet();
        search = document.getElementById("search");
        search.addEventListener("click", openSearchBar);
        underlay.addEventListener("click", closeSearchBar);
        searchBar = document.getElementById("searchDiv");
        // addNavListeners();
        contentSection = document.getElementById("content");
    }
    function sizeTest() {
        let screenWidth = screen.width;
        let screenHeight = screen.height;
        console.log("Width: ", screenWidth);
        console.log("Height: ", screenHeight);
        if (screenWidth < screenHeight) {
            // console.log("vertical");
            screenType = "vertical";
            addStylesheet("style_vertical.css");
            matchWidth(screenWidth);
        }
        else if (screenWidth > screenHeight) {
            // console.log("horizontal");
            screenType = "horizontal";
            addStylesheet("style_horizontal.css");
        }
        else {
            console.log("fehler");
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
            inputSearch[1].style.width = screenWidth * 0.6 + "px";
            // inputSearch[2].style.width = screenWidth * 0.6 + "px";
        }
    }
    function addContentToHeader() {
        let header = document.querySelector("header");
        console.log(header);
    }
    function openBurgerMenu() {
        // console.log("click");
        // console.log(open);
        if (openMenu == false) {
            overlay.style.width = "320px";
            underlay.style.width = "100%";
            openMenu = true;
        }
        else {
            console.log("fehler");
        }
    }
    function closeBurgerMenu() {
        // console.log("click");
        // console.log(open);
        if (openMenu == true) {
            overlay.style.width = "0%";
            underlay.style.width = "0%";
            openMenu = false;
        }
        else {
            console.log("fehler");
        }
    }
    function flagSet() {
        // console.log(screenType);
        if (screenType == "vertical") {
            console.log(screenType);
            germanFlag = document.getElementById("DE_v");
            germanFlag.addEventListener("click", changeLanguage);
            englishFlag = document.getElementById("EN_v");
            englishFlag.addEventListener("click", changeLanguage);
            englishFlag.style.filter = "grayscale(100%)";
            englishFlag.style.webkitFilter = "grayscale(100%)";
        }
        else if (screenType == "horizontal") {
            console.log(screenType);
            germanFlag = document.getElementById("DE_h");
            germanFlag.addEventListener("click", changeLanguage);
            englishFlag = document.getElementById("EN_h");
            englishFlag.addEventListener("click", changeLanguage);
            englishFlag.style.filter = "grayscale(100%)";
            englishFlag.style.webkitFilter = "grayscale(100%)";
        }
    }
    function changeLanguage(_event) {
        let target = _event.target;
        let targetElement = target;
        let targetID = targetElement.alt;
        targetID = targetID.slice(0, 2);
        console.log(targetID);
        if (targetID == "DE") {
            // console.log("DE");
            if (language != true) {
                console.log("wechsel auf deutsch");
                englishFlag.style.filter = "grayscale(100%)";
                englishFlag.style.webkitFilter = "grayscale(100%)";
                germanFlag.style.filter = "";
                germanFlag.style.webkitFilter = "";
                language = true;
            }
            else {
                console.log("deutsch aktiv gewesen");
            }
        }
        else if (targetID == "EN") {
            // console.log("EN");
            if (language == true) {
                console.log("wechsel auf englisch");
                germanFlag.style.filter = "grayscale(100%)";
                germanFlag.style.webkitFilter = "grayscale(100%)";
                englishFlag.style.filter = "";
                englishFlag.style.webkitFilter = "";
                language = false;
            }
            else {
                console.log("englisch aktiv gewesen");
            }
        }
        else {
            console.log("fehler");
        }
    }
    function openSearchBar() {
        // console.log(openSearch);
        if (openSearch == false) {
            searchBar.style.height = "146px";
            underlay.style.width = "100%";
            openSearch = true;
        }
        else {
            console.log("fehler");
        }
    }
    function closeSearchBar() {
        // console.log(openSearch);
        if (openSearch == true) {
            searchBar.style.height = "0px";
            underlay.style.width = "0%";
            openSearch = false;
        }
        else {
            console.log("fehler");
        }
    }
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=script.js.map