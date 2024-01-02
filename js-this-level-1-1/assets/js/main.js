// - Lernziel: Verstehen und Anwenden von [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) in Javascript.
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Ergänze das fehlende this, damit der Code funktioniert.
// - Verwende dann console.log(person.fullName())

let person = {
    vorname: "Anton",
    nachname: "Fish",
    fullName: function () {
        return vorname + " " + nachname;
    }
}