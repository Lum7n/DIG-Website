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

    export function addHeader_Navigation(_screenType: string): void {

        generateNav(data);

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