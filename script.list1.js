// script.js
function slist(target) {
    //const theList = document.getElementById(target);
    const items = document.getElementsByClassName("choice");
    let current = null;

    for (const item of items) {
        item.draggable = true;

        item.ondragstart = (e) => {
            current = item;
            for (const it of items) {
                if (it !== current) {
                    it.classList.add("hint");
                }
            }
        };

        item.ondragenter = (e) => {
            if (item !== current) {
                item.classList.add("active");
            }
        };

        item.ondragleave = () => item.classList.remove("active");

        item.ondragend = () => {
            for (const it of items) {
                it.classList.remove("hint");
                it.classList.remove("active");
            }
        };

        item.ondragover = (e) => e.preventDefault();

        item.ondrop = (e) => {
            e.preventDefault();
            if (item !== current) {
                const currentPos = Array.from(items).indexOf(current);
                const droppedPos = Array.from(items).indexOf(item);
                if (currentPos < droppedPos) {
                    item.parentNode.insertBefore(current, item.nextSibling);
                } else {
                    item.parentNode.insertBefore(current, item);
                }
            }
        };
    }
}

slist("sortlist");
