// const characterButtons = document.querySelectorAll(".character-section ul button");
// const teamList = document.querySelector(".team-section ul");

// const teamCounter = document.querySelector("#team-counter span");
// const teamProgress = document.querySelector("progress");

// characterButtons.forEach( characterButton => {
//     characterButton.addEventListener("click", addCharacterToTeam);
//   });

// function addCharacterToTeam(event) {
//     const characterButton = event.Target;


//     const firstEmptySLot = teamList.querySelector("li:empty");
//     const characterImg = characterButton.querySelector("img");
//     const characterName = characterButton.alt;
//     const characterImgClone = characterImg.cloneNode();

//     const deleteButton = document.createElement("button")
//     deleteButton.ariaLabel = `verwijder ${characterName}`;
//     deleteButton.addEventListener('click', removeCharachterFromTeam)

//     deleteButton.addEventListener("click", deleteCharacterFromTeam );

//     firstEmptySLot.appendChild(characterImgClone);
//     firstEmptySLot.appendChild(deleteButton);

//     updateCounterAndProgress();

//     function deleteCharacterFromTeam(event){
//         const deleteButton = event.currentTarget;
//         const slot = deleteButton.closest("li");
//         const charachterImg = slot.querySelector("img")

//       deleteButton.remove();

//     }
//   }

//   function updateCounterAndProgress () {
//     progress.value = progress.value + 1;

//     const currentCount = teamCounter.textContent;
//     const newCount = currentCount -1;
//     teamCounter.textContent = newCount;
//   }

const characterButtons = document.querySelectorAll(".character-section ul button");
const teamList = document.querySelector(".team-section ul");

const teamCounter = document.querySelector("#team-counter span");
const progress = document.querySelector("progress");

characterButtons.forEach(characterButton => {
    characterButton.addEventListener("click", addCharacterToTeam);
});


function addCharacterToTeam(event) {
    const firstEmptySLot = teamList.querySelector("li:empty");

    const characterButton = event.currentTarget;
    const characterImg = characterButton.querySelector("img");
    const characterName = characterImg.alt;
    const characterImgClone = characterImg.cloneNode();

    const deleteButton = document.createElement("button");
    deleteButton.ariaLabel = `verwijder ${characterName}`;
    deleteButton.addEventListener("click", deleteCharacterFromTeam);

    firstEmptySLot.appendChild(characterImgClone);
    firstEmptySLot.appendChild(deleteButton);

    updateCounterAndProgress(1);

    checkInteractivityChrachterList();

    checkCompletenessTeam();
}

function deleteCharacterFromTeam(event) {
    const deleteButton = event.currentTarget;
    const slot = deleteButton.closest("li");
    const characterImg = slot.querySelector("img");

    deleteButton.remove();
    characterImg.remove();

    updateCounterAndProgress(-1);
    updateInteractivityOfLists();
    updateCompletenessOfTeam();
}

function updateCounterAndProgress(delta) {
    progress.value = progress.value + 1;

    const currentCount = teamCounter.textContent;
    const newCount = currentCount - delta;
    teamCounter.textContent = newCount;
}

function checkInteractivityChrachterList() {
    const emptySlot = teamList.querySelector("li:empty");

    //niet leeg
    if (emptySlot) {
        characterButtons.forEach(characterButton => {
            characterButton.disabled = false;
        });
    }

    //wel compleet
    else {
        characterButtons.forEach(characterButton => {
            characterButton.disabled = true;
        });
    }
}


function checkCompletenessTeam() {
    const openSLot = teamList.querySelector("li:empty");

    if (openSLot) {
        teamList.classList.remove("is-complete");
    }
    else {
        teamList.classList.add("is-complete");
    }
}