namespace DIG_main {

    window.addEventListener("load", handleLoad);

    let screenType: string;
    let screenWidth: number = screen.width;

    export let mainNavUl: HTMLUListElement;

    let openMenu: boolean = false;
    let overlay: HTMLDivElement;
    let underlay: HTMLDivElement;

    let openSearch: boolean = false;
    let search: HTMLSpanElement;
    let searchBar: HTMLDivElement;

    export let header: HTMLElement;

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

        addNavListeners();

    }

    function screenOrientation(): void {

        screenWidth = screen.width;
        let screenHeight: number = screen.height;
        // console.log("Width: ", screenWidth);
        // console.log("Height: ", screenHeight);

        if (screenWidth < screenHeight) {

            screenType = "vertical";

            addStylesheet("style/style_vertical.css");
            addContentToHeader(screenType);
            matchWidth(screenWidth);
            addListenerForBurgerMenu();

        } else if (screenWidth > screenHeight) {

            screenType = "horizontal";

            addStylesheet("style/style_horizontal.css");
            addContentToHeader(screenType);

        } else {
            console.log("error");
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

    function addContentToHeader(_screenType: string): void {

        header = <HTMLElement>document.querySelector("header");

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
            console.log("horizontal");
        }

        //Navigation
        navigationUl();

        //main_NavElement + Stripe
        addHeader_mainNav(_screenType);

    }

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

        if (openMenu == false) {

            overlay.style.width = "320px";
            underlay.style.width = "100%";

            openMenu = true;

        } else {
            console.log("error");
        }
    }

    function closeBurgerMenu(): void {

        if (openMenu == true) {

            overlay.style.width = "0%";
            underlay.style.width = "0%";

            openMenu = false;

        } else {
            console.log("error");
        }
    }

    function openSearchBar(): void {

        if (openSearch == false) {

            searchBar.style.height = "146px";
            underlay.style.width = "100%";

            openSearch = true;

        } else {
            console.log("error");
        }
    }

    function closeSearchBar(): void {

        if (openSearch == true) {

            searchBar.style.height = "0px";
            underlay.style.width = "0%";

            openSearch = false;

        } else {
            console.log("error");
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

            console.log("error");
        }
    }

}