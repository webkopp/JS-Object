// THIS -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// THIS Blog -> https://blog.codeanalogies.com/2018/03/12/javascripts-this-explained-by-starting-a-high-school-band/

// - Lernziel: Verstehen und Anwenden von [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) in Javascript.
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Ergänze das fehlende this, damit der Code funktioniert.
// - Verwende dann console.log(person.fullName())

let person = {
    vorname: "Anton",
    nachname: "Fish",
    fullName: function () {
        return this.vorname + " " + this.nachname
    }
}

console.log(person.fullName())