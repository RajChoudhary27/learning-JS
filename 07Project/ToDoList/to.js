console.log("To-Do List Project");


function toDoList() {
    const input = document.getElementById("input-box");
    const addBtn = document.getElementById("add-button");
    const listContainer = document.getElementById("list-container");

    addBtn.addEventListener("click", function () {
        if (input.value === "") {
            alert("You must write something!");
        } else {
            let li = document.createElement("li");
            li.innerText = input.value;

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";   // cross ❌
            span.onclick = function () {
                li.remove();
            };

            li.appendChild(span);
            listContainer.appendChild(li);
        }
        input.value = "";
    });
}

// function call
toDoList();
