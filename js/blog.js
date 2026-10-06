const blogposts = [
    {
        titel: "Over mijn projecten",
        tekst: "Tijdens mijn opleiding heb ik verschillende projecten gemaakt. De eerste drie projecten waren voor school: een gezondheidsapp waarmee je calorieën kunt berekenen, een escape room-spel en een website voor een bloemenveiling. Daarnaast heb ik voor mezelf een eigen project gemaakt genaamd RepBase, een gym-app gericht op krachttraining en het bijhouden van trainingen."
    },

    {
        titel: "Wat ik heb geleerd",
        tekst: "Tijdens deze projecten heb ik veel geleerd over het ontwikkelen van websites en apps. Ik heb geleerd hoe ik AI op een goede en effectieve manier kan toepassen, hoe ik een duidelijke website- en projectstructuur opbouw en hoe ik websites online kan publiceren. Daarnaast heb ik door verschillende projecten meer ervaring gekregen met het zelfstandig uitwerken en verbeteren van mijn ideeën."
    },
];

const lijst = document.querySelector("#blog-lijst");

function renderBlog(items){
    lijst.innerHTML = "";

    items.forEach((post, index) => {
        const blogitem = document.createElement("li");

        const titelElement = document.createElement("h3");

        const knop = document.createElement("button");
        knop.textContent = post.titel;
        knop.classList.add("blog-knop");
        knop.setAttribute("aria-expanded", "false");
        knop.setAttribute("aria-controls", `blog-tekst-${index}`);

        const tekstElement = document.createElement("p");
        tekstElement.textContent = post.tekst;
        tekstElement.id = `blog-tekst-${index}`;
        tekstElement.hidden = true;

        titelElement.appendChild(knop);
        blogitem.appendChild(titelElement);
        blogitem.appendChild(tekstElement);

        lijst.appendChild(blogitem);
    });
}

function isOpen(knop){
    return knop.getAttribute("aria-expanded") === "true";
}

function zetOpen(knop, open){
    const tekstId = knop.getAttribute("aria-controls");
    const tekstElement = document.getElementById(tekstId);

    tekstElement.hidden = !open;
    knop.setAttribute("aria-expanded", open ? "true" : "false");
}

renderBlog(blogposts);

const knoppen = document.querySelectorAll(".blog-knop");

knoppen.forEach((knop) => {
    knop.addEventListener("click", () => {
        zetOpen(knop, !isOpen(knop));
    });
});