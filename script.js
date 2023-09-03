const medicationNameInput = document.getElementById("medicationName");
const medicationDosageInput = document.getElementById("medicationDosage");
const medicationTimesPerWeekInput = document.getElementById("medicationTimesPerWeek");
const medicationList = document.getElementById("medicationList");

function addMedication() {
    const medicationName = medicationNameInput.value.trim();
    const dosage = medicationDosageInput.value.trim();
    const timesPerWeek = medicationTimesPerWeekInput.value.trim();

    if (medicationName !== "" && dosage !== "" && timesPerWeek !== "") {
        const li = document.createElement("li");
        li.textContent = `${medicationName} (Dosage: ${dosage}, Times Per Week: ${timesPerWeek})`;

        const takenButton = document.createElement("button");
        takenButton.textContent = "Mark as Taken";
        takenButton.onclick = () => {
            markAsTaken(li);
        };

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => {
            removeMedication(li);
        };

        li.appendChild(takenButton);
        li.appendChild(removeButton);
        medicationList.appendChild(li);
        
        // Clear input fields
        medicationNameInput.value = "";
        medicationDosageInput.value = "";
        medicationTimesPerWeekInput.value = "";
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

function removeMedication(li) {
    li.remove();
}

function resetList() {
    medicationList.innerHTML = "";
}