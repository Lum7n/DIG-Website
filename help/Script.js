"use strict";
var sortAlphabetic;
(function (sortAlphabetic) {
    window.addEventListener("load", init);
    function init() {
        let ul = document.querySelector(".help");
        console.log(ul);
        if (ul != null) {
            let list = ul.getElementsByTagName("li");
            console.log(list);
            let liArray = Array.prototype.slice.call(list);
            console.log(liArray);
            ul.innerHTML = "";
            liArray.sort((a, b) => a.innerText.localeCompare(b.innerText));
            liArray.forEach(liElement => ul.appendChild(liElement));
        }
    }
})(sortAlphabetic || (sortAlphabetic = {}));
//# sourceMappingURL=Script.js.map