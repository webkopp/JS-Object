// - Lernziel: Erkennen der Unterschiede in der Anwendung von map() und forEach() für den gleichen Anwendungsfall.
// - Greife auf die Objekte im Array mithilfe von map(), forEach(), und filter() zu und gebe Schritt für Schritt die Anweisungen in der Konsole aus.
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
// - Verwende map() und greife auf alle name zu.
// - Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese in ein neues Array.
// - Verwende map() und greife auf alle preiseGramEuro zu.
// - Verwende forEach() und greife auf alle veraenderung zu und pushe diese in ein neues Array.
// - Verwende map() und greife auf alle veraenderung zu.
// - Verwende filter() und greife auf preiseGramEuro, die teurer als 50 Euro sind, zu.
// - Was fällt auf, wenn du beide Methoden vergleichst und auf push() verzichtest?
// - Gib alles als Tabelle in deinem HTML-Dokument aus.

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
]

// verwende forEach() und greife auf alle Namen zu + push in neues Array
let namesArray = []
    edelMetallPreise.forEach((metall) => {
    namesArray.push(metall.name)
})
console.log(namesArray)

// verwende map() und greife auf alle Namen zu
let namesMap = edelMetallPreise.map((metall) => metall.name)
console.log(namesMap)

// verwende forEach() und greife auf alle preise/gram zu + push in neues Array
let priceArray = []
    edelMetallPreise.forEach((preis) => {
    priceArray.push(preis.preiseGramEuro)
})
console.log(priceArray)

// verwende map() und greife auf alle preise/gram zu
let priceMap = edelMetallPreise.map((preis) => preis.preiseGramEuro)
console.log(priceMap)

// verwende forEach() und greife auf alle veraenderungen zu + push in neues Array
let changeArray = []
    edelMetallPreise.forEach((anders) => {
    changeArray.push(anders.veraenderung)
})
console.log(changeArray)

// verwende map() und greife auf alle veraenderungen zu
let changeMap = edelMetallPreise.map((anders) => anders.veraenderung)
console.log(changeMap)

// verwende filter() und greife auf preise/gram um die die teurer als 50Euro sind zu filtern
let highPrices = edelMetallPreise.filter((preis) => preis.preiseGramEuro > 50)
console.log(highPrices)


// gib alles als Tabelle im HTML aus
let table = document.getElementById("table")
for (let metall of edelMetallPreise) {
    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    td1.textContent = metall.name
    tr.appendChild(td1)

    let td2 = document.createElement("td")
    td2.textContent = metall.preiseGramEuro
    tr.appendChild(td2)

    let td3 = document.createElement("td")
    td3.textContent = metall.veraenderung
    tr.appendChild(td3)

    table.appendChild(tr)
}

// versionTest1
// edelMetallPreise.forEach((metall) => {
//     document.write(`<tr><td>${metall.name}</td><td>${metall.preiseGramEuro}</td><td>${metall.veraenderung}</td></tr>`)
// })


// version2
// document.write("<center><table border='2' width='50%'>");
// document.write(`<tr>`);
// document.write("<td>" + "Name" + "</td>" + "<td>" + "PreisGramEuro" + "</td>"+"<td>" + "Veränderung" + "</td>")
// document.write("</tr>");
// document.write("<tr>");
// for(let i = 0; i < mapName.length; i++){
//     document.write("<td>" + mapName[i] + "</td>")
//     document.write("<td>" + mapPrice[i] + "</td>")
//     document.write("<td>" + mapChanges[i] + "</td>")
//     document.write("</tr>")
// }
// document.write("</table></center>");

// version3
// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

// document.querySelector('body').appendChild(table);

// table.appendChild(thead);
// table.appendChild(tbody);

// let row_1 = document.createElement('tr')
// let heading_1 = document.createElement('th')
// heading_1.innerHTML = 'name'
// let heading_2 = document.createElement('th')
// heading_2.innerHTML = 'preiseGramEuro'
// let heading_3 = document.createElement('th')
// heading_3.innerHTML = 'veraenderung'


// row_1.appendChild(heading_1);
// row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);
// tbody.appendChild(row_1);


// for (let i = 0; i<mapName.length; i++){
//     let rowStart = document.createElement('tr')
//     rowStart.innerHTML = `<th>${mapName[i]}</th> <th>${mapPrice[i]}</th> <th>${mapChanges[i]}</th> `
//     tbody.appendChild(rowStart)
// }