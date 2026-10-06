function geefFoutmelding(veld){
    if (veld.validity.valueMissing || veld.value.trim() === "" ) {
        return "vul het veld in"
    }

    if (veld.validity.typeMismatch)  {
        return "vul een geldige email in"
    }
    return ""
}

function toonFout(veld, foutElement, melding){
    foutElement.textContent = melding;

    if (melding === "") {
        veld.setAttribute("aria-invalid", "false");
    } else {
        veld.setAttribute("aria-invalid", "true");
    }
}

const formulier = document.querySelector("#contact-formulier");

const naamVeld = document.querySelector("#naam");
const emailVeld = document.querySelector("#email");
const nummerVeld = document.querySelector("#nummer");

const naamFout = document.querySelector("#naam-fout");
const emailFout = document.querySelector("#email-fout");
const nummerFout = document.querySelector("#nummer-fout");

const bevestiging = document.querySelector("#bevestiging");

const velden = [
    { veld: naamVeld, foutElement: naamFout },
    { veld: emailVeld, foutElement: emailFout },
    { veld: nummerVeld, foutElement: nummerFout }
];

function valideerFormulier(){
    let formulierGeldig = true;

    velden.forEach(function(item){
        const melding = geefFoutmelding(item.veld);
        toonFout(item.veld, item.foutElement, melding);

        if (melding !== "") {
            formulierGeldig = false;
        }
    });

    return formulierGeldig;
}

formulier.addEventListener("submit", function(event){
    event.preventDefault();

    const formulierGeldig = valideerFormulier();

    if (formulierGeldig) {
        bevestiging.textContent = "Bedankt, je bericht is verstuurd.";
        formulier.reset();
    } else {
        bevestiging.textContent = "";
    }
});