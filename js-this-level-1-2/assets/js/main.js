// THIS -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// THIS Blog -> https://blog.codeanalogies.com/2018/03/12/javascripts-this-explained-by-starting-a-high-school-band/

// - Lernziel: Verstehen und Anwenden von [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) in Javascript.
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Baue in der Function profil deines Objektes ein hübsch formatiertes Profil der Person aus.
// - Validiere dein HTML auf Korrektheit.

let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function () {
        return this...;
}
};
//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
document.getElementById("person").innerHTML = person.profil();