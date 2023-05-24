namespace DIG_main {

    export interface Listitem {
        element: string;
        class: string;
        id: string;
        href: string;
        textDE: string;
        textEN: string;
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

            let navItem_rundspruecheUl: HTMLUListElement = document.createElement("ul");

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
                        mainA.innerText = listitems[0].textDE;

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
                        otherA.innerText = listitems[index].textDE;
                        otherLi.appendChild(otherA);

                        li_has_a = true;

                    } else if (listitems[index].element == "li") {

                        otherLi.id = listitems[index].id;

                        li_is_assigned = true;

                    } else {
                        console.log("error" + index)
                    }

                    if (li_is_assigned == true) {

                        if (otherLi.id == "Aktuell") {

                            navItem_rundspruecheUl.appendChild(otherLi);

                        } else if (otherLi.id == "Archiv") {

                            navItem_rundspruecheUl.appendChild(otherLi);
                            navItem_Ul.appendChild(navItem_rundspruecheUl);

                        } else {

                            navItem_Ul.appendChild(otherLi);
                            // console.log(navItem_Ul);
                        }
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

// //Navigation Blog
// let blogA: HTMLAnchorElement = document.createElement("a");
// blogA.classList.add("mI_Text");
// blogA.href = "Blog.html";
// blogA.innerText = "Blog";

// let blogLi: HTMLLIElement = document.createElement("li");
// blogLi.classList.add("mainItem");
// blogLi.id = "Blog";

// blogLi.appendChild(blogA);

// let rundspruecheA: HTMLAnchorElement = document.createElement("a");
// rundspruecheA.href = "Blog.html";
// rundspruecheA.innerText = "Rundsprüche";

// let rundspruecheLi: HTMLLIElement = document.createElement("li");
// rundspruecheLi.id = "Rundsprueche";

// rundspruecheLi.appendChild(rundspruecheA);

// let latestA: HTMLAnchorElement = document.createElement("a");
// latestA.href = "Blog.html";
// latestA.innerText = "Aktuell";

// let latestLi: HTMLLIElement = document.createElement("li");
// latestLi.id = "Aktuell";

// latestLi.appendChild(latestA);

// let archiveA: HTMLAnchorElement = document.createElement("a");
// archiveA.href = "Blog.html";
// archiveA.innerHTML = "Archiv";

// let archiveLi: HTMLLIElement = document.createElement("li");
// archiveLi.id = "Archiv";

// archiveLi.appendChild(archiveA);

// let rundspruecheUl: HTMLUListElement = document.createElement("ul");

// rundspruecheUl.appendChild(latestLi);
// rundspruecheUl.appendChild(archiveLi);

// let forumA: HTMLAnchorElement = document.createElement("a");
// forumA.href = "Blog.html";
// forumA.innerText = "Forum";

// let forumLi: HTMLLIElement = document.createElement("li");
// forumLi.id = "Forum";

// forumLi.appendChild(forumA);

// let blogUl: HTMLUListElement = document.createElement("ul");
// blogUl.classList.add("dropdown-content");

// blogUl.appendChild(rundspruecheLi);
// blogUl.appendChild(rundspruecheUl);
// blogUl.appendChild(forumLi);

// let blogDiv: HTMLDivElement = document.createElement("div");
// blogDiv.classList.add("drop");

// blogDiv.appendChild(blogLi);
// blogDiv.appendChild(blogUl);