// script.js
function slist(target) {
    // Set CSS class for the container
    target.classList.add("slist");

    // Get all list items
    let items = target.getElementsByTagName("li");
    let current = null;

    // Make items draggable and sortable
    for (let i of items) {
        // Attach draggable property
        i.draggable = true;

        // Drag start: Yellow highlight drop zones
        i.ondragstart = (e) => {
            current = i;
            for (let it of items) {
                if (it != current) {
                    it.classList.add("hint");
                }
            }
        };

        // Drag enter: Red highlight drop zone
        i.ondragenter = (e) => {
            if (i != current) {
                i.classList.add("active");
            }
        };

        // Drag leave: Remove red highlight
        i.ondragleave = () => i.classList.remove("active");

        // Drag end: Remove all highlights
        i.ondragend = () => {
            for (let it of items) {
                it.classList.remove("hint");
                it.classList.remove("active");
            }
        };

        // Drag over: Prevent the default "drop" behavior
        i.ondragover = (e) => e.preventDefault();

        // On drop: Reorder the items
        i.ondrop = (e) => {
            e.preventDefault();
            if (i != current) {
                let currentPos = 0;
                let droppedPos = 0;
                for (let it = 0; it < items.length; it++) {
                    if (current == items[it]) {
                        currentPos = it;
                    }
                    if (i == items[it]) {
                        droppedPos = it;
                    }
                }
                if (currentPos < droppedPos) {
                    i.parentNode.insertBefore(current, i.nextSibling);
                } else {
                    i.parentNode.insertBefore(current, i);
                }
            }
        };
    }
}

// Initialize the sortable list
slist(document.getElementById("sortlist"));
