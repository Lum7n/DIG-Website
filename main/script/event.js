"use strict";
var DIG_main;
(function (DIG_main) {
    let language = true;
    //true  = initial   = german
    //false             = english
    function handleEvent(_event) {
        let target = _event.target;
        let targetID = target.id;
        switch (targetID) {
            case "DE_v":
            case "DE_h":
            case "EN_v":
            case "EN_h":
                targetID = targetID.slice(0, 2);
                changeLanguage(targetID);
                break;
            default:
                break;
        }
    }
    DIG_main.handleEvent = handleEvent;
    // function rematchWidth(): void {
    //     console.log(screenWidth);
    //     matchWidth(screenWidth);
    // }
    function changeLanguage(_targetID) {
        if (_targetID == "DE") {
            if (language != true) {
                DIG_main.enFlag.style.filter = "grayscale(100%)";
                DIG_main.enFlag.style.webkitFilter = "grayscale(100%)";
                DIG_main.deFlag.style.filter = "";
                DIG_main.deFlag.style.webkitFilter = "";
                language = true;
            }
            else {
                console.log("already german");
            }
        }
        else if (_targetID == "EN") {
            if (language == true) {
                DIG_main.deFlag.style.filter = "grayscale(100%)";
                DIG_main.deFlag.style.webkitFilter = "grayscale(100%)";
                DIG_main.enFlag.style.filter = "";
                DIG_main.enFlag.style.webkitFilter = "";
                language = false;
            }
            else {
                console.log("already english");
            }
        }
        else {
            console.log("error");
        }
    }
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=event.js.map