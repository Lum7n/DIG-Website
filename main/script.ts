namespace DIG_main {

    window.addEventListener("load", handleLoad);

    let openMenu: boolean = false;
    let overlay: HTMLDivElement;
    let underlay: HTMLDivElement;

    let openSearch: boolean = false;
    let search: HTMLSpanElement;
    let searchBar: HTMLDivElement;

    let screenType: string;

    let germanFlag: HTMLElement;
    let englishFlag: HTMLElement;

    let language: boolean = true;
    //true  = initial   = german
    //false             = english

    let infos: HTMLElement;
    let blog: HTMLElement;
    let certificates: HTMLElement;
    let contests: HTMLElement;
    let members: HTMLElement;
    let downloads: HTMLElement;

    function handleLoad(): void {

        sizeTest();

        let burgerMenuBtn: HTMLSpanElement = <HTMLSpanElement>document.getElementById("menu");
        burgerMenuBtn.addEventListener("click", openBurgerMenu);

        overlay = <HTMLDivElement>document.querySelector(".overlay");
        overlay.addEventListener("click", closeBurgerMenu);
        underlay = <HTMLDivElement>document.querySelector(".underlay");
        underlay.addEventListener("click", closeBurgerMenu);

        flagSet();

        search = <HTMLSpanElement>document.getElementById("search");
        search.addEventListener("click", openSearchBar);
        underlay.addEventListener("click", closeSearchBar);
        searchBar = <HTMLDivElement>document.getElementById("searchDiv");

        addNavListeners();

    }

    function sizeTest(): void {

        let screenWidth: number = screen.width;
        let screenHeight: number = screen.height;

        console.log("Width: ", screenWidth);
        console.log("Height: ", screenHeight);

        if (screenWidth < screenHeight) {
            // console.log("vertical");
            screenType = "vertical";

            addStylesheet("style_vertical.css");
            matchWidth(screenWidth);

        } else if (screenWidth > screenHeight) {
            // console.log("horizontal");
            screenType = "horizontal";

            addStylesheet("style_horizontal.css");

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
            inputSearch[1].style.width = screenWidth * 0.6 + "px";
            // inputSearch[2].style.width = screenWidth * 0.6 + "px";

        }

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

        let targetSpan: EventTarget = <EventTarget>_event.target;
        let targetID: string = targetSpan.alt;
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

    function aktiv(item: string): void {

        let aktiv: HTMLElement = <HTMLElement>document.getElementById("aktiv");
        if (aktiv != null) {
            aktiv.id = "";
        }
        
        switch (item) {
            case "Infos":

                console.log("I");

                let childofInfos: HTMLElement = <HTMLElement>infos.firstElementChild;
                childofInfos.id = "aktiv";

                break;
            case "Blog":

                console.log("B");

                let childofBlog: HTMLElement = <HTMLElement>blog.firstElementChild;
                childofBlog.id = "aktiv";

                break;
            case "Certificates":

                console.log("Cer");

                let childofCertificates: HTMLElement = <HTMLElement>certificates.firstElementChild;
                childofCertificates.id = "aktiv";

                break;
            case "Contests":

                console.log("Con");

                let childofContests: HTMLElement = <HTMLElement>contests.firstElementChild;
                childofContests.id = "aktiv";

                break;
            case "Members":

                console.log("Mem");

                let childofMembers: HTMLElement = <HTMLElement>members.firstElementChild;
                childofMembers.id = "aktiv";

                break;
            case "Downloads":

                console.log("D");

                let childofDownloads: HTMLElement = <HTMLElement>downloads.firstElementChild;
                childofDownloads.id = "aktiv";

                break;
            default:
                break;
        }

    }

    function addNavListeners(): void {

        //Infos
        infos = <HTMLElement>document.getElementById("Infos");
        infos.addEventListener("click", switchToInfos);

        let history: HTMLElement = <HTMLElement>document.getElementById("Geschichte");
        history.addEventListener("click", switchToInfos);

        let contacts: HTMLElement = <HTMLElement>document.getElementById("Ansprechpartner");
        contacts.addEventListener("click", switchToInfos);

        let dates: HTMLElement = <HTMLElement>document.getElementById("Termine");
        dates.addEventListener("click", switchToInfos);

        let requirements: HTMLElement = <HTMLElement>document.getElementById("Anforderungen");
        requirements.addEventListener("click", switchToInfos);

        //Blog
        blog = <HTMLElement>document.getElementById("Blog");
        blog.addEventListener("click", switchToBlog);

        let rundsprueche: HTMLElement = <HTMLElement>document.getElementById("Rundspruche");
        rundsprueche.addEventListener("click", switchToBlog);

        let latest: HTMLElement = <HTMLElement>document.getElementById("Aktuell");
        latest.addEventListener("click", switchToBlog);

        let archive: HTMLElement = <HTMLElement>document.getElementById("Archiv");
        archive.addEventListener("click", switchToBlog);

        let forum: HTMLElement = <HTMLElement>document.getElementById("Forum");
        forum.addEventListener("click", switchToBlog);

        //Diplome
        certificates = <HTMLElement>document.getElementById("Diplome");
        certificates.addEventListener("click", switchToCertificates);

        let insert: HTMLElement = <HTMLElement>document.getElementById("Diplombeilage");
        insert.addEventListener("click", switchToCertificates);

        //Contests
        contests = <HTMLElement>document.getElementById("Contests");
        contests.addEventListener("click", switchToContests);

        let results: HTMLElement = <HTMLElement>document.getElementById("Ergebnisse");
        results.addEventListener("click", switchToContests);

        //Mitglieder
        members = <HTMLElement>document.getElementById("Mitglieder");
        members.addEventListener("click", switchToMembers);

        let become: HTMLElement = <HTMLElement>document.getElementById("DIGwerden");
        become.addEventListener("click", switchToMembers);

        let memberList: HTMLElement = <HTMLElement>document.getElementById("Mitgliederliste");
        memberList.addEventListener("click", switchToMembers);

        let departments: HTMLElement = <HTMLElement>document.getElementById("Sektionen");
        departments.addEventListener("click", switchToMembers);

        //Downloads
        downloads = <HTMLElement>document.getElementById("Downloads");
        downloads.addEventListener("click", switchToDownloads);

        let dowRules: HTMLElement = <HTMLElement>document.getElementById("Dow_Ausschreibungen");
        dowRules.addEventListener("click", switchToDownloads);

        let dowResults: HTMLElement = <HTMLElement>document.getElementById("Dow_Ergebnisse");
        dowResults.addEventListener("click", switchToDownloads);

        let dowGCR: HTMLElement = <HTMLElement>document.getElementById("Dow_GCR");
        dowGCR.addEventListener("click", switchToDownloads);

        let dowMemberList: HTMLElement = <HTMLElement>document.getElementById("Dow_Mitgliederliste");
        dowMemberList.addEventListener("click", switchToDownloads);

    }

    function switchToInfos(_event: Event): void {

        let target: EventTarget = <EventTarget>_event.target;
        let targetElement: HTMLElement = <HTMLElement>target;
        let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        let targetID: string = parentElement.id;

        console.log(targetElement);
        console.log("parent: ", parentElement);
        console.log(targetID);

        aktiv("Infos");
    }

    function switchToBlog(_event: Event): void {

        let target: EventTarget = <EventTarget>_event.target;
        let targetElement: HTMLElement = <HTMLElement>target;
        let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        let targetID: string = parentElement.id;

        console.log(targetElement);
        console.log("parent: ", parentElement);
        console.log(targetID);

        aktiv("Blog");

    }

    function switchToCertificates(_event: Event): void {

        let target: EventTarget = <EventTarget>_event.target;
        let targetElement: HTMLElement = <HTMLElement>target;
        let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        let targetID: string = parentElement.id;

        console.log(targetElement);
        console.log("parent: ", parentElement);
        console.log(targetID);

        aktiv("Certificates");

    }

    function switchToContests(_event: Event): void {

        let target: EventTarget = <EventTarget>_event.target;
        let targetElement: HTMLElement = <HTMLElement>target;
        let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        let targetID: string = parentElement.id;

        console.log(targetElement);
        console.log("parent: ", parentElement);
        console.log(targetID);

        aktiv("Contests");

    }

    function switchToMembers(_event: Event): void {

        let target: EventTarget = <EventTarget>_event.target;
        let targetElement: HTMLElement = <HTMLElement>target;
        let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        let targetID: string = parentElement.id;

        console.log(targetElement);
        console.log("parent: ", parentElement);
        console.log(targetID);

        aktiv("Members");

    }

    function switchToDownloads(_event: Event): void {

        let target: EventTarget = <EventTarget>_event.target;
        let targetElement: HTMLElement = <HTMLElement>target;
        let parentElement: HTMLElement = <HTMLElement>targetElement.parentElement;
        let targetID: string = parentElement.id;

        console.log(targetElement);
        console.log("parent: ", parentElement);
        console.log(targetID);

        aktiv("Downloads");


    }
}