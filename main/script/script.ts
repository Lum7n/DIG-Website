namespace DIG_main {

    window.addEventListener("load", handleLoad);

    export let data: Data;
    export let languageData: LanguageData;

    export let layer: number;
    export let srcAdd: string = "";
    export let srcAddNav: string = "";

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

    let slideIndex: number = 1;

    async function handleLoad(): Promise<void> {

        getLayer();

        let responseNav: Response = await fetch(srcAdd + "script/navigation.json");
        let offerNav: string = await responseNav.text();
        data = JSON.parse(offerNav);

        let responseLanguage: Response = await fetch(srcAdd + "script/nav_language.json");
        let offerLanguage: string = await responseLanguage.text();
        languageData = JSON.parse(offerLanguage);

        getScreenOrientation();
        getBrowserInfos();
        addNavListeners();
        addContactInfo();

        //Slideshow
        showSlides(slideIndex);
        let slidecontrolPrev: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("prev");
        slidecontrolPrev.addEventListener("click", slideSub);
        let slidecontrolNext: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("next");
        slidecontrolNext.addEventListener("click", slideAdd);

        addAndchangeLinks();

    }

    function getLayer(): void {

        let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
        let layerString: string = <string>body.getAttribute("data-layer");
        layer = parseFloat(layerString);

        switch (layer) {

            // von 1/2/3 auf 0 geht noch nicht
            // von 0 auf 0 geht nicht
            case 0:
                srcAdd = "";
                srcAddNav = "html/";
                break
            case 1:
                srcAdd = "../";             //Elemente die von der aktuellen Seite aus, auf Ebene 0 liegen - scripts, json, Home.html, etc.
                srcAddNav = "";             //Elemente die von der aktuellen Seite aus, auf Ebene 1 liegen - alle 1. Unterseiten - Infos, Blog, Diplome, etc.
                break;
            case 2:
                srcAdd = "../../";
                srcAddNav = "../";
                break;
            case 3:
                srcAdd = "../../../";
                srcAddNav = "../../";
                break;
            case 4:
                srcAdd = "../../../../";
                srcAddNav = "../../../";
                break;
            default:
                break;
        }
        console.log(layer + srcAdd);
        console.log(srcAddNav);
    }

    function getScreenOrientation(): void {

        screenWidth = screen.width;
        let screenHeight: number = screen.height;
        // console.log("Width: ", screenWidth);
        // console.log("Height: ", screenHeight);

        if (screenWidth < screenHeight) {

            screenType = "vertical";

            addStylesheet(srcAdd + "style/style_vertical.css");
            addContentToHeader(screenType);
            matchWidth(screenWidth);
            addListenerForBurgerMenu();

        } else if (screenWidth > screenHeight) {

            screenType = "horizontal";

            addStylesheet(srcAdd + "style/style_horizontal.css");
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

        //Navigation + main_NavElement + Stripe
        addHeader_Navigation(_screenType);

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

    function getBrowserInfos(): void {

        if ((navigator.userAgent.indexOf("Firefox")) != -1) {
            console.log("der aktuelle Browser ist Firefox")

        } else {
            console.log("der aktuelle Browser ist nicht Firefox")
        }

    }

    function addNavListeners(): void {

        let content: HTMLElement = <HTMLElement>document.querySelector("#content");
        let subsiteName: string = content.classList[1];

        if (subsiteName == "home") {

            console.log(subsiteName);

        } else if (subsiteName == "infos") {

            console.log(subsiteName);

        } else if (subsiteName == "blog") {

            console.log(subsiteName);

        } else if (subsiteName == "awards") {

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

    function addContactInfo(): void {

        let contactFooter: HTMLDivElement = <HTMLDivElement>document.querySelector("footer");

        let contactDiv: HTMLDivElement = document.createElement("div");
        contactDiv.id = "contact";
        contactDiv.innerHTML = "Die <b>DIG - Diplom Interessen Gruppe -</b> ist ein Zusammenschluß von lizensierten Funkamateuren und SWLs die an Amateurfunk - Diplomen interessiert sind. Die DIG informiert über Diplome und die Bedingungen, die zur Verleihung erfüllt werden müssen. <br> Jeder, der die Aufnahmebedingungen erfüllt hat, kann Mitglied in dieser Gruppe werden. "
        let contactButton: HTMLSpanElement = document.createElement("span");
        contactButton.classList.add("btn");
        let contactButtonLink: HTMLAnchorElement = document.createElement("a");
        contactButtonLink.href = "../../assets/Missing.pdf",
            contactButtonLink.innerText = "Mitglied werden?";

        let contactLine: HTMLHRElement = document.createElement("hr");
        contactLine.classList.add("line");

        let contactB: HTMLElement = document.createElement("b");
        contactB.innerText = "Kontakt: DIG - Sekretär, DL0DIG";

        let contactParagraph: HTMLParagraphElement = document.createElement("p");
        contactParagraph.innerHTML = "Werner Theis, DH1PAL <br> Luxemburger Straße 59 <br> D-53881 Euskirchen <br> E-Mail: <a href='mailto:dh1pal@darc.de' target='_blank'>dh1pal@darc.de</a> <br> Tel.: 02251 / 71666 (kein Fax)"

        contactButton.appendChild(contactButtonLink);
        contactDiv.appendChild(contactButton);
        contactDiv.appendChild(contactLine);
        contactDiv.appendChild(contactB);
        contactDiv.appendChild(contactParagraph);

        contactFooter.appendChild(contactDiv);
    }

    // Slideshow

    function slideSub() {
        slideIndex--;
        showSlides(slideIndex);
    }

    function slideAdd() {
        slideIndex++;
        showSlides(slideIndex);
    }

    function showSlides(n: number) {
        let i: number;
        let slides: HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("mySlides");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(slideAdd, 4000); // Change image every 2 seconds
    }

    function addAndchangeLinks(): void {

        let latestProgram: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("latestProgram");
        console.log(latestProgram);
        if (latestProgram != null) {
            latestProgram.href = "../../assets/Awards/Dokuments/DIG-Diplomprogramm_2022_DE.pdf";
        }

        let linkGCR: HTMLAnchorElement = <HTMLAnchorElement>document.getElementById("linkGCR");
        console.log(latestProgram);
        if (latestProgram != null) {
            linkGCR.href = "../../assets/Awards/Dokuments/GCR-List.pdf";
        }

    }

}