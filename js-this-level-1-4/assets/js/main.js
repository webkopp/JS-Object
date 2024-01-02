// - Lernziel: Verstehen und Anwenden von [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) in Javascript.
// - Nutze den vorgegebenen Code (siehe Code-Snippet).
// - Was wird dir angezeigt, wenn du mit this fahrrad(), obj1.fahrrad() und obj2.fahrrad() aufrufst?

function fahrrad() {
    console.log(this.name);
}

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };