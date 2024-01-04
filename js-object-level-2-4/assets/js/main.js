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

const table = document.createElement("table")
const thead = table.createTHead()
const tbody = table.createTBody()
const headerRow = thead.insertRow()

Object.keys(singers[0]).forEach((key) => {
  const th = document.createElement("th")
  th.textContent = key.charAt(0).toUpperCase() + key.slice(1)
  headerRow.appendChild(th)
});

singers.forEach((singer) => {
  const row = tbody.insertRow()
  for (const key in singer) {
    const cell = row.insertCell()
    if (key === "period_active") {
      const periodActive = singer[key]
      const periodString = `${periodActive.start} - ${periodActive.end}`
      cell.textContent = periodString
    } else {
      cell.textContent = singer[key]
    }
  }
});

const tableContainer = document.getElementById("table-container")
tableContainer.appendChild(table)

// Sortierfunktion
const createSortButton = (text, onClick) => {
  const button = document.createElement("button")
  button.textContent = text
  let ascending = true

  button.addEventListener("click", () => {
    ascending = !ascending
    onClick(ascending)
  })

  return button
};

const sortByName = (ascending) => {
  singers.sort((a, b) =>
    ascending ? (a.name < b.name ? -1 : 1) : b.name < a.name ? -1 : 1
  )
  renderTable()
}

const sortByCountry = (ascending) => {
  singers.sort((a, b) =>
    ascending
      ? a.country < b.country
        ? -1
        : 1
      : b.country < a.country
      ? -1
      : 1
  )
  renderTable()
};

const sortByPeriodActive = (ascending) => {
  singers.sort((a, b) =>
    ascending
      ? a.period_active.start - b.period_active.start
      : b.period_active.start - a.period_active.start
  )
  renderTable()
};

const sortByGenre = (ascending) => {
  singers.sort((a, b) =>
    ascending ? (a.genre < b.genre ? -1 : 1) : b.genre < a.genre ? -1 : 1
  )
  renderTable()
}

const renderTable = () => {
  tbody.innerHTML = ""; // Löscht den aktuellen Table-Inhalt

  singers.forEach((singer) => {
    const row = tbody.insertRow()
    for (const key in singer) {
      const cell = row.insertCell()
      if (key === "period_active") {
        const periodActive = singer[key]
        const periodString = `${periodActive.start} - ${periodActive.end}`
        cell.textContent = periodString
      } else {
        cell.textContent = singer[key]
      }
    }
  })
}

const sortingButtonsContainer = document.createElement("div")
sortingButtonsContainer.appendChild(
  createSortButton("Sort by Name", sortByName)
)
sortingButtonsContainer.appendChild(
  createSortButton("Sort by Country", sortByCountry)
)
sortingButtonsContainer.appendChild(
  createSortButton("Sort by Period Active", sortByPeriodActive)
)
sortingButtonsContainer.appendChild(
  createSortButton("Sort by Genre", sortByGenre)
)

tableContainer.appendChild(sortingButtonsContainer)