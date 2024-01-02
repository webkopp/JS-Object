// - In dieser Übung lernen wir, wie man auf die Objekte zugreift.
// - Verwende den Code aus dem Kommentarbereich.
// - Füge zu dem Objekt Deine Lieblingsmusik hinzu.
// - Greife mit console.log auf die Werte dieses Objekts zu:
// - "The Beatles"
// - Von Pink Floyd: "Download"
// - Von Pink Floyd: true
// - 1971 und 1983
// - Von Metallica: "MC"
// - Von Metallica das Wort: "Ride"
// - Von Led Zeppelin das Wort: "IV"
// - Von Pink Floyd das Wort: "Floyd"

let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
]

myMusic.push({kunstler: "Johnny Cash", title: "Hurt", release_jahr: 2002, formate:["LP", "CD", "MC", "Download"], gold: true})
console.log(myMusic)

console.log(myMusic[0].kunstler)
console.log(myMusic[1].formate[3])
console.log(myMusic[1].gold)
console.log(`${myMusic[2].release_jahr} und ${myMusic[3].release_jahr}`)
console.log(myMusic[3].formate[2])
console.log(myMusic[3].title.slice(17, 22))
console.log(myMusic[2].title.slice(-2))
console.log(myMusic[1].kunstler.slice(-5))