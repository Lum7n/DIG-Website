namespace DIG_main {

    window.addEventListener("load", handleLoad);

    let screenType: string;
    let screenWidth: number = screen.width;

    let mainNavUl: HTMLUListElement;

    let openMenu: boolean = false;
    let overlay: HTMLDivElement;
    let underlay: HTMLDivElement;

    let openSearch: boolean = false;
    let search: HTMLSpanElement;
    let searchBar: HTMLDivElement;

    let germanFlag: HTMLElement;
    let englishFlag: HTMLElement;

    let language: boolean = true;
    //true  = initial   = german
    //false             = english

    let header: HTMLElement;
    let flagDiv: HTMLDivElement;

    // let logo: HTMLElement;
    // let infos: HTMLElement;
    // let blog: HTMLElement;
    // let certificates: HTMLElement;
    // let contests: HTMLElement;
    // let members: HTMLElement;
    // let downloads: HTMLElement;

    // let contentSection: HTMLElement;


    function handleLoad(): void {

        screenOrientation();

        // window.addEventListener("resize", rematchWidth)

        flagSet();

        addNavListeners();

    }

    function screenOrientation(): void {

        screenWidth = screen.width;
        let screenHeight: number = screen.height;
        // console.log("Width: ", screenWidth);
        // console.log("Height: ", screenHeight);

        if (screenWidth < screenHeight) {

            screenType = "vertical";

            addStylesheet("style_vertical.css");
            addContentToHeader(screenType);
            matchWidth(screenWidth);
            addListenerForBurgerMenu();

        } else if (screenWidth > screenHeight) {

            screenType = "horizontal";

            addStylesheet("style_horizontal.css");
            addContentToHeader(screenType);

        } else {
            console.log("fehler");
        }
    }

    function addStylesheet(fileName: string): void {

        let head: HTMLHeadElement = document.head;
        let link: HTMLLinkElement = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = fileName;

        head.appendChild(link);
    }

    // function rematchWidth(): void {
    //     console.log(screenWidth);
    //     matchWidth(screenWidth);
    // }

    function matchWidth(screenWidth: number): void {

        if (screenWidth < 400) {

            let bodyWidth: number = screenWidth - 20;
            // console.log("body: ", bodyWidth);

            let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
            body.style.width = bodyWidth + "px";

        } else {

            let wholeMarginWidth: number = screenWidth * 0.1;
            let bodyWidth: number = screenWidth - wholeMarginWidth;
            // console.log("body: ", bodyWidth);

            let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
            body.style.width = bodyWidth + "px";
            body.style.marginLeft = (wholeMarginWidth / 2) + "px";

            let marginLogo: HTMLElement = <HTMLElement>document.getElementById("logoSize");
            marginLogo.style.marginLeft = (wholeMarginWidth / 4) + "px";

            let marginStripe: HTMLElement = <HTMLElement>document.getElementById("stripe");
            marginStripe.style.marginRight = "-" + (wholeMarginWidth / 2 - 1) + "px";

            let inputSearch: HTMLCollectionOf<HTMLInputElement> = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName("inputSearch");
            inputSearch[0].style.width = screenWidth * 0.6 + "px";

        }

    }

    function addContentToHeader(_screenType: string): void {

        header = <HTMLElement>document.querySelector("header");
        console.log(header);

        let screenTypeShort: string = _screenType.slice(0, 1);

        //Logo
        addHeader_Logo();

        //Language
        addHeader_Language(screenTypeShort);

        //Search
        addHeader_Search();

        if (_screenType == "vertical") {

            //Icons
            addHeader_Icons();

            //underlay for navigation
            let underlayDiv: HTMLDivElement = document.createElement("div");
            underlayDiv.classList.add("underlay");
            header.appendChild(underlayDiv);

        } else {

            console.log("fehler");
        }

        //Navigation
        navigationUl();

        //main_NavElement + Stripe
        addHeader_mainNav(_screenType);

    }

    function navigationUl(): void {

        //Navigation Infos
        let infosA: HTMLAnchorElement = document.createElement("a");
        infosA.classList.add("mI_Text");
        infosA.href = "Infos.html";
        infosA.innerText = "Infos";

        let infosLi: HTMLLIElement = document.createElement("li");
        infosLi.classList.add("mainItem");
        infosLi.id = "Infos";

        infosLi.appendChild(infosA);

        let historyA: HTMLAnchorElement = document.createElement("a");
        historyA.href = "Infos.html";
        historyA.innerText = "Geschichte der DIG";

        let historyLi: HTMLLIElement = document.createElement("li");
        historyLi.id = "Geschichte";

        historyLi.appendChild(historyA);

        let contactsA: HTMLAnchorElement = document.createElement("a");
        contactsA.href = "Infos.html";
        contactsA.innerText = "Ansprechpartner";

        let contactsLi: HTMLLIElement = document.createElement("li");
        contactsLi.id = "Ansprechpartner";

        contactsLi.appendChild(contactsA);

        let datesA: HTMLAnchorElement = document.createElement("a");
        datesA.href = "Infos.html";
        datesA.innerText = "Termine";

        let datesLi: HTMLLIElement = document.createElement("li");
        datesLi.id = "Termine";

        datesLi.appendChild(datesA);

        let requirementsA: HTMLAnchorElement = document.createElement("a");
        requirementsA.href = "Infos.html";
        requirementsA.innerText = "Anforderungen";

        let requirementsLi: HTMLLIElement = document.createElement("li");
        requirementsLi.id = "Anforderungen";

        requirementsLi.appendChild(requirementsA);

        let infosUl: HTMLUListElement = document.createElement("ul");
        infosUl.classList.add("dropdown-content");

        infosUl.appendChild(historyLi);
        infosUl.appendChild(contactsLi);
        infosUl.appendChild(datesLi);
        infosUl.appendChild(requirementsLi);

        let infosDiv: HTMLDivElement = document.createElement("div");
        infosDiv.classList.add("drop");

        infosDiv.appendChild(infosLi);
        infosDiv.appendChild(infosUl);

        //Navigation Blog
        let blogA: HTMLAnchorElement = document.createElement("a");
        blogA.classList.add("mI_Text");
        blogA.href = "Blog.html";
        blogA.innerText = "Blog";

        let blogLi: HTMLLIElement = document.createElement("li");
        blogLi.classList.add("mainItem");
        blogLi.id = "Blog";

        blogLi.appendChild(blogA);

        let rundspruecheA: HTMLAnchorElement = document.createElement("a");
        rundspruecheA.href = "Blog.html";
        rundspruecheA.innerText = "Rundsprüche";

        let rundspruecheLi: HTMLLIElement = document.createElement("li");
        rundspruecheLi.id = "Rundspruche";

        rundspruecheLi.appendChild(rundspruecheA);

        let latestA: HTMLAnchorElement = document.createElement("a");
        latestA.href = "Blog.html";
        latestA.innerText = "Aktuell";

        let latestLi: HTMLLIElement = document.createElement("li");
        latestLi.id = "Aktuell";

        latestLi.appendChild(latestA);

        let archiveA: HTMLAnchorElement = document.createElement("a");
        archiveA.href = "Blog.html";
        archiveA.innerHTML = "Archiv";

        let archiveLi: HTMLLIElement = document.createElement("li");
        archiveLi.id = "Archiv";

        archiveLi.appendChild(archiveA);

        let rundspruecheUl: HTMLUListElement = document.createElement("ul");

        rundspruecheUl.appendChild(latestLi);
        rundspruecheUl.appendChild(archiveLi);

        let forumA: HTMLAnchorElement = document.createElement("a");
        forumA.href = "Blog.html";
        forumA.innerText = "Forum";

        let forumLi: HTMLLIElement = document.createElement("li");
        forumLi.id = "Forum";

        forumLi.appendChild(forumA);

        let blogUl: HTMLUListElement = document.createElement("ul");
        blogUl.classList.add("dropdown-content");

        blogUl.appendChild(rundspruecheLi);
        blogUl.appendChild(rundspruecheUl);
        blogUl.appendChild(forumLi);

        let blogDiv: HTMLDivElement = document.createElement("div");
        blogDiv.classList.add("drop");

        blogDiv.appendChild(blogLi);
        blogDiv.appendChild(blogUl);

        //Navigation Certificates
        let certificatesA: HTMLAnchorElement = document.createElement("a");
        certificatesA.classList.add("mI_Text");
        certificatesA.href = "Certificates.html";
        certificatesA.innerText = "Diplome";

        let certificatesLi: HTMLLIElement = document.createElement("li");
        certificatesLi.classList.add("mainItem");
        certificatesLi.id = "Diplome";

        certificatesLi.appendChild(certificatesA);

        let insertA: HTMLAnchorElement = document.createElement("a");
        insertA.href = "Certificates.html";
        insertA.innerText = "Diplombeilage";

        let insertLi: HTMLLIElement = document.createElement("li");
        insertLi.id = "Diplombeilage";

        insertLi.appendChild(insertA);

        let certificatesUl: HTMLUListElement = document.createElement("ul");
        certificatesUl.classList.add("dropdown-content");

        certificatesUl.appendChild(insertLi);

        let certificatesDiv: HTMLDivElement = document.createElement("div");
        certificatesDiv.classList.add("drop");

        certificatesDiv.appendChild(certificatesLi);
        certificatesDiv.appendChild(certificatesUl);

        //Navigation Contests
        let contestsA: HTMLAnchorElement = document.createElement("a");
        contestsA.classList.add("mI_Text");
        contestsA.href = "Contests.html";
        contestsA.innerText = "Contests";

        let contestsLi: HTMLLIElement = document.createElement("li");
        contestsLi.classList.add("mainItem");
        contestsLi.id = "Contests";

        contestsLi.appendChild(contestsA);

        let resultsA: HTMLAnchorElement = document.createElement("a");
        resultsA.href = "Contests.html";
        resultsA.innerText = "Ergebnisse";

        let resultsLi: HTMLLIElement = document.createElement("li");
        resultsLi.id = "Ergebnisse";

        resultsLi.appendChild(resultsA);

        let contestsUl: HTMLUListElement = document.createElement("ul");
        contestsUl.classList.add("dropdown-content");

        contestsUl.appendChild(resultsLi);

        let contestsDiv: HTMLDivElement = document.createElement("div");
        contestsDiv.classList.add("drop");

        contestsDiv.appendChild(contestsLi);
        contestsDiv.appendChild(contestsUl);

        //Navigation Members
        let membersA: HTMLAnchorElement = document.createElement("a");
        membersA.classList.add("mI_Text");
        membersA.href = "Members.html";
        membersA.innerText = "Mitglieder";

        let membersLi: HTMLLIElement = document.createElement("li");
        membersLi.classList.add("mainItem");
        membersLi.id = "Mitglieder";

        membersLi.appendChild(membersA);

        let becomeA: HTMLAnchorElement = document.createElement("a");
        becomeA.href = "Members.html";
        becomeA.innerText = "Mitglied werden?";

        let becomeLi: HTMLLIElement = document.createElement("li");
        becomeLi.id = "DIGwerden";

        becomeLi.appendChild(becomeA);

        let memberListA: HTMLAnchorElement = document.createElement("a");
        memberListA.href = "Members.html";
        memberListA.innerText = "Mitgliederliste";

        let memberListLi: HTMLLIElement = document.createElement("li");
        memberListLi.id = "Mitgliederliste";

        memberListLi.appendChild(memberListA);

        let departmentsA: HTMLAnchorElement = document.createElement("a");
        departmentsA.href = "Members.html";
        departmentsA.innerText = "Sektionen";

        let departmentsLi: HTMLLIElement = document.createElement("li");
        departmentsLi.id = "Sektionen";

        departmentsLi.appendChild(departmentsA);

        let membersUl: HTMLUListElement = document.createElement("ul");
        membersUl.classList.add("dropdown-content");

        membersUl.appendChild(becomeLi);
        membersUl.appendChild(memberListLi);
        membersUl.appendChild(departmentsLi);

        let membersDiv: HTMLDivElement = document.createElement("div");
        membersDiv.classList.add("drop");

        membersDiv.appendChild(membersLi);
        membersDiv.appendChild(membersUl);

        //Navigation Downloads
        let downloadsA: HTMLAnchorElement = document.createElement("a");
        downloadsA.classList.add("mI_Text");
        downloadsA.href = "Downloads.html";
        downloadsA.innerText = "Downloads";

        let downloadsLi: HTMLLIElement = document.createElement("li");
        downloadsLi.classList.add("mainItem");
        downloadsLi.id = "Downloads";

        downloadsLi.appendChild(downloadsA);

        let dowRulesA: HTMLAnchorElement = document.createElement("a");
        dowRulesA.href = "Downloads.html";
        dowRulesA.innerText = "Diplomausschreibungen";

        let dowRulesLi: HTMLLIElement = document.createElement("li");
        dowRulesLi.id = "Dow_Ausschreibungen";

        dowRulesLi.appendChild(dowRulesA);

        let dowResultsA: HTMLAnchorElement = document.createElement("a");
        dowResultsA.href = "Downloads.html";
        dowResultsA.innerText = "Contestergebnisse";

        let dowResultsLi: HTMLLIElement = document.createElement("li");
        dowResultsLi.id = "Dow_Ergebnisse";

        dowResultsLi.appendChild(dowResultsA);

        let dowGCRA: HTMLAnchorElement = document.createElement("a");
        dowGCRA.href = "Downloads.html";
        dowGCRA.innerText = "GCR-Liste";

        let dowGCRLi: HTMLLIElement = document.createElement("li");
        dowGCRLi.id = "Dow_GCR";

        dowGCRLi.appendChild(dowGCRA);

        let dowMemberListA: HTMLAnchorElement = document.createElement("a");
        dowMemberListA.href = "Downloads.html";
        dowMemberListA.innerText = "Mitgliederliste";

        let dowMemberListLi: HTMLLIElement = document.createElement("li");
        dowMemberListLi.id = "Dow_Mitgliederliste";

        dowMemberListLi.appendChild(dowMemberListA);

        let downloadsUl: HTMLUListElement = document.createElement("ul");
        downloadsUl.classList.add("dropdown-content");
        downloadsUl.classList.add("right");

        downloadsUl.appendChild(dowRulesLi);
        downloadsUl.appendChild(dowResultsLi);
        downloadsUl.appendChild(dowGCRLi);
        downloadsUl.appendChild(dowMemberListLi);

        let downloadsDiv: HTMLDivElement = document.createElement("div");
        downloadsDiv.classList.add("drop");

        downloadsDiv.appendChild(downloadsLi);
        downloadsDiv.appendChild(downloadsUl);

        mainNavUl = document.createElement("ul");

        mainNavUl.appendChild(infosDiv);
        mainNavUl.appendChild(blogDiv);
        mainNavUl.appendChild(certificatesDiv);
        mainNavUl.appendChild(contestsDiv);
        mainNavUl.appendChild(membersDiv);
        mainNavUl.appendChild(downloadsDiv);

    }

    function addListenerForBurgerMenu(): void {

        let burgerMenuBtn: HTMLSpanElement = <HTMLSpanElement>document.getElementById("menu");
        burgerMenuBtn.addEventListener("click", openBurgerMenu);

        overlay = <HTMLDivElement>document.querySelector(".overlay");
        overlay.addEventListener("click", closeBurgerMenu);
        underlay = <HTMLDivElement>document.querySelector(".underlay");
        underlay.addEventListener("click", closeBurgerMenu);

        search = <HTMLSpanElement>document.getElementById("search");
        search.addEventListener("click", openSearchBar);
        underlay.addEventListener("click", closeSearchBar);
        searchBar = <HTMLDivElement>document.getElementById("searchDiv");

    }

    function openBurgerMenu(): void {

        // console.log("click");
        // console.log(open);

        if (openMenu == false) {

            overlay.style.width = "320px";
            underlay.style.width = "100%";

            openMenu = true;

        } else {

            console.log("fehler");
        }

    }

    function closeBurgerMenu(): void {

        // console.log("click");
        // console.log(open);

        if (openMenu == true) {

            overlay.style.width = "0%";
            underlay.style.width = "0%";

            openMenu = false;

        } else {

            console.log("fehler");
        }


    }

    function flagSet(): void {

        // console.log(screenType);

        if (screenType == "vertical") {

            console.log(screenType);

            germanFlag = <HTMLElement>document.getElementById("DE_v");
            germanFlag.addEventListener("click", changeLanguage);

            englishFlag = <HTMLElement>document.getElementById("EN_v");
            englishFlag.addEventListener("click", changeLanguage);

            englishFlag.style.filter = "grayscale(100%)";
            englishFlag.style.webkitFilter = "grayscale(100%)";

        } else if (screenType == "horizontal") {

            console.log(screenType);

            germanFlag = <HTMLElement>document.getElementById("DE_h");
            germanFlag.addEventListener("click", changeLanguage);

            englishFlag = <HTMLElement>document.getElementById("EN_h");
            englishFlag.addEventListener("click", changeLanguage);

            englishFlag.style.filter = "grayscale(100%)";
            englishFlag.style.webkitFilter = "grayscale(100%)";

        }

    }

    function changeLanguage(_event: Event): void {

        let target: EventTarget = <EventTarget>_event.target;
        let targetElement: HTMLImageElement = <HTMLImageElement>target;
        let targetID: string = targetElement.alt;
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

            } else {

                console.log("deutsch aktiv gewesen");
            }

        } else if (targetID == "EN") {

            // console.log("EN");

            if (language == true) {

                console.log("wechsel auf englisch");

                germanFlag.style.filter = "grayscale(100%)";
                germanFlag.style.webkitFilter = "grayscale(100%)";

                englishFlag.style.filter = "";
                englishFlag.style.webkitFilter = "";

                language = false;

            } else {

                console.log("englisch aktiv gewesen");
            }

        } else {

            console.log("fehler");
        }
    }

    function openSearchBar(): void {

        // console.log(openSearch);

        if (openSearch == false) {

            searchBar.style.height = "146px";
            underlay.style.width = "100%";

            openSearch = true;

        } else {

            console.log("fehler");
        }

    }

    function closeSearchBar(): void {

        // console.log(openSearch);

        if (openSearch == true) {

            searchBar.style.height = "0px";
            underlay.style.width = "0%";

            openSearch = false;

        } else {

            console.log("fehler");
        }

    }

    function addNavListeners(): void {

        let content: HTMLElement = <HTMLElement>document.querySelector("#content");
        let subsiteName: string = content.classList[1];
        console.log(subsiteName);

        if (subsiteName == "home") {

            console.log(subsiteName);

        } else if (subsiteName == "infos") {

            console.log(subsiteName);

        } else if (subsiteName == "blog") {

            console.log(subsiteName);

        } else if (subsiteName == "certificates") {

            console.log(subsiteName);

        } else if (subsiteName == "contests") {

            console.log(subsiteName);

        } else if (subsiteName == "members") {

            console.log(subsiteName);

        } else if (subsiteName == "downloads") {

            console.log(subsiteName);

        } else {

            console.log("fehler");
        }
    }

    function addHeader_Logo(): void {

        let logoImg: HTMLImageElement = document.createElement("img");
        logoImg.id = "logoSize";
        logoImg.src = "Assets/DIG.png";

        let logoA: HTMLAnchorElement = document.createElement("a");
        logoA.href = "Home.html";

        let logoDiv: HTMLDivElement = document.createElement("div");
        logoDiv.classList.add("item1");
        logoDiv.id = "Logo";

        logoA.appendChild(logoImg);
        logoDiv.appendChild(logoA);
        header.appendChild(logoDiv);
    }

    function addHeader_Icons(): void {

        let iconsSearchA: HTMLAnchorElement = document.createElement("a");
        iconsSearchA.classList.add("fa-solid");
        iconsSearchA.classList.add("fa-magnifying-glass");

        let iconsSearchSpan: HTMLSpanElement = document.createElement("span");
        iconsSearchSpan.id = "search";

        let iconsMenuA: HTMLAnchorElement = document.createElement("a");
        iconsMenuA.classList.add("fa-solid");
        iconsMenuA.classList.add("fa-bars");

        let iconsMenuSpan: HTMLSpanElement = document.createElement("span");
        iconsMenuSpan.id = "menu";

        let iconsDiv: HTMLDivElement = document.createElement("div");
        iconsDiv.classList.add("icons");

        iconsSearchSpan.appendChild(iconsSearchA);
        iconsMenuSpan.appendChild(iconsMenuA);
        iconsDiv.appendChild(iconsSearchSpan);
        iconsDiv.appendChild(iconsMenuSpan);
        header.appendChild(iconsDiv);
    }


    function addHeader_Language(_screenTypeShort: string): void {

        let deImg: HTMLImageElement = document.createElement("img");
        deImg.src = "Assets/german.png";
        deImg.alt = "DE";
        deImg.classList.add("flag");
        deImg.id = "DE_" + "h";

        let enImg: HTMLImageElement = document.createElement("img");
        enImg.src = "Assets/english.png";
        enImg.alt = "EN";
        enImg.classList.add("flag");
        enImg.id = "EN_" + "h";

        if (_screenTypeShort == "v") {

            flagDiv = document.createElement("div");
            flagDiv.id = "languageDiv";

            flagDiv.appendChild(deImg);
            flagDiv.appendChild(enImg);

        } else if (_screenTypeShort == "h") {

            let flagSpan: HTMLSpanElement = document.createElement("span");
            flagSpan.id = "language";

            flagDiv = document.createElement("div");
            flagDiv.classList.add("item2");

            flagSpan.appendChild(deImg);
            flagSpan.appendChild(enImg);
            flagDiv.appendChild(flagSpan);
            header.appendChild(flagDiv);
        }

    }

    function addHeader_Search(): void {

        let searchInput: HTMLInputElement = document.createElement("input");
        searchInput.type = "text";
        searchInput.name = "searchbar";
        searchInput.classList.add("inputSearch");

        let searchI: HTMLElement = document.createElement("i");
        searchI.classList.add("fa-solid");
        searchI.classList.add("fa-magnifying-glass");

        let searchSpan: HTMLSpanElement = document.createElement("span");
        searchSpan.classList.add("searchBar");

        let searchDiv: HTMLDivElement = document.createElement("div");
        searchDiv.classList.add("item3");

        searchSpan.appendChild(searchInput);
        searchSpan.appendChild(searchI);
        searchDiv.appendChild(searchSpan);
        header.appendChild(searchDiv);
    }

    function addHeader_mainNav(_screenType: string): void {

        //main_NavElement
        let nav: HTMLElement = document.createElement("nav");
        nav.id = "mainNav";
        nav.classList.add("item4");
        nav.classList.add("overlay");

        nav.appendChild(mainNavUl);

        if (_screenType == "vertical") {

            let smallStripeDiv: HTMLDivElement = document.createElement("div");
            smallStripeDiv.id = "stripeNav";

            nav.appendChild(smallStripeDiv);
            nav.appendChild(flagDiv);
            header.appendChild(nav);
        }

        header.appendChild(nav);

        //MainStripe
        let stripeDiv: HTMLDivElement = document.createElement("div");
        stripeDiv.id = "stripe";
        stripeDiv.classList.add("item5");

        header.appendChild(stripeDiv);
    }

}