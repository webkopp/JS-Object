// - Lernziel: Zugriff auf Objekte mit Hilfe von forEach und/oder map.
// - Verwende den vorgegebenen Code (siehe Code-Snippet).
// - Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
// - Schreibe eine Function für das Objekt, die in der Konsole Folgendes ausgibt:  name  coop  city  emails

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
]
console.log(studentData)

studentData.forEach((el) => {
    console.log(el.name)
    console.log(el.coop)
    console.log(el.address.city)
    console.log(el.emails)
})