namespace DIG_main {

    let flagDiv: HTMLDivElement;
    export let deFlag: HTMLImageElement;
    export let enFlag: HTMLImageElement;

    export function addHeader_Logo(): void {

        let logoImg: HTMLImageElement = document.createElement("img");
        logoImg.id = "logoSize";
        logoImg.src = "assets/DIG.png";

        let logoA: HTMLAnchorElement = document.createElement("a");
        logoA.href = "Home.html";

        let logoDiv: HTMLDivElement = document.createElement("div");
        logoDiv.classList.add("item1");
        logoDiv.id = "Logo";

        logoA.appendChild(logoImg);
        logoDiv.appendChild(logoA);
        header.appendChild(logoDiv);
    }

    export function addHeader_Icons(): void {

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


    export function addHeader_Language(_screenTypeShort: string): void {

        deFlag = document.createElement("img");
        deFlag.src = "assets/german.png";
        deFlag.alt = "DE";
        deFlag.classList.add("flag");
        deFlag.id = "DE_" + _screenTypeShort;
        deFlag.addEventListener("click", handleEvent);

        enFlag = document.createElement("img");
        enFlag.src = "assets/english.png";
        enFlag.alt = "EN";
        enFlag.classList.add("flag");
        enFlag.id = "EN_" + _screenTypeShort;
        enFlag.addEventListener("click", handleEvent);
        enFlag.style.filter = "grayscale(100%)";
        enFlag.style.webkitFilter = "grayscale(100%)";


        if (_screenTypeShort == "v") {

            flagDiv = document.createElement("div");
            flagDiv.id = "languageDiv";

            flagDiv.appendChild(deFlag);
            flagDiv.appendChild(enFlag);

        } else if (_screenTypeShort == "h") {

            let flagSpan: HTMLSpanElement = document.createElement("span");
            flagSpan.id = "language";

            flagDiv = document.createElement("div");
            flagDiv.classList.add("item2");

            flagSpan.appendChild(deFlag);
            flagSpan.appendChild(enFlag);
            flagDiv.appendChild(flagSpan);
            header.appendChild(flagDiv);
        }

    }

    export function addHeader_Search(): void {

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

    export function addHeader_Navigation(_data: Data): void {

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
        rundspruecheLi.id = "Rundsprueche";

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

    export function addHeader_mainNav(_screenType: string): void {

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