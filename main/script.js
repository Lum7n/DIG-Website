"use strict";
var DIG_main;
(function (DIG_main) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("color");
        let body = document.querySelector("body");
        body.style.color = "darkblue";
    }
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=script.js.map