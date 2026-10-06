const blogposts = [
    {
        id: "over-projecten",
        titel: "Over mijn projecten",
        tekst: "Tijdens mijn opleiding heb ik verschillende projecten gemaakt. De eerste drie projecten waren voor school: een gezondheidsapp waarmee je calorieën kunt berekenen, een escape room-spel en een website voor een bloemenveiling. Daarnaast heb ik voor mezelf een eigen project gemaakt genaamd RepBase, een gym-app gericht op krachttraining en het bijhouden van trainingen."
    },

    {
        id: "geleerd",
        titel: "Wat ik heb geleerd",
        tekst: "Tijdens deze projecten heb ik veel geleerd over het ontwikkelen van websites en apps. Ik heb geleerd hoe ik AI op een goede en effectieve manier kan toepassen, hoe ik een duidelijke website- en projectstructuur opbouw en hoe ik websites online kan publiceren. Daarnaast heb ik door verschillende projecten meer ervaring gekregen met het zelfstandig uitwerken en verbeteren van mijn ideeën."
    },
];

const lijst = document.querySelector("#blog-lijst");

function isOpen(tekstElement){
    return tekstElement.style.display !== "none";
}

function zetOpen(knop, tekstElement, open){
    if (open) {
        tekstElement.style.display = "block";
        knop.setAttribute("aria-expanded", "true");
    } else {
        tekstElement.style.display = "none";
        knop.setAttribute("aria-expanded", "false");
    }
}

function renderBlog(items){
    lijst.innerHTML = "";

    items.forEach((post) => {
        const blogitem = document.createElement("li");

        const titelElement = document.createElement("h3");

        const knop = document.createElement("button");
        knop.textContent = post.titel;
        knop.setAttribute("aria-controls", `${post.id}-tekst`);

        const tekstElement = document.createElement("p");
        tekstElement.textContent = post.tekst;
        tekstElement.setAttribute("id", `${post.id}-tekst`);

        zetOpen(knop, tekstElement, false);

        knop.addEventListener("click", () => {
            zetOpen(knop, tekstElement, !isOpen(tekstElement));
        });

        titelElement.appendChild(knop);
        blogitem.appendChild(titelElement);
        blogitem.appendChild(tekstElement);

        lijst.appendChild(blogitem);
    });
}

renderBlog(blogposts);