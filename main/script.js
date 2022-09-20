"use strict";
var DIG_main;
(function (DIG_main) {
    window.addEventListener("load", handleLoad);
    let open = false;
    let germanFlag;
    let englishFlag;
    let language = true;
    //true  = initial   = german
    //false             = english
    function handleLoad() {
        console.log("color");
        // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        // body.style.color = "white";
        sizeTest();
        let burgerMenuBtn = document.querySelector(".itemM");
        burgerMenuBtn.addEventListener("click", openBurgerMenu);
        let overlay = document.querySelector(".overlay");
        overlay.addEventListener("click", closeBurgerMenu);
        germanFlag = document.getElementById("DE");
        germanFlag.addEventListener("click", languageToGerman);
        englishFlag = document.getElementById("EN");
        englishFlag.addEventListener("click", languageToEnglish);
        englishFlag.style.filter = "grayscale(100%)";
        englishFlag.style.webkitFilter = "grayscale(100%)";
    }
    function sizeTest() {
        let screenWidth = screen.width;
        let screenHeight = screen.height;
        console.log("Width: ", screenWidth);
        console.log("Height: ", screenHeight);
        let screenType;
        if (screenWidth < screenHeight) {
            console.log("vertical");
            screenType = "vertical";
            addStylesheet("style_vertical.css");
            matchWidth(screenWidth);
        }
        else if (screenWidth > screenHeight) {
            console.log("horizontal");
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
            console.log("body: ", bodyWidth);
            let body = document.querySelector("body");
            body.style.width = bodyWidth + "px";
        }
        else {
            let wholeMarginWidth = screenWidth * 0.1;
            let bodyWidth = screenWidth - wholeMarginWidth;
            console.log("body: ", bodyWidth);
            let body = document.querySelector("body");
            body.style.width = bodyWidth + "px";
            body.style.marginLeft = (wholeMarginWidth / 2) + "px";
            let marginLogo = document.getElementById("logoSize");
            marginLogo.style.marginLeft = (wholeMarginWidth / 4) + "px";
            let marginStripe = document.getElementById("stripe");
            marginStripe.style.marginRight = "-" + (wholeMarginWidth / 2 - 1) + "px";
        }
    }
    function openBurgerMenu() {
        console.log("click");
        console.log(open);
        if (open == false) {
            let overlay = document.querySelector(".overlay");
            overlay.style.width = "320px";
            open = true;
        }
        else {
            console.log("fehler");
        }
    }
    function closeBurgerMenu() {
        console.log("click");
        console.log(open);
        if (open == true) {
            let overlay = document.querySelector(".overlay");
            overlay.style.width = "0%";
            open = false;
        }
        else {
            console.log("fehler");
        }
    }
    function languageToGerman() {
        console.log("DE");
        if (language != true) {
            console.log("wechsel auf deutsch");
            englishFlag.style.filter = "grayscale(100%)";
            englishFlag.style.webkitFilter = "grayscale(100%)";
            germanFlag.style.filter = "";
            germanFlag.style.webkitFilter = "";
            language = true;
        }
        else {
            console.log("deutsch grau gewesen");
        }
    }
    function languageToEnglish() {
        console.log("EN");
        if (language == true) {
            console.log("wechsel auf englisch");
            germanFlag.style.filter = "grayscale(100%)";
            germanFlag.style.webkitFilter = "grayscale(100%)";
            englishFlag.style.filter = "";
            englishFlag.style.webkitFilter = "";
            language = false;
        }
        else {
            console.log("englisch grau gewesen");
        }
    }
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=script.js.map