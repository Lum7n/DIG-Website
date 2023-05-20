"use strict";
var DIG_main;
(function (DIG_main) {
    window.addEventListener("load", handleLoad);
    let screenType;
    let screenWidth = screen.width;
    let openMenu = false;
    let overlay;
    let underlay;
    let openSearch = false;
    let search;
    let searchBar;
    // let logo: HTMLElement;
    // let infos: HTMLElement;
    // let blog: HTMLElement;
    // let certificates: HTMLElement;
    // let contests: HTMLElement;
    // let members: HTMLElement;
    // let downloads: HTMLElement;
    // let contentSection: HTMLElement;
    function handleLoad() {
        screenOrientation();
        // window.addEventListener("resize", rematchWidth)
        addNavListeners();
    }
    function screenOrientation() {
        screenWidth = screen.width;
        let screenHeight = screen.height;
        // console.log("Width: ", screenWidth);
        // console.log("Height: ", screenHeight);
        if (screenWidth < screenHeight) {
            screenType = "vertical";
            addStylesheet("style/style_vertical.css");
            addContentToHeader(screenType);
            matchWidth(screenWidth);
            addListenerForBurgerMenu();
        }
        else if (screenWidth > screenHeight) {
            screenType = "horizontal";
            addStylesheet("style/style_horizontal.css");
            addContentToHeader(screenType);
        }
        else {
            console.log("error");
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
    function addContentToHeader(_screenType) {
        DIG_main.header = document.querySelector("header");
        let screenTypeShort = _screenType.slice(0, 1);
        //Logo
        DIG_main.addHeader_Logo();
        //Language
        DIG_main.addHeader_Language(screenTypeShort);
        //Search
        DIG_main.addHeader_Search();
        if (_screenType == "vertical") {
            //Icons
            DIG_main.addHeader_Icons();
            //underlay for navigation
            let underlayDiv = document.createElement("div");
            underlayDiv.classList.add("underlay");
            DIG_main.header.appendChild(underlayDiv);
        }
        else {
            console.log("horizontal");
        }
        //Navigation
        navigationUl();
        //main_NavElement + Stripe
        DIG_main.addHeader_mainNav(_screenType);
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
            inputSearch[0].style.width = screenWidth * 0.6 + "px";
        }
    }
    function navigationUl() {
        //Navigation Infos
        let infosA = document.createElement("a");
        infosA.classList.add("mI_Text");
        infosA.href = "Infos.html";
        infosA.innerText = "Infos";
        let infosLi = document.createElement("li");
        infosLi.classList.add("mainItem");
        infosLi.id = "Infos";
        infosLi.appendChild(infosA);
        let historyA = document.createElement("a");
        historyA.href = "Infos.html";
        historyA.innerText = "Geschichte der DIG";
        let historyLi = document.createElement("li");
        historyLi.id = "Geschichte";
        historyLi.appendChild(historyA);
        let contactsA = document.createElement("a");
        contactsA.href = "Infos.html";
        contactsA.innerText = "Ansprechpartner";
        let contactsLi = document.createElement("li");
        contactsLi.id = "Ansprechpartner";
        contactsLi.appendChild(contactsA);
        let datesA = document.createElement("a");
        datesA.href = "Infos.html";
        datesA.innerText = "Termine";
        let datesLi = document.createElement("li");
        datesLi.id = "Termine";
        datesLi.appendChild(datesA);
        let requirementsA = document.createElement("a");
        requirementsA.href = "Infos.html";
        requirementsA.innerText = "Anforderungen";
        let requirementsLi = document.createElement("li");
        requirementsLi.id = "Anforderungen";
        requirementsLi.appendChild(requirementsA);
        let infosUl = document.createElement("ul");
        infosUl.classList.add("dropdown-content");
        infosUl.appendChild(historyLi);
        infosUl.appendChild(contactsLi);
        infosUl.appendChild(datesLi);
        infosUl.appendChild(requirementsLi);
        let infosDiv = document.createElement("div");
        infosDiv.classList.add("drop");
        infosDiv.appendChild(infosLi);
        infosDiv.appendChild(infosUl);
        //Navigation Blog
        let blogA = document.createElement("a");
        blogA.classList.add("mI_Text");
        blogA.href = "Blog.html";
        blogA.innerText = "Blog";
        let blogLi = document.createElement("li");
        blogLi.classList.add("mainItem");
        blogLi.id = "Blog";
        blogLi.appendChild(blogA);
        let rundspruecheA = document.createElement("a");
        rundspruecheA.href = "Blog.html";
        rundspruecheA.innerText = "Rundsprüche";
        let rundspruecheLi = document.createElement("li");
        rundspruecheLi.id = "Rundspruche";
        rundspruecheLi.appendChild(rundspruecheA);
        let latestA = document.createElement("a");
        latestA.href = "Blog.html";
        latestA.innerText = "Aktuell";
        let latestLi = document.createElement("li");
        latestLi.id = "Aktuell";
        latestLi.appendChild(latestA);
        let archiveA = document.createElement("a");
        archiveA.href = "Blog.html";
        archiveA.innerHTML = "Archiv";
        let archiveLi = document.createElement("li");
        archiveLi.id = "Archiv";
        archiveLi.appendChild(archiveA);
        let rundspruecheUl = document.createElement("ul");
        rundspruecheUl.appendChild(latestLi);
        rundspruecheUl.appendChild(archiveLi);
        let forumA = document.createElement("a");
        forumA.href = "Blog.html";
        forumA.innerText = "Forum";
        let forumLi = document.createElement("li");
        forumLi.id = "Forum";
        forumLi.appendChild(forumA);
        let blogUl = document.createElement("ul");
        blogUl.classList.add("dropdown-content");
        blogUl.appendChild(rundspruecheLi);
        blogUl.appendChild(rundspruecheUl);
        blogUl.appendChild(forumLi);
        let blogDiv = document.createElement("div");
        blogDiv.classList.add("drop");
        blogDiv.appendChild(blogLi);
        blogDiv.appendChild(blogUl);
        //Navigation Certificates
        let certificatesA = document.createElement("a");
        certificatesA.classList.add("mI_Text");
        certificatesA.href = "Certificates.html";
        certificatesA.innerText = "Diplome";
        let certificatesLi = document.createElement("li");
        certificatesLi.classList.add("mainItem");
        certificatesLi.id = "Diplome";
        certificatesLi.appendChild(certificatesA);
        let insertA = document.createElement("a");
        insertA.href = "Certificates.html";
        insertA.innerText = "Diplombeilage";
        let insertLi = document.createElement("li");
        insertLi.id = "Diplombeilage";
        insertLi.appendChild(insertA);
        let certificatesUl = document.createElement("ul");
        certificatesUl.classList.add("dropdown-content");
        certificatesUl.appendChild(insertLi);
        let certificatesDiv = document.createElement("div");
        certificatesDiv.classList.add("drop");
        certificatesDiv.appendChild(certificatesLi);
        certificatesDiv.appendChild(certificatesUl);
        //Navigation Contests
        let contestsA = document.createElement("a");
        contestsA.classList.add("mI_Text");
        contestsA.href = "Contests.html";
        contestsA.innerText = "Contests";
        let contestsLi = document.createElement("li");
        contestsLi.classList.add("mainItem");
        contestsLi.id = "Contests";
        contestsLi.appendChild(contestsA);
        let resultsA = document.createElement("a");
        resultsA.href = "Contests.html";
        resultsA.innerText = "Ergebnisse";
        let resultsLi = document.createElement("li");
        resultsLi.id = "Ergebnisse";
        resultsLi.appendChild(resultsA);
        let contestsUl = document.createElement("ul");
        contestsUl.classList.add("dropdown-content");
        contestsUl.appendChild(resultsLi);
        let contestsDiv = document.createElement("div");
        contestsDiv.classList.add("drop");
        contestsDiv.appendChild(contestsLi);
        contestsDiv.appendChild(contestsUl);
        //Navigation Members
        let membersA = document.createElement("a");
        membersA.classList.add("mI_Text");
        membersA.href = "Members.html";
        membersA.innerText = "Mitglieder";
        let membersLi = document.createElement("li");
        membersLi.classList.add("mainItem");
        membersLi.id = "Mitglieder";
        membersLi.appendChild(membersA);
        let becomeA = document.createElement("a");
        becomeA.href = "Members.html";
        becomeA.innerText = "Mitglied werden?";
        let becomeLi = document.createElement("li");
        becomeLi.id = "DIGwerden";
        becomeLi.appendChild(becomeA);
        let memberListA = document.createElement("a");
        memberListA.href = "Members.html";
        memberListA.innerText = "Mitgliederliste";
        let memberListLi = document.createElement("li");
        memberListLi.id = "Mitgliederliste";
        memberListLi.appendChild(memberListA);
        let departmentsA = document.createElement("a");
        departmentsA.href = "Members.html";
        departmentsA.innerText = "Sektionen";
        let departmentsLi = document.createElement("li");
        departmentsLi.id = "Sektionen";
        departmentsLi.appendChild(departmentsA);
        let membersUl = document.createElement("ul");
        membersUl.classList.add("dropdown-content");
        membersUl.appendChild(becomeLi);
        membersUl.appendChild(memberListLi);
        membersUl.appendChild(departmentsLi);
        let membersDiv = document.createElement("div");
        membersDiv.classList.add("drop");
        membersDiv.appendChild(membersLi);
        membersDiv.appendChild(membersUl);
        //Navigation Downloads
        let downloadsA = document.createElement("a");
        downloadsA.classList.add("mI_Text");
        downloadsA.href = "Downloads.html";
        downloadsA.innerText = "Downloads";
        let downloadsLi = document.createElement("li");
        downloadsLi.classList.add("mainItem");
        downloadsLi.id = "Downloads";
        downloadsLi.appendChild(downloadsA);
        let dowRulesA = document.createElement("a");
        dowRulesA.href = "Downloads.html";
        dowRulesA.innerText = "Diplomausschreibungen";
        let dowRulesLi = document.createElement("li");
        dowRulesLi.id = "Dow_Ausschreibungen";
        dowRulesLi.appendChild(dowRulesA);
        let dowResultsA = document.createElement("a");
        dowResultsA.href = "Downloads.html";
        dowResultsA.innerText = "Contestergebnisse";
        let dowResultsLi = document.createElement("li");
        dowResultsLi.id = "Dow_Ergebnisse";
        dowResultsLi.appendChild(dowResultsA);
        let dowGCRA = document.createElement("a");
        dowGCRA.href = "Downloads.html";
        dowGCRA.innerText = "GCR-Liste";
        let dowGCRLi = document.createElement("li");
        dowGCRLi.id = "Dow_GCR";
        dowGCRLi.appendChild(dowGCRA);
        let dowMemberListA = document.createElement("a");
        dowMemberListA.href = "Downloads.html";
        dowMemberListA.innerText = "Mitgliederliste";
        let dowMemberListLi = document.createElement("li");
        dowMemberListLi.id = "Dow_Mitgliederliste";
        dowMemberListLi.appendChild(dowMemberListA);
        let downloadsUl = document.createElement("ul");
        downloadsUl.classList.add("dropdown-content");
        downloadsUl.classList.add("right");
        downloadsUl.appendChild(dowRulesLi);
        downloadsUl.appendChild(dowResultsLi);
        downloadsUl.appendChild(dowGCRLi);
        downloadsUl.appendChild(dowMemberListLi);
        let downloadsDiv = document.createElement("div");
        downloadsDiv.classList.add("drop");
        downloadsDiv.appendChild(downloadsLi);
        downloadsDiv.appendChild(downloadsUl);
        DIG_main.mainNavUl = document.createElement("ul");
        DIG_main.mainNavUl.appendChild(infosDiv);
        DIG_main.mainNavUl.appendChild(blogDiv);
        DIG_main.mainNavUl.appendChild(certificatesDiv);
        DIG_main.mainNavUl.appendChild(contestsDiv);
        DIG_main.mainNavUl.appendChild(membersDiv);
        DIG_main.mainNavUl.appendChild(downloadsDiv);
    }
    function addListenerForBurgerMenu() {
        let burgerMenuBtn = document.getElementById("menu");
        burgerMenuBtn.addEventListener("click", openBurgerMenu);
        overlay = document.querySelector(".overlay");
        overlay.addEventListener("click", closeBurgerMenu);
        underlay = document.querySelector(".underlay");
        underlay.addEventListener("click", closeBurgerMenu);
        search = document.getElementById("search");
        search.addEventListener("click", openSearchBar);
        underlay.addEventListener("click", closeSearchBar);
        searchBar = document.getElementById("searchDiv");
    }
    function openBurgerMenu() {
        if (openMenu == false) {
            overlay.style.width = "320px";
            underlay.style.width = "100%";
            openMenu = true;
        }
        else {
            console.log("error");
        }
    }
    function closeBurgerMenu() {
        if (openMenu == true) {
            overlay.style.width = "0%";
            underlay.style.width = "0%";
            openMenu = false;
        }
        else {
            console.log("error");
        }
    }
    function openSearchBar() {
        if (openSearch == false) {
            searchBar.style.height = "146px";
            underlay.style.width = "100%";
            openSearch = true;
        }
        else {
            console.log("error");
        }
    }
    function closeSearchBar() {
        if (openSearch == true) {
            searchBar.style.height = "0px";
            underlay.style.width = "0%";
            openSearch = false;
        }
        else {
            console.log("error");
        }
    }
    function addNavListeners() {
        let content = document.querySelector("#content");
        let subsiteName = content.classList[1];
        console.log(subsiteName);
        if (subsiteName == "home") {
            console.log(subsiteName);
        }
        else if (subsiteName == "infos") {
            console.log(subsiteName);
        }
        else if (subsiteName == "blog") {
            console.log(subsiteName);
        }
        else if (subsiteName == "certificates") {
            console.log(subsiteName);
        }
        else if (subsiteName == "contests") {
            console.log(subsiteName);
        }
        else if (subsiteName == "members") {
            console.log(subsiteName);
        }
        else if (subsiteName == "downloads") {
            console.log(subsiteName);
        }
        else {
            console.log("error");
        }
    }
})(DIG_main || (DIG_main = {}));
//# sourceMappingURL=script.js.map