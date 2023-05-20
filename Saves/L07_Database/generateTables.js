"use strict";
var WeWork4U_5;
(function (WeWork4U_5) {
    WeWork4U_5.tableE = document.createElement("table");
    WeWork4U_5.tableH = document.createElement("table");
    WeWork4U_5.tableA = document.createElement("table");
    function generateTableE() {
        let tab = document.querySelector("div#tableE");
        let groupHead = document.createElement("tr");
        let tH1 = document.createElement("th");
        tH1.innerHTML = ("Artikel");
        let tH2 = document.createElement("th");
        tH2.innerHTML = ("Preis");
        let tH3 = document.createElement("th");
        tH3.innerHTML = ("Menge");
        let tH4 = document.createElement("th");
        tH4.innerHTML = ("Einheit");
        let tH5 = document.createElement("th");
        tH5.innerHTML = ("Laden");
        tab.appendChild(WeWork4U_5.tableE);
        WeWork4U_5.tableE.appendChild(groupHead);
        groupHead.appendChild(tH1);
        groupHead.appendChild(tH2);
        groupHead.appendChild(tH3);
        groupHead.appendChild(tH4);
        groupHead.appendChild(tH5);
        tH1.setAttribute("id", "Artikel");
        tH2.setAttribute("id", "Preis");
        tH3.setAttribute("id", "Menge");
        tH4.setAttribute("id", "Einheit");
        tH5.setAttribute("id", "Laden");
    }
    WeWork4U_5.generateTableE = generateTableE;
    function generateTableH() {
        let tab = document.querySelector("div#tableH");
        let groupHead = document.createElement("tr");
        let tH1 = document.createElement("th");
        tH1.innerHTML = ("Objekt");
        let tH2 = document.createElement("th");
        tH2.innerHTML = ("Menge");
        let tH3 = document.createElement("th");
        tH3.innerHTML = ("Einheit");
        let tH4 = document.createElement("th");
        tH4.innerHTML = ("Tätigkeit");
        tab.appendChild(WeWork4U_5.tableH);
        WeWork4U_5.tableH.appendChild(groupHead);
        groupHead.appendChild(tH1);
        groupHead.appendChild(tH2);
        groupHead.appendChild(tH3);
        groupHead.appendChild(tH4);
        tH1.setAttribute("id", "Objekt");
        tH2.setAttribute("id", "Menge");
        tH3.setAttribute("id", "Einheit");
        tH4.setAttribute("id", "TätigkeitH");
    }
    WeWork4U_5.generateTableH = generateTableH;
    function generateTableA() {
        let tab = document.querySelector("div#tableA");
        let groupHead = document.createElement("tr");
        let tH1 = document.createElement("th");
        tH1.innerHTML = ("Sache");
        let tH2 = document.createElement("th");
        tH2.innerHTML = ("Tätigkeit");
        let tH3 = document.createElement("th");
        tH3.innerHTML = ("Zusatzinformationen");
        tab.appendChild(WeWork4U_5.tableA);
        WeWork4U_5.tableA.appendChild(groupHead);
        groupHead.appendChild(tH1);
        groupHead.appendChild(tH2);
        groupHead.appendChild(tH3);
        tH1.setAttribute("id", "Sache");
        tH2.setAttribute("id", "TätigkeitA");
        tH3.setAttribute("id", "Zusatzinfos");
    }
    WeWork4U_5.generateTableA = generateTableA;
})(WeWork4U_5 || (WeWork4U_5 = {}));
//# sourceMappingURL=generateTables.js.map