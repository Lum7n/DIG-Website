"use strict";
var DIG_main;
(function (DIG_main) {
    function generateNav(_data) {
        DIG_main.mainNavUl = document.createElement("ul");
        for (let category in _data) {
            let navItems = _data[category];
            let navItem_Div = document.createElement("div");
            navItem_Div.classList.add("drop");
            let mainA = document.createElement("a");
            let navItem_mainLi = document.createElement("li");
            let navItem_Ul = document.createElement("ul");
            navItem_Ul.classList.add("dropdown-content");
            if (category == "Downloads")
                navItem_Ul.classList.add("right");
            let navItem_rundspruecheUl = document.createElement("ul");
            let length = (navItems.length) - 1;
            let index = 0;
            let li_is_assigned = false;
            let otherLi = document.createElement("li");
            let li_has_a = false;
            while (index <= length) {
                if (li_has_a == false) {
                    otherLi = document.createElement("li");
                }
                if (index == 0 || index == 1) {
                    if (index == 0) {
                        mainA.classList.add(navItems[0].class);
                        mainA.classList.add("languageText");
                        if (DIG_main.layer == 1) {
                            mainA.href = navItems[0].href;
                        }
                        else if (DIG_main.layer != 1) {
                            mainA.href = DIG_main.srcAddNav + (navItems[0].href);
                        }
                        else {
                            console.log("error");
                        }
                        mainA.innerText = navItems[0].textDE;
                    }
                    else if (index == 1) {
                        navItem_mainLi.classList.add(navItems[1].class);
                        navItem_mainLi.id = navItems[1].id;
                    }
                    else {
                        console.log("error");
                    }
                }
                else if (index > 1) {
                    if (navItems[index].element == "a") {
                        let otherA = document.createElement("a");
                        otherA.classList.add("languageText");
                        otherA.href = DIG_main.srcAddNav + navItems[index].href;
                        // if (layer == 1) {
                        //     otherA.href = srcAddNav + navItems[index].href;
                        // } else if (layer != 1) {
                        //     otherA.href = srcAddNav + navItems[index].href;
                        // } else {
                        //     console.log("error");
                        // }
                        otherA.innerText = navItems[index].textDE;
                        if (navItems[index].textDE == "GCR-Liste") {
                            otherA.target = "_blank";
                        }
                        otherLi.appendChild(otherA);
                        li_has_a = true;
                    }
                    else if (navItems[index].element == "li") {
                        otherLi.id = navItems[index].id;
                        li_is_assigned = true;
                    }
                    else {
                        console.log("error" + index);
                    }
                    if (li_is_assigned == true) {
                        if (otherLi.id == "Aktuell") {
                            navItem_rundspruecheUl.appendChild(otherLi);
                        }
                        else if (otherLi.id == "Archiv") {
                            navItem_rundspruecheUl.appendChild(otherLi);
                            navItem_Ul.appendChild(navItem_rundspruecheUl);
                        }
                        else {
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
            DIG_main.mainNavUl.appendChild(navItem_Div);
            // console.log(navItem_Div);
        }
    }
    DIG_main.generateNav = generateNav;
})(DIG_main || (DIG_main = {}));
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
//# sourceMappingURL=navigation.js.map