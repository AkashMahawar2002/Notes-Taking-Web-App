document.addEventListener("DOMContentLoaded", () => {
    const noteText = document.getElementById("note-text");
    const addNoteButton = document.getElementById("add-note");
    const notesList = document.getElementById("notes-list");
    const allDeleteButton = document.getElementById("alldeletebutton");

    const createNoteElement = (text, pinned = false) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        if (pinned) {
            noteDiv.classList.add("pinned");
        }

        const noteP = document.createElement("p");
        noteP.textContent = text;

        const noteButtonsDiv = document.createElement("div");
        noteButtonsDiv.className = "note-buttons";

        const pinButton = document.createElement("button");
        pinButton.className = "pin";
        pinButton.textContent = "Pin";
        pinButton.addEventListener("click", () => {
            noteDiv.classList.toggle("pinned");
            notesList.prepend(noteDiv);
        });

        const editButton = document.createElement("button");
        editButton.className = "edit";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            const newText = prompt("Edit your note:", text);
            if (newText) {
                noteP.textContent = newText;
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            notesList.removeChild(noteDiv);
        });

        noteButtonsDiv.appendChild(pinButton);
        noteButtonsDiv.appendChild(editButton);
        noteButtonsDiv.appendChild(deleteButton);

        noteDiv.appendChild(noteP);
        noteDiv.appendChild(noteButtonsDiv);

        return noteDiv;
    };

    addNoteButton.addEventListener("click", () => {
        const text = noteText.value.trim();
        if (text) {
            const noteElement = createNoteElement(text);
            notesList.appendChild(noteElement);
            noteText.value = "";
        }
    });

    allDeleteButton.addEventListener("click", () => {
        notesList.innerHTML = "";
    });
});
