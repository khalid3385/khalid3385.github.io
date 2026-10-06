const weerUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.08&longitude=4.31&current=temperature_2m,wind_speed_10m&timezone=Europe%2FAmsterdam";

const weerLijst = document.querySelector("#weer-gegevens");
const weerStatus = document.querySelector("#weer-status");

async function haalWeerOp(){
    const response = await fetch(weerUrl);
    const data = await response.json();
    return data;
}

function toonWeer(data){
    weerLijst.innerHTML = "";

    const temperatuurElement = document.createElement("li");
    temperatuurElement.textContent = `Temperatuur: ${data.current.temperature_2m} ${data.current_units.temperature_2m}`;

    const windElement = document.createElement("li");
    windElement.textContent = `Windsnelheid: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`;

    weerLijst.appendChild(temperatuurElement);
    weerLijst.appendChild(windElement);
}

function toonStatus(melding){
    weerStatus.textContent = melding;
}

async function laadWeer(){
    toonStatus("Weer laden…");

    try {
        const data = await haalWeerOp();
        toonWeer(data);
        toonStatus("");
    } catch (error) {
        toonStatus("Het weer kon niet worden opgehaald. Probeer het later opnieuw.");
    }
}

laadWeer();