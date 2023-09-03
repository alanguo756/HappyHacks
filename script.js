const medicationInput = document.getElementById("medicationInput");
const medicationList = document.getElementById("medicationList");

function addMedication() {
    const medicationName = medicationInput.value.trim();
    if (medicationName !== "") {
        const li = document.createElement("li");
        li.textContent = medicationName;
        
        const takenButton = document.createElement("button");
        takenButton.textContent = "Mark as Taken";
        takenButton.onclick = () => {
            markAsTaken(li);
        };
        
        li.appendChild(takenButton);
        medicationList.appendChild(li);
        medicationInput.value = "";
    }
}

function markAsTaken(li) {
    const timeTaken = prompt("Enter the time taken (e.g., 10:00 AM):");
    if (timeTaken !== null) {
        const takenText = document.createElement("span");
        takenText.textContent = ` (Taken at ${timeTaken})`;
        li.appendChild(takenText);
    }
}

function resetList() {
    medicationList.innerHTML = "";
}
