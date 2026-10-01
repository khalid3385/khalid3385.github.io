const projecten = [
    {
        titel: "Challenge",
        beschrijving: "gezondheid app (cal berekenen)",
        categorie: "schoolopdracht",
    },
    
    {
        titel: "jaar 1 einde",
        beschrijving: "Escape room spel",
        categorie: "schoolopdracht"
    },
    
    {
        titel: "jaar 2 einde",
        beschrijving: "Bloemen veiling website",
        categorie: "schoolopdracht"

    },

    {
        titel: "Eigen project (RepBase)",
        beschrijving: "Gym app voor krachttraining behouden",
        categorie: "eigen project"
    },
];

const lijst = document.querySelector("#projecten-lijst");
const filter = document.querySelector("#categorie-filter");

function renderProjecten(item){

    lijst.innerHTML = "";

item.forEach((project) => {

    const projectitem = document.createElement("li");

    const titelElement = document.createElement("h3");
    titelElement.textContent = project.titel;

    const beschrijvingElement = document.createElement("p");
    beschrijvingElement.textContent = project.beschrijving;

    const categorieElement = document.createElement("p");
    categorieElement.textContent = project.categorie;

    projectitem.appendChild(titelElement);
    projectitem.appendChild(beschrijvingElement);
    projectitem.appendChild(categorieElement);

    lijst.appendChild(projectitem);

    });
}

filter.addEventListener ("change", (event) =>{
    const gekozenCategorie = event.target.value;
    if (gekozenCategorie === "alle"){
        renderProjecten(projecten);
    } else {
        const gefilterdeProjecten = projecten.filter((project) => project.categorie === gekozenCategorie)
        renderProjecten(gefilterdeProjecten)
    }
});

renderProjecten(projecten);