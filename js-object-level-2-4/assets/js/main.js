// - Du hast eine Sammlung deiner Lieblingsbands. Nun möchtest du die Möglichkeit haben nach dem Namen, dem Land oder die Art der Musik in einer Tabelle zu sortieren.
// - Verwende den vorgegebenen Code (siehe Code Snippet)
// - Erstelle eine Tabelle, Buttons und sortiere mit JS.
// - Zeige die Tabelle in HTML an.

// # ☝🏼 Hinweis
// - Assets:  arrow function  forEach  onclick  sort  return

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
]

// Erstelle die Tabelle
function createTable(data) {
  let table = document.createElement("table")
  let header = table.createTHead()
  let headerRow = header.insertRow()

  // Fülle den Tabellenkopf mit den Spaltennamen
  for (let key in data[0]) {
    let headerCell = headerRow.insertCell();
    headerCell.textContent = key
    headerCell.addEventListener("click", function() {
      // Sortiere die Tabelle nach der angeklickten Spalte
      sortTable(key)
    })
  }

  // Fülle die Tabelle mit Daten
  data.forEach(function(item) {
    let row = table.insertRow()
    for (let key in item) {
      let cell = row.insertCell()
      cell.textContent = item[key]
    }
  });

  document.body.appendChild(table)
}

// Sortiere die Tabelle nach einer bestimmten Spalte
function sortTable(column) {
  singers.sort((a, b) => a[column].localeCompare(b[column]))
  // Entferne die vorhandene Tabelle
  document.body.removeChild(document.querySelector("table"))
  // Erstelle die Tabelle erneut mit den sortierten Daten
  createTable(singers)
}

// Erstelle Buttons für jede Spalte
function createSortButtons() {
  let buttonsContainer = document.createElement("div")

  for (let key in singers[0]) {
    let button = document.createElement("button")
    button.textContent = key
    button.addEventListener("click", function() {
      sortTable(key)
    })
    buttonsContainer.appendChild(button)
  }

  document.body.appendChild(buttonsContainer)
}

// Erstelle die Tabelle und Buttons beim Laden der Seite
window.onload = function() {
  createSortButtons()
  createTable(singers)
}

// version2
// const table = document.createElement("table")
// const thead = table.createTHead()
// const tbody = table.createTBody()
// const headerRow = thead.insertRow()

// Object.keys(singers[0]).forEach((key) => {
//   const th = document.createElement("th")
//   th.textContent = key.charAt(0).toUpperCase() + key.slice(1)
//   headerRow.appendChild(th)
// });

// singers.forEach((singer) => {
//   const row = tbody.insertRow()
//   for (const key in singer) {
//     const cell = row.insertCell()
//     if (key === "period_active") {
//       const periodActive = singer[key]
//       const periodString = `${periodActive.start} - ${periodActive.end}`
//       cell.textContent = periodString
//     } else {
//       cell.textContent = singer[key]
//     }
//   }
// });

// const tableContainer = document.getElementById("table-container")
// tableContainer.appendChild(table)

// // Sortierfunktion
// const createSortButton = (text, onClick) => {
//   const button = document.createElement("button")
//   button.textContent = text
//   let ascending = true

//   button.addEventListener("click", () => {
//     ascending = !ascending
//     onClick(ascending)
//   })

//   return button
// };

// const sortByName = (ascending) => {
//   singers.sort((a, b) =>
//     ascending ? (a.name < b.name ? -1 : 1) : b.name < a.name ? -1 : 1
//   )
//   renderTable()
// }

// const sortByCountry = (ascending) => {
//   singers.sort((a, b) =>
//     ascending
//       ? a.country < b.country
//         ? -1
//         : 1
//       : b.country < a.country
//       ? -1
//       : 1
//   )
//   renderTable()
// };

// const sortByPeriodActive = (ascending) => {
//   singers.sort((a, b) =>
//     ascending
//       ? a.period_active.start - b.period_active.start
//       : b.period_active.start - a.period_active.start
//   )
//   renderTable()
// };

// const sortByGenre = (ascending) => {
//   singers.sort((a, b) =>
//     ascending ? (a.genre < b.genre ? -1 : 1) : b.genre < a.genre ? -1 : 1
//   )
//   renderTable()
// }

// const renderTable = () => {
//   tbody.innerHTML = ""; // Löscht den aktuellen Table-Inhalt

//   singers.forEach((singer) => {
//     const row = tbody.insertRow()
//     for (const key in singer) {
//       const cell = row.insertCell()
//       if (key === "period_active") {
//         const periodActive = singer[key]
//         const periodString = `${periodActive.start} - ${periodActive.end}`
//         cell.textContent = periodString
//       } else {
//         cell.textContent = singer[key]
//       }
//     }
//   })
// }

// const sortingButtonsContainer = document.createElement("div")
// sortingButtonsContainer.appendChild(
//   createSortButton("Sort by Name", sortByName)
// )
// sortingButtonsContainer.appendChild(
//   createSortButton("Sort by Country", sortByCountry)
// )
// sortingButtonsContainer.appendChild(
//   createSortButton("Sort by Period Active", sortByPeriodActive)
// )
// sortingButtonsContainer.appendChild(
//   createSortButton("Sort by Genre", sortByGenre)
// )

// tableContainer.appendChild(sortingButtonsContainer)