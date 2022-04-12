"use strict";
var DIG_main;
(function (DIG_main) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("load");
        let body = document.querySelector("body");
        body.style.backgroundColor = "#c49595";
    }
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=script.js.map