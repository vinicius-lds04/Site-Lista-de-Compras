const form = document.querySelector(".menu");
const input = document.querySelector("#item-input");
const list = document.querySelector(".shopping-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const itemText = input.value.trim();

    if (itemText === "") {
        return;
    }

    const item = document.createElement("li");
    item.classList.add("item-list");

    const label = document.createElement("label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("selection-box");

    const itemName = document.createElement("span");
    itemName.classList.add("item-name");
    itemName.textContent = itemText;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", "Remover item");

    const trashIcon = document.createElement("img");
    trashIcon.classList.add("icon");
    trashIcon.src = "./assets/trash-can.svg";
    trashIcon.alt = "";

    label.append(checkbox, itemName);
    removeButton.appendChild(trashIcon);

    item.append(label, removeButton);

    list.appendChild(item);    

    input.value = "";
});
