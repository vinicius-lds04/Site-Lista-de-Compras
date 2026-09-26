const form = document.querySelector(".menu");
const input = document.querySelector("#item-input");
const list = document.querySelector(".shopping-list");
const alertElement = document.querySelector(".alert");
const closeButton = document.querySelector("#close-button");

function removeItem(button) {

    button.parentElement.remove();
    alertElement.classList.add("show");

}

function setupCheckbox(checkbox) {

    checkbox.addEventListener("change", function() {

        const item = checkbox.closest(".item-list");
        item.classList.toggle("completed");

    });
}

function setupRemoveButton(button) {

    button.addEventListener("click", function() {

        removeItem(this);

    });

}

const removeButtons = document.querySelectorAll(".item-list button");

removeButtons.forEach(function(button) {

    setupRemoveButton(button);

});

const checkboxes = document.querySelectorAll(".selection-box");

checkboxes.forEach(function(checkbox) {

    setupCheckbox(checkbox);

});

closeButton.addEventListener("click", function() {

    alertElement.classList.remove("show");

});

function createItem(itemText) {

    const item = document.createElement("li");

    item.classList.add("item-list");

    const label = document.createElement("label");

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.classList.add("selection-box");

    setupCheckbox(checkbox);

    const itemName = document.createElement("span");

    itemName.classList.add("item-name");

    itemName.textContent = itemText;

    const removeButton = document.createElement("button");

    removeButton.type = "button";

    removeButton.setAttribute("aria-label", "Remover item");

    setupRemoveButton(removeButton);

    const trashIcon = document.createElement("img");

    trashIcon.classList.add("icon");

    trashIcon.src = "./assets/trash-can.svg";

    trashIcon.alt = "";

    label.append(checkbox, itemName);

    removeButton.appendChild(trashIcon);

    item.append(label, removeButton);

    return item;
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const itemText = input.value.trim();

    if (itemText === "") {
        return;
    }

    const item = createItem(itemText);

    list.appendChild(item);

    input.value = "";

});