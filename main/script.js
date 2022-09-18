"use strict";
var DIG_main;
(function (DIG_main) {
    window.addEventListener("load", handleLoad);
    let open = false;
    function handleLoad() {
        console.log("color");
        // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        // body.style.color = "white";
        sizeTest();
        let burgerMenuBtn = document.querySelector(".itemM");
        burgerMenuBtn.addEventListener("click", openBurgerMenu);
        let overlay = document.querySelector(".overlay");
        overlay.addEventListener("click", closeBurgerMenu);
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
            overlay.style.width = "100%";
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
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=script.js.map