const lists = document.querySelectorAll(".list");
const items = document.querySelectorAll(".list-item");

let draggedItem = null;

for(let i = 0; i < items.length; i++) {
    let item = items[i];

    item.addEventListener("dragstart", e => {
        setTimeout(() => {
            item.style.display = "none";
        }, 0);
        draggedItem = item;
    });

    item.addEventListener("dragend", e => {
        draggedItem.style.display = "block";
        setTimeout(() => {
            draggedItem = null;
        }, 0);
    });
}

for(let j = 0; j < lists.length; j++) {
    let list = lists[j];

    list.addEventListener("dragover", e => {
        e.preventDefault();
    });

    list.addEventListener("dragenter", e => {
        list.style.backgroundColor = "#009999";
    });

    list.addEventListener("dragleave", e => {
        list.style.backgroundColor = "#00bbbb";
    });

    list.addEventListener("drop", e => {
        list.append(draggedItem);
        list.style.backgroundColor = "#00bbbb";
    });
}