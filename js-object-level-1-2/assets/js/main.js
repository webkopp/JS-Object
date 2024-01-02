// - Lernziel: Objects in JavaScript verstehen.
// - In dieser Übung werden wir [Objects](https://wiki.selfhtml.org/wiki/JavaScript/Objekte%5F-%5FEigenschaften%5Fund%5FMethoden) kennenlernen.
// - Erstelle ein Object und speichere es in einer Variable namens person.
// - Deklariere die Eigenschaft name mit dem Wert deines Namens.
// - Deklariere die Eigenschaft alter mit dem Wert deines Alters.
// - Deklariere eine Function sagNameAlter im Object.
// - Nutze den Befehl alert() im Funktionskörper um name & alter anzuzeigen.
// - Gib in der Konsole name und alter aus.
// - Rufe die Function sagNameAlter aus dem Object auf.

const person = {
    name: "Mickey",
    alter: 3,
	sagNameAlter: () => {
		alert("Hallo, mein Name ist " + person.name + " und ich bin " + person.alter + " Jahre alt.")
	}
}

console.log(person.name)
console.log(person.alter)
console.log(person.name, person.alter)

person.sagNameAlter()