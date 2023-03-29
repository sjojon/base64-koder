let str = '';
let base64 = '';
let coded = '';
let decoded = '';
let output = '';

function View() {
    document.getElementById('app1').innerHTML = /*html*/`
            <div>Skriv inn det du skal kode her:</div>
            <input type="text" oninput="str = this.value"><br>
            <button onclick="convert()">Gjøre om til Base64</button><br>
            <div id="output">${coded}<br></div>
            `;
}
View();

function convert() {
    let base64 = btoa(str);
    coded = base64;
    View();
}

// Decoder


function updateView() {
    document.getElementById('app2').innerHTML = /*html*/`
            <div>Kopier tegnene du fikk over, inn her:</div>
            <input type="text" oninput="base64 = this.value"><br>
            <button onclick="convertBack()">Tilbake til tekst</button><br>
            <div id="output">${output}</div>
            `;
}
updateView();

function convertBack() {
    let decoded = atob(base64);
    output = decoded;
    updateView();
}
