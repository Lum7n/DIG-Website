"use strict";
var DIG_main;
(function (DIG_main) {
    window.addEventListener("load", handleLoad);
    let openMenu = false;
    let overlay;
    let underlay;
    let openSearch = false;
    let search;
    let searchBar;
    let screenType;
    let germanFlag;
    let englishFlag;
    let language = true;
    //true  = initial   = german
    //false             = english
    let logo;
    let infos;
    let blog;
    let certificates;
    let contests;
    let members;
    let downloads;
    let contentSection;
    function handleLoad() {
        sizeTest();
        addContentToHeader();
        let burgerMenuBtn = document.getElementById("menu");
        burgerMenuBtn.addEventListener("click", openBurgerMenu);
        overlay = document.querySelector(".overlay");
        overlay.addEventListener("click", closeBurgerMenu);
        underlay = document.querySelector(".underlay");
        underlay.addEventListener("click", closeBurgerMenu);
        flagSet();
        search = document.getElementById("search");
        search.addEventListener("click", openSearchBar);
        underlay.addEventListener("click", closeSearchBar);
        searchBar = document.getElementById("searchDiv");
        addNavListeners();
        contentSection = document.getElementById("content");
    }
    function sizeTest() {
        let screenWidth = screen.width;
        let screenHeight = screen.height;
        console.log("Width: ", screenWidth);
        console.log("Height: ", screenHeight);
        if (screenWidth < screenHeight) {
            // console.log("vertical");
            screenType = "vertical";
            addStylesheet("style_vertical.css");
            matchWidth(screenWidth);
        }
        else if (screenWidth > screenHeight) {
            // console.log("horizontal");
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
            // console.log("body: ", bodyWidth);
            let body = document.querySelector("body");
            body.style.width = bodyWidth + "px";
        }
        else {
            let wholeMarginWidth = screenWidth * 0.1;
            let bodyWidth = screenWidth - wholeMarginWidth;
            // console.log("body: ", bodyWidth);
            let body = document.querySelector("body");
            body.style.width = bodyWidth + "px";
            body.style.marginLeft = (wholeMarginWidth / 2) + "px";
            let marginLogo = document.getElementById("logoSize");
            marginLogo.style.marginLeft = (wholeMarginWidth / 4) + "px";
            let marginStripe = document.getElementById("stripe");
            marginStripe.style.marginRight = "-" + (wholeMarginWidth / 2 - 1) + "px";
            let inputSearch = document.getElementsByClassName("inputSearch");
            inputSearch[1].style.width = screenWidth * 0.6 + "px";
            // inputSearch[2].style.width = screenWidth * 0.6 + "px";
        }
    }
    function addContentToHeader() {
        let header = document.querySelector("header");
        console.log(header);
    }
    function openBurgerMenu() {
        // console.log("click");
        // console.log(open);
        if (openMenu == false) {
            overlay.style.width = "320px";
            underlay.style.width = "100%";
            openMenu = true;
        }
        else {
            console.log("fehler");
        }
    }
    function closeBurgerMenu() {
        // console.log("click");
        // console.log(open);
        if (openMenu == true) {
            overlay.style.width = "0%";
            underlay.style.width = "0%";
            openMenu = false;
        }
        else {
            console.log("fehler");
        }
    }
    function flagSet() {
        // console.log(screenType);
        if (screenType == "vertical") {
            console.log(screenType);
            germanFlag = document.getElementById("DE_v");
            germanFlag.addEventListener("click", changeLanguage);
            englishFlag = document.getElementById("EN_v");
            englishFlag.addEventListener("click", changeLanguage);
            englishFlag.style.filter = "grayscale(100%)";
            englishFlag.style.webkitFilter = "grayscale(100%)";
        }
        else if (screenType == "horizontal") {
            console.log(screenType);
            germanFlag = document.getElementById("DE_h");
            germanFlag.addEventListener("click", changeLanguage);
            englishFlag = document.getElementById("EN_h");
            englishFlag.addEventListener("click", changeLanguage);
            englishFlag.style.filter = "grayscale(100%)";
            englishFlag.style.webkitFilter = "grayscale(100%)";
        }
    }
    function changeLanguage(_event) {
        let target = _event.target;
        let targetElement = target;
        let targetID = targetElement.alt;
        targetID = targetID.slice(0, 2);
        console.log(targetID);
        if (targetID == "DE") {
            // console.log("DE");
            if (language != true) {
                console.log("wechsel auf deutsch");
                englishFlag.style.filter = "grayscale(100%)";
                englishFlag.style.webkitFilter = "grayscale(100%)";
                germanFlag.style.filter = "";
                germanFlag.style.webkitFilter = "";
                language = true;
            }
            else {
                console.log("deutsch aktiv gewesen");
            }
        }
        else if (targetID == "EN") {
            // console.log("EN");
            if (language == true) {
                console.log("wechsel auf englisch");
                germanFlag.style.filter = "grayscale(100%)";
                germanFlag.style.webkitFilter = "grayscale(100%)";
                englishFlag.style.filter = "";
                englishFlag.style.webkitFilter = "";
                language = false;
            }
            else {
                console.log("englisch aktiv gewesen");
            }
        }
        else {
            console.log("fehler");
        }
    }
    function openSearchBar() {
        // console.log(openSearch);
        if (openSearch == false) {
            searchBar.style.height = "146px";
            underlay.style.width = "100%";
            openSearch = true;
        }
        else {
            console.log("fehler");
        }
    }
    function closeSearchBar() {
        // console.log(openSearch);
        if (openSearch == true) {
            searchBar.style.height = "0px";
            underlay.style.width = "0%";
            openSearch = false;
        }
        else {
            console.log("fehler");
        }
    }
    function aktiv(item) {
        let aktiv = document.getElementById("aktiv");
        if (aktiv != null) {
            aktiv.id = "";
        }
        switch (item) {
            case "Infos":
                console.log("I");
                let childofInfos = infos.firstElementChild;
                childofInfos.id = "aktiv";
                break;
            case "Blog":
                console.log("B");
                let childofBlog = blog.firstElementChild;
                childofBlog.id = "aktiv";
                break;
            case "Certificates":
                console.log("Cer");
                let childofCertificates = certificates.firstElementChild;
                childofCertificates.id = "aktiv";
                break;
            case "Contests":
                console.log("Con");
                let childofContests = contests.firstElementChild;
                childofContests.id = "aktiv";
                break;
            case "Members":
                console.log("Mem");
                let childofMembers = members.firstElementChild;
                childofMembers.id = "aktiv";
                break;
            case "Downloads":
                console.log("D");
                let childofDownloads = downloads.firstElementChild;
                childofDownloads.id = "aktiv";
                break;
            default:
                break;
        }
    }
    function addNavListeners() {
        //Logo
        logo = document.getElementById("Logo");
        logo.addEventListener("click", switchToHome);
        //Infos
        infos = document.getElementById("Infos");
        infos.addEventListener("click", switchToInfos);
        let history = document.getElementById("Geschichte");
        history.addEventListener("click", switchToInfos);
        let contacts = document.getElementById("Ansprechpartner");
        contacts.addEventListener("click", switchToInfos);
        let dates = document.getElementById("Termine");
        dates.addEventListener("click", switchToInfos);
        let requirements = document.getElementById("Anforderungen");
        requirements.addEventListener("click", switchToInfos);
        //Blog
        blog = document.getElementById("Blog");
        blog.addEventListener("click", switchToBlog);
        let rundsprueche = document.getElementById("Rundspruche");
        rundsprueche.addEventListener("click", switchToBlog);
        let latest = document.getElementById("Aktuell");
        latest.addEventListener("click", switchToBlog);
        let archive = document.getElementById("Archiv");
        archive.addEventListener("click", switchToBlog);
        let forum = document.getElementById("Forum");
        forum.addEventListener("click", switchToBlog);
        //Diplome
        certificates = document.getElementById("Diplome");
        certificates.addEventListener("click", switchToCertificates);
        let insert = document.getElementById("Diplombeilage");
        insert.addEventListener("click", switchToCertificates);
        //Contests
        contests = document.getElementById("Contests");
        contests.addEventListener("click", switchToContests);
        let results = document.getElementById("Ergebnisse");
        results.addEventListener("click", switchToContests);
        //Mitglieder
        members = document.getElementById("Mitglieder");
        members.addEventListener("click", switchToMembers);
        let become = document.getElementById("DIGwerden");
        become.addEventListener("click", switchToMembers);
        let memberList = document.getElementById("Mitgliederliste");
        memberList.addEventListener("click", switchToMembers);
        let departments = document.getElementById("Sektionen");
        departments.addEventListener("click", switchToMembers);
        //Downloads
        downloads = document.getElementById("Downloads");
        downloads.addEventListener("click", switchToDownloads);
        let dowRules = document.getElementById("Dow_Ausschreibungen");
        dowRules.addEventListener("click", switchToDownloads);
        let dowResults = document.getElementById("Dow_Ergebnisse");
        dowResults.addEventListener("click", switchToDownloads);
        let dowGCR = document.getElementById("Dow_GCR");
        dowGCR.addEventListener("click", switchToDownloads);
        let dowMemberList = document.getElementById("Dow_Mitgliederliste");
        dowMemberList.addEventListener("click", switchToDownloads);
    }
    function switchToHome() {
        contentSection.innerHTML = "Willkommen bei der Diplom Interessen Gruppe.";
    }
    function switchToInfos(_event) {
        // let target: EventTarget = <EventTarget>_event.target;
        // let targetElement: HTMLElement = <HTMLElement>target;
        // let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        // let targetID: string = parentElement.id;
        // console.log(targetElement);
        // console.log("parent: ", parentElement);
        // console.log(targetID);
        aktiv("Infos");
        contentSection.innerHTML = "Info";
    }
    function switchToBlog(_event) {
        // let target: EventTarget = <EventTarget>_event.target;
        // let targetElement: HTMLElement = <HTMLElement>target;
        // let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        // let targetID: string = parentElement.id;
        // console.log(targetElement);
        // console.log("parent: ", parentElement);
        // console.log(targetID);
        aktiv("Blog");
        contentSection.innerHTML = "Blog";
    }
    function switchToCertificates(_event) {
        // let target: EventTarget = <EventTarget>_event.target;
        // let targetElement: HTMLElement = <HTMLElement>target;
        // let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        // let targetID: string = parentElement.id;
        // console.log(targetElement);
        // console.log("parent: ", parentElement);
        // console.log(targetID);
        aktiv("Certificates");
    }
    function switchToContests(_event) {
        // let target: EventTarget = <EventTarget>_event.target;
        // let targetElement: HTMLElement = <HTMLElement>target;
        // let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        // let targetID: string = parentElement.id;
        // console.log(targetElement);
        // console.log("parent: ", parentElement);
        // console.log(targetID);
        aktiv("Contests");
        contentSection.innerHTML = "Contests";
    }
    function switchToMembers(_event) {
        // let target: EventTarget = <EventTarget>_event.target;
        // let targetElement: HTMLElement = <HTMLElement>target;
        // let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        // let targetID: string = parentElement.id;
        // console.log(targetElement);
        // console.log("parent: ", parentElement);
        // console.log(targetID);
        aktiv("Members");
        contentSection.innerHTML = "Mitglieder";
    }
    function switchToDownloads(_event) {
        // let target: EventTarget = <EventTarget>_event.target;
        // let targetElement: HTMLElement = <HTMLElement>target;
        // let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        // let targetID: string = parentElement.id;
        // console.log(targetElement);
        // console.log("parent: ", parentElement);
        // console.log(targetID);
        aktiv("Downloads");
        contentSection.innerHTML = "Downloads";
    }
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=script.js.map