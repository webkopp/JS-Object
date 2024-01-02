// - Lernziel: Zugriff auf Objekte mit Hilfe von [forEach().](https://www.w3schools.com/jsref/jsref%5Fforeach.asp)
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach() im HTML aus:  Alle "artist"  Alle "title"  Alle "medium"
// # ✨ Bonus
// - Gib alle “release\_year” älter als 1975 aus.

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
]

myMusic.forEach((music) => {
    if (music.release_year < 1975) {
    document.write( `${music.artist} <br/> ${music.title} <br/> ${music.medium} <br/> <br/>` )
    } else {
        document.write( `${music.artist} <br/> ${music.title} <br/> ${music.medium} <br/> ${music.release_year} <br/> <br/>` )
    }
    }
)