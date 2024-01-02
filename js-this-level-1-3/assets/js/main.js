// - Lernziel: Verstehen und Anwenden von [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) in Javascript.
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Ergänze an den korrekten Stellen this, damit der Code funktioniert.
// - Lies über JavaScript [call()](https://www.w3schools.com/js/js%5Ffunction%5Fcall.asp) nach, falls du nicht weiterkommst.

let personFunction = {
    fullName: function () {
        return vorname + " " + nachname;
    }
};
let personObjekt = {
    vorname: "Anton",
    nachname: "Fish"
};

let anzeigeImHTMLDokument = `<p>${personFunction.fullName.call(personObjekt)}</p>`;
document.getElementById("person").innerHTML = anzeigeImHTMLDokument;