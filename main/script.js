"use strict";
var DIG_main;
(function (DIG_main) {
    window.addEventListener("load", handleLoad);
    window.addEventListener("change", bodyfiller);
    function handleLoad() {
        console.log("color");
        let body = document.querySelector("body");
        body.style.color = "darkblue";
        bodyfiller();
    }
    function bodyfiller() {
        let windowWidth = window.innerWidth;
        console.log(windowWidth);
    }
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=script.js.map