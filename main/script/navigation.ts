namespace DIG_main {

    export interface Listitem {
        name: string;
        element: string;
        class: string;
        id: string;
        href: string;
        text: string;
    }

    export interface Data {
        [category: string]: Listitem[];
    }

    export function generateContent(_data: Data): void {
        for (let category in _data) {
            let listitems: Listitem[] = _data[category];
            let group: HTMLElement | null = null;
            switch (category) {

                // case "":
                // a, href, text, class
                // break;
                // case "":
                // li, class, id
                // break;
                // case "":
                // a, href, text
                // break;
                // case "":
                // li, id
                // break;


                // case "eArtikel":
                //     group = createDatalist(listitems, category);
                //     break;


                default:
                    break;
            }

            let span: HTMLSpanElement | null = document.querySelector("span#" + category);
            if (span && group)              // wenn span und group definiert sind, bezogen auf null
                span.appendChild(group);
        }
    }



}