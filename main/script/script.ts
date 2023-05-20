namespace DIG_main {

    window.addEventListener("load", handleLoad);

    export let data: Data;

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

    async function handleLoad(): Promise<void> {

        let response: Response = await fetch("script/navigation.json");
        let offer: string = await response.text();
        data = JSON.parse(offer);

        screenOrientation();
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
        addHeader_Navigation(data);

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