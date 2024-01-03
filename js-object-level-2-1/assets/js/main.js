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