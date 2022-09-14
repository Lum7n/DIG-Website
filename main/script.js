"use strict";
var DIG_main;
(function (DIG_main) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("color");
        // let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        // body.style.color = "white";
        sizeTest();
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
        let bodyWidth = screenWidth - 20;
        console.log("body: ", bodyWidth);
        let body = document.body;
        body.style.width = bodyWidth;
    }
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=script.js.map