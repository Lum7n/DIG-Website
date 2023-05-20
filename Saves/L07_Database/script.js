"use strict";
var WeWork4U_5;
(function (WeWork4U_5) {
    let url = "https://lum7n.herokuapp.com";
    // let url: string = "http://localhost:5001";
    let amountValue;
    let amount;
    window.addEventListener("load", init);
    async function init(_event) {
        let response = await fetch("data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        //get submit und reset button
        let submit = document.querySelector("#submit");
        let reset = document.querySelector("button[type=reset]");
        submit.addEventListener("click", sendOrder);
        reset.addEventListener("click", resetOrder);
        //get show und hide button
        let show = document.querySelector("#show");
        let hide = document.querySelector("#hide");
        show.addEventListener("click", showOrderedTasks);
        hide.addEventListener("click", resetSpan);
        WeWork4U_5.generateTableE();
        WeWork4U_5.generateTableH();
        WeWork4U_5.generateTableA();
        WeWork4U_5.generateContent(data);
        let lineE = document.getElementById("ArtikelIn");
        lineE.addEventListener("click", createLineE);
        let lineH = document.getElementById("WorkIn");
        lineH.addEventListener("click", createLineH);
        let lineA = document.getElementById("DiffIn");
        lineA.addEventListener("click", createLineA);
        // let setW: HTMLElement = <HTMLElement>document.getElementById("getWhite");
        // setW.addEventListener("click", setWhite);
        // let setM: HTMLElement = <HTMLElement>document.getElementById("getMain");
        // setM.addEventListener("click", setMain);
        let slider = document.getElementById("slider");
        slider.addEventListener("input", displayAmount);
        slider.addEventListener("change", getAmount);
        let lineB = document.getElementById("BankIn");
        lineB.addEventListener("click", logAmount);
    }
    async function sendOrder(_event) {
        console.log("send order");
        let formData = new FormData(document.querySelector("form"));
        let query = new URLSearchParams(formData);
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
    }
    function resetOrder(_event) {
        WeWork4U_5.tableE.innerHTML = "";
        WeWork4U_5.generateTableE();
        amount = document.querySelector("span#log");
        amount.innerHTML = "";
        WeWork4U_5.tableH.innerHTML = "";
        WeWork4U_5.generateTableH();
        WeWork4U_5.tableA.innerHTML = "";
        WeWork4U_5.generateTableA();
    }
    async function showOrderedTasks(_event) {
        let span = document.querySelector("#orderedTasks");
        let response = await fetch(url + "?" + "getTasks=yes");
        span.innerHTML = "";
        let responseText = await response.text();
        let reT2 = responseText.replace(/\\|{|}|"|/g, "");
        console.log(reT2);
        for (let entry of reT2) {
            switch (entry) {
                case ("_"):
                    span.innerHTML += "<br>" + "Bestell-ID: " + entry;
                    break;
                case ("["):
                    break;
                case ("]"):
                    break;
                case (","):
                    span.innerHTML += "<br>";
                    break;
                case (":"):
                    span.innerHTML += entry + " ";
                    break;
                default:
                    span.innerHTML += "" + entry;
                    break;
            }
        }
        console.log(responseText);
    }
    function resetSpan() {
        let span = document.querySelector("#orderedTasks");
        span.innerHTML = "";
    }
    // create Table-Rows
    function createLineE() {
        let groupRow = document.createElement("tr");
        WeWork4U_5.tableE.appendChild(groupRow);
        //
        let formData = new FormData(document.querySelector("form"));
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            switch (entry[0]) {
                case "eArtikel":
                    let itemPrice = Number(item.getAttribute("price"));
                    let td1 = document.createElement("td");
                    td1.innerHTML += item.value;
                    groupRow.appendChild(td1);
                    let td2 = document.createElement("td");
                    td2.innerHTML += itemPrice.toFixed(2) + " €";
                    groupRow.appendChild(td2);
                    break;
                case "eStepper":
                    let info = document.querySelector("input#eStepperID");
                    let text = info.value;
                    if (text) {
                        let td3 = document.createElement("td");
                        td3.innerHTML += text;
                        groupRow.appendChild(td3);
                        break;
                    }
                case "eRadio":
                    let td4 = document.createElement("td");
                    td4.innerHTML += item.value;
                    groupRow.appendChild(td4);
                    break;
                case "eLaden":
                    let td5 = document.createElement("td");
                    td5.innerHTML += item.value;
                    groupRow.appendChild(td5);
                    break;
                default:
            }
        }
    }
    function createLineH() {
        let groupRow = document.createElement("tr");
        WeWork4U_5.tableH.appendChild(groupRow);
        //
        let formData = new FormData(document.querySelector("form"));
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            switch (entry[0]) {
                case "hSelect":
                    let td1 = document.createElement("td");
                    td1.innerHTML += item.value;
                    groupRow.appendChild(td1);
                    break;
                case "hStepper":
                    let info = document.querySelector("input#hStepperID");
                    let text = info.value;
                    if (text) {
                        let td2 = document.createElement("td");
                        td2.innerHTML += text;
                        groupRow.appendChild(td2);
                        break;
                    }
                case "hRadio":
                    let td3 = document.createElement("td");
                    td3.innerHTML = item.value;
                    groupRow.appendChild(td3);
                    break;
                case "hCheckbox":
                    console.log(item.value);
                    let td4 = document.createElement("td");
                    td4.innerHTML = item.value;
                    groupRow.appendChild(td4);
                    break;
                // let td4: HTMLTableDataCellElement = document.createElement("td"); 
                // let x: number = 0;
                // if (x == 0) { //schon eine checkbox durch gelaufen
                //     let td4: HTMLTableDataCellElement = document.createElement("td");
                //     td4.innerHTML += item.value;
                //     groupRow.appendChild(td4);
                //     x++;
                // } else {
                //     td4.innerHTML = td4.innerHTML + ", " + item.value; //ja, + item
                // }
                // break;
                default:
            }
        }
    }
    function createLineA() {
        let groupRow = document.createElement("tr");
        WeWork4U_5.tableA.appendChild(groupRow);
        //
        let formData = new FormData(document.querySelector("form"));
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            switch (entry[0]) {
                case "aDatalist":
                    let td1 = document.createElement("td");
                    td1.innerHTML += item.value;
                    groupRow.appendChild(td1);
                    break;
                case "aRadio":
                    let td2 = document.createElement("td");
                    td2.innerHTML += item.value;
                    groupRow.appendChild(td2);
                    break;
                case "aInfos":
                    let info = document.querySelector("textarea#aIn");
                    let text = info.value;
                    if (text) {
                        let td3 = document.createElement("td");
                        td3.innerHTML += text;
                        groupRow.appendChild(td3);
                    }
                    break;
                default:
            }
        }
    }
    // bank-section
    function displayAmount(_event) {
        let target = _event.target;
        // amount response
        if (target.name == "slider") {
            let output = document.querySelector("output#BankBetrag");
            output.value = target.value + " €";
        }
    }
    function getAmount(_event) {
        let changeAmount = _event.target;
        // get amount, push in amountValue
        if (changeAmount.name == "slider") {
            amountValue = changeAmount.value;
        }
    }
    function logAmount(_event) {
        // log amount
        amount = document.querySelector("span#log");
        amount.innerHTML = amountValue + " € eingeloggt";
    }
    // checkout-section
    // function setWhite(): void {
    //     var m: HTMLElement = <HTMLElement>document.getElementById("main");
    //     m.style.display = "none";
    //     var w: HTMLElement = <HTMLElement>document.getElementById("whiteCover");
    //     w.style.display = "contents";
    // }
    // function setMain(): void {
    //     var m: HTMLElement = <HTMLElement>document.getElementById("whiteCover");
    //     m.style.display = "none";
    //     var w: HTMLElement = <HTMLElement>document.getElementById("main");
    //     w.style.display = "contents";
    // }
})(WeWork4U_5 || (WeWork4U_5 = {}));
//# sourceMappingURL=script.js.map