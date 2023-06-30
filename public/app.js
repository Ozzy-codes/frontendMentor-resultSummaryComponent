const summary_items = document.querySelector("#summary_items")

fetch("data.json")
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse)
    jsonResponse.forEach((object) => {
      const summarySection = document.createElement("div")
      const sectionImg = document.createElement("img")
      const sectionTitle = document.createElement("div")
      const sectionScore = document.createElement("div")
      const scoreTotal = document.createElement("span")

      summarySection.setAttribute(
        "class",
        `taskScore background${object.category}`
      )
      summary_items.appendChild(summarySection)
      sectionImg.setAttribute("src", `${object.icon}`)
      sectionImg.setAttribute("alt", `${object.icon_alt}`)
      summarySection.appendChild(sectionImg)
      sectionTitle.setAttribute("class", `color${object.category}`)
      sectionTitle.textContent = object.category
      summarySection.appendChild(sectionTitle)
      sectionScore.textContent = object.score
      summarySection.appendChild(sectionScore)
      scoreTotal.textContent = " / 100"
      sectionScore.appendChild(scoreTotal)
    })
  })
  .catch((error) => console.error("error:", error))
