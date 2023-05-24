namespace DIG_main {

    export interface Listitem {
        element: string;
        class: string;
        id: string;
        href: string;
        text: string;
    }

    export interface Data {
        [category: string]: Listitem[];
    }

    export function generateNav(_data: Data): void {

        mainNavUl = document.createElement("ul");

        for (let category in _data) {
            let listitems: Listitem[] = _data[category];

            let navItem_Div: HTMLDivElement = document.createElement("div");
            navItem_Div.classList.add("drop");

            let mainA: HTMLAnchorElement = document.createElement("a");
            let navItem_mainLi: HTMLLIElement = document.createElement("li");

            let navItem_Ul: HTMLUListElement = document.createElement("ul");
            navItem_Ul.classList.add("dropdown-content");

            if (category == "Downloads")
                navItem_Ul.classList.add("right");

            let length: number = (listitems.length) - 1;
            let index: number = 0;

            let li_is_assigned: boolean = false;

            let otherLi: HTMLLIElement = document.createElement("li");
            let li_has_a: boolean = false;

            while (index <= length) {

                if (li_has_a == false) {
                    otherLi = document.createElement("li");
                }

                if (index == 0 || index == 1) {
                    if (index == 0) {

                        mainA.classList.add(listitems[0].class);
                        mainA.href = listitems[0].href;
                        mainA.innerText = listitems[0].text;

                    } else if (index == 1) {

                        navItem_mainLi.classList.add(listitems[1].class);
                        navItem_mainLi.id = listitems[1].id;

                    } else {
                        console.log("error")
                    }

                } else if (index > 1) {

                    if (listitems[index].element == "a") {

                        let otherA: HTMLAnchorElement = document.createElement("a");
                        otherA.href = listitems[index].href;
                        otherA.innerText = listitems[index].text;
                        otherLi.appendChild(otherA);

                        li_has_a = true;

                    } else if (listitems[index].element == "li") {

                        otherLi.id = listitems[index].id;

                        li_is_assigned = true;

                    } else {
                        console.log("error" + index)
                    }

                    if (li_is_assigned == true) {
                        navItem_Ul.appendChild(otherLi);
                        li_is_assigned = false;
                        li_has_a = false;
                    }
                }
                index++;
            }

            navItem_mainLi.appendChild(mainA);
            navItem_Div.appendChild(navItem_mainLi);

            navItem_Div.appendChild(navItem_Ul);

            mainNavUl.appendChild(navItem_Div);
            // console.log(navItem_Div);

        }
    }
}