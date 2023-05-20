"use strict";
var DIG_main;
(function (DIG_main) {
    function generateContent(_data) {
        for (let category in _data) {
            let listitems = _data[category];
            let group = null;
            switch (category) {
                // // Einkaufen
                // case "eArtikel":
                //     group = createDatalist(listitems, category);
                //     break;
                // case "eStepper":
                //     group = createStepper(listitems, category);
                //     break;
                // case "eRadio":
                //     group = createRadio(listitems, category);
                //     break;
                // case "eLaden":
                //     group = createDatalist(listitems, category);
                //     break;
                // //Haushalt
                // case "hSelect":
                //     group = createSelect(listitems, category);
                //     break;
                // case "hStepper":
                //     group = createStepper(listitems, category);
                //     break;
                // case "hRadio":
                //     group = createRadio(listitems, category);
                //     break;
                // case "hCheckbox":
                //     group = createCheckbox(listitems, category);
                //     break;
                // //Anderes
                // case "aDatalist":
                //     group = createDatalist(listitems, category);
                //     break;
                // case "aRadio":
                //     group = createRadio(listitems, category);
                //     break;
                default:
                    break;
            }
            let span = document.querySelector("span#" + category);
            if (span && group) // wenn span und group definiert sind, bezogen auf null
                span.appendChild(group);
        }
    }
    DIG_main.generateContent = generateContent;
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=navigation.js.map